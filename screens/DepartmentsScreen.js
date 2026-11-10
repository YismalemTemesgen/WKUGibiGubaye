import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const departmentItems = [
  { id: '2', title: 'የሥራ አስፈጻሚ ጽ/ቤት', screen: 'ExecutiveOffice' },
  { id: '3', title: 'የትምህርትና ሐዋርያዊ አገልግሎት ክፍል', screen: 'EducationService' },
  { id: '4', title: 'የቋንቋዎችና ልዩ ፍላጎቶች አገልግሎት ማስተባበሪያ ክፍል' },
  { id: '5', title: 'የአባላት እንክብካቤ፥ ምክክርና አቅም ማጎልበቻ ክፍል' },
  { id: '6', title: 'የመዝሙርና ሥነ ጥበባት ክፍል' },
  { id: '7', title: 'የልማትና ገቢ አሰባሰብ ክፍል' },
  { id: '8', title: 'ሐሳብና ንብረት ክፍል' },
  { id: '9', title: 'የባችና መርሐ ግብራት ማስተባበሪያ ክፍል' },
  { id: '10', title: 'የዕቅድ ክትትል፥ ሪፖርትና መረጃ ማደራጃ ክፍል' },
  { id: '11', title: 'የኦዲት አገልግሎት ክፍል' },
];

export default function DepartmentsScreen({ navigation }) {
  const handlePress = (screen, title) => {
    if (screen) {
      navigation.navigate(screen);
    } else {
      alert(`${title} ገጽ በቅርብ ቀን ይዘጋጃል!`);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {departmentItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card} 
            activeOpacity={0.7}
            onPress={() => handlePress(item.screen, item.title)}
          >
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name="book-open-page-variant" size={24} color="#004D40" />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.arrowText}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16 },
  card: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  iconBox: {
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    flex: 1,
  },
  arrowText: { 
    fontSize: 18, 
    color: '#00796B', 
    fontWeight: 'bold' 
  },
});