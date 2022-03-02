import React from 'react';
import Fade from "react-reveal/Fade";

const Work = () => {
    return (
      <section class="overflow-hidden text-gray-700 pb-24 lg:px-16" id="works">
        <Fade bottom>
          <h1 className="text-6xl mb-20 text-purple-500">Our Works</h1>
          <div class="container px-5 py-2 mx-auto lg:pt-8 ">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg  hover:scale-125 mb-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCZ6aLcwHWDwUVlWvUWVndzuVPvUqmFxd1A&usqp=CAU"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg hover:scale-125 mb-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2qpVgJXmBu5hIkCAwi0R-uEfAbUxerzDpg&usqp=CAU"
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg backdrop-blur-sm bg-white/30 mt-6"
                    src="https://as1.ftcdn.net/v2/jpg/01/57/29/62/1000_F_157296288_3IeYi17XcIWfGFwaTq9IGfvWvvhYYkuS.jpg"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg "
                    src="https://img.freepik.com/free-photo/wedding-bands-hands-bride-groom-with-beautiful-wedding-bouquet-made-greenery-white-flowers_8353-11212.jpg?size=626&ext=jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg  hover:scale-125 mt-6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt13HHwvTuErKma9CmB-TQSgXIWb6WMZ_32w&usqp=CAU"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg  hover:scale-125 mt-6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZk_hXXfjE30TZFMg2Sj8a0fqvyBNyRLbaQ&usqp=CAU"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
};

export default Work;