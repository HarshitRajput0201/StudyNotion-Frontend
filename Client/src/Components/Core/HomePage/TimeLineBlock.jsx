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
    <div className='w-[1028px] mx-auto flex flex-row'>
      <div className='flex flex-col'>
        {
            timeline.map((element, index) => {
                return(
                    <div className='flex flex-row' key={index}>
                        <div>
                            <img src={element.logo} alt="" />
                        </div>
                        <div>
                            <p>{element.heading}</p>
                            <p>{element.description}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
      <div>
        <img src={TimelineImg} alt="" />
      </div>
    </div>
  )
}

export default TimeLineBlock
