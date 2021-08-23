import "./css/style.scss";
import {
  loadTargets,
  loadBreadCrumb,
  loadBackToCart,
  loadFooter,
  setHeader,
} from "./modules/script";

window.addEventListener("load", () => {});
document.addEventListener("DOMContentLoaded", () => {
  setHeader();
  loadBreadCrumb();
  loadBackToCart();
  loadTargets();
  loadFooter();
});

window.addEventListener("hashchange", () => {
  loadTargets();
});
