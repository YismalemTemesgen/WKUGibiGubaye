import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tim25Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>የአዲስ ኪዳን መካከለኛ [1ኛ ጢሞ 2:5]</Text>
        <Text style={styles.text}>
          አንድ እግዚአብሔር አለና፥ በእግዚአብሔርና በሰውም መካከል ደግሞ አንድ መካከለኛ አለ፤ እርሱም ሰው የሆነ ክርስቶስ ኢየሱስ ነው።
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  contentContainer: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#004D40', marginBottom: 15 },
  text: { fontSize: 16, color: '#333', lineHeight: 24 },
});