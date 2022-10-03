import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="./images/slider-badag.jpg" alt="" srcset="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="./images/slider-badging.jpg" alt="" srcset="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="./images/slider-scale.jpg" alt="" srcset="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="./images/slider-scales.jpg" alt="" srcset="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 2rem;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    overflow: hidden;
    &:hover {
      opacity: 1;
      transition: opactiy 0.2s ease-in-out;
    }
  }

  ul li button {
    &:before {
      font-size: 1rem;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -7.5rem;
  }

  .slick-next {
    right: -7.5rem;
  }
`;

const Wrap = styled.div`
  border-radius: 0.4rem;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 0.4rem;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 0.4rem;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      transition-duration: 300ms;
      border: 0.4rem solid rgba(249, 249, 249, 0.8);
    }
  }
`;

export default ImgSlider;
