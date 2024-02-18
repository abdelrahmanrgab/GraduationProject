import { createSlice } from "@reduxjs/toolkit";
import { addElement, deleteElement, editElement } from "./actions";
const templateSlice3 = createSlice({
  initialState: {
    navbar3: {
      imgUrl: [
        {
          imgUrlA: "https://res.cloudinary.com/duc04fwdb/image/upload/v1705928879/jammal_photos/vqliep1jh8zlgkmwkewx.png",
          imgUrlB: "https://res.cloudinary.com/duc04fwdb/image/upload/v1705931744/jammal_photos/fbb4rdapofxl04oewfc3.png",
        },
      ],
      links: ["Home", "Programs", "Why us", "Plans", "Testimonials"],
    },

    hero3: {
      Subtitle: "the best fitness club in the town",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703609517/jammal_photos/neoqh0j4yjexem6j9ozp.png",
      title: [
        {
          titleA: "shape",
          titleB: "your",
          titleC: "ideal body",
        },
      ],
      description: "In here we will help you to shape and build your ideal body and live up your life to fullest..",
      numCounter: [
        {
          count1: "+140",
          descr1: "EXPORT COACHS",

          count2: "+978",
          descr2: "MEMBERS JOINED",

          count3: "+50",
          descr3: "FITNESS PROGRAMS",
        },
      ],
      buttonText: [
        {
          buttonTextA: "Get Started",
          buttonTextB: "Learn More",
          buttonTextC: "Join now",
        },
      ],
    },

    feature3: {
      Subtitle: "SOME REASONS",
      title: [
        {
          titleA: "WHY",
          titleB: " CHOOSE US ?",
        },
      ],
      imgUrl: [
        {
          imgUrll: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989257/jammal_photos/ywgmvzeed0ebb7myfvyw.png",
          imgUrl2: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989314/jammal_photos/coh8z8kfvjla5xurgg2p.png",
          imgUrl3: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989351/jammal_photos/azgv09qa1amwje8gu9ms.png",
          imgUrl4: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989376/jammal_photos/imnhgmjpih33ckqouqrh.png",
          imgUrl5: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989402/jammal_photos/f7m5xctam3rj268lkvel.png", //nb
          imgUrl6: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989442/jammal_photos/spxtwugfwuvbemwjyzd9.png", //tick
          imgUrl7: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989477/jammal_photos/b2ysy0kvgjgcz1r2r3ty.png", //nick
          imgUrl8: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989514/jammal_photos/blcyycnc06jda0rwtuol.png", //adadis
        },
      ],
      description: [
        {
          description1: "OVER 140+ EXPERT COACHS",
          description2: "TRAIN SMARTER AND FASTER THAN BEFORE",
          description3: "1 FREE PROGRAM FOR NEW MEMBER",
          description4: "RELIABLE PARTNERS",
          description5: "OUR PPARTNERS",
        },
      ],
    },

    testimonial3: {
      title: [
        {
          Subtitle: "TESTIMONIALS",
          titleA: "WHAT THE PEOPLE THINKS ABOUT US",
          titleB: "SAY ABOUT US",
        },
      ],
      imgUrl: [
        {
          imgUrl1: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702987916/jammal_photos/pt96uext4dvfv3op3khc.png",
          imgUrl2: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702987950/jammal_photos/rkwjn9zqa9jgcp1dhzsb.png",
        },
      ],
      testimonialsData: [
        {
          image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986897/jammal_photos/xbinalf2qg4aqqhhpeif.png",
          review: "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
          name: "MATHEW HENDRICKSON",
          status: "ENTREPRENEUR",
        },
        {
          image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986859/jammal_photos/cwtimzgptwqccvycipw0.jpg",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ",
          name: "JOHN KEVIN",
          status: "COACH",
        },
        {
          image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986807/jammal_photos/pnlbsd6lankxv5xc9px5.jpg",
          review: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
          name: "FRANKLIN",
          status: "CUSTOMER",
        },
      ],
    },

    projects3: {
      title: [
        {
          titleA: "EXPLORE OUR",
          titleB: "PROGRAMS",
          titleC: "TO SHAPE YOU",
        },
      ],
      buttonText: "Join Now",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986510/jammal_photos/pouffwm6ffmtztpisvjv.png",
      programsData: [
        {
          image: (
            <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3812 3.41487L10.1103 1.2853C10.0359 1.21502 9.9475 1.15924 9.85006 1.12117C9.75262 1.0831 9.64811 1.0635 9.54255 1.0635C9.437 1.0635 9.33248 1.0831 9.23505 1.12117C9.13761 1.15924 9.04917 1.21502 8.97484 1.2853C8.82591 1.4258 8.74232 1.61585 8.74232 1.81395C8.74232 2.01204 8.82591 2.20209 8.97484 2.34259L10.67 3.93226L4.1932 10.006L2.49804 8.41634C2.34822 8.27668 2.14556 8.19829 1.93432 8.19829C1.72307 8.19829 1.52041 8.27668 1.3706 8.41634C1.29565 8.48605 1.23616 8.56898 1.19557 8.66036C1.15497 8.75173 1.13407 8.84974 1.13407 8.94873C1.13407 9.04772 1.15497 9.14573 1.19557 9.2371C1.23616 9.32848 1.29565 9.41141 1.3706 9.48112L3.61748 11.5882L5.86437 13.6953C5.93843 13.7661 6.02674 13.8225 6.12419 13.8611C6.22164 13.8997 6.3263 13.9198 6.43209 13.9202C6.59091 13.9211 6.74641 13.8776 6.87876 13.7952C7.01111 13.7129 7.11432 13.5955 7.17522 13.4579C7.23612 13.3204 7.25197 13.1689 7.22073 13.0229C7.18949 12.8769 7.11258 12.7429 6.99981 12.638L5.32864 11.0708L11.8054 4.99704L13.5006 6.58672C13.5751 6.65614 13.6636 6.71111 13.7608 6.74849C13.858 6.78587 13.9621 6.80494 14.0671 6.80459C14.1722 6.80424 14.2762 6.78449 14.3731 6.74646C14.47 6.70844 14.558 6.65288 14.632 6.58297C14.7061 6.51305 14.7647 6.43015 14.8045 6.33899C14.8444 6.24783 14.8647 6.1502 14.8644 6.05167C14.864 5.95315 14.8429 5.85566 14.8024 5.76476C14.7618 5.67387 14.7026 5.59136 14.628 5.52193L12.3812 3.41487ZM1.3706 11.5957C1.22003 11.4545 1.01581 11.3752 0.802876 11.3752C0.58994 11.3752 0.385725 11.4545 0.235157 11.5957C0.0845885 11.7369 1.5865e-09 11.9284 0 12.1281C-1.5865e-09 12.3278 0.0845885 12.5193 0.235157 12.6605L2.49804 14.7825C2.57275 14.852 2.66136 14.907 2.75878 14.9443C2.85621 14.9816 2.96052 15.0006 3.06576 15C3.17099 15.0006 3.27531 14.9816 3.37273 14.9443C3.47015 14.907 3.55876 14.852 3.63348 14.7825C3.70842 14.7128 3.76791 14.6299 3.8085 14.5385C3.8491 14.4471 3.87 14.3491 3.87 14.2501C3.87 14.1512 3.8491 14.0531 3.8085 13.9618C3.76791 13.8704 3.70842 13.7875 3.63348 13.7178L1.3706 11.5957ZM15.7635 2.34259L13.5006 0.220523C13.426 0.150609 13.3375 0.0951496 13.2401 0.0573121C13.1427 0.0194747 13.0383 0 12.9329 0C12.8274 0 12.723 0.0194747 12.6256 0.0573121C12.5282 0.0951496 12.4397 0.150609 12.3652 0.220523C12.2906 0.290438 12.2315 0.373439 12.1911 0.464786C12.1508 0.556134 12.13 0.65404 12.13 0.752914C12.13 0.851788 12.1508 0.949694 12.1911 1.04104C12.2315 1.13239 12.2906 1.21539 12.3652 1.2853L14.628 3.40737C14.7024 3.47765 14.7908 3.53344 14.8882 3.5715C14.9857 3.60957 15.0902 3.62917 15.1958 3.62917C15.3013 3.62917 15.4058 3.60957 15.5033 3.5715C15.6007 3.53344 15.6891 3.47765 15.7635 3.40737C15.8384 3.33766 15.8979 3.25473 15.9385 3.16335C15.9791 3.07198 16 2.97397 16 2.87498C16 2.77599 15.9791 2.67798 15.9385 2.58661C15.8979 2.49523 15.8384 2.4123 15.7635 2.34259Z" />
            </svg>
          ),
          heading: "Strength Training",
          details: "In this program, you are trained to improve your strength through many exercises.",
        },
        {
          image: (
            <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.25149 3.5206C9.47237 3.16294 9.8423 2.94938 10.2122 3.23412L11.5429 4.09183C12.1337 4.52068 11.7638 5.02071 11.6165 5.23601L8.29074 10.4551C8.14349 10.6687 7.92081 10.7399 7.69993 10.5975C7.69993 10.5975 7.6263 10.5263 6.66556 9.95336C5.70482 9.38214 5.9257 8.5227 6.44288 7.665L9.25149 3.5206Z" />
              <path d="M12.0667 0C13.0621 0 13.8667 0.806087 13.8667 1.79927C13.8667 2.7942 13.0603 3.59854 12.0667 3.59854C11.0714 3.59854 10.2667 2.79245 10.2667 1.79927C10.265 0.806087 11.0714 0 12.0667 0Z" />
              <path d="M9.97746 3.10001L7.20057 2.16333C6.98232 2.09155 6.68955 2.09155 6.54228 2.16333L3.39987 3.82134C2.9616 4.03844 2.81433 4.54266 3.03435 4.90333C3.17985 5.19221 3.39987 5.33577 3.69264 5.33577C3.83814 5.33577 3.98541 5.33577 4.13091 5.26399L6.98055 3.82134L9.46467 4.68623C9.90293 4.82979 10.3412 4.61445 10.4885 4.182C10.634 3.67602 10.4157 3.24357 9.97746 3.10001Z" />
              <path d="M5.3539 9.67883L4.41385 10.969H1.01385C0.507804 10.969 0 11.399 0 11.9005C0 12.4751 0.434005 12.9051 1.01209 12.9051H4.99194C5.3539 12.9051 5.64382 12.7623 5.85995 12.4037L6.8 11.0421C6.72972 11.0404 5.4277 10.1803 5.3539 9.67883Z" />
              <path d="M11.2044 10.8572L7.69352 8.35736C7.25489 8.07112 6.59604 8.14224 6.3048 8.6436C6.01179 9.07209 6.0846 9.71396 6.59782 10.0002L9.37703 12.0004L7.6953 15.6434C7.47509 16.1431 7.6953 16.7155 8.20674 16.9289C8.35236 17 8.49976 17 8.64538 17C9.0112 17 9.37703 16.7867 9.52265 16.4293L11.4974 12.0004C11.7158 11.643 11.5702 11.1417 11.2044 10.8572Z" />
              <path d="M15.3746 7.67116L12.66 7.0347L11.8525 4.63298C11.7064 4.20924 11.2661 3.99652 10.8258 4.13891C10.3856 4.27958 10.1646 4.70503 10.3125 5.12876L11.2661 7.95422C11.3392 8.23728 11.5602 8.44829 11.8525 8.51863L15.0092 9.29576H15.0823C15.5226 9.36609 15.8898 9.08475 15.9628 8.66102C16.1072 8.16523 15.8149 7.7415 15.3746 7.67116Z" />
            </svg>
          ),
          heading: "Cardio Training",
          details: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
        },
        {
          image: (
            <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3226 13.9301C9.09534 15.2434 7.39179 16 5.64653 16C5.18413 16 4.72174 15.9433 4.27326 15.8367C3.03558 15.5434 1.97869 14.8967 1.12691 13.9135C1.0991 13.8801 -1.25805 10.9803 0.928746 7.52058C1.04695 7.33726 1.17906 7.1706 1.28336 7.04395C2.23596 5.89402 3.16769 4.30413 2.6601 3.60085C2.62072 3.54516 2.59996 3.47929 2.60058 3.41201C2.60121 3.34473 2.62318 3.27922 2.66358 3.22421C2.74354 3.10755 2.89304 3.05422 3.0321 3.09088C3.16769 3.12088 4.21763 3.43753 4.44361 5.43072C4.67307 4.96409 4.87471 4.3408 4.82604 3.63085C4.75303 2.55425 4.13767 1.53099 2.99386 0.584388C2.93401 0.53482 2.89375 0.467037 2.87983 0.392398C2.8659 0.31776 2.87916 0.2408 2.91737 0.174416C2.99386 0.0377589 3.16422 -0.0322363 3.31719 0.0144272C3.39715 0.0344258 10.8267 2.19428 9.70027 9.57711C10.1348 9.13047 10.6181 8.26386 10.4999 6.6773C10.4895 6.52065 10.5903 6.38066 10.7433 6.33399C10.8997 6.28733 11.0666 6.35066 11.1465 6.48398C11.1709 6.52398 13.5176 10.507 10.3226 13.9301Z" />
            </svg>
          ),
          heading: "Fat Burning",
          details: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
        },
        {
          image: (
            <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.31132H16.5C16.3677 6.31187 16.2368 6.33867 16.1149 6.39017C15.9931 6.44166 15.8826 6.51683 15.79 6.61132L14.55 7.90132L11.75 4.71132C11.6565 4.61141 11.5434 4.53177 11.4179 4.47732C11.2923 4.42287 11.1569 4.39477 11.02 4.39477C10.8831 4.39477 10.7477 4.42287 10.6222 4.47732C10.4966 4.53177 10.3836 4.61141 10.29 4.71132L8.59001 6.41132H7.00001C6.7348 6.41132 6.48044 6.51668 6.2929 6.70422C6.10537 6.89175 6.00001 7.14611 6.00001 7.41132C6.00001 7.67654 6.10537 7.93089 6.2929 8.11843C6.48044 8.30597 6.7348 8.41132 7.00001 8.41132H9.00001C9.13162 8.41208 9.26208 8.38686 9.38392 8.33709C9.50576 8.28733 9.61657 8.214 9.71001 8.12132L11 6.78132L13.8 9.97132C13.8903 10.0743 14.0009 10.1576 14.1247 10.2161C14.2486 10.2746 14.3831 10.307 14.52 10.3113C14.6516 10.3121 14.7821 10.2869 14.9039 10.2371C15.0258 10.1873 15.1366 10.114 15.23 10.0213L16.93 8.31132H19C19.2652 8.31132 19.5196 8.20597 19.7071 8.01843C19.8947 7.83089 20 7.57654 20 7.31132C20 7.04611 19.8947 6.79175 19.7071 6.60422C19.5196 6.41668 19.2652 6.31132 19 6.31132ZM11.61 11.6113L9.71001 13.5113C9.61705 13.6051 9.50645 13.6794 9.38459 13.7302C9.26273 13.781 9.13202 13.8071 9.00001 13.8071C8.868 13.8071 8.73729 13.781 8.61543 13.7302C8.49358 13.6794 8.38297 13.6051 8.29001 13.5113L3.08001 8.30132C2.73713 7.95865 2.46513 7.55177 2.27955 7.10393C2.09398 6.6561 1.99846 6.17608 1.99846 5.69132C1.99846 5.20656 2.09398 4.72655 2.27955 4.27871C2.46513 3.83088 2.73713 3.424 3.08001 3.08132C3.77167 2.39189 4.70843 2.00476 5.68501 2.00476C6.66159 2.00476 7.59835 2.39189 8.29001 3.08132C8.38297 3.17505 8.49358 3.24945 8.61543 3.30021C8.73729 3.35098 8.868 3.37712 9.00001 3.37712C9.13202 3.37712 9.26273 3.35098 9.38459 3.30021C9.50645 3.24945 9.61705 3.17505 9.71001 3.08132C10.4127 2.41304 11.3453 2.04037 12.315 2.04037C13.2847 2.04037 14.2173 2.41304 14.92 3.08132C15.1428 3.30707 15.3376 3.55889 15.5 3.83132C15.6456 4.03154 15.8603 4.17062 16.1026 4.22167C16.3448 4.27272 16.5974 4.2321 16.8114 4.10767C17.0254 3.98324 17.1856 3.78385 17.2611 3.54808C17.3366 3.3123 17.322 3.05691 17.22 2.83132C16.9728 2.42087 16.6774 2.0415 16.34 1.70132C15.391 0.741174 14.1311 0.150426 12.786 0.0349788C11.4409 -0.0804685 10.0988 0.286933 9.00001 1.07132C8.15087 0.459617 7.14924 0.0943988 6.10565 0.0159735C5.06206 -0.0624518 4.0171 0.148965 3.08607 0.626892C2.15504 1.10482 1.37416 1.83067 0.829583 2.72435C0.28501 3.61804 -0.00207453 4.6448 1.12854e-05 5.69132C-0.000288296 6.43541 0.147178 7.17216 0.433854 7.85881C0.72053 8.54546 1.14071 9.16834 1.67001 9.69132L6.88001 14.9013C7.44251 15.4631 8.20501 15.7787 9.00001 15.7787C9.79501 15.7787 10.5575 15.4631 11.12 14.9013L13 13.0213C13.1863 12.834 13.2908 12.5805 13.2908 12.3163C13.2908 12.0521 13.1863 11.7987 13 11.6113C12.8135 11.4311 12.5644 11.3303 12.305 11.3303C12.0457 11.3303 11.7965 11.4311 11.61 11.6113Z" />
            </svg>
          ),
          heading: "Health Fitness",
          details: "This programs is designed for those who exercises only for their body fitness not body building.",
        },
      ],
    },

    pricing3: {
      title: [
        {
          titleA: "READY TO START",
          titleB: "YOUR JOURNEY",
          titleC: "NOW WITHUS",
        },
      ],
      description: "See more benefits",
      buttonText: "join Now",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702988784/jammal_photos/vrqn7t4vmruj1drgmpdb.png",
      plansData: [
        {
          icon: (
            <svg width="15" height="13" viewBox="0 0 15 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.01789 5.76762H8.26715V5.03093C8.26715 4.83555 8.18806 4.64816 8.04727 4.51001C7.90648 4.37185 7.71552 4.29424 7.51641 4.29424C7.3173 4.29424 7.12635 4.37185 6.98556 4.51001C6.84477 4.64816 6.76567 4.83555 6.76567 5.03093V5.76762H6.01493C5.81582 5.76762 5.62487 5.84524 5.48408 5.98339C5.34329 6.12155 5.26419 6.30893 5.26419 6.50431C5.26419 6.6997 5.34329 6.88708 5.48408 7.02523C5.62487 7.16339 5.81582 7.24101 6.01493 7.24101H6.76567V7.9777C6.76567 8.17308 6.84477 8.36046 6.98556 8.49862C7.12635 8.63678 7.3173 8.71439 7.51641 8.71439C7.71552 8.71439 7.90648 8.63678 8.04727 8.49862C8.18806 8.36046 8.26715 8.17308 8.26715 7.9777V7.24101H9.01789C9.217 7.24101 9.40796 7.16339 9.54875 7.02523C9.68954 6.88708 9.76864 6.6997 9.76864 6.50431C9.76864 6.30893 9.68954 6.12155 9.54875 5.98339C9.40796 5.84524 9.217 5.76762 9.01789 5.76762ZM13.6425 1.34746C12.8419 0.570035 11.7846 0.0989691 10.6613 0.0192671C9.53795 -0.0604348 8.42257 0.256476 7.51641 0.912815C6.56121 0.215636 5.37229 -0.100497 4.18907 0.0280747C3.00585 0.156647 1.91622 0.720375 1.1396 1.60574C0.362984 2.4911 -0.0429299 3.63233 0.00360011 4.79962C0.0501301 5.9669 0.545648 7.07353 1.39037 7.89666L5.89481 12.3537C6.31711 12.7675 6.88954 13 7.48638 13C8.08322 13 8.65566 12.7675 9.07795 12.3537L13.5824 7.89666C14.026 7.47133 14.3796 6.96416 14.6229 6.4043C14.8661 5.84443 14.9942 5.24291 14.9998 4.63432C15.0054 4.02572 14.8883 3.42203 14.6554 2.85796C14.4225 2.2939 14.0782 1.78056 13.6425 1.34746ZM12.5839 6.84319L8.07947 11.2633C8.00968 11.3324 7.92664 11.3872 7.83516 11.4246C7.74368 11.462 7.64555 11.4813 7.54644 11.4813C7.44734 11.4813 7.34921 11.462 7.25773 11.4246C7.16624 11.3872 7.08321 11.3324 7.01342 11.2633L2.50897 6.84319C1.92021 6.25262 1.59052 5.45929 1.59052 4.63311C1.59052 3.80694 1.92021 3.01361 2.50897 2.42304C3.10893 1.84178 3.91809 1.51585 4.76119 1.51585C5.6043 1.51585 6.41346 1.84178 7.01342 2.42304C7.08321 2.49208 7.16624 2.54689 7.25773 2.58429C7.34921 2.62169 7.44734 2.64095 7.54644 2.64095C7.64555 2.64095 7.74368 2.62169 7.83516 2.58429C7.92664 2.54689 8.00968 2.49208 8.07947 2.42304C8.67943 1.84178 9.48859 1.51585 10.3317 1.51585C11.1748 1.51585 11.984 1.84178 12.5839 2.42304C13.1772 3.01427 13.5097 3.81073 13.5097 4.64048C13.5097 5.47023 13.1772 6.2667 12.5839 6.85793V6.84319Z" />
            </svg>
          ),
          name: "BASIC PLAN",
          price: "25",
          features: ["2 hours of excercises", "Free consultaion to coaches", "Access to The Community"],
        },
        {
          icon: (
            <svg width="28" height="24" viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.11111 18L0 1.5L8.55556 9L14 0L19.4444 9L28 1.5L24.8889 18H3.11111ZM24.8889 22.5C24.8889 23.4 24.2667 24 23.3333 24H4.66667C3.73333 24 3.11111 23.4 3.11111 22.5V21H24.8889V22.5Z" />
            </svg>
          ),
          name: "PREMIUM PLAN",
          price: "30",
          features: ["5 hour of excercises", "Free consultaion of Coaches", "Accessto minibar"],
        },
        {
          icon: (
            <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3812 3.41487L10.1103 1.2853C10.0359 1.21502 9.9475 1.15924 9.85006 1.12117C9.75262 1.0831 9.64811 1.0635 9.54255 1.0635C9.437 1.0635 9.33248 1.0831 9.23505 1.12117C9.13761 1.15924 9.04917 1.21502 8.97484 1.2853C8.82591 1.4258 8.74232 1.61585 8.74232 1.81395C8.74232 2.01204 8.82591 2.20209 8.97484 2.34259L10.67 3.93226L4.1932 10.006L2.49804 8.41634C2.34822 8.27668 2.14556 8.19829 1.93432 8.19829C1.72307 8.19829 1.52041 8.27668 1.3706 8.41634C1.29565 8.48605 1.23616 8.56898 1.19557 8.66036C1.15497 8.75173 1.13407 8.84974 1.13407 8.94873C1.13407 9.04772 1.15497 9.14573 1.19557 9.2371C1.23616 9.32848 1.29565 9.41141 1.3706 9.48112L3.61748 11.5882L5.86437 13.6953C5.93843 13.7661 6.02674 13.8225 6.12419 13.8611C6.22164 13.8997 6.3263 13.9198 6.43209 13.9202C6.59091 13.9211 6.74641 13.8776 6.87876 13.7952C7.01111 13.7129 7.11432 13.5955 7.17522 13.4579C7.23612 13.3204 7.25197 13.1689 7.22073 13.0229C7.18949 12.8769 7.11258 12.7429 6.99981 12.638L5.32864 11.0708L11.8054 4.99704L13.5006 6.58672C13.5751 6.65614 13.6636 6.71111 13.7608 6.74849C13.858 6.78587 13.9621 6.80494 14.0671 6.80459C14.1722 6.80424 14.2762 6.78449 14.3731 6.74646C14.47 6.70844 14.558 6.65288 14.632 6.58297C14.7061 6.51305 14.7647 6.43015 14.8045 6.33899C14.8444 6.24783 14.8647 6.1502 14.8644 6.05167C14.864 5.95315 14.8429 5.85566 14.8024 5.76476C14.7618 5.67387 14.7026 5.59136 14.628 5.52193L12.3812 3.41487ZM1.3706 11.5957C1.22003 11.4545 1.01581 11.3752 0.802876 11.3752C0.58994 11.3752 0.385725 11.4545 0.235157 11.5957C0.0845885 11.7369 1.5865e-09 11.9284 0 12.1281C-1.5865e-09 12.3278 0.0845885 12.5193 0.235157 12.6605L2.49804 14.7825C2.57275 14.852 2.66136 14.907 2.75878 14.9443C2.85621 14.9816 2.96052 15.0006 3.06576 15C3.17099 15.0006 3.27531 14.9816 3.37273 14.9443C3.47015 14.907 3.55876 14.852 3.63348 14.7825C3.70842 14.7128 3.76791 14.6299 3.8085 14.5385C3.8491 14.4471 3.87 14.3491 3.87 14.2501C3.87 14.1512 3.8491 14.0531 3.8085 13.9618C3.76791 13.8704 3.70842 13.7875 3.63348 13.7178L1.3706 11.5957ZM15.7635 2.34259L13.5006 0.220523C13.426 0.150609 13.3375 0.0951496 13.2401 0.0573121C13.1427 0.0194747 13.0383 0 12.9329 0C12.8274 0 12.723 0.0194747 12.6256 0.0573121C12.5282 0.0951496 12.4397 0.150609 12.3652 0.220523C12.2906 0.290438 12.2315 0.373439 12.1911 0.464786C12.1508 0.556134 12.13 0.65404 12.13 0.752914C12.13 0.851788 12.1508 0.949694 12.1911 1.04104C12.2315 1.13239 12.2906 1.21539 12.3652 1.2853L14.628 3.40737C14.7024 3.47765 14.7908 3.53344 14.8882 3.5715C14.9857 3.60957 15.0902 3.62917 15.1958 3.62917C15.3013 3.62917 15.4058 3.60957 15.5033 3.5715C15.6007 3.53344 15.6891 3.47765 15.7635 3.40737C15.8384 3.33766 15.8979 3.25473 15.9385 3.16335C15.9791 3.07198 16 2.97397 16 2.87498C16 2.77599 15.9791 2.67798 15.9385 2.58661C15.8979 2.49523 15.8384 2.4123 15.7635 2.34259Z" />
            </svg>
          ),
          name: "PRO PLAN",
          price: "45",
          features: ["8 hours of excercises", "Consultation of Private Coach", "Free Fitness Merchandises"],
        },
      ],
    },

    cta3: {
      title: [
        {
          titleA: "READY TO",
          titleB: "LEVEL UP",
          titleC: "YOUR BODY",
          titleD: "WITH US?",
        },
      ],
      buttonText: "join Now",
    },

    footer3: {
      imgUrl: [
        {
          imgUrl1: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702990946/jammal_photos/op32ysn37afrbyyvzlpo.png", //githup
          imgUrl2: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702991031/jammal_photos/ttvjziej5llydncutm9u.png", //linkedIn
          imgUrl3: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702991055/jammal_photos/mt2lapqflvpafmnfpree.png", //insta
          imgUrl4: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702990991/jammal_photos/isxpadjx12ja5wqaqzsk.png", //logo
        },
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

    deleteElement: (state, action) => {
      deleteElement(state, action);
    },
  },
});

export const templateActions3 = templateSlice3.actions;
export default templateSlice3.reducer;
