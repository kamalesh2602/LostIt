import React from "react";
import {
    FlatList,
    RefreshControl,
    Text,
} from "react-native";

import ItemCard from "../components/ItemCard";

export default function FeedScreen({
    items,
    ownedItems,
    markClaimed,
    confirmDelete,
    getTimeAgo,
    refreshing,
    onRefresh,
    setMatches,
    setScreen,
}) {
    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item._id}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            renderItem={({ item }) => (
                <ItemCard
                    item={item}
                    ownedItems={ownedItems}
                    markClaimed={markClaimed}
                    confirmDelete={confirmDelete}
                    getTimeAgo={getTimeAgo}
                    setMatches={setMatches}
                    setScreen={setScreen}

                />
            )}
            ListEmptyComponent={
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: 50,
                    }}
                >
                    🔍 Nothing found.
                    {"\n"}
                    Be the first to report an item.
                </Text>
            }
        />
    );
}