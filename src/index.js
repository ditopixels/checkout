import "./css/style.scss";
import {
  loadTargets,
  loadBreadCrumb,
  loadBackToCart,
  loadFooter,
  setHeader,
  loadFonts,
} from "./modules/script";

window.addEventListener("load", () => {});
document.addEventListener("DOMContentLoaded", () => {
  loadFonts();
  setHeader();
  loadBreadCrumb();
  loadBackToCart();
  loadTargets();
  loadFooter();
});

window.addEventListener("hashchange", () => {
  loadTargets();
});
