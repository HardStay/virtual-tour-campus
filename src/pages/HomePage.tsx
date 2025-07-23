import { useNavigate } from "react-router-dom";
import gedungA from "../assets/fotoGedung/Gedung A.jpg";
import gedungB from "../assets/fotoGedung/Gedung B(1).jpg";
import gedungC from "../assets/fotoGedung/Gedung C.jpg";
import danauFEB from "../assets/fotoGedung/Danau FEB.jpg";
import parkiran from "../assets/fotoGedung/Parkiran Motor.jpg";
import tulisanFEB from "../assets/fotoGedung/Tulisan FEB .jpg";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const buildings = [
  { name: "Gedung A", image: gedungA },
  { name: "Gedung B", image: gedungB },
  { name: "Gedung C", image: gedungC },
];

const baseImages = [
  { src: danauFEB, title: "Fasilitas" },
  { src: parkiran, title: "Parkiran" },
  { src: tulisanFEB, title: "Tulisan FEB" },
];

// Duplicate the array to enable true loop with 3 unique images
const carouselImages = [...baseImages, ...baseImages];

export default function HomePage() {
  const navigate = useNavigate();

  const handleBuildingClick = (name: string) => {
    // Navigate to building detail page
    navigate(`/building/${name.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "2rem" }}>
      {/* Swiper Carousel */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: 1100 }}>
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            navigation
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 2,
              slideShadows: false,
            }}
            centeredSlides={true}
            slidesPerView={2.2}
            loop={true}
            style={{ paddingBottom: 40 }}
          >
            {carouselImages.map((img, idx) => (
              <SwiperSlide
                key={idx}
                style={{
                  width: 300,
                  maxWidth: "90vw",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="carousel-card">
                  <img src={img.src} alt={img.title} />
                  <div className="carousel-card-title">{img.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Building Cards */}
      <h1 style={{ marginTop: "2rem" }}>Our Buildings</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {buildings.map((building) => (
          <div
            key={building.name}
            onClick={() => handleBuildingClick(building.name)}
            style={{
              cursor: "pointer",
              background: "rgba(255,255,255,0.85)",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(104,218,81,0.10)",
              padding: "1.5rem",
              width: 180,
              transition: "transform 0.15s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={building.image}
              alt={building.name}
              style={{ width: 80, marginBottom: "1rem" }}
            />
            <h2 style={{ margin: 0 }}>{building.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
