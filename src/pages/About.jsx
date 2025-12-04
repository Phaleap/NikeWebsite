import React, { useEffect, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import { FaStar } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const missionItems = [
{
 id: 2,
 imageUrl: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/e783e052-9360-4afb-adb8-c4e9c0f5db07/NIKE+AIR+MAX+NUAXIS.png",
 heading: "Inspire Confidence",
 description: "We help people express themselves through designs that blend modern trends with timeless athletic style."
},
{
 id: 3,
 imageUrl: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/34604cb1-acc6-4a40-bf26-60185ca7da5c/NIKE+AIR+MAX+1+ESS.png",
 heading: "Make Sneakers Accessible",
 description: "Our mission is to offer genuine, high-quality Nike products at fair prices so every customer can own the sneakers they love."
},
{
 id: 4,
 imageUrl: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/0a82dcaf-0911-4aaa-9eba-970c9fb02a23/NIKE+FULL+FORCE+LO+PRM.png",
 heading: "Create a Community",
 description: "We aim to build a space where sneaker lovers can discover, share, and stay inspired by the latest Nike releases and innovations."
},
{
 id: 5,
 imageUrl: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/76886d51-8600-4faf-98d7-e8529f8d90dd/NIKE+JOURNEY+RUN.png",
 heading: "Elevate Every Step",
 description: "We strive to enhance your everyday movement by offering shoes engineered for comfort, stability, and all-day performance"
},
{
  id: 6,
  imageUrl: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/e783e052-9360-4afb-adb8-c4e9c0f5db07/NIKE+AIR+MAX+NUAXIS.png",
  heading: "Deliver Premium Quality",
  description: "We aim to provide authentic Nike footwear that meets the highest standards of comfort, durability, and performance."
 },
]
const MissionItem = ({id, imageUrl, heading, description}) => (
<div className={`wrapperImage${id}`} key={id}>
 <div className={`styleImage${id}`}>
 <img src={imageUrl} alt="" />
 </div>
 <div className={`sectionAbout${id + 2}`}>
 <h1>{heading}</h1>
 <p>{description}</p>
 </div>
</div>
);

const About = () => {
  useLayoutEffect(() => {
    // START of gsap.context block
    let ctx = gsap.context(() => {
      // Existing animations (sectionAbout2, smallImage, missionItems loop)
      gsap.to(".sectionAbout2 .bigImage img", {
        yPercent: -20,
        scrollTrigger: {
          trigger: ".sectionAbout2 .bigImage",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".smallImage img", {
        y: 600,
        x: 100,
        ease: "none",
        scale: 2,
        scrollTrigger: {
          trigger: ".sectionAlone",
          start: "top bottom",
          end: "top center",
          scrub: 2,
        },
      });

      for (let i = 0; i < missionItems.length; i++) {
        const id = i + 2;
        gsap.from(`.wrapperImage${id} .styleImage${id} img`, {
          y: -500,
          opacity: 0,
          scrollTrigger: {
            trigger: `.wrapperImage${id}`,
            start: "top bottom",
            end: "top center",
            scrub: 2,
          },
        });
      }

      // **START of the moved code (sectionValue animations)**
      gsap.to(".sectionValue .bigImage img", {
        yPercent: -20,
        scrollTrigger: {
          trigger: ".sectionValue .bigImage",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".sectionValue", {
        backgroundColor: "black",
        scrollTrigger: {
          trigger: ".sectionValue",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".sectionValue ", {
        color: "white",
        scrollTrigger: {
          trigger: ".sectionValue",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      // **END of the moved code (sectionValue animations)**

      // **START of the moved code (reasons animation)**
      const reasons = [
        { cls: ".Reason1", x: -100 },
        { cls: ".Reason2", y: 100 },
        { cls: ".Reason3", x: 100 },
        { cls: ".Reason4", x: 100 },
        { cls: ".Reason5", y: 100 },
        { cls: ".Reason6", x: -100 },
      ];

      reasons.forEach((r) => {
        gsap.from(r.cls, {
          opacity: 0,
          x: r.x || 0,
          y: r.y || 0,
          ease: "none",
          scrollTrigger: {
            trigger: r.cls,
            start: "top center",
            end: "center center",
            scrub: 1,
          },
        });
      });
      // **END of the moved code (reasons animation)**
    });
    // END of gsap.context block

    // cleanup: This now correctly reverts ALL the animations defined above.
    return () => ctx.revert();
  }, []);
  // ... rest of the component

// Shoe scroll animation (NO CHANGES NEEDED)
useEffect(() => {
 let latestScroll = 0;
 let ticking = false;

 const updateAnimation = () => {
 const maxScroll = window.innerHeight;
 const progress = Math.min(latestScroll / maxScroll, 1);

 const rotation = -90 + progress * 90;
 const scale = 1 + progress * 2;

 const shoe = document.querySelector(".shoe");
 if (shoe) {
  shoe.style.transform = `rotate(${rotation}deg) scale(${scale})`;
 }

 ticking = false;
 };

 const handleScroll = () => {
 latestScroll = window.scrollY;

 if (!ticking) {
  window.requestAnimationFrame(updateAnimation);
  ticking = true;
 }
 };

 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
 <div>
 <Navbar />
 <div className="sectionAbout1">
  <div className="abovePart">
  <h1>Let's we<span> tell a story</span></h1>
  </div>

  <div className="middlePart">
  <div className="imageContainer">
   <img
   className="shoe"
   src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/5482d0ee-6aea-4e99-8709-d90e4ea18733/W+AF1+SHADOW.png"
   alt=""
   />
  </div>
 </div>

  <div className="abovePart">
  <h1>
   About <span>US</span>
  </h1>
  </div>
 </div>

 <div className="sectionAbout2">
  <div className="leftPart">
  <FaStar />
  <h1>Who are we?</h1>

  <div className="smallImage">
   <img
   src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
   alt=""
   />
  </div>

  <p>
   “We’re a team of sneaker lovers dedicated to bringing authentic,
   stylish, and high-quality Nike footwear to people who value comfort
   and performance.”
  </p>
 </div>

  <div className="rightPart">
  <div className="bigImage">
   <img
   src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/472cdd62-8fbd-4151-8c79-b3be84ebe347/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
   alt=""
   />
  </div>
  </div>
 </div>

 <div className="sectionAlone">
  <div className="heading">
   <h1>Our Missions</h1>
  </div>
 </div>
 {missionItems.map((item) => (
  <MissionItem {...item} />
 ))}
 <div className="sectionValue">
  <div className="leftPart">
  <div className="bigImage">
   <img
   src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_549,c_limit/3ae6e362-3f44-4045-a591-97956558fab8/nike-teens-retro-glam-looks-with-vomero-5.jpg"
   alt=""
   />
  </div>
  </div>
  <div className="rightPart">
  <FaStar />
  <h1>Our Values</h1>
  <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F07%2F10%2FNIKE-ALPHAFLY-HIL-Updated-COVER.png?w=2000&cbr=1&q=90&format=png&fit=max" alt="" />
  <p>
  At the heart of our brand is a commitment to authenticity, quality, and community. We only offer genuine Nike products because we believe trust starts with honesty. We keep our pricing fair and transparent so everyone can access the sneakers they love, while carefully selecting each pair for comfort, durability, and timeless style. Beyond products, we are driven by passion — for sneakers, for culture, and for connecting people. Every decision we make focuses on our customers and the community we serve, creating a space where sneaker enthusiasts can discover, share, and be inspired.
  </p>
 </div>
 </div>
 <div className="sectionChoose">
  <div className="heading">
<h1>Why choose us?</h1>
  </div>
  <div className="Reason1 reason">
    <div className="image">
      <img src="https://www.reuters.com/resizer/v2/YC333JKSXFIDBPSJ5ST2T25XWE.jpg?auth=db393b0ad26aa366f05045db0e1f2c43940cf84101585c8de3d79f748bbd8379&width=4045&quality=80" alt="" />
    </div>
    <div className="text">
    <h1>100% Authentic Nike Products</h1>
    <p>Every pair is verified to ensure real quality and real performance.</p>
    </div>
  </div>
  <div className="Reason2 reason">
    <div className="image">
    <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2023%2F08%2FScreenshot-2023-08-08-at-09.47.43.png?q=75&w=800&cbr=1&format=png&fit=max" alt="" />
    </div>
    <div className="text">
      <h1>Curated Selection</h1>
      <p>We bring you only the best styles — from classics to the latest releases.</p>
    </div>
  </div>
  <div className="Reason3 reason">
    <div className="text">
      <h1>Fair Pricing You Can Trust</h1>
      <p>No inflated prices. No hidden fees. Just honest value.</p>
    </div>
    <div className="image">
        <img src="https://static.nike.com/a/images/w_1920,c_limit/77e79006-1593-4174-8aa5-bdce318eb28b/air-jordan-1-2022-lost-and-found-chicago-the-inspiration-behind-the-design.jpg" alt="" />
    </div>
  </div>
  <div className="Reason4 reason">
    <div className="text">
      <h1>Fast, Friendly, Reliable Service</h1>
      <p>We treat every customer like part of our community.</p>
    </div>
    <div className="image">
        <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/qbwkyja8nzld7algsglp/delivery-your-way.jpg" alt="" />
    </div>
  </div>
  <div className="Reason5 reason">
    <div className="text">
      <h1>Passion Behind Every Pair</h1>
      <p>We’re not just selling shoes — we’re sharing a culture we truly care about.</p>
    </div>
    <div className="image">
      <img src="https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/nike-elliot-hill-inc-1801104700_545200_k2cjot.jpg" alt="" />
    </div>
  </div>
  <div className="Reason6 reason">
    <div className="image">
      <img src="https://cdn.prod.website-files.com/64830736e7f43d491d70ef30/64bfc9fd77d242c996eaffbb_64b94840031de1aa87f775b4_kristian-egelund-wmdcUQ0CJ4c-unsplash-2.webp" alt="" />
    </div>
    <div className="text">
      <h1>Designed for Comfort & Style</h1>
      <p>Our picks focus on long-lasting comfort, everyday performance, and modern aesthetic.</p>
    </div>
  </div>
 </div>
 <Footer/>
 </div>
);
};

export default About;