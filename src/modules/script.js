const d = document;
const HeaderCart = document.querySelector(".header-cart");

export function loadFonts() {
  const LinkStylesOne = d.createElement("link");
  const LinkStylesTwo = d.createElement("link");
  const LinkStylesThree = d.createElement("link");

  LinkStylesOne.rel = "preconnect";
  LinkStylesOne.href = "https://fonts.googleapis.com";

  LinkStylesTwo.rel = "preconnect";
  LinkStylesTwo.href = "https://fonts.gstatic.com";
  LinkStylesTwo.setAttribute("crossorigin", null);

  LinkStylesThree.rel = "stylesheet";
  LinkStylesThree.href =
    "https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap";

  d.head.appendChild(LinkStylesOne);
  d.head.appendChild(LinkStylesTwo);
  d.head.appendChild(LinkStylesThree);
}

export function setHeader() {
  const panel = d.querySelector(".cart-template-holder");
  const selector = d.createElement("div");
  selector.innerHTML =
    "<div class='cartHeaderCustom'> <p>MI CARRITO</p> </div>";
  //selector.innerText = "Hellow";
  //<img src='/arquivos/logo-cart.png'>
  panel.insertAdjacentElement("afterbegin", selector);
}

export function setGeneral() {
  const orderForm = d.querySelector(".orderform-template-holder");
  orderForm.classList.remove("shipping");
  orderForm.classList.remove("email");
  orderForm.classList.remove("payment");
  orderForm.classList.remove("profile");
  orderForm.classList.add(location.hash.replace("#/", ""));

  document.querySelector(".accordion-toggle > span").textContent =
    "Datos personales";
  let x = document.querySelector(".accordion-toggle > span");
}

let count = false;
export function loadTargets() {
  setGeneral();
  const headerCart = d.querySelector("a.header-cart");
  //const breadcrumb = d.querySelector("div.breadcrumb");
  const footer = d.querySelector("body > footer");
  const containerBuyBtn = d.querySelector(".cart-links-bottom");
  const backToStore = d.createElement("a");
  backToStore.href = "/";
  backToStore.classList.add("back-to-store");
  backToStore.textContent = "SEGUIR COMPRANDO";
  if (containerBuyBtn && !count) {
    containerBuyBtn.appendChild(backToStore);
    count = true;
  }

  //breadcrumb.style.display = null;
  headerCart.style.display = null;

  var argTelSection = document.getElementsByClassName("argentina-phone")[0];
  if (argTelSection) {
    var secInput = argTelSection.getElementsByClassName("input")[0];
    var labelArea = document.getElementsByClassName("custom-label-area")[0];
    var labelTel = document.getElementsByClassName("custom-label-telefono")[0];
    if (labelArea) {
      secInput.removeChild(labelArea);
    }

    if (labelTel) {
      secInput.removeChild(labelTel);
    }
  }
  function OnChange() {
    //console.log(screen.width);
    if (screen.width <= 768) {
      footer.classList.add("FooterMobile");
      footer.classList.remove("FooterDesk");
    } else {
      footer.classList.add("FooterDesk");
      footer.classList.remove("FooterMobile");
    }
  }
  switch (location.hash) {
    case "#/email":
      deleteSections();
      showEmail();
      document.body.classList.add("blanco");
      headerCart.style.display = "flex";
      //breadcrumb.style.display = "none";
      if (footer) footer.style.display = "flex";
      footer.style.margin = "0";
      HeaderCart.classList.add("hidden");
      break;
    case "#/profile":
      deleteEmail();
      showSections();
      if (footer) footer.style.display = null;
      document.body.classList.remove("blanco");
      //loadFooter()
      break;
    case "#/shipping":
      //Para cambiar el texto del botón que agrega una nueva dirección.
      var buttonDirections = document.getElementById("change-pickup-button");
      if (buttonDirections)
        buttonDirections.firstChild.data = "Agregar una nueva dirección";

      //Para cambiar el texto del botón que lleva al pago.
      var buttonGoPayment = document.getElementById("btn-go-to-payment");
      if (buttonGoPayment) buttonGoPayment.firstChild.data = "Ir para el pago";

      if (footer) footer.style.display = null;
      document.body.classList.remove("blanco");
      deleteEmail();
      showSections();
      //loadFooter()
      break;
    case "#/payment":
      if (footer) footer.style.display = null;
      document.body.classList.remove("blanco");
      deleteEmail();
      showSections();
      //loadFooter()
      break;
    case "#/cart":
      //Llamando a la funcion al momento de cambiar de tamaño
      OnChange();
      window.addEventListener("resize", OnChange);
      headerCart.classList.add("OcultarDisplay");
      document.body.style.overflowY = "auto";
      document.body.classList.add("blanco");
      if (footer) footer.style.display = "flex";
      footer.style.display = "flex";
      break;
  }
}

