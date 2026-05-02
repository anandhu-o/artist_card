import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import ArtistCard from './ArtistCard';

export default function ArtistCarousel({ artists }) {
  return (
    <div className="w-full relative py-12 perspective-[1000px] max-w-7xl mx-auto overflow-visible!">
      <Swiper
        modules={[EffectCoverflow, Keyboard, Mousewheel]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={800}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 1.8 }
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        className="w-full !pb-16 !pt-8"
      >
        {artists.map((artist) => (
          <SwiperSlide key={artist.id} className="flex justify-center">
            <ArtistCard artist={artist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
