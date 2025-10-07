// app/index.tsx
// Ei renderdata Splash otse, jäta tühjaks või tee redirect
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    // TODO: kontrolli autentimist
    const isSignedIn = false; // testimiseks toggle true/false

    if (isSignedIn) {
      router.replace("./tabs/Home"); // viib Tabs layouti (Home)
    } else {
      router.replace("./auth/Splash"); // auth flow
    }
  }, []);

  return null; // ei renderda midagi, ainult redirect
}
