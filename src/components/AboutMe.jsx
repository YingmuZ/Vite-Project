import React from "react";

const AboutMe = ({ img }) => {
  return (
    <div id="AboutMe" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black mb-9">
        About Me
      </h1>

      <figure class="md:flex rounded-xl p-8 md:p-0">
        <img
          class="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto"
          src={img}
          alt=""
          width="384"
          height="512"
        />

        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
         
            <p class="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ullam dignissimos nulla officiis iste deleniti pariatur fuga sed explicabo nobis? Possimus necessitatibus non officiis deleniti hic nulla quas dolorem nostrum?
            </p>
        
        
        </div>
      </figure>
    </div>
  );
};

export default AboutMe;
