import React from 'react'
import './ShopDetails.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ShopDetails = () => {
  return (
    <div>
      <Navbar/>
        <div className='shopDetails'>
            <div className="leftPart">
                <div className="smallImages">
                    <div className="image1 image">
                        <img src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png" alt="" />
                    </div>
                    <div className="image2 image">
                        <img src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png" alt="" />
                    </div>
                    <div className="image3 image">
                        <img src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png" alt="" />
                    </div>
                </div>
                <div className="bigImage">
                    <img src="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/0e1c94e7-5f7d-4a75-91c9-81d5b1d258f6/PEGASUS+PLUS.png" alt="" />
                </div>
            </div>
            <div className="rightPart">

            </div>
        </div>
      <Footer/>
    </div>
  )
}
export default ShopDetails
