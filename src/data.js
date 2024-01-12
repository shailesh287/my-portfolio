import { nanoid } from "nanoid";

const projects = [
  {
    id: nanoid(),
    title: "FoodDash",
    img: "/images/projects/Food_Dash.png",
    desc: "A food delivery App built using Reactjs and Powered by Swiggy's API",
    technologies: ["React.js", "TailwindCSS", "Redux"],
    github: "https://github.com/shailesh287/food-dash",
    live: "https://food-dash.vercel.app/",
  },
  {
    id: nanoid(),
    title: "Netflix-clone",
    img: "/images/projects/netflix.png",
    desc: "Netflix clone featuring Firebase authentication for secure user login.",
    technologies: ["React.js", "Typescript", "Firebase"],
    github: "https://github.com/shailesh287/netflix-gpt",
    live: "https://netflix-gpt-wine.vercel.app/",
  },
  {
    id: nanoid(),
    title: "Codwiz",
    img: "/images/projects/blog.png",
    desc: "Designed a stylish React blog app for a seamless and engaging front-end experience.",
    technologies: ["React.js", "Javascript", "Context"],
    github: "https://github.com/shailesh287/react_blog_app",
    live: "https://react-blog-app-1.netlify.app",
  },
];

const skills = [
  {
    icon: "html",
    title: "HTML",
  },
  {
    icon: "css",
    title: "CSS",
  },
  {
    icon: "javascript",
    title: "JavaScript",
  },
  {
    icon: "typescript",
    title: "TypeScript",
  },
  {
    icon: "react",
    title: "React.js",
  },
  {
    icon: "redux",
    title: "Redux",
  },
  {
    icon: "angular",
    title: "Angular",
  },
  {
    icon: "rxjs",
    title: "RxJs",
  },
  {
    icon: "tailwindcss",
    title: "TailwindCSS",
  },
  {
    icon: "bootstrap",
    title: "Bootstrap",
  },
  {
    icon: "material",
    title: "Material UI",
  },
  {
    icon: "firebase",
    title: "Firebase",
  },
  {
    icon: "sass",
    title: "Sass",
  },
  {
    icon: "git",
    title: "Git",
  },
  {
    icon: "github",
    title: "Github",
  },
  {
    icon: "babel",
    title: "Babel",
  },
  {
    icon: "webpack",
    title: "Webpack",
  },
  {
    icon: "socket-io",
    title: "Socket.IO",
  },
];

export const data = { projects, skills };
