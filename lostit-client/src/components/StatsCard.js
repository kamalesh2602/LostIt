import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";

export default function StatsCard({ items = [] }) {
    const lostCount = items.filter((i) => i.type === "LOST").length;
    const foundCount = items.filter((i) => i.type === "FOUND").length;

    return (
        <View style={styles.container}>
            {/* Total Items Grid Block */}
            <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: COLORS.primary }]}>
                    {items.length}
                </Text>
                <Text style={styles.statLabel}>Total Posts</Text>
            </View>

            {/* Vertical Divider */}
            <View style={styles.divider} />

            {/* Lost Items Grid Block */}
            <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: COLORS.lost }]}>
                    {lostCount}
                </Text>
                <Text style={styles.statLabel}>Lost Items</Text>
            </View>

            {/* Vertical Divider */}
            <View style={styles.divider} />

            {/* Found Items Grid Block */}
            <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: COLORS.found }]}>
                    {foundCount}
                </Text>
                <Text style={styles.statLabel}>Found Items</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.radiusLarge,
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.small,
        marginBottom: SIZES.medium,
        alignItems: "center",
        justifyContent: "space-between",
        ...SHADOWS.light,
    },
    statBox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    statValue: {
        fontSize: SIZES.extraLarge,
        fontWeight: "800",
        marginBottom: 2,
    },
    statLabel: {
        fontSize: SIZES.small,
        fontWeight: "600",
        color: COLORS.textSecondary,
    },
    divider: {
        width: 1,
        height: "60%",
        backgroundColor: COLORS.border,
    },
});