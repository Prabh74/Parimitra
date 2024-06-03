import "./home.css"
import { cards } from "../../card.js"
import Card from "../HomeProductCard/Card"
import { useEffect } from "react"
import { Link } from "react-router-dom"
export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className="home-hero-container">
                <h1>Revolutionizing Mobility with Intelligent Solutions</h1>
                <Link className="home-contact" to="/contact">
                    <button>Contact Us</button>
                </Link>
            </section>

            <section className="home-about-container">
                <h1>
                    We don’t just design the future, we bring it to the present.
                    Our commitment to excellence transcends the boundaries of
                    time, ensuring that the innovative technologies we craft
                    today set the pace for tomorrow's advancements. We don't
                    wait for the future - we engineer it.
                </h1>
                <p>
                    Parimitra embodies the "Make in India" vision by creating
                    intelligent transportation solutions tailored for Indian
                    roads. With proprietary data sets and models designed for
                    India's unique traffic, our innovative products are
                    developed in India for India, driving local innovation and
                    supporting the national economy.
                </p>
                <Link to="/about">
                    <button>To know more &gt;</button>
                </Link>
                <img src="/Images/make-in-india.png" alt="" />
            </section>

            <section className="home-cards-container" id="product">
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
