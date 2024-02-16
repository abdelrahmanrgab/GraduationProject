import React from "react";
import { useSelector } from "react-redux";

const Hero15 = () => {
  const { hero15 } = useSelector((state) => state.template15);

  return (
    <main className="min-h-screen flex xl:pt-0 pt-36 " id="home">
      <div className="xl:flex items-center container max-w-[1300px] mx-auto lg:px-3">
        <section className="xl:w-1/2 xl:text-left text-center">
          <p className="text-[15px] font-bold darkModeTextColor">
            {hero15[0].titleA.title1} <span className="btnHoverColor">{hero15[0].titleA.title2}</span>
          </p>
          <h1 className="xl:text-[90px] text-[64px] m-0 sm:py-0 py-4 btnHoverColor textShadow">
            {hero15[0].titleA.title3}
            <span className="darkModeTextColor"> {hero15[0].titleA.title4}</span>
          </h1>
          <p className="text-[15px] font-bold darkModeTextColor">
            {hero15[0].titleA.title5}
            <span className="caveat text-3xl pl-2 darkModeTextColor"> {hero15[0].titleA.title6}</span>
          </p>
          <span className="xl:block hidden">
            <p className="text-lg pt-4 pb-4 darkModeTextColor">{hero15[0].titleA.descA}</p>
            <div className="flex items-center gap-x-8 pb-6 text-[22px]">
              <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
                <img src={hero15[0].imgUrl.FaTwitter} alt="Twitter" style={{ width: "40px", height: "40px" }} />
              </a>
              <a href="https://dribbble.com/session/new" target="_blank" rel="noopener noreferrer">
                <img src={hero15[0].imgUrl.FaDribbble} alt="Dribbble" style={{ width: "40px", height: "40px" }} />
              </a>
              <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                <img src={hero15[0].imgUrl.FaBehance} alt="Behance" style={{ width: "40px", height: "40px" }} />
              </a>
            </div>
            <div className="flex items-center w-fit text-[13px] font-bold pt-4">
              <span className="block rounded-full h-14 border border-black border-solid shadowbtn">
                <button className="bg-transparenent darkModeTextColor h-full font-bold px-10 rounded-full hover:border-2 border-solid hover:bg-[#29a587]">
                  {hero15[0].btn15.text}
                </button>
              </span>
              <hr className="w-10 h-[3px] bg-black mr-6 btnHoverColor" />
              <p className="btnHoverColor">{hero15[0].btn15.paragraf}</p>
            </div>
          </span>
        </section>
        <section className="xl:w-1/2">
          <div className="w-full sm:h-[680px] h-96 relative xl:block flex justify-center xl:mt-0 mt-16">
            <img src={hero15[0].imgUrl.heroImage} alt="" className="absolute z-10 lg:w-auto w-full sm:w-[200px] lg:h-[500px] object-cover ml-[50px] w-[350px] mr-[45px]" />
            <div className="absolute z-10 lg:bottom-24 bottom-20 xl:-left-10 lg:left-40 left-0">
              <div className="block rounded-full sm:h-20 h-14 w-fit shadowbtn relative z-10">
                <button className="h-full sm:px-6 px-3 border border-black border-solid rounded-full lg:text-[31px] text-[13px] font-bold flex items-center darkModeTextColor">
                  {hero15[0].sub_titleA.sub_title1}
                  <strong className="btnHoverColor text-[27px] ml-[3px]"> {hero15[0].sub_titleA.sub_title2}</strong>
                  <span className="text-[20px] flex flex-col items-start leading-tight ml-[3px] darkModeTextColor"> {hero15[0].sub_titleA.sub_title3}</span>
                  <strong className="btnHoverColor text-[31px] ml-[3px]"> {hero15[0].sub_titleA.sub_title4}</strong>
                </button>
              </div>
            </div>
            <div className="absolute z-10 lg:bottom*12 bottom-4 xl:right-14 lg:right-40 right-8">
              <div className=" block rounded-full sm:h-20 h-14 w-fit shadowbtn relative z-10">
                <button className="h-full sm:px-6 px-3 border  border-black border-solid rounded-full lg:text-[27px] text-[13px] font-bold flex items-center darkModeTextColor">
                  {hero15[0].sub_titleA.sub_title5}
                  <span className="text-[17px] flex flex-col items-start leading-none ml-[3px]"> {hero15[0].sub_titleA.sub_title6}</span>
                  <strong className="btnHoverColor ml-[3px] "> {hero15[0].sub_titleA.sub_title7}</strong>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero15;
