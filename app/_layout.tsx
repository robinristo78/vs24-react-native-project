// app/_layout.tsx (Root Layout)
import { Stack, Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Slot /> {/* <-- siin renderitakse index.tsx ja kõik alamroute’id */}
      </Stack>
    </SafeAreaProvider>
  );
}
