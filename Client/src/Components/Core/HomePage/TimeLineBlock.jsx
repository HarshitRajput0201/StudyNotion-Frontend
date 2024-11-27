import React from 'react';
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import TimelineImg from "../../../assets/Images/TimelineImage.png";


const TimeLineBlock = () => {

    const timeline = [
        {
            logo: Logo1,
            heading: 'Leadership',
            description: "Fully committed to the success company"
        },
        {
            logo: Logo2,
            heading: 'Responsibility',
            description: "Students will always be our top priority"
        },
        {
            logo: Logo3,
            heading: 'Flexibility',
            description: "The ability to switch is an important skills"
        },
        {
            logo: Logo4,
            heading: 'Solve the problem',
            description: "Code your way to a solution"
        }
    ]
  return (
    <div className='w-[1028px] h-[460px] mx-auto flex flex-row gap-16 items-center justify-between z-10'>
      <div className='h-[100%] flex flex-col items-center justify-evenly relative'>
        <div className='h-[32px] w-[1px] border border-dashed border-richblack-300 absolute left-[36px] top-[108px]'></div>
        <div className='h-[32px] w-[1px] border border-dashed border-richblack-300 absolute left-[36px]'></div>
        <div className='h-[32px] w-[1px] border border-dashed border-richblack-300 absolute left-[36px] bottom-[105px]'></div>
        {
            timeline.map((element, index) => {
                return(
                    <div className='w-full flex flex-row py-2 px-2 gap-6 justify-start items-center' key={index}>
                        <div className='flex justify-center items-center '>
                            <div className='w-14 h-14 flex items-center justify-center bg-white rounded-full'>
                                <img className='w-6 h-6' src={element.logo} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-start'>
                            <p className='font-semibold text-xl'>{element.heading}</p>
                            <p className='text-sm text-richblack-600'>{element.description}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
      <div className='h-full relative'>
        <img className='h-full' src={TimelineImg} alt="" />
        <div className='w-[450px] h-[100px] bg-caribbeangreen-700 absolute translate-x-[18%] translate-y-[-50%] flex flex-row items-center justify-center py-8'>
            <div className='w-1/2 flex flex-row px-8 items-center justify-center gap-5 border-r border-r-caribbeangreen-200 border-solid'>
                <div className='text-3xl font-bold text-white'>10</div>
                <div className='text-xs text-caribbeangreen-200'>YEARS EXPERIENCES</div>
            </div>
            <div className='w-1/2 flex flex-row px-8 items-center justify-center gap-5'>
                <div className='text-3xl font-bold text-white'>250</div>
                <div className='text-xs text-caribbeangreen-200'>TYPES OF COURSES</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLineBlock
