import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "../Slider/Slider.module.css";
import ImgDiv from "./ImgDiv/ImgDiv";

let slider_data = [
  {
    id: 1,
    src: "https://cdn1.epicgames.com/salesEvent/salesEvent/5c29b5d4-4379-4171-a2cb-f067247c1c3a_2560x1440-4ce5e6a5413030aef3ef0ff2920d6402",
  },
  {
    id: 2,
    src: "https://c.files.bbci.co.uk/E909/production/_112375695_crucible976.jpg",
  },
  {
    id: 3,
    src: "https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7f0718a8a5451b88475559f0819a35cd",
  },
  {
    id: 4,
    src: "https://cdn2.unrealengine.com/egs-godfall-counterplaygames-s1-2560x1440-bcb522dab252.jpg",
  },
  {
    id: 5,
    src: "https://www.ixbt.com/img/n1/news/2021/11/5/122176-Shadow-of-the-Tomb-Raider-1-1_large.jpg",
  },
];

let slider_elements = slider_data.map((s) => <ImgDiv img={s.src} />);

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={s.slider}>
        <Slider {...settings}>{slider_elements}</Slider>
      </div>
    );
  }
}
