import { INavigationLink } from "@/interfaces/INavigationLink";
export const NAVIGATION: Array<INavigationLink> = [
  {
    title: "Inicio",
    path: "/",
    layout: "home",
    position: ["MainNavigation"],
  },
  {
    title: "Sobre mí",
    path: "/sobre-mi",
    layout: "page",
    position: ["MainNavigation"],
  },
  {
    title: "Cómo trabajo",
    path: "/como-trabajo",
    layout: "page",
    position: ["Footer"],
  },
  {
    title: "Espacios",
    path: "/espacios",
    layout: "page",
    position: ["Footer"],
  },
  {
    title: "Blog",
    path: "/blog",
    layout: "blog",
    position: ["MainNavigation"],
  },
  {
    title: "Videojuegos",
    path: "/videojuegos",
    layout: "games",
    position: ["Footer"],
  },
];

export const ARDI_BIRTHDAY = "Aug 23 1988 13:50:00 GMT+0200 (CEST)";
