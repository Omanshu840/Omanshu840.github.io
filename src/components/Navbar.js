import React from "react"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from '../constants/pageLinks'

const Navbar = ({ toggleSidebar, toggleDarkMode, darkMode}) => {

    return (
          <nav className="navbar">
            <div className="nav-center">
              <div className="nav-header">
                <h2>O M</h2>
                <button className="toggle-btn" onClick={toggleSidebar}>
                  <FaAlignRight></FaAlignRight>
                </button>
              </div>
                <ul className="page-links nav-links">
                  {pageLinks.map(link => {
                    return (
                      <li key={link.id}>
                        <a href={link.url}>{link.text}</a>
                      </li>
                    )
                    })
                 }
                 {/* <li>
                    <Button>
                      <FaMoon/>
                    </Button>
                  </li> */}
                </ul>
            </div>
          </nav>
    )
}

export default Navbar;