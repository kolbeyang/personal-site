import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "KnowLang",
    description: "AI-powered insights on your codebase",
    link: "https://www.knowlang.dev/",
    imagePaths: [
      "/knowlang/knowlang-screenshot-chat.png",
      "/knowlang/knowlang-screenshot-features.png",
      "/knowlang/knowlang-screenshot-landing.png",
      "/knowlang/knowlang-screenshot-process.png",
    ],
  },
  {
    title: "Red Bean",
    description: "An interactive single-player card game",
    link: "https://www.kickstarter.com/projects/1621292893/red-bean-dragon-slayer",
    imagePaths: [
      "/red-bean/red-bean-01.png",
      "/red-bean/red-bean-02.png",
      "/red-bean/red-bean-03.png",
    ],
  },
  {
    title: "Habit Square",
    description: "A simple habit tracker",
    link: "https://www.kolbeyang.com/habits/",
    imagePaths: [
      "/habit-square/habit-square-signin.png",
      "/habit-square/habit-square-new.png",
      "/habit-square/habit-square-today.png",
      "/habit-square/habit-square-weekly.png",
    ],
  },
];
