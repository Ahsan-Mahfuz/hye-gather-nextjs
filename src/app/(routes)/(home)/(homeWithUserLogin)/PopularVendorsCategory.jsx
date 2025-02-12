import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import entertainment from '../../../assets/entertainment.jpg'
import photography from '../../../assets/photography.jpg'
import venues from '../../../assets/venues.jpg'
import djs from '../../../assets/djs.jpg'
import bar from '../../../assets/Bar.jpg'
import food from '../../../assets/food.jpg'

const TestimonialData = [
  {
    id: 1,
    img: entertainment,
    name: 'Entertainment',
  },
  {
    id: 2,
    img: photography,
    name: 'Photography',
  },
  {
    id: 3,
    img: venues,
    name: 'Venues',
  },
  {
    id: 4,
    img: djs,
    name: 'DJs',
  },
  {
    id: 5,
    img: bar,
    name: 'Bars',
  },
  {
    id: 6,
    img: food,
    name: 'Food',
  },
]

const PopularVendorsCategory = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className=" responsive-width pt-80 pb-80 max-md:pb-40 flex flex-col justify-center ">
      <h1 className="font-bold text-3xl">Popular Vendor Category</h1>
      <div className=" mb-10 ">
        <div className=" mx-auto">
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div className="" key={data.id}>
                  <div className="flex flex-col gap-4 py-8 px-2  rounded-xl  relative">
                    <div className="mb-4 flex items-center justify-center">
                      <img
                        src={data.img}
                        alt={data.name}
                        className=" w-[500px] h-[250px] object-center object-cover"
                      />
                    </div>
                    <h2 className="text-center text-2xl font-semibold">
                      {data.name}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularVendorsCategory
