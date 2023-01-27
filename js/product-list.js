(function() {

    const products = [
        {
            id: '1',
            title: 'Baby Yoda',
            description: 'Baby Yoda sticker',
            price: 10.99,
            image: 'img/baby-yoda.svg'
        },
        {
            id: '2',
            title: 'Banana',
            description: 'Banana sticker',
            price: 12.99,
            image: 'img/banana.svg'
        },
        {
            id: '3',
            title: 'Girl',
            description: 'Girl sticker',
            price: 9.99,
            image: 'img/girl.svg'
        },
        {
            id: '4',
            title: 'Viking',
            description: 'Viking sticker',
            price: 19.99,
            image: 'img/viking.svg'
        }
    ];


    function renderProducts(products) {
        const productList = document.querySelector('.main-products__list');
        productList.innerHTML = '';
        for (const product of products) {
            productList.innerHTML += `
            <article class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3 class="product-card__h3">${product.title}</h3>
                <p class="product-card__description">${product.description}</p>
                <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                </button>
                </div>
            </article>`;
        }
    }

    renderProducts(products);

})();