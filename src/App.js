import "./App.css"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import NotFound from "./NotFound"
import Product from "./Components/ProductPage/Product.jsx"
import { useEffect } from "react"

function App() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<About />} />
                <Route path="products/:name" element={<Product />} />
                <Route path="solutions" element={<About />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
