import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router } from "expo-router";
import { useEffect } from "react";

import { useMedicines } from "../../context/MedicineContext";
import { useProfile } from "../../context/ProfileContext";

import { startFallDetection } from "../../services/fallDetectionService";

export default function Dashboard() {
  const { medicines } = useMedicines();
  const { profile } = useProfile();

  useEffect(() => {
    startFallDetection();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>FamilyPulse</Text>

      {/* Parent Profile */}
      {profile && (
        <View style={styles.profileCard}>
          {profile.image && (
            <Image source={{ uri: profile.image }} style={styles.avatar} />
          )}

          <View>
            <Text style={styles.name}>{profile.name}</Text>
            <Text>{profile.age} years</Text>
            <Text>{profile.medical}</Text>
          </View>
        </View>
      )}

      {/* Today's Schedule */}
      <View style={styles.scheduleCard}>
        <Text style={styles.sectionTitle}>Today's Schedule</Text>

        {medicines.length === 0 ? (
          <Text>No medicines added yet</Text>
        ) : (
          medicines
            .filter((med) => med.active)
            .map((med) => (
              <View key={med.id} style={styles.scheduleItem}>
                {med.image && (
                  <Image
                    source={{ uri: med.image }}
                    style={styles.medicineImage}
                  />
                )}

                <View style={{ flex: 1 }}>
                  <Text style={styles.medicineName}>💊 {med.name}</Text>
                  <Text>{med.time}</Text>
                  <Text style={styles.meta}>Color: {med.color}</Text>
                  <Text style={styles.meta}>Size: {med.size}</Text>
                </View>
              </View>
            ))
        )}
      </View>

      {/* Emergency Contacts */}
      {profile?.contacts && profile.contacts.length > 0 && (
        <View style={styles.contactCard}>
          <Text style={styles.sectionTitle}>Emergency Contacts</Text>

          {profile.contacts.map((c, index) => (
            <View key={index} style={styles.contactRow}>
              {c.image && (
                <Image source={{ uri: c.image }} style={styles.contactImage} />
              )}

              <View style={{ flex: 1 }}>
                <Text style={styles.contactName}>{c.name}</Text>
                <Text style={styles.contactPhone}>{c.phone}</Text>
              </View>

              <Text style={{ fontSize: 18 }}>📞</Text>
            </View>
          ))}
        </View>
      )}

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.addMedicine}
          onPress={() => router.push("/medicines")}
        >
          <Text style={styles.buttonText}>+ Add Medicine</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push("/profile")}
        >
          <Text style={styles.buttonText}>Parent Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  scheduleCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  scheduleItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },

  medicineImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },

  medicineName: {
    fontWeight: "bold",
  },

  meta: {
    fontSize: 12,
    color: "#777",
  },

  contactCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },

  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  contactName: {
    fontWeight: "bold",
  },

  contactPhone: {
    color: "#666",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  addMedicine: {
    backgroundColor: "#3B6EA8",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },

  profileButton: {
    backgroundColor: "#6BC2B7",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
