import { Carousel } from "antd";
import { RiDoubleQuotesL } from "react-icons/ri";

import { useGetWishesQuery } from "~/services/wishesSlice";
import testimonials from "~/assets/images/testimonials.jpg";

const bestWishes = {
  status: "success",
  message: "Get data success",
  data: [
    {
      name: "Cao Nhi",
      relationship: "Bạn cô dâu",
      wishes: "Chúc hai bạn trăm năm hạnh phúc",
    },
    {
      name: "Cô 6",
      relationship: "Cô của cô dâu",
      wishes: "Chúc hai cháu trăm năm hạnh phúc",
    },
    {
      name: "Bác Hai",
      relationship: "Bác chú rể",
      wishes: "Chúc hai con trăm năm hạnh phúc",
    },
    {
      name: "Đồng lé",
      relationship: "Bạn cô dâu",
      wishes: "Chúc hai bạn trăm năm hạnh phúc",
    },
    {
      name: "Tuân Trần",
      relationship: "Bạn chú rể",
      wishes: "Chúc hai bạn trăm năm hạnh phúc",
    },
    {
      name: "Bé Hương",
      relationship: "Bạn cô dâu, chú rể",
      wishes: "Chúc anh chị trăm năm hạnh phúc",
    },
  ],
};

const Wishes = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data = bestWishes, error } = useGetWishesQuery();

  if (error) console.log(error);

  return (
    <section
      id="wishes"
      className="wishes-section my-10 relative bg-cover bg-center before:absolute before:top-0 before:left-0 before:bg-black/30 before:size-full before:backdrop-blur-[1px]"
      style={{ backgroundImage: `url(${testimonials})` }}
    >
      <div className="container mx-auto">
        <Carousel {...settings} arrows>
          {data?.data?.map((item, index) => (
            <div key={item.name + index} className="p-10">
              <div className="relative text-white rounded-2xl border border-white p-5">
                <div className="quote">
                  <RiDoubleQuotesL
                    className="text-text absolute top-0 left-0 -z-10"
                    size={50}
                  />
                  <p className="italic text-justify">{item.wishes}</p>
                </div>

                <div className="text-center mt-2">
                  <p className="font-semibold">{item.name}</p>
                  <span className="text-sm">-{item.relationship}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Wishes;
