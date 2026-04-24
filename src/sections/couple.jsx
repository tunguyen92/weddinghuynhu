import { AiFillFacebook, AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

import { heart } from "~/assets/images/couple";
import { noimage } from "~/assets/images/album";

const Couple = () => {
  return (
    <section
      id="couple"
      className="couple-section container py-25 md:pt-10 md:pb-32.5 mx-auto text-center"
    >
      <div className="title-flower mb-10 md:mb-11">
        <h2 className="title-flower relative font-great-vibes text-4xl pt-20 md:pt-22 md:text-5xl before:bg-cover before:absolute before:top-0 before:left-[calc(50%-47px)] before:w-24 before:h-11">
          Happy Couple
        </h2>
      </div>

      <div className="couple-area grid grid-cols-1 md:grid-cols-3 md:items-center px-2.5 md:px-10">
        <div className="bride mb-7.5 md:mr-6">
          <div className="mb-5">
            <img
              className="rounded-[5px] w-85 h-85 border-10 border-primary-light grayscale-0 transition-all duration-500 hover:grayscale-50"
              decoding="async"
              src={noimage}
              alt="bride"
            />
          </div>
          <h3 className="font-great-vibes text-3xl text-text my-4">
            Huỳnh Như
          </h3>
          <p className="text-paragraph leading-7">
            Xin chào đại gia đình anh chị em bạn bè đồng nghiệp thân mến của
            Như.
            <br />
            <strong>
              Nên viết nhiều về bản thân, mục tiêu, câu nói yêu thích,..
            </strong>
          </p>
          <div className="social flex justify-center mt-4 md:mt-8">
            <Link to="https://www.facebook.com/huynhnhu" target="_blank">
              <AiFillFacebook className="text-primary" size={30} />
            </Link>
            <Link to="" className="ml-6">
              <AiFillTikTok className="text-primary" size={30} />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex h-full flex-col items-center">
          <img className="w-10" src={heart} alt="heart" />
          <div className="middle-couple-pic h-[95%] w-px bg-primary-light"></div>
          <img className="w-10 rotate-180" src={heart} alt="heart" />
        </div>

        <div className="groom md:ml-6">
          <div className="mb-5">
            <img
              className="rounded-[5px] w-85 h-85 border-10 border-primary-light grayscale-0 transition-all duration-500 hover:grayscale-50"
              decoding="async"
              src={noimage}
              alt="groom"
            />
          </div>
          <h3 className="font-great-vibes text-3xl text-text my-4">
            Thanh Huy
          </h3>
          <p className="text-paragraph leading-7">
            Xin chào quý anh chị em bạn bè đồng nghiệp thân mến.
            <br />
            <strong>
              Nên viết nhiều về bản thân, mục tiêu, câu nói yêu thích,..
            </strong>
          </p>
          <div className="social flex justify-center mt-4 md:mt-8">
            <Link to="https://www.facebook.com/thanh.huy" target="_blank">
              <AiFillFacebook className="text-primary" size={30} />
            </Link>
            <Link to="" className="ml-6">
              <AiFillTikTok className="text-primary" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
