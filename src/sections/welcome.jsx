import welcomeImg from "../assets/images/welcome/welcome.jpg";

const Welcome = () => {
  return (
    <div
      className="welcome h-125 bg-fixed flex items-center justify-center text-center text-white relative before:content-[''] before:absolute before:inset-0 before:bg-[#000000cc] before:opacity-90"
      style={{ backgroundImage: `url(${welcomeImg})` }}
    >
      <div className="container">
        <div className="welcome-content relative z-1">
          <h2 className="font-great-vibes text-4xl md:text-6xl">
            Welcome to our big day
          </h2>
          <p className="md:text-xl! p-6 max-w-175 mx-auto">
            Tụi mình đều là dân Chẩn đoán y học cùng nhau, nên đến đây với tụi
            mình để cùng Chẩn đoán cấp độ hạnh phúc cho mọi người nhé!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
