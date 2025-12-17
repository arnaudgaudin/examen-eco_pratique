

import 'normalize.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import './style.css';

//Lancement FancyBox
Fancybox.bind("[data-fancybox]", {});

//au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {

  // Gestion des liens actifs dans les menus
  const currentPath = window.location.pathname;

  document.querySelectorAll("nav a").forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  //gestion du menu responsive
  const menuToggle = document.querySelector(".menu-toggle .menu-toggle-btn");
  const menu = document.querySelector("header .navbar nav ul");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Optionnel : fermer le menu si on clique sur un lien
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 960) {
        menu.classList.remove("open");
      }
    });
  });
});