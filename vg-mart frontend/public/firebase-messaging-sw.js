/* eslint-disable no-undef */
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// import firebase from "firebase/compat/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyBCV3ubnz6aJUb7kLy6UHHgX3gbRTn75A4",
//     authDomain: "quikley-testing.firebaseapp.com",
//     projectId: "quikley-testing",
//     storageBucket: "quikley-testing.appspot.com",
//     messagingSenderId: "210941745008",
//     appId: "1:210941745008:web:dda92fa2f80eb8a29661b5",
//     measurementId: "G-VJF9QQJ6G7"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//     console.log('Received background message ', payload);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);
// });
// Import the Firebase libraries
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
// import firebase from "firebase/compat/app";
// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCV3ubnz6aJUb7kLy6UHHgX3gbRTn75A4",
    authDomain: "quikley-testing.firebaseapp.com",
    projectId: "quikley-testing",
    storageBucket: "quikley-testing.appspot.com",
    messagingSenderId: "210941745008",
    appId: "1:210941745008:web:dda92fa2f80eb8a29661b5",
    measurementId: "G-VJF9QQJ6G7"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    // Customize the notification here
    self.registration.showNotification('Background Message Title', {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    });
});

