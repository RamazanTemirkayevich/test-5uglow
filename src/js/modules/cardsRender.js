function cardsRender() {
    fetch('cards.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const currentProjectId = Number(new URL(window.location.href).searchParams.get('id'))
            const currentProject = data.find(projectToFind => projectToFind.id === currentProjectId)
            const projectDetailsRef = document.querySelector('.product');

        projectDetailsRef.innerHTML += `
            <div class="product-wrap">
                <h2>3 товара на сумму 25 000 ₽ </h2>
                <ul class="product-wrap__list">
                    <li class="product-wrap__list-item">
                        <div class="product-wrap__list-img">
                            <div>
                                <img src="./img/${currentProject.img}" alt="">
                            </div>
                            <p>${currentProject.name}</p>
                        </div>
                        <div class="product-wrap__list-details">
                            <div class="product-wrap__list-info">
                                <div>Артикул<span>${currentProject.article}</span></div>
                                <div>Сезон<span>${currentProject.season}</span></div>
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

        const list = document.querySelector(".product-wrap__list-sizes");

        currentProject.sizes.forEach((item) => {
            const slideListItem = document.createElement("li");

            slideListItem.title = item.size
            // const image = document.createElement("img");
            // image.src = item.name

            // slideListItem.appendChild(image)

            list.appendChild(slideListItem);
        });
    })
}

module.exports = cardsRender;