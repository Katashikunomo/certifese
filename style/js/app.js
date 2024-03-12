function viweMessage() {
    var tarjeta = event.currentTarget.parentElement;
    tarjeta.classList.toggle("show-back");
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function toggleCard(card) {
    card.classList.toggle("show-back");
}

function setupCardEvents() {
    var tarjetas = document.querySelectorAll('.tarjeta-wrap');

    function handleCardVisibility() {
        tarjetas.forEach(function (tarjeta) {
            if (isElementInViewport(tarjeta)) {
                toggleCard(tarjeta);
            }
        });
    }

    document.addEventListener('scroll', handleCardVisibility);
    window.addEventListener('resize', handleCardVisibility);

    tarjetas.forEach(function (tarjeta) {
        tarjeta.addEventListener('click', function () {
            toggleCard(tarjeta);
        });

        tarjeta.addEventListener('mouseover', function () {
            toggleCard(tarjeta);
        });

        tarjeta.addEventListener('mouseout', function () {
            toggleCard(tarjeta);
        });
    });

    // Llama a la función handleCardVisibility cuando la página se carga
    document.addEventListener('DOMContentLoaded', handleCardVisibility);
}

// Llama a la función setupCardEvents cuando la página se carga
document.addEventListener('DOMContentLoaded', setupCardEvents);
