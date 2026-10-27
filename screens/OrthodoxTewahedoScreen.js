import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrthodoxTewahedoScreen({ navigation }) {
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
        
        <Text style={styles.mainTitle}>ኦርቶዶክስ ተዋሕዶ</Text>

        <Text style={styles.paragraph}>
        የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያንን፣ ከጥንት ሐዋርያዊት ዘመን ጀምሮ የእምነትን ቅብብሎሽ ጠብቃ የመጣች፣ በዓለም ክርስትና ውስጥ የራሷ የሆነ ልዩ ሥነ መለኮታዊና ታሪካዊ ቦታ ያላት ጥንታዊት ቤተክርስቲያን ናት። ስያሜዋ ኦርቶዶክስ ተዋሕዶ የቤተክርስቲያኗን የእምነት መሠረት፣ ቀኖናዊ አቋም እና የክርስቶስን ማንነት የመረዳት ጥልቀትን የሚያንፀባርቅ ነው። ይህ ጽሑፍ የኦርቶዶክስ እና ተዋሕዶ የሚሉትን ቃላት ሥርወ ቃል፣ ሥነ መለኮታዊ ትርጉም፣ ታሪካዊ አመጣጥ፣ እና የቤተክርስቲያኗን ልዩ አስተምህሮዎች በመጽሐፍ ቅዱሳዊ ጥቅሶችና በአበው ትምህርት በማስደገፍ በዝርዝርና በጥልቀት ይተነትናል።
        </Text>

        <Text style={styles.sectionHeader}>ኦርቶዶክስ</Text>
        <Text style={styles.paragraph}>
          ኦርቶዶክስ የሚለው ቃል ከጥንታዊ ግሪክ ቋንቋ የመጣ ሲሆን፣ ኦርቶ ትርጉሙም ቀጥተኛ፣ ትክክለኛ፣ ትክክል ማለት ሲሆን፣ ዶክስ ደግሞ እምነት፣ ትምህርት፣ ክብር ወይም አምልኮ የሚል ትርጉም አለው። ሁለቱ ቃላት በአንድነት ሲዋሃዱ ኦርቶዶክስ ማለት ቀጥተኛ እምነት፣ ትክክለኛ ትምህርት ወይም ትክክለኛ አምልኮ ማለት ይሆናል። ይህ ቃል የቤተክርስቲያኗን የእምነት ንጽሕናና ከሐዋርያት የተቀበለችውን ትውፊት ያለመቀየር ያመለክታል። ኦርቶዶክስ የሚለው ቃል ለመጀመሪያ ጊዜ በሰፊው አገልግሎት ላይ የዋለው በ325 ዓ.ም. በተካሄደው ታላቁ የኒቅያ ጉባዔ ላይ ነው። በዚህ ጉባዔ ላይ፣ ወልድ ፍጡር ነው የሚለውን የአርዮስን የክህደት ትምህርት ለማውገዝና የክርስቶስን ፍጹም አምላክነትና ከአብ ጋር ያለውን አንድ ባሕርይነት ለማፅናት የተሰበሰቡት 318ቱ ቅዱሳን ሊቃውንት፣ ሐዋርያት ያስተማሯት ሃይማኖት ቀጥተኛና ትክክለኛ መሆኗን ለማስረገጥ ይህንን ቃል ተጠቅመዋል። ይህ ስያሜ በየዘመኑ የሚነሱትን ልዩ ልዩ አዳዲስ ትምህርቶችና ምንፍቅናዎች ከእውነተኛው የሐዋርያዊ ትውፊት ለመለየትና የቤተክርስቲያኗን ቀኖናዊ አቋም ለማረጋገጥ ወሳኝ ሆኖ አገልግሏል።
        </Text>
        <Text style={styles.paragraph}>ቅዱስ አትናቴዎስ፦ </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የአርዮስ ትምህርት ከሐዋርያት ትምህርት የተለየና አዲስ ነው፤ እኛ የምንከተለው ግን ከጥንት ጀምሮ የነበረውንና ያልተለወጠውን እውነት ነው።»</Text>
        </View>
        <Text style={styles.paragraph}>
          ይህ አባባል የኦርቶዶክስን ትክክለኛነትና ሐዋርያዊነት ያረጋግጣል፤ ይህም እውነተኛው እምነት ከዘመናት በፊት የተሰጠ እንጂ በየጊዜው የሚለወጥ አለመሆኑን ያሳያል።
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«በመንገድ ላይ ቁሙ ተመልከቱም፥ የቀደመችውንም መንገድ ጠይቁ፤ መልካሚቱ መንገድ ወዴት እንደ ሆነች እወቁ፥ በእርስዋም ላይ ሂዱ፥ ለነፍሳችሁም ዕረፍት ታገኛላችሁ» (ኤርምያስ 6:16)</Text>
        </View>
      <Text style={styles.paragraph}>
        በዘመናችን የቋንቋ አጠቃቀምም ኦርቶዶክሳዊ መንገድ ማለት ቀጥተኛ የችግር አፈታት ሲሆን ኢ-ኦርቶዶክሳዊ ማለት ደግሞ ከተለመደውና ከታወቀው ወጣ ያለ ወይም ያልተለመደ የችግር አፈታት ማለት ነው። የኦርቶዶክስ እውነተኛ ትርጉም የእውነትን ጽናትና ቀጣይነት እንጂ የለውጥን መካድ አይደለም።
      </Text>
        <Text style={styles.sectionHeader}>ተዋሕዶ</Text>
        <Text style={styles.paragraph}>
        ተዋሕዶ የሚለው ቃል ከልሣነ ግእዝ የመነጨ ሲሆን፣ ትርጉሙም አንድ ሆኖ ወይም አንድነት ማለት ነው። ይህ ቃል በክርስትና ሥነ መለኮት ውስጥ የጌታችን የኢየሱስ ክርስቶስን ማንነት የሚገልጽ ማዕከላዊ ቃል ነው። በተዋሕዶ አስተምህሮ መሠረት፣ መለኮታዊው ወልድ የሰውን ባሕርይ በመውሰድ ፍጹም ሰው ሲሆን፣ እነዚህ  ሁለት ባሕርያት ሳይቀላቀሉ፣ ሳይለወጡ፣ ሳይለያዩና ሳይከፋፈሉ በአንድ አካል ውስጥ አንድ ሆነዋል። / የተዋሕዶ ትርጓሜ በአጭሩ ወልድ ዋሕድ የሚለው ነው። ይህ ማለት፣ ክርስቶስ ሰው የሆነው ያለሚጠት፣ ያለ ውላጤ፣ ያለ ቱሳኤ፣ ያለትድምርት፣ ያለ ቡዓዴ፣ ያለ ኅድረት ነው። ክርስቶስ ከሁለት ባሕርይ አንድ ባሕርይ፣ ከሁለት አካል አንድ አካል የሆነው በተዋህዶ ነው፡፡ ስለዚህ ተዋሕዶ የሚለው ቃል ክርስቶስ ሰው የሆነበትን ምሥጢር የሚገልጽ ታላቅ ቃል ነው።
        </Text>
    <Text style={styles.paragraph}>ቅዱስ ቄርሎስ ዘእስክንድርያ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እግዚአብሔር ቃል ሥጋን ነሥቶ ሰው ከሆነ በኋላ፣ ሁለት ባሕርያት ቢኖሩም፣ አንድ አካል ብቻ አለ። ይህ ተዋሕዶ ያለመቀላቀል፣ ያለመለወጥ፣ ያለመለያየትና ያለመከፋፈል ተፈጽሟል።»</Text>
        </View>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ቃልም ሥጋ ሆነ፤ ጸጋንና እውነትንም ተመልቶ በእኛ አደረ፥ አንድ ልጅም ለአባቱ እንዳለው ክብር የሆነው ክብሩን አየን።» (ዮሐንስ 1:14)</Text>
        </View>

        <Text style={styles.sectionHeader}>ኦርቶዶክስ ተዋሕዶ</Text>
        <Text style={styles.paragraph}>
          ኦርቶዶክስ ተዋሕዶ የሚለው ሙሉ ስያሜ ኢየሱስ ክርስቶስ በተዋህዶ ከሁለት ባሕርይ አንድ ባሕርይ፣ ከሁለት አካል አንድ አካል ሆነ ብላ የምታምን ቀጥተኛና ትክክለኛ እምነት ማለት ነው። ይህ እምነት በነቢያት ትንቢት የተነገረውን፣ በኢየሱስ ክርስቶስ በወንጌል ያስተማረውን፣ በሐዋርያት የተሰበከውን፣ እና በቅዱሳን ሊቃውንት የተመሠጠረውን አስተምህሮ መሠረት ያደረገ ነው።
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ስምዖን ጴጥሮስም መልሶ፦ አንተ ክርስቶስ የሕያው እግዚአብሔር ልጅ ነህ አለ። ኢየሱስም መልሶ እንዲህ አለው፦ የዮና ልጅ ስምዖን ሆይ፥ በሰማያት ያለው አባቴ እንጂ ሥጋና ደም ይህን አልገለጠልህምና ብፁዕ ነህ። እኔም እልሃለሁ፥ አንተ ጴጥሮስ ነህ፥ በዚችም ዓለት ላይ ቤተ ክርስቲያኔን እሠራለሁ፥ የገሃነም ደጆችም አይችሉአትም።» (ዮሐንስ 1:14)</Text>
        </View>
        <Text style={styles.paragraph}>(ማቴዎስ 16:16-18)</Text>

        <Text style={styles.paragraph}>ቅዱስ ዲዮስቆሮስ ዘእስክንድርያ፦ </Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የተዋሐደው ቃል አንድ ባሕርይ ነው፣ ነገር ግን ይህ አንድ ባሕርይ መለኮታዊና ሰብዓዊ ባሕርያትን ያለመቀላቀል ይዟል።»</Text>
        </View>
        <Text style={styles.paragraph}>ተዋሕዶ የሚለው ይህንን የጴጥሮስን እምነት የሚያመለክት ነው፡፡ ጌታችን እንዳረጋገጠው ይህች የጴጥሮስ እምነት ዓለት ናት፡፡</Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከተመሠረተው በቀር ማንም ሌላ መሠረት ሊመሠርት አይችልምና፥ እርሱም ኢየሱስ ክርስቶስ ነው።»</Text>
        </View>
        <Text style={styles.paragraph}> (1ኛ ቆሮንቶስ 3:11)። በዚህ መሠረትነት ላይ የጸናች ሃይማኖት ሰውን ታድሳለች እንጂ እርሷ አትታደስም፡፡</Text>
        <Text style={styles.sectionHeader}>የተዋሕዶ ምሳሌዎች</Text>
        <Text style={styles.paragraph}>
          - የነፍስና የሥጋ ተዋሕዶ፦ ነፍስና ሥጋ ተዋሕደው አንድ ሰው ይባላል እንጂ ሁለት አይባልም፡፡
          - የብረትና የእሳት ተዋህዶ፦ ብረት በእሳት ሲግል የጋለ ብረት እንጂ ይህ ብረት ነው፣ ይህ ደግሞ እሳት ነው ተብሎ አይለይም፡፡
          - የሲና ሐመልማል፦ እሳቱ ሐመልማሉን ሳያቃጥለው፣ ሐመልማሉም እሳቱን ሳያጠፋው በአንድነት መታየታቸው የተዋህዶ ምሳሌ ነው፡፡ (ዘጸአት 3:2)
        </Text>

        <Text style={styles.sectionHeader}>የተዋሕዶ አስተምህሮ ተከታይ አብያተ ክርስቲያናት</Text>
        <Text style={styles.paragraph}></Text>
        <Text style={styles.paragraph}>
          - የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን
          - የኤርትራ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን
          - የግብፅ ኮፕቲክ ኦርቶዶክስ ቤተ ክርስቲያን
          - የአርመንያ ሐዋርያዊት ኦርቶዶክስ ቤተ ክርስቲያን
          - የሶርያ ኦርቶዶክስ ቤተ ክርስቲያን
          - የህንድ ኦርቶዶክስ ቤተ ክርስቲያን
        </Text>

        <Text style={styles.sectionHeader}>የምናምነው</Text>
        <Text style={styles.paragraph}>
          በአንድ አምላክ በሥላሴ ማመን፦ በአብ፣ በወልድና በመንፈስ ቅዱስ ሦስት አካላትና አንድ ባሕርይ የሆነ አምላክ እናምናለን።
        </Text>
            <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እኔና አብ አንድ ነን» </Text>
        </View>
          <Text style={styles.paragraph}>በኢየሱስ ክርስቶስ ሥጋዌና ድኅነት ማመን፦ ወልድ ለሰውን ልጅ ድኅነት ከቅድስት ድንግል ማርያም በግብረ መንፈስ ቅዱስ ሥጋ መዋሐዱን እናምናለን።</Text>
          <Text style={styles.paragraph}>በመንፈስ ቅዱስ አምላክነት ማመን፦ መንፈስ ቅዱስ ከአብ የሚወጣ፣ ከአብና ከወልድ ጋር በባሕርይ አንድ የሆነ አምላክ ነው።</Text>
          <Text style={styles.paragraph}>በቅድስት ድንግል ማርያም አማላጅነትና ክብር ማመን፦ የእግዚአብሔርን ወልድ የወለደች  ቴዎቶኮስ / መሆኗን እናምናለን።</Text>
          <Text style={styles.paragraph}>በቅዱሳን አማላጅነትና የቅዱሳን ኅብረት ማመን፦ "የጻድቅ ሰው ጸሎት በሥራዋ እጅግ ኃይል ታደርጋለች" (ያዕቆብ 5:16)።</Text>
          <Text style={styles.paragraph}>በምሥጢራተ ቤተክርስቲያን ማመን፦ ሰባቱን ምሥጢራተ ቤተክርስቲያን በመንፈስ ቅዱስ ኃይል የሚፈጸሙ የጸጋ ምንጮች መሆናቸውን እናምናለን።</Text>
          <Text style={styles.paragraph}>በክርስቶስ ዳግም ምጽአትና በዘላለም ሕይወት ማመን፦ ጌታችን በክብር ዳግም እንደሚመጣና ለጻድቃን የዘላለም ሕይወትን እንደሚሰጥ እናምናለን።</Text>

        <Text style={styles.sectionHeader}>ለምን እኛ ብቻ እውነተኛ ቤተክርስቲያን ነን?</Text>
        <Text style={styles.paragraph}>
         የሐዋርያዊ ቅብብሎሽ፦ ቤተክርስቲያናችን እምነቷንና ክህነቷን በቀጥታ ከሐዋርያት የተቀበለች መሆኗን ታምናለች።      
          </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እናንተም በሐዋርያትና በነቢያት መሠረት ላይ ታንጻችኋል» (ኤፌሶን 2:20)</Text>
        </View>
          <Text style={styles.paragraph}>
            የእምነት ንጽሕና፦ ቤተክርስቲያናችን የሐዋርያትንና የቅዱሳን አበውን ትምህርት ያለመቀላቀልና ያለመለወጥ ጠብቃ መቆየቷን ታምናለች።
          </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የክርስቶስ ማንነት ትክክለኛ ግንዛቤ፦ ቅዱስ ቄርሎስ ዘእስክንድርያ፦ "አንድ የተዋሐደ የእግዚአብሔር ቃል ባሕርይ ሥጋ የሆነ።»</Text>
        </View>
          <Text style={styles.paragraph}>በመጨረሻም፣</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ኢየሱስ ክርስቶስ ትናንትና ዛሬ እስከ ለዘላለምም ያው ነው» (ዕብራውያን 13:8)</Text>
        </View>
        <Text style={styles.paragraph}>ይህ የሚያሳየው አንዲት ቀጥተኛ መንገድ እንዳለች ነው፤ እርሷም ኦርቶዶክስ ተዋሕዶ ናት።</Text>
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