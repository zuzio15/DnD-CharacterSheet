import React from "react";
import StatsPage from "./pages/StatsPage"
import EquipmentPage from "./pages/EquipmentPage"
import MagicPage from "./pages/MagicPage"
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/main.css";
import SkillsPage from "./pages/SkillsPage";
import DescriptionPage from "./pages/DescriptionPage";

export default function App() {
    return (

        <HashRouter>
            <nav className="nav">
                <Link to="/" className="link">Statystyki</Link>
                <Link to="/equipment" className="link">Ekwipunek</Link>
                <Link to="/skills" className="link">Skille</Link>
                <Link to="/magic" className="link">Magia</Link>
                <Link to="/description" className="link">Opis</Link>
            </nav>

            <Routes>
                <Route path="/" element={<StatsPage />} />
                <Route path="/equipment" element={<EquipmentPage />} />
                <Route path="/magic" element={<MagicPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/description" element={<DescriptionPage />} />
             </Routes>
        </HashRouter>


    );
}