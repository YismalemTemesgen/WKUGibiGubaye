import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Clipboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SupportScreen({ navigation }) {
  const accountNumber = '1000467682028';

  const copyToClipboard = () => {
    Clipboard.setString(accountNumber);
    Alert.alert('ተሳክቷል', 'የአካውንት ቁጥሩ ተኮርድሏል (Copied)!');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Top Banner Card */}
      <View style={styles.bannerCard}>
        <View style={styles.bannerIconBox}>
          <MaterialCommunityIcons name="hand-heart" size={28} color="#FFF" />
        </View>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>ግቢ ጉባኤውን ለመረዳት</Text>
          <Text style={styles.bannerSubtitle}>ለተማሪዎች አገልግሎት የሚደረግ የድጋፍ እና የበጎ አድራጎት መርሃ ግብር</Text>
        </View>
      </View>

      {/* Main Content Card */}
      <View style={styles.contentCard}>
        
        <Text style={styles.greetingText}>
          ሰላም የእግዚአብሔር ቤተሰቦች የግቢ ጉባኤያችን ፍሬዎች እንደት ናችሁ!!!
        </Text>

        <Text style={styles.paragraph}>
          የወልቂጤ ዩኒቨርሲቲ ኦርቶዶክስ ተዋሕዶ ግቢ ጉባኤ አባላት እና መምህራን ለተልዕኮው ስኬት ሁልጊዜም በጸሎትና በሃብት ከጎናችን ናችሁ። ይህንን አግልግሎት የበለጠ ለማጠናከር እና የተማሪዎችን ፍላጎት ለማሟላት የበኩላችሁን አስተዋጽኦ እንዲያበረክቱ ጥሪያችንን እናቀርባለን።
        </Text>

        {/* Account Box */}
        <View style={styles.accountBox}>
          <View style={styles.accountHeaderRow}>
            <MaterialCommunityIcons name="bank" size={22} color="#004D40" />
            <Text style={styles.accountHeaderTitle}>የባንክ አካውንት መረጃ</Text>
          </View>
          
          <Text style={styles.accountText}>
            የአካውንት ቁጥር፦ <Text style={styles.boldText}>{accountNumber}</Text>
          </Text>
          <Text style={styles.bankNameText}>
            🏦 Eotc m/k/w/m/ wku wana gibi gubae
          </Text>

          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <MaterialCommunityIcons name="content-copy" size={16} color="#FFF" />
            <Text style={styles.copyButtonText}>አካውንት ቁጥር ቅዳ (Copy)</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.highlightText}>
          በረከቱ ያልደረሳችሁ አሁንም መሳተፍ ትችላላችሁ!!!{'\n'}
          መሳተፍ ለሚፈልጉትም አሳውቁ!!!
        </Text>

        <Text style={styles.closingText}>
          እንወዳችኋለን እግዚአብሔር ያክብራችሁ እግዚአብሔር ይባርካችሁ!!!{'\n\n'}
          ሰላመ እግዚአብሔር አይለየን!!!! ❤
        </Text>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={18} color="#004D40" />
          <Text style={styles.backButtonText}>ወደ ዋናው ገጽ ተመለስ</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F5',
    padding: 14,
  },
  bannerCard: {
    backgroundColor: '#004D40',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 3,
  },
  bannerIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#E0F2F1',
    fontSize: 11,
    lineHeight: 16,
  },
  contentCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    elevation: 1,
  },
  greetingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 14,
    lineHeight: 22,
  },
  paragraph: {
    fontSize: 13,
    color: '#333',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'justify',
  },
  accountBox: {
    backgroundColor: '#F0F7F4',
    borderWidth: 1,
    borderColor: '#C8E6C9',
    borderRadius: 14,
    padding: 16,
    marginVertical: 12,
  },
  accountHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  accountHeaderTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004D40',
    marginLeft: 8,
  },
  accountText: {
    fontSize: 14,
    color: '#222',
    marginBottom: 6,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#004D40',
    letterSpacing: 1,
  },
  bankNameText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  copyButton: {
    backgroundColor: '#004D40',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  copyButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  highlightText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#D84315',
    textAlign: 'center',
    marginVertical: 14,
    lineHeight: 20,
  },
  closingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#004D40',
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F2F1',
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004D40',
  },
});