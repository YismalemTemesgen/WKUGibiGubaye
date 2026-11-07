import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function John121Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>ከአብ ዘንድ መበቅ አለን? ጻድቁናሞን አለን! [1ኛ ዮሐ 2:1]</Text>
        <Text style={styles.text}>
          ልጆች ሆይ፥ ኃጢአትን እንንዳድረግ ይህን እጽፍላችሁአለሁ፤ ማንም ቢበድል ከአብ ዘንድ ጠበቃ አለን እርሱም ጻድቁ ኢየሱስ ክርስቶስ ነው።
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