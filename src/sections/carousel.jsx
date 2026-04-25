import { Carousel, Grid } from "antd";

import { Arrow } from "~/components/arrow";
import { img11, img12, img66 } from "~/assets/images/album";
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
          <text className="text-[41px] fill-white">
            <textPath xlinkHref="#curve">We're Getting Married</textPath>
          </text>
        </svg>
      </h3>
      <h2 className="couple-name font-great-vibes text-center text-4xl md:text-5xl text-white mt-4">
        Huỳnh Như <br /> &nbsp;&&nbsp; <br /> Thanh Huy
      </h2>
    </div>
  );
};

const HomeCarousel = () => {
  const screens = useBreakpoint();
  const isLargeScreens = screens.md;

  const slides = [
    { src: isLargeScreens ? img66 : img11, alt: "Image 11" },
    { src: isLargeScreens ? img66 : img12, alt: "Image 12" },
  ];

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
        <div key={index} className="background-slide h-screen relative">
          <img src={src} alt={alt} className="size-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <SlideContent />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
