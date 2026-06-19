import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default function BottomNav({
  setScreen,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent:
          "space-around",
        paddingVertical: 15,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          setScreen("feed")
        }
      >
        <Text
          style={{
            fontSize: 28,
          }}
        >
          🏠
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setScreen("report")
        }
      >
        <Text
          style={{
            fontSize: 28,
          }}
        >
          ➕
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setScreen("search")
        }
      >
        <Text
          style={{
            fontSize: 28,
          }}
        >
          🔎
        </Text>
      </TouchableOpacity>
    </View>
  );
}