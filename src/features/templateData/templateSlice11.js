import { createSlice } from "@reduxjs/toolkit";

const templateSlice11 = createSlice({
  initialState: {
    navbar: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525696/jammal_photos/wmm8wc8r2ijrtguljwaa.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707526073/jammal_photos/luyky3ymsgfncvjf1deo.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525736/jammal_photos/bchiolwka0mnwvxo4hyb.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525780/jammal_photos/ysgiu27fi7lneuiyn3le.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525829/jammal_photos/tswsmtson7odglvqpal7.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525877/jammal_photos/o0wp66kvooi2ko10robo.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707526376/jammal_photos/bzy6y1qtnk4jv90timxl.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707526425/jammal_photos/fvk0ywqqxdfrtefnu1bf.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707526505/jammal_photos/iri11hg4ko9cfycfuwul.png",
      ],
    },
    hero: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707528928/jammal_photos/vtflccswxqzvklifgnrp.svg",
      title: "Bolby Doe",
      subtitle: "I'm a Front-End developer",
      actionButton: "Hire Me",
      actionScroll: "Scroll Down",
      mediaIcons: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527618/jammal_photos/qxpmecvimok1s04rvjaf.svg",
          url: "https://www.instagram.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527652/jammal_photos/furgxu5bmhp4dytyau0d.png",
          url: "https://www.twitter.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527691/jammal_photos/uzwvjddnc8yk20x9w0vt.svg",
          url: "https://www.behance.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527724/jammal_photos/c2acr5tb8dswk7nmuzjt.svg",
          url: "https://www.dribble.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527760/jammal_photos/fizcisutwa4soxzeng3u.svg",
          url: "https://www.pinterest.com/",
        },
      ],
    },

    services: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529935/jammal_photos/qkowgxkdtneaviwup0dv.svg",
      title: "About Me",
      content:
        "I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at Word Press.",
      actionButton: "Download CV",
      statistics: [
        {
          title: "Development",
          value: "90%",
        },
        {
          title: "UI/UX design",
          value: "80%",
        },
        {
          title: "Photography",
          value: "60%",
        },
      ],
      datas: [
        {
          id: 1,
          imgUrl: " https://res.cloudinary.com/duc04fwdb/image/upload/v1707530832/jammal_photos/fjodtcpjr0admhaoxbs3.svg",
          title: "UI/UX design",
          description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
        },
        {
          id: 2,
          imgUrl: " https://res.cloudinary.com/duc04fwdb/image/upload/v1707530891/jammal_photos/fc5s2yfsxeciyqkrhh5q.svg",
          title: "Web Development",
          description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
        },
        {
          id: 3,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707530933/jammal_photos/m9ni1apwvt80sgdcuisn.svg",
          title: "Photography",
          description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
        },
      ],
    },

    statistic: {
      statistics: [
        {
          title: "Project completed",
          value: "198",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529254/jammal_photos/spnh089rxrr416y4kbgi.png",
        },
        {
          title: "Cup of coffee",
          value: "5670",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529311/jammal_photos/pz1rrv85kzajkutewxab.png",
        },
        {
          title: "Satisfied clients",
          value: "427",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529342/jammal_photos/pk7qb56mjpspx8tbppt2.png",
        },
        {
          title: "Nominees winner",
          value: "35",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529377/jammal_photos/ke93bwvdtgnwajajiguq.png",
        },
      ],
    },
    cta: {
      education: [
        {
          id: 1,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315263/jammal_photos/e8txoexg8c3isadzrzl4.png",
          year: "2019 - present",
          title: "Academic Degree",
          desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
        },
        {
          id: 2,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315263/jammal_photos/e8txoexg8c3isadzrzl4.png",
          year: "2013 - 2017",
          title: "Bachelor's Degree",
          desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
        },
        {
          id: 3,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315263/jammal_photos/e8txoexg8c3isadzrzl4.png",
          year: "2009 - 2013",
          title: "Honours Degree",
          desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
        },
      ],
      experience: [
        {
          id: 4,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315138/jammal_photos/jjusigmt6zz4eo7i00rm.svg",
          year: "2019 - present",
          title: "Web Designer",
          desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
        },
        {
          id: 5,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315138/jammal_photos/jjusigmt6zz4eo7i00rm.svg",
          year: "2013 - 2017",
          title: "Front-End Developer",
          desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
        },
        {
          id: 6,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315138/jammal_photos/jjusigmt6zz4eo7i00rm.svg",
          year: "2009 - 2013",
          title: "Back-End Developer",
          desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
        },
      ],
    },

    projects: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532366/jammal_photos/j8mhijwgfitdt7jodrfo.png",
      title: {
        titl0: "Projects",
        title1: "Everything",
        title2: "Creative",
        title3: "Art",
        title4: "Design",
        title5: "Branding",
      },
      Menu11: [
        {
          id: 1,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707531996/jammal_photos/d6bkxalscogk4dh51xbn.svg",
          title: "Project Management Illustration",
          category: "Design",
        },
        {
          id: 2,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532031/jammal_photos/vbmrao9xbughuacemn8z.svg",
          title: "Guest App Walkthrough Screens",
          category: "Art",
        },
        {
          id: 3,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532063/jammal_photos/poxem7ymkahfv9brke6k.svg",
          title: "Delivery App Wireframe",
          category: "Branding",
        },
        {
          id: 4,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532105/jammal_photos/zuzgoospnw8rkchet8uz.svg",
          title: "Onboarding Motivation",
          category: "Design",
        },
        {
          id: 5,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532139/jammal_photos/a902sheq3oxkzwplffbt.svg",
          title: "iMac Mockup Design",
          category: "Creative",
        },
        {
          id: 6,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532169/jammal_photos/gp1h7hcnbvmjfew99gr6.svg",
          title: "Game Store App Concept",
          category: "Art",
        },
      ],
    },
    pricing: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707533563/jammal_photos/d7f3hwuspkhzrd4gixml.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707533646/jammal_photos/ecwgh1geup2tlrbkywss.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707533677/jammal_photos/iefwt1dhzkcm1t9qsik0.svg",
      ],
      title: {
        titl0: "Pricing Plans",
        titl1: "Basic",
        titl2: "Recommended",
        titl3: "Ultimate",
        titl4: "Premium",
      },
      paragraf: {
        p1: "A Simple option but powerful to manage your business",
        p2: "Email support",
        p3: "Unlimited product including app integration and more features",
        p4: "Mon-Fri support",
        p5: "A wise option for large companies and individuals",
        p6: "24/7 support",
      },
      item11: [
        {
          item1: "$",
          item2: "9",
          item3: "Month",
        },
        {
          item4: "$",
          item5: "15",
          item6: "Month",
        },
        {
          item7: "$",
          item8: "19",
          item9: "Month",
        },
      ],
      btn: { B1: "Get Started" },
    },
    testimonial: [
      {
        id: 1,
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536339/jammal_photos/ygo3scdgrqd9e8wnp7hd.svg",
        title: "A7md M7md",
        subtitle: "Product designer at Dribble",
        comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
      },
      {
        id: 2,
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536399/jammal_photos/ahs4v2ti9ltcukn9awnn.svg",
        title: "M7md A7md",
        subtitle: "Product designer at Dribble",
        comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
      },
    ],
    footer: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536629/jammal_photos/pmgnbkfrkxuhmwom4fdx.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536689/jammal_photos/zurrd2gqiqn3hovkigki.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536723/jammal_photos/mm847mrsdrh7xfbfq3ff.svg",
      ],
      title: {
        title0: "Latest Posts",
        title1: "Reviews",
        title2: "Bolby",
        title3: "Tutorial",
        title4: "Bolby",
        title5: "Business",
        title6: "Bolby",
        title7: ".",
      },
      paragraf: {
        p1: "5 Best App Development Tool for Your Projects",
        p2: "09 February, 2024",
        p3: "Common Misconceptions About Payment",
        p4: "07 February, 2024",
        p5: "3 Things to know about startup business",
        p6: "05 February, 2024",
      },
    },

    contact: {
      title: "Get In Touch",
      pargraf: {
        p1: "Let's talk about everything!",
        p2: "Don't like forms? Send me an email. 👋",
      },
      btn: "Send Message",
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },
  name: "templateSlice11",
  reducers: {
    updateTemplate11: (state, action) => {
      const { section, variable, value, i, blockName, subBlockName, subIndex, objKey } = action.payload;
      if (i === undefined) {
        if (variable === null) {
          state[section][blockName][objKey] = value;
        } else {
          state[section][variable] = value;
        }
      } else {
        if (subIndex === undefined) {
          if (variable === null) state[section][blockName][i] = value;
          else {
            if (subBlockName === undefined) {
              state[section][blockName][i][variable] = value;
            } else {
              state[section][blockName][i][subBlockName][variable] = value;
            }
          }
        } else {
          if (variable === null) state[section][blockName][i][subBlockName][subIndex] = value;
          else {
            state[section][blockName][i][subBlockName][subIndex][variable] = value;
          }
        }
      }
    },
  },
});

export const { updateTemplate11 } = templateSlice11.actions;
export default templateSlice11.reducer;
