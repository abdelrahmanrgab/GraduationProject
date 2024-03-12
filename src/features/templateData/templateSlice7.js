import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";

const templateSlice7 = createSlice({
  initialState: {
    navbar: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799023/jammal_photos/wz8vakvjdjio0wcqhnfe.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799683/jammal_photos/msugi233fn6vkrra5x9f.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg",
      ],
      items: [
        {
          id: "home",
          title: "Home",
        },
        {
          id: "features",
          title: "Features",
        },
        {
          id: "product",
          title: "Product",
        },
        {
          id: "clients",
          title: "Clients",
        },
      ],
    },

    // -----------------------------
    hero: {
      Subtitle: {
        SubtitleA: "20%",
        SubtitleB: "Discount For",
        SubtitleC: "1 Month",
        SubtitleD: "Account",
      },

      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706800273/jammal_photos/vt6gwourfyjs74j4ldmf.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706800322/jammal_photos/tujqyyrsfqmtnjcn6fef.png",
      ],

      title: {
        titleA: "The Next",
        titleB: "Generation",
        titleC: "Payment Method.",
      },

      paragrafA:
        "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
    },
    // -----------------------------------
    services: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706801327/jammal_photos/pu1mdivlop5zpuugkqn9.svg",
      textA: "Get",
      textB: "Started",
    },
    // /----------------------------/
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
        }
      ],


      // "stats-1": {
      //   id: "stats-1",
      //   title: "User Active",
      //   value: "3800+",
      // },
      // "stats-2": {
      //   id: "stats-2",
      //   title: "Trusted by Company",
      //   value: "230+",
      // },
      // "stats-3": {
      //   id: "stats-3",
      //   title: "Transaction",
      //   value: "$230M+",
      // },
    },
    // --------------------------------
    feature: {
      text: " Get Started",
      title: {
        titleA: "You do the business,",
        titleB: "we’ll handle the money.",
        titleC:
          " With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.",
        // 2
        titleD: "Easily control your",
        titleE: " billing & invoicing",
        titleF:
          " Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
        // 3
        titleG: " Find a better card deal",
        titleH: "in few easy steps.",
        titleK: " Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
      },
      "feature-1": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818805/jammal_photos/opfgv1t07ehs8byamptk.svg",
        title: "Rewards",
        content: "The best credit cards offer some tantalizing combinations of promotions and prizes",
      },
      "feature-2": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818830/jammal_photos/a036fafyfqgkex3saivx.svg",
        title: "100% Secured",
        content: "We take proactive steps to make sure your information and transactions are secure.",
      },
      "feature-3": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818747/jammal_photos/j85xs9b1jkx1v8ulmpff.svg",
        title: "Balance Transfer",
        content: "A balance transfer credit card can save you a lot of money in interest charges.",
      },
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814018/jammal_photos/nkxtdvx0jakzuplwtoa6.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814088/jammal_photos/auq2y4agfhj8byap3omh.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814053/jammal_photos/vwwyntauf0akzyaef7e5.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814478/jammal_photos/na4dc3msncykyboct0nu.png",
      ],
    },

    feedback: [
      {
        id: "feedback-1",
        content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815168/jammal_photos/tk0xejban2yc4ag4antf.png",
      },
      {
        id: "feedback-2",
        content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815301/jammal_photos/hesjjos1rgosxe48tawa.png",
      },
      {
        id: "feedback-3",
        content: "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815330/jammal_photos/xc3vlzv96mohozyawmnq.png",
      },
    ],
    // -------------------------------------------------------------------------------------------
    testimonial: {
      titleA: "What People are",
      titleB: "saying about us",
      titleC: " Everything you need to accept card payments and grow your business anywhere on the planet.",
    },
    // --------------------------------------------------------------------------------------------
    cta: {
      titleA: "Let’s try our service now!",
      titleB: "Everything you need to accept card payments and grow your business anywhere on the planet.",
    },

    footer: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706816362/jammal_photos/res7beki52yf4cbmuix3.svg",
      Subtitle: "A new way to make the payments easy, reliable and secure.",
      links: [
        {
          title: "Useful Links",
          links: [
            {
              name: "Content",
              link: "https://www.hoobank.com/content/",
            },
            {
              name: "How it Works",
              link: "https://www.hoobank.com/how-it-works/",
            },
            {
              name: "Create",
              link: "https://www.hoobank.com/create/",
            },
            {
              name: "Explore",
              link: "https://www.hoobank.com/explore/",
            },
            {
              name: "Terms & Services",
              link: "https://www.hoobank.com/terms-and-services/",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              name: "Help Center",
              link: "https://www.hoobank.com/help-center/",
            },
            {
              name: "Partners",
              link: "https://www.hoobank.com/partners/",
            },
            {
              name: "Suggestions",
              link: "https://www.hoobank.com/suggestions/",
            },
            {
              name: "Blog",
              link: "https://www.hoobank.com/blog/",
            },
            {
              name: "Newsletters",
              link: "https://www.hoobank.com/newsletters/",
            },
          ],
        },
        {
          title: "Partner",
          links: [
            {
              name: "Our Partner",
              link: "https://www.hoobank.com/our-partner/",
            },
            {
              name: "Become a Partner",
              link: "https://www.hoobank.com/become-a-partner/",
            },
          ],
        },
      ],
    },

    //  -----------------------------------------------------------------------------------------
    socialMedia: {
      title: "Copyright Ⓒ 2022 HooBank. All Rights Reserved.",
      "social-media-1": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818177/jammal_photos/zqz9nmo0tqfpnhunvfgl.svg",
        link: "https://www.instagram.com/",
      },
      "social-media-2": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818209/jammal_photos/h6rtmonyzmpckvur3o9g.svg",
        link: "https://www.facebook.com/",
      },
      "social-media-3": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818240/jammal_photos/ornmyj05cwnoca5hkljl.svg",
        link: "https://www.twitter.com/",
      },
      "social-media-4": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818264/jammal_photos/rno8zcfzwccx9gczoks5.svg",
        link: "https://www.linkedin.com/",
      },
    },

    // ---------------------------------------------------------------------------------------------
    // -------------------------------------------clients--------------------------------------------------
    // ---------------------------------------------------------------------------------------------
    images: {
      "client-1": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706817792/jammal_photos/yt3cnulaigujjqu1upxq.png",
      },
      "client-2": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818009/jammal_photos/ko4qgfctz14jgqygtuaj.png",
      },
      "client-3": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818009/jammal_photos/ko4qgfctz14jgqygtuaj.png",
      },
      "client-4": {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818069/jammal_photos/uioypquvjmbkcoxpb4rv.png",
      },
    },
    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
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
