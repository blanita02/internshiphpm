import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Promises from "./Promises"
import Async from "./Async"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Async />
    </React.StrictMode>
)
