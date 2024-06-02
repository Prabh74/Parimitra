import { Link, Outlet } from "react-router-dom"
import "./navbar.css"
import { useRef } from "react"

export default function Navbar() {
    const nav = useRef()
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
                    <Link to="/solutions" className="nav-link">
                        Solutions
                    </Link>
                </div>

                <div className="navbar-btn-container">
                    <button className="navbar-btn">Contact Us</button>
                </div>

                <img
                    className="navbar-mobile-menu-icon"
                    src="/Images/menu.svg"
                    alt=""
                    onClick={handleMenu}
                />
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
                    <Link
                        to="/solutions"
                        className="nav-link"
                        onClick={handleMenu}
                    >
                        Solutions
                    </Link>
                </div>
            </section>
            <Outlet />
        </>
    )
}
