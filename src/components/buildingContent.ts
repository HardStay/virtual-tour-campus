import headerA from "../assets/fotoGedung/Gedung A.jpg";
import headerB from "../assets/fotoGedung/Gedung B(1).jpg";
import headerC from "../assets/fotoGedung/Gedung C.jpg";
import headerD from "../assets/fotoGedung/Gedung IUP(2).jpg";
import headerE from "../assets/fotoGedung/Lab KWU.jpg";
import headerF from "../assets/fotoGedung/Dekanat(2).jpg";
import headerG from "../assets/fotoGedung/Tulisan FEB.jpg";
import headerH from "../assets/fotoGedung/Gedung PKM ( Fasilitas ).jpg";
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
import spaceG1 from "../assets/foto360/Parkiran.jpg";
import spaceG2 from "../assets/foto360/Danau FEB.jpg";
import spaceG3 from "../assets/foto360/Lapangan Olahraga.jpg";
import spaceG4 from "../assets/foto360/Pakardo.jpg";
import spaceG5 from "../assets/foto360/Masjid.jpg";
import spaceG6 from "../assets/foto360/Masjid Tampak Bawah.jpg";
import spaceG7 from "../assets/foto360/Dome.jpg";
const videoA =
  "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+A.mp4";
const videoB =
  "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+B.mp4";
const videoC =
  "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+C.mp4";
const videoD =
  "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+IUP.mp4";
const videoE =
  "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+Lab+KWU.mp4";
