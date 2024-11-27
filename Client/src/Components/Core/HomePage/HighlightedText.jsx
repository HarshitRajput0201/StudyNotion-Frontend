import React from 'react'

const HighlightedText = ({children}) => {
  return (
    <div className='inline-flex text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'>
      {children}
    </div>
  )
}

export default HighlightedText
