import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4';

const Home = () => {
  return (
    <div>
      <section className='font-inter w-[1200px] m-auto'>
        <div className='w-[1000px] mx-auto flex flex-col gap-11 items-center pt-[150px]'>
            <Link to={'/signup'}>
                <div className='w-fit bg-richblack-800 text-lg text-[#999daa] py-3 px-7 rounded-full flex flex-row items-center gap-2 shadow-sm shadow-[#999daa] transition-all duration-200 hover:scale-95'>
                    <p>Become an Instructor</p>
                    <FaArrowRightLong />
                </div>
            </Link>
            <div className='w-full text-center text-[#F1F2FF] '>
                <h1 className='text-5xl font-semibold pb-6'>Empower Your Future with <span className='text-[aqua]'>Coding Skills</span></h1>
                
                <p className='text-[#999daa] text-lg text-center'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
            </div>
            <div className='w-fit flex flex-row gap-6'>
                <CTAButton active={true} linkto={'/signup'}>Learn More</CTAButton>
                <CTAButton active={false} linkto={'/login'}>Book a Demo</CTAButton>
            </div>
        </div>
        <div className='mx-5 my-[200px] shadow-[rgba(153,_157,_170,_0.4)_0px_0px_0px_2px,_rgba(153,_157,_170,_0.65)_0px_10px_60px_-1px,_rgba(255,_255,_255,_0.08)_0px_3px_0px_inset]'>
            <video muted autoPlay loop>
                <source src={Banner} />
            </video>
        </div>
      </section>
    </div>
  )
}

export default Home
