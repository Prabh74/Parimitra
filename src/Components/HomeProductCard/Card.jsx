import "./card.css"
export default function Card({ cardDetails }) {
    const { title, subheading, price, img } = cardDetails
    return (
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
    )
}
