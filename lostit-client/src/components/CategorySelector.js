import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";

import categories from "../constants/categories";

export default function CategorySelector({
  category,
  setCategory,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={
        false
      }
      style={{
        marginBottom: 15,
      }}
    >
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={{
            backgroundColor:
              category === cat
                ? "#3b82f6"
                : "#e5e7eb",
            paddingHorizontal:
              12,
            paddingVertical: 8,
            borderRadius: 20,
            marginRight: 8,
          }}
          onPress={() =>
            setCategory(cat)
          }
        >
          <Text
            style={{
              color:
                category === cat
                  ? "white"
                  : "black",
            }}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}