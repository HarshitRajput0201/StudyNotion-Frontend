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
import Instructor from "../assets/Images/Instructor.png";
import { TbHeartFilled } from "react-icons/tb";
import {FooterLink} from "../data/footer-links.js"
import LogoLight from "../assets/Logo/Logo-Full-Light.png";
import Facebook_Logo from "../assets/Images/Facebook_Logo.svg";
import Google_Logo from "../assets/Images/Google_Logo.svg";
import Twitter_Logo from "../assets/Images/Twitter_Logo.svg";
import Youtube_Logo from "../assets/Images/Youtube_Logo.svg";



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
        <div className='h-80 flex justify-center items-center' style={{ backgroundImage: `url(${Bghome})` }}>
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
        <div className='flex flex-col gap-12 py-24'>
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
        <div className='flex flex-col gap-14 my-16'>
          <div className='w-[1028px] mx-auto flex flex-col'>
            <p className='text-4xl font-semibold text-center '>Your swiss knife for <HighlightedText>learning any language</HighlightedText></p>
            <p className='text-richblack-600 text-center px-40 py-4'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
          </div>
          <LearningLanBlock/>
          <div className='w-[1028px] mx-auto flex items-center justify-center'>
            <CTAButton active={true} linkto={"/login"}>Learn More</CTAButton>
          </div>
        </div>
      </div>
      {/* Section 2 Ends */}

      {/* Section 3 Starts */}
      <div className='section-3 flex flex-col'>
        <div className='w-[1028px] flex flex-row mx-auto my-20'>
          <div className='flex items-center justify-center w-[50%]' style={{ boxShadow: "-20px -20px 0px 0px #FFFFFF" }}>
            <img src={Instructor} alt="" />
          </div>
          <div className='flex flex-col items-start justify-center w-[50%] pl-20 gap-16'>
            <div className='flex flex-col gap-3 '>
              <p className='text-white text-4xl font-semibold w-64'>Become an <HighlightedText>Instructor</HighlightedText></p>
              <p className='text-richblack-300'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            </div>
            <div className='flex justify-start items-center'>
              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex flex-row justify-center items-center gap-2'>
                  Start Teaching Today
                  <FaArrowRight/>
                </div>
              </CTAButton>`
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 Ends */}

      {/* Footer Starts */}
      <div className='footer flex flex-col gap-8 bg-richblack-800 text-richblack-300 py-14'>
        <div className='w-[1028px] mx-auto flex flex-row'>
          <div className='w-[50%] flex flex-row gap-8 items-start border-r border-richblack-700'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-center items-center'>
                <img className='w-40' src={LogoLight} alt="" />
              </div>
              <div className='flex flex-col gap-3'>
                <p className='font-semibold text-richblack-100'>{FooterLink[0].title}</p>
                <div className='flex flex-col justify-center items-start gap-2'>
                  {
                    FooterLink[0].links.map((link, index) => (
                      <p className='flex justify-start items-center text-sm decoration-0' key={index}>
                        <a href={link.link}>{link.title}</a>
                      </p>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-row gap-3'>
                <div>
                  <a className='flex justify-center items-center' href="/facebook"><img src={Facebook_Logo} alt="" className='w-6 h-6 ' /></a>
                </div>
                <div>
                  <a className='flex justify-center items-center' href="/google"><img src={Google_Logo} alt="" className='w-6 h-6' /></a>
                </div>
                <div>
                  <a className='flex justify-center items-center' href="/twitter"><img src={Twitter_Logo} alt="" className='w-6 h-6' /></a>
                </div>
                <div>
                  <a className='flex justify-center items-center' href="/youtube"><img src={Youtube_Logo} alt="" className='w-6 h-6 ' /></a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-9'>
              <div className='flex flex-col gap-4'>
                <p className='font-semibold text-richblack-100'>{FooterLink[1].title}</p>
                <div className='flex flex-col justify-center items-start gap-2'>
                  {
                    FooterLink[1].links.map((link, index) => (
                      <p className='flex justify-start items-center text-sm decoration-0' key={index}>
                        <a href={link.link}>{link.title}</a>
                      </p>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-semibold text-richblack-100'>{FooterLink[2].title}</p>
                <div className='flex flex-col justify-center items-start gap-2'>
                  {
                    FooterLink[2].links.map((link, index) => (
                      <p className='flex justify-start items-center text-sm decoration-0' key={index}>
                        <a href={link.link}>{link.title}</a>
                      </p>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-9'>
              <div className='flex flex-col gap-4'>
                <p className='font-semibold text-richblack-100'>{FooterLink[3].title}</p>
                <div className='flex flex-col justify-center items-start gap-2'>
                  {
                    FooterLink[3].links.map((link, index) => (
                      <p className='flex justify-start items-center text-sm decoration-0' key={index}>
                        <a href={link.link}>{link.title}</a>
                      </p>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-semibold text-richblack-100'>{FooterLink[4].title}</p>
                <div className='flex flex-col justify-center items-start gap-2'>
                  {
                    FooterLink[4].links.map((link, index) => (
                      <p className='flex justify-start items-center text-sm decoration-0' key={index}>
                        <a href={link.link}>{link.title}</a>
                      </p>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='w-[50%] flex flex-row gap-8 justify-end items-start'>
            <div className='flex flex-col gap-4'>
              <p className='font-semibold text-richblack-100'>{FooterLink[5].title}</p>
              <div className='flex flex-col justify-center items-start gap-2'>
                {
                  FooterLink[5].links.map((link, index) => (
                    <p className='flex justify-start items-center text-sm decoration-0' key={index}>
                      <a href={link.link}>{link.title}</a>
                    </p>
                  ))
                }
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-semibold text-richblack-100'>{FooterLink[6].title}</p>
              <div className='flex flex-col justify-center items-start gap-2'>
                {
                  FooterLink[6].links.map((link, index) => (
                    <p className='flex justify-start items-center text-sm decoration-0' key={index}>
                      <a href={link.link}>{link.title}</a>
                    </p>
                  ))
                }
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-semibold text-richblack-100'>{FooterLink[7].title}</p>
              <div className='flex flex-col justify-center items-start gap-2'>
                {
                  FooterLink[7].links.map((link, index) => (
                    <p className='flex justify-start items-center text-sm decoration-0' key={index}>
                      <a href={link.link}>{link.title}</a>
                    </p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className='w-[1028px] mx-auto h-[1px] border-t border-richblack-700'></div>
        <div className='w-[1028px] flex flex-row justify-between items-center mx-auto text-sm'>
          <div className='flex flex-row items-center justify-center'>
            <div className='pr-2'>Privacy Policy</div>
            <div className='w-[1px] h-3 border border-richblack-600 '></div>
            <div className='px-2'>Cookie Policy</div>
            <div className='w-[1px] h-3 border border-richblack-600 '></div>
            <div className='px-2'>Terms</div>
          </div>
          <div className='flex justify-center items-center '>Made with <TbHeartFilled className='inline-flex mx-1 text-[#EF476F]'/> CodeHelp © 2023 StudyNotion</div>
        </div>
      </div>
    </div>
  )
}

export default Home
