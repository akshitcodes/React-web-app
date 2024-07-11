import React from 'react';
import "../styles/home.scss";
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
const home = () => {
  return (
    <>
      <div className='home' id="home" >
        <main>
          <h1>TechyStar</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>   We are your one and only solution   to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
        </div>
      </div>

      <div className="home3" id='about' >
        <div>
          <h1>Who we are?</h1>
          <div>
            <p>
              Welcome to TechyStar Software Solutions, your trusted partner for innovative technology solutions. At TechyStar, we specialize in delivering cutting-edge software services tailored to meet your business needs. Our team of experienced developers, designers, and project managers work collaboratively to provide top-notch solutions that drive growth and efficiency for your organization. Whether you're looking to develop a custom software application, enhance your existing systems, or leverage the power of artificial intelligence and data analytics, we have the expertise to turn your vision into reality. With a focus on quality, reliability, and customer satisfaction, we are committed to delivering solutions that exceed expectations. Partner with TechyStar Software Solutions today and experience the difference in technology excellence
            </p>
          </div>
        </div>
      </div>
      <div className="home4"id='brands' >
        <div id="brand-wrap" >
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s"
            }} >
              < AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s"
            }} >  <AiFillAmazonCircle />
              <p>Amazon</p></div>

            <div style={{
              animationDelay: "0.7s"
            }} >   <AiFillYoutube />
              <p>Youtube</p></div>


            <div style={{
              animationDelay: "1s"
            }} >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>


          </article>
        </div>
      </div>
    </>

  )
}

export default home;