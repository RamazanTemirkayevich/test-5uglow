function cardsRender() {
    fetch('cards.json')
        .then((res) => res.json())
        .then((data) => {
            const cardListEl = document.querySelector(".product-wrap__list");
            // const totalPrice = 0;

            data.forEach(function (card) {
                cardListEl.innerHTML += `
                    <li class="product-wrap__list-item">
                        <div class="product-wrap__list-img">
                            <div>
                                <img src="./img/${card.img}" alt="">
                            </div>
                            <p>${card.name}</p>
                        </div>
                        <div class="product-wrap__list-details">
                            <div>Артикул<span>${card.article}</span></div>
                            <div>Сезон<span>${card.season}</span></div>
                        </div>
                        <ul class="product-wrap__list-sizes">

                        </ul>
                        <ul class="product-wrap__list-colors">
                        
                        </ul>
                        <div class="product-wrap__list-amounts">
                            <ul class="product-wrap__list-amounts__current">
                                <li class="old-price">${card.oldPrice}</li>
                                <li class="current-price">${card.price}</li>
                            </ul>
                            <div class="product-wrap__list-amounts__counter">
                                <span>-</span>
                                <span></span>
                                <span>+</span>
                            </div>
                            <ul class="product-wrap__list-amounts__total">
                                <li class="old-price">${card.oldPrice}</li>
                                <li class="current-price">${card.price}</li>
                            </ul>
                        </div>
                    </li>
                    `; 
            })

            data.forEach((item, index) => {
                const sizeList = document.querySelectorAll('.product-wrap__list-sizes')[index];
                const colorsList = document.querySelectorAll('.product-wrap__list-colors')[index];
                
                item.sizes.forEach((sizeItem) => {
                    const sizeListItem = document.createElement("li");
                    sizeListItem.textContent = sizeItem.size;
                    sizeList.appendChild(sizeListItem);

                    if (sizeItem.exist === false) {
                        sizeListItem.classList.add('unavailable')
                    }
                });

                item.colors.forEach((colorItem) => {
                    const colorListItem = document.createElement("li");
                    const colorInput = document.createElement('input');
                    const colorSpan = document.createElement('span');

                    colorInput.type = 'checkbox'
                    colorListItem.classList.add('color-parent')
                    colorSpan.classList.add('checkmark')
                    const colorActive = document.querySelectorAll('.color-parent')

                    colorListItem.appendChild(colorInput);
                    colorListItem.appendChild(colorSpan);
                    
                    colorSpan.style.backgroundColor = colorItem.color

                    function handleToggleClick(event) {
                        colorActive.forEach((element) => {
                            element.classList.remove('active');
                        });
                    
                        event.currentTarget.classList.toggle('active');
                    }
                    
                    colorActive.forEach((element) => {
                        element.addEventListener('click', handleToggleClick);
                    });
                    
                    colorsList.appendChild(colorListItem);
                });
            });            
    })
}

module.exports = cardsRender;