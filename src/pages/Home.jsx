import React, { useRef, useLayoutEffect } from "react";
// All other imports remain here
import Navbar from "../components/Navbar";
import "./Home.css";
import shoeVideo from "../assets/Nike.mp4";
import { PiMedalLight } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoCloudOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import Slide from "./Slide";
import AutoSlide from "../components/AutoSlide";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const navbarRef = useRef(null);
    // 1. Initialize the ref
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.to(".section1 img", {
                y: -500,
              rotate: 180,
                scrollTrigger: {
                    trigger: ".section1",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            gsap.to(".section1 .card", {
                y: "-=700",
                scrollTrigger: {
                    trigger: ".section1",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            gsap.to(".section1 .image", {
                y: "-=200",
                scrollTrigger: {
                    trigger: ".section1",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            gsap.to(".section2 .imgContainer img", {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section2",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            gsap.to(".section3 .imgContainer img", {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section3",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });
            gsap.from(".section2 .sellingCards", {
              x: 400,
              scrollTrigger: {
                    trigger: ".section2",
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                }
            });
            gsap.from(".section3 .sellingCards", {
              x: -400,
              scrollTrigger: {
                    trigger: ".section3",
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                }
            });
            gsap.from(".section4 .sectionHeader", {
              color: "white",
              opacity: 0,
              scrollTrigger: {
                trigger: ".section4",
                start: "top bottom",
                end: "center center",
                scrub: 1,
              }
            })
            gsap.to(".section9 .containImage img", {
              yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section9",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            })
            gsap.to(".section9 .left img", {
              y: -500,
              rotateX: "30deg",
              rotate: 180,
                scrollTrigger: {
                    trigger: ".section9",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            })
            gsap.to(".section9 .right img", {
              y: -500,
              rotateX: "30deg",
              rotate: -180,
                scrollTrigger: {
                    trigger: ".section9",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });
gsap.to(navbarRef.current, {
    backgroundColor: "rgba(0, 0, 0, 0.9)", 
    ease: "none",
    scrollTrigger: {
        trigger: ".section1",
        start: "top bottom",
        end: "center center",
        scrub: 1,
    }
});


gsap.to(navbarRef.current.querySelectorAll("a"), {
    color: "black", 
    ease: "none",
    scrollTrigger: {
        trigger: ".section1",
        start: "top bottom",
        end: "center center",
        scrub: 1,
    }
});


        }, sectionRef);
        return () => ctx.revert();
    }, []);
  
  return (
    <div ref={sectionRef}>
      <header>
        <Navbar ref={navbarRef} />
        <div className="hero">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          >
            <source src={shoeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Hero Content */}
          <div className="hero-content">
            <h1>Step Into Style and Comfort</h1>
            <p>
              Discover shoes crafted for every step — where modern design meets lasting comfort. 
              From everyday wear to statement styles, walk with confidence wherever you go.
            </p>
          </div>
  
        </div>
      </header>
<div className="section1" ref={sectionRef}>
        <div className="text">
          <h1>MODERN, SMOOTH, NEW</h1>
          <div className="description">
            <p>Every step starts with innovation. Our shoes are crafted to deliver energy return, flexibility, and superior comfort...</p>
            <span>Shoes.</span>
          </div>
        </div>

        <div className="imagePart">
          <div className="cardContainer1">
            <img 
              className="float-img"
              style={{width: "auto", height: "450px", transform: "translateY(1200px) translateX(100px) rotate(30deg)", zIndex: 2000}} 
              src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png" 
              alt="" 
            />
            <div className="card card1">
              <PiMedalLight className="icon" />
              <h1>Performance You Can Feel</h1>
              <p>Inspired by motion, every detail is made to support your body’s natural rhythm...</p>
            </div>
            <div className="card card2">
              <AiOutlineThunderbolt className="icon" />
              <h1>Designed for Movement</h1>
              <p>Crafted with innovation in every stitch, our shoes adapt to your rhythm...</p>
            </div>
          </div>

          <div className="image">

          </div>

          <div className="cardContainer2">
            <div className="card card3">
              <IoCloudOutline className="icon" />
              <h1>Breathable. Durable. Effortless.</h1>
              <p>Crafted from lightweight, high-performance fabrics...</p>
            </div>
            <div className="card card4">
              <SiNike className="icon" />
              <h1>Confidence in Every Step</h1>
              <p>More than just shoes — they’re a statement of who you are...</p>
            </div>
            <img 
               className="float-img"
               style={{width: "auto", height: "300px", transform:"translateX(100px) translateY(-100px)"}} 
               src="https://wallpapers.com/images/hd/nike-running-shoe-white-blue-red-plwsxleqzmrlnvmy.jpg" 
               alt="" 
            />
          </div>
        </div>
      </div>
        <div className="header">
            <h1>Explore</h1>
            <h2>PURE FANCY</h2>
          </div>
        <div className="section2">
          <div className="leftSide">
            <div className="imgContainer">
              <img style={{borderRadius: "10px"}} src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/64265cce-0cfc-4309-aa45-33835124eeaa/the-best-nike-high-top-sneakers-you-can-buy-right-now-articles-ogc.jpg" alt="" />
            </div>
          </div>
          <div className="rightSide">
              <div className="heading">
                <h1>PURE</h1>
                <div className="smallContainer">
                <h2>DREAM</h2>
                <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Explore More</span>
</button>
                </div>
              </div>
              <div className="sellingCards">
                <div className="sCard1">
                  <div className="image">
                    
                  </div>
                  <div className="text">
                    <p>$12.99</p>
                    <p>Nike</p>
                  </div>
                </div>
                <div className="sCard2">
                  <div className="image">
                    
                  </div>
                  <div className="text">
                    <p>$12.99</p>
                    <p>Nike</p>
                  </div>
                </div>
              </div>
              <div className="footerDes">
                <p>Own every step — Nike shoes fuse style, comfort, and performance so you can rise above ordinary.</p>
              </div>
              
          </div>
        </div>
        <div className="section3">
          <div className="leftSide">
              <div className="heading">
                <h1>BEST</h1>
                <div className="smallContainer">
                <h2>PRODUCT</h2>
                 <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Explore More</span>
</button>
                </div>
              </div>
              <div className="sellingCards">
                <div className="sCard1">
                  <div className="image">
                    
                  </div>
                  <div className="text">
                    <p>$12.99</p>
                    <p>Nike</p>
                  </div>
                </div>
                <div className="sCard2">
                  <div className="image">
                    
                  </div>
                  <div className="text">
                    <p>$12.99</p>
                    <p>Nike</p>
                  </div>
                </div>
              </div>
              <div className="footerDes">
                <p>Step into power — Nike shoes built to move with you, built to make you unstoppable.</p>
              </div>
          </div>
          <div className="rightSide">
            <div className="imgContainer">
              <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/3dcd6df2-54bd-4898-9fb5-620de3e27a2d/the-best-winter-workout-clothes-by-nike.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="sectionHeader">
            <h1>PURE</h1>
            <h1>PERFORMANCE.</h1>
            <h1 style={{fontStyle:"italic"}}>FEEL</h1>
            <h1>THE FUTURE.</h1>
            <div className="box">Trust</div>
          </div>
          <Slide/>
        </div>
        <div className="section5">
          <AutoSlide/>
        </div>
        <div className="section6">
          <div className="leftSide">
            <img src="https://images.squarespace-cdn.com/content/v1/5ed6e10fb011a123217ba702/1727139534806-K219WNSVFLFTG6QOO2I3/unsplash-image-164_6wVEHfI.jpg" alt="" />
            <div className="box">QUALITY</div>
            <h1>Only proven technology — performance over everything.
It’s about what we don’t add.</h1>
            <p>No gimmicks, no noise — just pure innovation that works.
Engineered with precision, built without shortcuts,
and crafted free of anything that slows you down.</p>
          </div>
          <div className="rightSide">
            <div className="textContainer">
            <h1>EXCITING DROPS <span>await</span></h1>
            <p>Shop now for a chance to score exclusive Nike releases.
Grab the drop before it’s gone.</p>
<br />
<button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">READ MORE</span>
</button>
</div>
          </div>
        </div>
        
        <div className="MainHeading">
          <h1>NEW IN</h1>
        </div>

        <div className="section8">
          <div className="leftSide">
            <div className="abovePart">
              <h1>Choose your interest</h1>
              <p>High-performance footwear, training essentials, and elevating your everyday movement.</p>
          </div>
          <div className="beneathPart">
            <div className="card card1">
              <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/2eca5656-fc3c-4adc-894e-60febb7956c6/pdp.jpg" alt="" />
              <p>Nike men’s shoes deliver strong support, breathable comfort, and athletic style for workouts or daily wear.</p>
              <br />
              <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">VIEW MEN</span>
</button>
            </div>
            <div className="card card2">
              <img src="https://todaysparent.mblycdn.com/tp/resized/2024/06/1600x1200/The-Best-Nike-Shoes-for-Kids-2024.png" alt="" />
              <p>Nike kids’ shoes are lightweight, comfy, and durable—perfect for running, playing, and everyday adventures.</p>
              <br />
              <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">VIEW KID</span>
</button>
            </div>
            </div>
          </div>
          <div className="rightImage">
            <img src="https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/68192/326874/NIK23042_1000_14__51820.1712052990.jpg" alt="" />
            <p>Nike women’s shoes offer a light, comfortable fit with stylish designs for training or everyday use.</p>
            <br />
            <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">VIEW WOMEN</span>
</button>
          </div>
        </div>
        <div className="section9">
          <div className="left small">
            <img src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/44f222ab-96b6-43b9-82e7-9a1bd888611d/NIKE+COURT+VISION+LO.png" alt="" />
          </div>
          <div className="center">
            <h1>CONTACT WITH US</h1>
            <div className="containImage">
            <img src="https://img01.ztat.net/article/spp-media-p1/fddac1c15d984374b27c706062fbbe08/0bf5cffb23a64a61a053452db919f669.jpg?imwidth=1800" alt="" />
            </div>
            <button class="Details">
      <span class="btn-text" before="Details">CONTACT US</span>
    </button>
          </div>
          <div className="right small">
            <img src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/01f63791-c733-4e2b-9df5-7cab44dba920/M+NIKE+COURT+LITE+4.png" alt="" />
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home
