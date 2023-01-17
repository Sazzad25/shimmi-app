import React from "react";

const Home1 = () => {
  return (
   <div className="p-2 mt-5">
     <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80" className="w-full" />
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
        <img src="https://media.istockphoto.com/id/1320882544/photo/glowing-light-bulb-and-book-or-text-book-with-futuristic-icon-self-learning-or-education.jpg?b=1&s=170667a&w=0&k=20&c=Ujv8_0TPyMaLFUzf_4b3klbuiUW3KQ2VdFrSGatFGXA=" className="w-full" />
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
        <img src="https://images.squarespace-cdn.com/content/v1/5c463e1d2971149bd8130a68/1664383032669-DYNJ9K6UD95YZQWYU34B/LearningBeautifulClassroomSet-5_lo.jpg?format=2500w" className="w-full" />
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
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcm5pbmd8ZW58MHx8MHx8&w=1000&q=80" className="w-full" />
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
  );
};

export default Home1;
