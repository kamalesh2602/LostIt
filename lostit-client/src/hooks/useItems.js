import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getItems,
  createItem,
  claimItem,
  deleteItemApi,
} from "../services/api";

export default function useItems() {
  const [items, setItems] = useState([]);
  const [ownedItems, setOwnedItems] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const data = await getItems();

      const ownershipMap = {};

      for (const item of data) {
        const token =
          await AsyncStorage.getItem(
            `owner_${item._id}`
          );

        ownershipMap[item._id] =
          !!token;
      }

      setOwnedItems(ownershipMap);
      setItems(data);

      setLoading(false);
    } catch (err) {
      console.error(
        "Failed to load items:",
        err
      );

      setTimeout(loadItems, 5000);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadItems();
    setRefreshing(false);
  };

  const addItem = async (item) => {
    const savedItem =
      await createItem(item);

    console.log("saved", savedItem);

    await AsyncStorage.setItem(
      `owner_${savedItem._id}`,
      savedItem.ownerToken
    );

    await loadItems();
  };

  const markClaimed = async (id) => {
    const ownerToken =
      await AsyncStorage.getItem(
        `owner_${id}`
      );

    await claimItem(
      id,
      ownerToken
    );

    await loadItems();
  };

  const deleteItem = async (id) => {
    const ownerToken =
      await AsyncStorage.getItem(
        `owner_${id}`
      );

    await deleteItemApi(
      id,
      ownerToken
    );

    await loadItems();
  };

  return {
    items,
    ownedItems,
    refreshing,
    loading,
    loadItems,
    onRefresh,
    addItem,
    markClaimed,
    deleteItem,
  };
}