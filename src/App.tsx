import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuildingDetail from "./pages/BuildingDetail";
import VirtualTourPage from "./pages/VirtualTourPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/building/:id" element={<BuildingDetail />} />
          <Route
            path="/building/:id/virtual-tour"
            element={<VirtualTourPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
