import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Footer9 = () => {
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template9.footer;
    }
  });

  return (
    <footer className="footer9   text-[var(--website-9-color-3)]">
      <section className="flex flex-col bg-[var(--website-9-color-2)] pt-8">
        <div className="container mx-auto lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between px-3 w-full py-12 lg:text-left">
            <div className="lg:block flex flex-col items-enter justify-center">
              <span className="flex items-center gap-x-2">
                <button className="bg-[var(--website-9-color-2)] text-[var(--website-9-color-1)] rounded-full w-14 h-14">
                  <img src={footer.imgUrl} className="w-1/2 h-1/2 m-auto" alt="Home" />
                </button>
                <p className="font-medium text-xl">{footer.title}</p>
              </span>
              <p className="xl:text-base text-sm py-4 w-45 lg:text-left text-center">{footer.subtitle}</p>
              {footer.about.map((item, index) => (
                <span className="flex items-center gap-x-2 pt-4" key={index}>
                  <img src={item.imgUrl} alt={item.title} className="logo-9" />
                  <p>{item.title}</p>
                </span>
              ))}
            </div>
            {footer.footerSection.map((section, index) => (
              <div key={index}>
                <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">{section.title}</p>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="xl:text-base text-sm mt-2 cursor-pointer">
                      <a href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:w-1/3">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase lg:text-left text-center lg:pb-0 pb-2">{footer.contact.title}</p>
              <div className="relative h-14 flex justify-center items-center">
                <input type="email" placeholder="Email Address" className="h-full w-full rounded-full px-3" />
                <button className="bg-[var(--website-9-color-2)] text-[var(--website-9-color-1)] rounded-full w-12 h-12 flex justify-center items-center text-xl absolute right-1">
                  <img src={footer.icon} alt="Subscribe" />
                </button>
              </div>
              <p className="font-semibold py-6 text-lg lg:text-left text-center">{footer.contact.subtitle}</p>
              <span className="text-[var(--website-9-color-2)] flex items-center gap-4 text-3xl lg:justify-normal justify-center ">
                {footer.contact.icons.map((item, index) => (
                  <a href={item.url} key={index}>
                    <img src={item.icon} className="cursor-pointer logo-9" alt={item.url} />
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--website-9-color-3)] text-[var(--c616161)] xl:text-base text-sm">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-14 lg:text-left text-center">
          <p>{footer.copyrightText}</p>
          <ul className="flex lg:flex-row flex-wrap lg:justify-normal justify-center items-center gap-x-4 ">
            {footer.additionalLinks.map((link, index) => (
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
