import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HolySpiritGloryScreen({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>የመንፈስ ቅዱስ መለኮታዊ ክብር</Text>
        <Text style={styles.paragraph}>
          መንፈስ ቅዱስ ከአብ የሚወጣ፣ ከወልድ ጋር በአንድነት የሚሰግድለትና የሚመሰገን፣ ሕይወትን የሚሰጥ አምላክ ነው።
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { fontSize: 20, fontWeight: 'bold', color: '#004D40', marginBottom: 16, textAlign: 'center' },
  paragraph: { fontSize: 14.5, color: '#333333', lineHeight: 22, marginBottom: 10 },
});