// app/_layout.tsx (Root Layout)
import { Stack, Slot, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();
  const isSignedIn = false; // toggle true/false

  useEffect(() => {
    const redirect = async () => {
      // wait a tick to ensure Root Layout is mounted
      await new Promise((resolve) => setTimeout(resolve, 0));

      if (!isSignedIn) {
        router.replace("/auth/Splash");
      } else {
        router.replace("/auth/Home");
      }
    };
    
    redirect();
  }, [router]);

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Slot /> {/* <-- siin renderitakse index.tsx ja kõik alamroute’id */}
      </Stack>
    </SafeAreaProvider>
  );
}
