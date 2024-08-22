import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Konselor from "./pages/Konselor";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative sm:overflow-hidden h-full sm:h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/konselor" element={<Konselor />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
