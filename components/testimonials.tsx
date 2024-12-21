"use client";

import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { fadeIn } from "@/lib/variants";
import { TESTIMONIAL_LIST } from "@/lib/constants";
import { createAvatarFallback } from "@/lib/utils";

import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section className="container bg-accent-secondary rounded-2xl px-5 py-5 md:py-10 lg:py-20">
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="h2 text-center mx-auto mb-10 max-w-[400px]"
      >
        What the People Thinks About Us
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="h-[240px] md:h-[320px]"
        >
          {TESTIMONIAL_LIST.map(({ image, message, name, location }, index) => (
            <SwiperSlide className="h-fit md:h-full" key={index}>
              <div className="rounded-2xl bg-white p-5 md:p-10 cursor-pointer">
                <div className="mb-6 flex items-center gap-x-4 min-h-full">
                  <Avatar>
                    <AvatarImage src={image} />
                    <AvatarFallback className="font-primary">
                      {createAvatarFallback(name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4>{name}</h4>
                    <p className="text-secondary text-sm">{location}</p>
                  </div>
                </div>
                <p className="line-clamp-3 text-secondary">{message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};
