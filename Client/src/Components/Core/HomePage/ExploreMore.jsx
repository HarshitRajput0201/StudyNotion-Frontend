import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import ExploreCard from './ExploreCard';

const tabsName = ["Free", "New to Coding", "Most Popular", "Skills Paths", "Career Paths"];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) =>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

  return (
    <div className='flex flex-col justify-center my-6'>
      <div className='flex justify-center items-center'>
        <div className='flex flex-row justify-center items-center bg-richblack-800 rounded-full px-1 py-1 gap-1'>
            {
                tabsName.map((element, index) => {
                    return(
                        <div className={`px-5 py-1 rounded-full ${currentTab === element ? "text-white bg-richblack-900" : "text-richblack-300 bg-richblack-800"} transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-white`} key={index} onClick={() => setMyCards(element)}>
                            {element}
                        </div>
                    )
                })
            }
        </div>
      </div>
      <div className='flex flex-row gap-9'>
        {
            courses.map((element, index) => {
                return(
                    <ExploreCard 
                        key={index}
                        cardData={element}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                    /> 
                )
            })
        }
      </div>
    </div>
  )
}

export default ExploreMore
