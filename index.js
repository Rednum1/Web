import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDWKmMXZ0tFukxfEhio2MGxtk0zhkuyzk0",
  authDomain: "auth-9f5a5.firebaseapp.com",
  projectId: "auth-9f5a5",
  storageBucket: "auth-9f5a5.appspot.com",
  messagingSenderId: "463974212623",
  appId: "1:463974212623:web:adcf7649f265a6538a6f7a"
}

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'reviews')

getDocs(colRef)
.then(snapshot => {
  let reviews = []
  snapshot.docs.forEach(doc => {
      reviews.push({ ...doc.data(), id: doc.id })
  })
  console.log(reviews)
})
.catch(err => {
  console.log(err.message)
})

let activePopup = null;

document.getElementById('openPopup').addEventListener('click', function () {
    
    if (!activePopup) {
        showPopup();
    }
});

function showPopup() {
    if (activePopup) {
        document.body.removeChild(activePopup);
        activePopup = null;
    }

    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContent.innerHTML = `
        <h2>Напишіть свій відгук</h2>
        <div id="popupInput"></div>
        <textarea rows="4" cols="50" placeholder="Type something..."></textarea><br />
        <button id="closePopup">Submit</button>
        <button id="closePopup">Close</button>
        <!--<form class="add">
        <label for="author">Author:</label>
        <input type="text" name="author" required>
        <label for="title">Title:</label>
        <input type="text" id="title" required>
        <button>add a new book</button>-->
      </form>
    `;

    const popupInputContainer = popupContent.querySelector('#popupInput');
    popupInputContainer.innerHTML = loadPopupInputHtml();

    const closePopupButton = popupContent.querySelector('#closePopup');
    closePopupButton.addEventListener('click', function () {
        document.body.removeChild(popupContainer);
        activePopup = null;
    });

    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);

    activePopup = popupContainer;
}

function loadPopupInputHtml() {
    const xhr = new XMLHttpRequest();
    //xhr.send();
    return xhr.responseText;
}

function selectOption() {
    const selectElement = document.getElementById('options');
    const selectedOption = selectElement.options[selectElement.selectedIndex].text;
    console.log('Вибрано:', selectedOption);
    const selectedOptionText = selectedOption;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Вибрано: ${selectedOptionText}`;
  }

const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  })
  .then(() => {
    addBookForm.reset()
  })
})

