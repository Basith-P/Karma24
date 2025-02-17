import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import games from "../../../../data/games";

import GameCard from "./components/GameCard";

const GamesSection = () => {
  return (
    <>
      <div
        id="competitions"
        className="container max-w-screen-xl mx-auto pt-28 pb-16 px-4"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ margin: "20px", amount: "all" }}
          className="big-green-title mb-4"
        >
          Competitions
        </motion.h2>
        <div className="swiper-container px-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              980: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
          >
            {games.map((game) => (
              <SwiperSlide key={game.id}>
                <GameCard game={game} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation BUttons */}
          <div className="swiper-button-next">
            <svg
              width="33"
              height="26"
              viewBox="0 0 33 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.3662 13.9765C32.6249 13.7174 32.7703 13.3662 32.7703 13C32.7703 12.6338 32.6249 12.2826 32.3662 12.0235L21.3118 0.969194C21.1853 0.833434 21.0328 0.724546 20.8633 0.649023C20.6938 0.5735 20.5108 0.532892 20.3253 0.529618C20.1397 0.526345 19.9554 0.560473 19.7834 0.62997C19.6113 0.699466 19.455 0.802908 19.3238 0.93412C19.1926 1.06533 19.0892 1.22163 19.0197 1.39369C18.9502 1.56574 18.916 1.75004 18.9193 1.93557C18.9226 2.1211 18.9632 2.30408 19.0387 2.47358C19.1142 2.64308 19.2231 2.79563 19.3589 2.92213L28.055 11.6182L1.91148 11.6182C1.545 11.6182 1.19354 11.7638 0.934403 12.0229C0.675267 12.2821 0.529687 12.6335 0.529687 13C0.529687 13.3665 0.675267 13.7179 0.934403 13.9771C1.19354 14.2362 1.545 14.3818 1.91148 14.3818L28.055 14.3818L19.3589 23.0779C19.2231 23.2044 19.1142 23.3569 19.0387 23.5264C18.9632 23.6959 18.9226 23.8789 18.9193 24.0644C18.916 24.2499 18.9502 24.4342 19.0197 24.6063C19.0892 24.7784 19.1926 24.9347 19.3238 25.0659C19.455 25.1971 19.6113 25.3005 19.7834 25.37C19.9554 25.4395 20.1397 25.4736 20.3253 25.4704C20.5108 25.4671 20.6938 25.4265 20.8633 25.351C21.0328 25.2754 21.1853 25.1665 21.3118 25.0308L32.3662 13.9765Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </>
  );
};

export default GamesSection;
