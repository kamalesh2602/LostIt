import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Linking,
    StyleSheet,
} from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";

export default function MatchesScreen({ matches = [] }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>🎯 Possible Matches</Text>

            <FlatList
                data={matches}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.matchCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </View>

                        <Text style={styles.locationText}>📍 {item.location}</Text>
                        
                        {item.description ? (
                            <Text style={styles.descriptionText}>{item.description}</Text>
                        ) : null}

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => Linking.openURL(`tel:${item.contact}`)}
                            style={styles.contactButton}
                        >
                            <Text style={styles.contactButtonText}>📞 Call Owner / Finder ({item.contact})</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: SIZES.extraLarge,
        fontWeight: "800",
        marginHorizontal: SIZES.medium,
        marginBottom: SIZES.small,
        marginTop: SIZES.base,
    },
    listContainer: {
        paddingHorizontal: SIZES.medium,
        paddingBottom: 120, // Cushion against floating navigation overlay
    },
    matchCard: {
        backgroundColor: COLORS.cardBg,
        padding: SIZES.medium,
        borderRadius: SIZES.radiusMedium,
        marginBottom: SIZES.small,
        ...SHADOWS.medium,
    },
    cardHeader: {
        marginBottom: 6,
    },
    itemTitle: {
        fontSize: SIZES.large,
        fontWeight: "700",
        color: COLORS.textPrimary,
    },
    locationText: {
        fontSize: SIZES.font,
        color: COLORS.textSecondary,
        marginBottom: SIZES.base,
    },
    descriptionText: {
        fontSize: SIZES.font,
        color: COLORS.textSecondary,
        backgroundColor: "#F8FAFC",
        padding: SIZES.base,
        borderRadius: SIZES.radiusSmall,
        marginBottom: SIZES.medium,
        fontStyle: "italic",
    },
    contactButton: {
        backgroundColor: COLORS.buttonBlue,
        paddingVertical: 12,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
    },
    contactButtonText: {
        color: COLORS.white,
        fontWeight: "700",
        fontSize: SIZES.font,
    },
});