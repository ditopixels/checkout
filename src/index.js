import './css/style.scss';
import {loadTargets,loadBreadCrumb,loadBackToCart} from './modules/script';

window.addEventListener('load',()=>{
})
document.addEventListener('DOMContentLoaded',()=>{
    loadBreadCrumb()
    loadBackToCart()
    loadTargets()
})

window.addEventListener('hashchange',()=>{
    loadTargets()
})