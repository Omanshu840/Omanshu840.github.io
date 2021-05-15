import React from "react"
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub, FaPhone, FaYoutube
} from "react-icons/fa"

const socialLinks = [
  {
    id: 1,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    url: "mailto:omanshumahawar1234@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/omanshumahawar/",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/Omanshu840",
  },
  {
    id: 4,
    icon: <FaPhone className="social-icon"></FaPhone>,
    url: "tel:918209104660",
  },
  {
    id: 5,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com/channel/UCb23FIK91ZIAttasQfM_1pA",
  },
]

export default socialLinks;
