import react from "react";
import { Link } from "react-router-dom";
import "./style/GoBack.css"

const GoBack = () => {
    return (
        <nav className="nav-go-back">
            <ul className="position-go-back">
                <li className="go-back"><Link to="/main" >Go back</Link></li>
            </ul>
        </nav>
    )
}

export default GoBack