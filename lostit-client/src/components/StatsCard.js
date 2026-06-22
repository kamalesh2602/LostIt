import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SIZES, SHADOWS, useTheme } from "../constants/theme";

export default function StatsCard({ items = [] }) {
    const { colors: COLORS } = useTheme(); // Dynamic theme context engine hook
    
    const lostCount = items.filter((i) => i.type === "LOST").length;
    const foundCount = items.filter((i) => i.type === "FOUND").length;

    return (
        <View style={[styles.container, { backgroundColor: COLORS.cardBg, borderColor: COLORS.border }]}>
            <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: COLORS.primary }]}>{items.length}</Text>
                <Text style={[styles.statLabel, { color: COLORS.textSecondary }]}>Total Posts</Text>
            </View>
            
            <View style={[styles.divider, { backgroundColor: COLORS.border }]} />
            
            <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: COLORS.lost }]}>{lostCount}</Text>
                <Text style={[styles.statLabel, { color: COLORS.textSecondary }]}>Lost Items</Text>
            </View>
            
            <View style={[styles.divider, { backgroundColor: COLORS.border }]} />
            
            <View style={styles.statBox}>
                <Text style={[styles.statValue, { color: COLORS.found }]}>{foundCount}</Text>
                <Text style={[styles.statLabel, { color: COLORS.textSecondary }]}>Found Items</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: SIZES.radiusLarge,
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.small,
        marginBottom: SIZES.medium,
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
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
    },
    divider: {
        width: 1,
        height: "60%",
    },
});