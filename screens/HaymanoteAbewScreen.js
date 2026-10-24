import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// ከምስሎቹ የተወጡት 58ቱ የቅዱሳን አበው ስሞች
const fathersList = [
  'እልመስጦአግያ',
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
  'ሃይማኖተ አበው ዘቅዱስ ዲዮናስዮስ',
  'ሃይማኖተ አበው ዘቅዱስ አክርስቶዶሎስ',
  'ሃይማኖተ አበው ዘቅዱስ ዘዮሐንስ',
  'ሃይማኖተ አበው ዘቅዱስ ሐቢብ',
  'ሃይማኖተ አበው ዘዘካርያስ ይህያ',
  'ቃለ ግዘት',
  'ስምዓት'
];

export default function HaymanoteAbewScreen({ navigation }) {
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
            onPress={() => {
              if (name === 'እልመስጦአግያ' || name === 'እልመስማእያ') {
                navigation.navigate('AlmesmayaScreen');
              } else if (name === 'አመ ሐዋርያት') {
                navigation.navigate('AmeHawaryatScreen');
              } else if (name === 'ሃይማኖተ አበው ዘቅዱስ ሄሬኔዎስ') {
                navigation.navigate('HereneosScreen');
              } else if (name === 'ሃይማኖተ አበው ዘቅዱስ አጢፎስ') {
                navigation.navigate('AtifosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ አርክያኦስ') {
                navigation.navigate('ArkyaosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዲዮናስዮስ') {
                navigation.navigate('DiyonasayosScreen');
              } else if (name === 'ሃይማኖተ አበው ዘቅዱስ እግናጥዮስ') {
                navigation.navigate('IgnatyosScreen');
              } else if (name === 'ሃይማኖተ አበው ዘቅዱስ ገርጎሪዮስ') {
                    if (index === 12) {
                      navigation.navigate('Gergorios2Screen');
                    } else {
                      navigation.navigate('GergoriosScreen');
                    }
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ እስክንድሮስ') {
                navigation.navigate('EskendrosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘሠለስቱ ምዕት') {
                navigation.navigate('SelesTuMietScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ') {
                navigation.navigate('AtnatewosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ባስልዮስ') {
                navigation.navigate('BasleyosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ፊሊክስ') {
                navigation.navigate('FeliksScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ አቡሊዲስ') {
                navigation.navigate('AbulidisScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ እያክንድሮስ') {
                navigation.navigate('EyakndrosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ስልብስትሮስ') {
                navigation.navigate('SelbestrosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ቪጣሊስ') {
                navigation.navigate('VetalisScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ኤፍሬም') {
                navigation.navigate('EfremScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ኤራቅሊስ') {
                navigation.navigate('EraqlisScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ሳብሊኖስ') {
                navigation.navigate('SablinosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ አፍሮንዮስ') {
                navigation.navigate('AfronyosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ') {
                navigation.navigate('YohannesScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ') {
                navigation.navigate('TewodosyosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ኤጲፋንዮስ') {
                navigation.navigate('EpifanyosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዘገርጎሪዮስ') {
                navigation.navigate('ZegergoriosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ አፈወርቅ') {
                navigation.navigate('YohannesAfeworkScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ቴዎፍሎስ') {
                navigation.navigate('TewoflosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ቄርሎስ') {
                navigation.navigate('QerlosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ' && index === 29) { 
                  navigation.navigate('Tewodosyos2Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ሳይረስ') {
                navigation.navigate('SayresScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ያዕቆብ') {
                navigation.navigate('YaqobScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ብንያሚ') {
                navigation.navigate('BinyamiScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ' && index === 33) {
                navigation.navigate('Yohannes2Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ኪሪኦስ') {
                navigation.navigate('KiriosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ' && index === 35) {
                navigation.navigate('Tewodosyos3Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ') {
                navigation.navigate('DiosqorosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘአባ ገብርኤል') {
                navigation.navigate('AbaGebrielScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ቆዝሞስ') {
                navigation.navigate('QozmosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ባስልዮስ' && index === 39) {
                navigation.navigate('Baslios2Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ቆዝሞስ' && index === 40) {
                navigation.navigate('Qozmos2Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ መቃርስ') {
                navigation.navigate('MaqaresScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ' && index === 42) {
                navigation.navigate('Diosqoros2Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ሚናስ') {
                navigation.navigate('MinasScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ' && index === 44) {
                navigation.navigate('Diosqoros3Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ' && index === 45) {
                navigation.navigate('Yohannes3Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ፊልታዎስ') {
                navigation.navigate('FiltawosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ እግናጥዮስ' && index === 47) {
                navigation.navigate('Egnatios2Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ' && index === 48) {
                navigation.navigate('Atnatewos2Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ' && index === 49) {
                navigation.navigate('Yohannes4Screen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዘካርያስ' && index === 50) {
                navigation.navigate('ZekariasScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ሰኑትዩ') {
                navigation.navigate('SenutiyuScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዲዮናስዮስ') {
                navigation.navigate('DionasyosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ አክርስቶዶሎስ') {
                navigation.navigate('AkristodolosScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ዘዮሐንስ') {
                navigation.navigate('ZeyohannesScreen');
              }else if (name === 'ሃይማኖተ አበው ዘቅዱስ ሐቢብ') {
                navigation.navigate('HabibScreen');
              } 
              else if (name === 'ሃይማኖተ አበው ዘዘካርያስ ይህያ') {
                navigation.navigate('ZekariasYihyaScreen');
              } 
              else if (name === 'ቃለ ግዘት') {
                navigation.navigate('QalGizetScreen');
              } 
              else if (name === 'ስምዓት') {
                navigation.navigate('SemaatScreen');
              } else {
                  Alert.alert(name, 'HaymanoteAbew');
              }
            }}
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