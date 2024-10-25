import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastDisplay from "../components/ToastDisplay";

const useFirebaseNotification = () => {
  const [notification, setNotification] = useState({
    title: "",
    body: "",
  });

  const notify = () => toast(<ToastDisplay notification={notification} />);

  return {};
};

export default useFirebaseNotification;