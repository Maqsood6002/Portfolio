import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Job Portal",
    year: "March 2025",
    align: "right",
    image: "/images/jobPortal.png",
    link: "https://job-portal-frontend-ruby-nine.vercel.app/",
  },
  {
    name: "Password Manager",
    year: "October 2024",
    align: "left",
    image: "/images/PasswordManager.png",
    link: "https://password-manager-frontend-sooty.vercel.app/",
  },
  {
    name: "Snake Game",
    year: "July 2024",
    align: "right",
    image: "/images/SnakeGame.png",
    link: "https://snake-game-iota-two.vercel.app/",
  },
  {
    name: "Test Forest Fires",
    year: "May 2024",
    align: "left",
    image: "/images/TestForestFires.png", // I changed the image path assuming it should be unique
    link: "https://testforestfires-vs4b.onrender.com", // If you have a deployed link for this project, replace '#' with the URL
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
