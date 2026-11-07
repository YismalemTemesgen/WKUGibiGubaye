import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AcceptChristScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>ክርስቶስን እንደንግል አዳኝ አድርገው ተቀብለውታል?</Text>
        <Text style={styles.text}>
          በእግዚአብሔር ፊት ራሳችንን አዋርደን፥ ኢየሱስ ክርስቶስ የአለም መድኃኒት መሆኑን በማመን እና ሕይወታችንን ለእርሱ በመስጠት የድኅነትን ሕይወት እንለማመዳለን።
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