import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChristReconciliationScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>የክርስቶስ የማስታረቅ አገልግሎት</Text>
        
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>በመስቀል መከራ የተገኘው ሰላም</Text>
          </View>
          <Text style={styles.paragraph}>
            ሰው በበደሉ ምክንያት ከእግዚአብሔር ተለይቶ በነበረበት ጊዜ፣ ጌታችን ኢየሱስ ክርስቶስ በፈቃዱ ሥጋን ለብሶ በመስቀል ላይ በመቅረብ የጥሉን ግድግዳ አፈረሰ።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እግዚአብሔር በክርስቶስ ሆኖ ዓለሙን ከራሱ ጋር ያስታርቅ ነበርና።» (2ኛ ቆሮ 5:19)</Text>
          </View>

          <Text style={styles.paragraph}>
            በደሙ ዋጋ ሰውን ከፈጣሪው ጋር በማስታረቅ የልጅነት ክብርን የመለሰ፣ የሞትን ሥልጣን ሽሮ የዘለአለም ሕይወትን ያወረሰ የማስታረቅ ሥራውን በዕለተ መስቀል ፈጸመ።
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { fontSize: 18, fontWeight: 'bold', color: '#004D40', textAlign: 'center', marginBottom: 20 },
  sectionBox: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#E0E0E0', elevation: 2 },
  headingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  verticalBar: { width: 4, height: 18, backgroundColor: '#004D40', borderRadius: 2, marginRight: 8 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#004D40' },
  paragraph: { fontSize: 14.5, color: '#333333', lineHeight: 24, marginBottom: 10, textAlign: 'justify' },
  quoteBox: { backgroundColor: '#E0F2F1', borderLeftWidth: 4, borderLeftColor: '#00796B', padding: 12, marginVertical: 10, borderRadius: 6 },
  quoteText: { fontSize: 14, fontStyle: 'italic', color: '#004D40', fontWeight: '600', textAlign: 'center' }
});