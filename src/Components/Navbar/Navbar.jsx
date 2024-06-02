import { Link, Outlet } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img
                    className="navbar-logo"
                    src="/Images/logo.svg"
                    alt="logo"
                />
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                    <a href="/#product" className="nav-link">
                        Products
                    </a>
                    <Link to="/solutions" className="nav-link">
                        Solutions
                    </Link>
                </div>

                <div className="navbar-btn-container">
                    <button className="navbar-btn">Contact Us</button>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
