import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FaithAndTruthScreen({ navigation }) {
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
        
        <Text style={styles.mainTitle}>የእውቀት እምነትና የእውነት እምነት</Text>

        <Text style={styles.paragraph}>
          በክርስትና ሕይወት ውስጥ፣ እምነት የሚለው ቃል የሕይወት መሠረትና የድኅነት በር ነው። ሆኖም፣ ቅዱሳት መጻሕፍት እምነትን በሁለት ዋና ዋና ዓይነቶች ይከፍሉታል፦ የመጀመሪያው የእውቀት እምነት (የጸንዎት እምነት፣ የሞት እምነት) ሲሆን፣ ሁለተኛው ደግሞ እውነተኛ እምነት (የተስፋ እምነት፣ በሥራ የተገለጸ እምነት) ነው። ሐዋርያው ቅዱስ ጳውሎስ እንደተማረው፡-
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እምነትም ተስፋ ስለሚደረጉት ነገር የሚያስረዳ ፥ የማየውንም ነገር የሚያስረግጥ ነው።» (ዕብ. 11፥1)</Text>
        </View>
        <Text style={styles.paragraph}> ይህ ትርጉም የእውነተኛ እምነትን ምንነት ሲገልጽ፣ የእውቀት እምነት ግን ከዚህ ይለያል።</Text>
        <Text style={styles.sectionHeader}>1. የእውቀት እምነት</Text>
        <Text style={styles.paragraph}>
        ይህ ዓይነቱ እምነት እግዚአብሔርን በአእምሮ ማወቅን ብቻ ያካትታል። አጋንንት እንኳን የእግዚአብሔርን መኖር፣ ሁሉን ቻይነቱን፣ እና ዓለምን የፈጠረ መሆኑን ያውቃሉ። ሰውም በእርሱ አምኖ እንደሚድን ያውቃሉ። ነገር ግን ይህ እውቀታቸው ከንጹሕ የአእምሮ ግንዛቤ አያልፍም። እውቀታቸው ወደ ልብ ለውጥ፣ ወደ መልካም ምግባር፣ ወይም ወደ ዘላለማዊ ድኅነት አይመራም። ለዚህም ነው የአጋንንት እምነት የእውቀት እምነት የሚባለው፤ ምክንያቱም እውቀታቸው ከፍቅርና ከመታዘዝ የራቀ ነው። በሐዋርያት ዘመን ክፉ መንፈስ ለማውጣት የሞከሩት ሰዎች ያገኙት ምላሽ 
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ኢየሱስንስ አውቀዋለሁ ጳውሎስንም አውቀዋለሁ፤ እናንተሳ እነማን ናችሁ?» (19:15)። </Text>
        </View>
          <Text style={styles.paragraph}>የሚል ነበር። አጋንንት ኢየሱስን አውቀዋለሁ ከማለት አልፈው የእግዚአብሔር ልጅ እና የእግዚአብሔር ቅዱሱ ብለው ተናግረዋል (8:29፣ 1:24)። ይህ የሚያሳየው እውቀት ብቻውን ለመዳን እንደማይበቃ፣ ይልቁንም ያለ ፍሬ የሞተ መሆኑን ነው።</Text>
          <Text style={styles.paragraph}>ቅዱስ ያዕቆብ ሐዋርያ፡-</Text>  
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እግዚአብሔር አንድ እንደ ሆነ አንተ ታምናለህ፤ መልካም ታደርጋለህ፤ አጋንንት ደግሞ ያምናሉ ይንቀጠቀጡማል።» (ያዕቆብ 2:19)</Text>
        </View>
        <Text style={styles.paragraph}>ይህ ጥቅስ የአጋንንትን እምነት ከእውነተኛ እምነት የሚለየው የሥራ አለመኖር መሆኑን በግልጽ ያሳያል። የእውቀት እምነት ፍርሃትን እንጂ ፍቅርን አያፈራም።</Text>
        <Text style={styles.sectionHeader}>2. እውነተኛ እምነት</Text>
        <Text style={styles.paragraph}>
          እውነተኛ እምነት ያለው ሰው እግዚአብሔርን የሚያውቀው በአእምሮ ብቻ ሳይሆን፣ በልብና በመንፈስ ነው። ይህ እውቀቱ ከጥልቅ ፍቅር፣ ከተስፋና ከመታዘዝ ጋር የተቆራኘ ነው። በእግዚአብሔር ላይ ሙሉ ተስፋ አለው፤ ብበድለውም እንኳን አምላኬ ይቅርባይ ስለሆነ በንስሐ ብመለስ ይቅር ይለኛል፣ ልጁም ያደርገኛል ብሎ ያምናል፡፡ ስለ እግዚአብሔር ያለው እውቀት ፍቅር ስላለበት አይታበይበትምና (1 ቆሮንቶስ 8:1)። እውቀቱን ለጽድቅ ዓላማ ይጠቀምበታል፣ ይህም ሕይወቱን ይለውጣል፣ ወደ እግዚአብሔርም ያቀርበዋል።
        </Text>
         <Text style={styles.paragraph}>ቅዱስ ዮሐንስ አፈወርቅ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እምነት ማለት በእግዚአብሔር ቃል ላይ ያለ ጥርጥር መታመን ብቻ ሳይሆን፣ ሕይወትን በእርሱ ፈቃድ መሠረት መምራት ነው።» </Text>
        </View>
         <Text style={styles.paragraph}>ይህ አባባል እውነተኛ እምነት የአእምሮ እውቀት ብቻ ሳይሆን፣ የሕይወት ለውጥንም እንደሚያካትት ያብራራል። እውነተኛ እምነት በሕይወት የሚገለጥ ሕያው እምነት ነው።</Text>
        <Text style={styles.sectionHeader}>እምነትን በሥራ ከመግለጽ 
                                           አንጻር፦የሞተ እምነት ከሕያው ምግባር</Text>
        <Text style={styles.paragraph}>
          የእውቀት እምነት፡- የእውቀት እምነት ብቻ ያላቸው አጋንንት እግዚአብሔርን ያምናሉ (እርሱ አምላክ እንደሆነ ያውቃሉ)፣ ነገር ግን እምነታቸው መልካም ሥራ የሌለበትና በክፋት የተመላ ነው። ቅዱስ ያዕቆብ
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«አንተ ከንቱ ሰው፥ እምነት ከሥራ ተለይቶ የሞተ መሆኑን ልታውቅ ትወዳለህን?(2:20)።»</Text>
        </View>
        <Text style={styles.paragraph}> በማለት የዚህን እምነት ከንቱነት ያሳያል። የእነርሱ እምነት ምንም ፍሬ የማያፈራ የሞተ እምነት ነው። እንደዚሁም የእውነተኞች ማኅበራት፣ ጽዋና ማዕድ እንዳለ የአጋንንትም አለ። ሐዋርያው ጳውሎስ</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከአጋንንትም ጋር ማኅበረተኞች እንድትሆኑ አልወድም። የጌታን ጽዋና የአጋንንትን ጽዋ ልትጠጡ አትችሉም፤ ከጌታ ማዕድና የአጋንንትን ማዕድ ልትካፈሉ አትችሉም። (1 ቆሮንቶስ 10:20-21)»</Text>
        </View>
        <Text style={styles.paragraph}>ብሎ በማስተማር፣ ከክፉ ኃይሎች ጋር ያለውን ኅብረት ይከለክላል።</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እምነትም ሥራ ከሌለው በራሱ የሞተ ነው።» (ያዕቆብ 2:17)</Text>
        </View>
        <Text style={styles.paragraph}>ይህ ጥቅስ የእምነትን ከሥራ ጋር ያለውን የማይነጣጠል ግንኙነት ያጎላል። እውነተኛ እምነት ሁልጊዜ በበጎ ሥራዎች ይገለጣል።</Text>
        <Text style={styles.sectionHeader}>እግዚአብሔርን ከመፍራት
                     አንጻር ፦ የቅጣት ፍርሃት ከፍቅራዊ አክብሮት ጋር</Text>
        <Text style={styles.paragraph}>
        <Text style={styles.sectionHeader}>የእውቀት እምነት፡-</Text>
         የእውቀት እምነት ብቻ ያላቸው አጋንንት እግዚአብሔርን ይፈራሉ፡፡ የሚፈሩትም ያጠፋናል፣ ያቃጥለናል፣ ይቀጣናል ብለው ነው። በማቴዎስ ወንጌል 
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ወደ ማዶም ወደ ጌርጋሴኖን አገር በመጣ ጊዜ፥ አጋንንት ያደሩባቸው ሁለት ሰዎች ኢየሱስ ሆይ፥ የእግዚብሔር ልጅ፥ ከአንተ ጋር ምን አለን? ጊዜው ሳይደርስ ልትሣቅየን ወደዚህ መጣህን? እያሉ ጮኹ።»</Text>
        </View>
        <Text style={styles.paragraph}> (8:29) እና በማርቆስ ወንጌል</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«በዚያን ጊዜም በምኩራባቸው ርኵስ መንፈስ ያለው ሰው የናዝሬቱ ኢየሱስ ሆይ፥ ከአንተ ጋር ምን አለን? ልታጠፋን መጣህን? ማን እንደ ሆንህ አውቄአለሁ፥ የእግዚአብሔር ቅዱሱ ብሎ ጮኸ።»</Text>
        </View>
          <Text style={styles.paragraph}> (1:24) የተጠቀሱት የአጋንንት እግዚአብሔርን መፍራት ያሰቃየናል/ያጠፋናል ከሚል የመነጨ ነው። ይህ ፍርሃት ከቅጣት የመነጨ እንጂ ከፍቅር የመነጨ አይደለም፤ ስለዚህም ለመዳን አያበቃም።</Text>
          <Text style={styles.paragraph}>
          <Text style={styles.sectionHeader}>እውነተኛ እምነት፡-</Text>
            እውነተኛ እምነት፡- እውነተኛ እምነት ያለው ሰውም እግዚአብሔርን ይፈራል፡፡ የሚፈራው ግን ከፍቅር የተነሳ ነው እንጂ ያሰቃየኛል/ያጠፋኛል ከሚል አስተሳሰብ አይደለም፡፡ አምላኩን ስለሚወደው ከማክበር የተነሳ ይፈራዋል፡፡ ትዕዛዙንም ከፍቅር የተነሳ ይጠብቃል፡፡ ከወደዳችሁኝስ ትዕዛዜን ጠብቁ (14:15) እንደተባለ፡፡ እግዚአብሔርንም መፍራት የጥበብ ሁሉ መጀመሪያ ስለሆነ (111:10) በእውነተኛ እምነት ያለ ሰው እግዚአብሔርን ይፈራል፡፡ ክቡር ዳዊት በመዝሙሩ</Text>
      <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ለእግዚአብሔር በፍርሃት ተገዙ፣ በረዓድም ደስ ይበላችሁ።» </Text>
        <Text style={styles.paragraph}>  (2:11) እንዳለ እውነተኛ እምነት ያለው ሰው እግዚአብሔርን መፍራቱ በደስታ የሚፈጸም ነው። ይህ ፍርሃት ወደ ቅድስና የሚያመራ ነው።</Text>
        </View>
        <Text style={styles.sectionHeader}> ቅዱስ ባስልዮስ ዘቂሣርያ፡-</Text>    
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የእግዚአብሔርን ፍርሃት በልቡ የያዘ ሰው፣ ኃጢአትን ከመሥራት ይርቃል፤ ይህ ፍርሃት ግን ከፍቅር የተነሳ ነው።» </Text>
        </View>
        <Text style={styles.paragraph}>ይህ አባባል የእውነተኛውን የእግዚአብሔር ፍርሃት ምንጭና ባሕርይ ያብራራል። ፍቅር የፍርሃት መሠረት ሲሆን፣ ፍርሃት ደግሞ የትዕዛዝ መጠበቅን ያስከትላል።</Text>
        <Text style={styles.sectionHeader}>የእግዚአብሔርን ቃል ከመጥቀስ አንጻር፦የቃሉ መጣመም ከእውነተኛ ትርጓሜ</Text>
        <Text style={styles.paragraph}>
            <Text style={styles.sectionHeader}>የእውቀት እምነት፡-</Text>
           ጌታችንን ዲያብሎስ በገዳመ ቆሮንቶስ በፈተነው ጊዜ ካቀረበለት ፈተናዎች መካከል አንዱ
        </Text>
       <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መላእክቱን ስለ አንተ ያዝልሃል እግርህንም በድንጋይ ከቶ እንዳትሰናከል በእጃቸው ያነሡሃል ተብሎ ተጽፎአልና የእግዚአብሔር ልጅስ ከሆንህ፥ ወደ ታች ራስህን ወርውር»</Text>
        </View>
        <Text style={styles.paragraph}></Text>
        <Text style={styles.sectionHeader}>ተአምራትን ከማድረግ አንጻር</Text>
        <Text style={styles.paragraph}>
      (4:6) የሚል ነበር። ይህ አስቀድሞ በነቢዩ ዳዊት በመዝሙር የተነገረ ቃል ነው። ዲያብሎስ የእግዚአብሔርን ቃል ቢያውቅም፣ ለራሱ ክፉ ዓላማ አጣሞ ተጠቅሞበታል። ሐዋርያው ጳውሎስ ለልጁ ጢሞቴዎስ በጻፈው መልእክቱ
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መንፈስ ግን በግልጥ፡- በኋለኞች ዘመናት አንዳንዶች የሚያስቱ መናፍስትንና በውሸተኞች ግብዝነት የተሰጠውን የአጋንንትን ትምህርት እያደመጡ፥ ሃይማኖትን ይክዳሉ ይላል።»</Text>
        </View>
        <Text style={styles.paragraph}> (1 ጢሞቴዎስ 4:1-2) ሲል አስጠንቅቋል። ይህም ማለት የእውቀት እምነት ብቻ ያላቸው አጋንንት የእግዚአብሔርን ቃል ለጥፋት ዓላማ እያጣመሙ ይጠቅሱታል ማለቱ ነው። የቃሉን እውነት ለራሳቸው ጥቅም ያውላሉ።</Text>
        
        <Text style={styles.paragraph}>
            <Text style={styles.sectionHeader}>እውነተኛ እምነት፡-</Text> እውነተኛ እምነት ያለው ሰውም መጽሐፍ ቅዱስን ያነባል፣ ይጠቅሳል፣ ያስተምራል፡፡ የሚጠቅስው ግን ለትክክለኛው ዓላማ በትክክለኛው መንገድ ነው። ይህም የእግዚአብሔርን ቃል የሚጠቅሰው ሕይወት ስለሆነ ሕይወትን ለማግኘትና ሐዋርያት ባስተማሩት መሠረት ነው።</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መጽሐፍ በነቢያትና በሐዋርያት መሠረት ላይ ታንጻችኋል»</Text>
        </View>
      <Text style={styles.paragraph}> (2:20) እንዳለ በእውነተኛ እምነት ያለ ሰው በዚህ መሠረት ላይ ታንጾ የመጽሐፍን ቃል ለድኅነት ዓላማ ይጠቀምበታል፡፡ የቃሉን እውነት ለሕይወት ለውጥና ለቅድስና ይጠቀማል።</Text>
      <Text style={styles.sectionHeader}>ቅዱስ ዮሐንስ አፈወርቅ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የቅዱሳት መጻሕፍት ትርጓሜ እንደ ልብ ወለድ መሆን የለበትም፤ ነገር ግን በቤተክርስቲያን ትውፊትና በቅዱሳን አበው ግንዛቤ መሠረት መሆን አለበት።»</Text>
        </View>
        <Text style={styles.paragraph}>ይህ አባባል የመጽሐፍ ቅዱስን ትክክለኛ ትርጓሜ አስፈላጊነት ያጎላል። የቃሉን መንፈስና ዓላማ መጠበቅ ወሳኝ ነው።</Text>
        <Text style={styles.sectionHeader}>ታአምራትን ከማድረግ አንጻር፦ የሐሰት ታአምራት ከእውነተኛው ኃይል</Text>  
        <Text style={styles.paragraph}>የእግዚአብሔር ምርጦች ተአምራትን እንደሚያደርጉ ሁሉ የእውቀት እምነት ብቻ ያላቸው አጋንንትም በሰው ላይ አድረው ተአምራትን ያደርጋሉ፡፡ ለዚህም ሙሴና አሮን በፈርኦን ፊት ምልክትን ሲያሳዩ ጠንቋዮችም በአስማታቸው እንደዚያው አድርገው ነበር፡፡ </Text>    
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"አሮንም በትሩን በፈርዖንና በባሮቹ ፊት ጣለ፥ እባብም ሆነች። የግብፅም ጠንቋዮች በአስማታቸው በትራቸውን ጣሉ፥ እባቦችም ሆኑ፤ የአሮን በትር ግን በትራቸውን ዋጠች።" (7:10-12)።</Text>
        </View>
        <Text style={styles.paragraph}>በሁለተኛውም ተአምር </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}> "አሮን በትሩንም አነሣ፥ በፈርዖንና በባሪያዎቹም ፊት የወንዙን ውኃ መታ፤ የወንዙም ውኃ ሁሉ ተለውጦ ደም ሆነ። የግብፅም ጠንቋዮች በአስማታቸው እንዲሁ አደረጉ።" (7:20-22)።</Text>
        </View>
        <Text style={styles.paragraph}> በሦስተኛውም</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"አሮንም በግብፅ ውኆች ላይ እጁን ዘረጋ፤ ጓጕንቸሮቹም ወጡ። ጠንቋዮችም በአስማታቸው በግብፅም አገር ላይ ጓጕንቸሮችን አወጡ።" (8:6-7)።</Text>
        </View>
        <Text style={styles.paragraph}> ነገር ግን የአጋንንት ተአምር ከዚህ በላይ መዝለቅ አልቻለም፤ የእነርሱ ኃይል ውስን ነው። የሙሴና የአሮን ግን እስራኤልን ወደ ከነዓን እስከማድረስ ድረስ ነበር። ይህ የሚያሳየው ተአምራት ብቻቸውን የእውነት መለኪያ አለመሆናቸውን ነው።</Text>

      <Text style={styles.paragraph}>  <Text style={styles.sectionHeader}>እውነተኛ እምነት፡-</Text> እውነተኛ እምነት ያለው ሰውም ተአምራትን ሊያደርግ ይችላል፡፡ ብዙ ቅዱሳን ብዙ ተአምራትን አድርገዋልና፡፡ ተአምራትን ማድረግ ግን ብቸኛ የቅድስና መገለጫ አይደለም፡፡ ቅዱሳን ተአምራትንም ያደረጉት በእግዚአብሔር ኃይል ነው እንጂ በራሳቸው አይደለም። እዚህ ላይ ማስተዋል የሚያስፈልገው ነገር አንድ ሰው ተአምር ማድረጉ ብቻ እውነተኛ አያስብለውም። በማን ኃይል ነው ተአምር የሚያደርገው የሚለው ነው መሰረታዊው ነጥብ፡፡ የተዓምር ዓላማ ሰውን ለትምህርት ተገዢ ማድረግ ነው። የእውነተኞችን ተዓምር የሚያይ ለእውነት ትምህርት፣ የሐሰተኞቹን ተዓምር የሚያይ ደግሞ ለሐሰት ትምህርት ተገዢ የመሆን እድላቸው ሰፊ ነው። ቤተክርስቲያንም የምትቆመው በተዓምር ሳይሆን በትምህርት መሆኑን መረዳት ይኖርብናል፡፡</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"ብዙዎች በዚያ ቀን። ጌታ ሆይ፥ ጌታ ሆይ፥ በስምህ ትንቢት አልተናገርንምን፥ በስምህስ አጋንንትን አላወጣንምን፥ በስምህስ ብዙ ተአምራትን አላደረግንምን? ይሉኛል። የዚያን ጊዜም። ከቶ አላወቅኋችሁም፤ እናንተ ዓመፀኞች፥ ከእኔ ራቁ እላቸዋለሁ።" (7:22-23)</Text>
        </View>
        <Text style={styles.paragraph}>ምልክት አለመሆናቸውን ያሳያል። እውነተኛ እምነት በትምህርትና በምግባር እንጂ በተአምራት ብቻ አይመዘንም።</Text>

        <Text style={styles.sectionHeader}>እግዚአብሔርን ከመምሰል አንጻር ፦ የውሸት መልክ ከእውነተኛ ማንነት</Text>
        <Text style={styles.paragraph}>የእውቀት እምነት፡- የእውቀት እምነት ብቻ ያላቸው አጋንንት አምላክ ነን አምልኩን ብለው ሰውን ያታልላሉ፡፡ በጌታ ስም በቅዱሳንም ስም በደካማ ሰው ላይ አድረው እንዲሁም መልካቸውን እየለዋወጡ ያታልላሉ፡፡ ስለዚህ ነው ሐዋርያው</Text>
    
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}> "እንደ እነዚህ ያሉ ሰዎች የክርስቶስን ሐዋርያት እንዲመስሉ ራሳቸውን እየለወጡ፥ ውሸተኞች ሐዋርያትና ተንኮለኞች ሠራተኞች ናቸውና። ይህም ድንቅ አይደለም፤ ሰይጣን ራሱ የብርሃንን መልአክ እንዲመስል ራሱን ይለውጣልና። እንግዲህ አገልጋዮቹ ደግሞ የጽድቅን አገልጋዮች እንዲመስሉ ራሳቸውን ቢለውጡ ታላቅ ነገር አይደለም፤ ፍጻሜአቸውም እንደ ሥራቸው ይሆናል።" (2 ቆሮንቶስ 11:13-15) ያለው፡፡</Text>
        </View>
        <Text style={styles.paragraph}>እውነተኛ እምነት፡- እውነተኛ እምነት ያለው ሰው ግን ክርስቶስን ይመስላል፡፡ ሐዋርያው</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}> "እኔ ክርስቶስን እንደምመስል እናንተ ደግሞ እኔን ምሰሉ" (1 ቆሮንቶስ 11:1) </Text>
        </View>
        <Text style={styles.paragraph}>እንዳለው ክርስቶስን ይመስላል፡፡ እውነተኛ ክርስቲያን ራሱን አይለዋውጥም፡፡ ሌላውንም አያታልልም፡፡ እውነተኛ ማንነቱን ብቻ ይገልጣል እንጂ፡፡ ይህች እውነተኛ ማንነቱም በቀናች ሃይማኖት፣ በበጎ ምግባር ያጌጠች ክርስቲያናዊ ሕይወት ናት፡፡</Text>
        <Text style={styles.sectionHeader}>ቅዱስ ጎርጎርዮስ ዘእንዚናዙ፦</Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}> "እግዚአብሔርን መምሰል ማለት የእርሱን ቅድስናና ፍቅር በሕይወታችን መግለጥ ነው።"</Text>
        </View>
        <Text style={styles.paragraph}>ይህ አባባል ክርስቶስን የመምሰልን ትርጉም ያብራራል። እውነተኛ እምነት የክርስቶስን ባሕርይ በሕይወት መግለጥ ነው።</Text>

        <Text style={styles.sectionHeader}>ከዘላለም ሕይወት አንጻር፦ የዘላለም ቅጣት ከዘላለም በረከት</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.sectionHeader}>የእውቀት እምነት፡- </Text>የእውቀት እምነት ብቻ ያላቸው አጋንንት ምንም እውቀት ቢኖራቸውም በእውቀታቸው መልካም ነገርን ስለማይሠሩበት መጨረሻቸው የዘላለም እሳት ነው፡፡ በራዕየ ዮሐንስ 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}> "ያሳታቸውም ዲያብሎስ አውሬውና ሐሰተኛው ነቢይ ወዳሉበት ወደ እሳቱና ወደ ዲኑ ባሕር ተጣለ፥ ለዘላለምም እስከ ዘላለም ቀንና ሌሊት ይሣቀያሉ።" (20:10)</Text>
        </View>
        <Text style={styles.paragraph}>እንደተባለው መጨረሻቸው ይኸው ነው።</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.sectionHeader}>እውነተኛ እምነት፡- </Text>በእውነተኛ እምነት ያለ ሰው ግን መጨረሻው የዘላለም ሕይወት ነው፡፡ እውነተኛ ክርስቲያን በዚህ ምድር ላይ በተጋድሎ ኖሮ ሩጫውን ሲጨርስ የጽድቅ አክሊልን ከአምላኩ ዘንድ ይቀበላል፡፡
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"መልካሙን ገድል ተጋድዬአለሁ፥ ሩጫውን ጨርሻለሁ፥ ሃይማኖትን ጠብቄአለሁ፤ ወደ ፊት የጽድቅ አክሊል ተዘጋጅቶልኛል፥ ይህንም ጻድቅ ፈራጅ የሆነው ጌታ በዚያ ቀን ለእኔ ያስረክባል፥ ለኔ ብቻም አይደለም፥ ነገር ግን መገለጡን ለሚወዱ ሁሉ ደግሞ።" (2 ጢሞቴዎስ 4:7-8)</Text>
        </View>
          <Text style={styles.paragraph}>ይህ ጥቅስ የእውነተኛ እምነት ፍጻሜ የሆነውን የዘላለም ሕይወትና የጽድቅ አክሊል ያሳያል።</Text>
          <Text style={styles.paragraph}>በመሆኑም፣ በውሸት እምነት ከተባለ የመጽሐፍ ቅዱስን ትምህርት ለሥጋዊ ዓላማና ግብ ከሚያጣምም፣ እውነተኛ የመጽሐፍ ቅዱስን ዓላማ ከማይከተል፣ በተግባር ከማይገለጥ፣ በሐሰት ተዓምራት ላይ ከተመሰረተ የአጋንንት ዓይነት እምነት ተለይተን፣ ከቅዱሳን ሐዋርያት በእምነት የተቀበልነውን የመጽሐፍ ቅዱስ ትምህርት ያለመበረዝና ያለመቀላቀል ተቀብለን፣ እምነታችንን በምግባራት አስጊጠን፣ በእውነተኛ ተዓምራት እንዲሁም በቅዱሳን ሁሉ ሕይወት የተገለጠችውን የእውነት እምነት ያለማመንታት ጠብቀን የመንግስቱ ወራሾች የክብሩ ቀዳሾች እንሆን ዘንድ የእግዚአብሔር ቅዱስ ፈቃድ ይሁንልን። አሜን።</Text>

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