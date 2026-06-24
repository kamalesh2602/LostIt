import React, { useState } from "react";
import {
    Alert,
    Text,
    StatusBar,
    StyleSheet,
    View,
    SafeAreaView,
    Platform
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import FeedScreen from "./src/screens/FeedScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ReportScreen from "./src/screens/ReportScreen";
import AboutScreen from "./src/screens/AboutScreen";

import BottomNav from "./src/components/BottomNav";
import FilterBar from "./src/components/FilterBar";
import StatsCard from "./src/components/StatsCard";

import useItems from "./src/hooks/useItems";
import MatchesScreen from "./src/screens/MatchesScreen";
import { getTimeAgo } from "./src/utils/timeAgo";
import { SIZES, ThemeProvider, useTheme } from "./src/constants/theme"; 

function MainAppContent() {
    const [screen, setScreen] = useState("feed");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("LOST");
    const [search, setSearch] = useState("");
    const [image, setImage] = useState(null);
    const [contact, setContact] = useState("");
    const [category, setCategory] = useState("Electronics");
    const [filter, setFilter] = useState("ALL");
    const [showMine, setShowMine] = useState(false);
    const [matches, setMatches] = useState([]);

    const {
        items,
        ownedItems,
        refreshing,
        loading,
        onRefresh,
        addItem,
        markClaimed,
        deleteItem,
    } = useItems();

    // Consume dynamic theme parameters
    const { colors, isDarkMode, themeLoaded } = useTheme();

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const confirmDelete = (id) => {
        Alert.alert(
            "Delete Item",
            "Are you sure?",
            [
                { text: "Cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => deleteItem(id),
                },
            ]
        );
    };

    const handleSubmit = async () => {
        if (!title.trim() || !location.trim() || !contact.trim()) {
            alert("Fill all required fields");
            return;
        }

        await addItem({
            title,
            image,
            contact,
            location,
            category,
            description,
            status: "ACTIVE",
            type,
        });

        setTitle("");
        setLocation("");
        setDescription("");
        setContact("");
        setImage(null);
        setType("LOST");
        setCategory("Electronics");
        setScreen("feed");
    };

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const visibleItems = filteredItems.filter((item) => {
        if (showMine && !ownedItems[item._id]) {
            return false;
        }
        if (filter === "ALL") {
            return true;
        }
        return item.type === filter || item.status === filter;
    });

    if (loading || !themeLoaded) {
        return (
            <View style={[styles.mainContainer, { backgroundColor: colors.background }, styles.centerContainer]}>
                <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={colors.background} translucent />
                <Text style={[styles.loadingTitle, { color: colors.textPrimary }]}>Waking up server...</Text>
                <Text style={[styles.loadingSubtitle, { color: colors.textSecondary }]}>This may take a few seconds</Text>
            </View>
        );
    }
    
    return (
        <SafeAreaView style={[styles.mainContainer, { backgroundColor: colors.background }]}>
            <StatusBar 
                barStyle={isDarkMode ? "light-content" : "dark-content"} 
                backgroundColor={colors.background} 
                translucent={false} 
            />

            {screen !== "about" && (
                <View style={styles.headerWrapper}>
                    <Text style={[styles.brandTitle, { color: colors.primary }]}>LostIt</Text>
                </View>
            )}

            {screen === "feed" && (
                <View style={styles.screenFlexWrapper}>
                    <View style={styles.paddedHeaderElements}>
                        <StatsCard items={items} />
                        <FilterBar
                            filter={filter}
                            setFilter={setFilter}
                            showMine={showMine}
                            setShowMine={setShowMine}
                        />
                    </View>
                    <FeedScreen
                        items={visibleItems}
                        ownedItems={ownedItems}
                        markClaimed={markClaimed}
                        confirmDelete={confirmDelete}
                        getTimeAgo={getTimeAgo}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        setMatches={setMatches}
                        setScreen={setScreen}
                    />
                </View>
            )}

            {screen === "search" && (
                <SearchScreen
                    search={search}
                    setSearch={setSearch}
                    items={visibleItems}
                    ownedItems={ownedItems}
                    markClaimed={markClaimed}
                    confirmDelete={confirmDelete}
                    getTimeAgo={getTimeAgo}
                />
            )}

            {screen === "report" && (
                <ReportScreen
                    title={title}
                    setTitle={setTitle}
                    location={location}
                    setLocation={setLocation}
                    contact={contact}
                    setContact={setContact}
                    description={description}
                    setDescription={setDescription}
                    image={image}
                    category={category}
                    setCategory={setCategory}
                    type={type}
                    setType={setType}
                    pickImage={pickImage}
                    addItem={handleSubmit}
                />
            )}

            {screen === "matches" && (
                <MatchesScreen matches={matches} />
            )}

            {screen === "about" && (
                <AboutScreen />
            )}

            <BottomNav screen={screen} setScreen={setScreen} />
        </SafeAreaView>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <MainAppContent />
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0, 
    },
    centerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    screenFlexWrapper: {
        flex: 1,
    },
    headerWrapper: {
        paddingHorizontal: SIZES.medium,
        marginTop: 10,
        marginBottom: SIZES.small,
    },
    brandTitle: {
        fontSize: 32,
        fontWeight: "900",
        letterSpacing: -1,
    },
    paddedHeaderElements: {
        paddingHorizontal: SIZES.medium,
    },
    loadingTitle: {
        fontSize: 20,
        fontWeight: "700",
    },
    loadingSubtitle: {
        marginTop: 8,
        fontSize: 14,
    },
});