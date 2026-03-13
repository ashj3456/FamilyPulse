import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { MedicineProvider } from "../../context/MedicineContext";
import { ProfileProvider } from "../../context/ProfileContext";

export default function TabLayout() {
  return (
    <MedicineProvider>
      <ProfileProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#3B6EA8",
            tabBarStyle: {
              height: 60,
            },
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="medicines"
            options={{
              title: "Medicines",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="medkit" size={size} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="reminders"
            options={{
              title: "Reminders",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="notifications" size={size} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </ProfileProvider>
    </MedicineProvider>
  );
}
