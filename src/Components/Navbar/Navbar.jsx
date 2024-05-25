import { NavLink, Outlet } from "react-router-dom"
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
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active-link nav-link" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active-link nav-link" : "nav-link"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "active-link nav-link" : "nav-link"
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/solutions"
                        className={({ isActive }) =>
                            isActive ? "active-link nav-link" : "nav-link"
                        }
                    >
                        Solutions
                    </NavLink>
                </div>

                <div className="navbar-btn-container">
                    <button className="navbar-btn">Contact Us</button>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
