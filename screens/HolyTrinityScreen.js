import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HolyTrinityScreen({ navigation }) {
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
        <Text style={styles.mainTitle}>የእግዚአብሔር አንድነትና ሦስትነት (ምሥጢረ ሥላሴ)</Text>
        <Text style={styles.paragraph}>
          በአብ በወልድ በመንፈስ ቅዱስ ሦስትነትና በአንድ አምላክነት እናምናለን። አብ ወላዲ፣ ወልድ ተወላዲ፣ መንፈስ ቅዱስ ከእግዚአብሔር የሚወጣ ነው።
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሄዱም በአለም ሁሉ ሐዋርያት በአብ በወልድ በመንፈስ ቅዱስ ስም አጠመቁ...»</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { fontSize: 20, fontWeight: 'bold', color: '#004D40', marginBottom: 16, textAlign: 'center' },
  paragraph: { fontSize: 14.5, color: '#333333', lineHeight: 22, marginBottom: 10 },
  quoteBox: { backgroundColor: '#E0F2F1', padding: 12, borderRadius: 8, borderLeftWidth: 4, borderLeftColor: '#004D40', marginVertical: 8 },
  quoteText: { fontSize: 14, fontStyle: 'italic', color: '#004D40', lineHeight: 20 },
});