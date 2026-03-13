import * as Notifications from "expo-notifications";

export async function sendAlertNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "⚠ Elder Not Responding",
      body: "The elder has not responded to the medicine reminder. Please check immediately.",
      sound: true,
    },
    trigger: null, // send immediately
  });
}
