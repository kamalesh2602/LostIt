import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";

export default function FilterBar({
    filter,
    setFilter,
    showMine,
    setShowMine,
}) {
    return (
        <View style={styles.container}>
            {/* Horizontal Filter Pill Row */}
            <View style={styles.pillRow}>
                {["ALL", "LOST", "FOUND", "CLAIMED"].map((item) => {
                    const isActive = filter === item;
                    return (
                        <TouchableOpacity
                            key={item}
                            activeOpacity={0.7}
                            style={[
                                styles.pill,
                                isActive ? styles.pillActive : styles.pillInactive,
                            ]}
                            onPress={() => setFilter(item)}
                        >
                            <Text style={[styles.pillText, isActive ? styles.textActive : styles.textInactive]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* My Posts Toggle Control */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.toggleButton,
                    showMine ? styles.toggleActive : styles.toggleInactive,
                ]}
                onPress={() => setShowMine(!showMine)}
            >
                <Text style={[styles.toggleText, showMine ? styles.toggleTextActive : styles.toggleTextInactive]}>
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