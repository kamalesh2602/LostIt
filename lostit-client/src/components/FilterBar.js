import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default function FilterBar({
  filter,
  setFilter,
  showMine,
  setShowMine,
}) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent:
            "space-around",
          marginBottom: 15,
        }}
      >
        {[
          "ALL",
          "LOST",
          "FOUND",
          "CLAIMED",
        ].map((item) => (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor:
                filter === item
                  ? "#3b82f6"
                  : "#e5e7eb",
              paddingHorizontal:
                12,
              paddingVertical: 8,
              borderRadius: 20,
            }}
            onPress={() =>
              setFilter(item)
            }
          >
            <Text
              style={{
                color:
                  filter === item
                    ? "white"
                    : "black",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor:
            "#e5e7eb",
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 20,
          alignSelf: "center",
          marginBottom: 15,
        }}
        onPress={() =>
          setShowMine(
            !showMine
          )
        }
      >
        <Text>
          {showMine
            ? "ALL POSTS"
            : "MY POSTS"}
        </Text>
      </TouchableOpacity>
    </>
  );
}