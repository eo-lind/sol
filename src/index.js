import React from "react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Sol } from "./components/Sol"
import "./index.css"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Sol />
    </StrictMode>
)