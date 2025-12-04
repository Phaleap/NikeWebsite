import React from 'react'
import Navbar from '../components/Navbar'
import '../pages/Shop.css'
import { MdDiscount } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { TbChristmasTreeFilled } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoHappyOutline } from "react-icons/io5";
import { IoPricetag } from "react-icons/io5";
import Footer from '../components/Footer';

const Shop = () => {
  const shoes = [
    {
      id : 1,
      name: "Shoe man 1",
      price: "$120.0",
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png",
      hoverImage: "https://www.taskers-sports.co.uk/cdn/shop/files/AURORA_FQ7262-402_PHSLH000-2000.jpg?v=1753806066"
    },
    {
      id: 2,
      name: "Shoe man 2",
      price: "$130.0",
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0bd7e3c7-2680-444b-8ba3-3a6cff7b39ae/custom-nike-air-max-90-shoes-by-you.png",
      hoverImage: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/30048642/2024/6/26/78498505-353b-4b50-8c2b-9a04d2e4325e1719396528529NikeAirMax90PremiumMensShoes1.jpg"
    },
    {
      id: 3,
      name: "Shoe man 3",
      price: "$140.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/cad4e1d7-12ca-4c36-8671-7e5b47642175/COURT+SHOT.png",
      hoverImage: "https://static.nike.com/a/images/t_default/109700c8-a576-42b6-8355-96f4b631c318/COURT+SHOT.png"
    },
    {
      id: 4,
      name: "Shoe man 4",
      price: "$150.0",
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/ea08d51f-4841-403c-bbc3-fc256164d05b/NIKE+MOTIVA.png",
      hoverImage: "https://en-kw.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw50fa7498/sss/SSS2/N/K/F/D/6/SSS2_NKFD6033_001_197597074559_2.jpg?sw=700&sh=700&sm=fit"
    },
    {
      id: 5,
      name:"Shoe man 5",
      price: "$160.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/ac6672b0-33da-49ad-9a6f-412ae3987bcc/NIKE+DOWNSHIFTER+13.png",
      hoverImage: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/29971984/2024/6/15/c0ac7fa8-4733-4dee-8a63-235984cc9c5a1718445124596NikeDownshifter13MensRoadRunningShoes1.jpg"
    },
    {
      id: 6,
      name: "Shoe man 6",
      price: "$170.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/b032abc3-ec58-4857-a216-81b36a9f8fdd/NIKE+FLEX+CONTROL+TR4.png",
      hoverImage: "https://bboys.pe/cdn/shop/products/81091421_1.jpg?v=1753376296"
    },
    {
      id: 7,
      name: "Shoe man 7",
      price: "$180.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/lx0owmisj943sr59emb8/AIR+MAX+PLUS.png",
      hoverImage: "https://nikeclprod.vtexassets.com/arquivos/ids/1402479-800-800?v=638888883326300000&width=800&height=800&aspect=true"
    }
    ,
    {
      id: 8,
      name: "Shoe man 8",
      price: "$190.0",
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/012a91ce-8601-44df-bc76-e98718a414b3/NIKE+SHOX+RIDE+2.png",
      hoverImage:"https://i.ebayimg.com/00/s/MTYwMFgxMjgw/z/nYIAAeSwQAVov4pM/$_57.PNG?set_id=880000500F"
    } 
  ]
  const womenShoes = [
    {
      id : 1,
      name: "Shoe woman 1",
      price: "$120.0",
      image: "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw03891343/nk/dd6/d/5/7/6/1/dd6d5761_390f_43bc_906e_933f6ca8d673.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
      hoverImage: "https://5thave-img-cdn.beyondstyle.us/pf/d62dd18a-ee2b-3386-9b75-2a72abdfa3ac.jpg?x-oss-process=style/s1"
    },
    {
      id: 2,
      name: "Shoe woman 2",
      price: "$130.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/1e2ce8a9-1452-455c-b637-beca735ab9ac/W+NIKE+DUNK+LOW+NEXT+NATURE.png",
      hoverImage: "https://img01.ztat.net/article/spp-media-p1/ad61e8abba224c3ba1c035a59c75e3c1/9bcacca1314e4098866547f12b1799cb.jpg?imwidth=762&filter=packshot"
    },
    {
      id: 3,
      name: "Shoe woman 3",
      price: "$140.0",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c9831eca-95c2-41ad-84cf-294e337a82dd/NIKE+AIR+MAX+270+%28GS%29.png",
      hoverImage: "https://http2.mlstatic.com/D_NQ_NP_959878-MLM73282834429_122023-O-tenis-para-mujer-nike-air-max-270-rosas.webp"
    },
    {
      id: 4,
      name: "Shoe woman 4",
      price: "$150.0",
      image: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwe81d8420/nk/d8a/f/f/8/2/b/d8aff82b_b08f_490e_aff1_840b6f462986.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
      hoverImage: "https://m.media-amazon.com/images/I/61O5ZlWvMXL._AC_UY900_.jpg"
    },
    {
      id: 5,
      name:"Shoe woman 5",
      price: "$160.0",
      image: "https://trilogymerchph.com/cdn/shop/files/GS-WOMENS-NIKE-REVOLUTION-7-WHITE-PLAYFUL-PINK-MIDNIGHT-NAVY-FB7689-103-1_1728x.png?v=1731311263",
      hoverImage: "https://i.ebayimg.com/images/g/ytQAAOSwmMBnq0wQ/s-l1200.jpg"
    },
    {
      id: 6,
      name:"Shoe woman 6",
      price: "$160.0",
      image: "https://images.prodirectsport.com/ProductImages/Gallery_1/1014123_Gallery_1_1742289.jpg",
      hoverImage: "https://i.ebayimg.com/images/g/jtcAAOSwI-JnYDhU/s-l400.jpg"
    },
    
    {
      id: 7,
      name:"Shoe woman 7",
      price: "$160.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/6bb96889-1319-49e3-a1e8-0e199ad3fa29/W+NIKE+PROMINA.png",
      hoverImage: "https://contents.mediadecathlon.com/m16572470/sq/k$241bd3252eef9d1bde9f938e7fedd14f/nike-womens-zoom-fly-4-running-shoes-sneakers-black-white-off-noir-anthracite-nike-234d85b8-9e7b-4e86-ad15-6733c70bb655.jpg?f=480x480&format=auto"
    },
    
    {
      id: 8,
      name:"Shoe woman 8",
      price: "$160.0",
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/b88ead60-d44e-48ca-843a-717a85543332/W+NIKE+PACIFIC.png",
      hoverImage: "https://www.snkrroom.com/cdn/shop/files/IMG_3575-2_800x.jpg?v=1755198347"
    },
  ]
    const kidShoes = [
    {
      id : 1,
      name: "Kid woman 1",
      price: "$120.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/173e4e0b-beb9-4ba0-8a8f-da5263721150/NIKE+DUNK+LOW+GS.png",
      hoverImage: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw21087ba9/nk/462/a/b/c/4/8/462abc48_c13f_4efb_917b_4c0d5ef97a55.jpg?sw=2000&sh=2000&sm=fit"
    },
    {
      id: 2,
      name: "Kid woman 2",
      price: "$130.0",
      image: "https://static.nike.com/a/images/c_limit,w_800,f_auto/t_product_v1/31f866df-dc1b-4e6d-83c3-aef5601f40a2/image.jpg",
      hoverImage: "https://images.prodirectsport.com/ProductImages/Main/1004075_Main_1705613.jpg"
    },
    {
      id: 3,
      name: "Kid woman 3",
      price: "$140.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/426b92b4-2308-47df-b7d7-b8b3f42037a4/NIKE+REVOLUTION+7+%28PSV%29.png",
      hoverImage: "https://intersport.com.au/cdn/shop/files/AURORA_HM4400-001_PHCFH001-2000_1200x1200.jpg?v=1752621096"
    },
    {
      id: 4,
      name: "Kid woman 4",
      price: "$150.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/wbatnncdieqtbsfar8mr/NIKE+AIR+MAX+PLUS+%28PS%29.png",
      hoverImage: "https://i.ebayimg.com/images/g/An4AAOSwRdJndpvJ/s-l1200.jpg"
    },
    {
      id: 5,
      name:"Kid woman 5",
      price: "$160.0",
      image: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw43e4e8a7/nk/745/1/1/5/d/b/745115db_9553_4d78_911c_3ab3ac66e5f9.jpg?sw=2000&sh=2000&sm=fit",
      hoverImage: "https://www.famousfootwear.com/blob/product-images/20000/41/55/6/41556_pair_feed1000.jpg"
    },
    {
      id: 6,
      name:"Kid woman 6",
      price: "$160.0",
      image: "https://www.side-step.co.za/media/catalog/product/cache/ead79d362eadd98297170252f181cb50/n/k/nkk2961kr-nike-court-borough-low-recraft-red-black-dv5457-600-v-1_jpg.jpg",
      hoverImage: "https://media.centrepointstores.com/i/centrepoint/NKDV5456-600-NKDV5456CP25012025_03-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$"
    },
    
    {
      id: 7,
      name:"Kid woman 7",
      price: "$160.0",
      image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/fbfedb9f-cfe3-4b14-9129-1cf36873ae8a/NIKE+AIR+MAX+NOVA+%28GS%29.png",
      hoverImage: "https://img01.ztat.net/article/spp-media-p1/a6f7d34d029c47e3a619c1b377b93a81/2beb340a83b64609a3e78616f6e3b663.jpg?imwidth=400"
    },
    
    {
      id: 8,
      name:"Kid woman 8",
      price: "$160.0",
      image: "https://static.nike.com/a/images/t_default/455676de-7a59-4d1d-b733-c430aefd691b/NIKE+REVOLUTION+6+NN+%28PSV%29.png",
      hoverImage: "https://frontrunnertimaru.co.nz/cdn/shop/products/WebsiteImages_29_d5b48727-7a30-4ee4-8119-b12caa8c8721.png?v=1672358908"
    },
  ]

  const menSliderRef = React.useRef(null);
const womenSliderRef = React.useRef(null);
const kidSliderRef = React.useRef(null);


  return (
    <div>
      <Navbar/>
      <div className="section11">
        <div className="content">
            <h1>Men's New In</h1>
        <p>The ultimate status symbol. From the essential Air Force 1 to the latest Air Max, these shoes combine decades of heritage with modern design, delivering timeless style and everyday comfort defined by the iconic Swoosh.</p>
        </div>
      </div>
        <div className="scroll-wrapper">
  <div className="scroll">
    <div className="inner">
  <div className="t1 text">
    <p>Unleash your speed — Nike runners now up to 30% OFF.  <MdDiscount /></p>
  </div>

  <div className="t2 text">
    <p>The latest Nike drops are here. Move fast before they’re gone. <FaCartArrowDown /></p>
  </div>

  <div className="t3 text">
    <p>Level up your game — select Nike sneakers on special offer today. <TbChristmasTreeFilled /></p>
  </div>

  <div className="t4 text">
    <p>Lightweight. Responsive. Iconic. Shop Nike performance shoes. <AiOutlineThunderbolt /></p>
  </div>

  <div className="t5 text">
    <p>Push your limits — Nike classics now with exclusive discounts. <IoHappyOutline /></p>
  </div>
     <div className="t1 text">
    <p>Unleash your speed — Nike runners now up to 30% OFF. <MdDiscount /></p>
  </div>

  <div className="t2 text">
    <p>The latest Nike drops are here. Move fast before they’re gone. <FaCartArrowDown /></p>
  </div>

  <div className="t3 text">
    <p>Level up your game — select Nike sneakers on special offer today. <TbChristmasTreeFilled /></p>
  </div>

  <div className="t4 text">
    <p>Lightweight. Responsive. Iconic. Shop Nike performance shoes. <AiOutlineThunderbolt /></p>
  </div>

  <div className="t5 text">
    <p>Push your limits — Nike classics now with exclusive discounts. <IoHappyOutline /></p>
  </div>
    </div>
  </div>
</div>
      <div className="smallContainer">
    <div className="articleHeader">
            <h1>New Arrivals Picks</h1>
        </div>
        <div className="arrows">
            <button className="arrow left"
  onClick={() => (menSliderRef.current.scrollLeft -= 350)}
>←</button>
            <button className="arrow right"
  onClick={() => (menSliderRef.current.scrollLeft += 350)}
>→</button>
          </div>
</div>         
      <div className="section12">
        <div className="slider" ref={menSliderRef}>

        {shoes.map((shoe, index) => (
          <div className={`shoe-card card${index + 1}`} key={shoe.id}>
            <div className="imageContain">
              <img src={shoe.image} alt={shoe.name} className="shoe-image default" />
              <img src={shoe.hoverImage} alt={shoe.name} className="shoe-image hover" />
            </div>
            <div className="textForCard">
              <div className="above">
                <p>{shoe.name}</p>
                <IoPricetag />
              </div>
              <div className="below">
                <p>{shoe.price}</p>
                <button className="Details">
      <span className="btn-text" before="Interesting">More Details</span>
    </button>
              </div>
            </div>
          </div>
        ))}  
    </div>
      </div>
      <div className="section13">
        <div className="content">
            <h1>Women's New In</h1>
        <p>Effortless style for every day. From classic rotations to modern favorites, these women’s Nike shoes blend heritage design with lightweight comfort, delivering a fresh look powered by the iconic Swoosh.</p>
        </div>
      </div>
              <div className="scroll-wrapper">
  <div className="scroll">
    <div className="inner">
  <div className="t1 text">
    <p>Unleash your speed — Nike runners now up to 30% OFF.  <MdDiscount /></p>
  </div>

  <div className="t2 text">
    <p>The latest Nike drops are here. Move fast before they’re gone. <FaCartArrowDown /></p>
  </div>

  <div className="t3 text">
    <p>Level up your game — select Nike sneakers on special offer today. <TbChristmasTreeFilled /></p>
  </div>

  <div className="t4 text">
    <p>Lightweight. Responsive. Iconic. Shop Nike performance shoes. <AiOutlineThunderbolt /></p>
  </div>

  <div className="t5 text">
    <p>Push your limits — Nike classics now with exclusive discounts. <IoHappyOutline /></p>
  </div>
     <div className="t1 text">
    <p>Unleash your speed — Nike runners now up to 30% OFF. <MdDiscount /></p>
  </div>

  <div className="t2 text">
    <p>The latest Nike drops are here. Move fast before they’re gone. <FaCartArrowDown /></p>
  </div>

  <div className="t3 text">
    <p>Level up your game — select Nike sneakers on special offer today. <TbChristmasTreeFilled /></p>
  </div>

  <div className="t4 text">
    <p>Lightweight. Responsive. Iconic. Shop Nike performance shoes. <AiOutlineThunderbolt /></p>
  </div>

  <div className="t5 text">
    <p>Push your limits — Nike classics now with exclusive discounts. <IoHappyOutline /></p>
  </div>
    </div>
  </div>
</div>
      <div className="smallContainer">
    <div className="articleHeader">
            <h1>New Arrivals Picks</h1>
        </div>
        <div className="arrows">
            <button className="arrow left"
  onClick={() => (womenSliderRef.current.scrollLeft -= 350)}
>←</button>
            <button className="arrow right"
  onClick={() => (womenSliderRef.current.scrollLeft += 350)}
>→</button>
          </div>
</div>
<div className="section14">
         <div className="slider" ref={womenSliderRef}>

        {womenShoes.map((wshoe, index) => (
          <div className={`shoe-card card${index + 1}`} key={wshoe.id}>
            <div className="imageContain">
              <img src={wshoe.image} alt={wshoe.name} className="shoe-image default" />
              <img src={wshoe.hoverImage} alt={wshoe.name} className="shoe-image hover" />
            </div>
            <div className="textForCard">
              <div className="above">
                <p>{wshoe.name}</p>
                <IoPricetag />
              </div>
              <div className="below">
                <p>{wshoe.price}</p>
                <button className="Details">
      <span className="btn-text" before="Interesting">More Details</span>
    </button>
              </div>
            </div>
          </div>
        ))}  
    </div>
</div>
<div className="section15">
        <div className="content">
            <h1>Kid's New In</h1>
        <p>Built for play and everyday comfort, these kids’ Nike shoes deliver lightweight support, durable cushioning, and sporty style—perfect for school, adventure, and everything in between.</p>
        </div>
      </div>
        <div className="scroll-wrapper">
  <div className="scroll">
    <div className="inner">
  <div className="t1 text">
    <p>Unleash your speed — Nike runners now up to 30% OFF.  <MdDiscount /></p>
  </div>

  <div className="t2 text">
    <p>The latest Nike drops are here. Move fast before they’re gone. <FaCartArrowDown /></p>
  </div>

  <div className="t3 text">
    <p>Level up your game — select Nike sneakers on special offer today. <TbChristmasTreeFilled /></p>
  </div>

  <div className="t4 text">
    <p>Lightweight. Responsive. Iconic. Shop Nike performance shoes. <AiOutlineThunderbolt /></p>
  </div>

  <div className="t5 text">
    <p>Push your limits — Nike classics now with exclusive discounts. <IoHappyOutline /></p>
  </div>
     <div className="t1 text">
    <p>Unleash your speed — Nike runners now up to 30% OFF. <MdDiscount /></p>
  </div>

  <div className="t2 text">
    <p>The latest Nike drops are here. Move fast before they’re gone. <FaCartArrowDown /></p>
  </div>

  <div className="t3 text">
    <p>Level up your game — select Nike sneakers on special offer today. <TbChristmasTreeFilled /></p>
  </div>

  <div className="t4 text">
    <p>Lightweight. Responsive. Iconic. Shop Nike performance shoes. <AiOutlineThunderbolt /></p>
  </div>

  <div className="t5 text">
    <p>Push your limits — Nike classics now with exclusive discounts. <IoHappyOutline /></p>
  </div>
    </div>
  </div>
</div>
            <div className="smallContainer">
    <div className="articleHeader">
            <h1>New Arrivals Picks</h1>
        </div>
        <div className="arrows">
            <button className="arrow left"
  onClick={() => (kidSliderRef.current.scrollLeft -= 350)}
>←</button>
            <button className="arrow right"
  onClick={() => (kidSliderRef.current.scrollLeft += 350)}
>→</button>
          </div>
</div>
<div className="section16">
         <div className="slider" ref={kidSliderRef}>

        {kidShoes.map((kshoe, index) => (
          <div className={`shoe-card card${index + 1}`} key={kshoe.id}>
            <div className="imageContain">
              <img src={kshoe.image} alt={kshoe.name} className="shoe-image default" />
              <img src={kshoe.hoverImage} alt={kshoe.name} className="shoe-image hover" />
            </div>
            <div className="textForCard">
              <div className="above">
                <p>{kshoe.name}</p>
                <IoPricetag />
              </div>
              <div className="below">
                <p>{kshoe.price}</p>
                <button className="Details">
      <span className="btn-text" before="Interesting">More Details</span>
    </button>
              </div>
            </div>
          </div>
        ))}  
    </div>
</div>

<Footer/>
    </div>
  )
}

export default Shop
