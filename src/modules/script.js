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
    console.log('AHHHHHHH', x)
}

export function loadTargets (){
    setGeneral()
    switch (location.hash) {
        case "#/email":
            console.log("desde email")
            deleteSections()
            showEmail()
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