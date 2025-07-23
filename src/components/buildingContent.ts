import headerA from "../assets/fotoGedung/Gedung A.jpg";
import headerB from "../assets/fotoGedung/Gedung B(1).jpg";
import headerC from "../assets/fotoGedung/Gedung C.jpg";
import headerD from "../assets/fotoGedung/Gedung IUP(2).jpg";
import headerE from "../assets/fotoGedung/Lab KWU.jpg";
import headerF from "../assets/fotoGedung/Dekanat(2).jpg";
import spaceA1 from "../assets/foto360/Gedung A - Lobby Manajemen .jpg";
import spaceB1 from "../assets/foto360/Gedung B - Lobby Akuntansi .jpg";
import spaceC1 from "../assets/foto360/Gedung C - Lobby Ilmu Ekonomi.jpg";
import spaceC2 from "../assets/foto360/Gedung C - Hall Gedung C.jpg";
import spaceC3 from "../assets/foto360/Ruang Kelas A B C.jpg";
import spaceC4 from "../assets/foto360/Gedung C - Kantin.jpg";
import spaceC5 from "../assets/foto360/Gedung C - Selasar.jpg";
import spaceD1 from "../assets/foto360/Gedung IUP - Perpustakaan.jpg";
import spaceD2 from "../assets/foto360/Gedung IUP - Digilib.jpg";
import spaceD3 from "../assets/foto360/Gedung IUP - Bloomberg .jpg";
import spaceD4 from "../assets/foto360/Gedung IUP - Lab Komputer.jpg";
import spaceE1 from "../assets/foto360/Gedung KWU.jpg";
import spaceE2 from "../assets/foto360/Gedung KWU - Inspiration Space.jpg";
import spaceF1 from "../assets/foto360/Dekanat - Lobby .jpg";
import videoA from "../assets/videoGuide/Gedung A.mov";
import videoB from "../assets/videoGuide/Gedung B.mov";
import videoC from "../assets/videoGuide/Gedung C.mov";
import videoD from "../assets/videoGuide/Gedung IUP.mov";
import videoE from "../assets/videoGuide/Gedung Lab KWU.mov";
// 360 images
// import tour360A1 from "../assets/foto360/Gedung A - Lobby Manajemen .jpg";
// import tour360B1 from "../assets/foto360/Gedung B - Lobby Akuntansi .jpg";
// import tour360C1 from "../assets/foto360/Gedung C.jpg";
// import tour360C2 from "../assets/foto360/Lapangan Olahraga.jpg";

