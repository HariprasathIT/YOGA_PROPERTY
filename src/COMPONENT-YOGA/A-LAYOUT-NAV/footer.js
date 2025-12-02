import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { RealEstateImage } from '../../RealEstateImage';  


const Footer = () => {  
   const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
   const isInView1 = useInView(ref1, { triggerOnce: false });
  const isInView2 = useInView(ref2, { triggerOnce: false });
  const isInView3 = useInView(ref3, { triggerOnce: false });
  const isInView4 = useInView(ref4, { triggerOnce: false });
  return (
    <>
      <section
        className="container-fluid footer-yoga"
        style={{ background: 'rgba(237, 114, 53, 0.15)' }}
      >
        <div className="col-12" style={{ padding: '60px 0px 10px 0px' }}>
          <div className="row">
            <div
              ref={ref1}
              className="col-lg-3 footer-logo-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* <RealEstateImage
                src={'/IMAGE/OMSAKTHI-2.webp'}
                className="img-fluid"
                style={{ height: '170px' }}
              /> */}
              <Link to="/">
                <img
                  src={'/IMAGE/OMSAKTHI-2.webp'}
                  alt="Logo"
                  className="navbar-logo me-4"
                />
            </Link>
            </div>

            <div
              ref={ref2}
              className="col-lg-2 footer-corp-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h3> ADDRESS</h3>
              <p className="mt-3">
                #7/7 Mettupalayam main road,
                <br />
                Opposite vinayagar temple,
                <br />
                Narasimhanaickenpalayam,
                <br />
                Coimbatore - 641031.
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                yogaproperty@gmail.com
              </p>
              <button
                type="button"
                className="btn btn-outline-warning yoga-footer-call-btn mt-3"
              >
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                7708871117
              </button>
            </div>

            <div
              ref={ref3}
              className="col-lg-2 footer-navi-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3>NAVIGATION</h3>
              <p className="mt-3">ABOUT US</p>
              <p>PROJECTS</p>
              <p>TERMS & CONDITIONS</p>
              <p>CONTACT US</p>
            </div>

            <div
              ref={ref4}
              className="col-lg-2 footer-followus-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h3>FOLLOW US</h3>
              <div className="d-flex mt-3">
                <a
                  href="https://www.facebook.com/yogaproperties?mibextid=LQQJ4d"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/yogaproperty?igsh=dTdwcHcyajdvN3Uy&utm_source=qr"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://x.com/yogaproperties?t=9Abub8p_j71w2wfz3nWBZw&s=09"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yoga-property-154718283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://youtube.com/@yogaproperty?si=aunGV5pthlI1Kq5V"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="mailto:yogaproperty81@gmail.com"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href="https://wa.me/7708871117"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>

            <div
              ref={ref1}
              className="col-lg-3 footer-logo-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* <RealEstateImage
                src={'/IMAGE/YOGALOGO-1.webp'}
                className="img-fluid"
                style={{ height: '170px' }}
              /> */}
              <Link to="/">
                 <img
                   src={'/IMAGE/YOGALOGO-1.webp'}
                   alt="Logo"
                   className="navbar-logo me-4"
                 />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Footer;