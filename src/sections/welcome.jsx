import welcomeImg from "../assets/images/welcome/welcome.jpg";

const Welcome = () => {
  return (
    <div
      className="welcome h-125 bg-fixed flex items-center justify-center text-center text-white relative before:content-[''] before:absolute before:inset-0 before:bg-[#000000cc] before:opacity-90"
      style={{
        backgroundImage: `url(${welcomeImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="welcome-content relative z-1">
          <h2 className="font-great-vibes text-4xl md:text-6xl">
            Welcome to our big day
          </h2>
          <p className="md:text-xl! p-6 max-w-175 mx-auto">
            “Chúng mình đều xuất thân từ ngành Chẩn đoán y học, nên hôm nay mời
            các bạn đến không chỉ để chúc phúc, mà còn cùng nhau ‘chẩn đoán’ và
            lan tỏa những cung bậc hạnh phúc trọn vẹn nhất trong ngày đặc biệt
            này.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
