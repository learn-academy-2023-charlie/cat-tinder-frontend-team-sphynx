import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MgameEdit from "./pages/MgameEdit"
import MgameIndex from "./pages/MgameIndex"
import MgameNew from "./pages/MgameNew"
import MgameShow from "./pages/MgameShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import './App.css'

import mockMgames from "./mockMgames"

function App() {
  const [mgames, setMgames] = useState(mockMgames)

  const createMgame = (mgame) => {
    console.log(mgame)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mgameindex" element={<MgameIndex mgames={mgames} />} />
        <Route path="/mgameshow/:id" element={<MgameShow mgames={mgames} />} />
        <Route path="/mgamenew" element={<MgameNew createMgame={createMgame} />} />
        <Route path="/mgameedit" element={<MgameEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
