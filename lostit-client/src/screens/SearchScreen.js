import React from "react";
import {
    View,
    TextInput,
    FlatList,
    StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
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
        <View style={styles.container}>
            {/* Styled Search Input Bar Container */}
            <View style={styles.searchBarWrapper}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="🔍 Search items by name or keywords..."
                    placeholderTextColor={COLORS.textMuted}
                    value={search}
                    onChangeText={setSearch}
                    clearButtonMode="while-editing" // Adds a native clear button on iOS
                    autoCorrect={false}
                />
            </View>

            {/* Main Result Stream Layout */}
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={items}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBarWrapper: {
        paddingHorizontal: SIZES.medium,
        marginBottom: SIZES.small,
        marginTop: SIZES.base,
    },
    searchInput: {
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: SIZES.font,
        color: COLORS.textPrimary,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    listContainer: {
        paddingHorizontal: SIZES.medium,
        paddingBottom: 140, // Keeps bottom items fully visible above the BottomNav panel
    },
});