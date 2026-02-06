import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Service.css'
import {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const heading = useRef()
  return (
    <div>
      <Navbar/>
        <section className="heading">
          <h1>Our Services</h1>
          <p>At Nike, we aim to provide a smooth and reliable shopping experience. From offering authentic Nike shoes to secure ordering, fast delivery, and helpful customer support, our services are designed to make your purchase easy and enjoyable.</p>
        </section>
        <section className="sectionOne">
          <div className="leftPart">
              <img src="https://media.bizj.us/view/img/12832624/r72892*1200xx4631-4640-1138-0.jpg" alt="" />
          </div>
          <div className="rightPart">
              <h1>Product Sales</h1>
              <h2>Authentic Nike Footwear Sales</h2>
              <p>We provide a wide selection of genuine Nike shoes for men, women, and kids, including lifestyle sneakers, running shoes, and sports footwear.</p>
          </div>
        </section>
        <section className="sectionTwo">
          <div className="leftPart">
              <h1>Online Ordering</h1>
              <h2>Easy Online Shopping</h2>
              <p>Customers can browse products, choose sizes and colors, and place orders quickly through our secure website.</p>
          </div>
          <div className="rightPart">
              <img src="https://assets.footlocker.com/is/image/FLDM/260202-fl-recezCjpJpAnH9SCD-valentines-day-gifting-secondary-2up?fmt=webp-alpha&bfc=on" alt="" />
          </div>
        </section>
        <section className="sectionThree">
           <div className="leftPart">
              <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/55450252-7721-4167-8933-9ec42bc4e798/pick-up-point-delivery.jpg" alt="" />
          </div>
          <div className="rightPart">
              <h1>Delivery Service</h1>
              <h2>Fast & Reliable Delivery</h2>
              <p>We offer quick nationwide delivery with safe packaging to ensure your shoes arrive in perfect condition.</p>
          </div>
        </section>
        <section className="sectionFour">
             <div className="leftPart">
              <h1>Exchange & Return Service</h1>
              <h2>Hassle-Free Returns & Exchanges</h2>
              <p>If the size or style doesn’t fit, customers can request an exchange or return within a specified period.</p>
          </div>
          <div className="rightPart">
              <img src="https://static.nike.com/a/images/f_auto/55f84628-0f12-44f3-9b95-578f75176367/image.jpeg" alt="" />
          </div>
        </section>
        <section className="sectionFive">
           <div className="leftPart">
              <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/c52cfd20-7e0f-4f1a-91af-c06f0c60022a/ask-our-store-athletes.jpg" alt="" />
          </div>
          <div className="rightPart">
              <h1>Customer Support</h1>
              <h2>24/7 Customer Assistance</h2>
              <p>Our support team is always ready to help with product questions, order tracking, and after-sales service.</p>
          </div>
        </section>
        <section className="sectionSix">
               <div className="leftPart">
              <h1>Promotions & Discounts</h1>
              <h2>Seasonal Deals & Special Offers</h2>
              <p>Enjoy exclusive promotions, discounts, and bundle deals throughout the year.</p>
          </div>
          <div className="rightPart">
              <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/52de4e09-977f-446b-97bd-b11b3bd95b75/official-nike-promo-discount-codes.png" alt="" />
          </div>
        </section>
        <section className="sectionSeven">
          <h1>With a strong focus on quality, convenience, and customer satisfaction, Nike is here to be your trusted destination for premium footwear. We’re committed to delivering the best products and services every time you shop with us.</h1>
        </section>
        
      <Footer/>
    </div>
  )
}

export default Service
