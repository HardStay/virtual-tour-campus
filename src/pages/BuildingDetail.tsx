import { useParams, useNavigate } from "react-router-dom";
import { buildingContent } from "../components/buildingContent";
import "../BuildingDetail.css";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import VirtualTour360 from "../components/VirtualTour360";
import tour360Img from "../assets/foto360/Gedung B.jpg";

export default function BuildingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

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

      {/* Virtual Tour 360 Section */}
      <section className="virtualtour-section">
        <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0" }}>
          Virtual Tour 360
        </h2>
        <VirtualTour360 image={tour360Img} />
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
              {building.spaces.concat(building.spaces).map((space, idx) => (
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
        <div className="feature-card">
          <img src={building.videoPanduanImg} alt="Video Panduan" />
          <div className="feature-label">Video Panduan</div>
        </div>
      </section>
    </div>
  );
}
