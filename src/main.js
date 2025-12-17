

import 'normalize.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import './style.css';

//Lancement FancyBox
Fancybox.bind("[data-fancybox]", {});

//au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {

  //gestion des liens actifs dans les menus
  const currentPath = window.location.pathname;
  // Sélectionne tous les liens de navigation correspondant au chemin actuel
  const links = Array.from(document.querySelectorAll("nav a")).filter(link => link.getAttribute("href") === currentPath);
  links.forEach(link => link.classList.add("active"));

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