function cardsRender() {
    fetch('cards.json')
        .then((res) => res.json())
        .then((data) => {
            const cardListEl = document.querySelector(".product");

            data.forEach(function (card) {
                cardListEl.innerHTML += `
                    <div class="product-wrap">
                        <h2>3 товара на сумму 25 000 ₽ </h2>
                        <ul class="product-wrap__list">
                            <li class="product-wrap__list-item">
                                <div class="product-wrap__list-img">
                                    <div>
                                        <img src="./img/${card.img}" alt="">
                                    </div>
                                    <p>${card.name}</p>
                                </div>
                                <div class="product-wrap__list-details">
                                    <div class="product-wrap__list-info">
                                        <div>Артикул<span>${card.article}</span></div>
                                        <div>Сезон<span>${card.season}</span></div>
                                    </div>
                                </div>
                                <ul class="product-wrap__list-sizes">

                                </ul>
                                <ul class="product-wrap__list-colors">
                                    <li>
                                        <input type="checkbox">
                                    </li>
                                    <li>
                                        <input type="checkbox">
                                    </li>
                                    <li>
                                        <input type="checkbox">
                                    </li>
                                </ul>
                                <div class="product-wrap__list-amounts">
                                    <ul class="product-wrap__list-amounts__current">
                                        <li class="old-price"></li>
                                        <li class="current-price"></li>
                                    </ul>
                                    <div class="product-wrap__list-amounts__counter">
                                        <span>-</span>
                                        <span></span>
                                        <span>+</span>
                                    </div>
                                    <ul class="product-wrap__list-amounts__total">
                                        <li class="old-price"></li>
                                        <li class="current-price"></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                `; 
            })

            data.forEach((item, index) => {
                const sizeList = document.querySelectorAll('.product-wrap__list-sizes')[index];
                
                item.sizes.forEach((sizeItem) => {
                    const sizeListItem = document.createElement("li");
                    sizeListItem.textContent = sizeItem.size;
                    sizeList.appendChild(sizeListItem);
                });
            });            
    })
}

module.exports = cardsRender;