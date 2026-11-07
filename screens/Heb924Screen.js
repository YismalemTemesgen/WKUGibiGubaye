import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Heb924Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>ስለ እኛ አሁን ይታይ ዘንድ [ዕብ 9:24]</Text>
        <Text style={styles.text}>
          ክርስቶስ በእጅ ወደ ተሰራች፥ የእውነተኛዪቱ ምሳሌ ወደሆነች ቅድስት አልገባም፥ ዳሩ ግን አሁን በእግዚአብሔር ፊት ስለ እኛ ይታይ ዘንድ ወደ ሰማይ ገብቷል።
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