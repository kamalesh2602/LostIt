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
          color: "#e2e8f0",
          lineHeight: 24,
          fontSize: 16,
        }}
      >
        LostIt is a community-driven
        Lost & Found platform designed
        for campuses, hostels and
        organizations.

        {"\n\n"}

        Report lost items, discover
        found belongings and reconnect
        people with what matters to
        them through a simple mobile
        experience.

        {"\n\n"}

        This project is open source and
        welcomes contributions, bug
        reports and feature requests.
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          marginTop: 25,
          fontSize: 14,
        }}
      >
        Version 1.0
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          marginTop: 6,
          fontSize: 14,
        }}
      >
        Built with React Native,
        Node.js and MongoDB Atlas
      </Text>

      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://github.com/kamalesh2602/LostIt/issues"
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
            fontSize: 16,
          }}
        >
          🐛 Report an Issue
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://github.com/kamalesh2602/LostIt"
          )
        }
        style={{
          backgroundColor: "#1e293b",
          padding: 15,
          borderRadius: 12,
          marginTop: 12,
          borderWidth: 1,
          borderColor: "#475569",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          ⭐ View Source Code
        </Text>
      </TouchableOpacity>
    </View>
  );
}