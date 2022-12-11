import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Asw01 } from "./pages/Asw01";
import { Asw03 } from "./pages/Asw03";
import { Asw05 } from "./pages/Asw05";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asw01" element={<Asw01 />} />
          <Route path="/asw03" element={<Asw03 />} />
          <Route path="/asw05" element={<Asw05 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
