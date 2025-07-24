import { useParams, useNavigate } from "react-router-dom";
import { buildingContent } from "../components/buildingContent";
import "../BuildingDetail.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useState } from "react";

export default function BuildingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoOpen, setVideoOpen] = useState(false);

  // Find the building by id (e.g., 'gedung-a')
  const building = buildingContent.find(
    (b) => b.name.toLowerCase().replace(/ /g, "-") === id
  );

  if (!building) return <div>Building not found</div>;

  const buildingId = id;

  return (
    <div className="building-detail" style={{ background: "none" }}>
      {/* Header Image with Overlay */}
      <div className="header-image">
        <img src={building.headerImg} alt={building.name} />
        <div className="header-title">{building.name}</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <h2>About :</h2>
        <p>{building.about}</p>
      </section>

      {/* Swiper Gallery Section */}
      <section className="gallery-section">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: 1100 }}>
            <Swiper
              modules={[Navigation, EffectCoverflow]}
              navigation
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2,
                slideShadows: false,
              }}
              centeredSlides={true}
              slidesPerView={2.2}
              loop={true}
              style={{ paddingBottom: 30 }}
            >
              {building.spaces.map((space, idx) => (
                <SwiperSlide
                  key={space.name + idx}
                  style={{
                    width: 400,
                    height: 250,
                    maxWidth: "95vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="gallery-card"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <img
                      src={space.img}
                      alt={space.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="gallery-label">{space.name}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features-section">
        <div
          className="feature-card"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/building/${buildingId}/virtual-tour`)}
        >
          <img src={building.virtualTourImages[0].src} alt="Virtual Tour" />
          <div className="feature-label">Virtual Tour</div>
        </div>
        {/* Only show video if available */}
        {building.videoPanduan && building.videoPanduan !== "" && (
          <div
            className="feature-card"
            style={{ cursor: "pointer", position: "relative" }}
            onClick={() => setVideoOpen(true)}
          >
            {/* Always show a static thumbnail with play icon overlay */}
            <img
              src={building.headerImg}
              alt="Video Panduan Thumbnail"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "0.5rem",
                filter: "brightness(0.7)",
              }}
            />
            {/* Play icon overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
                <polygon points="20,16 34,24 20,32" fill="#fff" />
              </svg>
            </div>
            <div className="feature-label">Video Panduan</div>
          </div>
        )}
      </section>
      {/* Video Modal Popup */}
      {videoOpen &&
        building.videoPanduan &&
        building.videoPanduan.match(/\.(mp4|mov|webm)$/i) && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={() => setVideoOpen(false)}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: 16,
                maxWidth: "90vw",
                maxHeight: "80vh",
                boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  background: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  fontSize: 20,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  zIndex: 10,
                }}
                aria-label="Close video"
              >
                ×
              </button>
              <video
                controls
                autoPlay
                style={{
                  width: "70vw",
                  maxWidth: 700,
                  maxHeight: "70vh",
                  borderRadius: 12,
                  background: "#000",
                }}
              >
                <source src={building.videoPanduan} />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
    </div>
  );
}
