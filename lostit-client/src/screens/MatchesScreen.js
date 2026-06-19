import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function MatchesScreen({
  matches,
}) {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        Possible Matches
      </Text>

      <FlatList
        data={matches}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
            
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              borderRadius: 15,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Text>

            <Text>
              📍 {item.location}
            </Text>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  `tel:${item.contact}`
                )
              }
            >
              <Text
                style={{
                  color: "#2563eb",
                }}
              >
                📞 {item.contact}
              </Text>
            </TouchableOpacity>

            <Text>
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}