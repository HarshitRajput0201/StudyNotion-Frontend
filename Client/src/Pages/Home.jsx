import React from 'react';
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import CTAButton from "../Components/Core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import Ellipse from "../assets/Images/Ellipse 2.svg";
import CodeBlock from "../Components/Core/HomePage/CodeBlock";
import Ellipse_2 from "../assets/Images/Ellipse 3.svg";
import HighlightedText from '../Components/Core/HomePage/HighlightedText';
import Bghome from "../assets/Images/bghome.svg"
import TimeLineBlock from '../Components/Core/HomePage/TimeLineBlock';
import LearningLanBlock from '../Components/Core/HomePage/LearningLanBlock';

const Home = () => {
  return (
    <div>
      {/* Section 1 Starts */}
      <div className='section-1 font-inter relative mx-auto flex flex-col items-center justify-between text-white'>
        <div className='w-[913px] mx-auto my-14 flex flex-col gap-9 justify-between items-center mt-[124px]'>
          <Link to={"/signup"}>
              <div style={{ boxShadow: '0px -1px 0px 0px #FFFFFF2E inset' }} className='w-[235px] bg-richblack-800 flex flex-row px-5 py-2 justify-center items-center gap-3 font-medium text-richblack-200 rounded-[500px] transition-all duration-200 hover:scale-95 hover:bg-richblack-900 '>
                  <p>Become an Instructor</p>
                  <FaArrowRight />
              </div>
          </Link>
          <div className='w-[100%] flex flex-col justify-center items-center gap-4'>
            <h1 className='font-semibold text-[36px] flex gap-2'>Empower Your Future with <HighlightedText> Coding Skills</HighlightedText></h1>
            <p className='font-medium text-richblack-200 text-lg text-center'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </p>
          </div>
          <div className='flex flex-row gap-6 z-[10]'>
            <CTAButton linkto={"/signup"} active={true}>Learn More</CTAButton>
            <CTAButton linkto={"/login"} active={false}>Book a Demo</CTAButton>
          </div>
        </div>
        <div className="w-[1028px] relative mb-20 " style={{ boxShadow: '20px 20px 0px 0px #F5F5F5' }}>
          <img
            className="absolute top-[-100px] left-[25%] "
            src={Ellipse}
            alt="Ellipse"
          />
          <video
            muted
            autoPlay
            loop
            className="z-[1] relative"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
        <div className='w-[1028px]'>
          <CodeBlock 
            position={"lg:flex-row"}
            heading={
              <div className='text-3xl font-semibold'>
                Unlock your <HighlightedText >coding potential</HighlightedText> with our online courses.
              </div>
            }
            subHeading={
              <div className='text-sm font-medium text-richblack-200'>
                Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
              </div>
            } 
            btn1={
              {
                text: "Try it Yourself",
                active: true,
                linkto: "/signup"
              }
            } 
            btn2={
              {
                text: "Learn More",
                active: false,
                linkto: "/login"
              }
            }
            code={`<html lang="en">\n<head>\n <meta charset="UTF-8">\n <title>Document</title>\n</head>\n<body>\n <h1>Welcome to My Website</h1>\n <h2>My Name is Harshit</h2>\n <script src="script.js"></script>\n</body>\n</html>`}         
            codeColor={"text-[#16c6fc]"}
            bgGradient={Ellipse_2}
          />
        </div>
        <div className='w-[1028px]'>
          <CodeBlock 
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-3xl font-semibold'>
                Start <HighlightedText>coding in seconds</HighlightedText>
              </div>
            }
            subHeading={
              <div className='text-md font-medium text-richblack-200'>
                Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
              </div>
            } 
            btn1={
              {
                text: "Continue Lesson",
                active: true,
                linkto: "/signup"
              }
            } 
            btn2={
              {
                text: "Learn More",
                active: false,
                linkto: "/login"
              }
            }
            code={`<html lang="en">\n<head>\n <meta charset="UTF-8">\n <title>Document</title>\n</head>\n<body>\n <h1>Welcome to My Website</h1>\n <h2>My Name is Harshit</h2>\n <script src="script.js"></script>\n</body>\n</html>`}         
            codeColor={"text-yellow-25"}
            bgGradient={Ellipse}
          />
        </div>
      </div>
      {/* Section 1 Ends */}

      {/* Section 2 Starts */}
      <div className='section-2 bg-[#f7f7f7] font-inter flex flex-col mx-auto'>
        <div className='w-screen h-80 flex justify-center items-center' style={{ backgroundImage: `url(${Bghome})` }}>
          <div className='flex flex-row gap-12'>
            <CTAButton active={true} linkto={"/signup"}>
              <div className='flex flex-row justify-center items-center gap-2'>
                Explore Full catelog
                <FaArrowRight/>
              </div>
            </CTAButton>
            <CTAButton active={false} linkto={"/signup"}>
              Learn More
            </CTAButton>
          </div>
        </div>
        <div className='w-screen flex flex-col gap-12 py-24'>
          <div className="w-[1028px] mx-auto flex flex-row gap-12">
              <div className='text-4xl font-semibold'>
                Get the skills you need for a <HighlightedText>job that is in demand.</HighlightedText>
              </div>
              <div className='flex flex-col items-start gap-8'>
                <div className='text-md'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                <CTAButton active={true} linkto={"/login"}>Learn More</CTAButton>
              </div>
          </div>
          <TimeLineBlock/>          
        </div>
        <div>
          <div></div>
          <LearningLanBlock/>
        </div>
        
      </div>
    </div>
  )
}

export default Home
