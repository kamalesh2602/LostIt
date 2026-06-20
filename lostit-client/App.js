import React, { useState } from "react";
import {
  Alert, Text
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
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

export default function App() {
  const [screen, setScreen] =
    useState("feed");

  const [title, setTitle] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [type, setType] =
    useState("LOST");

  const [search, setSearch] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [contact, setContact] =
    useState("");

  const [category,
    setCategory] =
    useState("Electronics");

  const [filter, setFilter] =
    useState("ALL");

  const [showMine,
    setShowMine] =
    useState(false);

  const {
    items,
    ownedItems,
    refreshing,
    onRefresh,
    addItem,
    markClaimed,
    deleteItem,
  } = useItems();

  const [matches, setMatches] =
    useState([]);

  const pickImage = async () => {
    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.canceled) {
      setImage(
        result.assets[0].uri
      );
    }
  };

  const confirmDelete = (id) => {
    Alert.alert(
      "Delete Item",
      "Are you sure?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () =>
            deleteItem(id),
        },
      ]
    );
  };

  const handleSubmit =
    async () => {
      if (
        !title.trim() ||
        !location.trim() ||
        !contact.trim()
      ) {
        alert(
          "Fill all required fields"
        );
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
      setCategory(
        "Electronics"
      );

      setScreen("feed");
    };

  const filteredItems =
    items.filter((item) =>
      item.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const visibleItems =
    filteredItems.filter(
      (item) => {
        if (
          showMine &&
          !ownedItems[item._id]
        ) {
          return false;
        }

        if (
          filter === "ALL"
        ) {
          return true;
        }

        return (
          item.type ===
          filter ||
          item.status ===
          filter
        );
      }
    );

  return (
    <LinearGradient
      colors={[
        "#0f172a",
        "#1e293b",
        "#312e81",
      ]}
      style={{
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
      }}
    >
      {screen !== "about" && (
        <Text
          style={{
            color: "white",
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          LostIt
        </Text>
      )}

      {screen === "feed" && (
        <>
          <StatsCard
            items={items}
          />

          <FilterBar
            filter={filter}
            setFilter={setFilter}
            showMine={showMine}
            setShowMine={setShowMine}
          />

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
        </>
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
        <MatchesScreen
          matches={matches}
        />
      )}

      {screen === "about" && (
        <AboutScreen />
      )}

      <BottomNav
        screen={screen}
        setScreen={setScreen}
      />
    </LinearGradient>
  );
}