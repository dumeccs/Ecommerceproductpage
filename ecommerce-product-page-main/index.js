barIcon = document.querySelector('.fa-bars')
const navList = document.getElementsByClassName('nav-list')[0]
const closeBtn = document.getElementsByClassName('icon-close')[0]
const container = document.getElementsByClassName('container')[0]
const checkoutBtn = document.getElementById('checkout-basket')
const checkoutCart = document.getElementsByClassName('cart-checkout')[0]
const addItemBtn = document.getElementsByClassName('icon-plus')[0]
const minusItemBtn = document.getElementsByClassName('icon-minus')[0]
let amountInNumber = document.getElementsByClassName('display-amount')[0]
const addToCart = document.getElementById('add--to--cart')
const inCart = document.getElementById('in-cart')
let itemNumber = 0

barIcon.addEventListener('click',onToggle)
closeBtn.addEventListener('click', closeSideNav)
checkoutBtn.addEventListener('click', checkoutDisplay)
addItemBtn.addEventListener('click',addItem)
minusItemBtn.addEventListener('click',removeItem)


function onToggle(){
    navList.classList.add('active')
    closeBtn.style.display ='block'
    checkoutCart.style.display = 'none'
}

function closeSideNav(){
    navList.classList.remove('active')
    closeBtn.style.display ="none"
}

function checkoutDisplay(){
    if(checkoutCart.style.display === 'block'){
        checkoutCart.style.display = 'none'
    }
    else{
        checkoutCart.style.display = 'block'
    }
    navList.classList.remove('active')
    closeBtn.style.display ="none"
}

function setAmountInNumber(){
    amountInNumber.textContent = amountInNumber
}

function addItem(){
        itemNumber++
        amountInNumber.textContent = itemNumber
}

function removeItem(){
    if (itemNumber > 0){
        itemNumber--
    }
    amountInNumber.textContent = itemNumber
}



function displayItemsInCart(){
    inCart.textContent = itemNumber
    
}
addToCart.addEventListener('click',displayItemsInCart)




