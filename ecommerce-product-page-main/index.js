barIcon = document.querySelector('.fa-bars')
const navList = document.getElementsByClassName('nav-list')[0]
const closeBtn = document.getElementsByClassName('icon-close')[0]
const container = document.getElementsByClassName('container')[0]
const checkoutBtn = document.getElementById('checkout-basket')
const checkoutCart = document.getElementsByClassName('cart-checkout')[0]
console.log(navList)
function onToggle(){
    navList.classList.add('active')
    closeBtn.style.display ='block'
    container.classList.add('fade-bg')
    checkoutCart.style.display = 'none'
    
   
}
closeBtn.addEventListener('click', function(){
    navList.classList.remove('active')
    closeBtn.style.display ="none"

} )
barIcon.addEventListener('click',onToggle)

checkoutBtn.addEventListener('click', function(){
    if(checkoutCart.style.display === 'block'){
        checkoutCart.style.display = 'none'
    }
    else{
        checkoutCart.style.display = 'block'
    }
    navList.classList.remove('active')
    closeBtn.style.display ="none"
})
