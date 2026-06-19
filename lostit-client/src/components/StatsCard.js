import { View, Text } from "react-native";

export default function StatsCard({
  items,
}) {
  const lostCount =
    items.filter(
      (i) => i.type === "LOST"
    ).length;

  const foundCount =
    items.filter(
      (i) => i.type === "FOUND"
    ).length;

  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        marginBottom: 15,
      }}
    >
      <Text>
        Total: {items.length}
      </Text>

      <Text>
        Lost: {lostCount}
      </Text>

      <Text>
        Found: {foundCount}
      </Text>
    </View>
  );
}