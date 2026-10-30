import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MismireHiritScreen({ navigation }) {
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
        <Text style={styles.mainTitle}>ምሥጢረ ኩነት አምላካዊ</Text>
        
        <Text style={styles.sectionHeader}>አካላዊ ምሥጢረ ኩነት</Text>
        <Text style={styles.paragraph}>
          እግዚአብሔር መንፈስ ነው (ዮሐ 4:24)፡፡ በመሆኑም የሚታይና የሚዳሰስ አምላክ አይደለም፡፡ ከአካሉ ርቀት የተነሣ (ረቂቅነት) ከቶ በእይታና በዳበሳ ህልውናውን ለማረጋገጥ አይቻልም፡፡ ይህ ማለት ግን እግዚአብሔር ከሰው ልጆች የተሰወረ፣ ራሱን የማያሳይ አምላክ ነው ማለት አይደለም፡፡ ይልቁንም፣ ፍጹም ረቂቅና መለኮታዊ ባሕርይው በሥጋዊ ዓይንና በእጅ ሊጨበጥ የማይችል መሆኑን ያጎላል። ነገር ግን፣ ከላይ እንደተገለጸው በሚዳሰስ ሥራውና በሚሰማ ቃሉ ራሱን ግልጽ ያደረገ ስለሆነ፣ ህልውናው ከሰው የተሰወረ አይደለም፡፡ በመሆኑም ቅዱስ መጽሐፍ ጨለማን መሰወሪያው አደረገ (መዝ 18:11) በሚል ቃል ኅቡዕነቱን ሲገልጥ፣ 
            </Text>
       <View style={styles.quoteBox}>
        <Text style={styles.quoteText}> "እንወቅ እናውቅም ዘንድ እግዚአብሔርን እንከተል፤ እንደወገግታም ተዘጋጅቶ እናገኘዋለን" (ሆሴ 6:3)</Text>
      </View>
        <Text style={styles.paragraph}> የሚል ኃይለ ቃል ደግሞ ክሱትነቱን ይገልጣል፡፡ በዚህ መሠረት፣ እግዚአብሔር ኅቡዕ ሲሆን ክሥት፤ ክሥት ሲሆን ደግሞ ኅቡዕ አምላክ እንደሆነ ይታመናል፡፡ ይህ ፓራዶክሳዊ እውነት የእግዚአብሔርን የባሕርይ ፍጹምነትና የሰው ልጅ የመረዳት አቅም ውስንነት በሚገባ ያስረዳል። እርሱ በባሕርይው ረቂቅና የማይመረመር ቢሆንም፣ በፍቅሩና በቸርነቱ ራሱን ለፍጥረቱ ይገልጣል። </Text>
        <Text style={styles.paragraph}>ከዚህም ጋር በተለይ ንጹሕ ልብ ሳላቸው ሃይማኖተኞች ራሱን በይበልጥ ግልጥ እንደሚያደርግ ቅዱስ መጽሐፍ ይናገራል (ማቴ 5:8)።</Text>
        <Text style={styles.mainTitle}>"ልበ ንጹሖች እግዚአብሔርን ያዩታልና"  </Text>
        <Text style={styles.paragraph}>
          የሚለው ቃል፣ መንፈሳዊ ንጽሕና ለእግዚአብሔር ዕውቀትና መገለጥ ወሳኝ መሆኑን ያመለክታል። ሆኖም የፈጣሪን ምሥጢረ ኩነት ከዚህ ስፋትና ጥልቀት አልፎ ለመመራመር አቅሙ ከሰው አእምሮ በላይ ስለሆነ፣ የሰው ልጅ በአሳቡ የፈለገውን ያህል ቢንጠራራ የዚህን ዕውቀት ጣራ መንካት አይችልም፡፡ ይህ የሆነው የእግዚአብሔር ባሕርይ ከጊዜና ከቦታ በላይ፣ በፍጹምነት የሚኖር ስለሆነ ነው። ይህ ከሆነ ደግሞ፣ የሰው ልጅ እንደ ፍጡርነቱ የታየውንና የተገለጠለትን ያህል ተረድቶ፣ ከአቅሙ በላይ የሆነውን በአንክሮ የማያልፍ አማኒ ቢሆን፣ አቅሙን አዋቂ በመሆኑ ይመሰገንበታል፤ አቅምን ማወቅ ሊቅነት እንጂ አላዋቂነት አይሆንምና፡፡ የቤተክርስቲያን አባቶችም የእግዚአብሔርን የማይመረመር ባሕርይ  በተደጋጋሚ ያስገነዝባሉ። ለምሳሌ፣ ቅዱስ ዮሐንስ አፈወርቅ 
        </Text>
       <View style={styles.quoteBox}>
        <Text style={styles.quoteText}> "የእግዚአብሔርን ባሕርይ በውል ማወቅ ለሰው አይቻልም" </Text>
      </View>
        <Text style={styles.paragraph}> በማለት፣ የሰው ልጅ አእምሮአዊ ውስንነትን ያጎላል። </Text>
          <Text style={styles.sectionHeader}>ባሕርያዊ ምሥጢረ ኩነት</Text>
        <Text style={styles.paragraph}>እግዚአብሔር በባሕርዩ ፍጹም የሆነ አምላክ ነው። እነዚህ ባሕርያት እርሱን ከፍጥረታት ሁሉ የሚለዩና መለኮታዊነቱን የሚያረጋግጡ ናቸው። የእግዚአብሔር ባሕርያት የማይቀየሩ፣ ዘላለማዊና ፍጹም ናቸው። ከእነዚህም መካከል፦</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.sectionHeader}>ቅዱስ</Text> - (ዘሌ 19:2፣ ኢሳ 6:3፣ 1 ጴጥ 1:15)፦ የእግዚአብሔር ቅድስና ማለት ከኃጢአት፣ ከክፋትና ከፍጽምና ማነስ የጸዳ መሆኑ ነው። እርሱ በፍጹም ንጽሕናው ከፍጥረታት ሁሉ የላቀና የተለየ ነው። የኢሳይያስ ራእይ (ኢሳ 6:3) መላእክት ቅዱስ፣ ቅዱስ, ቅዱስ እያሉ ሲያመሰግኑት የሚያሳየው፣ የእግዚአብሔር ቅድስና የመኖሩ ሁሉ መሠረት መሆኑን ነው።
        </Text>
          <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ጻድቅ</Text> - (1 ሳሙ 2:2፣ 2 ጢሞ 4:8፣ ራዕ 16:7)፦ እግዚአብሔር በሥራው ሁሉ ፍትሐዊና እውነተኛ ነው። እርሱ ፍጹም ፍርድን የሚሰጥ፣ በጽድቅ የሚመራ አምላክ ነው። ቅዱስ ጳውሎስ የጽድቅን አክሊል ከጻድቁ ፈራጅ ከእግዚአብሔር እንደሚቀበል መናገሩ (2 ጢሞ 4:8) የጽድቁን ፍጹምነት ያረጋግጣል። </Text>
          <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ሁሉን ቻይ</Text> - (ዘፍ 17:1፣ 18:14፣ ኢሳ 40:26፣ ሉቃ 1:37)፦ የእግዚአብሔር ሁሉን ቻይነት (Omnipotence) ማለት፣ እርሱ የማይቻለው ነገር የሌለበት ፍጹም ኃይል ያለው መሆኑ ነው። ለአብርሃም "እኔ ሁሉን ቻይ አምላክ ነኝ" (ዘፍ 17:1) ማለቱ፣ ፍጥረትን ካለመኖር ወደ መኖር ያመጣ፣ የማይቻለውን የሚቻለው አምላክ መሆኑን ይገልጣል። </Text>
          <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ሁሉን አዋቂ</Text> - (መዝ 147:5፣ 139:2-4)፦ እግዚአብሔር ሁሉን አዋቂ (Omniscient) ነው፤ ያለፈውን፣ የአሁኑንና የወደፊቱን፣ የተደበቀውንና የተገለጠውን ሁሉ ያውቃል። የሰው ልጅ ሃሳብ ከመፈጠሩ በፊትም ቢሆን እርሱ ያውቀዋል። </Text>
          <Text style={styles.paragraph}><Text style={styles.sectionHeader}>በሁሉ ቦታ ምሉዕ</Text> - (መዝ 139:6-11፣ ኤር 23:23-24)፦ እግዚአብሔር በሁሉም ቦታ የሚገኝ (Omnipresent) ነው፤ እርሱ በቦታ አይገደብም። ከፊትም ከኋላም፣ ከሰማይም ከምድርም የተሞላ ነው። ዳዊት በመዝሙሩ (መዝ 139) ከእግዚአብሔር መንፈስ ወዴት መሸሽ እንደሚቻል ሲጠይቅ፣ የእግዚአብሔርን ሁሉን አዳርሽነት ይገልጣል። </Text>
          <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ዘለዓለማዊ </Text> - (መዝ 90:1-2፣ ኢሳ 44:6፤ ራዕ 1:8)፦ እግዚአብሔር መጀመሪያም መጨረሻም የሌለው፣ ያለ ዘመንና ወሰን የሚኖር (Eternal) አምላክ ነው። እርሱ ዘላለም የነበረ፣ ዘላለም ያለና ዘላለም የሚኖር ነው። "እኔ አልፋና ኦሜጋ ነኝ" (ራዕ 1:8) ማለቱ የዘላለም ህልውናውን ያሳያል።</Text>
          <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ጥበበኛ</Text> - (መዝ 104:24፣ ሮሜ 11:33)፦ እግዚአብሔር ፍጹም ጥበብ ያለው (All-Wise) አምላክ ነው። ዓለምን በታላቅ ጥበብ የፈጠረና የሚመራ ነው። የፍጥረታት ሥርዓትና አደረጃጀት የእርሱን ታላቅ ጥበብ ያሳያል። </Text>
          <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ቸር፣ መሐሪ፣ ይቅር ባይ </Text>- (ሰቆ ኤር 3:22፣ መዝ 103:8፣ ዮና 4:2)፦ የእግዚአብሔር ፍቅር፣ ምሕረትና ቸርነት ወሰን የለሽ ነው። እርሱ ለሚታዘዙትና ለሚጸጸቱት ይቅርታን የሚሰጥ አምላክ ነው። የኃጢአተኞችን ንስሐ የሚጠብቅና በቸርነቱ የሚመራ ነው። </Text>
          <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ፈታሂ በጽድቅ </Text>- (መዝ 9:7-8፣ ኤር 17:10)፦ እግዚአብሔር በጽድቅ የሚፈርድ፣ ለያንዳንዱ እንደሥራው የሚከፍል አምላክ ነው። ፍርዱ ፍጹም እውነትና ፍትሐዊ ነው። </Text>
       <Text style={styles.paragraph}>እነዚህ ባሕርያት የእግዚአብሔር ልዩ ገንዘብ ቢሆኑም፣ በአርያውና አምሳሉ የፈጠረው ሰውም በጸጋ የሚታደለው ቅድስና፣ ጽድቅ፣ ከሃሊነት፣ ዕውቀትና ጥበብ፣ ቸርነትና መሐሪነት ወዘተ አለ፡፡ </Text>
       <View style={styles.quoteBox}>
        <Text style={styles.quoteText}> "እኔ ቅዱስ እንደሆንኩ እናንተም ቅዱሳን ሁኑ" (ዘሌ 19:2፣ 1 ጴጥ 1:15) </Text>
      </View>
        <Text style={styles.paragraph}>የሚለው የመጽሐፍ ቅዱስ ትዕዛዝ፣ የሰው ልጅ የእግዚአብሔርን ባሕርያት በጸጋ እንዲላበስ ጥሪ መሆኑን ያመለክታል። </Text>
          <Text style={styles.sectionHeader}>አምላካዊ ስያሜ</Text>
        <Text style={styles.paragraph}>እግዚአብሔር ለባሕርዩና ለግብሩ ተስማሚ የሆነ ስም ያለው አምላክ ነው፡፡ ፈጣሪ ራሱን ለሰው ልጅ በቅድሚያ ግልጽ ያደረገው የከሃልነቱን ምሥጢር ስለሆነ (ዘጸ 6:3) በመጀመሪያ ኤልሻዳይ  / ሁሉን ቻይ በሚል ስም ራሱን ገለጠ (ዘፍ 17:1)፡፡ ይህ ስም የእግዚአብሔርን ሉዓላዊ ኃይልና በረከትን የመስጠት አቅም ይገልጣል።</Text>
        <Text style={styles.paragraph}>
          ቀጥሎም በባለሟሉ በሙሴ ቃል ስለ ስሙ ተጠይቆ በሰጠው መልስ፦
        </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ዘሃሎ ወይኅሉ (ያህዌ / YHWH)፦</Text> ያለኝ እኔ ነኝ (ዘጸ 3:14)። ይህ ስም የእግዚአብሔርን ዘላለማዊ ህልውና (Self-Existent Being)፣ ራስን የፈጠረ መሆኑንና የማይለወጥ ባሕርይን ይገልጣል። ይህም የእግዚአብሔር ከፍጥረታት ሁሉ የተለየና የህልውና ምንጭ መሆኑን ያመለክታል። </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ያህዌ </Text>ወይም ይህዌ የሚለው ቃል ወደ ግዕዝ ሲመለስ እግዚአብሔር በሚል ቃል ተተክቶ ይታያል። ይህ ቃል የዓለም ፈጣሪና ሠራዒ መጋቢ ከነባሕርዩና ግብሩ፣ ማለት እሱነቱ በጠቅላላ ከነማንነቱና ምንነቱ የሚገለጽበት ታላቅ ስያሜ ስለሆነ፣ በአይሁድ ቤተ ክህነት በዓመት ውስጥ በተወሰነ የምህላ ጊዜ፣ ያውም በሊቀ ካህናቱ ካልሆነ በቀር በማንኛውም ጊዜና ሰዓት አይነሣም፡፡ ይህ የሚያሳየው ለስሙ ያላቸውን ክብርና ፍርሃት ነው። በዚህ ፈንታ በዘወትር ጸሎት እግዚአብሔር የሚጠራው፦ </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}> አምላክ (ኤሎሂም / Elohim)፦</Text> ይህ የብዙ ቁጥር ስም ሲሆን፣ የሥላሴን አንድነት በሦስትነት፣ እና ኃይልንና ሥልጣንን ይገልጻል።</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ጌታ (አዶናይ / Adonai)፦ </Text> ይህ ስም የእግዚአብሔርን ሉዓላዊነትና የበላይነት ይገልጻል።</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ቅዱስ (ካዶሽ / Kadosh)፦  </Text>የእግዚአብሔርን ንጽሕናና ልዩነት ያሳያል።</Text>
       <Text style={styles.paragraph}> እነዚህን የተጸውዖ ስሞች እግዚአብሔር /ያህዌ/ ከሚለው ዐቢይ ስም ጋር በማጣመር፦</Text>
       <Text style={styles.paragraph}> ጌታ እግዚአብሔር (መዝ 7:1)</Text>
       <Text style={styles.paragraph}>ሕያው እግዚአብሔር (ማቴ 16:16)</Text>
       <Text style={styles.paragraph}> ቅዱስ እግዚአብሔር (ኢሳ 6:3)</Text>
       <Text style={styles.paragraph}>እግዚአብሔር አምላክ (ዘጸ 2:4)</Text>
       <Text style={styles.paragraph}>እያሉ መጥራት የታወቀ ልማደ መጽሐፍ ሆኖ ይታያል። ይህ የስያሜ ልዩነት የእግዚአብሔርን ማንነት በተለያየ ገፅታ ለመረዳት ያስችላል።</Text>
       <Text style={styles.paragraph}>ከዚህ ላይ በጥልቀት ማስተዋል የሚያስፈልገው፣ እግዚአብሔር በብሉይና በሐዲስ ኪዳን ሕዝብ የሚታወቀውና የሚጠራው ራሱ ለራሱ ባወጣው ስም መሆኑን ነው፡፡ በሰው የወጣለት ስያሜ ቢኖር እንኳ፣ እግዚአብሔርነቱን ከነአምላካዊ ባሕርዩና ግብሩ የሚገልጥ እንጂ፣ ከዚያ ውጭ ወይም ከዚያ ያነሰ ትርጉም ያለው አይደለም፡፡</Text>
    
        <Text style={styles.paragraph}>በሌላ አንጻር፣ በእርግጥ ለሰው የሚነገር ቃል ሁሉ ለፈጣሪ ሲነገር የፈጣሪን ባሕርይና ግብር ለመግለጽ በቂ ቋንቋ ላይሆን ይችላል፡፡ ለምሳሌ፣ እግዚአብሔር በዓለም ላይ ምሉዕ ሲሆን፣ ቅዱስ መጽሐፍ ግን እንደውሱን ፍጡር መጣ፣ ሄደ፣ ወጣ፣ ወረደ ወዘተ... ሲል ይገኛል፡፡ ይህ ዓይነቱ ቋንቋ ታዲያ ሰውኛ እንጂ እግዚአብሔርኛ አይደለም፡፡ እነዚህ ቃላት የእግዚአብሔርን ተግባራት ለሰው ልጅ ግንዛቤ በሚመጥን መልኩ ለማስረዳት ጥቅም ላይ ይውላሉ እንጂ፣ የእግዚአብሔርን ባሕርይ በውል የሚገድቡ አይደሉም። </Text>
        <Text style={styles.paragraph}> ለምሳሌ ወንጌላዊው ዮሐንስ ስለ ቃል ሥጋ መሆን ሲመሰክር "ብርሃን ወደ ዓለም መጣ" ካለ በኋላ በዓለም ነበረ ይላል (ዮሐ 1:9)፡፡ ወንጌላዊው በዓለም ላይ ያለውን አምላክ መጣ ሲል የተናገረውና መጣ ያለውን ደግሞ እንደገና መልሶ በዓለም ነበረ ያለው በመሳሳት አይደለም፡፡ ወንጌል የተሰበከው በሰውኛ ቋንቋ ስለሆነ፣ መጀመሪያ በዓለም ላይ ያለውን አምላክ እንደውሱን ፍጡር መጣ አለ፡፡ በዓለም ላይ ምሉዕ እንደገና በዓለም ነበረ የሚል እግዚአብሔርኛ ቃል መልሶ አዳነው፡፡</Text>
        <View style={styles.quoteBox}>
        <Text style={styles.quoteText}>  "ንባብ ይገድላል፣ ትርጓሜ ግን ያድናል" (2 ቆሮ 3:6) </Text>
      </View>
      <Text style={styles.paragraph}>ተብሎ እንደተጻፈ፣ ገድሎ ማዳንም ልማደ መጽሐፍ ስለሆነ አያስተችም፡፡</Text>
        <Text style={styles.paragraph}> አሁንም ይህን የሞተ ንባብ ሕያው ለማድረግ ሲያስፈልግ መጣ የሚለውን ቃል ታየ፣ ተገለጠ ብሎ በመተርጎም ማዳን ያስፈልጋል፡፡ እግዚአብሔር በየትኛውም ዓለም ምሉዕ ስለሆነ መጤ ሊባል ከቶ አይገባውምና፡፡ የአምላክን ስሞች መረዳት የእርሱን ማንነት በጥልቀት ለማወቅ ወሳኝ ሲሆን፣ ይህ ግን የሚሆነው በምሥጢርና በእምነት መነጽር ነው።</Text>    
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { fontSize: 20, fontWeight: 'bold', color: '#004D40', marginBottom: 16, textAlign: 'center' },
  paragraph: { fontSize: 14.5, color: '#333333', lineHeight: 22, marginBottom: 10 },
});