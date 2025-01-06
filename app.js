// Új hirdetés hozzáadása
const newAdForm = document.getElementById('new-ad-form');
const adsContainer = document.getElementById('ads-container');

newAdForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Form mezők értékeinek lekérése
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Új hirdetés létrehozása
    const adElement = document.createElement('div');
    adElement.classList.add('ad');
    adElement.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button class="interest-button" data-ad-title="${title}">Érdeklődés</button>
    `;

    // Hirdetés hozzáadása az oldalhoz
    adsContainer.appendChild(adElement);

    // Form ürítése
    newAdForm.reset();
});

// Érdeklődés gomb eseménykezelése
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('interest-button')) {
        const adTitle = event.target.getAttribute('data-ad-title');
        const userName = prompt('Adja meg a nevét:');
        const userAddress = prompt('Adja meg a címét:');
        const userPhone = prompt('Adja meg a telefonszámát:');

        if (userName && userAddress && userPhone) {
            // mailto link létrehozása
            const mailtoLink = `mailto:geltam813@outlook.com?subject=Érdeklődés: ${encodeURIComponent(adTitle)}&body=${encodeURIComponent(
                `Név: ${userName}\nCím: ${userAddress}\nTelefonszám: ${userPhone}`
            )}`;
            
            // Mailto link megnyitása
            window.location.href = mailtoLink;
        } else {
            alert('Kérjük, adja meg az összes adatot!');
        }
    }
});
