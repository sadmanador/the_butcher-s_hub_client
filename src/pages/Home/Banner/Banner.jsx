import React from "react";

const Banner = () => {
  return (
    <div className="banner relative">
        <div className="lg:grid grid-cols-2 p-4 bg-gradient-to-r from-black">
          <div className="text-white lg:p-12 p-2">
            <h1 className="lg:text-5xl text-2xl font-semibold">
              The <span className="tag_name">Butcher's Hub</span> brings
              top-quality <br /> cuts and expert cooking
            </h1>
            <p className="my-5">
              The Butcher's Hub is a cult of passionate chefs based in
              California, USA. With a love for all things meat, our team has
              honed their skills in the art of butchery and cooking to provide
              the highest quality dishes for our customers.
            </p>
            <div className="text-center">
              <button className="btn glass">Subscribe</button>
            </div>
          </div>
          <div>
            <div className="carousel w-full rounded-lg">
              <div id="slide1" className="carousel-item relative w-full">
                <img src="assets/banner/banner-1.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src="assets/banner/banner-2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src="assets/banner/banner-3.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src="assets/banner/banner-4.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div
        className="absolute -bottom-24 drop-shadow-2xl z-10 hidden lg:block"
        style={{ left: "44%" }}
      >
        <img src="assets/num1.svg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
