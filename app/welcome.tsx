import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />

      {/* App Name */}
      <Text style={styles.title}>
        Family<Text style={styles.highlight}>Pulse</Text>
      </Text>

      {/* Tagline */}
      <Text style={styles.tagline}>Care • Connect • Protect</Text>

      {/* Login Button */}
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </Link>

      {/* Sign Up Button */}
      <Link href="/register" asChild>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </Link>

      {/* Google Login */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2F3E5C",
  },

  highlight: {
    color: "#FF5C4D",
  },

  tagline: {
    fontSize: 16,
    color: "#6C7A89",
    marginBottom: 40,
  },

  loginButton: {
    backgroundColor: "#2F6BFF",
    width: 250,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  signupButton: {
    borderWidth: 1,
    borderColor: "#2F6BFF",
    width: 250,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  signupText: {
    color: "#2F6BFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  googleButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    width: 250,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  googleText: {
    color: "#333",
    fontSize: 16,
  },
});
