import React from "react";

const AboutMe = ({ img }) => {
  return (
    <div id="aboutme" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black mb-9">
        About Me
      </h1>

      <figure class="md:flex rounded-xl p-8 md:p-0">
        
        <img
          class="md:w-48 md:h-48  rounded-full mx-auto my-auto hover:opacity-40"
          src={img}
          alt=""
          width="200"
          height="200"
        />
       

        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
         
            <p class="text-lg font-medium">
            Hi :) My name is Yingmu Zhang. 
            </p>
            <p>
            I'm a motivated and passionate front-end developer at the beginning of my career.  I am constantly striving to stay up-to-date with the newest tools and frameworks in the industry, and I enjoy challenging myself to explore innovative solutions to complex problems. 
            </p>
            <p>
            I care about social issues such as child sexual abuse and mental health a lot. I'm more than willing to offer what I can do technically to the related organizations.
            Besides, I also quite enjoy yoga and horror movies.
            </p>
        
        
        </div>
      </figure>
    </div>
  );
};

export default AboutMe;
