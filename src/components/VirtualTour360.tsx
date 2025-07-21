import React, { useEffect, useRef } from "react";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import type { Viewer } from "photo-sphere-viewer";
import type {
  MarkersPlugin,
  Marker,
} from "photo-sphere-viewer/dist/plugins/markers";

// Hotspot type
export type Hotspot = {
  x: number; // longitude (0-1, 0=left, 1=right)
  y: number; // latitude (0-1, 0=top, 1=bottom)
  target: number; // index of the next panorama
  label: string;
};

type Props = {
  image: string;
  height?: number;
  hotspots?: Hotspot[];
  onHotspotClick?: (target: number) => void;
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

  // Initialize viewer once
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
      markersPluginRef.current =
        psvInstance.current.getPlugin(Markers.MarkersPlugin) || null;
      if (markersPluginRef.current && hotspots.length > 0) {
        markersPluginRef.current.setMarkers(
          hotspots.map((h, i) => ({
            id: `hotspot-${i}`,
            longitude: h.x * 2 * Math.PI,
            latitude: (h.y - 0.5) * Math.PI,
            image: undefined,
            html: `<div style='font-size:2rem; color:#68da51;'>➔</div>`,
            tooltip: h.label,
            data: { target: h.target },
            width: 32,
            height: 32,
            anchor: "bottom center",
          }))
        );
        markersPluginRef.current.on(
          "select-marker",
          (_e: unknown, marker: Marker) => {
            if (
              onHotspotClick &&
              marker.data &&
              typeof marker.data.target === "number"
            ) {
              onHotspotClick(marker.data.target);
            }
          }
        );
      }
    });
    return () => {
      isMounted = false;
      if (psvInstance.current) {
        psvInstance.current.destroy();
        psvInstance.current = null;
      }
      markersPluginRef.current = null;
    };
    // Only run on mount/unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update panorama and markers when image or hotspots change
  useEffect(() => {
    if (psvInstance.current) {
      psvInstance.current.setPanorama(image);
    }
    if (markersPluginRef.current) {
      markersPluginRef.current.setMarkers(
        hotspots.map((h, i) => ({
          id: `hotspot-${i}`,
          longitude: h.x * 2 * Math.PI,
          latitude: (h.y - 0.5) * Math.PI,
          image: undefined,
          html: `<div style='font-size:2rem; color:#68da51;'>➔</div>`,
          tooltip: h.label,
          data: { target: h.target },
          width: 32,
          height: 32,
          anchor: "bottom center",
        }))
      );
    }
  }, [image, hotspots]);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "100%",
        height,
        borderRadius: "16px",
        overflow: "hidden",
      }}
    />
  );
};

export default VirtualTour360;
