import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    Alert,
} from "react-native";
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
    const showMatches = async () => {
        const matches =
            await getMatches(item._id);

        if (matches.length === 0) {
            Alert.alert(
                "No Matches",
                "No matching items found yet."
            );
            return;
        }

        setMatches(matches);
        setScreen("matches");
    };

    const [matchCount, setMatchCount] = useState(0);
    useEffect(() => {
        loadMatchCount();
    }, []);

    const loadMatchCount =
        async () => {
            try {
                const data =
                    await getMatchCount(
                        item._id
                    );

                setMatchCount(
                    data.count
                );
            } catch (err) {
                console.log(err);
            }
        };
    return (
        <View
            style={{
                backgroundColor: "white",
                borderRadius: 20,
                padding: 15,
                marginBottom: 15,
            }}
        >
            <View
                style={{
                    alignSelf: "flex-start",
                    backgroundColor:
                        item.type === "FOUND"
                            ? "#22c55e"
                            : "#ef4444",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 10,
                    marginBottom: 8,
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {item.type}
                </Text>
            </View>

            {item.image && (
                <Image
                    source={{ uri: item.image }}
                    style={{
                        width: "100%",
                        height: 180,
                        borderRadius: 12,
                        marginBottom: 10,
                    }}
                />
            )}

            <Text
                style={{
                    color: "#3b82f6",
                    fontWeight: "bold",
                }}
            >
                🏷 {item.category}
            </Text>

            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                }}
            >
                {item.title}
            </Text>

            <Text>
                📍 {item.location}
            </Text>
            <View
                style={{
                    marginTop: 8
                }}
            >
                <Text
                    style={{
                        color:
                            matchCount > 0
                                ? "#16a34a"
                                : "#6b7280",
                        fontWeight: "bold",
                    }}
                >
                    🔍 {matchCount}{" "}
                    {matchCount === 1
                        ? "Match Found"
                        : "Matches Found"}
                </Text>
            </View>
            <TouchableOpacity
                onPress={showMatches}
                style={{
                    backgroundColor:
                        "#3b82f6",
                    padding: 8,
                    borderRadius: 8,
                    marginTop: 10,
                }}
            >
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    🔍 Find Matches
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    Linking.openURL(
                        `tel:${item.contact}`
                    )
                }
            >
                <Text
                    style={{
                        color: "#2563eb",
                        marginTop: 5,
                    }}
                >
                    📞 {item.contact}
                </Text>
            </TouchableOpacity>

            <Text>
                {item.status === "CLAIMED"
                    ? "✅ CLAIMED"
                    : "🟢 ACTIVE"}
            </Text>

            <Text>
                {item.description}
            </Text>

            {ownedItems[item._id] && (
                <>
                    <Text
                        style={{
                            color: "#f59e0b",
                            fontWeight: "bold",
                            marginTop: 8,
                        }}
                    >
                        ⭐ Your Post
                    </Text>

                    {item.status !==
                        "CLAIMED" && (
                            <TouchableOpacity
                                style={{
                                    backgroundColor:
                                        "#22c55e",
                                    padding: 10,
                                    borderRadius: 10,
                                    alignItems: "center",
                                    marginTop: 10,
                                }}
                                onPress={() =>
                                    markClaimed(
                                        item._id
                                    )
                                }
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight:
                                            "bold",
                                    }}
                                >
                                    Mark Claimed
                                </Text>
                            </TouchableOpacity>
                        )}

                    <TouchableOpacity
                        style={{
                            backgroundColor:
                                "red",
                            padding: 10,
                            borderRadius: 10,
                            marginTop: 10,
                        }}
                        onPress={() =>
                            confirmDelete(
                                item._id
                            )
                        }
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight:
                                    "bold",
                                textAlign:
                                    "center",
                            }}
                        >
                            Delete
                        </Text>
                    </TouchableOpacity>
                </>
            )}

            <Text
                style={{
                    marginTop: 10,
                    color: "gray",
                }}
            >
                ⏱{" "}
                {getTimeAgo(
                    item.createdAt
                )}
            </Text>
        </View>
    );
}