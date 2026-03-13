import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function scheduleMedicineReminder(name, time) {
  try {
    // 🚫 Notifications not supported on web
    if (Platform.OS === "web") {
      console.log("Notification scheduling skipped on web");
      return;
    }

    const [hours, minutes] = time.split(":");

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Medicine Reminder 💊",
        body: `Time to take ${name}`,
      },
      trigger: {
        hour: parseInt(hours),
        minute: parseInt(minutes),
        repeats: true,
      },
    });
  } catch (error) {
    console.log("Reminder scheduling error:", error);
  }
}
