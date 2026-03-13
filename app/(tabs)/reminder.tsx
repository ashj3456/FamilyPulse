import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  cancelAllReminders,
  requestNotificationPermission,
  scheduleMedicineReminder,
} from "../../services/reminderService";

export default function ReminderScreen() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const setReminders = async () => {
    await cancelAllReminders();

    // Morning pill
    await scheduleMedicineReminder(
      "Morning Medicine 💊",
      "Please take your morning medicine",
      8,
      0,
    );

    // Afternoon pill
    await scheduleMedicineReminder(
      "Afternoon Medicine 💊",
      "Please take your afternoon medicine",
      14,
      0,
    );

    // Night pill
    await scheduleMedicineReminder(
      "Night Medicine 💊",
      "Please take your night medicine",
      21,
      0,
    );

    alert("Reminders Scheduled!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicine Reminders</Text>

      <TouchableOpacity style={styles.button} onPress={setReminders}>
        <Text style={styles.buttonText}>Activate Daily Reminders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#E74C3C" }]}
        onPress={cancelAllReminders}
      >
        <Text style={styles.buttonText}>Cancel Reminders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#3B6EA8",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
