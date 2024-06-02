import "./App.css"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import NotFound from "./NotFound"
import Product from "./Components/ProductPage/Product.jsx"
import Contact from "./Components/Contact/Contact.jsx"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<About />} />
                <Route path="products/:name" element={<Product />} />
                <Route path="contact" element={<Contact />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
