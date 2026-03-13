import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

import { sendAlertNotification } from "../services/alertService";
import { speakReminder } from "../services/voiceService";

export default function MedicineResponseScreen() {
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    // Speak reminder
    speakReminder("Tumchi goli khaychi vel zhali ahe");

    const timer = setTimeout(() => {
      if (!touched) {
        sendAlertNotification();

        Alert.alert(
          "Alert Sent",
          "No interaction detected. Family members notified.",
        );
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, [touched]);

  const handleTaken = () => {
    setTouched(true);

    Alert.alert("Great!", "Medicine marked as taken.");

    router.replace("/home");
  };

  const handleNotYet = () => {
    setTouched(true);

    Alert.alert("Reminder", "Please take your medicine soon.");
  };

  return (
    <Pressable style={styles.container} onPress={() => setTouched(true)}>
      <Text style={styles.title}>Medicine Reminder</Text>

      <Text style={styles.message}>Tumchi goli khaychi vel zhali ahe 💊</Text>

      <TouchableOpacity style={styles.takenButton} onPress={handleTaken}>
        <Text style={styles.buttonText}>✔ Ho mi goli ghetli</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.notYetButton} onPress={handleNotYet}>
        <Text style={styles.buttonText}>❌ Ajun nahi</Text>
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },

  takenButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },

  notYetButton: {
    backgroundColor: "#FF5C4D",
    padding: 16,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
