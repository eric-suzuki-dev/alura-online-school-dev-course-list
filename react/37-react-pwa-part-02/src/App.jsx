import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useNotification from "./hooks/useNotification";
import NotificationButton from "./components/NotificationButton";
import { onMessageListener, requestToken } from "./firebase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    onMessageListener();
  }, []);
  return (
    <>
      <Header />
      <NotificationButton action={requestToken} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;