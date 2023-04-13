import React from "react";
import SkillItem from "./SkillItem";

const data = [
  {
    title: "Frontend Development",
    details:
      "HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, Material UI, Ant Design, React, Redux Toolkit, React Dropzone, Multer, Formik, Yup, React Hook Form, Framer-Motion, Next.js, Vite.js, Chart.js",
  },
  {
    title: "Backend and Databases",

    details: "Node.js, Express.js, MongoDB, Firebase",
  },
  {
    title: "Digital Marketing",

    details:
      "Google Ads; SEO; Adobe Photoshop, Illustrator, Premiere, InDesign, XD; achieved over 9.7k follower growth on the platform RED",
  },
  {
    title: "Languages",

    details: "Chinese, English, French, Japanese",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-black mb-9">Skills</h1>
      {data.map((item, id) => (
        <SkillItem key={id} title={item.title} details={item.details} />
      ))}
    </div>
  );
};

export default Skills;
