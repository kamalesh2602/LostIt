import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SIZES, useTheme } from "../constants/theme";

export default function TypeSelector({ type, setType }) {
    const { colors: COLORS } = useTheme();
    const isLostActive = type === "LOST";
    const isFoundActive = type === "FOUND";

    return (
        <View style={styles.container}>
            {/* Lost Option Component Toggle */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.selectorBtn,
                    isLostActive ? { backgroundColor: COLORS.lost, borderColor: COLORS.lost } : { backgroundColor: COLORS.innerBoxBg, borderColor: COLORS.border },
                ]}
                onPress={() => setType("LOST")}
            >
                <Text style={[styles.btnText, isLostActive ? { color: COLORS.white } : { color: COLORS.textSecondary }]}>
                    🚨 LOST
                </Text>
            </TouchableOpacity>

            {/* Found Option Component Toggle */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.selectorBtn,
                    isFoundActive ? { backgroundColor: COLORS.found, borderColor: COLORS.found } : { backgroundColor: COLORS.innerBoxBg, borderColor: COLORS.border },
                ]}
                onPress={() => setType("FOUND")}
            >
                <Text style={[styles.btnText, isFoundActive ? { color: COLORS.white } : { color: COLORS.textSecondary }]}>
                    ✅ FOUND
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
    btnText: {
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
});