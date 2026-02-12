import React, { useMemo, useState } from "react";
import "./ShopDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShopDetails = () => {
  // Example images (you can replace with real product images)
  const gallery = useMemo(
    () => [
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png",
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png",
    ],
    []
  );

  const [activeImg, setActiveImg] = useState(0);

  const sizes = [
    { label: "US 5", disabled: true },
    { label: "US 5.5", disabled: true },
    { label: "US 6", disabled: true },
    { label: "US 6.5", disabled: true },
    { label: "US 7", disabled: true },
    { label: "US 7.5", disabled: true },
    { label: "US 8", disabled: true },
    { label: "US 8.5", disabled: true },
    { label: "US 9", disabled: true },
    { label: "US 9.5", disabled: false },
    { label: "US 10", disabled: false },
    { label: "US 10.5", disabled: true },
    { label: "US 11", disabled: false },
    { label: "US 11.5", disabled: false },
    { label: "US 12", disabled: false },
    { label: "US 12.5", disabled: false },
    { label: "US 13", disabled: false },
  ];

  const [selectedSize, setSelectedSize] = useState(null);

  const prev = () => setActiveImg((p) => (p === 0 ? gallery.length - 1 : p - 1));
  const next = () => setActiveImg((p) => (p === gallery.length - 1 ? 0 : p + 1));

  return (
    <div>
      <Navbar />

      <div className="shopDetails">
        {/* LEFT */}
        <div className="leftPart">
          <div className="thumbs">
            {gallery.map((src, idx) => (
              <button
                key={idx}
                className={`thumb ${idx === activeImg ? "active" : ""}`}
                onClick={() => setActiveImg(idx)}
                type="button"
              >
                <img src={src} alt={`thumb-${idx}`} />
              </button>
            ))}
          </div>

          <div className="stage">
            <img src={gallery[activeImg]} alt="main product" />

            <div className="stageNav">
              <button type="button" onClick={prev} aria-label="Previous image">
                ‹
              </button>
              <button type="button" onClick={next} aria-label="Next image">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rightPart">
          <div className="productInfo">
            <h1>NikeSKIMS Rift Satin</h1>
            <h2>Women&apos;s Shoes</h2>
            <p className="price">$240</p>
          </div>

          <div className="colorSection">
            <div className="colorImages">
              <button className="colorThumb active" type="button">
                <img src={gallery[0]} alt="color 1" />
              </button>
              <button className="colorThumb" type="button">
                <img src={gallery[0]} alt="color 2" />
              </button>
            </div>
          </div>

          <div className="sizeSection">
            <div className="sizeTop">
              <h3>Select Size</h3>
              <span className="sizeGuide">Size Guide</span>
            </div>

            <div className="sizeGrid">
              {sizes.map((s) => {
                const selected = selectedSize === s.label;
                return (
                  <button
                    key={s.label}
                    className={`sizeBtn ${selected ? "selected" : ""}`}
                    disabled={s.disabled}
                    onClick={() => setSelectedSize(s.label)}
                    type="button"
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button className="addToBag" type="button" disabled={!selectedSize}>
            Add to Bag
          </button>

          {!selectedSize && <p className="hintText">Please select a size.</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopDetails;
