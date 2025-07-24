import React, { useEffect, useRef, useCallback } from "react";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import type { Viewer } from "photo-sphere-viewer";
import type {
  MarkersPlugin,
  Marker,
} from "photo-sphere-viewer/dist/plugins/markers";

export type Hotspot = {
  x: number;
  y: number;
  target: number;
  label: string;
  targetBuilding?: string;
};

type Props = {
  image: string;
  height?: number;
  hotspots?: Hotspot[];
  onHotspotClick?: (hotspot: Hotspot) => void;
};

const VirtualTour360: React.FC<Props> = ({
  image,
  height = 400,
  hotspots = [],
  onHotspotClick,
}) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const psvInstance = useRef<Viewer | null>(null);
  const markersPluginRef = useRef<MarkersPlugin | null>(null);

  const updateMarkers = useCallback(() => {
    const plugin = markersPluginRef.current;
    if (!plugin) return;

    plugin.setMarkers(
      hotspots.map((hotspot, i) => ({
        id: `hotspot-${i}`,
        longitude: hotspot.x * 2 * Math.PI,
        latitude: (hotspot.y - 0.5) * Math.PI,
        html: `<div style="
                font-size:2rem;
                color:#68da51;
                cursor:pointer;
                text-shadow:0 0 10px rgba(104,218,81,0.8);
              ">➔</div>`,
        tooltip: hotspot.label,
        data: { hotspot },
        width: 32,
        height: 32,
        anchor: "bottom center",
      }))
    );
  }, [hotspots]);

  useEffect(() => {
    let isMounted = true;

    Promise.all([
      import("photo-sphere-viewer"),
      import("photo-sphere-viewer/dist/plugins/markers"),
    ]).then(([PSV, Markers]) => {
      if (!isMounted || !viewerRef.current) return;

      psvInstance.current = new PSV.Viewer({
        container: viewerRef.current,
        panorama: image,
        navbar: "zoom move fullscreen",
        defaultLong: Math.PI,
        plugins: [Markers.MarkersPlugin],
      });

      // normalize undefined to null
      const plugin: MarkersPlugin | null =
        psvInstance.current.getPlugin(Markers.MarkersPlugin) ?? null;
      markersPluginRef.current = plugin;

      if (plugin && hotspots.length > 0) {
        updateMarkers();
      }

      if (plugin) {
        plugin.on("select-marker", (_e: unknown, marker: Marker) => {
          if (marker.data?.hotspot && onHotspotClick) {
            onHotspotClick(marker.data.hotspot);
          }
        });
      }
    });

    return () => {
      isMounted = false;
      psvInstance.current?.destroy();
      psvInstance.current = null;
      markersPluginRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const plugin = markersPluginRef.current;
    if (psvInstance.current) {
      psvInstance.current.setPanorama(image, {
        transition: 1000,
      });
    }
    if (plugin) {
      updateMarkers();
    }
  }, [image, updateMarkers]);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "100%",
        height,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      }}
    />
  );
};

export default VirtualTour360;
