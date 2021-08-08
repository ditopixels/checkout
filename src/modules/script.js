const d = document

export function setGeneral(){
    const orderForm = d.querySelector('.orderform-template-holder')
    orderForm.classList.remove('shipping')
    orderForm.classList.remove('email')
    orderForm.classList.remove('payment')
    orderForm.classList.remove('profile')
    orderForm.classList.add(location.hash.replace('#/',''))

    document.querySelector('.accordion-toggle > span').textContent = "Datos personales"
    let x = document.querySelector('.accordion-toggle > span')
}

export function loadTargets (){
    setGeneral()
    const headerCart = d.querySelector('a.header-cart')
    const breadcrumb = d.querySelector('div.breadcrumb')
    breadcrumb.style.display = null
    headerCart.style.display = null
    switch (location.hash) {
        case "#/email":
            console.log("desde email")
            deleteSections()
            showEmail()
            headerCart.style.display = 'flex'
            breadcrumb.style.display = 'none'
            break;
        case "#/profile":
            console.log("desde profile")
            deleteEmail()
            showSections()
            break;
        case "#/shipping":
            console.log("desde shipping")
            deleteEmail()
            showSections()
            break;
        case "#/payment":
            console.log("desde payment")
            deleteEmail()
            showSections()
            break;
        case "#/cart":
            console.log("desde cart")
            document.body.style.overflowY = 'auto'
            break;
    }
}

export function deleteEmail (){
    const email = d.querySelector('#client-profile-data>.client-pre-email')
    email.classList.add('noneImportant')
}
export function showEmail (){
    const email = d.querySelector('#client-profile-data>.client-pre-email')
    email.classList.remove('noneImportant')

}

export function deleteSections(){
    const miniCart = d.querySelector('.mini-cart')
    const shipping = d.getElementById('shipping-data')
    const payment = d.getElementById('payment-data')
    const email = d.querySelector('#client-profile-data>.client-profile-data')

    miniCart.style.display='none' 
    shipping.style.display='none' 
    payment.style.display='none' 
    email.style.display='none' 
}

export function showSections(){
    const miniCart = d.querySelector('.mini-cart')
    const shipping = d.getElementById('shipping-data')
    const payment = d.getElementById('payment-data')
    const email = d.querySelector('#client-profile-data>.client-profile-data')

    miniCart.style.display=null
    shipping.style.display=null
    payment.style.display=null
    email.style.display=null
}

export function loadBreadCrumb () {
    const panel = d.querySelector(".orderform-template-holder > .row-fluid")
    const breadcrumb = d.createElement('div')
    const navProfile = d.createElement('div')
    const navShipping = d.createElement('div')
    const navPayment = d.createElement('div')

    navProfile.textContent = 'Datos personales'
    navShipping.textContent = 'Métodos de entrega'
    navPayment.textContent = 'Método de pago'

    breadcrumb.classList.add('breadcrumb')
    navProfile.classList.add('breadcrumb-profile')
    navPayment.classList.add('breadcrumb-payment')
    navShipping.classList.add('breadcrumb-shipping')

    breadcrumb.appendChild(navProfile)
    breadcrumb.appendChild(navShipping)
    breadcrumb.appendChild(navPayment)

    panel.insertAdjacentElement('beforebegin',breadcrumb)
}

export function loadBackToCart () {
    const headerCart = d.createElement('a')
    const wrapperCart = d.createElement('div')
    const cart = d.createElement('img')
    const back = d.createElement('span')
    const myCart = d.createElement('span')

    cart.src = 'https://sanisidrolonasar.vtexassets.com/assets/vtex/assets-builder/sanisidrolonasar.sanisidrolonasar-site-vtex/0.2.1/svg/minicard___93dbf2d9fd767e61837ccd89c7ea349a.svg'
    cart.classList.add('cart')

    back.textContent = 'VOLVER AL CARRITO'
    back.classList.add('back')
    
    headerCart.href='#/cart'

    myCart.textContent = 'MI CARRITO'
    
    wrapperCart.appendChild(cart)
    wrapperCart.appendChild(myCart)

    headerCart.classList.add('header-cart')
    headerCart.appendChild(wrapperCart)
    headerCart.appendChild(back)

    const container = d.querySelector('.container-main')

    container.insertAdjacentElement('beforebegin',headerCart)
}