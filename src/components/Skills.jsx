import React from "react";
import SkillItem from "./SkillItem";

const data = [
  {
 
    title: "Frontend Development",
    details:
      "HTML CSS JavaScript",
  },
  {
   
    title: "Backend and Databases",

    details:
      "",
  },
  {

    title: "Digital Marketing",

    details:
      "",
  },
  {
  
    title: "Languages",
  
    details:
      "",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black mb-9">Skills</h1>
      {data.map((item, id) => (
        <SkillItem
          key={id}

          title={item.title}

          details={item.details}
        />
      ))}
    </div>
  );
};

export default Skills;
