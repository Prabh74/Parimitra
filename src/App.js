import "./App.css"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import NotFound from "./NotFound"
import Product from "./Components/ProductPage/Product.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Team from "./Components/TeamPage/Team.jsx"
import { useEffect, useState } from "react"
import { init } from "@emailjs/browser"
import { ThemeContext } from "./ThemeStore.jsx"
import { getThemeLocalStorage, setThemeLocalStorage } from "./localstorage.js"

function App() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        init({
            publicKey: "xkoo3S1zLAdldrj_f",
            blockHeadless: true,
            limitRate: {
                id: "app",
                // Allow 1 request per 10s
                throttle: 10000,
            },
        })

        let localValue = getThemeLocalStorage()
        localValue ? setIsDark(localValue) : setIsDark(false)
    }, [])

    useEffect(() => {
        setThemeLocalStorage(isDark)
    }, [isDark])
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="products" element={<About />} />
                    <Route path="products/:name" element={<Product />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="team" element={<Team />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </ThemeContext.Provider>
    )
}

export default App
