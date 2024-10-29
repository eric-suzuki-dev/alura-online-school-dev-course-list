import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastDisplay from "../components/ToastDisplay";
import { onMessageListener } from "../firebase";

const useFirebaseNotification = () => {
  const [notification, setNotification] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const notify = () =>
      toast(<ToastDisplay notification={notification} />, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
      });

    if (notification.title) {
      notify();
    }
  }, [notification]);

  useEffect(() => {
    const handleMessage = (payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    };

    onMessageListener()
      .then(handleMessage)
      .catch((err) => console.log(err));
  }, []);

  return {};
};

export default useFirebaseNotification;