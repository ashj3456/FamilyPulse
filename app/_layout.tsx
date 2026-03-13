import { Stack } from "expo-router";
import { MedicineProvider } from "../context/MedicineContext";

export default function RootLayout() {
  return (
    <MedicineProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </MedicineProvider>
  );
}
