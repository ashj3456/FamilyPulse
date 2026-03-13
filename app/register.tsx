import { Link } from "expo-router";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput placeholder="Full Name" style={styles.input} />

      <TextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Link href="/login" style={styles.loginText}>
        Already have an account? Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2F6BFF",
    marginBottom: 40,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2F6BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  loginText: {
    marginTop: 20,
    textAlign: "center",
    color: "#2F6BFF",
  },
});
