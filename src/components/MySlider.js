import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Iphone from "../assets/images/iphone.webp";
import Card from "./Card";

const SliderCard = ({ data }) => {
  return (
    <div
      className={`${data.bg} font-poppins rounded-2xl text-white flex items-center justify-center p-5 h-[200px]`}
    >
      <img className="w-[220px]" src={Iphone} />
      <div>
        <p className="font-bold text-3xl">{data.text}</p>
        <p className="text-sm my-2">{data.description}</p>
        <button className="my-1 shadow-sm shadow-gray-700 bg-gray-200 text-black rounded-full px-2 py-1 text-xs">
          View More
        </button>
      </div>
    </div>
  );
};

var settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplayspeed: 600,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

var data = [
  {
    bg: "bg-black",
    text: "Apple Next Gen IPhone with 128 GB RAM!",
    description:
      "Don't miss the Bumper Friday sale and enjoy the best deal in 2023",
  },

  {
    bg: "bg-yellow-800",
    text: "Boat Exceptional WATCH",
    description:
      "Don't miss the Bumper Friday sale and enjoy the best deal in 2023",
  },

  {
    bg: "bg-red-800",
    text: "A Magical way to Interact",
    description:
      "Don't miss the Bumper Friday sale and enjoy the best deal in 2023",
  },
];

const MySlider = () => {
  return (
    <Card>
      <div className="">
        <Slider {...settings}>
          {data.map((v, i) => (
            <SliderCard data={v} />
          ))}
        </Slider>
      </div>
    </Card>
  );
};

export default MySlider;
