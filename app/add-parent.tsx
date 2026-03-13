import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Colors } from "../constants/colors";

export default function AddParent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Parent Profile</Text>

      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Age" style={styles.input} />
      <TextInput placeholder="Medical Conditions" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  button: {
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
