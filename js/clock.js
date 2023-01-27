(function() {
    
    function updateClock() {
        const clockContainer = document.querySelector('.header__clock');
        clockContainer.style.color = 'red';
        clockContainer.classList.add('highlight');
        clockContainer.innerText = new Date().toLocaleTimeString('uk');        
    }

    setInterval(updateClock, 1000);

})();
