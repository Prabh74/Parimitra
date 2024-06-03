import { useParams } from "react-router-dom"
import { cards } from "../../card"
import { useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./product.css"

export default function Product() {
    const { name } = useParams()
    const details = cards.filter((e) => e.url === name)[0]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="product-page">
            <section className="product-page-first-section">
                <div>
                    <h1>{details?.title}</h1>
                    <p>{details?.subheading}</p>
                    <div>
                        <a href="#product-content">
                            <button className="product-btn-2">
                                Explore More
                            </button>
                        </a>
                    </div>
                </div>
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    showThumbs={false}
                    width={window.innerWidth > 768 ? "50vw" : "90vw"}
                    infiniteLoop={true}
                    interval={3000}
                >
                    {details?.img.map((i) => (
                        <div>
                            <img src={i} alt="" />
                        </div>
                    ))}
                </Carousel>
            </section>

            <section
                id="product-content"
                className="product-page-second-section"
            >
                <h1
                    dangerouslySetInnerHTML={{ __html: details?.data?.head }}
                ></h1>
                <p
                    dangerouslySetInnerHTML={{ __html: details?.data?.para }}
                ></p>
            </section>
        </main>
    )
}
