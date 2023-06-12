import React, { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MgameEdit from "./pages/MgameEdit"
import MgameIndex from "./pages/MgameIndex"
import MgameNew from "./pages/MgameNew"
import MgameShow from "./pages/MgameShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route, useNavigate } from "react-router-dom"
import './App.css'

import mockMgames from "./mockMgames"

function App() {
  const [mgames, setMgames] = useState([])

  useEffect(() => {
    readMgame()
  }, [])

  const navigate = useNavigate()

  const readMgame = () => {
    fetch("http://localhost:3000/mgames")
    .then((response) => response.json())
    .then((payload) => {
      setMgames(payload)
    })
    .catch((error) => console.log(error))
  }

  const createMgame = (createdMgame) => {
    fetch("http://localhost:3000/mgames", {
      body: JSON.stringify(createdMgame),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readMgame(payload))
    .catch((errors) => console.log("Mgame create errors:", errors))
  }

  const updateMgame = (mgame, id) => {
    fetch(`http://localhost:3000/mgames/${id}`, {
      body: JSON.stringify(mgame),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => updateMgame(payload))
    .catch((errors) => console.log("Mgame create errors:", errors))
  }

  const destroyMgame = (id) => {
    fetch(`http://localhost:3000/mgames/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => {
      readMgame(payload)
      navigate("/mgameindex")
      })
      .catch((error) => console.log("Mgame delete error:", error))
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mgameindex" element={<MgameIndex mgames={mgames} />} />
        <Route path="/mgameshow/:id" element={<MgameShow mgames={mgames} />} />
        <Route path="/mgamenew" element={<MgameNew createMgame={createMgame} />} />
        <Route path="/mgameedit/:id" element={<MgameEdit mgames={mgames} updateMgame={updateMgame} destroyMgame={destroyMgame}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
