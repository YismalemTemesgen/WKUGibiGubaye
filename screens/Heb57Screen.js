import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Heb57Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>ጸሎትንና ምልጃን አቀረበ [ዕብ 5:7]</Text>
        <Text style={styles.text}>
          እርሱም በሥጋ ሳለ ከሞት ሊያድነው ወደሚችለው ከታላቅ ጩኸትና ከክንብዕ ጋር ጸሎትንና ምልጃን አቀረበ፥ ስለ መፈራቱም ተሰማለት።
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