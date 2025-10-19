import { links } from "@/links";
import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "KnowLang",
    description:
      "KnowLang is an AI-powered tool that brings intelligent exploration to software development by decoding complex codebases.\nIt features multi-language support for Python, C++, and TypeScript, semantic code search using natural language queries, contextual Q&A, smart chunking, two-stage retrieval, and incremental updates. The platform helps developers accelerate understanding and unlock hidden knowledge in their code.",
    link: "https://www.knowlang.dev/",
    imagePaths: [
      "/knowlang/knowlang-screenshot-chat.png",
      "/knowlang/knowlang-screenshot-features.png",
      "/knowlang/knowlang-screenshot-landing.png",
      "/knowlang/knowlang-screenshot-process.png",
    ],
    tools: ["NextJS", "React", "TailwindCSS", "Supabase"],
  },
  {
    title: "Habit Square",
    description:
      "Habit Square is a full-stack web application for tracking daily habits. The app features a user-friendly interface to help users build and maintain positive routines, with data stored in a Supabase SQL database. It includes Google authentication integration via Supabase Auth for seamless user login.",
    link: "https://kolbeyang.com/habits",
    imagePaths: [
      "/habit-square/habit-square-new.png",
      "/habit-square/habit-square-signin.png",
      "/habit-square/habit-square-today.png",
      "/habit-square/habit-square-weekly.png",
    ],
    tools: ["Next.js", "React", "TypeScript", "Supabase"],
  },
  {
    title: "30 Minute Designs",
    description:
      "Super quick sketches in Figma for daily design practice. Inspired by great designers on Dribbble, Pinterest, and around the web.",
    link: links.dribbble,
    imagePaths: [
      "/thirty-minute-designs/thirty-min-design-01.png",
      "/thirty-minute-designs/thirty-min-dashboard-00.png",
      "/thirty-minute-designs/thirty-min-dashboard-01.png",
      "/thirty-minute-designs/thirty-min-design-00.png",
      "/thirty-minute-designs/thirty-min-design-02.png",
    ],
    tools: ["Figma"],
  },
  {
    title: "Red Bean",
    description:
      "Red Bean: Dragon Slayer is an innovative single-player role-playing card game that combines elements of comic books, video games, and traditional playing cards. The game uses a standard 52-card poker deck with a unique navigation system of colored arrows and tabs that allows players to follow different storylines. \nThe successfully funded Kickstarter project raised over $12,500 from 374 backers.",
    link: "https://www.kickstarter.com/projects/1621292893/red-bean-dragon-slayer",
    imagePaths: [
      "/red-bean/red-bean-01.png",
      "/red-bean/red-bean-02.png",
      "/red-bean/red-bean-03.png",
    ],
    tools: ["Kickstarter", "Photoshop", "Illustrator"],
  },
];
