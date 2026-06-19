import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default function TypeSelector({
  type,
  setType,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        marginBottom: 15,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor:
            type === "LOST"
              ? "#ef4444"
              : "#ddd",
          padding: 12,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() =>
          setType("LOST")
        }
      >
        <Text>LOST</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor:
            type === "FOUND"
              ? "#22c55e"
              : "#ddd",
          padding: 12,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() =>
          setType("FOUND")
        }
      >
        <Text>FOUND</Text>
      </TouchableOpacity>
    </View>
  );
}