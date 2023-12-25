import React from "react";
// import SkillItem from "./SkillItem";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    // icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    // icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    // icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const Skills = ({ img }) => {
  return (
    // <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    //   <h1 className="text-4xl font-bold text-center text-black mb-9">Skills</h1>
    //   {data.map((item, id) => (
    //     <SkillItem key={id} title={item.title} details={item.details} />
    //   ))}
    // </div>
    <div className="mt-12 max-w-[1040px] m-auto md:pl-20 p-4 py-16" id="skills">
      <h1 className="text-4xl font-bold text-center text-black mb-9">Skills</h1>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={experience.company_name}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  // src={experience.icon}
                  src={img}
                  alt={experience.company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
            contentStyle={{
              borderBottom: "8px",
              borderStyle: "solid",
              borderBottomColor: experience.iconBg,
              boxShadow: "none",
            }}
          >
            <div>
              <h3 className="text-black text-xl font-poppins font-semibold">
                {experience.title}
              </h3>
              <p
                className="text-black-500 font-medium text-base"
                style={{ margin: 0 }}
              >
                {experience.company_name}
              </p>
            </div>

            <ul className="my-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className="text-black-500/50 font-normal pl-1 text-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Skills;
