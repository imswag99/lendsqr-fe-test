import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <img onClick={() => navigate("/")} className="navbar__logo" src="/logo.png" alt="" />

            <div className="navbar__search">
                <input type="text" placeholder="Search for anything" />
                <button>
                    <IoMdSearch />
                </button>
            </div>

            <div className="navbar__actions">
                <span>Docs</span>
                <span>🔔</span>
                <span>Profile</span>
            </div>
        </nav>
    );
};

export default Navbar;
