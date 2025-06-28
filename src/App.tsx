import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import EventDetail from "./components/EventDetails"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/eventos/:id" element={<EventDetail/>}/>
    </Routes>
  )
}

export default App
