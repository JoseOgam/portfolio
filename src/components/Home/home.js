import React from "react";
// import Typewriter from "typewriter-effect";
import { useTypingText } from "./useTypingText";

const Home = () => {
  const { word } = useTypingText(
    ["reliable", "a self-taught fullstack software developer"],
    130,
    20
  );
  return (
    <div>
      <div id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Joseph Otieno</h1>

          <p>
            I'm
            <span className="typed"> {word} </span>
          </p>
          <div className="social-links">
            {/* <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
