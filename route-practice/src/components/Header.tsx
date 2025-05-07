import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="flex ">
      <nav>
        <menu>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/product'>Product</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact-us'>Contact Us</Link></li>
        </menu>
      </nav>
    </header>
  )
}

export default Header