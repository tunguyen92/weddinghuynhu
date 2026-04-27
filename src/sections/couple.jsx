import { AiFillFacebook, AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

import { groom, bride, heart } from "~/assets/images/couple";

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

      <div className="couple-area flex flex-col md:flex-row items-start justify-center px-2.5 md:px-10">
        <div className="bride mb-7.5 md:mb-0 flex-1 md:mr-6">
          <div className="mb-5">
            <img
              className="mx-auto rounded-[5px] w-85 h-85 border-10 border-primary-light grayscale-0 transition-all duration-500 hover:grayscale-50"
              decoding="async"
              src={bride}
              alt="bride"
            />
          </div>
          <h3 className="font-great-vibes text-3xl text-text my-4">
            Huỳnh Như
          </h3>
          <p className="text-paragraph leading-7 max-w-85 mx-auto">
            Xin chào đại gia đình anh chị em bạn bè đồng nghiệp thân mến của
            Như! Thật là một phước lành khi chúng ta có duyên gặp nhau ở đây và
            hơn nữa là vào ngày trọng đại sắp tới này. Vô cùng biết ơn khi mọi
            người có thể đến chung vui và ăn mừng ngày lên xe hoa của Như, đánh
            dấu một cột mốc trưởng thành và giai đoạn mới của cuộc đời! Xin
            nguyện an lành đến với tất cả chúng ta!
          </p>
          <div className="social flex justify-center mt-4 md:mt-8">
            <Link
              to="https://www.facebook.com/huynhnhu.ngoc.35"
              target="_blank"
            >
              <AiFillFacebook className="text-primary" size={30} />
            </Link>
            <Link to="" className="ml-6">
              <AiFillTikTok className="text-primary" size={30} />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex h-full flex-col items-center">
          <img className="w-10" src={heart} alt="heart" />
          <div className="h-116 w-px bg-primary-light"></div>
          <img className="w-10 rotate-180" src={heart} alt="heart" />
        </div>

        <div className="groom flex-1 md:ml-6">
          <div className="mb-5">
            <img
              className="mx-auto rounded-[5px] w-85 h-85 border-10 border-primary-light grayscale-0 transition-all duration-500 hover:grayscale-50"
              decoding="async"
              src={groom}
              alt="groom"
            />
          </div>
          <h3 className="font-great-vibes text-3xl text-text my-4">
            Thanh Huy
          </h3>
          <p className="text-paragraph leading-7 max-w-85 mx-auto">
            Xin chào quý anh chị em bạn bè đồng nghiệp thân mến. Cảm ơn mọi
            người đã ở đây và hi vọng mọi người sẽ đến chung vui cùng chúng tôi
            vào ngày vui sắp tới nhé!
          </p>
          <div className="social flex justify-center mt-4 md:mt-8">
            <Link to="">
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
