import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import { useProfile } from "../../context/ProfileContext";

export default function ProfileScreen() {
  const { profile, saveProfile } = useProfile();

  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState(profile?.name || "");
  const [age, setAge] = useState(profile?.age || "");
  const [medical, setMedical] = useState(profile?.medical || "");
  const [wake, setWake] = useState(profile?.wake || "");
  const [sleep, setSleep] = useState(profile?.sleep || "");
  const [image, setImage] = useState(profile?.image || null);

  const [contact1Name, setContact1Name] = useState("");
  const [contact1Phone, setContact1Phone] = useState("");
  const [contact1Image, setContact1Image] = useState(null);

  const [contact2Name, setContact2Name] = useState("");
  const [contact2Phone, setContact2Phone] = useState("");
  const [contact2Image, setContact2Image] = useState(null);

  const [contact3Name, setContact3Name] = useState("");
  const [contact3Phone, setContact3Phone] = useState("");
  const [contact3Image, setContact3Image] = useState(null);

  const pickImage = async (setImageFunc) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImageFunc(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    saveProfile({
      name,
      age,
      medical,
      wake,
      sleep,
      image,
      contacts: [
        { name: contact1Name, phone: contact1Phone, image: contact1Image },
        { name: contact2Name, phone: contact2Phone, image: contact2Image },
        { name: contact3Name, phone: contact3Phone, image: contact3Image },
      ],
    });

    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Parent Profile</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            {profile ? "✎" : "+"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Profile Display */}
      {profile ? (
        <View style={styles.card}>
          {profile.image && (
            <Image source={{ uri: profile.image }} style={styles.avatar} />
          )}

          <Text style={styles.name}>{profile.name}</Text>
          <Text>{profile.age} years</Text>
          <Text>{profile.medical}</Text>

          <Text style={styles.meta}>Wake up: {profile.wake}</Text>
          <Text style={styles.meta}>Sleep: {profile.sleep}</Text>

          {/* Emergency Contacts */}
          {profile.contacts && (
            <View style={{ marginTop: 20 }}>
              <Text style={styles.contactTitle}>Emergency Contacts</Text>

              {profile.contacts.map((c, index) => (
                <View key={index} style={styles.contactRow}>
                  {c.image && (
                    <Image
                      source={{ uri: c.image }}
                      style={styles.contactImg}
                    />
                  )}

                  <View>
                    <Text>{c.name}</Text>
                    <Text>{c.phone}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      ) : (
        <Text>No parent profile added yet</Text>
      )}

      {/* Popup Form */}
      <Modal visible={modalVisible} animationType="slide">
        <ScrollView contentContainerStyle={styles.modal}>
          <Text style={styles.formTitle}>Add Parent Profile</Text>

          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Age"
            style={styles.input}
            value={age}
            onChangeText={setAge}
          />

          <TextInput
            placeholder="Medical Problem"
            style={styles.input}
            value={medical}
            onChangeText={setMedical}
          />

          <TextInput
            placeholder="Wakeup Time"
            style={styles.input}
            value={wake}
            onChangeText={setWake}
          />

          <TextInput
            placeholder="Sleeping Time"
            style={styles.input}
            value={sleep}
            onChangeText={setSleep}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => pickImage(setImage)}
          >
            <Text>Select Profile Image</Text>
          </TouchableOpacity>

          {image && <Image source={{ uri: image }} style={styles.preview} />}

          {/* Emergency Contacts */}

          <Text style={styles.contactTitle}>Emergency Contact 1</Text>

          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={setContact1Name}
          />

          <TextInput
            placeholder="Phone"
            style={styles.input}
            onChangeText={setContact1Phone}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => pickImage(setContact1Image)}
          >
            <Text>Select Image</Text>
          </TouchableOpacity>

          <Text style={styles.contactTitle}>Emergency Contact 2</Text>

          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={setContact2Name}
          />

          <TextInput
            placeholder="Phone"
            style={styles.input}
            onChangeText={setContact2Phone}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => pickImage(setContact2Image)}
          >
            <Text>Select Image</Text>
          </TouchableOpacity>

          <Text style={styles.contactTitle}>Emergency Contact 3</Text>

          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={setContact3Name}
          />

          <TextInput
            placeholder="Phone"
            style={styles.input}
            onChangeText={setContact3Phone}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => pickImage(setContact3Image)}
          >
            <Text>Select Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.save} onPress={handleSave}>
            <Text style={{ color: "#fff" }}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ marginTop: 20 }}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FB",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  addButton: {
    backgroundColor: "#3B6EA8",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  meta: {
    color: "#666",
    marginTop: 5,
  },

  contactTitle: {
    marginTop: 20,
    fontWeight: "bold",
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  contactImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  modal: {
    padding: 30,
    paddingBottom: 80,
  },

  formTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  imageButton: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  preview: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  save: {
    backgroundColor: "#3B6EA8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
});
