import * as Notifications from "expo-notifications";

export const registerForPushNotifications = async () => {
  await Notifications.requestPermissionsAsync();
};
