const auth = firebase.auth();

// Обробник для кнопки реєстрації
document.getElementById('signup-button').addEventListener('click', () => {
    const email = 'user@example.com';
    const password = 'password123';

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Користувач успішно зареєстрований:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Помилка реєстрації:', errorCode, errorMessage);
        });
});

// Обробник для кнопки входу через Google
document.getElementById('google-signin-button').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            console.log('Вхід через Google успішний:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Помилка входу через Google:', errorCode, errorMessage);
        });
});
