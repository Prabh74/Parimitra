import { Link, Outlet } from "react-router-dom"
import "./navbar.css"
import { useContext, useRef } from "react"
import { ThemeContext } from "../../ThemeStore"

export default function Navbar() {
    const nav = useRef()

    const { isDark, setIsDark } = useContext(ThemeContext)

    const handleMenu = () => {
        console.log(nav.current)
        nav.current.style.top === "-50vh"
            ? (nav.current.style.top = "0")
            : (nav.current.style.top = "-50vh")
    }
    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <img
                        className="navbar-logo"
                        src="/Images/logo.svg"
                        alt="logo"
                    />
                </Link>

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
                    <Link to="/team" className="nav-link">
                        Team
                    </Link>
                </div>

                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div className="navbar-btn-container">
                        <Link to="contact">
                            <button className="navbar-btn">Contact Us</button>
                        </Link>
                    </div>

                    <div className="navbar-theme-mode" onClick={() => { setIsDark(prevValue => !prevValue) }}>
                        <div className={`navbar-theme-icons ${isDark && "theme-transition"}`}>
                            <img className="navbar-theme-icon" alt="" src="/Images/sun.svg" />
                            <img className="navbar-theme-icon" alt="" src="/Images/moon.svg" />
                        </div>
                    </div>

                    <img
                        className="navbar-mobile-menu-icon"
                        src="/Images/menu.svg"
                        alt=""
                        onClick={handleMenu}
                    />
                </div>
            </nav>

            <section className="navbar-open" ref={nav} style={{ top: "-50vh" }}>
                <div>
                    <img
                        className="navbar-logo"
                        src="/Images/logo.svg"
                        alt="logo"
                    />
                    <img
                        className="navbar-menu-close"
                        src="/Images/close.png"
                        alt=""
                        onClick={handleMenu}
                    />
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-link" onClick={handleMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="nav-link" onClick={handleMenu}>
                        About
                    </Link>
                    <a
                        href="/#product"
                        className="nav-link"
                        onClick={handleMenu}
                    >
                        Products
                    </a>
                    <Link to="/team" className="nav-link" onClick={handleMenu}>
                        Team
                    </Link>
                    <Link
                        to="/contact"
                        onClick={handleMenu}
                        className="nav-link"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
            <Outlet />
        </>
    )
}
