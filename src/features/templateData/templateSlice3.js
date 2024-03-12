import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice3 = createSlice({
  initialState: {
    navbar: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1705928879/jammal_photos/vqliep1jh8zlgkmwkewx.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1705931744/jammal_photos/fbb4rdapofxl04oewfc3.png",
      ],
      links: ["Home", "Programs", "Why us", "Plans", "Testimonials"],
    },

    hero: {
      Subtitle: "the best fitness club in the town",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703609517/jammal_photos/neoqh0j4yjexem6j9ozp.png",
      title: {
        titleA: "shape",
        titleB: "your",
        titleC: "ideal body",
      },
      description: "In here we will help you to shape and build your ideal body and live up your life to fullest..",
      numCounter: {
        count1: "+140",
        descr1: "EXPORT COACHS",

        count2: "+978",
        descr2: "MEMBERS JOINED",

        count3: "+50",
        descr3: "FITNESS PROGRAMS",
      },
      buttonText: {
        buttonTextA: "Get Started",
        buttonTextB: "Learn More",
        buttonTextC: "Join now",
      },
    },

    feature: {
      Subtitle: "SOME REASONS",
      title: {
        titleA: "WHY",
        titleB: " CHOOSE US ?",
      },
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989257/jammal_photos/ywgmvzeed0ebb7myfvyw.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989314/jammal_photos/coh8z8kfvjla5xurgg2p.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989351/jammal_photos/azgv09qa1amwje8gu9ms.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989376/jammal_photos/imnhgmjpih33ckqouqrh.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989402/jammal_photos/f7m5xctam3rj268lkvel.png", //nb
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989442/jammal_photos/spxtwugfwuvbemwjyzd9.png", //tick
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989477/jammal_photos/b2ysy0kvgjgcz1r2r3ty.png", //nick
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989514/jammal_photos/blcyycnc06jda0rwtuol.png", //adadis
      ],

      description: {
        description1: "OVER 140+ EXPERT COACHS",
        description2: "TRAIN SMARTER AND FASTER THAN BEFORE",
        description3: "1 FREE PROGRAM FOR NEW MEMBER",
        description4: "RELIABLE PARTNERS",
        description5: "OUR PPARTNERS",
      },
    },

    testimonial: {
      title: {
        Subtitle: "TESTIMONIALS",
        titleA: "WHAT THE PEOPLE THINKS ABOUT US",
        titleB: "SAY ABOUT US",
      },
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702987916/jammal_photos/pt96uext4dvfv3op3khc.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702987950/jammal_photos/rkwjn9zqa9jgcp1dhzsb.png",
      ],
      testimonialsData: [
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986897/jammal_photos/xbinalf2qg4aqqhhpeif.png",
          review: "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
          name: "MATHEW HENDRICKSON",
          status: "ENTREPRENEUR",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986859/jammal_photos/cwtimzgptwqccvycipw0.jpg",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ",
          name: "JOHN KEVIN",
          status: "COACH",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986807/jammal_photos/pnlbsd6lankxv5xc9px5.jpg",
          review: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
          name: "FRANKLIN",
          status: "CUSTOMER",
        },
      ],
    },

    projects: {
      title: {
        titleA: "EXPLORE OUR",
        titleB: "PROGRAMS",
        titleC: "TO SHAPE YOU",
      },
      buttonText: "Join Now",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986510/jammal_photos/pouffwm6ffmtztpisvjv.png",
      programsData: [
        {
          heading: "Strength Training",
          details: "In this program, you are trained to improve your strength through many exercises.",
        },
        {
          heading: "Cardio Training",
          details: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
        },
        {
          heading: "Fat Burning",
          details: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
        },
        {
          heading: "Health Fitness",
          details: "This programs is designed for those who exercises only for their body fitness not body building.",
        },
      ],
    },

    pricing: {
      title: {
        titleA: "READY TO START",
        titleB: "YOUR JOURNEY",
        titleC: "NOW WITHUS",
      },
      description: "See more benefits",
      buttonText: "join Now",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702988784/jammal_photos/vrqn7t4vmruj1drgmpdb.png",
      plansData: [
        {
          name: "BASIC PLAN",
          price: "25",
          features: ["2 hours of excercises", "Free consultaion to coaches", "Access to The Community"],
        },
        {
          name: "PREMIUM PLAN",
          price: "30",
          features: ["5 hour of excercises", "Free consultaion of Coaches", "Accessto minibar"],
        },
        {
          name: "PRO PLAN",
          price: "45",
          features: ["8 hours of excercises", "Consultation of Private Coach", "Free Fitness Merchandises"],
        },
      ],
    },
    cta: {
      title: {
        titleA: "READY TO",
        titleB: "LEVEL UP",
        titleC: "YOUR BODY",
        titleD: "WITH US?",
      },
      buttonText: "join Now",
    },

    footer: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702990946/jammal_photos/op32ysn37afrbyyvzlpo.png", //githup
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702991031/jammal_photos/ttvjziej5llydncutm9u.png", //linkedIn
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702991055/jammal_photos/mt2lapqflvpafmnfpree.png", //insta
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1702990991/jammal_photos/isxpadjx12ja5wqaqzsk.png", //logo
      ],
    },
    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice3",
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

export const templateActions3 = templateSlice3.actions;
export default templateSlice3.reducer;
