import { useEffect } from "react";

const useNotification = () => {
  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      alert("Permissão não concedida");
    }
  };

  const sendNotification = (title, options) => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else {
      alert("Permissão para notificações não concedida");
    }
  };

  const sendTestNotification = () => {
    const options = {
      body: "Notificação teste",
      icon: "/icon-192x192.png",
    };
    sendNotification("Titulo legal", options);
  };

  useEffect(() => {
    requestNotificationPermission();
  });

  return { sendTestNotification };
};

export default useNotification;