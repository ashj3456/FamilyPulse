import { Accelerometer } from "expo-sensors";
import { Alert, Platform } from "react-native";
import { sendAlertNotification } from "./alertService";

let subscription = null;

export function startFallDetection() {
  // 🚫 Sensors don't work on web
  if (Platform.OS === "web") {
    console.log("Fall detection disabled on web");
    return;
  }

  Accelerometer.setUpdateInterval(500);

  subscription = Accelerometer.addListener((data) => {
    const { x, y, z } = data;

    const acceleration = Math.sqrt(x * x + y * y + z * z);

    // Simple fall detection threshold
    if (acceleration > 2.2) {
      Alert.alert(
        "Fall Detected!",
        "Are you okay?",
        [
          {
            text: "I'm OK",
            style: "cancel",
          },
          {
            text: "Send Alert",
            onPress: () => sendAlertNotification(),
          },
        ],
        { cancelable: false },
      );
    }
  });
}

export function stopFallDetection() {
  if (subscription) {
    subscription.remove();
    subscription = null;
  }
}
