import React, { useState } from "react";
import "./Slide.css";
const Slide = () => {
    const slides = [
      {
        img: "https://static01.nyt.com/images/2025/09/30/multimedia/30biz-nike-jcvf/30biz-nike-jcvf-googleFourByThree.jpg",
        title: "Personalized Shoe Consultation",
        desc: "Get expert guidance to find the perfect pair tailored to your needs."
      },
      {
        img: "https://cdn.runrepeat.com/storage/gallery/product_primary/40390/nike-pegasus-41-21635997-main.jpg",
        title: "Premium Quality Footwear Selection",
        desc: "Choose from top-quality, durable, and stylish shoe collections."
      },
      {
        img: "https://parcelpath.com/wp-content/uploads/2025/04/overnight-shipping-shoes.jpeg",
        title: "Fast & Reliable Delivery",
        desc: "Enjoy quick and secure delivery straight to your door."
      },
      {
        img: "https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/4a3417c2-ad4b-4f06-b5b9-6642169e5a8b/image.png",
        title: "Easy Returns & Exchanges",
        desc: "A smooth return process if the size or style doesn’t fit perfectly."
      }
    ];
  
    const [index, setIndex] = useState(0);
  
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="ambiance-section">

        <div className="leftSide">
          <h1 className="bigTitle">Our Service</h1>
  
          <p className="slideCount">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
  
          <p className="subtitle">
            At our store, we provide more than just high-quality footwear—we deliver an exceptional experience from the moment you browse to the moment you walk away in comfort and style. Whether you're looking for trendy sneakers, durable sports shoes, or elegant casual wear, our services ensure you get the perfect pair every time.
          </p>
  
          <button class="Details">
      <span class="btn-text" before="Details">More Details</span>
    </button>
    <br />
    <br />
  
          <div className="arrows">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>
  
        {/* RIGHT SIDE SLIDER */}
        <div className="rightSide">
          <div
            className="slider"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div className="slide" key={i}>
                <img src={slide.img} alt="" />
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default Slide
