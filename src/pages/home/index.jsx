import AudioPlayer from "~/components/audio-player";
import HomeCarousel from "~/sections/carousel";
import Couple from "~/sections/couple";
import Footer from "~/sections/footer";
import Gallery from "~/sections/gallery";
import Header from "~/sections/header";
import LoveStory from "~/sections/love-story";
import Rsvp from "~/sections/rsvp";
import WeddingDate from "~/sections/wedding-date";
import WeddingEvents from "~/sections/wedding-events";
import Welcome from "~/sections/welcome";
import Wishes from "~/sections/wishes";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeCarousel />
      <WeddingDate />
      <Couple />
      <Welcome />
      <LoveStory />
      <WeddingEvents />
      <Wishes />
      <Gallery />
      <Rsvp />
      <Footer />

      <AudioPlayer />
    </>
  );
};

export default HomePage;