export function deleteEmail() {
  const email = d.querySelector("#client-profile-data>.client-pre-email");
  email.classList.add("noneImportant");
}
export function showEmail() {
  const email = d.querySelector("#client-profile-data>.client-pre-email");
  email.classList.remove("noneImportant");
}

export function deleteSections() {
  const miniCart = d.querySelector(".mini-cart");
  const shipping = d.getElementById("shipping-data");
  const payment = d.getElementById("payment-data");
  const email = d.querySelector("#client-profile-data>.client-profile-data");

  miniCart.style.display = "none";
  shipping.style.display = "none";
  payment.style.display = "none";
  email.style.display = "none";
}

export function showSections() {
  const miniCart = d.querySelector(".mini-cart");
  const shipping = d.getElementById("shipping-data");
  const payment = d.getElementById("payment-data");
  const email = d.querySelector("#client-profile-data>.client-profile-data");

  miniCart.style.display = null;
  shipping.style.display = null;
  payment.style.display = null;
  email.style.display = null;
}
/*
export function loadBreadCrumb() {
  const panel = d.querySelector(".orderform-template-holder > .row-fluid");
  //const breadcrumb = d.createElement("div");
  const navProfile = d.createElement("div");
  const navShipping = d.createElement("div");
  const navPayment = d.createElement("div");

  navProfile.textContent = "Datos personales";
  navShipping.textContent = "Métodos de entrega";
  navPayment.textContent = "Método de pago";

  //breadcrumb.classList.add("breadcrumb");
  navProfile.classList.add("breadcrumb-profile");
  navPayment.classList.add("breadcrumb-payment");
  navShipping.classList.add("breadcrumb-shipping");

  breadcrumb.appendChild(navProfile);
  breadcrumb.appendChild(navShipping);
  breadcrumb.appendChild(navPayment);

  panel.insertAdjacentElement("beforebegin", breadcrumb);
}*/

export function loadBackToCart() {
  const headerCart = d.createElement("a");
  const wrapperCart = d.createElement("div");
  const cart = d.createElement("img");
  const back = d.createElement("span");
  const myCart = d.createElement("span");

  cart.src =
    "https://sanisidrolonasar.vtexassets.com/assets/vtex/assets-builder/sanisidrolonasar.sanisidrolonasar-site-vtex/0.2.1/svg/minicard___93dbf2d9fd767e61837ccd89c7ea349a.svg";
  cart.classList.add("cart");

  back.textContent = "VOLVER AL CARRITO";
  back.classList.add("back");

  headerCart.href = "#/cart";

  myCart.textContent = "MI CARRITO";

  wrapperCart.appendChild(cart);
  wrapperCart.appendChild(myCart);

  headerCart.classList.add("header-cart");
  headerCart.appendChild(wrapperCart);
  headerCart.appendChild(back);

  const container = d.querySelector(".container-main");

  container.insertAdjacentElement("beforebegin", headerCart);
}

export function loadFooter() {
  const panel = d.querySelector(".orderform-template-holder > .row-fluid");
  const footer = d.createElement("footer");

  footer.innerHTML =
    '<div class="text-check"><svg xmlns="http://www.w3.org/2000/svg" id="_x31__x2C_5" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20"><path fill="currentColor" d="m18.75 24h-13.5c-1.24 0-2.25-1.009-2.25-2.25v-10.5c0-1.241 1.01-2.25 2.25-2.25h13.5c1.24 0 2.25 1.009 2.25 2.25v10.5c0 1.241-1.01 2.25-2.25 2.25zm-13.5-13.5c-.413 0-.75.336-.75.75v10.5c0 .414.337.75.75.75h13.5c.413 0 .75-.336.75-.75v-10.5c0-.414-.337-.75-.75-.75z"/><path fill="currentColor" d="m17.25 10.5c-.414 0-.75-.336-.75-.75v-3.75c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5v3.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.75c0-3.309 2.691-6 6-6s6 2.691 6 6v3.75c0 .414-.336.75-.75.75z"/><path fill="currentColor" d="m12 17c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5c-.275 0-.5.224-.5.5s.225.5.5.5.5-.224.5-.5-.225-.5-.5-.5z"/><path fill="currentColor" d="m12 20c-.414 0-.75-.336-.75-.75v-2.75c0-.414.336-.75.75-.75s.75.336.75.75v2.75c0 .414-.336.75-.75.75z"/></svg><h2 class="txt-header">Compra 100% segura</h2></div><p>© DeBarricas 2021. Todos los derechos reservados.</p><img src="https://debarricasar.vteximg.com.br/arquivos/unnamed.png">';

  panel.insertAdjacentElement("beforeend", footer);
}
