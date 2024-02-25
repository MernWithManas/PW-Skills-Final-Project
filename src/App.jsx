

import { Route, Routes } from "react-router-dom"

import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"


const App = () => {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/about" element={<AboutUs/>} ></Route>
    </Routes>
  )
}

export default App