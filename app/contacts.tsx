import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

export default function EmergencyContactsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>

      <TextInput placeholder="Son / Daughter Name" style={styles.input} />

      <TextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TextInput placeholder="Relative Name" style={styles.input} />

      <TextInput
        placeholder="Relative Phone Number"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TextInput placeholder="Doctor Name" style={styles.input} />

      <TextInput
        placeholder="Doctor Phone Number"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Contacts</Text>
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
