import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

export default function AddMedicineScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Medicine</Text>

      <TextInput placeholder="Medicine Name" style={styles.input} />

      <TextInput placeholder="Pill Color (e.g. Yellow)" style={styles.input} />

      <TextInput placeholder="Pill Shape (e.g. Round)" style={styles.input} />

      <TextInput placeholder="Dosage (e.g. 500mg)" style={styles.input} />

      <TextInput
        placeholder="Reminder Time (e.g. 8:00 AM)"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Medicine</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2F3E5C",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2F6BFF",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
