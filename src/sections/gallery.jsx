import { Image } from "antd";
import {
  img61,
  img62,
  img63,
  img64,
  img65,
  img66,
} from "~/assets/images/album";

const galleries = [
  {
    src: img61,
    alt: "gallery61",
  },
  {
    src: img62,
    alt: "gallery62",
  },
  {
    src: img63,
    alt: "gallery63",
  },
  {
    src: img64,
    alt: "gallery64",
  },
  {
    src: img65,
    alt: "gallery65",
  },
  {
    src: img66,
    alt: "gallery66",
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section py-10 px-4" id="gallery">
      <div className="container mx-auto">
        <div className="title-flower mb-5 text-center">
          <h2 className="title-flower text-header relative font-great-vibes text-4xl pt-20 md:pt-22 md:text-5xl before:bg-cover before:absolute before:top-0 before:left-[calc(50%-30px)]">
            Sweet Moments
          </h2>

          <div className="relative max-w-52 mx-auto mt-5 h-10 before:absolute before:w-20 before:md:w-36 before:h-px before:bg-primary before:top-2 before:-left-6 before:md:-left-20 after:absolute after:w-20 after:md:w-36 after:h-px after:bg-primary after:top-2 after:-right-6 after:md:-right-20">
            <div className="round-ball absolute left-1/2 size-4 border border-primary rounded-full -translate-x-1/2" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            {galleries.map((item, index) => (
              <div key={item.alt + index} className="group overflow-hidden">
                <Image
                  className="rounded-lg transition-all duration-500 group-hover:scale-110"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
