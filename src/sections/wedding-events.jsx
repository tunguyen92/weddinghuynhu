import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

import { home, restaurant } from "~/assets/images/wedding-event";

const WeddingEvents = () => {
  return (
    <section id="events" className="love-story py-25 px-4">
      <div className="container mx-auto">
        <div className="title-flower mb-5 text-center">
          <h2 className="title-flower relative font-great-vibes text-4xl pt-20 md:pt-24 md:text-5xl before:bg-cover before:absolute before:top-0 before:left-[calc(50%-47px)] before:w-24 before:h-11">
            Wedding Events
          </h2>

          <div className="relative max-w-52 mx-auto mt-5 h-10 before:absolute before:w-20 before:md:w-36 before:h-px before:bg-primary before:top-2 before:-left-6 before:md:-left-20 after:absolute after:w-20 after:md:w-36 after:h-px after:bg-primary after:top-2 after:-right-6 after:md:-right-20">
            <div className="round-ball absolute left-1/2 size-4 border border-primary rounded-full -translate-x-1/2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="location mb-4 md:mb-0">
            <div className="relative before:absolute before:rounded-lg before:border-2 before:border-white/50 before:top-4 before:left-4 before:size-[calc(100%-32px)]">
              <img
                className="rounded-lg mx-auto w-full"
                src={home}
                alt="home"
              />
            </div>
            <h3 className="font-great-vibes text-3xl mt-8 mb-4">
              Wedding Ceremony
            </h3>
            <ul className="text-sm text-paragraph">
              <li className="flex items-center gap-2 mb-2">
                <CiLocationOn className="text-icon" /> 56 Bình Thành, P.Bình
                Tân, TPHCM
              </li>
              <li className="flex items-center gap-2">
                <CiClock2 className="text-icon" /> 11h30, 16/5/2026
              </li>
            </ul>
            <p className="text-paragraph my-4">
              Đây là khoảnh khắc ý nghĩa khi gia đình hai bên thể hiện lòng
              thành kính đối với tổ tiên và đánh dấu cột mốc ý nghĩa trong ngày
              trọng đại. Gia đình kính mời các bậc trưởng bối, cô chú và các bạn
              đến dự, cùng nhau chứng giám và gửi lời chúc phúc cho đôi uyên
              ương.
            </p>
            <a
              className="see-location-btn flex items-center gap-2 uppercase text-xs md:text-sm font-bold py-2 md:py-3 px-4 md:px-6 border md:border-2 border-primary rounded-4xl w-fit"
              href="https://maps.app.goo.gl/kJJ2DwsizXgPHqG6A"
              target="_blank"
            >
              Xem chỉ đường <FaArrowRight className="text-icon" size={20} />
            </a>
          </div>

          <div className="location">
            <div className="relative before:absolute before:rounded-lg before:border-2 before:border-white/50 before:top-4 before:left-4 before:size-[calc(100%-32px)]">
              <img
                className="rounded-lg mx-auto w-full"
                src={restaurant}
                alt="restaurant"
              />
            </div>
            <h3 className="font-great-vibes text-3xl mt-8 mb-4">
              Wedding Dinner
            </h3>
            <ul className="text-sm text-paragraph">
              <li className="flex items-center gap-2 mb-2">
                <CiLocationOn className="text-icon" /> 666 đường số 1, P.Bình
                Tân, TPHCM
              </li>
              <li className="flex items-center gap-2">
                <CiClock2 className="text-icon" /> 12h30, 16/5/2026
              </li>
            </ul>
            <p className="text-paragraph my-4">
              Bữa tiệc là dịp để cùng nhau chia sẻ niềm vui, tận hưởng không
              gian ấm cúng và tạo nên những kỷ niệm đáng nhớ. Rất mong bạn sẽ có
              mặt để chung vui và góp phần làm cho ngày đặc biệt này thêm trọn
              vẹn!
            </p>
            <a
              className="see-location-btn flex items-center gap-2 uppercase text-xs md:text-sm font-bold py-2 md:py-3 px-4 md:px-6 border md:border-2 border-primary rounded-4xl w-fit"
              href="https://maps.app.goo.gl/wpLgp8gHMc8hiNn1A"
              target="_blank"
            >
              Xem chỉ đường <FaArrowRight className="text-icon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;
