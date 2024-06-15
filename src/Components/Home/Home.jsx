import "./home.css"
import { cards } from "../../card.js"
import Card from "../HomeProductCard/Card"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../ThemeStore.jsx"
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { isDark } = useContext(ThemeContext)
    return (
        <>
            <section className="home-hero-container">
                <h1>Revolutionizing Mobility with Intelligent Solutions</h1>
                <Link className="home-contact" to="/contact">
                    <button>Contact Us</button>
                </Link>
            </section>

            <section className={`home-about-container ${isDark && "dark-theme"}`}>
                <h1>
                    At Parimitra, we are redefining the future by bringing it into the present. Our unwavering commitment to excellence ensures that today's innovations set the stage for tomorrow's advancements. We actively shape the future with cutting-edge technologies.
                </h1>
                <p>
                    Embodying the "Make in India" vision, Parimitra creates smart transportation solutions uniquely designed for India's roads. Using proprietary data sets and models tailored for India's diverse traffic, our breakthrough products are developed in India, for India, driving local innovation and boosting the national economy.
                </p>
                <Link to="/about">
                    <button>To know more &gt;</button>
                </Link>
                <img src="/Images/make-in-india.png" alt="" />
            </section>

            <section className={`home-cards-container ${isDark && "dark-theme"}`} id="product">
                <h1>Explore our Solutions</h1>
                <section className="home-cards">
                    {cards.map((card) => (
                        <Card cardDetails={card} />
                    ))}
                </section>
                {/* <p>View more &gt;</p> */}
            </section>
        </>
    )
}
