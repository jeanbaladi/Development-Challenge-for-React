import React from "react";
import { Link } from "react-router-dom";
import "./style/navBar.css";

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* =========== Dinamic URL ======================= */}
                <li><Link to="/main/hard-rock">hard-rock</Link></li>
                <li><Link to="/main/rock-roll">rock-roll</Link></li>
                <li><Link to="/main/power-metal">power-metal</Link></li>
                <li><Link to="/main/heavy-metal">heavy-metal</Link></li>
                <li><Link to="/main/black-metal">black-metal</Link></li>
                <li><Link to="/main/goth-metal">goth-metal</Link></li>
                <li><Link to="/main/rock">rock</Link></li>
                <li><Link to="/main/grunge">grunge</Link></li>
                <li><Link to="/main/progressive-metal">progressive-metal</Link></li>
                <li><Link to="/">logout</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar