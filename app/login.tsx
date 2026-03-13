import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Email / Phone */}
      <TextInput placeholder="Phone number or email" style={styles.input} />

      {/* Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          style={styles.passwordInput}
        />

        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.eye}>{passwordVisible ? "🙈" : "👁"}</Text>
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.replace("/(tabs)/home")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* OR */}
      <Text style={styles.or}>OR</Text>

      {/* Google Login */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Register */}
      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.register}>
          Don’t have an account?{" "}
          <Text style={styles.registerBold}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 30,
    justifyContent: "center",
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2F3E5C",
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  passwordInput: {
    flex: 1,
    padding: 15,
  },

  eye: {
    fontSize: 18,
    backgroundColor: "#fff",
  },

  forgot: {
    alignSelf: "flex-end",
    marginBottom: 20,
    color: "#3B6EA8",
  },

  loginButton: {
    backgroundColor: "#3B6EA8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  or: {
    textAlign: "center",
    marginVertical: 15,
    color: "#888",
  },

  googleButton: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  googleText: {
    fontWeight: "600",
  },

  register: {
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },

  registerBold: {
    color: "#3B6EA8",
    fontWeight: "bold",
  },
});
