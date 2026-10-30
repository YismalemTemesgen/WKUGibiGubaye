import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BahriyEgziabiherScreen({ navigation }) {
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
        <Text style={styles.mainTitle}>ባሕርያተ እግዚአብሔር 
(የእግዚአብሔር ባሕርይ)</Text>
        <Text style={styles.paragraph}>እግዚአብሔር በመለኮታዊ ክብሩ ለዘለዓለም የሚኖር ረቂቅ አምላክ ነው፡፡ ሰውም እግዚአብሔርን ለማወቅ ያለው ችሎታ እጅግ ውሱን ነው፡፡ በመሆኑም የእግዚብሔርን ባሕርይ ሙሉ በሙሉ ለመመርመርና ለመረዳት አይችልም፡፡ በቅዱስ ጳውሎስ ቃል
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"አሁንስ በመስታወት በድፍረት እናያለን፤ ያን ጊዜ ግን ፊት ለፊት እናያለን"</Text>
              </View>
                <Text style={styles.paragraph}>(1ኛ ቆሮ. 13:12) እንደተባለው፣ የእግዚብሔርን ፍጹም እውቀት የምናገኘው በዘላለም ሕይወት ነው፡፡ ይሁን እንጂ፣ እግዚአብሔር ራሱን በፈጠረው ዓለም (በፍጥረት)፣ በቅዱሳት መጻሕፍት (በቃሉ) እና በጌታችን ኢየሱስ ክርስቶስ (በሥጋ መገለጡ) አማካኝነት በመገለጡ፣ የአምላክን ባሕርይ በሚረዳን መልኩ እንመለከታለን፡፡ እነዚህ ባሕርያት የእግዚብሔርን ማንነትና ከፍጡራን ያለውን ልዩነት የሚያስረዱ ናቸው፡፡ የእግዚአብሔርን ባሕርያት በጥልቀት መረዳት ለትክክለኛ አምልኮ፣ ለጽኑ እምነትና ለጥልቅ መንፈሳዊ ሕይወት መሠረት ይጥላል። </Text>
        <Text style={styles.paragraph}>የእግዚአብሔርን ባሕርያት የሚገልጡ አስር ነገሮች /
        </Text>
        <Text style={styles.sectionHeader}>እግዚአብሔር መንፈስ ነው</Text>
            
                <Text style={styles.paragraph}>እግዚአብሔር መንፈስ መሆኑ በሕዋሳታችን አማካይነት ዳሰን ልናውቀው የማንችል ረቂቅ ነው፡፡ ይህ ማለት እርሱ ቁስ አካል  አይደለም፤ ስለዚህም በቦታ ወይም በጊዜ አይወሰንም፡፡ እግዚአብሔር መንፈስ ነው ስንል ዝርው ብትን ኃይል ነው ማለት አይደለም፡፡ ይልቁንም፣ እርሱ ረቂቅ መንፈሳዊ አካል ያለው፣ በራሱ የሚኖር፣ ሕያውና ፈቃድ ያለው አካል ነው፡፡ ለግዙፍ አካል መሥፈርት የሚሆኑት እንደ መጠን፣ ትልቅነት፣ ክብደት፣ ቅርጽ የመሳሰሉት ባህርያት ለእግዚብሔር አይሆኑም፤ ምክንያቱም እርሱ ቁስ አካል አይደለም፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች: </Text>
                  <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔር መንፈስ ነው፤ የሚያመልኩትም በመንፈስና በእውነት ሊያመልኩት ይገባል" (ዮሐንስ 4:24)፡፡ </Text>
              </View>
                  <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ጌታም መንፈስ ነው፤ የጌታም መንፈስ ባለበት በዚያ አርነት አለ" (2ኛ ቆሮንቶስ 3:17)፡፡</Text>
              </View>
                  <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"በምድር ክበብ ላይ የሚቀመጥ እርሱ ነው፣ በእርስዋም የሚኖሩት እንደ አንበጣ ናቸው፤ ሰማያትን እንደ መጋረጃ የሚዘረጋቸው፣ እንደ ድንኳንም ለመኖር የሚዘረጋቸው እርሱ ነው" (ኢሳይያስ 40:22)፡፡</Text>
              </View>
                <Text style={styles.paragraph}>የቤተክርስቲያን አባቶች ትምህርት: ቅዱስ አትናቴዎስ፦
        </Text>
                  <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔር መንፈስ ነውና፣ በሥጋዊ መንገድ ሊታወቅ አይችልም፤ ነገር ግን በፍጥረቱና በመንፈሱ ይታወቃል፡፡ እርሱ የማይታይና የማይዳሰስ ነው" ብሏል። ቅዱስ ጎርጎርዮስ ዘኑሲስ፦ "እግዚአብሔር ሥጋ የሌለው  እና በማንኛውም ፍጡር የማይወሰን ንጹሕ መንፈስ ነው፡፡ የእርሱ መንፈሳዊነት ከፍጥረታት ሁሉ የላቀ ያደርገዋል" ሲል አስተምሯል። </Text>
              </View>
              <Text style={styles.sectionHeader}>እግዚአብሔር ዘለዓለማዊ ነው</Text>
        <Text style={styles.paragraph}>ዘለዓለማዊነት የእግዚአብሔር መሰረታዊ ባሕርይ ነው፡፡ እርሱ ዓለም ከመፈጠሩ በፊት ያለ፣ በዓለም ህልውና ጊዜም ያለ፣ ዓለምን ካሳለፈም በኋላ የሚኖር አምላክ ነው፡፡ ስለዚህ እግዚአብሔር በዘመናት የማይቆጠር፣ መጀመሪያና መጨረሻ የሌለው ዘለዓለማዊ ነው፡፡ እርሱ የጊዜና የዘመናት ፈጣሪ ነው፤ እራሱ ግን በጊዜ አይወሰንም፡፡ ጊዜ የፍጡራን መገለጫ ሲሆን፣ እግዚአብሔር ከጊዜ በላይ ነው፡፡ ይህ ማለት እግዚአብሔር በጊዜ ውስጥ ያለ ገደብ የሌለው ህልውና  ብቻ ሳይሆን፣ ከጊዜ ውጪ የሚኖር  አምላክ ነው፡፡ እርሱ ጊዜን የፈጠረውና የሚቆጣጠረው ነው፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ተራሮች ሳይወለዱ፣ ምድርና ዓለምንም ሳይፈጠሩ፣ ከዘላለም እስከ ዘላለም ድረስ አንተ እግዚአብሔር ነህ" (መዝሙር 90:2)፡፡ </Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"አልፋና ኦሜጋ፣ ፊተኛውና ኋለኛው፣ መጀመሪያውና መጨረሻው እኔ ነኝ" (ራዕይ 1:8፣ 21:6፣ 22:13)፡፡ </Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"የዘለዓለም አምላክ እግዚአብሔር፣ የምድርም ዳርቻ ፈጣሪ፣ አይደክምም አይታክትም፤ ማስተዋሉም አይመረመርም" (ኢሳይያስ 40:28)፡፡ </Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ለጌታ አንድ ቀን እንደ ሺህ ዓመት፣ ሺህ ዓመትም እንደ አንድ ቀን እንደ ሆነ ይህን አንድ ነገር አትርሱ" (2ኛ ጴጥሮስ 3:8)፡፡</Text>
                <Text style={styles.paragraph}> የቤተክርስቲያን አባቶች ትምህርት: አውግስጢኖስ፦</Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "ጊዜ የተፈጠረው ከዓለም ጋር ነው፣ እግዚአብሔር ግን ጊዜ ከመፈጠሩ በፊትም ነበር፡፡ እርሱ ከጊዜ በላይ ነው፣ ጊዜ በእርሱ ውስጥ ይፈሳል እንጂ እርሱ በጊዜ አይወሰንም" ብሏል። ቅዱስ ባሲል ታላቁ፦ "እግዚአብሔር መጀመሪያ የሌለው፣ መጨረሻ የሌለው፣ በጊዜ ያልተወሰነ አምላክ ነው፡፡ የእርሱ ህልውና ከማንኛውም ፍጥረት በፊት ነው" ሲል አስተምሯል። </Text>
              </View>
              <Text style={styles.sectionHeader}>እግዚአብሔር ሁሉን ቻይ /ከሃሌ ኩሉ/ ነው (God is Omnipotent/Almighty)</Text>
              <Text style={styles.paragraph}>ከሃሌ ኩሉነት ማለት እግዚአብሔር ሁሉን ቻይ ነው ማለት ነው፡፡ እርሱ የሚሳነው ነገር የለም፡፡ የእግዚአብሔር ሁሉን ቻይነት ማለት በባሕርዩ፣ በጽድቁና በጥበቡ የሚቻልን ነገር ሁሉ ማድረግ ይችላል ማለት ነው፡፡ ይህ ማለት እርሱ አመክንዮአዊ ያልሆነን ነገር (ለምሳሌ ራሱን መካድ፣ መዋሸት፣ ወይም ክፉ ነገር መስራት) ማድረግ አይችልም፤ ምክንያቱም እነዚህ ከቅዱስ ባሕርዩ ጋር ይቃረናሉ፡፡ ኃይሉ ሁልጊዜ ከጽድቁና ከመልካምነቱ ጋር የተስማማ ነው፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:</Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ለእግዚአብሔር የሚሳነው ነገር የለምና" (ሉቃስ 1:37)፡፡</Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ኢየሱስም ወደ እነርሱ ተመልክቶ፦ በሰው ይህ አይቻልም፣ በእግዚአብሔር ዘንድ ግን ሁሉ ይቻላል አለ" (ማቴዎስ 19:26)፡፡ </Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "እኔም አምላክ ሁሉን ቻይ ነኝ" (ዘፍጥረት 17:1)፡፡</Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔርም የነገረውን ሁሉ አደረገ፤ ማንም ሊከለክለው አይችልም" (መዝሙር 135:6)፡፡ </Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"አቤቱ እግዚአብሔር ሆይ፣ አንተ ሰማይንና ምድርን በታላቅ ኃይልህና በተዘረጋች ክንድህ ፈጥረሃልና፤ የሚሳንህ ነገር የለም" (ኤርምያስ 32:17)፡፡</Text>
              </View>
                        
        <Text style={styles.paragraph}>የቤተክርስቲያን አባቶች ትምህርት: ዮሐንስ ዘደማስቆስ፦ 
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የእግዚአብሔር ኃይል ፍጹም ነው፣ ነገር ግን በፍትሕና በፍቅር ይገለጣል፡፡ እርሱ ሁሉን ቻይ ቢሆንም፣ የኃይሉ አጠቃቀም ከባሕርዩ ጋር የተስማማ ነው" ብሏል።</Text>                  
              </View>
              <Text style={styles.paragraph}> ቅዱስ ቄርሎስ ዘእስክንድርያ፦ </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔር ሁሉን ቻይ ነው ማለት እርሱ የሚፈልገውን ሁሉ ማድረግ ይችላል ማለት ነው፤ ነገር ግን የሚፈልገው ሁልጊዜ መልካም ነው" ሲል አስተምሯል።</Text>
              </View>
            
                <Text style={styles.sectionHeader}>እግዚብሔር አይለወጥም</Text>
                  <Text style={styles.paragraph}>አይለወጥም ማለት እግዚአብሔር በባሕርዩ፣ በፍቃዱ፣ በቃል ኪዳኑና በባሕርይ ባህርያቱ የማይለወጥ አምላክ ነው፡፡ ይህ ማለት እርሱ ፍጹም ስለሆነ፣ የተሻለ ሊሆን አይችልም፣ ስለዚህም መለወጥ አያስፈልገውም፡፡ የእርሱ ባሕርይ፣ ዓላማዎች፣ ተስፋዎች እና ቃል ኪዳኖች ቋሚና የማይሻሩ ናቸው፡፡ መጽሐፍ ቅዱስ አንዳንድ ጊዜ እግዚአብሔር ተጸጸተ ሲል (ዘፍጥረት 6:6፣ ዮናስ 3:10)፣ ይህ ሰብዓዊ አገላለጽ  ሲሆን የእግዚአብሔርን ለውጥ ሳይሆን፣ እርሱ የሰዎችን ድርጊት እንዴት እንደሚመለከት ወይም የሰዎች ድርጊት በእርሱ ዘለዓለማዊ ዕቅድ ውስጥ የሚያስከትለውን ምላሽ የሚገልጽ ነው፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "እኔ እግዚአብሔር ነኝ፣ አልለወጥም" (ሚልክያስ 3:6)፡፡</Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የእግዚአብሔርም የጸጋና የጥሪ ስጦታ ያለ ንስሐ ነውና" (ሮሜ 11:29)፡፡</Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "ሰማይና ምድር ያልፋሉ፣ ቃሌ ግን አያልፍም" (ማቴዎስ 24:35)፡፡</Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"የብርሃናት አባት፣ በእርሱ ዘንድ መለወጥና የመዞር ጥላ የለም" (ያዕቆብ 1:17)፡፡</Text>
              </View>
                <Text style={styles.paragraph}>የቤተክርስቲያን አባቶች ትምህርት: ቅዱስ ኢሬኔዎስ፦</Text>
      
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔር የማይለወጥ ከሆነ፣ ተስፋዎቹም የማይለወጡ ናቸው፤ ይህም የድኅነታችን መሠረት ነው፡፡ የእርሱ ቃል ኪዳኖች ዘለዓለማዊ ናቸው" ብሏል። </Text>
              </View>
                
                <Text style={styles.paragraph}> ቅዱስ ዮሐንስ አፈወርቅ፦  </Text>
    
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔር አይለወጥም፤ የእርሱ ፍጹምነት መለወጥን አያስፈልገውም፡፡ እርሱ ሁልጊዜ መልካም ነው" ሲል አስተምሯል። </Text>
              </View>
                <Text style={styles.sectionHeader}>እግዚአብሔር በሁሉ ሙሉ /ምሉዕ በኩለሄ/ ነው</Text>
                      <Text style={styles.paragraph}>
        ምሉዕ በኩለሄ ማለት እግዚአብሔር በዓለም ሁሉ ሙሉ ነው፤ በየትኛውም ቦታ የማይገኝበት ስፍራ የለም ማለት ነው፡፡ እግዚአብሔር በቦታ ውስጥ እንደ ቁስ አካል አይገኝም፤ ይልቁንም ቦታን ሁሉ ይሞላል፣ ከቦታም በላይ ነው፡፡ ይህ ባሕርይ የእግዚአብሔርን ሁሉን አዋቂነትና ሁሉን ቻይነት ያጠናክራል፤ ምክንያቱም በሁሉም ቦታ ስለሚገኝ ሁሉንም ያውቃል፣ ሁሉንም ማድረግም ይችላል፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:
        </Text>
              
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እኔ ከሩቅ አምላክ ነኝ ወይስ ከቅርብ አምላክ? የእኔ ያልሞላበት ሰማይና ምድር የለም" (ኤርምያስ 23:23-24)፡፡ </Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"መንፈስህን ወዴት እሄዳለሁ? ከፊትህስ ወዴት እሸሻለሁ? ወደ ሰማይ ብወጣ አንተ በዚያ አለህ፤ ወደ ሲኦልም ብወርድ አንተ በዚያ አለህ" (መዝሙር 139:7-8)፡፡</Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"በሰማይም በምድርም ያለው ሁሉ በእርሱ ነው" (ቆላስይስ 1:16)፡፡</Text>
              </View>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እኛ በእርሱ እንኖራለን፣ እንንቀሳቀሳለን፣ እንኖርማለን" (የሐዋርያት ሥራ 17:28)፡፡ </Text>
              </View>
            
                <Text style={styles.paragraph}>የቤተክርስቲያን አባቶች ትምህርት: ቅዱስ ጎርጎርዮስ ዘኑሲስ፦  </Text>
                  <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔር ያልተወሰነ ባሕርይ ስላለው ሁሉንም ነገር ይሞላል፡፡ እርሱ በቦታ አይወሰንም፣ ነገር ግን በሁሉም ቦታ ይገኛል፤ ይህም የመለኮታዊ ታላቅነቱ መገለጫ ነው" ብሏል። </Text>
              </View>
        <Text style={styles.paragraph}>
        አውግስጢኖስ፦ 
        </Text>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔር በሁሉም ቦታ ሙሉ በሙሉ ይገኛል፤ እርሱ በየትኛውም ስፍራ አይከፈልም፣ ነገር ግን በሁሉም ቦታ ሙሉ ነው" ሲል አስረድቷል። </Text>
              </View>
          <Text style={styles.sectionHeader}>በመለኮታዊ ጥበቃው</Text>
  
          <Text style={styles.paragraph}>መለኮታዊ ጥበቃ ማለት እግዚአብሔር ዓለምን ከፈጠረ በኋላ እንደ ተራ ሰዓት ሠሪ ትቶት አልሄደም ማለት ነው፡፡ ይልቁንም፣ እርሱ ሁሉንም ነገር ያለማቋረጥ ይጠብቃል፣ ይመራል፣ ይገዛል፡፡ ይህ ማለት እግዚአብሔር በዓለም ላይ የሚፈጸሙትን ትልልቅና ትናንሽ ክስተቶች ሁሉ ይቆጣጠራል፤ ምንም ነገር ከአቅሙ ውጪ አይደለም፡፡ በእርሱ ፈቃድ፣ ከእርሱ ትእዛዝ ወይም በእርሱ ጥበቃ ካልሆነ በቀር የሚሆን፣ የሚደረግ፣ የሚደርስ ነገር የለም፡፡ ሁሉም ነገር በእርሱ ጥበብ ይሆናል፣ ይደረጋል፡፡ በአጋጣሚ፣ በእድል፣ በስምምነት፣ ወይም በግምት የሚሆን ነገር የለም፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:
        </Text>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ያለ አባታችሁ ፈቃድ ከእነርሱ አንዲቱ እንኳ ወደ ምድር አትወድቅም፤ የራሳችሁም የራሳችሁ ጠጉር ሁሉ ተቈጥሮአል" (ማቴዎስ 10:29-30)፡፡ </Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ሁሉንም ነገር ለበጎ እንዲሆን ያደርጋል" (ሮሜ 8:28)፡፡ </Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የእግዚአብሔርም ምክር ለዘላለም ይኖራል፣ የልቡም አሳብ ለትውልድ ሁሉ" (መዝሙር 33:11)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "እግዚአብሔርም በሰማይ ዙፋኑን አዘጋጀ፤ መንግሥቱም ሁሉን ትገዛለች" (መዝሙር 103:19)፡፡</Text>
              </View>
        <Text style={styles.paragraph}> የቤተክርስቲያን አባቶች ትምህርት: አውግስጢኖስ፦</Text>
        <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "በእግዚአብሔር ጥበቃ ውስጥ፣ ክፉ ነገሮች እንኳ ለበጎ ዓላማ ይውላሉ፡፡ ምንም ነገር በአጋጣሚ አይሆንም፤ ሁሉም ነገር በመለኮታዊ ዕቅድ ውስጥ ነው" ብሏል። </Text>
              </View>
        <Text style={styles.paragraph}>          
           ዮሐንስ ዘደማስቆስ፦
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"መለኮታዊ ጥበቃ የእግዚአብሔር የማያቋርጥ እንቅስቃሴ ሲሆን፣ ፍጥረቱን የሚጠብቅበትና የሚመራበት መንገድ ነው" ሲል አስረድቷል። </Text>
              </View>

          <Text style={styles.sectionHeader}>እግዚአብሔር ሁሉን አዋቂ ነው</Text>
  
          <Text style={styles.paragraph}>ሁሉን አዋቂነት የእግዚአብሔርን ፍጹም እውቀት ያሳያል፡፡ እግዚአብሔር ሁሉን አዋቂ ነውና ከእርሱ የተሰወረ ነገር የለም፡፡ እርሱ ያለፈውን፣ ያሁኑንና የሚመጣውን፣ ያልተነገሩ ሀሳቦችንና ቃላትን፣ ተግባራትን ከመሆናቸው አስቀድሞ ያውቃል፡፡ ይህ የእግዚአብሔር ባሕርይ ለፍርዱና ለምሕረቱ መሠረት ነው፤ ምክንያቱም ሁሉንም ነገር በትክክል ስለሚያውቅ ፍርዱ ፍጹም ጻድቅ ነው፣ ምሕረቱም ደግሞ በፍጹም እውቀት ላይ የተመሠረተ ነው፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:
        </Text>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"አቤቱ፣ አንተ መርምረኸኛል ታውቀኝማለህ፡፡ መቀመጤንና መነሣቴን አንተ ታውቃለህ፤ ሐሳቤን ከሩቅ ታስተውላለህ፡፡ መንገዴንም መኝታዬንም መርምረሃል፤ መንገዴንም ሁሉ ታውቃለህ፡፡ ቃልም በምላሴ ሳይደርስ፣ እነሆ፣ አቤቱ፣ አንተ ሁሉን ታውቀዋለህ" (መዝሙር 139:1-4)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ከልብ የሚወጡት ክፉ ሐሳቦች፣ መግደል፣ ዝሙት፣ መስረቅ፣ የሐሰት ምስክርነት፣ ስድብ ናቸው" (ማቴዎስ 15:19)፡፡ </Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "ከእርሱም የተሰወረ የለም፤ ሁሉ ለእግዚአብሔር ዓይን ገልጦ ይታያልና" (ዕብራውያን 4:13)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እግዚአብሔር ከልባችን ይበልጣልና፣ ሁሉንም ያውቃል" (1ኛ ዮሐንስ 3:20)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"የእግዚአብሔርም ጥበብና እውቀት ባለጠግነት እንዴት ጥልቅ ነው! ፍርዱ እንዴት የማይመረመር ነው! መንገዱስ እንዴት የማይታወቅ ነው!" (ሮሜ 11:33)፡፡</Text>
              </View>
        <Text style={styles.paragraph}> የቤተክርስቲያን አባቶች ትምህርት: ቅዱስ ቄርሎስ ዘኢየሩሳሌም፦</Text>
        <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "እግዚአብሔር ሁሉን ያውቃል፣ ከእርሱ የተሰወረ የለም፤ ይህ እውቀትም ፍጹም ነው፡፡ እርሱ ያለፈውን፣ የአሁኑንና የሚመጣውን ሁሉ ያውቃል" ብሏል።</Text>
              </View>
        <Text style={styles.paragraph}>          
      ቅዱስ ጎርጎርዮስ ዘናዚያንዙ፦
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የእግዚአብሔር እውቀት ገደብ የለውም፡፡ እርሱ ማንኛውንም ነገር ከማወቅ የሚከለክለው ነገር የለም" ሲል አስረድቷል። </Text>
              </View>
          <Text style={styles.sectionHeader}>እግዚአብሔር ቅዱስ ነው</Text>
  
          <Text style={styles.paragraph}>ቅድስና የእግዚአብሔር ዋና ባሕርይ ነው፡፡ እግዚአብሔር ቅዱስ ነውና በሥራው ሁሉ ክፋትና ርኩሰት የለበትም፡፡ እርሱ ንጹሕና ፍጹም ደግ ነው፡፡ እውነተኛ ፈራጅ ነው፡፡ ምሕረቱ የበዛ፣ ትዕግስተኛ፣ ለቁጣም የዘገየ፣ እንዲሁ ፍጥረቱን የሚወድና ጸጋውን የሚያጎናጽፍ ነው፡፡ የእግዚአብሔር ቅድስና ከኃጢአትና ከክፋት መለየቱን የሚያመለክት ሲሆን፣ የጽድቁና የንጽሕናው ፍጹምነት መገለጫ ነው፡፡ እርሱ ቅዱስ እንደሆነ ፍጥረቱም ቅዱስ እንዲሆን ይፈልጋል፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:
        </Text>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እኔ ቅዱስ ነኝና እናንተም ቅዱሳን ሁኑ" (ዘሌዋውያን 11:44፣ 19:2፣ 1ኛ ጴጥሮስ 1:16)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ቅዱስ፣ ቅዱስ፣ ቅዱስ የሠራዊት ጌታ እግዚአብሔር፤ ምድር ሁሉ ከክብሩ ተሞልታለች" (ኢሳይያስ 6:3)፡፡ </Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ከእግዚአብሔርም በቀር ቅዱስ የለም" (1ኛ ሳሙኤል 2:2)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"በእርሱም ጨለማ ከቶ የለም" (1ኛ ዮሐንስ 1:5)፡፡</Text>
              </View>
        <Text style={styles.paragraph}>የቤተክርስቲያን አባቶች ትምህርት: ሊዮ ታላቁ፦</Text>
        <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የእግዚአብሔር የማይቀረብ ቅድስና ለሰው ልጆች የሕይወት መለኪያ ነው፡፡ እግዚአብሔር ቅዱስ ነውና፣ እኛም በሕይወታችን ቅድስናን እንድንከተል ይጠበቅብናል" ብሏል።</Text>
              </View>
        <Text style={styles.paragraph}>          
        ቅዱስ አትናቴዎስ፦ 
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የእግዚብሔር ቅድስና የእርሱ ፍጹም ንጽሕናና ከኃጢአት ሁሉ የራቀ መሆኑን ያሳያል፡፡ እርሱ የጽድቅ ሁሉ ምንጭ ነው" ሲል አስተምሯል። </Text>
              </View>
          <Text style={styles.sectionHeader}>እግዚአብሔር ፍጹም ነው</Text>
  
          <Text style={styles.paragraph}>ፍጹምነት ማለት እግዚአብሔር ሁሉንም መልካም ባሕርያት ያለገደብና ያለጉድለት እንደያዘ ያሳያል፡፡ እርሱ ደግነቱ ፣ ቅድስናው ፣ ፍቅሩ ፣ ርኅራኄው ፣ ትክክለኛ ፍርዱ ፣ ጸጋውና እንዲሁም ለፍጥረቱ የሚያደርገው ጥበቃ ፍጹም ነው፡፡ እግዚአብሔር ምንም የሚጎድለው ነገር የለም፡፡ እርሱ የፍጹምነት ሁሉ ምንጭ ነው፡፡ ይህ ማለት እግዚአብሔር ምንም ዓይነት መሻሻል ወይም መለወጥ አያስፈልገውም፤ ምክንያቱም እርሱ ከሁሉ የላቀና እንከን የለሽ ነው፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:
        </Text>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"እንግዲህ የሰማዩ አባታችሁ ፍጹም እንደ ሆነ እናንተም ፍጹማን ሁኑ" (ማቴዎስ 5:48)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"የእግዚአብሔር መንገድ ፍጹም ነው" (መዝሙር 18:30)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "እግዚአብሔርም ሥራውን ሁሉ አየ፣ እነሆም፣ እጅግ መልካም ነበር" (ዘፍጥረት 1:31)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የእርሱ ሥራ ፍጹም ነው" (ዘዳግም 32:4)፡፡</Text>
              </View>
        <Text style={styles.paragraph}> የቤተክርስቲያን አባቶች ትምህርት: ቅዱስ ጎርጎርዮስ ዘናዚያንዙ፦</Text>
        <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የፍጹምነት ባሕርይ የእግዚአብሔርን ታላቅነትና ልዕልና ይገልጻል፡፡ እግዚአብሔር ፍጹም ነውና፣ ከርሱ የሚመጣው ሁሉ ፍጹም ነው" ብሏል።</Text>
              </View>
        <Text style={styles.paragraph}>          
        ቅዱስ ባሲል ታላቁ፦ 
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "እግዚአብሔር በሁሉም ባሕርያቱ ፍጹም ነው፤ ምንም የሚጎድለው ነገር የለም፡፡ ይህ ፍጹምነት የእርሱን መለኮታዊ ክብር ያሳያል" ሲል አስረድቷል።</Text>
              </View>
          <Text style={styles.sectionHeader}>የማንም እርዳታ አያስፈልገውም (He Needs No One's Help / Aseity)</Text>
  
          <Text style={styles.paragraph}>እግዚአብሔር የማንንም እርዳታ የማይሻ  አምላክ ነው፡፡ ይህ ማለት እርሱ በራሱ የሚኖር፣ በራሱ የሚበቃ፣ ከማንም ወይም ከምንም የማይደገፍ አምላክ ነው፡፡ ፍጥረታት የተፈጠሩት በእግዚአብሔር ቃል ሲሆን፣ እርሱ የማንም እርዳታና ድጋፍ አያስፈልገውም፡፡ እርሱ በመለኮታዊ ክብሩ ቅድመ ዓለም የነበረ፣ በማዕከለ ዓለም ያለ፣ ድኅረ ዓለምን አሳልፎ የሚኖር ነው፡፡ እርሱ ዓለምን የፈጠረው ከፍቅርና ከበጎነት እንጂ ከፍላጎት ወይም ከጎደሎነት አይደለም፡፡ የመጽሐፍ ቅዱስ ማስረጃዎች:
        </Text>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"ምድርንና በእርስዋ ያለውን ሁሉ የፈጠረው፣ የሰማይና የምድር ጌታ እርሱ ነው" (የሐዋርያት ሥራ 17:24)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"የጎደለው ነገር እንዳለውም በሰው እጅ አይገለገልም፤ እርሱ ራሱ ለሁሉ ሕይወትንና እስትንፋስን ሁሉንም ይሰጣልና" (የሐዋርያት ሥራ 17:25)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "የጌታን መንፈስ ማን መከረ? ወይስ አማካሪው ማን ነበር?" (ኢሳይያስ 40:13)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "ከእርሱና በእርሱ ለእርሱም ሁሉ ነውና" (ሮሜ 11:36)፡፡</Text>
              </View>
          <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>"በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ" (ዘፍጥረት 1:1)፡፡</Text>
              </View>
        <Text style={styles.paragraph}>የቤተክርስቲያን አባቶች ትምህርት: ቅዱስ አትናቴዎስ፦ </Text>
        <View style={styles.quoteBox}>
                <Text style={styles.quoteText}>  "እግዚአብሔር ፍጹም ነጻና በማንም የማይደገፍ ነው፡፡ እርሱ በራሱ ይኖራል፣ ከማንም አይቀበልም፤ እርሱ የሕይወት ምንጭ ነው" ብሏል። </Text>
              </View>
        <Text style={styles.paragraph}>          
        ቅዱስ ቄርሎስ ዘእስክንድርያ፦ 
        </Text>
              <View style={styles.quoteBox}>
                <Text style={styles.quoteText}> "እግዚአብሔር በራሱ የሚበቃ ነው፤ ምንም ነገር ሊጨምርለት ወይም ሊቀንስበት አይችልም፡፡ እርሱ የሁሉም ነገር መጀመሪያና መጨረሻ ነው" ሲል አስረድቷል።</Text>
              </View>
                          
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