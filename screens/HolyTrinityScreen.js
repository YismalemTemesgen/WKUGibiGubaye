import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HolyTrinityScreen({ navigation }) {
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
        <Text style={styles.mainTitle}>ምሥጢረ ሥላሴ</Text>
        <Text style={styles.paragraph}>
        ቅድስት ኦርቶዶክሳዊት ተዋሕዶ ቤተ ክርስቲያናችን፤ ከፍጥረት ሁሉ በላይ በሆነ፣ በባሕርይው የማይመረመር፣ በሥልጣኑ ሁሉን የያዘ፣ መጀመሪያና መጨረሻ የሌለው (ጥንተ አልቦ)፣ ዘላለማዊ አንድ አምላክ መኖሩን በጽኑ ታስተምራለች። ይህም ረቂቅ አምላክ በአካል፣ በስም፣ በግብር ሦስት ሲሆን፤ በባሕርይ፣ በመለኮት፣ በሕልውና፣ በፈቃድና በሥልጣን ግን አንድ ነው። ይህ የሥላሴ ምሥጢር የእምነታችን ማዕከል፣ የሕይወታችንም መዳኛ የጽኑ መሠረት ነው።
        </Text>
        <Text style={styles.sectionTitle}>1.1. 'ሥላሴ' የሚለው ቃል ፡ የሦስትነትና የአንድነት መግለጫ</Text>
        <Text style={styles.paragraph}>ሥላሴ የሚለው ቃል ከግዕዙ ሠለሰ (ሦስት አደረገ) ከሚለው ግሥ የተገኘ ሲሆን፣ ትርጓሜውም ሦስትነት ማለት ነው። ቤተ ክርስቲያናችን ቅድስት ሥላሴ ስትል፣ ልዩ ሦስትነትን ታበሥራለች። ይህ ምሥጢር ሥላሴ ሦስት አካላት ሲሆኑ አንድ አምላክ፣ አንድ አምላክ ሲሆኑ ደግሞ ሦስት አካላት መሆናቸውን በረቂቅ ጥበብ ይገልጻል። ቅድስት ተብሎ በሴት አንቀጽ መጠራታቸው፣ የወላድያነ ዓለም (የዓለም አስገኚዎች) መሆናቸውን፣ እንዲሁም የእናትነት ምሕረትና ርኅራኄያቸው ለፍጥረታቸው ዘለዓለማዊ መሆኑን የምንረዳበት ነው። ይህ ቃል የሥላሴን የማይመረመር አንድነትና ሦስትነት፣ እንዲሁም ፍጹም ቅድስናቸውንና ባሕርያዊ ልዕልናቸውን ያሳያል። የሥላሴ ትምህርት የሰዎች የፍልስፍና መላምት ሳይሆን፣ ከመለኮታዊ ገሃድ (ከእግዚአብሔር መገለጥ) የተገኘ፣ በቅዱሳት መጻሕፍት የታተመ፣ በአበው ሊቃውንት ትምህርት የጠራ የቀና እምነት መሠረት ነው።</Text>
        <Text style={styles.sectionTitle}>1.1. 'ሥላሴ' የሚለው ቃል ፡ የሦስትነትና የአንድነት መግለጫ</Text>
        <Text style={styles.paragraph}>ሥላሴ የሚለው ቃል ከግዕዙ ሠለሰ (ሦስት አደረገ) ከሚለው ግሥ የተገኘ ሲሆን፣ ትርጓሜውም ሦስትነት ማለት ነው። ቤተ ክርስቲያናችን ቅድስት ሥላሴ ስትል፣ ልዩ ሦስትነትን ታበሥራለች። ይህ ምሥጢር ሥላሴ ሦስት አካላት ሲሆኑ አንድ አምላክ፣ አንድ አምላክ ሲሆኑ ደግሞ ሦስት አካላት መሆናቸውን በረቂቅ ጥበብ ይገልጻል። ቅድስት ተብሎ በሴት አንቀጽ መጠራታቸው፣ የወላድያነ ዓለም (የዓለም አስገኚዎች) መሆናቸውን፣ እንዲሁም የእናትነት ምሕረትና ርኅራኄያቸው ለፍጥረታቸው ዘለዓለማዊ መሆኑን የምንረዳበት ነው። ይህ ቃል የሥላሴን የማይመረመር አንድነትና ሦስትነት፣ እንዲሁም ፍጹም ቅድስናቸውንና ባሕርያዊ ልዕልናቸውን ያሳያል። የሥላሴ ትምህርት የሰዎች የፍልስፍና መላምት ሳይሆን፣ ከመለኮታዊ ገሃድ (ከእግዚአብሔር መገለጥ) የተገኘ፣ በቅዱሳት መጻሕፍት የታተመ፣ በአበው ሊቃውንት ትምህርት የጠራ የቀና እምነት መሠረት ነው።</Text>
        <Text style={styles.sectionTitle}>1.2. ምሥጢረ ሥላሴ ፡ የእምነት መሠረትና የመለኮታዊ ገሃድ</Text>
        <Text style={styles.paragraph}>ምሥጢረ ሥላሴ የአንድነትና የሦስትነት ረቂቅ ምሥጢር ነው። ምሥጢር መባሉም፣ በሰው አእምሮ ተመርምሮ ስለማያልቅና በእምነት ብቻ የሚታወቅ ስለሆነ ነው። ይኸውም አብ፣ ወልድና መንፈስ ቅዱስ በስም፣ በአካልና በግብር ሦስት ሲሆኑ፣ በባሕርይ፣ በመለኮትና በፈቃድ ግን አንድ ናቸው። ይህ ድንቅ አንድነትና ሦስትነት የክርስትና ዶግማ ዋነኛ ምሰሶ ነው። ክርስቲያኖች ሁሉ </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}> "በአብ በወልድ በመንፈስ ቅዱስ ስም"</Text>
        </View>
            <Text style={styles.paragraph}> (ማቴ. 28:19) ስለተጠመቅን፣ የሥላሴ እምነት በሕይወታችን ማዕከላዊ ቦታ አለው። የሥራችን መጀመሪያና መጨረሻም በሥላሴ ስም ይፈጸማል። ሆኖም የሥላሴ ምሥጢር እጅግ ረቂቅ በመሆኑ፣ የሰው አእምሮ ሊያውቀው የሚችለው እግዚአብሔር በገለጠለት መጠን ብቻ ነው። ይህ ምሥጢር የኦርቶዶክሳዊት ተዋሕዶን ልዩነት ከሌሎች አንድ አምላክ እምነቶች የሚለይ ሲሆን፣ የመለኮታዊ ፍቅርን፣ የድኅነትን ዕቅድና የቤተ ክርስቲያንን ሕይወት ሥርወ-መሠረት ይገልጻል።</Text>
            <Text style={styles.mainHeader}>2. የአንድነት ምሥጢር ፡ የአንድ መለኮታዊ ባሕርይ አንድነት</Text>
        <Text style={styles.paragraph}>ስለ ሥላሴ አንድነትና ሦስትነት ስንናገር፣ አንድነትን ቀድመን የምንመለከተው ለሦስትነታቸው የዘመን ወይም የክብር ቅደም ተከተል ኖሮበት አይደለም። ሥላሴ "እንዘ አሐዱ ሠለስቱ ወእንዘ ሠለስቱ አሐዱ" (አንድ ሲሆኑ ሦስት፣ ሦስት ሲሆኑ አንድ) ናቸው። ይህ የማይነጣጠል አንድነትና የማይዋሐድ ሦስትነት የሥላሴን ፍጹምነት ያሳያል። ሦስት ናቸው ስንል፣ እንደ አብርሃም፣ ይስሐቅና ያዕቆብ የተነጣጠሉ ወይም በክብር የሚበላለጡ ማለታችን አይደለም። አንድ ናቸው ስንልም፣ ሦስትነትን የሚጠቀልል መቀላቀል ወይም መዋሐድ ማለታችን አይደለም። ቅዱስ ያሬድና ቅዳሴ ማርያም እንደሚነግሩን፣ አንድ ሲሆኑ ሦስት፣ ሦስት ሲሆኑ አንድ ናቸው እንጂ። ይህ የመለኮታዊ አንድነት በባሕርይና በሥልጣን ፍጹም ሲሆን፣ የማይከፋፈለውን መለኮት ያረጋግጣል።</Text>
            <Text style={styles.sectionTitle}>2.2. ባሕርይ ፡ የመለኮታዊ ምንነት አንድነት</Text>
        <Text style={styles.paragraph}>ባሕርይ ማለት ምንነትን የሚያሳይ ሲሆን፣ አካል  ደግሞ ማንነትን የሚገልጽ ነው። ባሕርይና አካል እንደ አጽቅና ሥር የማይነጣጠሉ ናቸው። እግዚአብሔር በአንድነቱ የሚታወቅባቸው ስሞች ፈጣሪ፣ አምላክ፣ ጌታ፣ መለኮት፣ እግዚአብሔር፣ ጸባኦት፣ አዶናይ፣ ኤልሻዳይ የሚሉት ናቸው። ሥላሴ በባሕርይ ረቂቅ ናቸው፤ ርቀታቸውም በፍጥረት ሁሉ ምሉዓን ያደርጋቸዋል። ባሕርያቸው የማይራብ፣ የማይጠማ፣ የማይደክም፣ የማይታመም፣ የማይሞት ሕያው ነው። ቅዱስ ባስልዮስ በማክሰኞ ሊጦን "ስምከ ሕያው ዘኢይመውት ትጉህ ዘኢይዴቅስ ፈጣሪ ዘኢይደክም" እንዳለ። ይህ ባሕርይ የሥላሴን አንድነት የሚያረጋግጥ ሲሆን፣ ሦስቱ አካላት በአንድ መለኮታዊ ምንነት እንደሚካፈሉ ያሳያል።</Text>
            <Text style={styles.sectionTitle}>2.3. መለኮት ፡ የአንድነትና የሥልጣን ማዕከል</Text>
        <Text style={styles.paragraph}>እግዚአብሔር አንድ መለኮታዊ ባሕርይ ያለው ዘላለማዊ አምላክ ነው። መለኮት ማለት መለከ – ገዛ ከሚለው የግእዝ ግስ የወጣ ሲሆን፣ ትርጉሙም ግዛት ወይም መንግሥት ነው። አብ፣ ወልድና መንፈስ ቅዱስ በመለኮት፣ ማለትም በግዛትና በመንግሥት አንድ ናቸው። ሦስቱም አካላት ያልተፈጠሩና የማይጀመሩ (ዘላለማዊ) ናቸው። አብ፣ ወልድና መንፈስ ቅዱስ የሚለው ስም የአንድ አምላክ ስም ነው። ሦስቱ አካላት በህልውና ተገናዝበው ይኖራሉ እንጂ አይከፋፈሉም። ሐዋርያው ቅዱስ ጳውሎስ "ከአንዱም በቀር ማንም አምላክ እንደሌለ እናውቃለን" (1ኛ ቆሮ. 8:4) በማለት እንደገለጸው፣ አንድነቱ ሦስትነቱን ሳይጠቀልለው፣ ሦስትነቱ አንድነቱን ሳይከፋፍለው ይኖራሉ።</Text>
            <Text style={styles.sectionTitle}>2.4. ሕልውና ፡ የባሕርያት መዋሐድ</Text>
        <Text style={styles.paragraph}>ሥላሴ በሕልውና አንድ ናቸው። ሕልውና ማለት አነዋወር ማለት ነው። በአበው አገላለጽ፣ አብ በወልድና በመንፈስ ቅዱስ ሕያው ሆኖ፣ ወልድም በአብና በመንፈስ ቅዱስ ሕያው ሆኖ፣ መንፈስ ቅዱስም በአብና በወልድ ሕያው ሆኖ በመኖር አንድ ናቸው። ይህ የመለኮታዊ አካላት እርስ በእርስ መኖር ፍጹም አንድነትን ያሳያል። እያንዳንዱ አካል በሌሎቹ ውስጥ ሙሉ በሙሉ የሚገኝ ሲሆን፣ ይህ ግንኙነት የሥላሴን የማይከፋፈል መለኮትነት ያረጋግጣል።</Text>
            <Text style={styles.mainHeader}>3. የሦስትነት ምሥጢር ፡ የሦስት አካላት ልዩነት</Text>
            <Text style={styles.sectionTitle}>3.1. ግብር ፡ የአካላት ልዩ ባሕርያት</Text>
        <Text style={styles.paragraph}>በግብር ሦስት ናቸው። የአብ ግብሩ መውለድና ማስረጽ ሲሆን፣ የወልድ ግብሩ መወለድ፣ የመንፈስ ቅዱስ ግብሩ መስረጽ ነው። አብ ወላዲ፣ ወልድ ተወላዲ፣ መንፈስ ቅዱስ ሠራፂ ናቸው። እነዚህ ግብሮች የአካላትን ልዩነትና ዘላለማዊ ግንኙነት ይገልጻሉ። አባ ሕርያቆስ በቅዳሴው "ሠለስቱ ስም አሐዱ እግዚአብሔር" እንዳለ፣ ሦስቱ አካላት አንድ መለኮት ናቸው። አብ ይወልዳል እንጂ አይወለድም፤ ያሰርጻል እንጂ አይሰርጽም። ወልድ ሊቃውንት የአብ ክንዱ/እጁ እንደሚሉት፣ ቅድመ ዓለም ከአብ የተወለደ ከብርሃን የተገኘ ብርሃን ነው። መንፈስ ቅዱስም ሕይወትን የሚሰጥ አምላክ ሲሆን፣ ሊቃውንት የአብ ምክሩ ይሉታል።</Text>
            <Text style={styles.sectionTitle}>3.2. አካል : ልዩና ፍፁም ማንነት</Text>
        <Text style={styles.paragraph}>የአካል ሦስትነታቸው ለአብ ፍጹም አካል፣ ገጽና መልክ አለው፤ ለወልድና ለመንፈስ ቅዱስም እንዲሁ። ነገር ግን አይከፋፈሉም። አካል የተባለው ምሉዕ ቁመና ሲሆን፣ የሥላሴ አካል እንደ ሰው አካል ውሱን ሳይሆን፣ ምሉዕና ረቂቅ ነው። ዓለሙን ይወስኑታል እንጂ ዓለሙ አይወስናቸውም። እያንዳንዱ አካል ሙሉ በሙሉ አምላክ መሆኑን ይህ የአካል ልዩነት ያረጋግጣል።</Text>
            <Text style={styles.sectionTitle}>3.3. ኩነት ፡ የባሕርያዊ ግንኙነት</Text>
        <Text style={styles.paragraph}>በኩነትም የአብ ከዊንነቱ ልብነት ነው፤ የወልድ ቃልነት ነው፤ የመንፈስ ቅዱስ ሕይወትነት ነው። ስለዚህ ሥላሴ በአንድ ልብ በአብ ያውቃሉ፣ በአንድ ቃል በወልድ ይናገራሉ፣ በአንድ ሕይወት በመንፈስ ቅዱስ ሕያዋን ሆነው ይኖራሉ። ጌታችን "እኔ በአብ እንዳለሁ አብም በእኔ እንዳለ" (ዮሐ. 14:11) ሲል ያስተማረው ይህንኑ ነው።</Text>

                <Text style={styles.paragraph}>
                የእግዚአብሔርን አንድነት በፈጣሪነትና በሥልጣን እናምናለን፤ ሦስትነቱን ደግሞ በስም፣ በግብርና በአካል እናምናለን። ቅዱስ ባስልዮስ ዘቂሣርያ "ይሤለሱ በአካላት ወይትዋሐዱ በመለኮት" (በአካል ሦስት ሲሆኑ በመለኮት አንድ ይሆናሉ) እንዳለ።
                </Text>
                  <Text style={styles.mainHeader}>4. ምሥጢረ ሥላሴ በመጽሐፍ ቅዱስ</Text>
            <Text style={styles.sectionTitle}>4.1. ምሥጢረ ሥላሴ በብሉይ ኪዳን</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>  በፍጥረት ወቅት፦ </Text>"ሰውን በመልካችን እንደምሳሌአችን እንፍጠር" (ዘፍ. 1:26)። እንፍጠር የሚለው ቃል የሦስት አካላትን መለኮታዊ ምክር ያሳያል።</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>  በባቢሎን ግንብ ወቅት፦</Text> "ኑ እንውረድ ቋንቋቸውን በዚያ እንደባልቀው" (ዘፍ. 11:7)። ኑ እንውረድ የሚለው ቃል የሥላሴን ሦስትነት ያበሥራል።</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>  ለአብርሃም የተገለጠው፦</Text> አብርሃም ሦስት ሰዎችን በፊቱ አየ (ዘፍ. 18:1-15)። ይህ የአብ፣ የወልድና የመንፈስ ቅዱስ ምሳሌ ነው።</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>  የነቢያት ምስክርነት፦ </Text>ዳዊት "በእግዚአብሔር ቃል ሰማዮች ጸኑ፣ ሠራዊታቸውም ሁሉ በአፉ እስትንፋስ" (መዝ. 32:6) ሲል፣ ቃል ወልድን እስትንፋስ መንፈስ ቅዱስን ያመለክታል።</Text>

            <Text style={styles.sectionTitle}>4.2. ምሥጢረ ሥላሴ በሐዲስ ኪዳን</Text>
            <Text style={styles.paragraph}><Text style={styles.sectionHeader}>  በጥምቀት ጊዜ፦ </Text>ጌታ በዮርዳኖስ ሲጠመቅ፣ አብ በደመና "የምወደው ልጄ ይህ ነው" ሲል፣ መንፈስ ቅዱስ በርግብ አምሳል ወርዷል (ማቴ. 3:16-17)።</Text>
            <Text style={styles.paragraph}><Text style={styles.sectionHeader}> ሐዋርያዊ ተልዕኮ፦</Text> ጌታ "በአብ በወልድና በመንፈስ ቅዱስ ስም እያጠመቃችኋቸው..." (ማቴ. 28:19) ብሎ በግልጽ አዝዟል።</Text>

          <Text style={styles.mainHeader}>5. የምሥጢረ ሥላሴ አስረጅ ምሳሌዎች</Text>
            <Text style={styles.paragraph}>ሊቃውንት በሃይማኖተ አበው ምሳሌ ዘይሐጽጽ (ጎደሎ ምሳሌ) በማለት እንዲህ ያቀርባሉ፦</Text>
            <Text style={styles.paragraph}><Text style={styles.sectionHeader}>በሰው ነፍስ፦ </Text>ነፍስ ልብነት፣ ቃልነትና ሕይወትነት አላት።</Text>
            <Text style={styles.paragraph}><Text style={styles.sectionHeader}>  በፀሐይ፦ </Text>ክበብ (አብ)፣ ብርሃን (ወልድ)፣ ሙቀት (መንፈስ ቅዱስ)።</Text>
            <Text style={styles.paragraph}><Text style={styles.sectionHeader}> በእሳት፦</Text> አካል (አብ)፣ ብርሃን (ወልድ)፣ ዋዕይ/ሙቀት (መንፈስ ቅዱስ)።</Text>
            <Text style={styles.mainHeader}>6. የሚነሱ የስህተት ትምህርቶች </Text>
        <Text style={styles.paragraph}>ቤተ ክርስቲያን እንደ ሰባልዮስ (መለዋወጥ)፣ እንደ አርዮስ (ወልድን ፍጡር ማለት) እና እንደ መቅዶንዮስ (መንፈስ ቅዱስን ፍጡር ማለት) ያሉትን ክህደቶች ሁሉ አውግዛለች። እንዲሁም መንፈስ ቅዱስ ከአብና ከወልድ ይሰርጻል የሚለውን  የካቶሊክና የፕሮቴስታንት ትምህርት በጽኑ ትቃወማለች።</Text>
        <Text style={styles.sectionTitle}>የኒቂያ ጸሎተ ሃይማኖት ትንተና</Text>
        <Text style={styles.paragraph}>ይህ የሃይማኖት መግለጫ በ325 ዓ.ም. በኒቅያ ጉባዔ በ318 ቅዱሳን አባቶች በአርዮስ ክህደት ላይ የተሰጠ የመጨረሻ ምላሽ ነው።</Text>
        <Text style={styles.sectionHeader}>1. ስለ አብ መኖርና ፈጣሪነት</Text>
        <Text style={styles.paragraph}>ሁሉን የፈጠረ... በአንድ አምላክ በእግዚአብሔር አብ እናምናለን። ይህ የአብን አባትነትና የሁሉ ነገር ምንጭነት ያረጋግጣል።</Text>
        <Text style={styles.sectionHeader}>2. ስለ ወልድ አምላክነት</Text>
        <Text style={styles.paragraph}>ከብርሃን የተገኘ ብርሃን፣ ከእውነተኛ አምላክ የተገኘ እውነተኛ አምላክ... ይህ ወልድ ፍጡር ሳይሆን ከአብ ጋር አንድ ባሕርይ  መሆኑን ያሳያል።</Text>
        <Text style={styles.sectionHeader}>3. ስለ ወልድ ሰው መሆን</Text>
        <Text style={styles.paragraph}>በመንፈስ ቅዱስ ግብር ከቅድስት ድንግል ማርያም ፍጹም ሰው ሆነ። ይህ ተዋሕዶ የምንለውን ድንቅ ምሥጢር ይገልጻል።</Text>
        <Text style={styles.sectionHeader}>4. ስለ መንፈስ ቅዱስ አምላክነት</Text>
        <Text style={styles.paragraph}>ጌታና ሕይወትን የሚሰጥ ከአብ በሠረፀ በመንፈስ ቅዱስም እናምናለን። መንፈስ ቅዱስ ከአብ ብቻ እንደሚሰርጽ በማረጋገጥ የውጭ ትምህርቶችን ይቃወማል።</Text>
        <Text style={styles.sectionHeader}>ማጠቃለያ</Text>
        <Text style={styles.paragraph}>ኦርቶዶክሳዊት ተዋሕዶ ቤተ ክርስቲያን ምሥጢረ ሥላሴን ሥላሴ አንድ ሲሆኑ ሦስት፣ ሦስት ሲሆኑ አንድ ናቸው ብላ በጽኑ ታምናለች። ይህ የማይመረመር ምሥጢር የእግዚአብሔርን ፍቅር ጥልቀት የምንረዳበት የእምነታችን ራስ ነው።</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { fontSize: 20, fontWeight: 'bold', color: '#004D40', marginBottom: 16, textAlign: 'center' },
  paragraph: { fontSize: 14.5, color: '#333333', lineHeight: 22, marginBottom: 10 },
  quoteBox: { backgroundColor: '#E0F2F1', padding: 12, borderRadius: 8, borderLeftWidth: 4, borderLeftColor: '#004D40', marginVertical: 8 },
  quoteText: { fontSize: 14, fontStyle: 'italic', color: '#004D40', lineHeight: 20 },
  sectionHeader: { fontSize: 14, fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#00796B', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  mainHeader: { fontSize: 22, fontWeight: 'bold', color: '#004D40', marginBottom: 16, textAlign: 'center' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#004D40' },
});