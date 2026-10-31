import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BasicTeachingsScreen({ navigation }) {
  const teachings = [
    { title: 'ትምህርት ሃይማኖት', data: [
        { subTitle: 'የሃይማኖት ምንነትና አስፈላጊነት', screen: 'ReligionNature' },
        { subTitle: 'እምነት እና ሃይማኖት', screen: 'FaithAndReligion' },
        { subTitle: 'አንዲት እምነት / ሃይማኖት', screen: 'HowFaithReligion' },
        { subTitle: 'ኦርቶዶክስ ተዋሕዶ', screen: 'OrthodoxTewahedo' },
        { subTitle: 'የእውቀት እምነትና የእውነት እምነት', screen: 'FaithAndTruth' },
        { subTitle: 'ዶግማ እና ቀኖና', screen: 'DogmaAndCanon' },
        { subTitle: 'ቅዱስ ትውፊት', screen: 'HolyTradition' },
      ]
    },
    { title: 'ነገር መለኮት (ነገር እግዚአብሔር)', data: [
        { subTitle: 'ሀልዎተ እግዚአብሔር', screen: 'HlawinaEgziabiher' },
        { subTitle: 'ምሥጢረ ኩነት አምላካዊ', screen: 'MismireHirit' },
        { subTitle: 'ባሕርያተ እግዚአብሔር', screen: 'BahriyEgziabiher' },
        { subTitle: 'የእግዚአብሔር አንድነትና ሦስትነት (ምሥጢረ ሥላሴ)', screen: 'HolyTrinity' },
        { subTitle: 'የመንፈስ ቅዱስ መለኮታዊ ክብር', screen: 'HolySpiritGlory' },
      ]
    }
  ];

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.mainHeader}>መሰረታዊ ትምህርቶች</Text>

        {teachings.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <View style={styles.sectionHeaderBox}>
              <Text style={styles.sectionTitle}>📖 {section.title}</Text>
              <Text style={styles.sectionCount}>{section.data.length}</Text>
            </View>

            {section.data.map((item, idx) => (
              <TouchableOpacity 
                key={idx} 
                style={styles.itemRow}
                onPress={() => navigation.navigate(item.screen)}
              >
                <Text style={styles.itemText}>📄 {item.subTitle}</Text>
                <Text style={styles.arrowText}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainHeader: { fontSize: 22, fontWeight: 'bold', color: '#004D40', marginBottom: 16, textAlign: 'center' },
  sectionContainer: { marginBottom: 20, backgroundColor: '#FFFFFF', borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#E0E0E0' },
  sectionHeaderBox: { backgroundColor: '#E0F2F1', padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#004D40' },
  sectionCount: { fontSize: 14, fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#00796B', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  itemRow: { padding: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  itemText: { fontSize: 14.5, color: '#333333' },
  arrowText: { fontSize: 18, color: '#00796B', fontWeight: 'bold' },
});