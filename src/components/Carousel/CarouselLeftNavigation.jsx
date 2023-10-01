import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import { useState } from 'react';
import { ReactComponent as leftArrow } from '../../assets/let_arrow.svg';

const CarouselLeftNavigation = () => {
    const swiper =useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning)
  
    useEffect(()=> {
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        })
    },[])
  
    return (
    <div>
       {!isBeginning && <leftArrow onClick={()=> swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation
