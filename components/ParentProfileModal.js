import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useProfile } from "../context/ProfileContext";

export default function ParentProfileModal({ visible, close }) {
  const { saveProfile } = useProfile();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [medical, setMedical] = useState("");
  const [wake, setWake] = useState("");
  const [sleep, setSleep] = useState("");
  const [image, setImage] = useState(null);

  const [contact1, setContact1] = useState("");
  const [contact1Number, setContact1Number] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    saveProfile({
      name,
      age,
      medical,
      wake,
      sleep,
      image,
      contacts: [{ name: contact1, number: contact1Number }],
    });

    close();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Add Parent Profile</Text>

        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Age"
          style={styles.input}
          onChangeText={setAge}
        />

        <TextInput
          placeholder="Medical Problem"
          style={styles.input}
          onChangeText={setMedical}
        />

        <TextInput
          placeholder="Wakeup Time"
          style={styles.input}
          onChangeText={setWake}
        />

        <TextInput
          placeholder="Sleep Time"
          style={styles.input}
          onChangeText={setSleep}
        />

        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text>Select Profile Image</Text>
        </TouchableOpacity>

        {image && <Image source={{ uri: image }} style={styles.preview} />}

        <Text style={styles.section}>Emergency Contact</Text>

        <TextInput
          placeholder="Contact Name"
          style={styles.input}
          onChangeText={setContact1}
        />

        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          onChangeText={setContact1Number}
        />

        <TouchableOpacity style={styles.save} onPress={handleSubmit}>
          <Text style={{ color: "#fff" }}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={close}>
          <Text style={{ marginTop: 20 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },

  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },

  section: { fontWeight: "bold", marginTop: 20 },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  imageButton: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  preview: { width: 100, height: 100, marginBottom: 10 },

  save: {
    backgroundColor: "#3B6EA8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
