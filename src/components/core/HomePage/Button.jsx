import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, active, linkto}) => {
  return (
    <Link to={linkto}>
        <div className={`text-lg px-6 py-3 w-fit rounded-md font-medium transition-all duration-200 hover:scale-90  ${active ? "bg-[#FFD60A] shadow-[2px_2px_0px_0px_rgba(255,235,135)]" : "bg-[#161D29] text-[#F1F2FF] shadow-[2px_2px_0px_0px_rgba(89,94,103)]"}`}>
            {children}
        </div>
    </Link>
  )
}

export default Button
