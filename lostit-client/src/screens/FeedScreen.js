import React from "react";
import {
    FlatList,
    RefreshControl,
    Text,
    StyleSheet,
    View
} from "react-native";
import { SIZES, useTheme } from "../constants/theme"; // Swapped for useTheme hook
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
    const { colors: COLORS, isDarkMode } = useTheme();

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={isDarkMode ? COLORS.white : COLORS.primary} 
                    colors={[COLORS.buttonBlue]} 
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
                    <Text style={[styles.emptyTitle, { color: COLORS.textPrimary }]}>🔍 Nothing found.</Text>
                    <Text style={[styles.emptySubtitle, { color: COLORS.textSecondary }]}>Be the first to report an item in the community.</Text>
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: SIZES.medium,
        paddingTop: SIZES.small,
        paddingBottom: 140, 
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        paddingHorizontal: SIZES.extraLarge,
    },
    emptyTitle: {
        fontSize: SIZES.large,
        fontWeight: "600",
        marginBottom: SIZES.base,
        textAlign: "center",
    },
    emptySubtitle: {
        fontSize: SIZES.font,
        textAlign: "center",
        lineHeight: 20,
    },
});