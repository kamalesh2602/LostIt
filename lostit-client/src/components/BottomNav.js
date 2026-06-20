import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";

export default function BottomNav({ screen, setScreen }) {
    const tabs = [
        { id: "feed", icon: "🏠", label: "Home" },
        { id: "report", icon: "➕", label: "Report" },
        { id: "search", icon: "🔎", label: "Search" },
        { id: "about", icon: "ℹ️", label: "About" } // Added variation selector token to the emoji for clean rendering
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
        backgroundColor: "rgba(23, 37, 84, 0.95)", 
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 255, 255, 0.1)",
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
        minHeight: 44, // Ensures high touch accuracy across all four items
    },
    iconWrapper: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingBottom: 8, // Adds a safe layout buffer block inside the box container
        minWidth: 40,
    },
    iconText: {
        fontSize: 24, // Optimized down slightly from 26 so 4 columns balance perfectly
        textAlign: "center",
        includeFontPadding: false, // Removes extra native spacing quirks on Android devices
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
        bottom: 0, // Brought up into safe internal padding range to stop vertical clipping
        width: 16,
        height: 3,
        borderRadius: 2,
        backgroundColor: COLORS.buttonBlue,
    },
});