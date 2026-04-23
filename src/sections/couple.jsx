import { AiFillFacebook, AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

import { bride, frameShape, groom, img3322 } from "~/assets/images/couple";

const Couple = () => {
  return (
    <section
      id="couple"
      className="couple-section container py-0 md:py-10 mx-auto"
    >
      <div className="couple-area grid grid-cols-1 md:grid-cols-3 md:items-center px-2.5 md:px-10">
        <div className="groom m-0 md:mr-6 text-center md:text-right">
          <div className="relative mx-auto md:ml-auto md:mr-0 w-max before:absolute before:left-1.25 before:top-1.25 before:size-22.5 before:rounded-full before:z-10 before:border before:border-white">
            <img
              className="rounded-full"
              decoding="async"
              src={groom}
              alt="groom"
            />
          </div>
          <h3 className="text-xl text-text font-bold my-4">Thanh Tú</h3>
          <p className="text-paragraph leading-7">
            Chú rể là một chàng trai đến từ vùng biển nắng gió Bình Định, hiện
            đang là lập trình viên làm việc tại TP.HCM. Được biết đến là người
            trầm tính, ít nói nhưng chân thành, hòa đồng và dễ gần. Trong công
            việc cũng như cuộc sống, luôn chu đáo, cẩn thận và không ngừng học
            hỏi. Hạnh phúc với chú rể đơn giản là có một gia đình nhỏ ấm áp,
            bình yên bên những người thương yêu.
            <br />
            <span className="italic">"The purpose of life is to be happy"</span>
            <br />
            Như Đức Đạt Lai Lạt Ma từng nói, mục đích của cuộc đời là để được
            hạnh phúc – và đó cũng là điều mà bản thân luôn hướng đến.
          </p>
          <div className="social flex justify-center md:justify-end mt-4 md:mt-9">
            <Link to="https://www.facebook.com/tu.kantee" target="_blank">
              <AiFillFacebook color="#738ea5" size={30} />
            </Link>
            <Link to="" className="ml-6">
              <AiFillTikTok color="#738ea5" size={30} />
            </Link>
          </div>
        </div>

        <div className="middle-couple-pic flex items-center justify-center mx-auto my-14 relative w-full ">
          <img
            className="rounded-[235px] w-4/5"
            decoding="async"
            loading="lazy"
            src={img3322}
            alt="middle-couple"
          />
          <img
            className="absolute"
            decoding="async"
            src={frameShape}
            alt="frame-img"
          />
        </div>

        <div className="bride md:ml-6 text-center md:text-left">
          <div className="relative before:absolute before:top-1/2 md:before:top-1.25 before:left-1/2 md:before:left-1.25 before:-translate-1/2 before:md:translate-0 before:size-22.5 before:rounded-full before:z-10 before:border before:border-white">
            <img
              className="rounded-full mx-auto md:m-0"
              decoding="async"
              src={bride}
              alt="bride"
            />
          </div>
          <h3 className="text-xl text-text font-bold my-4">Thanh Thủy</h3>
          <p className="text-paragraph leading-7">
            Cô dâu là một cô gái nhỏ nhắn đến từ vùng quê Bình Định, mang trong
            mình nhiều hoài bão và ước mơ. Được biết đến là người cởi mở, hòa
            đồng, luôn vui vẻ và sẵn sàng giúp đỡ mọi người. Hiện đang là quản
            lý của một công ty nhỏ tại Đồng Nai, công việc tuy bận rộn nhưng
            mang lại nhiều cơ hội để học hỏi, thử thách chính mình và không
            ngừng tiến về phía trước. Đối với cô dâu, hạnh phúc không chỉ là
            những thành tựu cá nhân mà còn là sự đồng hành, sẻ chia cùng một
            người có thể thấu hiểu và cùng nhau xây dựng một tương lai bền vững.
            Châm ngôn sống:
            <span className="italic">
              "Tương lai tươi sáng là kết quả cho những nỗ lực không ngừng nghỉ
              ở hiện tại"
            </span>
            .
          </p>
          <div className="social flex justify-center md:justify-normal mt-4 md:mt-9">
            <Link
              to="https://www.facebook.com/thanh.thuy.400895"
              target="_blank"
            >
              <AiFillFacebook color="#738ea5" size={30} />
            </Link>
            <Link to="" className="ml-6">
              <AiFillTikTok color="#738ea5" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
