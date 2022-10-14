import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <li id="li1" className="rigth">
          <a href={'#about'} className="colorLink">
            About
          </a>
        </li>
        <li id="li2">
          <Link to={'/'} className="colorLink">
            MyJournal
          </Link>
        </li>
        <li id="li3" className="left">
          <Link to={'/login'} className="colorLink">
            Login{' '}
          </Link>
        </li>
        <li id="li4" className="rigth link">
          <Link to={'/signup'} className="colorLink">
            Signup
          </Link>
        </li>
      </div>
    </nav>
  )
}
