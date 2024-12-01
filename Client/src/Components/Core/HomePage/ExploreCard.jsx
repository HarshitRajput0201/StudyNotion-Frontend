import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { TbBinaryTree2 } from "react-icons/tb";

const ExploreCard = ({cardData, currentCard, setCurrentCard}) => {

    const handleClick = () => {
        setCurrentCard(cardData.heading); 
    };

  return (
    <div onClick={handleClick} className={`w-1/3 flex flex-col h-[260px] my-10 justify-between  ${currentCard === cardData.heading ? "bg-[#f7f7f7] " : "bg-richblack-800" } text-richblack-300`} style={currentCard === cardData.heading ? { boxShadow: "12px 12px 0px 0px #FFD60A" } : { boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}>
        <div className='flex  flex-col gap-2 px-6 py-6'>
            <p className={`text-xl font-semibold ${currentCard === cardData.heading ? "text-richblack-800" : "text-richblack-50"}`}>{cardData.heading}</p>
            <p>{cardData.description}</p>
        </div>
        <div className={`flex flex-row justify-between border-t border-dashed border-richblack-200 px-6 py-4 ${currentCard === cardData.heading ? "text-richblue-300" : "text-richblack-300"}`}>
            <div className='flex flex-row justify-center items-center font-medium gap-2'>
                <FaUserFriends/>
                <p>{cardData.level}</p>
            </div>
            <div className='flex flex-row justify-center items-center font-medium gap-2'>
                <TbBinaryTree2/>
                <p>{cardData.lessionNumber} Lessons</p>
            </div>
        </div>
    </div>
  )
}

export default ExploreCard
