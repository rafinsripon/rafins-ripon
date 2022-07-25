import React from 'react';
import Tdata from "../data/Tdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="testimonial_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-55">
                            <div className="common_title">
                                <div className="border_left"></div>
                                <span>Lorem ipsum dolor sit.</span>
                                <h2>my Testimonial</h2>
                            </div>
                        </div>
                        <div className="col-md-6 mb-55">
                            <div className="common_title">
                                <div className="border_right"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam repudiandae magnam ab aperiam deserunt?</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider {...settings}>
                            {
                                Tdata.map((item) => (
                                    <div className="test_cards">
                                        <div className="card_item">
                                            <img src={item.imglink} alt={item.clientName} />
                                            <div className="card_content">
                                                <h4>{item.clientName}</h4>
                                                <h3>{item.clientAd}</h3>
                                                <span>{item.icon}</span>
                                            </div>
                                        </div>
                                        <div className="card_bottom">
                                            <p>{item.clientRvieW}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial;