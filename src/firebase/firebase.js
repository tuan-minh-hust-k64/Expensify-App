import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD4JBJXdxO8uHkIYSB09okqfIawyOxbmx8",
    authDomain: "tiktok-app-de47d.firebaseapp.com",
    databaseURL: "https://tiktok-app-de47d-default-rtdb.firebaseio.com",
    projectId: "tiktok-app-de47d",
    storageBucket: "tiktok-app-de47d.appspot.com",
    messagingSenderId: "1045929031526",
    appId: "1:1045929031526:web:62e6f759fd78f94c597aa7",
    measurementId: "G-7KVHTTGKPX"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();

export { firebase, database, provider };

// const onGetExpenses = database.ref('expenses').on('value', (snapshot) => {
//     const newExpenses = [];
//     snapshot.forEach((childSnapshot) => {
//         newExpenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//         })
//     })
//     console.log(newExpenses);
// })
