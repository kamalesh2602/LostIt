import React from "react";
import {
    FlatList,
    RefreshControl,
    Text,
    StyleSheet,
    View
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
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
            // contentContainerStyle adds crucial padding at the bottom so elements don't get cut off
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={COLORS.white} // iOS loading indicator color
                    colors={[COLORS.buttonBlue]} // Android loading indicator color
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
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyTitle}>🔍 Nothing found.</Text>
                    <Text style={styles.emptySubtitle}>Be the first to report an item in the community.</Text>
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: SIZES.medium,
        paddingTop: SIZES.small,
        paddingBottom: 100, // Adjust this value based on your bottom nav bar's total height
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        paddingHorizontal: SIZES.extraLarge,
    },
    emptyTitle: {
        color: COLORS.white,
        fontSize: SIZES.large,
        fontWeight: "600",
        marginBottom: SIZES.base,
        textAlign: "center",
    },
    emptySubtitle: {
        color: COLORS.textMuted,
        fontSize: SIZES.font,
        textAlign: "center",
        lineHeight: 20,
    },
});