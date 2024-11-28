import React from 'react';
import Img_1 from "../../../assets/Images/Know_your_progress.svg";
import Img_2 from "../../../assets/Images/Compare_with_others.svg";
import Img_3 from "../../../assets/Images/Plan_your_lessons.svg";


const LearningLanBlock = () => {
  return (
    <div className='w-[1028px] flex mx-auto' >
      <div className='w-full h-full flex flex-row'>
        <img className='object-contain w-[380px] ml-6 -mr-24' src={Img_1} alt="" />
        <img className='object-contain w-[420px]' src={Img_2} alt="" />
        <img className='object-contain w-[420px] -ml-28' src={Img_3} alt="" />
      </div>
    </div>
  )
}

export default LearningLanBlock
