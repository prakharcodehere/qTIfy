import React, { useEffect } from "react";
 
import styles from "./Carousel.module.css";
import {Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Carousel = ({ data, componentRender }) => {
  const Controls = ({ data }) => {
  const swiper = useSwiper();
    console.log(swiper);

    useEffect(() => {
      swiper?.slideTo(null);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return <></>;
  };
  return (
    <div className={styles.wrapper}>
      <Swiper
        styles={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data}/>
  <CarouselLeftNavigation/>
  <CarouselRightNavigation/>
{
  data.map((item)=> {
    return(
      <SwiperSlide>{componentRender(item)}</SwiperSlide>
    )
  })
}
      </Swiper>
    </div>
  );
};

export default Carousel;
