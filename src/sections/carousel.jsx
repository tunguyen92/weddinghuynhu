import { Carousel, Grid } from "antd";

import { Arrow } from "~/components/arrow";
import { img11, img12 } from "~/assets/images/album";
import { carousel01, carousel02 } from "~/assets/images/carousel";
const { useBreakpoint } = Grid;

const SlideContent = () => {
  const screens = useBreakpoint();

  return (
    <div className="wedding-announcement w-full lg:w-4/5 absolute flex items-center flex-col top-1/2 left-1/2 -translate-1/2">
      <h3 className="couple-text w-4/5 lg:w-1/2">
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
      <h2 className="couple-name font-great-vibes text-5xl md:text-6xl lg:text-7xl text-white [text-shadow:0px_4px_0px_rgba(0_0_0/_0.35)]">
        {screens.md && "Thanh"} Huy &nbsp;&&nbsp; {screens.md && "Huỳnh"} Như
      </h2>
    </div>
  );
};

const HomeCarousel = () => {
  const screens = useBreakpoint();
  const isLargeScreens = screens.md;

  const slides = [
    { src: isLargeScreens ? carousel01 : img11, alt: "Image 11" },
    { src: isLargeScreens ? carousel02 : img12, alt: "Image 12" },
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
