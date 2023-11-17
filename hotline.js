function createPopup() {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    
    const closeButton = document.createElement('span');
    closeButton.id = 'closePopupButton';
    closeButton.innerHTML = '&times;';
    
    const popupContent = document.createElement('div');
    popupContent.id = 'popupContent';
    
    popupContainer.appendChild(closeButton);
    popupContainer.appendChild(popupContent);
    
    document.body.appendChild(popupContainer);

    // Обробник події для закриття вікна
    closeButton.addEventListener('click', closePopup);

    return popupContainer;
}

// Функція для відображення вікна
function showPopup() {
    const popupContainer = createPopup();
    // Додайте вміст вікна за вашими потребами
    popupContainer.querySelector('#popupContent').innerHTML = `
        <h2>Вітаємо, користувач!</h2>
        <textarea id="reviewText" rows="5" placeholder="Напишіть ваш відгук"></textarea>
        <button id="submitReview">Відправити</button>
    `;

    // Додайте обробник події для відправлення відгуку
    const submitButton = popupContainer.querySelector('#submitReview');
    submitButton.addEventListener('click', submitReview);
}

// Функція для закриття вікна
function closePopup() {
    const popupContainer = document.querySelector('.popup-container');
    if (popupContainer) {
        popupContainer.remove();
    }
}

// Функція для відправлення відгуку
function submitReview() {
    const reviewText = document.getElementById('reviewText').value;
    // Виклик функції для збереження відгуку в Firebase
    addReview(reviewText);
}

// Функція для додавання відгуку в Firebase
function addReview(reviewText) {
    // Код для додавання відгуку в Firebase
    console.log('Відгук додано:', reviewText);
}
 
// Обробник події для відкриття вікна при кліку на кнопку
document.getElementById('openPopupButton').addEventListener('click', showPopup);

