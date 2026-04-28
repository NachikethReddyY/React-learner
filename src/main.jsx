import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import AppRoutes from "./Routes/AppRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import reactLogo from './assets/react.svg'
// // import { createElement } from "react"
// import './index.css'
// // import App from './App.jsx'
// import AppRoutes from "./Routes/AppRoutes"; // Adjust the path based on your file structure

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AppRoutes />
//   </React.StrictMode>
// );

// createRoot(document.getElementById('root')).render(
// <div>
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li> 
//   </ul>
// </div>
// )
// const root = createRoot (document.getElementById("root"))
// root.render(
//     createElement("h1", null, "Hello")
//     // (type, props, ...children)
// )

// const root = createRoot(document.getElementById("root"))
// root.render(
//   <>
//     <Facts />
//   </>
// )

