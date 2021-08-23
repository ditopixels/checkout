import './css/style.scss';
import {loadTargets,loadBreadCrumb,loadBackToCart, loadFooter} from './modules/script';

window.addEventListener('load',()=>{
})
document.addEventListener('DOMContentLoaded',()=>{
    loadBreadCrumb()
    loadBackToCart()
    loadTargets()
    loadFooter()
})

window.addEventListener('hashchange',()=>{
    loadTargets()
})