// IIFE
(function () {

    function getRandomMessage() {
        const messages = [
            'STICKERSHOP',
            'BUY TODAY',
            'COOL STICKERS',
            'BEST STICKERS'
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    const headerH1 = document.querySelector('.header-banner__h1');

    setInterval( () => headerH1.innerText = getRandomMessage(), 3000);

})();