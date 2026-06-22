import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { SIZES, SHADOWS, useTheme } from "../constants/theme";

export default function BottomNav({ screen, setScreen }) {
    const { colors: COLORS } = useTheme();
    const tabs = [
        { id: "feed", icon: "🏠", label: "Home" },
        { id: "report", icon: "➕", label: "Report" },
        { id: "search", icon: "🔎", label: "Search" },
        { id: "about", icon: "ℹ️", label: "About" }
    ];

    return (
        <View style={[styles.navBarContainer, { backgroundColor: COLORS.cardBg, borderTopColor: COLORS.border }]}>
            {tabs.map((tab) => {
                const isActive = screen === tab.id;
                return (
                    <TouchableOpacity
                        key={tab.id}
                        activeOpacity={0.6}
                        onPress={() => setScreen(tab.id)}
                        style={styles.tabButton}
                    >
                        <View style={styles.iconWrapper}>
                            <Text style={[styles.iconText, isActive ? styles.iconActive : { opacity: 0.4 }]}>
                                {tab.icon}
                            </Text>
                            {isActive && <View style={[styles.activeIndicatorLine, { backgroundColor: COLORS.primary }]} />}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    navBarContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        paddingVertical: Platform.OS === "ios" ? 14 : 10,
        paddingBottom: Platform.OS === "ios" ? 32 : 18, 
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        ...SHADOWS.medium,
    },
    tabButton: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        minHeight: 44,
    },
    iconWrapper: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingBottom: 8,
        minWidth: 40,
    },
    iconText: {
        fontSize: 24,
        textAlign: "center",
        includeFontPadding: false,
    },
    iconActive: {
        opacity: 1,
        transform: [{ scale: 1.1 }],
    },
    activeIndicatorLine: {
        position: "absolute",
        bottom: 0,
        width: 16,
        height: 3,
        borderRadius: 2,
    },
});