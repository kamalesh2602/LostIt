import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    Alert,
    StyleSheet,
} from "react-native";
import { SIZES, SHADOWS, useTheme } from "../constants/theme";
import { getMatches, getMatchCount } from "../services/api";

export default function ItemCard({
    item,
    ownedItems,
    markClaimed,
    confirmDelete,
    getTimeAgo,
    setMatches,
    setScreen,
}) {
    // Intercept active theme settings and locally map it to uppercase COLORS 
    // to match all inline definitions safely!
    const { colors: COLORS } = useTheme(); 
    const [matchCount, setMatchCount] = useState(0);

    useEffect(() => {
        loadMatchCount();
    }, []);

    const loadMatchCount = async () => {
        try {
            const data = await getMatchCount(item._id);
            setMatchCount(data.count);
        } catch (err) {
            console.log(err);
        }
    };

    const showMatches = async () => {
        const matches = await getMatches(item._id);
        if (matches.length === 0) {
            Alert.alert("No Matches", "No matching items found yet.");
            return;
        }
        setMatches(matches);
        setScreen("matches");
    };

    const isLost = item.type === "FOUND" ? false : true;
    const isOwner = ownedItems[item._id];

    return (
        <View style={[styles.card, { backgroundColor: COLORS.cardBg, borderColor: COLORS.border }]}>
            {/* Header Layout: Type Badge & Active Status */}
            <View style={styles.headerRow}>
                <View style={[styles.badge, { backgroundColor: isLost ? COLORS.lost : COLORS.found }]}>
                    <Text style={styles.badgeText}>{item.type}</Text>
                </View>
                
                <View style={styles.statusContainer}>
                    <View style={[styles.statusDot, { backgroundColor: item.status === "CLAIMED" ? COLORS.claimed : '#22c55e' }]} />
                    <Text style={[styles.statusText, { color: COLORS.textSecondary }]}>
                        {item.status === "CLAIMED" ? "CLAIMED" : "ACTIVE"}
                    </Text>
                </View>
            </View>

            {/* Media Content */}
            {item.image && (
                <Image source={{ uri: item.image }} style={styles.cardImage} />
            )}

            {/* Content Specifications */}
            <View style={styles.contentBody}>
                <Text style={[styles.categoryText, { color: COLORS.primary }]}>🏷️ {item.category}</Text>
                
                {/* FIXED: Explicitly tied to dynamic text color token to strip white text overrides */}
                <Text style={[styles.titleText, { color: COLORS.textPrimary }]}>
                    {item.title}
                </Text>
                
                <Text style={[styles.locationText, { color: COLORS.textSecondary }]}>📍 {item.location}</Text>
                
                {item.description ? (
                    <Text style={[styles.descriptionText, { color: COLORS.textSecondary, backgroundColor: COLORS.innerBoxBg }]} numberOfLines={2}>
                        {item.description}
                    </Text>
                ) : null}

                {/* Meta Row: Time & Contacts */}
                <View style={[styles.metaRow, { borderTopColor: COLORS.border }]}>
                    <Text style={[styles.timeText, { color: COLORS.textMuted }]}>⏱️ {getTimeAgo(item.createdAt)}</Text>
                    
                    <TouchableOpacity 
                        onPress={() => Linking.openURL(`tel:${item.contact}`)}
                        style={styles.contactLink}
                    >
                        <Text style={[styles.contactLinkText, { color: COLORS.primary }]}>📞 Call Finder</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Operational Layout Actions */}
            <View style={styles.actionSection}>
                <TouchableOpacity 
                    onPress={showMatches} 
                    style={[styles.matchButton, { backgroundColor: COLORS.innerBoxBg, borderColor: matchCount > 0 ? '#16a34a' : COLORS.border }]}
                >
                    <Text style={[styles.matchButtonText, { color: matchCount > 0 ? '#16a34a' : COLORS.textSecondary }]}>
                        🔍 {matchCount} {matchCount === 1 ? "Match" : "Matches"} Found
                    </Text>
                </TouchableOpacity>

                {/* Owner Privileges Dashboard Controls */}
                {isOwner && (
                    <View style={[styles.ownerControls, { borderTopColor: COLORS.border }]}>
                        <View style={styles.ownerHeader}>
                            <Text style={styles.ownerTag}>⭐ Your Post</Text>
                        </View>
                        
                        <View style={styles.ownerActionRow}>
                            {item.status !== "CLAIMED" && (
                                <TouchableOpacity 
                                    style={[styles.btn, styles.btnClaim, { backgroundColor: COLORS.found }]} 
                                    onPress={() => markClaimed(item._id)}
                                >
                                    <Text style={styles.btnText}>Mark Claimed</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity 
                                style={[styles.btn, styles.btnDelete, { backgroundColor: COLORS.lost }]} 
                                onPress={() => confirmDelete(item._id)}
                            >
                                <Text style={styles.btnText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: SIZES.radiusLarge,
        padding: SIZES.medium,
        marginBottom: SIZES.medium,
        borderWidth: 1,
        ...SHADOWS.medium,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.small,
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: SIZES.radiusSmall,
    },
    badgeText: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: SIZES.small,
        letterSpacing: 0.5,
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 6,
    },
    statusText: {
        fontSize: SIZES.small,
        fontWeight: "600",
    },
    cardImage: {
        width: "100%",
        height: 180,
        borderRadius: SIZES.radiusMedium,
        marginBottom: SIZES.small,
    },
    contentBody: {
        marginBottom: SIZES.small,
    },
    categoryText: {
        fontWeight: "600",
        fontSize: SIZES.small,
        textTransform: "uppercase",
        marginBottom: 2,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 4,
    },
    locationText: {
        fontSize: SIZES.font,
        marginBottom: SIZES.base,
    },
    descriptionText: {
        fontSize: SIZES.font,
        fontStyle: "italic",
        padding: SIZES.base,
        borderRadius: SIZES.radiusSmall,
        marginBottom: SIZES.base,
    },
    metaRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        paddingTop: SIZES.base,
        marginTop: 4,
    },
    timeText: {
        fontSize: SIZES.small,
    },
    contactLink: {
        paddingVertical: 4,
    },
    contactLinkText: {
        fontWeight: "600",
        fontSize: SIZES.font,
    },
    actionSection: {
        marginTop: SIZES.base,
    },
    matchButton: {
        borderWidth: 1.5,
        borderRadius: SIZES.radiusMedium,
        paddingVertical: 10,
        alignItems: "center",
    },
    matchButtonText: {
        fontWeight: "700",
        fontSize: SIZES.font,
    },
    ownerControls: {
        marginTop: SIZES.medium,
        paddingTop: SIZES.medium,
        borderTopWidth: 1,
    },
    ownerHeader: {
        marginBottom: SIZES.base,
    },
    ownerTag: {
        color: "#D97706",
        fontWeight: "700",
        fontSize: SIZES.small,
    },
    ownerActionRow: {
        flexDirection: "row",
        gap: SIZES.base,
    },
    btn: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: SIZES.font,
    },
});