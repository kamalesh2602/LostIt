import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import TypeSelector from "../components/TypeSelector";
import CategorySelector from "../components/CategorySelector";

export default function ReportScreen({
  title,
  setTitle,
  location,
  setLocation,
  contact,
  setContact,
  description,
  setDescription,
  image,
  category,
  setCategory,
  type,
  setType,
  pickImage,
  addItem,
}) {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          padding: 15,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Report Item
        </Text>

        <TextInput
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 12,
            marginBottom: 10,
          }}
          placeholder="Item Name"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 12,
            marginBottom: 10,
          }}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />

        <TextInput
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 12,
            marginBottom: 10,
          }}
          placeholder="Contact Number"
          keyboardType="phone-pad"
          value={contact}
          onChangeText={setContact}
        />

        <TextInput
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 12,
            marginBottom: 10,
          }}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />

        <TypeSelector
          type={type}
          setType={setType}
        />

        <CategorySelector
          category={category}
          setCategory={setCategory}
        />

        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 12,
              marginBottom: 15,
            }}
          />
        )}

        <TouchableOpacity
          style={{
            backgroundColor: "#f59e0b",
            padding: 15,
            borderRadius: 12,
            alignItems: "center",
            marginBottom: 15,
          }}
          onPress={pickImage}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            📷 Upload Photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#3b82f6",
            padding: 15,
            borderRadius: 12,
            alignItems: "center",
          }}
          onPress={addItem}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}