export const buildingContent = [
  {
    name: "Gedung A",
    headerImg: headerA,
    about:
      "Gedung A adalah pusat administrasi, ruang kelas utama, dan tempat layanan akademik Fakultas Ekonomika dan Bisnis.",
    spaces: [{ name: "Lobby Manajemen", img: spaceA1 }],
    virtualTourImages: [
      {
        src: spaceA1,
        label: "Lobby Manajemen Gedung A",
        hotspots: [{ x: 0.7, y: 0.5, target: 1, label: "Go to Parkiran" }],
      },
    ],
    videoPanduan : videoA,
  },
  {
    name: "Gedung B",
    headerImg: headerB,
    about:
      "Gedung B berisi ruang kelas, ruang dosen, serta sering digunakan untuk rapat dan kegiatan organisasi mahasiswa.",
    spaces: [{ name: "Lobby Akuntansi", img: spaceB1 }],
    virtualTourImages: [
      {
        src: spaceB1,
        label: "Lobby Akuntansi Gedung B",
        hotspots: [{ x: 0.7, y: 0.5, target: 1, label: "Go to Masjid" }],
      },
    ],
    videoPanduan : videoB,
  },
  {
    name: "Gedung C",
    headerImg: headerC,
    about:
      "Gedung C adalah pusat pertemuan, laboratorium, dan memiliki kantin serta area selasar yang nyaman.",
    spaces: [
      { name: "Lobby Ilmu Ekonomi", img: spaceC1 },
      { name: "Hall Gedung C", img: spaceC2 },
      { name: "Kelas A, B, C", img: spaceC3 },
      { name: "Kantin", img: spaceC4 },
      { name: "Selasar", img: spaceC5 },
    ],
    virtualTourImages: [
      {
        src: spaceC1,
        label: "Lobby Ilmu Ekonomi - Gedung C",
        hotspots: [{ x: 0.7, y: 0.5, target: 1, label: "Ke Hall Gedung C" }],
      },
      {
        src: spaceC2,
        label: "Hall Gedung C",
        hotspots: [{ x: 0.3, y: 0.5, target: 2, label: "Ke Ruang Kelas A, B, C - Gedung C" }],
      },
      {
        src: spaceC3,
        label: "Ruang Kelas A, B, C - Gedung C",
        hotspots: [{ x: 0.5, y: 0.5, target: 3, label: "Kantin Gedung C" }],
      },
      {
        src: spaceC4,
        label: "Kantin Gedung C",
        hotspots: [{ x: 0.5, y: 0.5, target: 4, label: "Selasar Gedung C" }],
      },
      {
        src: spaceC5,
        label: "Selasar Gedung C",
        hotspots: [{ x: 0.5, y: 0.5, target: 0, label: "Back to Lobby" }],
      },
    ],
    videoPanduan : videoC,
  },
  {
    name: "Gedung IUP",
    headerImg: headerD,
    about:
      "Gedung IUP adalah pusat kegiatan program internasional, dilengkapi dengan perpustakaan modern, digilab, ruang Bloomberg, dan laboratorium komputer.",
    spaces: [
      { name: "Perpustakaan", img: spaceD1 },
      { name: "Digilab", img: spaceD2 },
      { name: "Bloomberg", img: spaceD3 },
      { name: "Lab Komputer", img: spaceD4 },
    ],
    virtualTourImages: [
      {
        src: spaceD1,
        label: "Perpustakaan Gedung IUP",
        hotspots: [{ x: 0.7, y: 0.5, target: 1, label: "Go to Digilab" }],
      },
      {
        src: spaceD2,
        label: "Digilab Gedung IUP",
        hotspots: [
          { x: 0.3, y: 0.5, target: 0, label: "Back to Perpustakaan" },
        ],
      },
      {
        src: spaceD3,
        label: "Bloomberg Room Gedung IUP",
        hotspots: [
          { x: 0.5, y: 0.5, target: 0, label: "Back to Perpustakaan" },
        ],
      },
      {
        src: spaceD4,
        label: "Lab Komputer Gedung IUP",
        hotspots: [
          { x: 0.5, y: 0.5, target: 0, label: "Back to Perpustakaan" },
        ],
      },
    ],
    videoPanduan : videoD,
  },
  {
    name: "Gedung KWU",
    headerImg: headerE,
    about:
      "Gedung KWU adalah pusat pengembangan kewirausahaan, dilengkapi dengan auditorium dan ruang inspirasi untuk mahasiswa.",
    spaces: [
      { name: "Auditorium Lab KWU", img: spaceE1 },
      { name: "The Inspiration Space", img: spaceE2 },
    ],
    virtualTourImages: [
      {
        src: spaceE1,
        label: "Auditorium Lab KWU",
        hotspots: [
          { x: 0.7, y: 0.5, target: 1, label: "Go to Inspiration Space" },
        ],
      },
      {
        src: spaceE2,
        label: "The Inspiration Space KWU",
        hotspots: [{ x: 0.3, y: 0.5, target: 0, label: "Back to Auditorium" }],
      },
    ],
    videoPanduan : videoE,
  },
  {
    name: "Gedung Dekanat",
    headerImg: headerF,
    about:
      "Gedung Dekanat adalah pusat administrasi fakultas, tempat pengambilan keputusan dan layanan akademik utama.",
    spaces: [{ name: "Lobby Dekanat", img: spaceF1 }],
    virtualTourImages: [
      {
        src: spaceF1,
        label: "Lobby Dekanat",
        hotspots: [{ x: 0.7, y: 0.5, target: 1, label: "Go to KWU" }],
      },
    ],
    videoPanduan : "",
  },
];
