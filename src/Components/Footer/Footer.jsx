import "./footer.css"
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <section className="footer">
            <div className="footer-child">
                <img src="/Images/logo.svg" alt="" />
                <p className="footer-text">
                    PARIMITRA, a pioneering start-up from IIT Roorkee, focuses
                    on creating user-friendly and innovative transportation
                    solutions. Our intelligent transportation systems include
                    adaptive traffic control and crowd management, ensuring
                    efficiency, safety, and comfort.
                </p>
            </div>
            <div className="footer-child">
                <div className="footer-links">
                    <Link to="about" className="footer-link">
                        About
                    </Link>
                    <a href="/#product" className="footer-link">
                        Products
                    </a>
                    <Link to="contact" className="footer-link">
                        Contact Us
                    </Link>
                </div>
                <hr />
                <div className="footer-emails">
                    <p>
                        Email: &nbsp;
                        <a href="mailto:support@parimitra.in">
                            support@parimitra.in
                        </a>{" "}
                    </p>
                </div>
                {/* <div className="footer-contact">
                    <img src="/Images/place.svg" alt="" />
                    <p>A301 canal view Apartments, IIT Roorkee-247667</p>
                </div> */}
            </div>
        </section>
    )
}
