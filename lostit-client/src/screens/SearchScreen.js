import React from "react";
import {
    View,
    TextInput,
    FlatList,
    StyleSheet,
} from "react-native";
import { SIZES, useTheme } from "../constants/theme"; // Import useTheme hook
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
    const { colors: COLORS } = useTheme(); // Consumes the live dark/light context state

    return (
        <View style={styles.container}>
            {/* Styled Search Input Bar Container */}
            <View style={styles.searchBarWrapper}>
                <TextInput
                    style={[styles.searchInput, { backgroundColor: COLORS.cardBg, borderColor: COLORS.border, color: COLORS.textPrimary }]}
                    placeholder="🔍 Search items by name or keywords..."
                    placeholderTextColor={COLORS.textMuted}
                    value={search}
                    onChangeText={setSearch}
                    clearButtonMode="while-editing"
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
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: SIZES.font,
        borderWidth: 1,
    },
    listContainer: {
        paddingHorizontal: SIZES.medium,
        paddingBottom: 140,
    },
});