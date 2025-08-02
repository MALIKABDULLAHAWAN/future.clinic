import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Appointments from './pages/Appointments';
import Contact from './pages/Contact';
import GiftCertificates from './pages/GiftCertificates';
import About from './pages/About';
import SkinBoosters from './pages/SkinBoosters';
import Facials from './pages/Facials';
import PostOpRecovery from './pages/PostOpRecovery';
import SynthesisOrganics from './pages/SynthesisOrganics';
import BodyContouring from './pages/BodyContouring';
import LymphaticDrainage from './pages/LymphaticDrainage';
import SpaMassages from './pages/SpaMassages';
import InfraredSauna from './pages/InfraredSauna';
import PelvicPain from './pages/PelvicPain';
import CsectionRecovery from './pages/CsectionRecovery';
import PostOpAestheticFace from './pages/PostOpAestheticFace';
import UltraformerMpt from './pages/UltraformerMpt';
import IndibaTherapy from './pages/IndibaTherapy';
import TruflexMuscle from './pages/TruflexMuscle';
import AdvancedTechnology from './pages/AdvancedTechnology';
import FutureBatheComingSoon from './pages/FutureBatheComingSoon';
import Booking from './pages/Booking';
import PatientPortal from './pages/PatientPortal';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gift-certificates" element={<GiftCertificates />} />
            <Route path="/concerns/skin-boosters" element={<SkinBoosters />} />
            <Route path="/facials" element={<Facials />} />
            <Route path="/facials/synthesis-organics" element={<SynthesisOrganics />} />
            <Route path="/post-op-recovery" element={<PostOpRecovery />} />
            <Route path="/treatments/body-contouring" element={<BodyContouring />} />
            <Route path="/treatments/spa-massages/lymphatic-drainage" element={<LymphaticDrainage />} />
            <Route path="/treatments/spa-massages" element={<SpaMassages />} />
            <Route path="/infrared-sauna" element={<InfraredSauna />} />
            <Route path="/pelvic-pain" element={<PelvicPain />} />
            <Route path="/c-section-recovery" element={<CsectionRecovery />} />
            <Route path="/post-op-aesthetic-face" element={<PostOpAestheticFace />} />
            <Route path="/ultraformer-mpt" element={<UltraformerMpt />} />
            <Route path="/treatments/advanced-technology" element={<AdvancedTechnology />} />
            <Route path="/treatments/future-bathe-coming-soon" element={<FutureBatheComingSoon />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/patient-portal" element={<PatientPortal />} />
            {/* Additional routes for missing services */}
            <Route path="/treatments/indiba-therapy" element={<IndibaTherapy />} />
            <Route path="/treatments/truflex-muscle" element={<TruflexMuscle />} />
            <Route path="/post-op-aesthetic-face" element={<PostOpAestheticFace />} />
            {/* Catch-all route for blog posts and other dynamic routes */}
            <Route path="/blog/:category/:title" element={<Home />} />
            <Route path="/services/:service" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;