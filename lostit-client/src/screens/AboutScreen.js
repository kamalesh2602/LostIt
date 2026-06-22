import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    StyleSheet,
    ScrollView
} from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";

export default function AboutScreen() {
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            <View style={styles.cardContainer}>
                {/* Brand Identity Header */}
                <Text style={styles.titleText}>LostIt</Text>
                
                <Text style={styles.bodyText}>
                    LostIt is a community-driven Lost & Found platform designed specifically for campuses, hostels, and organizations.
                </Text>

                <Text style={styles.bodyText}>
                    Report lost items, discover found belongings, and reconnect people with what matters to them through a simple, friction-free mobile experience.
                </Text>

                <Text style={styles.bodyText}>
                    This project is completely open source and welcomes community contributions, bug reports, and feature requests.
                </Text>

                {/* Tech Stack Metadata Box */}
                <View style={styles.metaBox}>
                    <Text style={styles.metaText}>📍 Version 1.0</Text>
                    <Text style={styles.metaText}>⚙️ Built with React Native, Node.js & MongoDB Atlas</Text>
                </View>

                {/* Modern Action Buttons Stack */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL("https://github.com/kamalesh2602/LostIt/issues")}
                    style={styles.primaryButton}
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
        paddingBottom: 140, // Keeps content clear of the floating BottomNav menu
    },
    cardContainer: {
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.radiusLarge,
        padding: SIZES.medium + 4,
        ...SHADOWS.medium,
    },
    titleText: {
        color: COLORS.primary,
        fontSize: 32,
        fontWeight: "900",
        marginBottom: SIZES.medium,
        letterSpacing: -1,
    },
    bodyText: {
        color: COLORS.textSecondary,
        fontSize: 15,
        lineHeight: 24,
        fontWeight: "500",
        marginBottom: SIZES.medium,
    },
    metaBox: {
        backgroundColor: "#F1F5F9", // Premium light grey background grid block matching image_58755b.png
        borderRadius: SIZES.radiusMedium,
        padding: SIZES.medium,
        marginTop: SIZES.base,
        marginBottom: SIZES.large,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    metaText: {
        color: COLORS.textSecondary,
        fontSize: 13,
        fontWeight: "600",
        lineHeight: 20,
    },
    primaryButton: {
        backgroundColor: COLORS.buttonBlue,
        paddingVertical: 14,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: SIZES.small,
        ...SHADOWS.light,
    },
    primaryButtonText: {
        color: COLORS.white,
        fontWeight: "800",
        fontSize: SIZES.font + 1,
        letterSpacing: 0.3,
    },
    secondaryButton: {
        backgroundColor: "#FEF3C7", // Soft warm amber alert tone background
        borderWidth: 1.5,
        borderColor: "#F59E0B",
        borderStyle: "dashed", // Clean dashed border line matches the new Report layout structure
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