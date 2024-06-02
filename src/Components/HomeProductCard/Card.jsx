import "./card.css"
import { Link } from "react-router-dom"
export default function Card({ cardDetails }) {
    const { title, subheading, price, img, url } = cardDetails
    return (
        <Link to={`/products/${url}`}>
            <section
                className="home-product-card"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="home-product-card-text">
                    <h1>{title}</h1>
                    <p>{subheading}</p>
                </div>
                <div className="home-product-card-cta">
                    <p>Rs {price}</p>
                    <button>Qoute</button>
                </div>
            </section>
        </Link>
    )
}
