// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import Logo from "./images/Logo2.png";

const NavBar = ({ isHome }) => {
    return (
        <div className="container header">
            {/* if isHome then the button is the github button else its the home button*/}
                <a href="/" className="header-btn1 bouncy">
                    <i className="fas fa-home"></i> Ana Sayfa
                </a>
        </div>
    );
};

export default NavBar;
