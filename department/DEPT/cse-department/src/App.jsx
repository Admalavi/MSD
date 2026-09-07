import { Box } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Expertise from "./components/Expertise";
import Specializations from "./components/Specializations";
import Laboratories from "./components/Laboratories";
import Faculty from "./components/Faculty";
import Achievements from "./components/Achievements";
import Notices from "./components/Notices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />

      <Box component="main">
        <About />
        <VisionMission />
        <Expertise />
        <Specializations />
        <Laboratories />
        <Faculty />
        <Achievements />
        <Notices />
        <Contact />
      </Box>

      <Footer />
    </>
  );
}

export default App;
