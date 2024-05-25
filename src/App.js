import "./App.css"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import NotFound from "./NotFound"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<About />} />
                <Route path="solutions" element={<About />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
