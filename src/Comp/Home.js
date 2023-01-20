import React from 'react'
import { useEffect, useState } from "react";
import Template from './Template';
import Banner from '../Assets/img/banner.png'


export default function Home() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    return (
        <div className="home">

            <div className="container">
                <div className="banner">
                    <div className="row ">
                        <div className="col-lg-6 mt-5  pt-5 ">
                            <h1 className=' fw-bold px-5'>The Unified Security and Observability Platform </h1>
                            <p className='px-5'>Go from visibility to action, fast and at scale.</p>
                            <button type="button" class="btn mx-5">See the Power of Splunk &nbsp;<i class="bi bi-play-circle"></i></button>
                        </div>
                        <div className="col-lg-6 mb-5 d-none d-lg-block ">
                            <img src={Banner} className='banner-img' alt="abc" />
                        </div>
                    </div>

                </div>

                {/* 2nd-Banner */}

                <div className="banner-2 py-3">
                    <div className="row">
                        <div className="col-lg-3 px-5 pt-5">
                            <div className=" border-start border-1 border-secondary">
                                <h1 className=' fw-bold ps-4 '><span>25</span>M</h1>
                                <p className='ps-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus tenetur saepe </p>
                                <img src="https://www.splunk.com/content/dam/splunk2/en_us/images/customers/heineken/heineken-customer-logo.png" alt="" style={{ width: '150px', height: '40px' }} className="ps-4" />

                            </div>
                        </div>

                        <div className="col-lg-3 px-5 pt-5">
                            <div className=" border-start border-1 border-secondary">
                                <h1 className=' fw-bold ps-4 '><span>300</span>+</h1>
                                <p className='ps-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus tenetur saepe </p>
                                <img src="https://www.splunk.com/content/dam/splunk2/en_us/images/customers/mclaren-racing/mclaren-customer-logo.png" alt="" style={{ width: '150px', height: '35px' }} className="ps-4" />

                            </div>
                        </div>

                        <div className="col-lg-3 px-5 pt-5">
                            <div className=" border-start border-1 border-secondary">
                                <h1 className=' fw-bold ps-4 '><span>70</span>%</h1>
                                <p className='ps-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus tenetur saepe </p>
                                <img src="https://www.splunk.com/content/dam/images/we_splunk/honda-logo-rgb.svg" alt="" style={{ width: '150px', height: '35px' }} className="ps-4" />

                            </div>
                        </div>
                        <div className="col-lg-3 px-5 pt-5">
                            <div className=" border-start border-1 border-secondary">
                                <h1 className=' fw-bold ps-4 '><span>2</span>x</h1>
                                <p className='ps-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus tenetur saepe </p>
                                <img src="https://www.splunk.com/content/dam/images/we_splunk/tesco-customer-logo.webp" alt="" style={{ width: '150px', height: '35px' }} className="ps-4" />

                            </div>
                        </div>
                    </div>
                </div>

                {/* 3rd-Banner */}

                <div className="banner-3 my-5">
                    <div className="box  shadow-lg   bg-body rounded  border border-2  mx-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="https://www.splunk.com/content/dam/splunk2/images/homepage/gartner-logo.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 pt-5">
                                <h4 className='fw-bold fs-5 '>See why Splunk is a nine-tine SIEM Leader.</h4>
                                <p>2022 Gartner® Magic Quadrant™ for SIEM</p>

                            </div>
                            <div className="col-lg-2">
                                <div className="banner-3-inner">
                                    <span>Get the Report</span>
                                    <div className="bor"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Template />
            </div>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top shadow      border border-3">
                   <h1 className='fw-bold '><i class="bi bi-arrow-up-short"></i></h1>
                </button>
            )}
        </div>
    )
}
