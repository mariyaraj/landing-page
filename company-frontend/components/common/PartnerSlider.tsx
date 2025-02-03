import Image from "next/image"; // Verwende Next.js Image-Optimierung
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const PartnerSlider = () => {
  const partner = [
    { name: "Mausbrand", logo: "/partner/logos/mausbrand.png", url: "https://www.mausbrand.de/" },
    { name: "Visible Ruhr e.G.", logo: "/partner/logos/visibleRuhr.png", url: "https://www.visible.ruhr/" },
    { name: "Innovation Through Understanding", logo: "/partner/logos/innovationTrough.png", url: "https://innovation-through-understanding.de/" },
    { name: "Schiller & Wolf", logo: "/partner/logos/schillerWolf.jpg", url: "https://schiller-wolf.de/" },
    { name: "Next Chapter", logo: "/partner/logos/nextchapter.jpg", url: "https://next-chapter-consulting-2.jimdosite.com/" },
    { name: "Sichtbarkeitsmeister GmbH", logo: "/partner/logos/sbkm.png", url: " https://www.sichtbarkeitsmeister.de/" },   
    // { name: "Tumana", logo: "/partner/logos/tumana.png", url: "https://tumana.io/" },
    // { name: "Sahm Communications", logo: "/partner/logos/sahm.png", url: "https://sahm-communications.de" },
  ];

  return (
    <div className="relative mx-auto max-w-5xl bg-white/10 backdrop-blur-md rounded-xl shadow-lg px-4 py-3 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-center text-lg font-semibold text-white mb-2">Unsere Partner</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {partner.map((p, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center px-2 py-2 max-h-24">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <Image
                src={p.logo}
                alt={p.name || "Partner-Logo"}
                width={150} 
                height={70} 
                className="object-contain max-h-20" // Hier die max-h setzen
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSlider;