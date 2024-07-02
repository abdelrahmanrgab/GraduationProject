import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 15,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799023/jammal_photos/wz8vakvjdjio0wcqhnfe.svg",
    links: [
      {
        title: "Home",
        url: "#home",
      },
      {
        title: "Services",
        url: "#services",
      },
      {
        title: "Skills",
        url: "#skills",
      },
      {
        title: "Testimonials",
        url: "#testimonials",
      },
      {
        title: "Contact",
        url: "#contact",
      },
    ],
  },

  hero: {
    imgUrl: ["https://res.cloudinary.com/duc04fwdb/image/upload/v1708017251/jammal_photos/z8h6g9lv2sxmywvygcts.png"],
    text: "HELLO MY NAME IS",
    name: "ZOE MILLER",
    subtitle: "I AM Web Developer",
    description: "From France, Paris. I have right experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
    medias: [
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017487/jammal_photos/dov4re8wizaegdj3jiza.svg",
        url: "https://example.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017404/jammal_photos/ihzghh1idyxmj1u4vk9r.svg",
        url: "https://example.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017568/jammal_photos/hpyyah3zyuwxvydg7dnw.png",
        url: "https://example.com",
      },
    ],
    title: "12 + YEARS OF EXPERIENCE",
    jop: "330 COMPLETED PROJECTS",
    buttonText: "DOWNLOAD CV",
    linkText: "MY SKILLS",
  },

  services: {
    title: "WHAT I DO",
    subtitle: "My Services",
    buttonText: " See Pricing",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708020289/jammal_photos/yd48mthnmtr9zswrqrms.png",
    services: [
      {
        title: "Web Development",
        subtitle: "Web Design & Logo",
        description: "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.",
      },
      {
        title: "Apps Development",
        subtitle: "iOS & Android",
        description:
          "Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.",
      },
      {
        title: "Game Development",
        subtitle: "Unity & Unreal Engine ",
        description: "Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ",
      },
    ],
  },

  features: {
    title: "PROFESSIONAL SKILLS",
    subtitle: "My Talent",
    features: [
      {
        title: "PHP",
        number: "85",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "JavaScript",
        number: "65",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "WordPress",
        number: "60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Python",
        number: "50",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "React",
        number: "70",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Adobe XD",
        number: "85",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },

  projects: {
    title: "PROTFOLIO",
    subtitle: "My Cases",
    buttonText: "See Pricing",
    linkText: "VIEW MORE",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708020289/jammal_photos/yd48mthnmtr9zswrqrms.png",

    categories: ["All", "VIDEO", "PHOTOGRAPHY", "BRANDING"],
    projects: [
      {
        title: "BRANDING",
        subtitle: "Zorro",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
      },
      {
        title: "BRANDING",
        subtitle: "Gooir",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
      },
      {
        title: "VIDEO",
        subtitle: "Explore",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
      },
      {
        title: "VIDEO",
        subtitle: "Stay Fit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
      },
      {
        title: "PHOTOGRAPHY",
        subtitle: "Kana",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
      },
      {
        title: "PHOTOGRAPHY",
        subtitle: "Mozar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
      },
    ],
  },

  cta: {
    title: "RESUME ",
    subtitle: "My Story",
    imgs: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1708028064/jammal_photos/dxfncgzlnm5uoeyhugkf.svg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1708027950/jammal_photos/suloncptxwohoete98cr.png",
    ],
    educations: [
      {
        title: "CoderHouse Courses",
        subtitle: "Backend Programming",
        year: "2014 - 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "education",
      },
      {
        title: "Lviv National Academy of Arts",
        subtitle: "Faculty of Design",
        year: "2012 - 2014",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "education",
      },
      {
        title: "IT Future",
        subtitle: "High School",
        year: "2010 - 2012",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "education",
      },
    ],
    experiences: [
      {
        title: "UI Head & Manager",
        subtitle: "Soft Tech Inc.",
        year: "2020 - 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "experience",
      },
      {
        title: "UI / UX Specialist",
        subtitle: "Kana Design Studio",
        year: "2018 - 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "experience",
      },
      {
        title: "Plugins Developer",
        subtitle: "Fiverr.com",
        year: "2016 - 2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "experience",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    subtitle: " WHAT Customers Say",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    testimonials: [
      {
        name: "Barbara Wilson",
        subtitle: "CEO Company",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
      },
      {
        name: "Charlie Smith",
        subtitle: "Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
      },
      {
        name: "Roy Wang",
        subtitle: "Manager GYM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
      },
      {
        name: "Jennifer Smith",
        subtitle: "CEO & Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
      },
      {
        name: "Roy Wang",
        title: "Paul Freeman",
        subtitle: "Photographer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
      },
    ],
  },
  pricing: {
    title: "PRICING",
    subtitle: "MY Price Board",
    plans: [
      {
        title: "HOURLY BASIS",
        price: "39",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        timeUnit: "hour",
        features: ["Brand Design", "Web Development", "Advertising", "Photography"],
      },
      {
        title: "FREELANCING ",
        price: "259",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        timeUnit: "Week",
        features: ["Brand Design", "Web Development", "Advertising", "Photography"],
      },
      {
        title: "FULL TIME ",
        price: "1.249",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        timeUnit: "Month",
        features: ["Brand Design", "Web Development", "Advertising", "Photography"],
      },
    ],
    buttonText: "START PROJECT",
    imgs: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030355/jammal_photos/px8o2t9qtet1pumt2yip.svg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030465/jammal_photos/capby7kt0b8mwxgzf3hs.png",
    ],
  },
  blogs: {
    title: "LATEST BLOG",
    subtitle: " MY Articles and Advice ",
    description:
      "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030465/jammal_photos/capby7kt0b8mwxgzf3hs.png",
    buttonText: "Read more ",
    linkText: " VIEW BLOG ",
    blogs: [
      {
        title: "The Main Thing For The Designer",
        date: "OCTOBER 31, 2022",
        description:
          "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942658/jammal_photos/lyixvtrnvyazsfa5yuje.jpg",
      },
      {
        title: "Follow Your Own Design Process",
        date: "OCTOBER 31, 2022",
        description:
          "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942696/jammal_photos/yjikp3c1msirossmsu3d.jpg",
      },
      {
        title: "Usability Secrets to Create Better Interfaces",
        date: "NOVEMBER 28, 2021",
        description:
          "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942724/jammal_photos/fiysz2n20varciifews5.jpg",
      },
    ],
  },

  contact: {
    title: "CONTACT ME ",
    subtitle: "LET'S  Talk About Ideas",
    name: "YOUR FULL NAME *",
    address: "YOUR EMAIL  *",
    subject: "YOUR SUBJECT *",
    message: "YOUR MESSAGE *",
    contacts: [
      {
        type: "Address",
        address: "North Tower, Toronto, Canada",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      {
        type: "Freelance",
        address: "Available Right Now",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      {
        type: "Email",
        address: "Zoe.miller@mydomain.com",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      {
        type: "Phone",
        address: "+1 900 - 900 - 9000",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
    ],
    buttonText: "SEND MESSAGE",
  },
  footer: {
    title: "Copyright Ⓒ 2022 LUIQUE . ALL RIGHTS RESERVED",
    subtitle: "DEVELOPED BY BSLTHEMES",
    medias: [
      { icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017487/jammal_photos/dov4re8wizaegdj3jiza.svg", url: "https://x.com/?lang-en=" },
      { icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017404/jammal_photos/ihzghh1idyxmj1u4vk9r.svg", url: "https://x.com/?lang-en=" },
      { icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017568/jammal_photos/hpyyah3zyuwxvydg7dnw.png", url: "https://x.com/?lang-en=" },
    ],
  },

  colors: {
    templateColors: ["red", "red", "red", "red", "red"],
  },
};
const templateSlice15 = createSlice({
  initialState,
  name: "templateSlice15",
  reducers: {
    updateTemplate: (state, action) => {
      editElement(state, action);
    },
    addNewElement: (state, action) => {
      addElement(state, action);
    },
    addElementToArray: (state, action) => {
      addElementToArray(state, action);
    },
    addNewSubElement: (state, action) => {
      addSubElement(state, action);
    },
    deleteElement: (state, action) => {
      deleteElement(state, action);
    },
    reorder: (state, action) => {
      reorder(state, action);
    },
    reorderSection: (state, action) => {
      return reorderSections(state, action);
    },
    deleteSection: (state, action) => {
      return deleteSection(state, action);
    },
    updateSchema: (state, action) => {
      return updateSchema(state, action);
    },
  },
});

export const templateActions15 = templateSlice15.actions;
export { initialState };
export default templateSlice15.reducer;
