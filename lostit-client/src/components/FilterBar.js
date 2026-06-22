import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SIZES, SHADOWS, useTheme } from "../constants/theme"; // Import useTheme

export default function FilterBar({ filter, setFilter, showMine, setShowMine }) {
    const { colors: COLORS } = useTheme(); // Renames to uppercase locally

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
        marginBottom: SIZES.small,
    },
    pill: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 65,
    },
    pillText: {
        fontSize: 12,
        fontWeight: "700",
    },
    toggleButton: {
        paddingVertical: 12,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    toggleText: {
        fontSize: 12,
        fontWeight: "800",
        letterSpacing: 0.5,
    },
});