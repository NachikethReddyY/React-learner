import { Link } from "react-router-dom";
import React from "react"; 
function FactsNav() {
    return (
        <nav className="facts-nav">
            <ul className="facts-nav-list">
                <li><Link to="/">Home</Link></li>
                <li>About</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default FactsNav;