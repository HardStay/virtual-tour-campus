import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buildingContent } from "../components/buildingContent";
import VirtualTour360 from "../components/VirtualTour360";
import "swiper/css";

export default function VirtualTourPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const building = buildingContent.find(
    (b) => b.name.toLowerCase().replace(/ /g, "-") === id
  );
  const [current, setCurrent] = useState(0);
  if (!building) return <div>Building not found</div>;
  const images = building.virtualTourImages;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #68da51 0%, #e6f045 100%)",
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
        }}
      >
        ←
      </button>
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0" }}>
        Virtual Tour 360
      </h2>
      <div style={{ width: "100vw", maxWidth: "100vw", margin: "0 auto" }}>
        <VirtualTour360
          image={images[current].src}
          height={600}
          hotspots={images[current].hotspots}
          onHotspotClick={(target) => setCurrent(target)}
        />
        <div style={{ textAlign: "center", margin: "1rem 0" }}>
          <span style={{ fontWeight: "bold" }}>{images[current].label}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 16,
          }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.label}
              style={{
                width: 80,
                height: 50,
                objectFit: "cover",
                border:
                  idx === current ? "3px solid #68da51" : "2px solid #ccc",
                borderRadius: 8,
                cursor: "pointer",
                opacity: idx === current ? 1 : 0.7,
                transition: "border 0.2s, opacity 0.2s",
              }}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
