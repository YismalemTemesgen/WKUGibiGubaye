import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// ከምስሎቹ የተወጡት 58ቱ የቅዱሳን አበው ስሞች (ያለ "ክፍል" እና ቁጥር)
const fathersList = [
  'እልመስማእያ',
  'አመ ሐዋርያት',
  'ሃይማኖተ አበው ዘቅዱስ ሄሬኔዎስ',
  'ሃይማኖተ አበው ዘቅዱስ አጢፎስ',
  'ሃይማኖተ አበው ዘቅዱስ አርክያኦስ',
  'ሃይማኖተ አበው ዘቅዱስ ዲዮናስዮስ',
  'ሃይማኖተ አበው ዘቅዱስ እግናጥዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ገርጎሪዮስ',
  'ሃይማኖተ አበው ዘቅዱስ እስክንድሮስ',
  'ሃይማኖተ አበው ዘሠለስቱ ምዕት',
  'ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ',
  'ሃይማኖተ አበው ዘቅዱስ ባስልዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ገርጎሪዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ፊሊክስ',
  'ሃይማኖተ አበው ዘቅዱስ አቡሊዲስ',
  'ሃይማኖተ አበው ዘቅዱስ እያክንድሮስ',
  'ሃይማኖተ አበው ዘቅዱስ ሰልብስትሮስ',
  'ሃይማኖተ አበው ዘቅዱስ ቪጣሊስ',
  'ሃይማኖተ አበው ዘቅዱስ ኤፍሬም',
  'ሃይማኖተ አበው ዘቅዱስ ኤራቅሊስ',
  'ሃይማኖተ አበው ዘቅዱስ ሳዌርያኖስ',
  'ሃይማኖተ አበው ዘቅዱስ አፍሮንዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ',
  'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ኤጲፋንዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ዘገርጎሪዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ አፈወርቅ',
  'ሃይማኖተ አበው ዘቅዱስ ቴዎፍሎስ',
  'ሃይማኖተ አበው ዘቅዱስ ቄርሎስ',
  'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ሳይረስ',
  'ሃይማኖተ አበው ዘቅዱስ ያዕቆብ',
  'ሃይማኖተ አበው ዘቅዱስ ብንያሚ',
  'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ',
  'ሃይማኖተ አበው ዘቅዱስ ኪራኮስ',
  'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ',
  'ሃይማኖተ አበው ዘአባ ገብርኤል',
  'ሃይማኖተ አበው ዘቅዱስ ቆዝሞስ',
  'ሃይማኖተ አበው ዘቅዱስ ባስልዮስ',
  'ሃይማኖተ አበው ዘቅዱስ ቆዝሞስ',
  'ሃይማኖተ አበው ዘቅዱስ መቃርስ',
  'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ',
  'ሃይማኖተ አበው ዘቅዱስ ሚናስ',
  'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ',
  'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ',
  'ሃይማኖተ አበው ዘቅዱስ ፊላታዎስ',
  'ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ',
  'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ',
  'ሃይማኖተ አበው ዘቅዱስ ዘካርያስ',
  'ሃይማኖተ አበው ዘቅዱስ ሰኑትዩ',
  'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ',
  'ሃይማኖተ አበው ዘቅዱስ አክርሲዶሎስ',
  'ሃይማኖተ አበው ዘቅዱስ ዘዮሐንስ',
  'ሃይማኖተ አበው ዘቅዱስ ሐቢብ',
  'ሃይማኖተ አበው ዘዘካርያስ ይሁዳ',
  'ቃለ ዓንቀጽ',
  'ስምምነት'
];

export default function HaymanoteAbewScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerBanner}>
          <MaterialCommunityIcons name="book-cross" size={36} color="#FFD700" />
          <Text style={styles.headerTitle}>ሃይማኖተ አበው በቪዲዮና በጽሑፍ</Text>
          <Text style={styles.headerSub}>የቅዱሳን አበው ትምህርትና ሃይማኖታዊ ምስክርነት</Text>
        </View>

        {fathersList.map((name, index) => (
          <TouchableOpacity
            key={index}
            style={styles.fatherCard}
            activeOpacity={0.7}
            onPress={() => Alert.alert(name, 'የትምህርቱ ዝርዝር በቅርብ ቀን ይጫናል!')}
          >
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="book-open-page-variant" size={20} color="#004D40" />
            </View>
            <Text style={styles.fatherName}>{name}</Text>
            <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 14 },
  headerBanner: {
    backgroundColor: '#004D40',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  headerSub: { color: '#E0F2F1', fontSize: 12, marginTop: 4 },
  fatherCard: {
    backgroundColor: '#FFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  iconCircle: {
    backgroundColor: '#E0F2F1',
    padding: 8,
    borderRadius: 50,
    marginRight: 12,
  },
  fatherName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    lineHeight: 20,
  },
});