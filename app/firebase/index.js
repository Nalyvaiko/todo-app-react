import firebase from 'firebase';

try {
    const config = {
        apiKey: "AIzaSyBTCqdQkHGrAIjchyMfauPppoaZUubgJ2Q",
        authDomain: "vitalii-todo-app.firebaseapp.com",
        databaseURL: "https://vitalii-todo-app.firebaseio.com",
        storageBucket: "vitalii-todo-app.appspot.com",
        messagingSenderId: "155308828814"
    };

    firebase.initializeApp(config);
} catch (e) {
    console.log('Connection error', e.message);
}

export const firebaseRef = firebase.database().ref();
export default firebase;