const videoF =
  "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Fasilitas+FEB.mp4";
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
        hotspots: [
          {
            x: 0.7,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung Dekanat",
            label: "Lobby Dekanat",
          },
          {
            x: 0.3,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung B",
            label: "Lobby Akuntansi - Gedung B",
          },
        ],
      },
    ],
    videoPanduan: videoA,
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
        label: "Lobby Akuntansi - Gedung B",
        hotspots: [
          {
            x: 0.7,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung A",
            label: "Lobby Manajemen Gedung A",
          },
          {
            x: 0.3,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung C",
            label: "Lobby Ilmu Ekonomi - Gedung C",
          },
        ],
      },
    ],
    videoPanduan: videoB,
  },
  {
    name: "Gedung C",
    headerImg: headerC,
    about:
      "Gedung C adalah pusat pertemuan, laboratorium, dan memiliki kantin serta area selasar yang nyaman.",
    spaces: [
      { name: "Lobby Ilmu Ekonomi Gedung C", img: spaceC1 },
      { name: "Hall Gedung C", img: spaceC2 },
      { name: "Kelas A, B, C - Gedung C", img: spaceC3 },
      { name: "Kantin Gedung C", img: spaceC4 },
      { name: "Selasar Gedung C", img: spaceC5 },
    ],
    virtualTourImages: [
      {
        src: spaceC1,
        label: "Lobby Ilmu Ekonomi - Gedung C",
        hotspots: [
          {
            x: 0.7,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung B",
            label: "Lobby Akuntansi - Gedung B",
          },
          { x: 0.3, y: 0.5, target: 1, label: "Hall Gedung C" },
        ],
      },
      {
        src: spaceC2,
        label: "Hall Gedung C",
        hotspots: [
          { x: 0.7, y: 0.5, target: 0, label: "Lobby Ilmu Ekonomi - Gedung C" },
          {
            x: 0.3,
            y: 0.5,
            target: 2,
            label: "Ruang Kelas A, B, C - Gedung C",
          },
        ],
      },
      {
        src: spaceC3,
        label: "Ruang Kelas A, B, C - Gedung C",
        hotspots: [
          { x: 0.7, y: 0.5, target: 1, label: "Hall Gedung C" },
          { x: 0.3, y: 0.5, target: 3, label: "Kantin Gedung C" },
        ],
      },
      {
        src: spaceC4,
        label: "Kantin Gedung C",
        hotspots: [
          {
            x: 0.7,
            y: 0.5,
            target: 2,
            label: "Ruang Kelas A, B, C - Gedung C",
          },
          { x: 0.3, y: 0.5, target: 4, label: "Selasar Gedung C" },
        ],
      },
      {
        src: spaceC5,
        label: "Selasar Gedung C",
        hotspots: [
          { x: 0.7, y: 0.5, target: 3, label: "Kantin Gedung C" },
          {
            x: 0.3,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung IUP",
            label: "Perpustakaan Gedung IUP",
          },
        ],
      },
    ],
    videoPanduan: videoC,
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
        hotspots: [
          {
            x: 0.7,
            y: 0.5,
            target: 4,
            targetBuilding: "Gedung C",
            label: "Selasar Gedung C",
          },
          { x: 0.3, y: 0.5, target: 1, label: "Digilab Gedung IUP" },
        ],
      },
      {
        src: spaceD2,
        label: "Digilab Gedung IUP",
        hotspots: [
          { x: 0.7, y: 0.5, target: 0, label: "Perpustakaan Gedung IUP" },
          { x: 0.3, y: 0.5, target: 2, label: "Bloomberg Gedung IUP" },
        ],
      },
      {
        src: spaceD3,
        label: "Bloomberg Room Gedung IUP",
        hotspots: [
          { x: 0.7, y: 0.5, target: 1, label: "Digilab Gedung IUP" },
          { x: 0.3, y: 0.5, target: 3, label: "Lab Komputer Gedung IUP" },
        ],
      },
      {
        src: spaceD4,
        label: "Lab Komputer Gedung IUP",
        hotspots: [
          { x: 0.7, y: 0.5, target: 2, label: "Bloomberg Room Gedung IUP" },
          {
            x: 0.3,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung KWU",
            label: "Auditorium Lab KWU",
          },
        ],
      },
    ],
    videoPanduan: videoD,
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
          {
            x: 0.7,
            y: 0.5,
            target: 3,
            targetBuilding: "Gedung IUP",
            label: "Lab Komputer Gedung IUP",
          },
          {
            x: 0.3,
            y: 0.5,
            target: 1,
            label: "The Inspiration Space KWU",
          },
        ],
      },
      {
        src: spaceE2,
        label: "The Inspiration Space KWU",
        hotspots: [
          { x: 0.7, y: 0.5, target: 0, label: "Auditorium Lab KWU" },
          {
            x: 0.3,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung Dekanat",
            label: "Lobby Dekanat",
          },
        ],
      },
    ],
    videoPanduan: videoE,
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
        hotspots: [
          {
            x: 0.7,
            y: 0.5,
            target: 1,
            targetBuilding: "Gedung KWU",
            label: "The Inspiration Space KWU",
          },
          {
            x: 0.3,
            y: 0.5,
            target: 0,
            targetBuilding: "Gedung A",
            label: "Lobby Manajemen Gedung A",
          },
        ],
      },
    ],
    videoPanduan: "",
  },
  {
    name: "Fasilitas",
    headerImg: headerG,
    about:
      "Fasilitas FEB adalah fasilitas yang ada di kampus FEB, seperti parkiran, danau FEB, lapangan olahraga, pakardo, masjid, dan dome.",
    spaces: [
      { name: "Parkiran", img: spaceG1 },
      { name: "Danau FEB", img: spaceG2 },
      { name: "Lapangan Olahraga", img: spaceG3 },
      { name: "Pakardo", img: spaceG4 },
      { name: "Masjid", img: spaceG5 },
      { name: "Dome", img: spaceG7 },
    ],
    virtualTourImages: [
      {
        src: spaceG1,
        label: "Parkiran",
        hotspots: [
          {
            x: 0.7,
            y: 0.5,
            target: 6,
            label: "Dome",
          },
          {
            x: 0.3,
            y: 0.5,
            target: 1,
            label: "Danau FEB",
          },
        ],
      },
      {
        src: spaceG2,
        label: "Danau FEB",
        hotspots: [
          { x: 0.7, y: 0.5, target: 0, label: "Parkiran" },
          { x: 0.3, y: 0.5, target: 2, label: "Lapangan Olahraga" },
        ],
      },
      {
        src: spaceG3,
        label: "Lapangan Olahraga",
        hotspots: [
          { x: 0.7, y: 0.5, target: 1, label: "Danau FEB" },
          { x: 0.3, y: 0.5, target: 3, label: "Pakardo" },
        ],
      },
      {
        src: spaceG4,
        label: "Pakardo",
        hotspots: [
          { x: 0.7, y: 0.5, target: 2, label: "Lapangan Olahraga" },
          { x: 0.3, y: 0.5, target: 4, label: "Masjid" },
        ],
      },
      {
        src: spaceG5,
        label: "Masjid",
        hotspots: [
          { x: 0.7, y: 0.5, target: 3, label: "Pakardo" },
          { x: 0.3, y: 0.5, target: 5, label: "Masjid Tampak Bawah" },
        ],
      },
      {
        src: spaceG6,
        label: "Masjid Tampak Bawah",
        hotspots: [
          { x: 0.7, y: 0.5, target: 4, label: "Masjid" },
          { x: 0.3, y: 0.5, target: 6, label: "Dome" },
        ],
      },
      {
        src: spaceG7,
        label: "Dome",
        hotspots: [
          { x: 0.7, y: 0.5, target: 5, label: "Masjid Tampak Bawah" },
          { x: 0.3, y: 0.5, target: 0, label: "Parkiran" },
        ],
      },
    ],
    videoPanduan: videoF,
  },
  {
    name: "Gedung PKM",
    headerImg: headerH,
    about:
      "Gedung PKM adalah pusat kegiatan program mahasiswa, dilengkapi dengan fasilitas yang membantu mahasiswa dalam mengembangkan diri.",
    spaces: [],
    virtualTourImages: [],
    videoPanduan: "",
  },
];
