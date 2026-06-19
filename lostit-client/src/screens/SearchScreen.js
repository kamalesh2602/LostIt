import React from "react";
import {
  View,
  TextInput,
  FlatList,
} from "react-native";

import ItemCard from "../components/ItemCard";

export default function SearchScreen({
  search,
  setSearch,
  items,
  ownedItems,
  markClaimed,
  confirmDelete,
  getTimeAgo,
}) {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          padding: 12,
          marginBottom: 10,
        }}
        placeholder="Search item..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            ownedItems={ownedItems}
            markClaimed={markClaimed}
            confirmDelete={confirmDelete}
            getTimeAgo={getTimeAgo}
          />
        )}
      />
    </View>
  );
}