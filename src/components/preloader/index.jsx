import sectionTitle from "~/assets/images/section-title.png";
import "./styles.css";

const Preloader = () => {
  return (
    <div className="relative w-screen h-screen bg-[#4a6f8e] flex items-center justify-center">
      <div className="loader" />
      <img
        className="absolute top-1/2 left-1/2 -translate-1/2"
        src={sectionTitle}
        alt="sectionTitle"
      />
    </div>
  );
};

export default Preloader;
