import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useNotification from "./hooks/useNotification";
import NotificationButton from "./components/NotificationButton";
import { requestToken } from "./firebase";

function App() {
  
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