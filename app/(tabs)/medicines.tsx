import {
    FlatList,
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

import { useMedicines } from "../../context/MedicineContext";

export default function MedicinesScreen() {
  const { medicines, addMedicine, toggleMedicineStatus } = useMedicines();

  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAddMedicine = () => {
    addMedicine({
      id: Date.now(),
      name,
      time,
      color,
      size,
      image,
      active: true,
    });

    setModalVisible(false);

    setName("");
    setTime("");
    setColor("");
    setSize("");
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Medicines</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Medicine List */}

      <FlatList
        data={medicines}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.time}</Text>
              <Text>Color: {item.color}</Text>
              <Text>Size: {item.size}</Text>
              <Text>Status: {item.active ? "Active" : "Inactive"}</Text>
            </View>

            <TouchableOpacity onPress={() => toggleMedicineStatus(item.id)}>
              <Text style={{ color: "blue" }}>Toggle</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Medicine Popup */}

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.title}>Add Medicine</Text>

          <TextInput
            placeholder="Medicine Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Time (8:00 AM)"
            style={styles.input}
            value={time}
            onChangeText={setTime}
          />

          <TextInput
            placeholder="Color"
            style={styles.input}
            value={color}
            onChangeText={setColor}
          />

          <TextInput
            placeholder="Size"
            style={styles.input}
            value={size}
            onChangeText={setSize}
          />

          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            <Text>Select Medicine Image</Text>
          </TouchableOpacity>

          {image && <Image source={{ uri: image }} style={styles.preview} />}

          <TouchableOpacity style={styles.save} onPress={handleAddMedicine}>
            <Text style={{ color: "#fff" }}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ marginTop: 20 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  name: {
    fontWeight: "bold",
  },

  modal: {
    flex: 1,
    padding: 30,
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
  },
});
