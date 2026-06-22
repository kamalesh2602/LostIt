
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SIZES, SHADOWS, useTheme } from "../constants/theme"; // Updated

export default function FilterBar({ filter, setFilter, showMine, setShowMine }) {
    const { colors: COLORS } = useTheme(); // ⬅️ Added

    return (
        <View style={styles.container}>
            <View style={styles.pillRow}>
                {["ALL", "LOST", "FOUND", "CLAIMED"].map((item) => {
                    const isActive = filter === item;
                    return (
                        <TouchableOpacity
                            key={item}
                            style={[
                                styles.pill,
                                isActive ? { backgroundColor: COLORS.buttonBlue } : { backgroundColor: COLORS.innerBoxBg },
                            ]}
                            onPress={() => setFilter(item)}
                        >
                            <Text style={[styles.pillText, isActive ? { color: COLORS.white } : { color: COLORS.textSecondary }]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <TouchableOpacity
                style={[
                    styles.toggleButton,
                    showMine ? { backgroundColor: "#D97706", borderColor: "#D97706" } : { backgroundColor: 'transparent', borderColor: COLORS.border },
                ]}
                onPress={() => setShowMine(!showMine)}
            >
                <Text style={[styles.toggleText, showMine ? { color: COLORS.white } : { color: COLORS.textSecondary }]}>
                    {showMine ? "✨ SHOWING MY POSTS" : "👤 VIEW MY POSTS"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.medium,
    },
    pillRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 6,
        marginBottom: SIZES.small,
    },
    pill: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: SIZES.radiusLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
    },
    pillActive: {
        backgroundColor: COLORS.buttonBlue,
    },
    pillInactive: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    pillText: {
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    textActive: {
        color: COLORS.white,
    },
    textInactive: {
        color: COLORS.border,
    },
    toggleButton: {
        paddingVertical: 10,
        paddingHorizontal: SIZES.medium,
        borderRadius: SIZES.radiusMedium,
        alignSelf: "center",
        borderWidth: 1,
        minWidth: 160,
        alignItems: "center",
    },
    toggleActive: {
        backgroundColor: "#D97706",
        borderColor: "#D97706",
    },
    toggleInactive: {
        backgroundColor: "transparent",
        borderColor: COLORS.border,
    },
    toggleText: {
        fontSize: SIZES.small,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    toggleTextActive: {
        color: COLORS.white,
    },
    toggleTextInactive: {
        color: COLORS.border,
    },
});