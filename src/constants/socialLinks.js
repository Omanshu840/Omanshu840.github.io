import React from "react"
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub, FaPhone, FaYoutube
} from "react-icons/fa"

const socialLinks = [
  {
    id: 1,
    icon: <FaEnvelope size={20} />,
    url: "mailto:omahawar840@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/in/omanshumahawar/",
  },
  {
    id: 3,
    icon: <FaGithub size={20} />,
    url: "https://github.com/Omanshu840",
  },
  {
    id: 4,
    icon: <FaPhone size={20}/>,
    url: "tel:918209104660",
  },
  {
    id: 5,
    icon: <FaYoutube size={20}/>,
    url: "https://www.youtube.com/channel/UCb23FIK91ZIAttasQfM_1pA",
  },
]

export default socialLinks;
