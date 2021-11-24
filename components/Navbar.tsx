
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { UIContext, Orientation } from "../store/UIContext";

function OrientationToggle() {
  const { orientation, setOrientation } = useContext(UIContext);
  const toggleValue: Orientation = orientation === 'portrait' ? 'landscape' : 'portrait';

  const onToggle = () => {
    setOrientation(toggleValue);
  }

  return <span onClick={onToggle} style={{ cursor: 'pointer' }}>{toggleValue}</span>
}

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.reload();
  };

  return (
    <nav className="navbar">
      <ul>
      <li>
          <Link href="/">
            <button className="btn-logo">Reactive Image</button>
          </Link>
        </li>
        <li>
          <OrientationToggle />
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <button onClick={signOut}>Sign Out</button>
            </li>
            <li>
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || "/hacker.png"} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
