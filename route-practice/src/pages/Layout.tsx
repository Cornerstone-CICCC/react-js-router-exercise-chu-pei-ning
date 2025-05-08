import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout