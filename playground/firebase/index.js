import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBTCqdQkHGrAIjchyMfauPppoaZUubgJ2Q",
    authDomain: "vitalii-todo-app.firebaseapp.com",
    databaseURL: "https://vitalii-todo-app.firebaseio.com",
    storageBucket: "vitalii-todo-app.appspot.com",
    messagingSenderId: "155308828814"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        appName: 'Vitalii Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Vitalii',
        age: 25
    }
});

const notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

notesRef.push({
    text: 'Find work React'
});
notesRef.push({
    text: 'Order pizza'
});








//
// const notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) =>  {
//     console.log('child_added: ', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) =>  {
//     console.log('child_changed: ', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) =>  {
//     console.log('child_removed: ', snapshot.key, snapshot.val());
// });
//
// let newNoteRef = notesRef.push({
//     text: 'Walk with dog!'
// });
//
// console.log('Todo id: ', newNoteRef.key);
//
// notesRef.push({
//     text: 'Wash dishes!'
// });
//







//--------------------------- on() listener -----------------------------
// firebaseRef.on('value', (snapshot) => {
//     console.log('Got value:', snapshot.val());
// });

// const logUserDate = (snapshot) => {
//     console.log('Users ref changed:', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logUserDate);
// firebaseRef.update({
//     'user/name': 'Mike'
// });
// firebaseRef.child('app').update({
//     appName: 'Todo Application'
// });



// ----------------------------once()-----------------------------------
//----------------------- for getting data section ---------------------
// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });


//-------------------------remove, update-------------------------------
// firebaseRef.update({
//     isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.update({
//     'app/appName': 'Todo Application',
//     'user/name': 'Mike'
// });


// firebaseRef.child('app').update({
//     appName: 'Todo Application'
// }).then(() => {
//     console.log('Updated!');
// }, (e) => {
//     console.log('Update error: ', e);
// });

// firebaseRef.child('app/appName').remove();
// firebaseRef.child('app').update({
//     version: '2.0',
//     appName: null
// });
