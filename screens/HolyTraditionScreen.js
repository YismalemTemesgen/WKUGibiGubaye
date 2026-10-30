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
          የክርስትና እምነት፣ ከዘመናት ማዕበል ተሻግሮ፣ ከትውልድ ወደ ትውልድ ሲተላለፍ የመጣው መለኮታዊ ውርስ ነው። ይህ ውርስ ከቀላል ልማድ ወይም የቃል ወግ እጅግ የላቀ፣ ሕያው የሆነ የእግዚአብሔር ቃል ቀጣይ መገለጫ ነው። በሥነ መለኮት አገላለጽ ትውፊት (በግሪክኛ ፓራዶሲስ፣ በዕብራይስጥ ማሳር እና ቂብል) ማለት መለኮታዊ እውነትን ከእግዚአብሔር ወደ ሰው፣ ከአበው ወደ ልጆቻቸው፣ ከነቢያትና ሐዋርያት ወደ ቤተክርስቲያን፣ ከዚያም ለዘመናት ሁሉ ያለመቋረጥ የሚተላለፍበት ሕያው ሂደት ነው። ቅዱስ ትውፊት፣ ቅዱሳን ከእግዚአብሔር ተቀብለው ለትውልድ ያስተላለፉት፣ ቤተክርስቲያንም እስከ ዓለም ፍጻሜ ድረስ የምትመራበትና የምትመገብበት የማይለወጥ የሕይወት ምንጭ ነው።
        </Text>

        <Text style={styles.sectionHeader}>ክርስቲያናዊ ትውፊት : የዘመናት ድልድይ</Text>
        <Text style={styles.paragraph}>
        የክርስቲያናዊ ትውፊት ሥር መሰረቱ በብሉይ ኪዳን ዘመን ይገኛል። ከአበው ወደ መሳፍንት፣ ከመሳፍንት ወደ ነገሥት፣ ከነገሥት ወደ ነቢያት ሲተላለፍ ቆይቶ፣ በሐዲስ ኪዳን በጌታችን በኢየሱስ ክርስቶስ ፍጹም በሆነ መንገድ ተገለጠ። ከክርስቶስ ወደ ቅዱሳን ሐዋርያት፣ ከሐዋርያት ወደ ሐዋርያውያን አባቶችና ተከታዮቻቸው ሰማዕታት፣ ከዚያም ለሊቃውንት በአፍና በመጽሐፍ እየተሸጋገረ፣ ያለመቋረጥ እስከ ዘመናችንም የደረሰ የክርስትና ትምህርት ነው።
        </Text>
       <Text style={styles.paragraph}>የቅዳሴያችን ሥርዓት የትውፊትን ቅብብል በግልጽ ያሳያል። ቄሱ ነዋ ወንጌለ መንግሥት ብሎ ወንጌልን ለንፍቀ ካህኑ ሲያስረክብ፣ ንፍቀ ካህኑም</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መንግሥቶ ወጽድቆ ዘአወፈየኒ አወፈይኩከ» (ቅዳሴ)</Text>
        </View>
       <Text style={styles.paragraph}> ብሎ ለዲያቆኑ መስጠቱ፣ ሐዋርያት ከሊቀ ካህናችን ከኢየሱስ ክርስቶስ ወንጌልን ተቀብለው ለማስተማራቸው ሕያው አምሳል ነው።</Text>
       <Text style={styles.paragraph}>ትውፊት ስላለፈ ነገር ብቻ የሚናገር ሳይሆን፣ አሁንም ሕይወት ያለውና ሕይወትንም የሚሰጥ ነው። ለምሳሌ፣ መጽሐፍ ቅዱስ የቅዱስ ትውፊት አንዱ አካል ሲሆን፣ አሁንም ለነፍሳችን ምግብ የሚሆን ሕያው ቃል ነው። ትውፊትን ቅዱስ ብለን መጥራታችን የመንፈስ ቅዱስ ጥበቃ ስለማይለየው፣ አንድም ከክርስቶስና ክርስቶስ አድሮባቸው ከሚኖር ከቅዱሳን ስለተገኘ ነው።</Text>
        <Text style={styles.sectionHeader}>መጽሐፍ ቅዱስ እና ቅዱስ ትውፊት</Text>
        <Text style={styles.paragraph}>
        ምንም እንኳን መጽሐፍ ቅዱስ የመጀመሪያውን ስፍራ የሚይዝ ቢሆንም፣ ከሌላው የትውፊት አካል ግን ተነጥሎ የሚታይ አይደለም። መጽሐፍ ቅዱስ እንዲሁ ጽሑፍ ብቻ ሳይሆን፣ ሊብራራና በሕይወት ሊተረጎም የሚገባው ነው። ይህ የሚሆነውም የእውነት ዓምድና መሠረት በምትሆን በቤተክርስቲያን ኹለንተናዊ ሕይወት ነው (1 ጢሞቴዎስ 3:15)።
        </Text>
        <Text style={styles.paragraph}>ቅዱሳት ሥዕላቱ በኅብረ ቀለማትና በጥበባዊ መንገድ ነገረ እግዚአብሔርን ማንበብ ለማይችል ሰው የሚያብራሩ ናቸው። ቅዳሴው፣ ሥርዓተ ጸሎቱ፣ የምሥጢራተ ቤተክርስቲያን አፈጻጸሙ ሁሉ ሥርዓተ አምልኮው የሚፈጸምበት መንገድ ነው። ስለዚህ መጽሐፍ ቅዱስ እና ሌላው ቅዱስ ትውፊት እርስ በርሳቸው የሚደጋገፉ ናቸው። ወንጌል ከመጻፉ በፊት የነበረውንም ሁሉን በጽሑፍ የያዘ አይደለም (ዮሐንስ 20:30-31)። መጽሐፍ ቅዱስ ያለ ትውፊት ብቻውን ፍጻሜ የለውም፤ ሌላው ቅዱስ ትውፊትም ያለ መጽሐፍ ቅዱስ መሠረት የለውም፡፡</Text>

        <Text style={styles.sectionHeader}>ቅዱስ ትውፊት በዘመነ ብሉይ</Text>
       <Text style={styles.paragraph}>ትውፊት ሰው ከመፈጠሩ አንስቶ የነበረ ነው። እግዚአብሔር አዳምን የከለከለው በጽሑፍ አልነበረም (ዘፍጥረት 2:17)፡፡ ሄኖክ አካሄዱን ከእግዚአብሔር ጋር ያደረገው፣ ኖኅ ጻድቅ ሆኖ የተገኘው፣ አብርሃም እግዚአብሔርን አምኖ የወጣው ሁሉ ባልተጻፈው በቅዱሱ ትውፊት እንጂ በጽሑፍ በተሰጠ መመሪያ አልነበረም፡፡ በአጠቃላይ፥ ሊቀ ነቢያት ሙሴ በ1500 ከክርስቶስ ልደት በፊት ተነስቶ መጽሐፍ እስኪጽፍ ድረስ፥ የእግዚአብሔር ሰዎች ከ4000 ዓመታት በላይ ሲመሩ የነበረው በቃልና በተግባር በሚገለጠው ቅዱስ ትውፊት ነበር፡፡</Text>
       <Text style={styles.sectionHeader}>ቅዱስ ትውፊት በዘመነ ሐዋርያት ፡ የወንጌል ሕያው ምስክርነት</Text>
       <Text style={styles.paragraph}>ጌታችንና መድኃኒታችን ኢየሱስ ክርስቶስ ደቀ መዛሙርቱን ያስተማረው በጽሑፍ አልነበረም፡፡ ቤተክርስቲያን ወንጌል ከመጻፉ በፊት ወንጌልን በቅዱስ ትውፊት ታውቃለች፤ ወንጌልን ስትኖረው ነበረች። መጻሕፍት መጻፍ የተጀመሩት ቤተክርስቲያን በይፋ ከተመሠረተች ከ8 ዓመታት በኋላ ነው፡፡</Text>
       <Text style={styles.sectionHeader}>ቅዱስ ጳውሎስ እንዲህ ይላል፦ </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"ወንድሞች ሆይ፥ የሰበክሁላችሁን ደግሞም የተቀበላችሁን በርሱም ደግሞ የቆማችሁበትን በርሱም ደግሞ የምትድኑበትን ወንጌል አሳስባችኋለሁ፡፡ ... እኔ ደግሞ የተቀበልሁትን ከሁሉ በፊት ሰጠኋችሁ" (1 ቆሮንቶስ 15:1)።</Text>
        </View>
       <Text style={styles.paragraph}>ሐዋርያት ያስተማሩትን ትምህርት በሙሉ አልጻፉልንም (2 ዮሐንስ 1:12)፡፡ ዋናው መሠረታቸው በቃልና በተግባራዊ ሕይወት የተማሩት ትምህርት ነው። ስለዚህ ቅዱስ ትውፊት ማለት መለኮታዊ ስጦታ እንጂ የአሮጊቶች ተረት ተረት አይደለም፡፡</Text>
        <Text style={styles.sectionHeader}>ቅዱስ ትውፊት በሊቃውንት አስተምህሮ</Text>
        <Text style={styles.paragraph}>
        ቅዱስ ዮሐንስ አፈወርቅ፦
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"ሐዋርያት በቃል በመናገርም እንጂ በጽሑፍ ብቻ እንዳላስተማሩ በቃላችንም ቢሆን ወይም በመልዕክታችን የተማራችሁን ወግ (ትውፊት) ያዙ ብለዋል፡፡ ሁለቱም ለትምህርተ ሃይማኖትና ለድኅነት አስፈላጊዎች ናቸው፡፡"</Text>
        </View>
        <Text style={styles.paragraph}>አውሳብዮስ ዘቂሳርያ፦ </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"ያልተጻፉትን ልማዶች ሁሉ ተገቢ እንዳይደሉ ብንጥላቸው በጣም አስፈላጊ የሆኑ የወንጌል ክፍሎችን እናጣለን፡፡ ትምህርታችንም ባዶ ይሆናል፡፡"</Text>
        </View>
          <Text style={styles.paragraph}>ትእምርተ መስቀል ማማተብ፣ ወደ ምሥራቅ ዞሮ መጸለይ፣ የቅዳሴ ሥርዓት፣ የውኃና የዘይት ቡራኬ፣ ሦስት ጊዜ ብቅ ጥልቅ ማለት ሁሉ ከምስጢራዊው ትውፊት የተገኙ ናቸው።</Text>
        <Text style={styles.sectionHeader}>ቅዱስ ትውፊት  ከሐሰተኛ ትውፊት መለየት</Text>
        <Text style={styles.paragraph}>
        በቤተክርስቲያን ያለው ሁሉ ቅዱስ ትውፊት ላይሆን ይችላል። ሰዋዊ ነገሮች ለትውፊት ማቀላጠፊያ ሊሆኑ ይችላሉ። ነገር ግን ክፉ ሰዋዊ ግብሮች እንደ ትውፊት ሊቆጠሩ አይገባም። ቅዱስ ትውፊትን ለመለየት የሚከተሉት መስፈርቶች አሉ፡-
        </Text>
        <Text style={styles.paragraph}>
        ትውፊቱ ከሐዋርያት ተያይዞ የመጣ መሆን አለበት፤ ከጥንት ጀምሮ ሁልጊዜ በዓለም አቀፋዊት ቤተክርስቲያን የታመነ መሆን አለበት፤ መለወጥና መቋረጥ ያልተደረገበት መሆን አለበት፡፡
        </Text>
        <Text style={styles.paragraph}>
        ስለዚህ ቅዱስ ትውፊት መቀበል ግድ ነው፡፡ የትናንቱን የቤተክርስቲያን ኹለንተናዊ ሕይወት ወደ ዛሬ የሚያመጣ፥ ዛሬ ላይ ያለውንም ወደ ነገ የሚያሻግር ቅዱስ ትውፊት ነውና፡፡ የመጽሐፍ ቅዱስ አባት ራሱ ቅዱስ ትውፊት እንደሆነ ልናውቅ ይገባናል፡፡
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