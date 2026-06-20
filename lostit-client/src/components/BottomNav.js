import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";

export default function BottomNav({ screen, setScreen }) {
    const tabs = [
        { id: "feed", icon: "🏠", label: "Home" },
        { id: "report", icon: "➕", label: "Report" },
        { id: "search", icon: "🔎", label: "Search" },
        { id: "about",icon: "ℹ", label: "About",}
    ];

    return (
        <View style={styles.navBarContainer}>
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
                            <Text style={[styles.iconText, isActive ? styles.iconActive : styles.iconInactive]}>
                                {tab.icon}
                            </Text>
                            {isActive && <View style={styles.activeIndicatorLine} />}
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
        backgroundColor: "rgba(23, 37, 84, 0.95)", // High contrast, slightly translucent navy overlay
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 255, 255, 0.1)",
        paddingVertical: Platform.OS === "ios" ? 20 : 12,
        paddingBottom: Platform.OS === "ios" ? 30 : 16, // Extra safe space cushion on newer devices
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
    },
    iconWrapper: {
        alignItems: "center",
        position: "relative",
        paddingVertical: 4,
    },
    iconText: {
        fontSize: 26,
    },
    iconActive: {
        opacity: 1,
        transform: [{ scale: 1.1 }],
    },
    iconInactive: {
        opacity: 0.4,
    },
    activeIndicatorLine: {
        position: "absolute",
        bottom: -6,
        width: 16,
        height: 3,
        borderRadius: 2,
        backgroundColor: COLORS.buttonBlue,
    },
});