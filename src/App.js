import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BimbinganTeknis from "./Pages/BimbinganTeknis";
import Detail from "./Pages/Detail";
import DetailCard from "./Pages/DetailCard";
import Fasilitas from "./Pages/Fasilitas";
import Home from "./Pages/Home";
import Laporan from "./Pages/Laporan";
import PelayananPublik from "./Pages/PelayananPublik";
import Profile from "./Pages/Profile"
import RealisasiAnggaran from "./Pages/RealisasiAnggaran";
import RencanaStrategis from "./Pages/RencanaStrategis";
import StukturOrganisasi from "./Pages/StukturOrganisasi";
import TugasDanFungsi from "./Pages/TugasDanFungsi";
import UjiTerap from "./Pages/UjiTerap";
import VisiMisi from "./Pages/VisiMisi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/visimisi" element={<VisiMisi />} />
        <Route path="/stukturorganisasi" element={<StukturOrganisasi />} />
        <Route path="/tugasfungsi" element={<TugasDanFungsi />} />
        <Route path="/pelayananpublik" element={<PelayananPublik />} />
        <Route path="/ujiterap" element={<UjiTerap />} />
        <Route path="/bimbinganteknis" element={<BimbinganTeknis />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/rencanastrategis" element={<RencanaStrategis />} />
        <Route path="/realisasianggaran" element={<RealisasiAnggaran />} />

        <Route path="/detail" element={<Detail/>} />
        <Route path="/detailcard" element={<DetailCard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;