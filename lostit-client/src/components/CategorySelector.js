import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import categories from "../constants/categories";

export default function CategorySelector({ category, setCategory }) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
        >
            {categories.map((cat) => {
                const isActive = category === cat;
                return (
                    <TouchableOpacity
                        key={cat}
                        activeOpacity={0.7}
                        style={[
                            styles.pill,
                            isActive ? styles.pillActive : styles.pillInactive,
                        ]}
                        onPress={() => setCategory(cat)}
                    >
                        <Text style={[styles.pillText, isActive ? styles.textActive : styles.textInactive]}>
                            {cat}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginBottom: SIZES.medium,
        maxHeight: 44, // Caps height ensuring uniform sizing layout
    },
    contentContainer: {
        paddingHorizontal: 2,
        alignItems: "center",
    },
    pill: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: SIZES.radiusLarge,
        marginRight: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
    },
    pillActive: {
        backgroundColor: COLORS.buttonBlue,
    },
    pillInactive: {
        backgroundColor: "rgba(255, 255, 255, 0.12)",
    },
    pillText: {
        fontSize: SIZES.font,
        fontWeight: "600",
    },
    textActive: {
        color: COLORS.white,
    },
    textInactive: {
        color: COLORS.border,
    },
});