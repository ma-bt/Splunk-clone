import React from 'react'
import { Post } from '../Data/Data'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Template() {
    return (

        <section>
            <div className='temp'>
                <div className="row ">
                    <div className="col-lg-8 px-5">
                        <div className='my-4'>
                            <small>OUR TECHNOLOGY</small>
                        </div>
                        <h1 className='fw-bold'>How we Help you turn data into doing</h1>
                        <p>Our extensible data platform delivers unified security, full-stack observability and limitless custom applications.</p>

                    </div>
                    <div className="col-lg-4 px-5 d-none d-lg-block">
                        <div className='pt-5  mt-5 mx-5'>
                            <button type="button" class="btn ">Go to the Product review</button>
                        </div>
                    </div>
                </div>

                <div className='my-5'><div className="row ">
                    <div className="col-lg-4 px-5">
                        <div className='my-4'>
                            <small>Why Splunk</small>
                        </div>
                        <h3 className='fw-bold mb-4'>Innovation is imperative</h3>
                        <p>And your systems need to be secure and resilient to get it right. Use your data to tackle your most important problems, defend against threats and discover game-changing opportunities.</p> 
                        <div className='pt-5  '>
                            <button type="button" class="btn ">Explore Why Splunk</button>
                        </div>

                    </div>
                    <div className="col-lg-4 px-5 my-5 py-5 ">
                    <h3 className='fw-bold mb-4'>Enhance Security</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam dolore voluptates, vitae aspernatur consequuntur repellendus autem doloremque accusantium tempore ab ad rem. Officia ratione unde, dolores nam adipisci omnis!</p> 
                        <div className='pt-5  '>
                            <button type="button" class="btn ">Click Splunk</button>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 px-5 my-5 py-5 ">
                    <h3 className='fw-bold mb-4'>Unlock Innovation</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam dolore voluptates, vitae aspernatur consequuntur repellendus autem doloremque accusantium tempore ab ad rem. Officia ratione unde, dolores nam adipisci omnis!</p> 
                        <div className='pt-5  '>
                            <button type="button" class="btn ">Product Manage</button>
                        </div>
                        
                    </div>


                </div></div>


                <div>
                    <div className="row ">
                        <div className="col-lg-8 px-5">
                            <div className='my-4'>
                                <small>wHO  COUNTS ON US</small>
                            </div>
                            <h1 className='fw-bold'>Trusted by the world's leading organizations</h1>
                            <p>See why all types of customers really on splunk</p>

                        </div>
                        <div className="col-lg-4 px-5 d-none d-lg-block">
                            <div className='pt-5  mt-5 mx-5'>
                                <button type="button" class="btn ">View All Customer Stories</button>
                            </div>
                        </div>

                    </div>
                    <div className=' d-none d-lg-block '>
                      

                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={100}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}

                                breakpoints={{
                                    // when window width is >= 640px
                                    400: {
                                        width: 400,
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        width: 640,
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        width: 768,
                                        slidesPerView: 1,
                                    },
                                }}
                            >

                                <div className=" mb-3 " >
                                    {Post.map((a) => (
                                        <SwiperSlide>

                                            <div className="row g-0 bg-light p-5 ms-4 my-5 ">
                                                <div className="col-lg-6">
                                                    <img src={a.url} className="w-100" alt="" style={{}} />
                                                </div>
                                                <div className="col-lg-6 ps-5 ">
                                                    <div className="card-body">
                                                        <p className="card-text">{a.body}</p>
                                                        <p className="card-text"><small className="text-muted">{a.des}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>))}
                                </div>
                            </Swiper>
                        </div>

                    </div>
                </div >


         
        </section >
    )
}
