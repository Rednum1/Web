// script.js
// Ваша конфігурація Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDWKmMXZ0tFukxfEhio2MGxtk0zhkuyzk0",
    authDomain: "auth-9f5a5.firebaseapp.com",
    projectId: "auth-9f5a5",
    storageBucket: "auth-9f5a5.appspot.com",
    messagingSenderId: "463974212623",
    appId: "1:463974212623:web:adcf7649f265a6538a6f7a"
};

// Ініціалізація Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Посилання на HTML елементи
const openPopup = document.getElementById("openPopup");
const loginPopup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");
const loginButton = document.getElementById("login");
const feedbackPopup = document.getElementById("feedbackPopup");
const userInfo = document.getElementById("userInfo");
const feedbackText = document.getElementById("feedbackText");
const sendFeedback = document.getElementById("sendFeedback");

// Відкрити вікно входу при натисканні на посилання
openPopup.addEventListener("click", () => {
    loginPopup.style.display = "block";
});

// Закрити вікно входу при натисканні на кнопку "Закрити"
closePopup.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

// Автентифікація через Google
loginButton.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            // Відобразити вікно відгуку
            loginPopup.style.display = "none";
            feedbackPopup.style.display = "block";
            // Відобразити ім'я користувача
            userInfo.textContent = `Ласкаво просимо, ${result.user.displayName}`;
        })
        .catch((error) => {
            console.error(error);
        });
});

// Відправити відгук
sendFeedback.addEventListener("click", () => {
    const feedback = feedbackText.value.trim();
    if (feedback !== "") {
        // Додати код для відправки відгуку на сервер (наприклад, в базу даних Firestore)
        // feedback зберігає текст відгуку, а result.user.uid можна використовувати як ідентифікатор користувача

        // Приклад додавання відгуку в Firestore
        db.collection("feedbacks")
            .add({
                text: feedback,
                userId: result.user.uid, // ідентифікатор користувача
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log("Відгук успішно відправлено!");
            })
            .catch((error) => {
                console.error("Помилка при відправці відгуку:", error);
            });
    }
});

document.getElementById('closeFeedback').addEventListener('click', function () {
    document.getElementById('feedbackPopup').style.display = 'none';
});
