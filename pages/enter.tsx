// import { auth, googleAuthProvider} from '../lib/firebase';

import { app } from '../lib/firebase';


import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export default function EnterPage({}) {
  const user = null;
  const username = null;

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />

  return (
    <main>
      {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
    </main>
  );

  // Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    console.log(app);

    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  return (
    <>
      <button className="btn-google" onClick={signInWithGoogle}>
        <img src={'/google.png'} width="30px" /> Sign in with Google
      </button>
      {/* <button onClick={() => auth.signInAnonymously()}>
        Sign in Anonymously
      </button> */}
    </>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
}

