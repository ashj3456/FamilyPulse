import { router } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Colors } from "../constants/colors";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FamilyPulse</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Yellow Pill Reminder</Text>
        <Text>Take your yellow pill now!</Text>
      </View>

      <Text style={styles.section}>Today's Schedule</Text>

      <View style={styles.schedule}>
        <Text>Red Pill — 8:00 AM</Text>
        <Text>Yellow Pill — 2:00 PM</Text>
        <Text>Blue Pill — 9:00 PM</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/add-medicine")}
      >
        <Text style={styles.buttonText}>+ Add Medicine</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF3E0",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },

  section: {
    fontSize: 18,
    marginBottom: 10,
  },

  schedule: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
  },

  button: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
