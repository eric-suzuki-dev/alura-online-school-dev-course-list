import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useNotification from "./hooks/useNotification";
import NotificationButton from "./components/NotificationButton";
import { onMessageListener, requestToken } from "./firebase";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    onMessageListener();
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
      <NotificationButton action={requestToken} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;