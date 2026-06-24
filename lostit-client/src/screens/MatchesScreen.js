import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Linking,
    StyleSheet,
} from "react-native";
import { SIZES, SHADOWS, useTheme } from "../constants/theme";

export default function MatchesScreen({ matches = [] }) {
    const { colors: COLORS } = useTheme(); // Hook into the dynamic theme engine

    return (
        <View style={styles.container}>
            <Text style={[styles.headerTitle, { color: COLORS.textPrimary }]}>🎯 Possible Matches</Text>

            <FlatList
                data={matches}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={[styles.matchCard, { backgroundColor: COLORS.cardBg, borderColor: COLORS.border }]}>
                        <View style={styles.cardHeader}>
                            <Text style={[styles.itemTitle, { color: COLORS.textPrimary }]}>{item.title}</Text>
                        </View>

                        <Text style={[styles.locationText, { color: COLORS.textSecondary }]}>📍 {item.location}</Text>
                        
                        {item.description ? (
                            <Text style={[styles.descriptionText, { color: COLORS.textSecondary, backgroundColor: COLORS.innerBoxBg }]}>
                                {item.description}
                            </Text>
                        ) : null}

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => Linking.openURL(`tel:${item.contact}`)}
                            style={[styles.contactButton, { backgroundColor: COLORS.buttonBlue }]}
                        >
                            <Text style={[styles.contactButtonText, { color: COLORS.white }]}>
                                📞 Call Owner / Finder ({item.contact})
                            </Text>
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
        fontSize: SIZES.extraLarge,
        fontWeight: "800",
        marginHorizontal: SIZES.medium,
        marginBottom: SIZES.small,
        marginTop: SIZES.base,
    },
    listContainer: {
        paddingHorizontal: SIZES.medium,
        paddingBottom: 140, 
    },
    matchCard: {
        padding: SIZES.medium,
        borderRadius: SIZES.radiusLarge,
        marginBottom: SIZES.small,
        borderWidth: 1,
        ...SHADOWS.medium,
    },
    cardHeader: {
        marginBottom: 6,
    },
    itemTitle: {
        fontSize: SIZES.large,
        fontWeight: "700",
    },
    locationText: {
        fontSize: SIZES.font,
        marginBottom: SIZES.base,
    },
    descriptionText: {
        fontSize: SIZES.font,
        padding: SIZES.base,
        borderRadius: SIZES.radiusSmall,
        marginBottom: SIZES.medium,
        fontStyle: "italic",
    },
    contactButton: {
        paddingVertical: 12,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
    },
    contactButtonText: {
        fontWeight: "700",
        fontSize: SIZES.font,
    },
});