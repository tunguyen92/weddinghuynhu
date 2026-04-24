import { Carousel, Grid } from "antd";

import { Arrow } from "~/components/arrow";
import { noimage } from "~/assets/images/album";
const { useBreakpoint } = Grid;

const SlideContent = () => {
  return (
    <div className="wedding-announcement w-70 lg:w-full lg:max-w-95 h-70 lg:h-95 bg-[#b2c9d3cc] rounded-full absolute flex items-center justify-center flex-col top-1/2 left-1/2 -translate-1/2">
      {/* <p className="text-white mb-4">WE ARE GETTING MARRIED</p>
        <h3 className="font-great-vibes text-4xl md:text-5xl lg:text-6xl text-white">
          Save Our Date
        </h3>
        <p className="text-white mt-4">16 Tháng Năm 2026</p>*/}
      <span className="absolute inline-flex h-full w-full animate-pulse-scale rounded-full bg-primary-light opacity-30 z-[-1]"></span>

      <h3 className="couple-text w-full absolute top-0">
        <svg viewBox="0 0 500 190">
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            style={{ fill: "transparent" }}
          />
          <text className="text-[41px] [text-shadow:0px_3px_0px_rgba(0_0_0/_0.35)] fill-white">
            <textPath xlinkHref="#curve">We're Getting Married</textPath>
          </text>
        </svg>
      </h3>
      <h2 className="couple-name font-great-vibes text-center text-4xl md:text-5xl text-white [text-shadow:0px_4px_0px_rgba(0_0_0/_0.35)] mt-4">
        Huỳnh Như <br /> &nbsp;&&nbsp; <br /> Thanh Huy
      </h2>
    </div>
  );
};

const HomeCarousel = () => {
  const screens = useBreakpoint();
  const isLargeScreens = screens.md;

  const slides = [
    { src: noimage, alt: "noimage" },
    { src: noimage, alt: "noimage" },
    { src: isLargeScreens ? noimage : noimage, alt: "noimage" },
  ];

  const slideClass = `
    background-slide h-screen relative 
    before:bg-[url(/images/slide-top-arrow.png)] before:bg-cover before:absolute before:size-18 sm:before:size-24 lg:before:size-36 
    before:left-5 sm:before:left-8 before:top-5 sm:before:top-8 before:z-10 
    after:bg-[url(/images/slide-bottom-arrow.png)] after:bg-cover after:absolute after:size-18 sm:after:size-24 lg:after:size-36 
    after:right-5 sm:after:right-8 after:bottom-5 sm:after:bottom-8 after:z-10
  `;

  return (
    <Carousel
      effect="fade"
      autoplay
      pauseOnHover
      arrows={!screens.xs}
      prevArrow={<Arrow />}
      nextArrow={<Arrow />}
    >
      {slides.map(({ src, alt }, index) => (
        <div key={index} className={slideClass}>
          <img src={src} alt={alt} className="size-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <SlideContent />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
