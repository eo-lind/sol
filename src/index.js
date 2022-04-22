import React from "react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { Sol } from "./components/Sol"
import "./index.css"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Router>
            <Sol />
        </Router>
    </StrictMode>
)
