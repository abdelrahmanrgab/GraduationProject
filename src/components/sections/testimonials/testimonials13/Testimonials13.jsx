/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const Testimonials13 = () => {
  const testimonials = useSelector((state) => state.template13.testimonials);

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-bottom-group mb-4 gap-4 flex justify-end items-center w-full absolute lg:top-0 top-8">
        <button
          className="block p-3 bg-slate-300 rounded-full focus:bg-[var(--fd7b47)] hover:bg-[var(--fd7b47)] border border-[var(--white-13)]"
          onClick={() => previous()}
        >
          <img src={testimonials.arrowL} className="bg-[var(--black-13)]" />
        </button>
        <button
          className="block p-3 bg-slate-300 rounded-full focus:bg-[var(--fd7b47)] hover:bg-[var(--fd7b47)] border border-[var(--white-13)]"
          onClick={() => next()}
        >
          <img src={testimonials.arrowR} className="bg-[var(--black-13)]" />
        </button>
      </div>
    );
  };

  const Card = ({ img, name, title, description }) => {
    return (
      <div id="testimonials13" className="bg-[var(--g06412f)] w-80 relative flex justify-center z-20 p-8 mt-40">
        <button className="rounded-full bg-[var(--g06412f)] absolute -top-20 h-32 w-64 rounded-b-none btn13"></button>
        <div className="relative z-20 text-center">
          <img src={img} alt="" className="w-20 h-20 rounded-full -mt-8 mx-auto img-13" />
          <p className="text-xl text-[var(--white-13)] primary-font font-semibold pt-4 pb-2">{name}</p>
          <p className="font-light pb-4">{title}</p>
          <hr />
          <p className="pt-4 text-[var(--white-13)]">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-[var(--color-13-green)] lg:py-24 py-8">
      <div className="h-[50px] bg-[var(--fff6ed)] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] text-[var(--white-13)] mx-auto px-3">
        <p>Testimonials</p>
        <div className="relative lg:pb-0 pb-8"></div>
        <h1 className="lg:text-4xl primary-font text-[var(--white-13)] text-xl">
          {testimonials.heading1} <span className="underline decoration-[var(--color-13-yel)]">{testimonials.heading2}</span> {testimonials.heading3}
        </h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          direction="horizontal"
          className="z-30 w-full swiper13"
          // breakpoints={{
          //   // when window width is <= 768px
          //   768: {
          //     slidesPerView: 1,
          //   },
          // }}
        >
          <SwiperSlide>
            <Card img={testimonials.person1} name={testimonials.name1} title={testimonials.title1} description={testimonials.description1} />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={testimonials.person2} name={testimonials.name2} title={testimonials.title2} description={testimonials.description2} />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={testimonials.person3} name={testimonials.name3} title={testimonials.title3} description={testimonials.description3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={testimonials.person4} name={testimonials.name4} title={testimonials.title4} description={testimonials.description4} />
          </SwiperSlide>
        </Swiper>

        {/**small devices cards */}
        <div
          className="z-30 w-full justify-center flex flex-col items-center lg:hidden md:hidden swiper13-s"
          // breakpoints={{
          //   // when window width is <= 768px
          //   768: {
          //     slidesPerView: 1,
          //   },
          // }}
        >
          <div>
            <Card img={testimonials.person1} name={testimonials.name1} title={testimonials.title1} description={testimonials.description1} />
          </div>
          <div>
            <Card img={testimonials.person2} name={testimonials.name2} title={testimonials.title2} description={testimonials.description2} />
          </div>
          <div>
            <Card img={testimonials.person3} name={testimonials.name3} title={testimonials.title3} description={testimonials.description3} />
          </div>
          <div>
            <Card img={testimonials.person4} name={testimonials.name4} title={testimonials.title4} description={testimonials.description4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials13;
