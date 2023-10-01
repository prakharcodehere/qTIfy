import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import { useState } from 'react';
import { ReactComponent as rightArrow } from '../../assets/right_arrow.svg';

const CarouselRightNavigation = () => {
    const swiper =useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isBeginning)
  
    useEffect(()=> {
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        })
    },[])
  
    return (
    <div>
       {!isEnd && <rightArrow onClick={()=> swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation
