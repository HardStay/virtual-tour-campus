import headerA from "../assets/fotoGedung/gedungA.jpg";
import headerB from "../assets/fotoGedung/gedungB.jpg";
import headerC from "../assets/fotoGedung/gedungC.jpg";
import spaceA1 from "../assets/fotoGedung/Danau FEB 2.jpg";
import spaceA2 from "../assets/fotoGedung/Danau FEB 3.jpg";
import spaceA3 from "../assets/fotoGedung/Danau FEB 4.jpg";
import spaceB1 from "../assets/fotoGedung/IMG_3870.jpg";
import spaceB2 from "../assets/fotoGedung/IMG_3871.jpg";
import spaceB3 from "../assets/fotoGedung/IMG_3872.jpg";
import spaceC1 from "../assets/fotoGedung/Parkiran.jpg";
import spaceC2 from "../assets/fotoGedung/IMG_3870.jpg";
import spaceC3 from "../assets/fotoGedung/IMG_3871.jpg";
import videoPanduanImg from "../assets/fotoGedung/IMG_3871.jpg";
// 360 images
import tour360A1 from "../assets/foto360/Gedung A.jpg";
import tour360A2 from "../assets/foto360/Parkiran.jpg";
import tour360B1 from "../assets/foto360/Gedung B.jpg";
import tour360B2 from "../assets/foto360/Masjid.jpg";
import tour360C1 from "../assets/foto360/Gedung C.jpg";
import tour360C2 from "../assets/foto360/Lapangan Olahraga.jpg";

export const buildingContent = [
  {
    name: "Gedung A",
    headerImg: headerA,
    about: "Gedung A adalah pusat administrasi dan ruang kelas utama.",
    spaces: [
      { name: "Danau FEB 2", img: spaceA1 },
      { name: "Danau FEB 3", img: spaceA2 },
      { name: "Danau FEB 4", img: spaceA3 },
    ],
    virtualTourImages: [
      {
        src: tour360A1,
        label: "Lobby Gedung A",
        hotspots: [{ x: 0.7, y: 0.5, target: 1, label: "Go to Parkiran" }],
      },
      {
        src: tour360A2,
        label: "Parkiran Gedung A",
        hotspots: [{ x: 0.3, y: 0.5, target: 0, label: "Back to Lobby" }],
      },
    ],
    videoPanduanImg,
  },
  {
    name: "Gedung B",
    headerImg: headerB,
    about:
      "Di sini ada ruang kelas, ruang dosen, dan kadang jadi tempat rapat atau kumpul organisasi. Cocok buat yang mau belajar sambil eksis!",
    spaces: [
      { name: "Inspiration Space", img: spaceB1 },
      { name: "Bloomberg", img: spaceB2 },
      { name: "Ruang Kelas", img: spaceB3 },
    ],
    virtualTourImages: [
      {
        src: tour360B1,
        label: "Lobby Gedung B",
        hotspots: [{ x: 0.7, y: 0.5, target: 1, label: "Go to Masjid" }],
      },
      {
        src: tour360B2,
        label: "Masjid Dekat Gedung B",
        hotspots: [{ x: 0.3, y: 0.5, target: 0, label: "Back to Lobby" }],
      },
    ],
    videoPanduanImg,
  },
  {
    name: "Gedung C",
    headerImg: headerC,
    about: "Gedung C adalah gedung pertemuan dan laboratorium.",
    spaces: [
      { name: "Parkiran", img: spaceC1 },
      { name: "Lab Komputer", img: spaceC2 },
      { name: "Ruang Seminar", img: spaceC3 },
    ],
    virtualTourImages: [
      {
        src: tour360C1,
        label: "Lobby Gedung C",
        hotspots: [{ x: 0.7, y: 0.5, target: 1, label: "Go to Lapangan" }],
      },
      {
        src: tour360C2,
        label: "Lapangan Olahraga",
        hotspots: [{ x: 0.3, y: 0.5, target: 0, label: "Back to Lobby" }],
      },
    ],
    videoPanduanImg,
  },
];
