import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    title: "Frontend Development",
    time_period: "since 2022",
    points: [
      "HTML, CSS, Tailwind CSS;",
      "JavaScript, TypeScript;",
      "Material UI, Ant Design;",
      "Vue, Vuex, Next.js, Vite.js;",
      "Multer, Formik, Yup,  Framer-Motion, Chart.js;",
      "React, Redux Toolkit, React Dropzone, React Hook Form, Three.js;",
    ],
  },
  {
    title: "Backend and Databases",
    time_period: "since 2022",
    points: ["Node.js, Express.js;", "MongoDB, Firebase;"],
  },
  {
    title: "Digital Marketing",
    time_period: "since 2020",
    points: [
      "Google Ads; SEO;",
      "Graphic Design: Adobe Photoshop, Illustrator, Premiere, InDesign, XD;",
      "Social Media Management: achieved over 12k follower growth on the platform RED",
    ],
  },
];

const Skills = ({ img, inset1, inset2, inset3 }) => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" id="skills">
      <h1 className="text-4xl font-bold text-center text-black mb-9">Skills</h1>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={experience.company_name}
            date={experience.time_period}
            iconStyle={{ background: "black" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  // src={experience.icon}
                  src={[inset1, inset2, inset3][index]}
                  alt={experience.company_name}
                  className="w-[80%] h-[80%] object-contain rounded-full"
                />
              </div>
            }
            contentStyle={{
              borderBottom: "8px",
              borderStyle: "solid",
              borderBottomColor: "black",
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
