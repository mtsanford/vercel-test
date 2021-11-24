import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";
import UIContextProvider from "../store/UIContext";

import "../styles/globals.css";
import "react-essentialrect/dist/essentialrect-img.css";

function MyApp({ Component, pageProps }) {
  const { user, username } = useUserData();

  return (
    <UIContextProvider>
      <UserContext.Provider value={{ user, username }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </UIContextProvider>
  );
}

export default MyApp;
