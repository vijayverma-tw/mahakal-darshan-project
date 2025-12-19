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
import MahakalLok from "../pages/MahakalLok/MahakalLok";
import PujanAbhishek from "../pages/PujanAbhishek/PujanAbhishek";
import TemplePremises from "../pages/TemplePremises/TemplePremises";
import Gallery from "../pages/Gallery/Gallery";
import TempleHistory from "../pages/TempleHistory/TempleHistory";
import UjjainHistory from "../pages/UjjainHistory/UjjainHistory";
import ImportantDays from "../pages/ImportantDays/ImportantDays";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
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
        <Route path="/mahakal-lok" element={<MahakalLok />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/trustees" element={<Trustees />} />
        <Route path="/annakshetra" element={<Annakshetra />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pujari" element={<Pujari />} />
        <Route path="/pujan-abhishek" element={<PujanAbhishek />} />
        <Route path="/temple-premises" element={<TemplePremises />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/temple-history" element={<TempleHistory />} />
        <Route path="/ujjain-history" element={<UjjainHistory />} />
        <Route path="/important-days" element={<ImportantDays />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
