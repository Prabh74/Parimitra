import { useParams } from "react-router-dom"
import { cards } from "../../card"
import "./product.css"

export default function Product() {
    const { name } = useParams()
    const details = cards.filter((e) => e.url === name)[0]

    return (
        <main className="product-page">
            <section className="product-page-first-section">
                <h1>{details.title}</h1>
                <p>{details.subheading}</p>
                <div>
                    <button className="product-btn-1">Contact Us</button>
                    <button className="product-btn-2">Explore More</button>
                </div>
            </section>

            <img src={details.img} alt="" />
            <section className="product-page-second-section">
                <h1
                    dangerouslySetInnerHTML={{ __html: details.data.head }}
                ></h1>
                <p dangerouslySetInnerHTML={{ __html: details.data.para }}></p>
            </section>
        </main>
    )
}
