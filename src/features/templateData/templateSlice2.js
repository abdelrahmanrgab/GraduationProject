import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 2,
    title: "Web Dev Protofolio",
    description: "Web Dev Protofolio",
    imgUrl: "/static/media/design2.4d950d7e86b76ce66e28.jpg",
    ahmed: "ahmed",
  },
  navbar: {
    links: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/home-1-svgrepo-com_axgckp.svg",
        url: "hero2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134253/info-circle-svgrepo-com_a6q6z3.svg",
        url: "services2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/project-svgrepo-com_qjvqow.svg",
        url: "projects2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/customer-testimonial-svgrepo-com_vdnnre.svg",
        url: "testimonials2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134254/message-circle-lines-alt-svgrepo-com_iotcwk.svg",
        url: "contactUs2",
      },
    ],
  },
  hero: {
    title: "Get to know",
    subtitle: "Hero",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703142400/me-about_pobewn.jpg",

    heros: [
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/book-svgrepo-com_f62qre.svg",
        title: "Experience",
        description: "3+ Years Working",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/users-svgrepo-com_acna7b.svg",
        title: "Clients",
        description: "300+ Clients Worldwide",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/project-svgrepo-com_qjvqow.svg",
        title: "Projects",
        description: "80+ completed projects",
      },
    ],
  },
  testimonials: {
    title: "What the People Thinks About Us",
    subtitle: "Testimonials",

    testimonials: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134021/avatar4_tn7dyv.jpg",
        name: "Ernest Achiever",
        opinion:
          "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
        name: "Ernest Achiever",
        opinion:
          "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar2_lgwr3o.jpg",
        name: "Ernest Achiever",
        opinion:
          "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar1_g7wm1r.jpg",
        name: "Ernest Achiever",
        opinion:
          "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
      },
    ],
  },
  projects: {
    title: "My Recent Work",
    description: "projects",

    projects: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134068/portfolio3_rzhjvk.jpg",
        title: "projects2 Item 1",
        url: "https://github.com",
        link: "https://dribbble.com/Alien_pixels",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
        title: "projects2 Item 2",
        url: "https://github.com",
        link: "https://dribbble.com/Alien_pixels",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134068/portfolio3_rzhjvk.jpg",
        title: "projects2 Item 3",
        url: "https://github.com",
        link: "https://dribbble.com/Alien_pixels",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
        title: "projects2 Item 4",
        url: "https://github.com",
        link: "https://dribbble.com/Alien_pixels",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134029/portfolio5_cugtet.png",
        title: "projects2 Item 5",
        url: "https://github.com",
        link: "https://dribbble.com/Alien_pixels",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
        title: "projects2 Item 6",
        url: "https://github.com",
        link: "https://dribbble.com/Alien_pixels",
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    description: "Reach out to us",

    contacts: [
      {
        type: " email",
        title: "ahmed@gmail.com",
        email: "mailto:ahmed.solimanth57@gmail.com",
        buttonText: "connect",
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/gmail-svgrepo-com_xppy7f.svg",
      },
      {
        type: " facebook",
        title: "Ahmed soliman  ",
        email: "mailto:ahmed.solimanth57@gmail.com",
        buttonText: "connect",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/facebook-svgrepo-com_lmghnk.svg",
      },
      {
        type: "whatsapp",
        title: "___________",
        email: "mailto:ahmed.solimanth57@gmail.com",
        buttonText: "connect",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134203/whatsapp-whats-app-svgrepo-com_ug4dbt.svg",
      },
    ],
  
    buttonText: "Send",
 linkText :'send message' ,
  },

 
  services: {
    title: "What We Offer",
    description: "Services",
    services: [
      {
        title: "UI/UX Design",
        items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
      },
      {
        title: "Web Development",
        items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
      },
      {
        title: "Content Creation",
        items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
      },
    ],
  },

  footer: {
    title: "CSE",
    description: "ssssssssssssssssssssss all rights reserved.",
    footerSections: [
      { title: "Home", url: "#hero2" },
      { title: "Services", url: "#services2" },
      { title: "Testimonials", url: "#testimonials2" },
      { title: "Contact", url: "#contactUs2" },
    ],

    medias: [
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129090/icons8-facebook-50_xfbimo.png",
        url: "https://facebook.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/x_yp3y5n.svg",
        url: "https://x.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/linkedin_itbvp5.svg",
        url: "https://linkedin.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/instagram_dlrab9.svg",
        url: "https://instagram.com",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129090/icons8-facebook-50_xfbimo.png",
        url: "https://facebook.com",
      },
    ],
  },

  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice2 = createSlice({
  initialState,
  name: "templateSlice2",
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
      updateSchema(state, action);
    },
  },
});

export const templateActions2 = templateSlice2.actions;
export { initialState };
export default templateSlice2.reducer;
