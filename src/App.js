import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import YogahomeLanding from "./COMPONENT-YOGA/B-LAYOUT-HOME/home";
import LoadingScreen from "./LoadingScreen";
import Layout from "./COMPONENT-YOGA/A-LAYOUT-NAV/nav";
import BlogPage1 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage1";
import BlogPage2 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage2";
import BlogPage3 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage3";
import BlogPage4 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage4";
import BlogPage5 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage5";
import BlogPage6 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage6";
import BlogPage7 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage7";
import BlogPage8 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage8";
import Footer from "./COMPONENT-YOGA/A-LAYOUT-NAV/footer";
import { HelmetProvider } from "react-helmet-async";
import OneSignalInit from "./OneSignalInit";
import BlogPage9 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage9";
import BlogPage10 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage10";
import BlogPage11 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage11";
import BlogPage12 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage12";
import BlogPage13 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage13";
import BlogPage14 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage14";
import BlogPage15 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage15";
import BlogPage16 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage16";
import BlogPage17 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage17";
import BlogPage18 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage18";
import BlogPage19 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage19";
import BlogPage20 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage20";
import BlogPage21 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage21";
import BlogPage22 from "./COMPONENT-YOGA/C-BLOG-DETAILS/BlogPage22";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      {/* <OneSignalInit /> */}
      <HelmetProvider>
        <Router>

          <Layout />
          <Routes>
            <Route path="/" element={<YogahomeLanding />} />
            <Route path="/blogs/why-real-estate-investment" element={<BlogPage1 />} />
            <Route path="/blogs/property-buying-guide" element={<BlogPage2 />} />
            <Route path="/blogs/top-real-estate-tips" element={<BlogPage3 />} />
            <Route path="/blogs/investment-strategies" element={<BlogPage4 />} />
            <Route path="/blogs/real-estate-financing" element={<BlogPage5 />} />
            <Route path="/blogs/smart-homes-ai-iot-real-estate-investments" element={<BlogPage6 />} />
            <Route path="/blogs/smart-homes-ai-iot-blockchain-fractional-real-estate" element={<BlogPage7 />} />
            <Route path="/blogs/blockchain-property-transactions-land-records" element={<BlogPage8 />} />
            <Route path="/blogs/choose-perfect-location-for-your-dream-home-in-coimbatore" element={<BlogPage9 />} />
            <Route path="/blogs/from-land-to-home-complete-guide-building-with-yoga-property" element={<BlogPage10 />} />
            <Route path="/blogs/Affordable-construction-solutions-dream-villa-coimbatore" element={<BlogPage11 />} />
            <Route path="/blogs/eco-friendly-construction-ideas-modern-living-coimbatore" element={<BlogPage12 />} />
            <Route path="/blogs/top-mistakes-to-avoid-during-home-construction-coimbatore" element={<BlogPage13 />} />
            <Route path="/blogs/best-real-estate-developers-in-coimbatore-for-wellness" element={<BlogPage14 />} />
            <Route path="/blogs/real-estate-brokers-in-coimbatore-wellness-homes" element={<BlogPage15 />} />
            <Route path="/blogs/real-estate-trends-in-saravanampatti-coimbatore" element={<BlogPage16 />} />
            <Route path="/blogs/sri-selvanayaki-avenue-plots-and-customized-houses-for-sale-title" element={<BlogPage17 />} />
            <Route path="/blogs/investing-in-coimbatore-dtcp-approved-plots" element={<BlogPage18 />} />
            <Route path="/blogs/apartments-for-sale-in-coimbatore" element={<BlogPage19 />} />
            <Route path="/blogs/find-trusted-real-estate-agents-in-coimbatore" element={<BlogPage20 />} />
            <Route path="/blogs/affordable-real-estate-developers-coimbatore-amenities" element={<BlogPage21 />} />
            <Route path="/blogs/top-rated-property-management-services-coimbatore" element={<BlogPage22 />} />
          </Routes>

          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
