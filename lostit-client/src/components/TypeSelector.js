import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

export default function TypeSelector({ type, setType }) {
    const isLostActive = type === "LOST";
    const isFoundActive = type === "FOUND";

    return (
        <View style={styles.container}>
            {/* Lost Option Component Toggle */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.selectorBtn,
                    isLostActive ? styles.activeLost : styles.inactive,
                ]}
                onPress={() => setType("LOST")}
            >
                <Text style={[styles.btnText, isLostActive ? styles.textActive : styles.textInactive]}>
                    🚨 I LOST SOMETHING
                </Text>
            </TouchableOpacity>

            {/* Found Option Component Toggle */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.selectorBtn,
                    isFoundActive ? styles.activeFound : styles.inactive,
                ]}
                onPress={() => setType("FOUND")}
            >
                <Text style={[styles.btnText, isFoundActive ? styles.textActive : styles.textInactive]}>
                    ✅ I FOUND SOMETHING
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: SIZES.small,
        marginBottom: SIZES.medium,
    },
    selectorBtn: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    activeLost: {
        backgroundColor: COLORS.lost,
        borderColor: COLORS.lost,
    },
    activeFound: {
        backgroundColor: COLORS.found,
        borderColor: COLORS.found,
    },
    inactive: {
        backgroundColor: "#F1F5F9",
        borderColor: COLORS.border,
    },
    btnText: {
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    textActive: {
        color: COLORS.white,
    },
    textInactive: {
        color: COLORS.textSecondary,
    },
});