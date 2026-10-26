import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReligionNatureScreen({ navigation }) {
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
        
        <Text style={styles.mainTitle}>የሃይማኖት ምንነትና አስፈላጊነት</Text>

        <Text style={styles.sectionHeader}>የሃይማኖት ምንነት</Text>
        <Text style={styles.paragraph}>
          ሃይማኖት በሰው ልጅ አእምሮአዊ ምርምር፣ በሥጋዊ ፍልስፍና ወይም በማኅበራዊ ውል የተገኘ ምድራዊ ግኝት አይደለም። ይልቁንም በሰውና በፈጣሪ መካከል ያለ ሕያው፣ ረቂቅና መለኮታዊ የሕይወት መገናኛ ድልድይ ነው። ሃይማኖት ማለት በአእምሮ የማይደረስበትን፣ በዓይን የማይታየውንና በእጅ የማይጨበጠውን መለኮታዊ ምስጢር በጸጋ እግዚአብሔር የምናረጋግጥበት ጽኑ መሠረት ነው።

          ሐዋርያው ቅዱስ ጳውሎስ የሃይማኖትን ምንነት ሲተረጉም፦
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሃይማኖትም ተስፋ ስለምናደርገው ነገር የሚያስረግጥ፥ የማናየውንም ነገር የሚያስረዳ ነው።» </Text>
        </View>
         <Text style={styles.paragraph}>
        (ዕብ. 11:1) ይላል። ይህም ማለት ሃይማኖት ለሰው ልጅ ነፍስ እንደ መነጽር ሆኖ፣ በአካላዊ ዓይን ሊታይ የማይችለውን ሰማያዊ ክብርና መለኮታዊ ምስጢር እንድንመለከት የሚያስችለን መለኮታዊ ጸጋ ነው። ታላቁ የቤተ ክርስቲያን ዓምድ ቅዱስ አትናቴዎስ ሐዋርያዊ ስለ ሃይማኖት ሲያስተምር እንዲህ ብሏል፦
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሃይማኖት የነፍስ ብርሃንና የሕይወት መሠረት ናት፤ ያለ እርስዋም ወደ እግዚአብሔር መቅረብ አይቻልም።» </Text>
        </View>

        <Text style={styles.sectionHeader}>የሃይማኖት መነሻው</Text>
        <Text style={styles.paragraph}>
          የሃይማኖት መነሻው በሰው ልጅ ፍላጎት የተፈጠረ ግምት ሳይሆን፣ ራሱ እግዚአብሔር ለሰው ልጅ የዘረጋው የፍቅር ሰንሰለት ነው። የመጀመሪያው ሰው አዳም በተፈጠረ ጊዜ፣ ከፈጣሪው ጋር በቀጥታ ይነጋገርና ይገናኝ ነበር፤ ይህም የመጀመሪያዋና ንጽሕት የሰው ልጅ ሃይማኖት ነበረች። ሰው ከፈጣሪው ጋር ያለው ይህ ሕያው ግንኙነት ሲቋረጥ ሕይወቱ ትርጉም አልባና ባዶ ይሆናል። ምንም እንኳ ከውድቀት በኋላ የሰው ልጅ ከእግዚአብሔር ቢለይም፣ በውስጡ የታተመችው መለኮታዊት ባሕርይ ግን ፈጣሪዋን ከመፈለግና ወደ ምንጯ ከመናፈቅ አንድም ቀን አላረፈችም።
        </Text>
        <Text style={styles.paragraph}>
          ብዙዎች ሃይማኖት የሰው ልጅ ጥረትና የምርምር ውጤት ይመስላቸዋል፤ ነገር ግን ሃይማኖት ከላይ የሚወርድ ሰማያዊ ስጦታ Divine Gift ነው። እግዚአብሔር ራሱን ለሰው ልጅ የገለጠበት ብቸኛው መስኮት በመሆኑ፣ ያለ እርሱ ረዳትነትና ጸጋ ወደ እውነተኛው ዕውቀት መድረስ ፈጽሞ የማይታሰብ ነው።
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ጸጋው በእምነት አድኖአችኋልና፤ ይህም የእግዚአብሔር ስጦታ ነው እንጂ ከእናንተ አይደለም።» </Text>
        </View>
        <Text style={styles.paragraph}>
        (ኤፌ. 2:8) ተብሎ እንደተጻፈ፣ ሃይማኖት በሰው ልጅ ነፍስ ውስጥ የእግዚአብሔርን ሕልውና የሚያበራ መለኮታዊ ፋኖስ ነው።
        </Text>
        <Text style={styles.paragraph}>
      በታሪክ ሂደት ውስጥ የሰው ልጅ አእምሮ በኃጢአት ጢስ ሲጋረድ፣ እውነተኛውን አምላክ ዘንግቶ ለፈጠራቸው ጣዖታት መስገድ ጀመረ፤ ይህም የልቡና መታወር ውጤት ነበር። ነገር ግን ቸርነቱ የማይለወጠው እግዚአብሔር የሰውን ልጅ በጨለማ እንዲኖር ስላልፈቀደ፣ በየዘመኑ ነቢያትን እንደ መብራት እየላከ ወደ እውነተኛዋ መንገድ ጠራን። በመጨረሻም የጥበብ ሁሉ ጥበብ የሆነው ጌታችን ኢየሱስ ክርስቶስ ሰው ሆኖ በመምጣት፣ በቃሉ ያስተማራትንና በመስቀል ላይ በደሙ የቀደሳትን ፍጹም መንገድ ለዓለም አበረከተ።
        </Text>

        <Text style={styles.sectionHeader}>ሃይማኖት በጌታችን ኢየሱስ ክርስቶስ</Text>
        <Text style={styles.paragraph}>
        የሃይማኖት ሁሉ ፍጻሜ፣ የሕይወት ማረፊያና የጽድቅ ሁሉ ባለቤት ጌታችን ኢየሱስ ክርስቶስ ነው። እውነተኛ ሃይማኖት ማለት በክርስቶስ ኢየሱስ በኩል ወደ አብ መቅረብና ከመንፈስ ቅዱስ ጋር መተባበር እንጂ ደረቅ ሥርዓት ወይም የቃላት ድርድር አይደለም። ጌታችን በመዋዕለ ሥጋዌው
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መንገዱና እውነቱ ሕይወቱም እኔ ነኝ፤ በእኔ በቀር ወደ አብ የሚመጣ የለም»</Text>
        </View>
          <Text style={styles.paragraph}>
        (ዮሐ. 14:6) በማለት የድኅነት በር እርሱ ብቻ መሆኑን አረጋግጦልናል።
        </Text>
          <Text style={styles.paragraph}>
        በኢየሱስ ክርስቶስ ማመን ማለት እርሱ የሕያው እግዚአብሔር ልጅ መሆኑን፣ ስለ እኛ መከራ ተቀብሎ በመስቀል ላይ መሞቱንና በሦስተኛው ቀን በሥልጣኑ መነሳቱን በልብ አጽንቶ መያዝ ነው። ይህ እምነት ሰውን ከምድራዊ የኃጢአት ባርነት ነጻ አውጥቶ፣ በክርስቶስ ደም የተገዛ የመለኮት ልጅነትን ክብር ያጎናጽፋል። በክርስቶስ ያረፈች ነፍስ ዓለም የማይሰጣትን ሰላምና የማይነጥቃትን የዘላለም ተስፋ ትቀዳጃለች።
        </Text>

        <Text style={styles.sectionHeader}>እውነተኛዋ ሃይማኖት</Text>
        <Text style={styles.paragraph}>
        በዓለም ላይ የሰዎች ፍልስፍና የወለዳቸው ብዙ እምነቶች ቢኖሩም፣ እውነት ግን በባሕርይዋ አንዲት ብቻ ናት። ብርሃነ ዓለም ቅዱስ ጳውሎስ
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ጌታ አንድ ነው፤ ሃይማኖት አንዲት ናት፤ ጥምቀትም አንዲት ናት»</Text>
        </View>
          <Text style={styles.paragraph}>
        (ኤፌ. 4:5) በማለት እንደገለጸው፤ ሃይማኖት እንደ ዘመኑ ሁኔታ የሚቀያየር ፋሽን ወይም እንደ ሰው ፍላጎት የሚሻሻል ምድራዊ ሥርዓት አይደለም። ይልቁንም ከትውልድ ወደ ትውልድ የማይሻገርና የማይለወጥ ዘላቂ መለኮታዊ መመሪያ ነው።
        </Text>
          <Text style={styles.paragraph}>
      ኦርቶዶክሳዊት ተዋሕዶ ሃይማኖት ማለት ጥንታዊት፣ ሐዋርያዊትና መለኮታዊት የሆነች የእውነት ጎዳና ናት። ይህች መንገድ አስቀድሞ በትንቢተ ነቢያት የተመሠረተች፣ ጌታችን በመዋዕለ ሥጋዌው በገሃድ ያስተማራት፣ ሐዋርያት በዓለም ዙሪያ የሰበኳትና ጻድቃን ሰማዕታት በደማቸውና በትጋታቸው ያጸኗት ብቸኛዋ መዳኛ ናት። ከሰማይ የወረደችው ይህች እውነተኛ ሃይማኖት፣ እስከ ዛሬ ድረስ ሳይበረዝ ሳይከለስና ሳይቆረስ በንጽሕና የቆየች የቀናች የመዳኛ ወደብ ናት። 
        </Text>
          <Text style={styles.paragraph}>
      የዚች ሃይማኖት ጥንታዊነትና ጽናት የሚገለጸው በሚከተሉት መለኮታዊ ሰንሰለቶች ነው፦
        </Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 የነብያት መሠረት፦ </Text>
            መሲሑ እንደሚመጣና ዓለምን እንደሚያድን አስቀድመው የተነበዩበትና ተስፋ ያደረጉበት የሃይማኖት መጀመሪያ ነው።
        </Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 የጌታችን ትምህርት፦ </Text>
            በሥጋ ተገልጦ በመካከላችን በመመላለስ ፍጹም የሆነውን የሕይወት መንገድና የመንግሥተ ሰማያትን ምስጢር የገለጠበት መሠረት ነው።
        </Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 የሐዋርያት ስብከት፦ </Text>
        ከአጥናፍ እስከ አጥናፍ በመዞር ያመነ የተጠመቀ ይድናል በማለት ዓለምን ከጨለማ ወደ ብርሃን የጠሩበት ሐዋርያዊ ሰንሰለት ነው።
        </Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 የሊቃውንትና የሰማዕታት ምስክርነት፦ </Text>
          ሃይማኖት እንዳትበረዝ በጉባኤያት (እንደ ኒቅያ) የደነገጉ፣ ስለ እውነትም አንገታቸውን ለሰይፍ የሰጡ ቅዱሳን ያቆዩልን ሕያው ቅርስ ነው።
        </Text>
            <Text style={styles.paragraph}>
      ስለሆነም ተዋሕዶ ሃይማኖት ማለት ታሪክና መለኮታዊ ጸጋ የተዋሃዱባት፣ የሰው ልጅ ከፈጣሪው ጋር የሚገናኝባትና የዘላለም ሕይወትን የሚያረጋግጥባት ብቸኛ እውነተኛ መንገድ ናት።
        </Text>
            <Text style={styles.paragraph}>
    የዚህች ሃይማኖት መሠረታዊ ምሰሶዎች የሚከተሉት ናቸው፦
        </Text>
          <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 ምስጢረ ሥላሴ፦ </Text>
        እግዚአብሔር በአካል ሦስት (አብ፣ ወልድ፣ መንፈስ ቅዱስ) በባሕርይ አንድ መሆኑን የምናምንበት ምስጢር።
        </Text>
          <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 ምስጢረ ሥጋዌ፦ </Text>
      እግዚአብሔር ወልድ ሰውን ለማዳን ከእመቤታችን ከቅድስት ድንግል ማርያም ሰው የመሆኑ ምስጢር።
        </Text>
          <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 ምስጢረ ጥምቀት፦ </Text>
        ዳግመኛ ከውኃና ከመንፈስ ቅዱስ ተወልደን የእግዚአብሔር ልጆች የምንሆንበት ቅዱስ ምስጢር።
        </Text>
          <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 ምስጢረ ቍርባን፦ </Text>
        የጌታችንን ሥጋና ደም በመቀበል ከእርሱ ጋር አንድ የምንሆንበትና የዘላለም ሕይወትን የምንወርስበት ምስጢር።
        </Text>
          <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 ምስጢረ ትንሣኤ ሙታን፦ </Text>
        በዓለም መጨረሻ ሙታን ተነስተው እንደ ሥራቸው ዋጋቸውን የሚቀበሉበት ምስጢር።
        </Text>
        <Text style={styles.sectionHeader}>የሃይማኖት አስፈላጊነት ለሰው ልጅ ሙሉ ሕይወት</Text>
          <Text style={styles.paragraph}>
  ሃይማኖት ለድኅነት Salvation መሠረታዊና ብቸኛው ቅድመ ሁኔታ ነው። ጌታችን በወንጌል
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ያመነ የተጠመቀም ይድናል፤ ያላመነ ግን ይፈረድበታል»</Text>
        </View>
          <Text style={styles.paragraph}>
  (ማር. 16:16) በማለት ድኅነት በሃይማኖት ላይ የተመሠረተ መሆኑን አስተምሮናል። ሃይማኖት ለሰው ልጅ በሚከተሉት ዓበይት ነጥቦች እጅግ አስፈላጊ ነው፦
        </Text>
          <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 ለእውነተኛ ዕውቀት፦ </Text>
         የፍጥረት ሁሉ ምስጢር የሚፈታው በሃይማኖት እይታ ብቻ ነው። ዓለሞች በእግዚአብሔር ቃል እንደ ተዘጋጁ... በእምነት እናስተውላለን (ዕብ. 11:3)።
        </Text>
          <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹ለሥነ-ምግባርና ለነጻነት፦ </Text> 
          ሃይማኖት የሌለው ሥነ-ምግባር መሠረት የሌለው ቤት ነው። እውነተኛ ነጻነት የሚገኘው በሃይማኖት ነው። እውነትንም ታውቃላችሁ እውነትም ነጻ ያወጣችኋል (ዮሐ. 8:32)።
        </Text>
          <Text style={styles.bulletItem}>
          <Text style={styles.bulletTitle}>🔹 ለዘላለም ሕይወት፦ </Text>
          ሃይማኖት የነፍስ ጽኑ መልሕቅ ነው (ዕብ. 6:19)። ያመነብኝ ቢሞት እንኳ ሕያው ይሆናል (ዮሐ. 11:25) ተብሎ እንደተጻፈ ለዘላለም ክብር የሚያበቃ ዋስትና ነው።
        </Text>
        <Text style={styles.sectionHeader}>ሃይማኖት፦ ለእግዚአብሔር የሚሰጥ ሕይው ምላሽ</Text>
          <Text style={styles.paragraph}>
  ሃይማኖት በቃል ብቻ የሚነገር ሳይሆን በተግባር የሚገለጥ ሕያው ሕይወት ነው። የሰው ልጅ በሃይማኖት አማካኝነት ለእግዚአብሔር እሺ' ይላል። ቅዱስ ያዕቆብ
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከሥራ የተለየ እምነት የሞተ ነው»</Text>
        </View>
          <Text style={styles.paragraph}>
  (ያዕ. 2:26) በማለት እንዳስተማረው፣ እውነተኛ ሃይማኖት በልብ ታምኖ፣ በአፍ ተመስክሮ (ሮሜ 10:10)፣ በተግባር ተተርጉሞ የሚታይ መሆን አለበት።
        </Text>
          <Text style={styles.paragraph}>
  ሃይማኖት የሰውን ልጅ ከምድራዊ ጭንቀት አውጥቶ በሰማያዊ ተስፋ የሚሞላ፣ የሞትን ፍርሃት የሚያጠፋና የዘላለም ደስታን የሚያበስር የመለኮት ድምፅ ነው። 
        </Text>
        <Text style={styles.sectionHeader}>ማጠቃለያ</Text>
          <Text style={styles.paragraph}>
  በአጠቃላይ ሃይማኖት የነፍሳችን ብርሃን፣ የሕይወታችን መሪና የዘላለም ደስታችን ምንጭ ነው። ያለ ሃይማኖት ሕይወት ትርጉም የለሽ ድካም፣ መጨረሻዋም ጥፋት ናት። በዚህች የእውነት መንገድ ላይ መጓዝ ማለት ከጨለማ ወደ ብርሃን፣ ከሞት ወደ ሕይወት፣ ከምድር ወደ ሰማይ መሻገር ማለት ነው።
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
  bulletItem: { fontSize: 14, color: '#333333', lineHeight: 22, marginBottom: 10, paddingLeft: 4 },
  bulletTitle: { fontWeight: 'bold', color: '#00796B' },
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