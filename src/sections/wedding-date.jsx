import useCountdown from "~/hooks/useCountdown";

import bgClock from "~/assets/images/clock-bg.png";

const WeddingDate = () => {
  const { days, hours, minutes, seconds } = useCountdown("2025-04-26T18:00:00");

  const time = [
    { text: "Days", time: days },
    { text: "Hours", time: hours },
    { text: "Minutes", time: minutes },
    { text: "Seconds", time: seconds },
  ];

  return (
    <section id="date" className="wedding-date text-center py-20 lg:py-[90px]">
      <div className="container mx-auto">
        <div className="title-flower mb-10 md:mb-11">
          <h2 className="title-flower relative font-great-vibes text-4xl pt-10 md:pt-14 md:text-5xl before:bg-cover before:absolute before:top-0 before:left-[calc(50%-47px)] before:w-24 before:h-11">
            Save The Date
          </h2>
        </div>

        <h3 className="inline-block italic relative text-text text-xl md:text-2xl lg:text-3xl before:bg-primary before:w-10 before:h-[1px] before:absolute before:top-1/2 before:-left-14  after:bg-primary after:w-10 after:h-[1px] after:absolute after:top-1/2 after:-right-14">
          26 - 04 - 2025
        </h3>

        <div className="clock m-auto grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-8 w-max mt-5">
          {time.map((item) => (
            <div
              key={item.text}
              className="box bg-center bg-cover size-28 md:size-32 lg:size-44 text-paragraph flex flex-col justify-center"
              style={{ backgroundImage: `url(${bgClock})` }}
            >
              <div className="time text-[#5880a2] font-great-vibes text-4xl lg:text-5xl mt-3">
                {item.time}
              </div>
              <span className="text-[#365872] -mt-2">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingDate;
