import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { buildingContent } from "../components/buildingContent";
import VirtualTour360 from "../components/VirtualTour360";
import "swiper/css";

// Define Hotspot type (must match VirtualTour360's interface)
interface Hotspot {
  x: number;
  y: number;
  target: number;
  label: string;
  targetBuilding?: string;
}

export default function VirtualTourPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to get img index from query param
  function getImgIndexFromQuery() {
    const params = new URLSearchParams(location.search);
    const img = params.get("img");
    return img ? parseInt(img, 10) : 0;
  }

  // Add state for current building id (slug)
  const [currentBuildingId, setCurrentBuildingId] = useState(id || "");
  const [current, setCurrent] = useState(getImgIndexFromQuery());

  // Find the building by id (slug)
  const building = buildingContent.find(
    (b) => b.name.toLowerCase().replace(/ /g, "-") === currentBuildingId
  );
  // If not found, fallback to first building
  const actualBuilding = building || buildingContent[0];
  const images = actualBuilding.virtualTourImages;

  // Sync state with URL changes
  useEffect(() => {
    if (id && id !== currentBuildingId) {
      setCurrentBuildingId(id);
      setCurrent(getImgIndexFromQuery());
    } else if (location.search) {
      setCurrent(getImgIndexFromQuery());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, location.search]);

  // Handle hotspot click for cross-building navigation
  function handleHotspotClick(hotspot: Hotspot) {
    console.log("Hotspot clicked:", hotspot);

    if (hotspot.targetBuilding) {
      // Cross-building navigation
      const targetBuilding = buildingContent.find(
        (b) => b.name === hotspot.targetBuilding
      );

      if (targetBuilding) {
        const targetSlug = targetBuilding.name.toLowerCase().replace(/ /g, "-");
        const targetImageIndex = hotspot.target || 0;

        console.log(
          `Navigating to building: ${targetSlug}, image: ${targetImageIndex}`
        );

        // Update the URL and navigate to the new building
        navigate(
          `/building/${targetSlug}/virtual-tour?img=${targetImageIndex}`,
          { replace: false }
        );

        // Update local state
        setCurrentBuildingId(targetSlug);
        setCurrent(targetImageIndex);
      } else {
        console.error("Target building not found:", hotspot.targetBuilding);
      }
    } else {
      // Internal navigation within the same building
      const targetImageIndex = hotspot.target;
      console.log(`Internal navigation to image: ${targetImageIndex}`);

      // Validate target index
      if (targetImageIndex >= 0 && targetImageIndex < images.length) {
        setCurrent(targetImageIndex);

        // Update the URL for current building
        navigate(
          `/building/${currentBuildingId}/virtual-tour?img=${targetImageIndex}`,
          { replace: true }
        );
      } else {
        console.error("Invalid target image index:", targetImageIndex);
      }
    }
  }

  // Handle thumbnail click
  function handleThumbnailClick(index: number) {
    setCurrent(index);
    navigate(`/building/${currentBuildingId}/virtual-tour?img=${index}`, {
      replace: true,
    });
  }

  if (!actualBuilding) return <div>Building not found</div>;

  // Debug log for state/prop flow
  console.log("VirtualTourPage:", {
    currentBuildingId,
    current,
    image: images[current]?.src,
    buildingName: actualBuilding.name,
    totalImages: images.length,
    hotspots: images[current]?.hotspots,
    id,
    location: location.pathname + location.search,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #68da51 0%, #e6f045 100%)",
        padding: "20px",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          zIndex: 100,
          background: "rgba(255,255,255,0.9)",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          fontSize: 24,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
        }}
        // onMouseEnter={(e) => {
        //   e.target.style.background = "rgba(255,255,255,1)";
        //   e.target.style.transform = "scale(1.1)";
        // }}
        // onMouseLeave={(e) => {
        //   e.target.style.background = "rgba(255,255,255,0.9)";
        //   e.target.style.transform = "scale(1)";
        // }}
      >
        ←
      </button>

      <h2
        style={{
          textAlign: "center",
          margin: "2rem 0 1rem 0",
          color: "#333",
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Virtual Tour 360 - {actualBuilding.name}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {images[current] && (
            <VirtualTour360
              image={images[current].src}
              height={600}
              hotspots={images[current].hotspots || []}
              onHotspotClick={handleHotspotClick}
            />
          )}
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "1rem 0" }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "#333",
            background: "rgba(255,255,255,0.8)",
            padding: "8px 16px",
            borderRadius: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          {images[current]?.label}
        </span>
      </div>

      {/* Thumbnail navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 16,
          flexWrap: "wrap",
        }}
      >
        {images.map((img, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img
              src={img.src}
              alt={img.label}
              style={{
                width: 80,
                height: 50,
                objectFit: "cover",
                border:
                  idx === current
                    ? "3px solid #fff"
                    : "2px solid rgba(255,255,255,0.5)",
                borderRadius: 8,
                cursor: "pointer",
                opacity: idx === current ? 1 : 0.7,
                transition: "all 0.3s ease",
                boxShadow:
                  idx === current
                    ? "0 4px 15px rgba(0,0,0,0.3)"
                    : "0 2px 8px rgba(0,0,0,0.1)",
              }}
              onClick={() => handleThumbnailClick(idx)}
              // onMouseEnter={(e) => {
              //   if (idx !== current) {
              //     e.target.style.opacity = "0.9";
              //     e.target.style.transform = "scale(1.05)";
              //   }
              // }}
              // onMouseLeave={(e) => {
              //   if (idx !== current) {
              //     e.target.style.opacity = "0.7";
              //     e.target.style.transform = "scale(1)";
              //   }
              // }}
            />
            {idx === current && (
              <div
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  width: 20,
                  height: 20,
                  background: "#68da51",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "bold",
                  animation: "pulse 2s infinite",
                }}
              >
                ●
              </div>
            )}

            {/* Tooltip for thumbnail */}
            <div
              style={{
                position: "absolute",
                bottom: -30,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.8)",
                color: "white",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "10px",
                whiteSpace: "nowrap",
                opacity: 0,
                pointerEvents: "none",
                transition: "opacity 0.3s ease",
                zIndex: 10,
              }}
              className="thumbnail-tooltip"
            >
              {img.label}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(104, 218, 81, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(104, 218, 81, 0); }
            100% { box-shadow: 0 0 0 0 rgba(104, 218, 81, 0); }
          }
          
          .thumbnail-tooltip:hover {
            opacity: 1 !important;
          }
        `}
      </style>
    </div>
  );
}
