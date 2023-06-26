import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Store } from "./pages/store"
import { About } from "./pages/about"

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Container>
  )
}

export default App