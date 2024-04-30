// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";

// const Navbar7 = () => {
//   const { pathname } = useLocation();
//   const navbar = useSelector((state) => {
//     if (pathname.includes("own-page")) {
//       return state.ownTemplate.navbar;
//     } else {
//       return state.template7.navbar;
//     }
//   });
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar" style={{ color: "var(--website-7-color-3)" }}>
//       <img src={navbar.imgUrl[0]} alt="hoobank" className="w-[124px] h-[32px]" />

//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navbar.links.map((nav, index) => (
//           <li
//             key={index}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navbar.links.length - 1 ? "mr-0" : "mr-10"
//               }`}
//             onClick={() => setActive(nav.title)}
//           >
//             <a href={nav.url} style={{ color: active === nav.title ? "var(--website-7-color-5)" : "var(--website-7-color-3)" }}>
//               {nav.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img src={toggle ? navbar.imgUrl[1] : navbar.imgUrl[2]} alt="menu" className="w-[28px] h-[28px]  object-contain" onClick={() => setToggle(!toggle)} />
//         <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}style={ color:"var(--website-7-color-5)"}>
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navbar.links.map((nav, index) => (
//               <li
//                 key={index}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navbar.links.length - 1 ? "mb-0" : "mb-4"
//                   }`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={nav.url} style={{ color: active === nav.title ? "var(--website-7-color-5)" : "var(--website-7-color-3)" }}>
//                   {nav.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar7;
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Navbar7 = () => {
  const { pathname } = useLocation();
  const navbar = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.navbar;
    } else {
      return state.template7.navbar;
    }
  });
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar" style={{ color: "var(--website-7-color-3)" }}>
      <img src={navbar.imgUrl[0]} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navbar.links.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navbar.links.length - 1 ? "mr-0" : "mr-10"
              }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={nav.url} style={{ color: active === nav.title ? "var(--website-7-color-5)" : "var(--website-7-color-3)" }}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? navbar.imgUrl[1] : navbar.imgUrl[2]} alt="menu" className="w-[28px] h-[28px] fixed  object-contain" onClick={() => setToggle(!toggle)} />
        <div className={`${!toggle ? "hidden" : "flex"} p-10 fixed top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} style={{ color: "var(--website-7-color-5)" }}> {/* تصحيح الخطأ هنا */}
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navbar.links.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navbar.links.length - 1 ? "mb-0" : "mb-4"
                  }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={nav.url} style={{ color: active === nav.title ? "var(--website-7-color-5)" : "var(--website-7-color-3)" }}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar7;
