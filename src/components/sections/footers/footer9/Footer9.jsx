import React from "react";
import { useSelector } from "react-redux";

const Footer9 = () => {
  const footer9 = useSelector((state) => state.template9.footer9);

  return (
    <footer className="footer9">
      <section className="flex flex-col bg-[var(--e6edeb-9)] pt-8">
        <div className="container mx-auto lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between px-3 w-full py-12 lg:text-left">
            <div className="lg:block flex flex-col items-enter justify-center">
              <span className="flex items-center gap-x-2">
                <button className="bg-[var(--button-text-colo-r-9)] text-[var(--white-9)] rounded-full w-14 h-14">
                  <img src={footer9.rezillaInfo.home} className="w-1/2 h-1/2 m-auto" alt="Home" />
                </button>
                <p className="font-medium text-xl">{footer9.rezillaInfo.name}</p>
              </span>
              <p className="xl:text-base text-sm py-4 w-45 lg:text-left text-center">{footer9.rezillaInfo.address}</p>
              <span className="flex items-center gap-x-2 pt-4">
                <img src={footer9.rezillaInfo.phoneImg} alt="Phone" className="logo-9" />
                <p>{footer9.rezillaInfo.phone}</p>
              </span>
              <span className="flex items-center gap-x-2 pt-2">
                <img src={footer9.rezillaInfo.mail} alt="Mail" className="logo-9" />
                <p>{footer9.rezillaInfo.email}</p>
              </span>
            </div>

            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">{footer9.quickLinks}</p>
              <ul>
                {footer9.quickLinks.map((link, index) => (
                  <li key={index} className="xl:text-base text-sm mt-2 cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">Discovery</p>
              <ul>
                {footer9.discovery.map((item, index) => (
                  <li key={index} className="xl:text-base text-sm mt-2 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase lg:text-left text-center lg:pb-0 pb-2">{footer9.newsletterText}</p>
              <div className="relative h-14 flex justify-center items-center">
                <input type="email" placeholder="Email Address" className="h-full w-full rounded-full px-3" />
                <button className="bg-[var(--button-text-colo-r-9)] text-[var(--white-9)] rounded-full w-12 h-12 flex justify-center items-center text-xl absolute right-1">
                  <img src={footer9.rezillaInfo.arrf} alt="Subscribe" />
                </button>
              </div>
              <p className="font-semibold py-6 text-lg lg:text-left text-center">{footer9.followUsText}</p>
              <span className="text-[var(--button-text-colo-r-9)] flex items-center gap-4 text-2xl lg:justify-normal justify-center ">
                {footer9.socialMediaLinks.map((link, index) => (
                  <img key={index} src={link} className="cursor-pointer logo-9" alt={link} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--black-9)] text-[#7b7a7a] xl:text-base text-sm">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-14 lg:text-left text-center">
          <p>{footer9.copyrightText}</p>
          <ul className="flex lg:flex-row flex-wrap lg:justify-normal justify-center items-center gap-x-4 ">
            {footer9.additionalLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer9;
