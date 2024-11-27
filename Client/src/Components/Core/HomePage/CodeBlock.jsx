import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import CTAButton from './Button';

const CodeBlock = ({position, heading, subHeading, btn1, btn2, code, codeColor, bgGradient}) => {
  return (
    <div className={`flex ${position} my-24 justify-between`}>
      <div className='flex flex-col gap-16 w-[45%] justify-between items-center'>
        <div className='flex flex-col gap-3'>
            <h1>{heading}</h1>
            <p>{subHeading}</p>
        </div>
        <div className='flex flex-row w-[100%] gap-12'>
            <CTAButton className='flex flex-row items-center justify-center' active={btn1.active} linkto={btn1.linkto} >
                <div className='flex flex-row items-center justify-center gap-4'>
                {btn1.text}
                <FaArrowRight/>
                </div>   
            </CTAButton>
            <CTAButton active={btn2.active} linkto={btn2.linkto}>{btn2.text}</CTAButton>
        </div>
      </div>
      <div className='relative flex flex-row w-[45%] justify-between py-2 bg-white bg-opacity-5 backdrop-blur-lg ' >
        <img className='absolute top-[-100px] left-[-80px] z-0' src={bgGradient} alt='ellipse3'/>
        <div className='flex flex-col w-[10%] text-center justify-evenly text-richblack-200 text-sm z-10'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
        </div>
        <div className={`w-[90%] h-[240px] flex flex-col text-sm leading-[21px] ${codeColor} z-10`}>
            <TypeAnimation
                sequence={[
                    code,         
                    10000,
                    ""                 
                ]}
                repeat={Infinity}      // Infinite loop
                cursor={true}          // Show cursor
                style={{
                    whiteSpace: "pre-wrap",   // Preserve line breaks
                    fontFamily: "monospace",  // Use monospaced font
                    display: "block"
                }}
                omitDeletionAnimation={true}
            />
        </div>
      </div>
    </div>
  )
}

export default CodeBlock;
