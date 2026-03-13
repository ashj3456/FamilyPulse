import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/login");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>FamilyPulse</Text>
      <Text style={styles.tagline}>Care • Connect • Protect</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FB",
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  tagline: {
    color: "#777",
    marginTop: 10,
  },
});
