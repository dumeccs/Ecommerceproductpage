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
const calculatedPrice = document.getElementById('calculated-price')
const displayWrapper = document.getElementById('checkout-wrapper')
const checkoutSubmitBtn = document.getElementById('checkout-submit-btn')
addToCart.addEventListener('click',displayItemsInCart)
let itemNumber = 0
let discount = 0.5
const originalPrice = 250
let discountPrice = discount * originalPrice




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
//function to set features off when body is clicked
// function resetAll(){
//     closeBtn.style.display ="none"
//     checkoutCart.style.display = 'none'
//     closeBtn.style.display ="none"
// }

if(itemNumber <  1){
    inCart.style.display = 'none'
    displayWrapper.textContent = 'No item in cart'
    checkoutSubmitBtn.style.display = 'none'
}

function displayItemsInCart(){
    // let total =
    if(itemNumber <  1){
        inCart.style.display = 'none'
        displayWrapper.textContent = "No item in cart yet"
        checkoutSubmitBtn.style.display = 'none'
    }
    
    else{
        inCart.style.display = 'block'
        checkoutSubmitBtn.style.display = 'block'
        displayWrapper.innerHTML = ` <div class="checkout-wrapper" id="checkout-wrapper">
        <div class="text-image-div">
          <img src="./images/image-product-1.jpg"  alt="" class="checkout-img">
          <div>
            <p>Autumn Limited Edition...</p>
            <p id="calculated-price">${`$${discountPrice} x ${itemNumber} $${itemNumber * discountPrice}`}</p>
          </div>
        </div>
       
          
          <img src="./images/icon-delete.svg" alt="" class="icon-delete">
      </div>`
    }


    inCart.textContent = itemNumber
    
    
}





