import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductLayout from "./pages/Products/ProductLayout"
import ProductsList from "./pages/Products/ProductsList"
import ProductDetail from "./pages/Products/ProductDetail"
import Error from "./pages/Error"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='product' element={<ProductLayout/>} >
            <Route index element={<ProductsList />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact-us' element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App