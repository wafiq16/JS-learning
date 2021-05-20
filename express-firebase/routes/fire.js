var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBZJaB5xy2Rb372D0it5tHuvsAQj7DwHW0",
    authDomain: "coba-node-js.firebaseapp.com",
    databaseURL: "https://coba-node-js-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "coba-node-js",
    storageBucket: "coba-node-js.appspot.com",
    messagingSenderId: "731344074813",
    appId: "1:731344074813:web:b73ce4d5e2bcb548995254",
    measurementId: "G-REGG8HRLRL"
};

var fire = firebase.initializeApp(config);


module.exports = fire;