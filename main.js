const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const navShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('.shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.productDetail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menu.addEventListener('click',toggleMobileMenu);
navShoppingCart.addEventListener('click',toggleAsideCart);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');  
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');  

}

function toggleAsideCart(){
    shoppingCartContainer.classList.toggle('inactive');   
   mobileMenu.classList.add('inactive');
   desktopMenu.classList.add('inactive');
}


const productList = [];
productList.push({
    name : 'Bike',
    price : 120,
    imagen : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name : 'Pantalla',
    price : 220,
    imagen : 'https://images.pexels.com/photos/5490302/pexels-photo-5490302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name : 'Computaadora',
    price : 320,
    imagen : 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

const newProductList = [];
newProductList.push({
    name : 'Keyboard',
    price : 80,
    imagen : 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
function renderProductos(arr){
  for (product of arr){
    const productCard = document.createElement('div');
        productCard.classList.add('product-card');

    const productImg = document.createElement('img');
        productImg.setAttribute('src',product.imagen);

    const productInfo = document.createElement('div');
         productInfo.classList.add('product-info');


    const productDiv = document.createElement('div');
    const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
        productName.innerText = product.name;

    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
         productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    productInfo.appendChild(productDiv);
    productInfo.appendChild(productInfoFigure);

    cardContainer.appendChild(productCard)
    }   
}

renderProductos(productList);
renderProductos(newProductList)
  
