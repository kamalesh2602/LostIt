import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    StyleSheet,
    ScrollView
} from "react-native";
import { SIZES, SHADOWS, useTheme } from "../constants/theme"; // Use useTheme hook here

export default function AboutScreen() {
    const { colors, isDarkMode, toggleTheme } = useTheme();

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            <View style={[styles.cardContainer, { backgroundColor: colors.cardBg }]}>
                <Text style={[styles.titleText, { color: colors.primary }]}>LostIt</Text>
                
                <Text style={[styles.bodyText, { color: colors.textSecondary }]}>
                    LostIt is a community-driven Lost & Found platform designed specifically for campuses, hostels, and organizations.
                </Text>

                <Text style={[styles.bodyText, { color: colors.textSecondary }]}>
                    Report lost items, discover found belongings, and reconnect people with what matters to them through a simple, friction-free mobile experience.
                </Text>

                {/* --- MODERN DARK MODE SWITCH TOGGLE CONTROLLER --- */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.themeToggleBtn, { backgroundColor: isDarkMode ? '#334155' : '#F1F5F9', borderColor: colors.border }]}
                    onPress={toggleTheme}
                >
                    <Text style={[styles.themeToggleText, { color: colors.textPrimary }]}>
                        {isDarkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
                    </Text>
                </TouchableOpacity>

                <View style={[styles.metaBox, { backgroundColor: colors.innerBoxBg, borderColor: colors.border }]}>
                    <Text style={[styles.metaText, { color: colors.textSecondary }]}>📍 Version 1.2.0</Text>
                    <Text style={[styles.metaText, { color: colors.textSecondary }]}>⚙️ Built with React Native, Node.js & MongoDB Atlas</Text>
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL("https://github.com/kamalesh2602/LostIt/issues")}
                    style={[styles.primaryButton, { backgroundColor: colors.buttonBlue }]}
                >
                    <Text style={styles.primaryButtonText}>🐛 Report an Issue</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL("https://github.com/kamalesh2602/LostIt")}
                    style={styles.secondaryButton}
                >
                    <Text style={styles.secondaryButtonText}>⭐ View Source Code</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: SIZES.medium,
        paddingTop: SIZES.small,
        paddingBottom: 150,
    },
    cardContainer: {
        borderRadius: SIZES.radiusLarge,
        padding: SIZES.medium + 4,
        ...SHADOWS.medium,
    },
    titleText: {
        fontSize: 32,
        fontWeight: "900",
        marginBottom: SIZES.medium,
        letterSpacing: -1,
    },
    bodyText: {
        fontSize: 15,
        lineHeight: 24,
        fontWeight: "500",
        marginBottom: SIZES.medium,
    },
    themeToggleBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderRadius: SIZES.radiusMedium,
        borderWidth: 1,
        marginBottom: SIZES.medium,
    },
    themeToggleText: {
        fontSize: SIZES.font,
        fontWeight: "700",
        letterSpacing: 0.3,
    },
    metaBox: {
        borderRadius: SIZES.radiusMedium,
        padding: SIZES.medium,
        marginTop: SIZES.base,
        marginBottom: SIZES.large,
        borderWidth: 1,
    },
    metaText: {
        fontSize: 13,
        fontWeight: "600",
        lineHeight: 20,
    },
    primaryButton: {
        paddingVertical: 14,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: SIZES.small,
        ...SHADOWS.light,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontWeight: "800",
        fontSize: SIZES.font + 1,
        letterSpacing: 0.3,
    },
    secondaryButton: {
        backgroundColor: "#FEF3C7", 
        borderWidth: 1.5,
        borderColor: "#F59E0B",
        borderStyle: "dashed", 
        borderRadius: SIZES.radiusMedium,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    secondaryButtonText: {
        color: "#B45309",
        fontWeight: "700",
        fontSize: SIZES.font + 1,
        letterSpacing: 0.3,
    },
});