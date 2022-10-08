import React, { useRef } from 'react'
import classesScoped from './SwiperCarousels.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
// Swiper components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export function SwiperCarousels() {
    // get ref to  assign external controls
    const swiperRef = useRef(null)
    const goNext = () => {
        // @ts-ignore
        if (swiperRef.current && swiperRef.current.swiper) {
            // @ts-ignore
            swiperRef.current.swiper.slideNext()
        }
    }
    const goPrev = () => {
        // @ts-ignore
        if (swiperRef.current && swiperRef.current.swiper) {
            // @ts-ignore
            swiperRef.current.swiper.slidePrev()
        }
    }

    const gotoSlide = () => {
        // @ts-ignore
        if (swiperRef.current && swiperRef.current.swiper) {
            // @ts-ignore
            //swiperRef.current.swiper.slideTo(index, speed, runCallbacks);
            swiperRef.current.swiper.slideTo(6)
        }
    }

    const slideContents = [
        'Slide #1',
        'Slide #2',
        'Slide #3',
        'Slide #4',
        'Slide #5',
    ]

    return (
        <div className={classesScoped['carousel-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Carousel {'>'} Clickable, dynamic bullets, Multiple
                        slides per View, Custom CSS for current zoomed element.
                        External control samples.
                    </div>
                    <div
                        className={`swiper-carousel-custom zoomed-active-element ${classesScoped['carousel-test-1']}`}
                    >
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            // @ts-ignore
                            ref={swiperRef}
                        >
                            {slideContents.map((content: string) => (
                                <SwiperSlide
                                    className={`swiper-carousel-custom-slide-wrapper ${classesScoped['slide-custom-wrapper']}`}
                                >
                                    <div
                                        className={`swiper-carousel-custom-slide-content ${classesScoped['slide-custom-content']}`}
                                    >
                                        {content}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div style={{ textAlign: 'center' }}>
                            <a href='#' onClick={goPrev}>
                                Test External go to Prev
                            </a>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <a href='#' onClick={goNext}>
                                Test External go to Next
                            </a>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <a href='#' onClick={gotoSlide}>
                                Test Jump to slide{' '}
                            </a>
                        </div>
                    </div>

                    <div className={classes.subtitle}>
                        Carousel {'>'} Clickable, dynamic bullets, navigation
                        with internal arrows
                    </div>
                    <div
                        className={`swiper-carousel-custom ${classesScoped['carousel-test-1']}`}
                    >
                        <Swiper
                            slidesPerView={1}
                            navigation
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            //scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {slideContents.map((content: string) => (
                                <SwiperSlide
                                    className={`swiper-carousel-custom-slide-wrapper ${classesScoped['slide-custom-wrapper']}`}
                                >
                                    <div
                                        className={`swiper-carousel-custom-slide-content ${classesScoped['slide-custom-content']}`}
                                    >
                                        {content}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className={classes.subtitle}>
                        Carousel {'>'} Scrollbar Bar Nav + Internal Next - Prev
                        arrows
                    </div>
                    <div
                        className={`swiper-carousel-custom ${classesScoped['carousel-test-2']}`}
                    >
                        <Swiper
                            slidesPerView={1}
                            navigation
                            // pagination={{
                            //     clickable: true,
                            //     dynamicBullets: true,
                            // }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {slideContents.map((content: string) => (
                                <SwiperSlide
                                    className={`swiper-carousel-custom-slide-wrapper ${classesScoped['slide-custom-wrapper']}`}
                                >
                                    <div
                                        className={`swiper-carousel-custom-slide-content ${classesScoped['slide-custom-content']}`}
                                    >
                                        {content}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className={classes.subtitle}>
                        Carousel {'>'} Standard Bullets + EXTERNAL Next - Prev
                        arrows
                    </div>
                    <div
                        className={`swiper-carousel-custom arrows-outside ${classesScoped['carousel-test-3']}`}
                    >
                        <Swiper
                            slidesPerView={1}
                            navigation
                            pagination={{
                                clickable: true,
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {slideContents.map((content: string) => (
                                <SwiperSlide
                                    className={`swiper-carousel-custom-slide-wrapper ${classesScoped['slide-custom-wrapper']}`}
                                >
                                    <div
                                        className={`swiper-carousel-custom-slide-content ${classesScoped['slide-custom-content']}`}
                                    >
                                        {content}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
