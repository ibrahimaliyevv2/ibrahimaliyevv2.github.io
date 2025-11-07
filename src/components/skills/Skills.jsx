import "./skills.css";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaSass,
  FaHtml5,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiAntdesign,
  SiStyledcomponents,
  SiReactquery,
  SiRedux,
  SiAuth0,
  SiExpress,
  SiGooglechrome,
  SiPrettier,
  SiEslint,
  SiPostman,
  SiVite,
  SiNpm,
  SiShadcnui,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  {
    category: "Stack",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Auth.js", icon: <SiAuth0 /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  {
    category: "Styling",
    skills: [
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "SASS/SCSS", icon: <FaSass /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Shadcn-ui", icon: <SiShadcnui /> },
      { name: "Chakra UI", icon: <SiChakraui /> },
      { name: "Ant Design", icon: <SiAntdesign /> },
      { name: "Styled Components", icon: <SiStyledcomponents /> },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "React Developer Tools", icon: <FaReact /> },
      { name: "Chrome DevTools", icon: <SiGooglechrome /> },
      { name: "Prettier", icon: <SiPrettier /> },
      { name: "ESLint", icon: <SiEslint /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "npm", icon: <SiNpm /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills__category">
            <h3>{category.category}</h3>
            <div className="skills__grid">
              {category.skills.map((skill, skillIndex) => (
                <article key={skillIndex} className="skills__item">
                  <div className="skills__icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
