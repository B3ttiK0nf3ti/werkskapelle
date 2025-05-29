import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Calendar from "./pages/Calendar";
import Shop from "./pages/Shop";
import Internal from "./pages/Internal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/internal" element={<Internal />} />
      </Routes>
    </Router>
  );
}

export default App;
