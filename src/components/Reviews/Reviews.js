import React from 'react';
import Fade from 'react-reveal/Fade';

const Reviews = () => {
    return (
   
        <Fade bottom>
          <h1 className="text-6xl mb-20 text-purple-500">Reviews</h1>
        
        
          <div
            id="carouselDarkVariant"
            class="carousel slide carousel-fade carousel-dark relative text-black-900 py-24"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="1"
                aria-label="Slide 1"
              ></button>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to="2"
                aria-label="Slide 1"
              ></button>
            </div>

            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLK3o8pVqdyjIsg1URxvn5pHcCcdKN6G-LQ&usqp=CAU"
                  class="block w-80 mx-auto pb-32"
                  alt="Monica"
                />
                <div class="carousel-caption hidden md:block absolute text-center  text-gray-900 pt-24">
                  <h5 class="text-xl text-black-900">Monica Geller</h5>
                  <p className=" text-black-900">
                    Serene made my special day even more special.Amazing
                    photography.
                  </p>
                </div>
              </div>

              <div class="carousel-item relative float-left w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24GanMRzRc4i89L6W8jXyhvMCkzSo0QQbOA&usqp=CAU"
                  class="block  w-80 mx-auto pb-32"
                  alt="Mountaintop"
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl text-black-900">Amy Santiago</h5>
                  <p className=" text-black-900">
                    Serene made my special day even more special.Amazing
                    photography.
                  </p>
                </div>
              </div>

              <div class="carousel-item relative float-left w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1vGC6D_nXvdvXChRHd_7Y4cijGhltFJkpA&usqp=CAU"
                  class="block  w-80 mx-auto pb-32"
                  alt="Woman Reading a Book"
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl text-black-900">Rachel Green</h5>
                  <p className="text-black-900">
                    Serene made my special day even more special.Amazing
                    photography.
                  </p>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </Fade>
      
    );
};

export default Reviews;