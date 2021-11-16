import { auth, firestore } from "../lib/firebase";
import { doc, onSnapshot, } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUserName] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      unsubscribe = onSnapshot(doc(firestore, "users", user.uid), (doc) => {
        console.log(doc.data());
        setUserName(doc.data()?.username);
      });
    } else {
        setUserName(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}
