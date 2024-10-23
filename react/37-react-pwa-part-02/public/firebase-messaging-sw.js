/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBNKd-6yytJdYIsIUJ-snCBhtW9UjW2SrQ",
  authDomain: "jornada-milhas-5e978.firebaseapp.com",
  projectId: "jornada-milhas-5e978",
  storageBucket: "jornada-milhas-5e978.appspot.com",
  messagingSenderId: "136000404056",
  appId: "1:136000404056:web:618801f68d228e71faa82d",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Notificação em segundo plano", payload.notification);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});