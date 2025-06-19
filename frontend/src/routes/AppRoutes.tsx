import { Routes, Route } from "react-router-dom"
import { HomePage } from "../resources/views/pages/HomePage"
import { DevsPage } from "../resources/views/pages/DevsPage"
import { AboutPage } from "../resources/views/pages/AboutPage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/devs" element={<DevsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<AboutPage />} />
            <Route path="/register" element={<AboutPage />} />
        </Routes>
    )
}
