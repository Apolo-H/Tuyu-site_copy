import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import "../src/style/index.css"
import "../src/style/Scroll-effect.css";
import "../src/script/Scroll.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
