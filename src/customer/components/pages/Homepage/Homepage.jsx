import React from 'react'
import MainCarosel from '../../HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from '../../../../Men/men_kurta';

function Homepage() {
  return (
    <div>
      <MainCarosel/>
      <div className='py-20 space-y-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta}  sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mens_kurta}  sectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women'Saree"}/>
        <HomeSectionCarosel data={mens_kurta}  sectionName={"Women's Dress"}/>

        

      </div>
    </div>

  )
}

export default Homepage;
