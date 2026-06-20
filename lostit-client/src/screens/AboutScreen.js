import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        LostIt
      </Text>

      <Text
        style={{
          color: "white",
          lineHeight: 24,
        }}
      >
        LostIt is a community-driven
        lost and found platform that
        helps people reconnect with
        their lost belongings.
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          marginTop: 20,
        }}
      >
        Version 1.0
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          marginTop: 10,
        }}
      >
        Built by Kamalesh G
      </Text>

      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "mailto:23z332@psgtech.ac.in?subject=LostIt Feedback"
          )
        }
        style={{
          backgroundColor: "#2563eb",
          padding: 15,
          borderRadius: 12,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          📧 Send Feedback
        </Text>
      </TouchableOpacity>
    </View>
  );
}