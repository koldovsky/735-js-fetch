(async function() {
    
    let rate = 1;
    let currencies;
    const response = await fetch('api/products.json');
    const products = await response.json();
    renderProducts(products);

    // fetch('api/products.json')
    //   .then( response => response.json() )
    //   .then( products => renderProducts(products) );

    // ajax
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.status === 200 && xhr.readyState === 4) {
    //         const products = JSON.parse(xhr.responseText);
    //         renderProducts(products);
    //     }
    // }
    // xhr.open('get', 'api/products.json', true);
    // xhr.send();

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
                    Buy - ${(product.price * rate).toFixed(2)}
                </button>
                </div>
            </article>`;
        }
    }

    async function convertCurrency() {
        if (!currencies) {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            currencies = await response.json();
        }
        const currencyTo = document.querySelector('.currency-to').value;
        rate = currencies.rates[currencyTo];
        renderProducts(products);
    }

    document.querySelector('.currency__button').addEventListener('click', convertCurrency);

})();