import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({children, linkto, active}) => {
  return (
    <Link to={linkto}>
        <div style={{ boxShadow: '-1px -1px 0px 0px #FFFFFF82 inset' }} className={`px-6 py-3 text-[16px] rounded-md font-medium transition-all duration-200 hover:scale-95  ${active ? "bg-yellow-50 text-black hover:bg-yellow-300" : "bg-richblack-800 text-white hover:bg-richblack-900"}`}>
            {children}
        </div>
    </Link>
  )
}

export default CTAButton
