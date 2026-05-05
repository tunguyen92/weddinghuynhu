import welcomeImg from "../assets/images/welcome/welcome.jpg";

const Footer = () => {
  return (
    <footer className="footer-section pt-20 md:pt-40 text-center">
      <div className="container mx-auto px-4 mb-10">
        <div className="font-corinthia  text-5xl">Lời nhắn</div>
        <div className="text-paragraph text-justify md:text-center">
          "Bất kể bạn học chuyên ngành gì, nhất định khi tìm việc phải tìm một
          công việc mình yêu thích, làm thật giỏi và tạo ra giá trị. Như vậy bạn
          mới có thể vui vẻ đi làm từ sáng đến tối được. Thêm nữa, hãy tìm một
          người bạn yêu để ở bên cạnh người đó, như vậy bạn mới có thể hạnh phúc
          từ tối đến sáng hôm sau".
        </div>
      </div>

      <div
        className="welcome h-125 bg-fixed flex items-center justify-center text-center text-white relative before:content-[''] before:absolute before:inset-0 before:bg-[#000000cc] before:opacity-90"
        style={{
          backgroundImage: `url(${welcomeImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-center text-center text-white">
          <div className="welcome-content z-10">
            <div className="wedding-announcement size-56.25 lg:size-77.5 lg:max-w-95 bg-primary rounded-full absolute flex items-center justify-center flex-col top-1/2 left-1/2 -translate-1/2 z-10">
              <span className="absolute inline-flex h-full w-full scale-105 rounded-full border border-primary-light z-[-1]"></span>

              <h2 className="couple-name font-great-vibes text-center text-3xl md:text-4xl">
                Huỳnh Như <br /> &nbsp;&&nbsp; <br /> Thanh Huy
              </h2>
            </div>
          </div>
        </div>

        <h3 className="font-great-vibes w-full text-3xl md:text-4xl text-white absolute bottom-18 md:bottom-10 left-1/2 -translate-x-1/2 z-10">
          Forever our love, Thank you!
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
