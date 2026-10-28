import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HolyTraditionScreen({ navigation }) {
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
        
        <Text style={styles.mainTitle}>ቅዱስ ትውፊት</Text>

        <Text style={styles.paragraph}>
          የክርስትና እምነት፣ ከዘመናት ማዕበል ተሻግሮ፣ ከትውልድ ወደ ትውልድ ሲተላለፍ የመጣው መለኮታዊ ውርስ ነው። ይህ ውርስ ከቀላል ልማድ ወይም የቃል ወግ እጅግ የላቀ፣ ሕያው የሆነ የእግዚአብሔር ቃል ቀጣይ መገለጫ ነው። ቅዱስ ትውፊት ማለት መለኮታዊ እውነትን ከእግዚአብሔር ወደ ሰው፣ ከአበው ወደ ልጆቻቸው፣ ከነቢያትና ሐዋርያት ወደ ቤተክርስቲያን የሚተላለፍበት ሕያው ሂደት ነው።
        </Text>

        <Text style={styles.sectionHeader}>ክርስቲያናዊ ትውፊት : የዘመናት ድልድይ</Text>
        <Text style={styles.paragraph}>
          የክርስቲያናዊ ትውፊት ሥር መሠረቱ በብሉይ ኪዳን ዘመን ይገኛል። ከአበው ወደ መሳፍንት፣ ከመሳፍንት ወደ ነገሥት፣ ከነገሥት ወደ ነቢያት ሲተላለፍ ቆይቶ፣ በሐዲስ ኪዳን በጌታችን በኢየሱስ ክርስቶስ ፍጹም በሆነ መንገድ ተገለጠ[cite: 60, 61]。
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መንግሥቶ ወጽድቆ ዘአወፈየኒ አወፈይኩከ» (ቅዳሴ)</Text>
        </View>

        <Text style={styles.sectionHeader}>መጽሐፍ ቅዱስ እና ቅዱስ ትውፊት</Text>
        <Text style={styles.paragraph}>
          መጽሐፍ ቅዱስ የመጀመሪያውን ስፍራ የሚይዝ ቢሆንም፣ ከሌላው የትውፊት አካል ግን ተነጥሎ የሚታይ አይደለም። መጽሐፍ ቅዱስ ያለ ትውፊት ብቻውን ፍጻሜ የለውም፤ ሌላው ቅዱስ ትውፊትም ያለ መጽሐፍ ቅዱስ መሠረት የለውም[cite: 63]。
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እንዲሁም እኛ ደግሞ የተቀበልነውን ከሁሉ በፊት ሰጠኋችሁ...» (1 ቆሮንቶስ 15:1)[cite: 67]</Text>
        </View>

        <Text style={styles.sectionHeader}>ቅዱስ ትውፊት በዘመነ ብሉይ</Text>
        <Text style={styles.paragraph}>
          ትውፊት ሰው ከመፈጠሩ አንስቶ የነበረ ነው። ሊቀ ነቢያት ሙሴ መጽሐፍ እስኪጽፍ ድረስ፣ የእግዚአብሔር ሰዎች ከ4000 ዓመታት በላይ ሲመሩ የነበረው በቃልና በተግባር በሚገለጠው ቅዱስ ትውፊት ነበር[cite: 63]。
        </Text>

        <Text style={styles.sectionHeader}>ቅዱስ ትውፊት በዘመነ ሐዋርያት</Text>
        <Text style={styles.paragraph}>
          ጌታችን ኢየሱስ ክርስቶስ ደቀ መዛሙርቱን ያስተማረው በጽሑፍ አልነበረም፡፡ ቤተክርስቲያን ወንጌል ከመጻፉ በፊት ወንጌልን በቅዱስ ትውፊት ታውቃለች፤ ወንጌልን ስትኖረው ነበረች[cite: 64]。
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሐዋርያት በቃል በመናገርም እንጂ በጽሑፍ ብቻ እንዳላስተማሩ በቃላችንም ቢሆን ወይም በመልዕክታችን የተማራችሁን ወግ (ትውፊት) ያዙ ብለዋል[cite: 66]።» — ቅዱስ ዮሐንስ አፈወርቅ</Text>
        </View>

        <Text style={styles.sectionHeader}>ቅዱስ ትውፊትን ከሐሰተኛ ትውፊት መለየት</Text>
        <Text style={styles.paragraph}>
          በቤተክርስቲያን ያለው ሁሉ ቅዱስ ትውፊት ላይሆን ይችላል። ቅዱስ ትውፊትን ለመለየት የሚከተሉት መስፈርቶች አሉ።
        </Text>
        <Text style={styles.paragraph}>
          - ትውፊቱ ከሐዋርያት ተያይዞ የመጣ መሆን አለበት;{'\n'}
          - ከጥንት ጀምሮ ሁልጊዜ በዓለም አቀፋዊት ቤተክርስቲያን የታመነ መሆን አለበት;{'\n'}
          - መለወጥና መቋረጥ ያልተደረገበት መሆን አለበት。
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { fontSize: 20, fontWeight: 'bold', color: '#004D40', marginBottom: 16, textAlign: 'center' },
  sectionHeader: { fontSize: 16, fontWeight: 'bold', color: '#00796B', marginTop: 16, marginBottom: 8 },
  paragraph: { fontSize: 14.5, color: '#333333', lineHeight: 22, marginBottom: 10 },
  quoteBox: {
    backgroundColor: '#E0F2F1',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#004D40',
    marginVertical: 8,
  },
  quoteText: { fontSize: 14, fontStyle: 'italic', color: '#004D40', lineHeight: 20 },
});