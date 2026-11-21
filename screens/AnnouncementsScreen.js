import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function AnnouncementsScreen() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "announcements"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const seenIds = new Set();
        const uniqueList = list.filter((item) => {
          if (item.messageId === undefined || item.messageId === null || item.messageId === "") {
            return true;
          }
          const normalizedId = String(item.messageId);
          if (seenIds.has(normalizedId)) return false;
          seenIds.add(normalizedId);
          return true;
        });

        setAnnouncements(uniqueList);
        setLoading(false);
      },
      (error) => {
        console.error("Firestore error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleString();
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.badge}>
          {item.source === "telegram" ? "Telegram" : "ማስታወቂያ"}
        </Text>
        <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
      </View>

      {item.title ? <Text style={styles.title}>{item.title}</Text> : null}
      {item.body ? <Text style={styles.body}>{item.body}</Text> : null}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#1E3A8A" />
        <Text style={styles.loadingText}>ማስታወቂያዎችን በመጫን ላይ...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <Text style={styles.header}>የግቢ ጉባኤ ማስታወቂያዎች</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>እስካሁን ምንም ማስታወቂያ የለም።</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 15,
    color: "#4B5563",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#DBEAFE",
    color: "#1E40AF",
    fontSize: 12,
    fontWeight: "600",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  date: {
    fontSize: 12,
    color: "#6B7280",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 15,
    color: "#6B7280",
  },
});