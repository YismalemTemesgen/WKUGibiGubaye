import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Rom834Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>ስለ እኛ የሚማልደው [ሮሜ 8:34]</Text>
        <Text style={styles.text}>
          ክርስቶስ ኢየሱስ ሞተ፤ ከሙታንም ተነሣ፤ በእግዚአብሔርም ቀኝ አለ፤ ደግሞ ስለ እኛ ይማልዳል ሲል እርሱ በሰብአዊ ባሕርዩ ለድኅነታችን የማያቋርጥ አማላጅነቱን እንደሚፈጽም ያሳያል።
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