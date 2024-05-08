import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";

const templateSlice7 = createSlice({
  initialState: {
    templateInfo: {
      id: 7,
      title: "",
      description: "",
      imgUrl: "",
    },
    navbar: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799023/jammal_photos/wz8vakvjdjio0wcqhnfe.svg",
      icons: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799683/jammal_photos/msugi233fn6vkrra5x9f.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg",
      ],
      links: [
        {
          title: "Home",
          url: "#home",
        },
        {
          title: "Features",
          url: "#features",
        },
        {
          title: "Product",
          url: "#product",
        },
        {
          title: "Clients",
          url: "#clients",
        },
      ],
    },

    hero: {
      title: "The Next Generation Payment Method.",
      subtitle: "20% Discount For 1 Month Account",
      description:
        "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
      buttonText: "Get Started",
      images: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706800273/jammal_photos/vt6gwourfyjs74j4ldmf.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706800322/jammal_photos/tujqyyrsfqmtnjcn6fef.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706801327/jammal_photos/pu1mdivlop5zpuugkqn9.svg",
      ],
    },

    statistics: {
      statistics: [
        {
          title: "User Active",
          value: "3800+",
        },
        {
          title: "Trusted by Company",
          value: "230+",
        },
        {
          title: "Transaction",
          value: "$230M+",
        },
      ],
    },

    features: {
      title: "You do the business,",
      subtitle: "we’ll handle the money.",
      description:
        " With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.",
      buttonText: " Get Started",
      features: [
        {
          title: "Rewards",
          description: "The best credit cards offer some tantalizing combinations of promotions and prizes",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818805/jammal_photos/opfgv1t07ehs8byamptk.svg",
        },
        {
          title: "100% Secured",
          description: "We take proactive steps to make sure your information and transactions are secure.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818830/jammal_photos/a036fafyfqgkex3saivx.svg",
        },
        {
          title: "Balance Transfer",
          description: "A balance transfer credit card can save you a lot of money in interest charges.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818747/jammal_photos/j85xs9b1jkx1v8ulmpff.svg",
        },
      ],
    },
    characteristics: {
      title: "Easily control your",
      subtitle: " billing & invoicing",
      description:
        " Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
      images: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814018/jammal_photos/nkxtdvx0jakzuplwtoa6.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814088/jammal_photos/auq2y4agfhj8byap3omh.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814053/jammal_photos/vwwyntauf0akzyaef7e5.png",
      ],
    },

    paymentMethods: {
      title: " Find a better card deal",
      subtitle: "in few easy steps.",
      description: " Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814478/jammal_photos/na4dc3msncykyboct0nu.png",
    },
    testimonials: {
      title: "What People are",
      subtitle: "saying about us",
      description: " Everything you need to accept card payments and grow your business anywhere on the planet.",
      testimonials: [
        {
          title: "Founder & Leader",
          name: "Herman Jensen",
          description: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815168/jammal_photos/tk0xejban2yc4ag4antf.png",
        },
        {
          title: "Founder & Leader",
          name: "Steve Mark",
          description: "Money makes your life easier. If you're lucky to have it, you're lucky.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815301/jammal_photos/hesjjos1rgosxe48tawa.png",
        },
        {
          title: "Founder & Leader",
          name: "Kenn Gallagher",
          description: "It is usually people in the money business, finance, and international trade that are really rich.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815330/jammal_photos/xc3vlzv96mohozyawmnq.png",
        },
      ],
    },
    logos: {
      companies: [
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706817792/jammal_photos/yt3cnulaigujjqu1upxq.png", url: "" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818009/jammal_photos/ko4qgfctz14jgqygtuaj.png", url: "" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818009/jammal_photos/ko4qgfctz14jgqygtuaj.png", url: "" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818069/jammal_photos/uioypquvjmbkcoxpb4rv.png", url: "" },
      ],
    },
    cta: {
      title: "Let’s try our service now!",
      description: "Everything you need to accept card payments and grow your business anywhere on the planet.",
    },
    footer: {
      title: "Copyright Ⓒ 2022 HooBank. All Rights Reserved.",
      Subtitle: "A new way to make the payments easy, reliable and secure.",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706816362/jammal_photos/res7beki52yf4cbmuix3.svg",
      footerSections: [
        {
          title: "Useful Links",
          links: [
            {
              title: "Content",
              url: "https://www.hoobank.com/content/",
            },
            {
              title: "How it Works",
              url: "https://www.hoobank.com/how-it-works/",
            },
            {
              title: "Create",
              url: "https://www.hoobank.com/create/",
            },
            {
              title: "Explore",
              url: "https://www.hoobank.com/explore/",
            },
            {
              title: "Terms & Services",
              url: "https://www.hoobank.com/terms-and-services/",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              title: "Help Center",
              url: "https://www.hoobank.com/help-center/",
            },
            {
              title: "Partners",
              url: "https://www.hoobank.com/partners/",
            },
            {
              title: "Suggestions",
              url: "https://www.hoobank.com/suggestions/",
            },
            {
              title: "Blog",
              url: "https://www.hoobank.com/blog/",
            },
            {
              title: "Newsletters",
              url: "https://www.hoobank.com/newsletters/",
            },
          ],
        },
        {
          title: "Partner",
          links: [
            {
              title: "Our Partner",
              url: "https://www.hoobank.com/our-partner/",
            },
            {
              title: "Become a Partner",
              url: "https://www.hoobank.com/become-a-partner/",
            },
          ],
        },
      ],
      medias: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818177/jammal_photos/zqz9nmo0tqfpnhunvfgl.svg",
          url: "https://www.instagram.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818209/jammal_photos/h6rtmonyzmpckvur3o9g.svg",
          url: "https://www.facebook.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818240/jammal_photos/ornmyj05cwnoca5hkljl.svg",
          url: "https://www.twitter.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818264/jammal_photos/rno8zcfzwccx9gczoks5.svg",
          url: "https://www.linkedin.com/",
        },
      ],
    },

    colors: {
      templateColors: [
        "#0b132b",
        "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)",
        "linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%)",
        " linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)",
        "#00f6ff",
        "rgba(255, 255, 255, 0.7)",
      ],
    },
  },

  name: "templateSlice7",
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
  },
});

export const templateActions7 = templateSlice7.actions;
export default templateSlice7.reducer;
