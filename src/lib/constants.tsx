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
    layout: "panoramix",
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
  {
    title: "Estadísticas",
    path: "/estadisticas",
    layout: "stats",
    position: ["Footer"],
  },
];

export const ARDI = {
  web: {
    title: "Ardi.Land",
    description: "Página personal de Ardi",
    url: "https://www.ardi.land",
  },
  name: "Adrián Alcorta Puente",
  nickname: "Ardi",
  birthday: "Aug 23 1988 13:50:00 GMT+0200 (CEST)",
};
