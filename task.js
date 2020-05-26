const minus = document.querySelectorAll('.product__quantity-control_dec');
const plus = document.querySelectorAll('.product__quantity-control_inc');
const quantityValue = document.querySelectorAll('.product__quantity-value');
const addBtn = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const pics = document.querySelectorAll('.product__image');

minus.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.nextElementSibling.textContent > 1)
        e.target.nextElementSibling.textContent--;
    });
});

plus.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.previousElementSibling.textContent++;
    });
});

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', (e) => {
        let pic = pics[i];
        let count = e.target.previousElementSibling.children[1].textContent;

        if (count > 0) {   
            addProduct(i + 1, pic.src, count);
        }        
    });
}

function addProduct(id, pic, count) {
    cartProducts.innerHTML += `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${pic}">
            <div class="cart__product-count">${count}</div>
        </div>
    `;
}
