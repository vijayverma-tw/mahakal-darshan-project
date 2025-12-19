import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Architect from "../pages/Architect/Architect";
import TempleTimings from "../pages/TempleTimings/TempleTimings";
import Booking from "../pages/Booking/Booking";
import Trustees from "../pages/Trustees/Trustees";
import Annakshetra from "../pages/Annakshetra/Annakshetra";
import Contact from "../pages/Contact/Contact";
import Pujari from "../pages/Pujari/Pujari";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/architect" element={<Architect />} />
        <Route path="/temple-timings" element={<TempleTimings />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/trustees" element={<Trustees />} />
        <Route path="/annakshetra" element={<Annakshetra />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pujari" element={<Pujari />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
