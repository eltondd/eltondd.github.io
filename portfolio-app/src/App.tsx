import Banner from "./components/banner/banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import { Container } from "@mui/material";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Banner />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
