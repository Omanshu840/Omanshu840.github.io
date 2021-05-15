import React from "react"
import { FaTimes } from "react-icons/fa"
import pageLinks from '../constants/pageLinks'
import socialLinks from '../constants/socialLinks'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={`page-links ${isOpen ? "sidebar-links" : ""}`}>
            {pageLinks.map(link => {
              return (
                  <li key={link.id}>
                    <a href={link.url} onClick={toggleSidebar}>{link.text}</a>
                  </li>
              )
            })
         }
        </ul>

        <ul className={`social-links ${isOpen ? "sidebar-icons" : ""}`}>
              { socialLinks.map(link => {
                      return (
                          <li key={link.id}>
                              <a href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                                  {link.icon}
                               </a>
                          </li>
                      )
                  })
            }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar