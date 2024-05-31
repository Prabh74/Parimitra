import "./home.css"
import { cards } from "../../card.js"
import Card from "../HomeProductCard/Card"
export default function Home() {
    return (
        <>
            <section className="home-hero-container">
                <h1>Revolutionizing Mobility with Intelligent Solutions</h1>
            </section>

            <section className="home-about-container">
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero et ab, vero culpa repudiandae expedita consectetur
                    doloremque.
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, dignissimos! Reprehenderit asperiores corporis
                    ipsum provident, eos voluptatibus reiciendis aut porro, quas
                    accusamus aspernatur magnam, ipsa veniam nulla quidem
                    deserunt! Consequatur. Voluptatum, explicabo dolorem? Minima
                    eos corrupti atque quas fugiat sequi consequuntur expedita
                    totam a ex, error aliquid! Corrupti veritatis, nam
                    praesentium voluptatibus ut odio inventore minus beatae
                    dignissimos sapiente repellendus.
                </p>
                <button>To know more</button>
                <img src="/Images/make-in-india.png" alt="" />
            </section>

            <section className="home-cards-container">
                <h1>Explore our Solutions</h1>
                <section className="home-cards">
                    {cards.map((card) => (
                        <Card cardDetails={card} />
                    ))}
                </section>
                <p>View more &gt;</p>
            </section>
        </>
    )
}
