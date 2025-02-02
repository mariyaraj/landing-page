import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const PartnerSlider = () => {
  const partner = [
      { name: "", logo: "partner/logos//mausbrand1.png", url: "https://www.mausbrand.de/" },
      { name: "Visible Ruhr e.G.", logo: "partner/logos/visibleRuhr1.png", url: "https://www.visible.ruhr/" },
      { name: "", logo: "partner/logos//innovationTrough1.png", url: "https://innovation-through-understanding.de/" },
      { name: "", logo: "partner/logos//schillerWolf.jpg", url: "https://schiller-wolf.de/" },
      { name: "", logo: "partner/logos//nextchapter.jpg", url: "https://next-chapter-consulting-2.jimdosite.com/" },
    //  { name: "", logo: "partner/logos//tumana.png", url: "https://tumana.io/" },
     // { name: "Sahm Communications", logo: "partner/logos//sahm.png", url: "https://sahm-communications.de" },
      
    ];
  
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-xl py-3 px-4 shadow-lg mx-auto max-w-5xl max-h-32">
          <h2 className="text-center text-lg font-semibold text-white mb-4">Unsere Partner</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 }, // Mobil: 2 Logos
              768: { slidesPerView: 3 }, // Tablet: 3 Logos
              1024: { slidesPerView: 4 }, // Desktop: 4 Logos
            }}
          >
            {partner.map((p, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-center">
                  <img src={p.logo} alt={p.name} className="h-12 mx-auto mb-1 grayscale hover:grayscale-0 transition-all" />
                  <p className="text-white text-sm font-semibold hover:text-[#00c2cb]">{p.name}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };
    
    export default PartnerSlider;