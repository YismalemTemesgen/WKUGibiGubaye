import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MiaphysitismScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>ነገረ ተዋሕዶ (Miaphysitism)</Text>
        
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ተዋሕዶ ማለት ምን ማለት ነው?</Text>
          </View>
          <Text style={styles.paragraph}>
            «ተዋሕዶ» የሚለው ቃል ሁለት አካላት ወይም ሁለት ባሕርያት (መለኮትና ትስብእት) ያለ መለወጥ፣ ያለ መደባለቅ፣ ያለ መለያየት እና ያለ መከፋፈል በአንድ አካል በአንድ ባሕርይ መዋሐዳቸውን የሚያሳይ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን መሠረታዊ የክርስቶስ ትምህርት ነው።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«አንድ አካል ከሁለት አካል፣ አንድ ባሕርይ ከሁለት ባሕርይ (ያለ መደባለቅ እና ያለ መለወጥ)»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ ትምህርት ጌታችን ኢየሱስ ክርስቶስ ፍጹም አምላክ እና ፍጹም ሰው መሆኑን፣ መለኮቱ ከሥጋው ጋር ሲዋሐድ ሁለቱ ባሕርያት አንድ እንደሆኑ ነገር ግን ባሕርያተ መለኮት ወደ ባሕርያተ ሥጋ ሳይለወጡ፣ ሥጋም ወደ መለኮት ሳይለወጥ በረቂቅ አንድነት የጸኑ መሆናቸውን ያስተምራል።
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