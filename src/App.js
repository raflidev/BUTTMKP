import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BimbinganTeknis from "./Pages/BimbinganTeknis";
import Home from "./Pages/Home";
import PelayananPublik from "./Pages/PelayananPublik";
import Profile from "./Pages/Profile"
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;