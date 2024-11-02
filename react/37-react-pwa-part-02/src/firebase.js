// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNKd-6yytJdYIsIUJ-snCBhtW9UjW2SrQ",
  authDomain: "jornada-milhas-5e978.firebaseapp.com",
  projectId: "jornada-milhas-5e978",
  storageBucket: "jornada-milhas-5e978.appspot.com",
  messagingSenderId: "136000404056",
  appId: "1:136000404056:web:618801f68d228e71faa82d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BPfatJ-3HYZ-NvW1Bn4UEgrHiT-simYQT3VsevfJPvXuJUE_FLeJoXHgywDImJqXE4Xtp0oQvQqOJrnLUvFDiVs",
    });
    if (currentToken) {
      console.log(currentToken);
    } else {
      console.log("Nenhum token recebido");
    }
  } catch (err) {
    console.log(err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Notificação em primeiro plano", payload.notification);
      resolve(payload);
    });
  });