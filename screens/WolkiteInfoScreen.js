import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WolkiteInfoScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Top Banner */}
      <View style={styles.bannerCard}>
        <View style={styles.bannerIconBox}>
          <MaterialCommunityIcons name="office-building" size={28} color="#FFF" />
        </View>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.optionTag}>አማራጭ 1</Text>
          <Text style={styles.bannnerTitle}>ስለ ወልቂጤ ዩኒቨርሲቲ</Text>
          <Text style={styles.bannerSubtitle}>ማጠቃለያ እና ታሪካዊ ዳራ • Background</Text>
        </View>
      </View>

      {/* Main Content Body */}
      <View style={styles.contentCard}>
        
        <View style={styles.sectionHeader}>
          <View style={styles.greenBar} />
          <Text style={styles.sectionTitle}>ማጠቃለያ እና ታሪካዊ ዳራ</Text>
        </View>

        <Text style={styles.paragraph}>
          የወልቂጤ ዩኒቨርሲቲ የተመሠረተው በኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ የሚኒስትሮች ምክር ቤት አዋጅ ቁጥር 1097/2011 መሠረት ሲሆን፤ ይህም ሀገሪቱ ማህበራዊና ኢኮኖሚያዊ ሽግግርን ለማፋጠን ካቀደችው የከፍተኛ ትምህርት ስትራቴጂካዊ ማስፋፊያ አካል አንዱ ነው:: ዩኒቨርሲቲው ብቁና ተወዳዳሪ ተማሪዎችን በማፍራት፣ ችግር ፈቺ ምርምሮችን በማካሄድ እና ማህበረሰብ አቀፍ አገልግሎቶችን በመስጠት ረገድ የራሱን አዎንታዊ አስተዋጽኦ እንዲያበረክት ግልጽ ተልዕኮ ተሰጥቶታል::
        </Text>

        <Text style={styles.paragraph}>
          የወልቂጤ ዩኒቨርሲቲ አደረጃጀት ከተግባር ተኮር ትምህርት፣ ከጠንካራ የኢንዱስትሪ ትስስር፣ በፈጠራ ከተደገፈ ማስተማር እና ከሥራ ገበያ ፍላጎት ጋር ከተጣጣመው የተግባራዊ ሳይንስ ዩኒቨርሲቲዎች (Universities of Applied Sciences - UAS) ዓለም አቀፋዊና ሀገራዊ እቅድ ጋር ሙሉ በሙሉ የሚስማማ ነው:: በዚህ ማዕቀፍ ውስጥ በተግባር ላይ የተመሠረተ ትምህርትን፣ በክህሎት ላይ የተመሠረተ ሥርዓተ-ትምህርትን፤ እንዲሁም የማስተማር፣ የምርምር እና የማህበረሰብ አገልግሎት ትስስርን በማጠናከር በእውነተኛው ዓለም የሚገጥሙ ተ hisaa-eejiን ለመፍታት ይሰራል::
        </Text>

        <Text style={styles.paragraph}>
          ለዩኒቨርሲቲው መመሥረት መሠረት የተጣለው በ2003 ዓ.ም (2010 እ.ኤ.አ) ሲሆን፤ ይህም በዋናነት የማህበረሰቡን ጥያቄና ሀገሪቱ ለሰለጠነ የሰው ኃይል ያላትን ፍላጎት ለማሟላት የተደረገ ጥረት ነው:: በኢትዮጵያ በሦስተኛ ትውልድ የመንግሥት ዩኒቨርሲቲዎች ምድብ ውስጥ የተካተተውና በተግባራዊ ሳይንስ ዘርፍ የተመደበው የወልቂጤ ዩኒቨርሲቲ፤ ሕጋዊ የትምህርት ሥራውን በይፋ የጀመረው ኅዳር 15 ቀን 2005 ዓ.ም (November 24, 2012) ነው:: የመጀመሪያው ዙር የማስተማር ሥራ የተከናወነው በወልቂጤ ኢንዱስትሪ ኮሌጅ ውስጥ ሲሆን፤ በወቅቱ 551 ተማሪዎች በሦስት ኮሌጆች (ኢንጂነሪንግና ቴክኖሎጂ፤ የተፈጥሮና ኮምፒውተ hisaanaal ሳይንስ፤ እንዲሁም ኮምፒውቲንግና ኢንፎርማቲክስ) ተመዝግበው ትምህርታቸውን ጀምረዋል::
        </Text>

        <Text style={styles.paragraph}>
          ዩኒቨርሲቲው ሥራ በጀመረበት ወቅት በተግባራዊ እና ቴክኖሎጂ ተኮር ዘርፎች ላይ ያተኮሩ 13 የመጀመሪያ ዲግሪ (Undergraduate) ፕሮግራሞችን አቅርቦ ነበር:: ከእነ hisaajiም መካከል ሲቪል ኢንጂነሪንግ፣ መካኒካል ኢንጂነሪንግ፣ ኤሌክትሪካል ኢንጂነሪንግ፣ ኮምፒውተር ሳይንስ፣ ኢንፎርሜሽን ቴክኖሎጂ፣ አፕላይድ ባዮሎጂ እና አፕላይድ ፊዚክስ ይገኙበታል:: እነዚህ ፕሮግራሞች የተግባራዊ ሳይንስ ተቋማትን መገለጫዎች—በተለይም የቴክኒክ ብቃትን፣ የተግባር ክህሎት ማደግን እና ከኢንዱስትሪና ማህበረሰብ ፍላጎት ጋር መጣጣምን—ያ hisaangaqan::
        </Text>

        <Text style={styles.paragraph}>
          የመጀመሪያው ምዕራፍ የመሠረተ-ልማት ግንባታ ከተጠናቀቀ በኋላ፤ ዩኒቨርሲቲው ከወልቂጤ ከተማ 14 ኪሎ ሜትር እንዲሁም ከአዲስ አበባ 174 ኪሎ ሜትር ርቀት ላይ ወደሚገኘው ዋናው ግቢው (ጉብሬ) ተዛውሯል:: ይህ ሽግግር ለተቋሙ እድገት ትልቅ ምዕራፍ የነበረ ሲሆን፤ የትምህርት ጥራትን ለማሻሻል፣ የምርምር ሥራዎችን ለማስፋፋትና የማህበረሰብ ተሳትፎን ለማጠናከር ያለውን አቅም በእጅጉ አሳድጎታል::
        </Text>

        <Text style={styles.paragraph}>
          ከሀገራዊ ቅድሚያ ከሚሰጣቸው ጉዳዮች ጋር በተጣጣመ መልኩ የወልቂጤ ዩኒቨርሲቲ ፈጣን የአካዳሚክ እና መዋቅራዊ ማስፋፊያዎችን አድርጓል:: በ2006 ዓ.ም (2013 እ.ኤ.አ) አጠቃላይ የፍላጎት ዳሰሳ ጥናቶችን ካካሄደና ከትምህርት ሚኒስቴር እንዲሁም ከዩኒቨርሲቲው ሴኔት ፈቃድ ካገኘ በኋላ፤ አራት ተጨማሪ ኮሌጆች ተመስርተዋል:- የጤና ሳይንስና ሕክምና፤ የማህበራዊ ሳይንስና ሁማኒቲስ፤ የግብርና፤ እንዲሁም ቢዝነስና ኢኮኖሚክስ ኮሌጆች ናቸው:: በ2007 ዓ.ም (2014 እ.ኤ.አ) የሕግ ትምህርት ቤት መከፈት የዩኒቨርሲቲውን የአካዳሚክ ይዘት የበለጠ ያበለጸገው ሲሆን፤ አጠቃላይ የኮሌጆቹን ቁጥር ወደ ሰባት፤ የትምህርት ቤቱን ቁጥር ወደ አንድ አሳድጎታል:: በወቅቱ በ32 የመጀመሪያ ዲግሪ ፕሮግራሞች 2,227 ተማሪዎች ተመዝግበው ነበር:: በ2010 ዓ.ም (2018 እ.ኤ.አ) የባሕር ሳይንስ ኮሌጅ መመሥረትን ተክተሎ አጠቃላይ የኮሌጆች ቁጥር ወደ ስምንት አድጓል::
        </Text>

        <Text style={styles.paragraph}>
          ከተመሠረተበት ጊዜ ጀምሮ ዩኒቨርሲቲው ለሀገሪቱ ኢኮኖሚ በተለያዩ ዘርፎች አስተዋጽኦ ማበርከት የሚችሉ ብቁ የሰው ኃይሎችን ለማፍራት ከፍተኛ ቁርጠኝነት አሳይቷል:: የመጀመሪያው ዙር ምርቃት ከአፕላይድ ባዮሎጂ እና አፕላይድ ፊዚክስ ትምህርት ክፍሎች የወጡ 65 ተማሪዎች ነበሩ:: ባለፉት አስር ዓመታት ውስጥ ዩኒቨርሲቲው ከ17,000 በላይ ተማሪዎችን ያያስመረቀ ሲሆን፤ ይህም ተቋሙ ለሀገር ግንባታ፣ ለቴክኖሎጂ እድገትና ለሰለጠነ የሰው ኃይል መፈጠር እያበረከተ ያለውን የጎላ ሚና ያሳያል::
        </Text>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButtonContainer} 
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={20} color="#008744" />
          <Text style={styles.backButtonText}>ወደ ንኡስ ምርጫ ተመለስ</Text>
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
    backgroundColor: '#008744',
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
  optionTag: {
    color: '#A5D6A7',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  bannerSubtitle: {
    color: '#E8F5E9',
    fontSize: 11,
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  greenBar: {
    width: 4,
    height: 20,
    backgroundColor: '#008744',
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008744',
  },
  paragraph: {
    fontSize: 13,
    color: '#333',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'justify',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#008744',
  },
});