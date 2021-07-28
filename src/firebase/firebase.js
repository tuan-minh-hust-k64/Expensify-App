import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyARFwVOghgfDUDkzSybwcuf_J6FOZWS4x4",
    authDomain: "expensify-app-bf4dd.firebaseapp.com",
    databaseURL: "https://expensify-app-bf4dd-default-rtdb.firebaseio.com",
    projectId: "expensify-app-bf4dd",
    storageBucket: "expensify-app-bf4dd.appspot.com",
    messagingSenderId: "904350941462",
    appId: "1:904350941462:web:f42bbc0ca7baa000739037",
    measurementId: "G-DLM51ME271"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database };

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
