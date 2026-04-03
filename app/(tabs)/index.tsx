// File: app/(tabs)/index.tsx

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { useFetch } from "../../hooks/useFetch";

export default function HomeScreen() {
  const { data: activities, loading, error } = useFetch("/activities");

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activities</Text>

      <FlatList
        data={activities || []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.activityCard}>
            <Text style={styles.activityTitle}>
              {item?.title || "No Title"}
            </Text>
            <Text style={styles.activityDescription}>
              {item?.description || "No Description"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: COLORS.text,
  },
  activityCard: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },
  activityDescription: {
    fontSize: 14,
    color: COLORS.lightText,
    marginTop: 4,
  },
  error: {
    color: COLORS.error,
    fontSize: 16,
  },
});
