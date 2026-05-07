import { Grid } from "antd";
import { Link, NavLink, useParams } from "react-router-dom";

import { invi01 } from "~/assets/images/invitation";
import AudioPlayer from "~/components/audio-player";

const { useBreakpoint } = Grid;

const BrideInvitation = () => {
  const screens = useBreakpoint();

  const { lang, id } = useParams();
  const fullUrl = `https://weddinghuynhu.netlify.app/${lang}/${id}`;

  return (
    <>
      <title>{`Huy & Như - Thân mời ${id} đến buổi tiệc cùng chung vui với gia đình.`}</title>
      <meta
        property="og:title"
        content={`Huy & Như - Thân mời ${id} đến buổi tiệc cùng chung vui với gia đình.`}
      />
      <meta
        property="og:description"
        content={`Huy & Như - Thân mời ${id} đến buổi tiệc cùng chung vui với gia đình.`}
      />
      <meta
        property="og:image"
        content="https://weddinghuynhu.netlify.app/assets/carousel02-CjerNx2D.jpg"
      />
      <meta
        property="og:image:alt"
        content="https://weddinghuynhu.netlify.app/assets/carousel02-CjerNx2D.jpg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <link rel="canonical" href={fullUrl} />
      <link
        rel="image_src"
        href="https://weddinghuynhu.netlify.app/assets/carousel02-CjerNx2D.jpg"
      />
      <meta
        property="og:site_name"
        content={`Huy & Như - Thân mời ${id} đến buổi tiệc cùng chung vui với gia đình.`}
      />
      <meta
        name="thumbnail"
        content="https://weddinghuynhu.netlify.app/assets/carousel02-CjerNx2D.jpg"
      />

      <div className="relative max-w-110 h-screen mx-auto px-18 text-center pt-30 md:pt-22">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
          src={invi01}
          alt="invitation"
        />
        <h3 className=" font-semibold text-[#e0e0db]">SAVE THE DATE</h3>

        <h2 className="couple-name font-great-vibes text-4xl py-10 md:py-12 text-[#e5c88f]">
          Thanh Huy <br /> &nbsp;&&nbsp; <br /> Huỳnh Như
        </h2>

        <div className=" text-[#e0e0db] uppercase text-sm">
          {lang === "vi" ? "Trân trọng kính mời" : "Would like to invite"}
        </div>
        <div className=" text-[#e5c88f] font-corinthia text-4xl py-2">{id}</div>

        <div className=" text-[#e0e0db] uppercase text-sm">
          {lang === "vi"
            ? "đến dự buổi tiệc chung vui cùng gia đình chúng tôi vào lúc"
            : "to celebrate with us at"}
        </div>

        <div className=" text-[#e0e0db] my-6 text-2xl md:text-3xl font-great-vibes">
          12h30, 16.05.2026
        </div>
        <div className=" text-[#e0e0db] text-xs mb-3">
          {lang === "vi"
            ? "666 đường số 1, P.Bình Tân, TPHCM"
            : "666 Street No.11, Binh Tan District, HCM City"}
        </div>

        <a
          className="block text-xs underline text-white"
          href="https://maps.app.goo.gl/wpLgp8gHMc8hiNn1A"
          target="_blank"
        >
          {lang === "vi" ? "Xem chỉ đường" : "View Directions"}
        </a>

        <button className="text-white! bg-[#98907e]! rounded-md text-sm px-4 py-1 mt-4">
          <Link to="/">
            {lang === "vi" ? "Xem ảnh cưới" : "View Wedding Photos"}
          </Link>
        </button>

        <AudioPlayer />
      </div>
    </>
  );
};

export default BrideInvitation;
