import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useMedicines } from "../context/MedicineContext";

export default function AddMedicineModal({ visible, close }: any) {
  const { addMedicine } = useMedicines();

  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState<any>(null);

  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveMedicine = () => {
    if (!name) return;

    addMedicine({
      id: Date.now().toString(),
      name,
      color,
      size,
      time: time.toLocaleTimeString(),
      image,
      active: true,
    });

    close();
  };

  const colors = ["Red", "Yellow", "Blue", "Green"];

  const sizes = ["Small", "Medium", "Large"];

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Add Medicine</Text>

          <TextInput
            placeholder="Medicine Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          {/* Color Picker */}
          <Text style={styles.label}>Select Color</Text>
          <View style={styles.row}>
            {colors.map((c) => (
              <TouchableOpacity
                key={c}
                style={[styles.colorBtn, color === c && styles.selected]}
                onPress={() => setColor(c)}
              >
                <Text>{c}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Size Picker */}
          <Text style={styles.label}>Select Size</Text>
          <View style={styles.row}>
            {sizes.map((s) => (
              <TouchableOpacity
                key={s}
                style={[styles.sizeBtn, size === s && styles.selected]}
                onPress={() => setSize(s)}
              >
                <Text>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Time Picker */}
          <Text style={styles.label}>Select Time</Text>

          <TouchableOpacity
            style={styles.timeBtn}
            onPress={() => setShowPicker(true)}
          >
            <Text>{time.toLocaleTimeString()}</Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={time}
              mode="time"
              onChange={(event, selected) => {
                setShowPicker(false);
                if (selected) setTime(selected);
              }}
            />
          )}

          {/* Image Picker */}
          <Text style={styles.label}>Upload Medicine Photo</Text>

          <TouchableOpacity style={styles.imageBtn} onPress={pickImage}>
            <Text>Select Image</Text>
          </TouchableOpacity>

          {image && <Image source={{ uri: image }} style={styles.preview} />}

          {/* Save */}
          <TouchableOpacity style={styles.saveBtn} onPress={saveMedicine}>
            <Text style={{ color: "white" }}>Save Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={close}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },

  label: {
    marginBottom: 5,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    marginBottom: 15,
  },

  colorBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginRight: 10,
  },

  sizeBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginRight: 10,
  },

  selected: {
    backgroundColor: "#D6E4FF",
  },

  timeBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
  },

  imageBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  preview: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },

  saveBtn: {
    backgroundColor: "#3B6EA8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  cancel: {
    textAlign: "center",
    marginTop: 10,
    color: "#777",
  },
});
