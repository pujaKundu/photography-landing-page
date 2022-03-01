import React from 'react';

const Banner = () => {
    return (
      <div
        id="carouselExampleCrossfade"
        class="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          class="carousel-inner relative w-full overflow-hidden"
          style={{ height: "550px" }}
        >
          <div class="carousel-item active float-left w-full">
            <img
              src="https://img.freepik.com/free-photo/man-woman-celebrating-their-wedding-beach_23-2149003475.jpg?size=626&ext=jpg"
              class="block w-full"
              alt="Wild Landscape"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-xl">Moments that stay with you</h5>
              <p>Capture every beautiful moment of your life.</p>
            </div>
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?size=626&ext=jpg"
              class="block w-full"
              alt="Camera"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-xl">Moments that stay with you</h5>
              <p>Capture every beautiful moment of your life.</p>
            </div>
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src="https://img.freepik.com/free-photo/bride-groom-couple-wedding-photos_181624-36606.jpg?w=740"
              class="block w-full"
              alt="Exotic Fruits"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-xl">Moments that stay with you</h5>
              <p>Capture every beautiful moment of your life.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
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
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;