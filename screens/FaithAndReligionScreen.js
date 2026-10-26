import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FaithAndReligionScreen({ navigation }) {
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
        
        <Text style={styles.mainTitle}>ሃይማኖት ፣ እምነት እና መታመን</Text>
        
        <Text style={styles.paragraph}>
        በቅድስት ኦርቶዶክሳዊት ተዋሕዶ ቤተክርስቲያን አስተምህሮ፣ የሰው ልጅ ከፈጣሪው ጋር ያለው መንፈሳዊ ህብረት የሚገለጽባቸው መሠረታዊ ምሰሶዎች 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሃይማኖት ፣ እምነት እና መታመን»</Text>
        </View>
        <Text style={styles.paragraph}>
         ናቸው። እነዚህ ቃላት፣ ምንም እንኳ በዕለት ተዕለት ንግግር ተመሳሳይነት ያላቸው ቢመስሉም፣ በሥነ መለኮታዊ ትርጉማቸው ጥልቅና ልዩ ልዩ ገጽታዎችን ይዘዋል። ሃይማኖት የመለኮታዊ መገለጥን፣ እምነት የሰው ልጅ ለዚህ መገለጥ የሚሰጠውን ውስጣዊ ምላሽ፣ መታመንም ደግሞ በእግዚአብሔር ታማኝነት ላይ ያለውን ፍጹም መደገፍ ያመለክታሉ። እነዚህን ሦስት ምሰሶዎች በመጽሐፍ ቅዱሳዊና ቀኖናዊ ብርሃን በመመርመር፣ የእግዚአብሔርን የማዳን ሥራ፣ የሰው ልጅን የመዳን ጉዞ፣ እና በክርስቶስ ኢየሱስ በኩል የሚገኘውን ዘላለማዊ ህይወት በሰፊው ያብራራል።
        </Text>
          <Text style={styles.sectionHeader}>ሃይማኖት</Text>
          <Text style={styles.paragraph}>
        ሃይማኖት እግዚአብሔር ራሱን ለሰው ልጅ የገለጠው መግለጥ ነው። እግዚአብሔር ባሕርዩ ረቂቅ፣ አኗኗሩ ምጡቅ ስለሆነ የሰውም ሆነ የመላእክት አእምሮ ተመራምሮ ሊደርስበትና ባሕርዩ እንዲህ ያለ ነው፣ አኗኗሩ ይህ ነው ወይም ይህን ይመስላል ሊለው የማይችል ነው። እርሱ በጊዜና በቦታ የማይወሰን ዘለዓለማዊና ምሉዕ ሲሆን ፍጥረት በሙሉ ደግሞ በጊዜና በቦታ የተወሰነ ስለሆነ ውስኑ የማይወሰነውን ሊያውቀውና በምርምር ሊደርስበት አይችልም።
        </Text>
          <Text style={styles.paragraph}>
ሆኖም ግን ምንም እንኳ እግዚአብሔር ባሕርዩና አኗኗሩ በራሱ ብቻ የሚታወቅ ረቂቅ አምላክ ቢሆንም እኛ ፈጽሞ የማናውቀውና ስለ እርሱ ምንም ፍንጭ የሌለን ሆነን እንድንቀር አልተወንም። ከቸርነቱ የተነሣ ዓቅማችን ሊረዳው በሚችለው መጠን ማንነቱን፣ ህላዌውን፣ ባሕርዩን፣ መግቦቱን፣ ፈታሒነቱን፣ ፈቃዱን፣ እናውቅ ዘንድ በተለያየ መንገድ ገልጦልናል። ሃይማኖት የሚባለው ይህ እግዚአብሔር በራሱ ፈቃድ እናውቀው ዘንድ ስለ ራሱ የገለጠው መገለጥ ነው። ስለሆነም ሃይማኖት እግዚአብሔር ራሱን ለእኛ ያሳየበት መንገድ፣ የሰው ልጅ ሊቀበለው በሚችለው መጠን ስለ ራሱ ማንነት ለእኛ የገለጠው እውነታ ነው።
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከጥንት ጀምሮ እግዚአብሔር በብዙ ዓይነትና በብዙ ጎዳና ለአባቶቻችን በነቢያት ተናግሮ ሁሉን ወራሽ ባደረገው ደግሞም ዘመናትን በፈጠረበት በልጁ በዚህ ዘመን መጨረሻ ለእኛ ተናገረ።» (ዕብ. 11፥1)</Text>
        </View>
           <Text style={styles.paragraph}>
      ይህ ጥቅስ እግዚአብሔር በተለያዩ መንገዶች ራሱን ለሰው ልጆች እንደገለጠላቸው ያመለክታል።
        </Text>
           <Text style={styles.paragraph}>
      ቅዱስ አትናቴዎስ፦ እግዚአብሔር በባሕርዩ የማይለወጥ ነው፤ እርሱ ዘላለማዊ ነውና፣ የእርሱም እውነት ለዘላለም ጸንቶ ይኖራል።
        </Text>
           <Text style={styles.paragraph}>
      ይህ አባባል የእግዚአብሔርን የማይለወጥ ባሕርይና የእውነትን አንድነት ያረጋግጣል።
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መልካም ስጦታም ሁሉ ፍጹምም በረከት ሁሉ ከላይ ናቸው፣ የመብራቶችም አባት ከእርሱ ዘንድ ይወርዳሉ፤ በእርሱም ዘንድ መለወጥ የለም፣ የመዞርም ጥላ የለም።» (ያዕቆብ 1:17)</Text>
        </View>
           <Text style={styles.paragraph}>
    ይህ ጥቅስ የእግዚአብሔርን ዘለዓለማዊነትና አለመለወጥ ባሕርይ ያጎላል።
        </Text>
           <Text style={styles.paragraph}>
  እግዚአብሔር አንድ ስለሆነ፣ ባሕርዩም የማይለወጥ ስለሆነ፣ ሃይማኖት (ይህ አምላክ ስለ ራሱ የገለጠው መግለጥ) አንድና የማይለዋወጥ ነው። ስለዚህም ሊኖር የሚችለው እውነተኛ ሃይማኖት አንድ ብቻ ነው። ብዙ ሃይማኖቶች አሉ ማለት ግን ወይ እግዚአብሔር በተለያየ ጊዜ የተለያየ ነገር ይናገራል ማለትን፣ አለዚያም ደግሞ ባሕርዩ ይለዋወጣል ማለትን ያስከትላል፤ ሆኖም እነዚህ አስተሳሰቦች ለእግዚአብሔር ሊነገሩ ቀርቶ ሊታሰቡ የማይገባቸው ጸያፎች ናቸው፤ እርሱ በተለያየ ጊዜ እርስ በእርሱ የሚቃረን የተለያየ ነገር አይናገርምና፣ ባሕርዩም አይለዋወጥምና። መለወጥ የፍጡር ባሕርይ እንጂ በእግዚአብሔር ዘንድ መለወጥ የለም። ስለዚህ ሃይማኖት አንድ ብቻ ነው። መጽሐፍ ቅዱስ  
        </Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«አንድ ጌታ፣ አንድ ሃይማኖት፣ አንዲት ጥምቀት»</Text>
        </View>
        <Text style={styles.paragraph}>
        የሚለው ለዚህ ነው (ኤፌ. 4፡5)።
        </Text>
        <Text style={styles.sectionHeader}>እምነት</Text>
        <Text style={styles.paragraph}>
        እምነት እግዚአብሔር የገለጠውን እውነት (ሃይማኖት) አዎ፣ እውነት ነው፣ ትክክል ነው ብሎ አሜን ብሎ መቀበል ነው። እግዚአብሔር የሚገልጠው እውነት (ሃይማኖት) በሰው መቀበል ወይም አለመቀበል ላይ የተመሠረተ አይደለም፤ ምን ጊዜም እውነት ነውና።
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ባናምነው እርሱ የታመነ ሆኖ ይኖራል፤ ራሱን ሊክድ አይችልምና»</Text>
        </View>
        <Text style={styles.paragraph}>
        እንዳለ (1 ጢሞ. 2፡13)። እንዲሁም
        </Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የማያምኑ ቢኖሩ አለማመናቸው የእግዚአብሔርን ታማኝነት ያስቀራልን?»</Text>
        </View> 
        <Text style={styles.paragraph}>
         እንደ ተባለ (ሮሜ 3፡3)።
        </Text>
        <Text style={styles.paragraph}>
        ነገር ግን ይህን እግዚአብሔር ስለ ባሕርዩ፣ ስለ መግቦቱ በአጠቃላይ እኛ ልናውቀው የምንችለውን ያህል በአባታዊ ቸርነቱ የገለጠውን እውነት (ሃይማኖት) እውነት ነው ብለን ስንቀበለው እምነት ይሆናል። ይህ ማመንም ከእግዚአብሔር ዘንድ ዋጋ የሚያስገኝ እግዚአብሔርን ደስ የሚያሰኝ ይሆናል። ለምሳሌ እግዚአብሔር ከአብርሃም ዘር በመወለድ በዕፅ የተረገመውን ዓለሙን (የሰውን ልጅ በሙሉ) በዕፀ መስቀል ላይ በመሰቀል ይባርከው ዘንድ ፈቃዱ ነበር። ይኸ የማይለወጥና የማይናወጽ የእግዚአብሔር ፈቃድ ነው። እግዚአብሔር ይህን እውነት ለአብርሃም ሲገልጥለት፣ በዘጠና ዘጠኝ  ዓመቱ ልጅ እንደሚወልድና በእርሱ ዘርም አሕዛብ ሁሉ እንደሚባረኩ ሲነግረው ‘ሸምግያለሁ፣ ይህ እንዴት ይሆናል?’ ብሎ ሳይጠራጠር ስላመነ 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>« አብርሃም አመነ፣ እምነቱም ጽድቅ ሆኖ ተቆጠረለት»</Text>
        </View>
        <Text style={styles.paragraph}>
         ተባለ (ዘፍ. 15፡3-6)።
        </Text>
        <Text style={styles.paragraph}>
      እንዲሁም ይኽ እግዚአብሔር እርሱ ባወቀ በመለኮታዊ ምክሩ የወሰነው፣ አስቀድሞ ለአዳምና ለሔዋን ገና ከገነት ሲወጡ የሰጣቸው ተስፋ፣ ኋላም ለአብርሃም የነገረው ተስፋ ዘመኑ ደርሶ የሚፈጸምበት ጊዜ ሲደርስ መልአኩ ቅዱስ ገብርኤል ወደ እመቤታችን ተልኮ ከሦስቱ አካላት አንዱ አካላዊ ቃል በተለየ አካሉ ከእርሷ ሰው ሆኖ በግብረ መንፈስ ቅዱስ እንደሚወለድ ነገራት። ይኽ ማንም ሰው ሊለውጠው ወይም ሊያስተባብለው ወይም ሊያሻሽለው የማይችለው የእግዚአብሔር አምላካዊ ውሳኔ (ቁርጥ ሃሳብ) (ነገረ ሃይማኖት) ነው።
        </Text>
        <Text style={styles.paragraph}>
      እመቤታችን ቅድስት ድንግል ማርያም ይኽን ነገር ስትሰማ ነገሩ ከዚያ በፊት ያልተደረገ፣ ከዚያም በኋላ የማይሆን ስለሆነ ግራ ቢገባት
        </Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እፎኑ ይከውነኒ ዝንቱ እንዘ ኢየአምር ብእሴ - ወንድ ሳላውቅ ይህ እንዴት ይሆንልኛል?»</Text>
        </View>
        <Text style={styles.paragraph}>
          ብላ ጠየቀች። መልአኩም ሊያስረዳት ሞከረ። ነገር ግን ማስረዳቱ ብዙም የማያስኬድ ስለሆነበት 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እስመ አልቦ ነገር ዘይሰአኖ ለእግዚአብሔር - ለእግዚአብሔር የሚሳነው ነገር የለምና»</Text>
        </View>
        <Text style={styles.paragraph}>
         ብሎ ዘጋ። እመቤታችንም ነገሩ የእግዚአብሔር ፈቃድ ከሆነማ 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ይኩነኒ በከመ ትቤለኒ - አንተ እንዳልከው ይሁንልኝ፣ ይደረግልኝ»</Text>
        </View>
        <Text style={styles.paragraph}>
         ብላ የእግዚአብሔር ቁርጥ ሃሳብና ፈቃድ እንደ ተነገራት በእርሷ እንዲፈጸም ይሁንልኝ ብላ በፍጹም እምነት ተቀበለች። ይህ በእምነት ይኩነኒ ብላ መቀበሏም እግዚአብሔር ቃል በማኅፀኗ በተዋሕዶ እንዲፀነሥ ምክንያት ሆኗል። የሔዋን እግዚአብሔርን አለማመን ከእግዚአብሔር መለየትንና ሞትን እንዳመጣብን የእመቤታችን ማመን ደግሞ እግዚአብሔር ባሕርያችንን ባሕርዩ አድርጎ ከእኛ ጋር እንዲሆን እና ሞትን የሚያስወግደው የሕይወት በር እንዲከፈትልን መነሻ ምክንያት ሆነን።
        </Text>
        <Text style={styles.paragraph}>
      ቅዱስ ዮሐንስ አፈወርቅ፦ የእመቤታችን ይኩነኒ የሚለው ቃል የዓለምን ድኅነት መጀመሪያ ነበር።
        </Text>
        <Text style={styles.paragraph}>
      ይህ አባባል የእመቤታችን እምነት በድኅነት ታሪክ ውስጥ ያለውን ማዕከላዊ ሚና ይገልጻል።
        </Text>
        <Text style={styles.paragraph}>
      በአንጻሩ ደግሞ ለጌታችን መንገድ ጠራጊ ይሆን ዘንድ መንፈቀ ዓመት ተቀድሞ የሚወለደው የመጥምቁ ዮሐንስን የመወለድ ነገር በተመለከተ መልአኩ ገብርዔል ካህን ለነበረው ለዘካርያስ 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ዘካርያስ ሆይ፣ ጸሎትህ ተሰምቶልሃልና አትፍራ፣ ሚስትህ ኤልሳቤጥ ወንድ ልጅ ትወልድልሃለች፣ ስሙንም ዮሐንስ ትለዋለህ …»</Text>
        </View>
        <Text style={styles.paragraph}>
         ሲለው በእምነት አልተቀበለም (ሉቃ. 1፡13-17)። ይልቁንም መልአኩን መልሶ 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እኔ ሽማግሌ ነኝ፣ ሚስቴም በዕድሜዋ አርጅታለችና ይህን በምን አውቃለሁ?»</Text>
        </View>
        <Text style={styles.paragraph}>
          አለው (1፡18)። በእምነት ከመቀበል ይልቅ ማረጋገጫ ምልክት ጠየቀ። በዚህም ምክንያት ተግሣፅ ደረሰበት። 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እነሆም፥ ይህ ከሆነበት ቀን እስከሚሆን ድረስ ዲዳ ትሆናለህ መናገርም አትችልም፤ ቃሌ በጊዜው ይፈጸማልና አላመንህምና አለው።»</Text>
        </View>
        <Text style={styles.paragraph}>
         (ሉቃስ 1:20) እምነት እግዚአብሔር የሚሠራውን ሥራ፣ የገለጠውን እውነት እንደ ዘካርያስ ሳያጠራጥሩና ምልክት ሳይሹ እንደ እመቤታችን ቅድስት ድንግል ማርያም በአግባቡ ተረድቶ አሜን፣ ልክ ነው፣ ለይኩን ለይኩን ብሎ መቀበል ነው።
        </Text>
        <Text style={styles.paragraph}>
          በጸሎትና ነገረ ሃይማኖትን በሚናገሩ አንቀጾች መሀልም ሆነ መጨረሻ ላይ አሜን የሚለው ቃል የጸሎትና የእምነት መግለጫ ማሳረጊያ ሆኖ የሚነገረው ለዚህ ነው። ጸሎት ሲሆን ‘የተጸለየው ጸሎት ይሁንልን ይደረግልን’ ለማለት፣ የተነገረው ወይም የተነበበው ነገረ ሃይማኖት ሲሆን ደግሞ ‘አዎ፣ እኔም ይህንኑ አምናለሁ፣ የማምነው ይኸው ነው’ ለማለት ነው። ለምሳሌም ቅዱስ ጳውሎስ 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከእነርሱም (ከእስራኤላውያን) ክርስቶስ በሥጋ መጣ፣ እርሱም ከሁሉ በላይ ሆኖ ለዘላለም የተባረከ አምላክ ነው፤ አሜን»</Text>
        </View>
        <Text style={styles.paragraph}>
         ይላል (ሮሜ 9፡5)። አሜን ማለቱ ከዚያ በፊት የተናገረውን - ‘ክርስቶስ ከሁሉ በላይ ሆኖ ለዘላለም የተባረከ አምላክ ነው’ - የሚለውን አዎን፣ እውነት ነው፣ የእኔም እምነት ይኸው ነው እንደ ማለት ነው።
        </Text>

        <Text style={styles.sectionHeader}>መታመን</Text>
        <Text style={styles.paragraph}>
        መታመን ሲባል እግዚአብሔር የሰጠው ተስፋና የተናገረው ቃል ለእኔም ይሆንልኛል፣ ይደረግልኛል፣ እርሱ ያድነኛል ይመግበኛል ብሎ ሙሉ ተስፋንና ተአምኖን በእርሱ ላይ ማድረግ ነው። ቃሉ ከእምነት ጋር ተቀራራቢነት ያለው ቢሆንም በተለይ ግን በራሳችን ላይ የሚደርሱ ነገሮችን ለመቀበልና ለማሸነፍ በእግዚአብሔር ረዳትነትና አዳኝነት ላይ ያለንን የእምነት መጠን የሚገልጽ ነው። ለምሳሌም ሠለስቱ ደቂቅ በፊታቸው አስፈሪ የሆነ እሳት እየተንቀለቀለ እያዩ 
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የምናመልከው አምላካችን ከሚነደው ከእሳቱ እቶን ያድነን ዘንድ ይችላል፣ ከእጅህም ያድነናል፣ ንጉሥ ሆይ፣ እርሱ ባያድነን አማልክትህን እንዳናመልክ ላቆመውም ለወርቁ ምስል እንዳንሰግድለት እወቅ»</Text>
        </View>
        <Text style={styles.paragraph}>
         ብለው ወደ እሳቱ እስከ መግባት ደርሰው በእርሱ ታምነዋል (ዳን. 3፡16-18)።
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«አንዳንዶች በሠረገላ፥ አንዳንዶችም በፈረስ ይታመናሉ፤ እኛ ግን በአምላካችን በእግዚአብሔር ስም እንታመናለን።»(መዝሙር 20:7)</Text>
        </View>
        <Text style={styles.paragraph}>
  ይህ ጥቅስ በእግዚአብሔር ላይ ሙሉ መታመንን ያሳያል።
        </Text>
        <Text style={styles.paragraph}>
  ባያድነን እንኳ ማለታቸው አዳኝነቱን ወይም የሚያድን መሆኑን የመጠራጠር ሳይሆን አንደኛ የእግዚአብሔር ፈቃድ እነርሱ በሰማዕትነት ሞተው እንዲያከብሩት ይሁን ወይም ሌላ ስላላወቁ፣ ሁለተኛ ደግሞ በኃጢአታቸው ምክንያት ሳያድናቸው ቢቀር ያላዳናቸው እርሱ ማዳን ስለማይችል ሳይሆን በእነርሱ ለማዳኑ የበቁ አለመሆን ምክንያት ስለሚሆን ነው። ሆኖም አረማዊው ንጉሥ ናቡከደነፆር ይህን ሁሉ ቢነግሩት ስለማይገባው ባያድነን እንኳ የሚል ጨመሩለት፤ ከእሳቱ ባያድናቸው አምላካቸውን እግዚአብሔርን ማዳን የማይችል አድርጎ እንዳይረዳ ለጥንቃቄ የተናገሩት ነገር ነው። ስለዚህ መታመን ሁለንተናችንን በእግዚአብሔር አዳኝነትና አባትነት ጥላ ሥር ማሳረፍ ነው።
        </Text>
        <Text style={styles.sectionHeader}>ሃይማኖት እንዴት ተገኘ?</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ለቅዱሳን አንድ ጊዜ ፈጽሞ ስለ ተሰጠ ሃይማኖት እንድትጋደሉ እየመከርኋችሁ እጽፍላችሁ ዘንድ ግድ ሆነብኝ፡፡» (ይሁዳ 3)</Text>
        </View>
        <Text style={styles.sectionHeader}>ሃይማኖት፡</Text>
        <Text style={styles.paragraph}>
            1) የተሰጠ፣ የተቀበልነው ነው።
        </Text>
        <Text style={styles.paragraph}>
         እግዚአብሔር ሃይማኖትን ሰጠ፣ እኛ ደግሞ ተቀበልን። የእኛ ድርሻ መቀበል ነው። የሰው ልጅ ሃይማኖትን ይቀበላል እንጂ ሃይማኖትን ሊሠራ ወይም ሊያሻሽል አይችልም። ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የሰጠኸኝን ቃል ሰጥቻቸዋለሁና፣ እነርሱም ተቀበሉት፡፡»</Text>
        </View>
        <Text style={styles.paragraph}>
         በማለት የገለጸው ይህን ነው (ዮሐ. 17፡8)።
        </Text>
        <Text style={styles.paragraph}>
       ሐዋርያው ቅዱስ ጳውሎስም ያመነውንና የያዘውን ሃይማኖት ከጌታ የተቀበለው መሆኑንና፣ ያን የተቀበለውንም በወንጌል ትምህርት እንዳወረሳቸው ለቆሮንቶስ ክርስቲያኖች ሲያሳስባቸው እንዲህ በማለት ገልጾላቸዋል: 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ወንድሞች ሆይ፣ የሰበክሁላችሁን፣ ደግሞም የተቀበላችሁትን፣ በእርሱም ደግሞ የቆማችሁበትን፣ በእርሱም ደግሞ የምትድኑበትን ወንጌል አሳስባችኋለሁ፤ እኔ ደግሞ የተቀበልሁትን ከሁሉ በፊት አሳልፌ ሰጠኋችሁ፡፡"፡፡»</Text>
        </View>
        <Text style={styles.paragraph}>
         (1 ቆሮ. 15፡1-3)። እንዲሁም ስለ ምሥጢረ ቁርባን ባስተማረበት አንቀጽ ላይ
        </Text>
           <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ለእናንተ ደግሞ አሳልፌ የሰጠሁትን እኔ ደግሞ ከጌታ ተቀብያለሁና…፡፡»</Text>
        </View>
        <Text style={styles.paragraph}>
         ብሏል (1 ቆሮ. 11፡23)።
        </Text>
        <Text style={styles.paragraph}>
       ቅዱስ ኢሬኔዎስ፦ ቤተክርስቲያን ከሐዋርያት የተቀበለችው ስብከትና እምነት፣ በመላው ዓለም ተበታትኖ ቢሆንም፣ አንድ ወጥ ሆኖ ይቀራል።
        </Text>
        <Text style={styles.paragraph}>
       ይህ አባባል የሃይማኖትን ሐዋርያዊ ምንጭና አንድነት ያረጋግጣል።
        </Text>
        <Text style={styles.paragraph}>
        ወልድ ዋሕድ መድኃኒታችንም 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሰዎች የሰውን ልጅ ማን እንደሆነ ይሉታል?»</Text>
        </View>
        <Text style={styles.paragraph}>
         ብሎ ደቀ መዛሙርቱን ጠየቃቸው። እነርሱም:
        </Text>
           <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«አንዳንዱ መጥምቁ ዮሐንስ፣ ሌሎችም ኤልያስ፣ ሌሎችም ኤርምያስ፣ ወይም ከነቢያት አንዱ ነው ይላሉ አሉት። እርሱም: እናንተስ እኔን ማን እንደሆንሁ ትላላችሁ? አላቸው። ስምዖን ጴጥሮስም መልሶ: አንተ ክርስቶስ የሕያው እግዚአብሔር ልጅ ነህ አለ። ኢየሱስም መልሶ እንዲህ አለው: የዮና ልጅ ስምዖን ሆይ፣ በሰማያት ያለው አባቴ እንጂ ሥጋና ደም ይህን አልገለጠልህምና ብፁዕ ነህ። እኔም እልሃለሁ፣ አንተ ጴጥሮስ ነህ፣ በዚችም ዓለት ላይ ቤተ ክርስቲያኔን እሠራለሁ፣ የገሃነም ደጆች አይችሏትም፡፡»</Text>
        </View> 
        <Text style={styles.paragraph}>
         (ማቴ. 16፡13-18)
        </Text>
        <Text style={styles.paragraph}>
          በሥጋና ደም አስተሳሰብ (በሰው ምርምርና ሐተታ) ሰዎች ስለ ጌታችን ሊሉት የሚችሉት ያን ጊዜ የነበሩት ሰዎች እንዳሉት ‘መጥምቁ ዮሐንስ፣ ወይም ኤልያስ ወይም ኤርምያስ ወይም ከነቢያት አንዱ ነው’ ከማለት ያለፈ ሊሆን አይችልም። ምክንያቱም ሰው ሆኖ እያዩት አምላክነቱን መረዳት በሥጋና በደም አስተሳሰብ ሊደረስበት የሚችል ምሥጢር አይደለምና። ጴጥሮስ ግን የወልድ ዋሕድ ኢየሱስ ክርስቶስ ሰማያዊ አባቱ አብ የገለጠለትን ነገር - የኢየሱስ ክርስቶስን የአብ የባሕርይ ልጅነት - ስለተናገረ ጌታችን አመሰገነው፤ 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ስምዖን ሆይ፣ በሰማያት ያለው አባቴ እንጂ ሥጋና ደም ይህን አልገለጠልህምና ብፁዕ ነህ»</Text>
        </View>
        <Text style={styles.paragraph}>
         አለው።
        </Text>
          <Text style={styles.paragraph}>
            መቼም ቢሆን በሃይማኖት እግዚአብሔር የገለጠውን ትተን በራሳችን አስተሳሰብና በሚመስለን መንገድ እንሂድ ካልን ወደ እውነተኛው ሃይማኖት ልንደርስ አንችልም። በሐዋርያት ዘመን ከነበሩት ዓይነት ሰዎች የተሻለ ነገር ልንል አንችልም። ከዚያ ለመውጣትና ጴጥሮስ የመሰከረውን ለመያዝ ከሥጋና ከደም አስተሳሰብ መለየት የግድ ይላል። ጌታችን  
        </Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከዓለም ለሰጠኸኝ ሰዎች ስምህን ገለጥሁላቸው፡፡»</Text>
        </View>
        <Text style={styles.paragraph}>
         ያለው ለዚህ ነው፤ ስሙንም፣ ማንነቱንም ሊገባን በሚችለው መጠን የገለጠልን ራሱ ነው እንጂ ሃይማኖት የሰው ልጅ በምርምር የደረሰበት ግኝት አይደለም (ዮሐ. 17፡6)።
        </Text>
        <Text style={styles.paragraph}>
          2) ሃይማኖት የተሰጠው አንድ ጊዜ ነው - ለቅዱሳን
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ለቅዱሳን አንድ ጊዜ ፈጽሞ ስለ ተሰጠ ሃይማኖት …»</Text>
        </View>
        <Text style={styles.paragraph}>
       ይሁዳ 3
        </Text>
          <Text style={styles.paragraph}>
            ምግብናው እንደየ ዘመኑ ይለያያል፣ ይዘቱ ግን ያው አንድ ነው። ለምሳሌ ሕፃን ልጅ በሕፃንነቱ ወተትና ፍትፍት፣ ሲያድግ ደግሞ ጠንከር ያለ ምግብ ይሰጠዋል፣ የሰውነት ባሕርዩ ግን ያው አንድ ነው፣ አይለዋወጥም። ሃይማኖትም በዘመነ አበው፣ በዘመነ ኦሪት፣ በዘመነ ወንጌል የምግብናው ሁኔታ እንደየ ዘመኑ የሰዎች የመረዳት ዓቅምና ሁኔታ ቢለያይም ይዘቱ (ጭብጡ) ግን ያው አንድ ነው።  
        </Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከጥንት ጀምሮ እግዚአብሔር በብዙ ዓይነትና በብዙ ጎዳና ለአባቶቻችን በነቢያት ተናግሮ ሁሉን ወራሽ ባደረገው ደግሞም ዘመናትን በፈጠረበት በልጁ በዚህ ዘመን መጨረሻ ለእኛ ተናገረን»</Text>
        </View>
        <Text style={styles.paragraph}>
         ያለው ይህን የሚገልጽ ነው (ዕብ. 1፡1-2)። የቅዱሳን መላእክት፣ የአበው ቀደምት የእነ አዳም፣ ኖኅ፣ አብርሃም፣ ሙሴ፣ ዳዊት፣ የነቢያት፣ ኋላም የሐዋርያትና የሰማዕታት፣ የጻድቃንና የሊቃውንት ሃይማኖት አንድ ነው።
        </Text>
        <Text style={styles.paragraph}>
          ስለዚህ ሃይማኖት የተሰጠው አንድ ጊዜ፣ ያውም ፈጽሞ (ያለ መቀናነስና ያለ ቀረኝ) ስለሆነ ተሐድሶ ወይም ለውጥ አያስፈልገውም ማለት ነው። ሃይማኖትን ይቀበሉታል፣ ይጠብቁታል፣ ያወርሱታል እንጂ ላድሰው፣ ላሻሽለው አይባልም፤ እንዲያ ከሆነ መጀመሪያ የተሰጠው ሃይማኖት ሕፀፅ ነበረበት፣ ወይም ምሉዕ አልነበረም ያሰኛል። እግዚአብሔር የሰጣት፣ አባቶቻችን ከእርሱ ተቀብለው ኖረውባት ለእኛ ያወረሱን ሃይማኖት ግን ፍጽምትና አንድ ጊዜ የተሰጠች ናት። ብልየት እርጅና የለባትም፣ ተሐድሶ ወይም ማደስ የሚለው ቃል ብላሽና ለሃይማኖት ሊነገር የማይችል ጸያፍ ነው።
        </Text>
          <Text style={styles.paragraph}>
            3) ሃይማኖት ተጋድሎ ያስፈልገዋል
        </Text>
          <Text style={styles.paragraph}>
            በሃይማኖት ተጋድሎ የሚያስፈልገው በተሰጠን ሃይማኖት ለመጠቀም እና ለመጠበቅ ነው። ጌታችን 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከዓለም ለሰጠኸኝ ሰዎች ስምህን ገለጥሁላቸው፡፡ የአንተ ነበሩ፣ ለእኔም ሰጠሃቸው፤ ቃልህንም ጠብቀዋል፡፡»</Text>
        </View>
        <Text style={styles.paragraph}>
         ያለው ቃሉን መቀበል ብቻ ሳይሆን መጠበቅም እንደሚገባ ሲነግረን ነው (ዮሐ. 17፡6)። የተሰጠንን አጽንቶ ለመያዝና የሕይወትን አክሊል ለማግኘት እስከ ሞት ድረስ መጋደልና ታማኝነትን በተግባር ማስመስከር የግድ ይላል፤ 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ኩን መሃይምነ እስከ ለሞት ወእሁበከ አክሊለ ሕይወት - እስከ ሞት ድረስ የታመንህ ሁን፣ የሕይወትንም አክሊል እሰጥሃለሁ»</Text>
        </View>
        <Text style={styles.paragraph}>
         ተብሏልና (ራእ. 2፡10)።
        </Text>
          <Text style={styles.paragraph}>
            እንዲሁም በሃይማኖት ለመጠቀምም ተጋድሎ ያስፈልጋል። እንዲሁ በማመን ብቻ መጠቀም አይቻልም፤ ባመኑት ለመጠቀም ተጋድሎ ያስፈልጋል። ቅዱስ ጳውሎስ እስራኤላውያን በደብረ ሲና ከራሱ ከእግዚአብሔር፣ ኋላም ከሙሴ በተደጋጋሚ የእግዚአብሔርን ቃል በጆሯቸው ቢሰሙም በሰሙት ለማመንና ባመኑትም ለመጠቀም ጥረት ስላላደረጉና ስላልተጋደሉ እንዳልተጠቀሙ ሲገልጽ እንዲህ ብሏል: 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የሰሙት ቃል ከሰሚዎቹ ጋር በእምነት ስላልተዋሐደ አልጠቀማቸውም፡፡»</Text>
        </View>
        <Text style={styles.paragraph}>
        (ዕብ. 4፡2)
        </Text>
          <Text style={styles.paragraph}>
            በአጠቃላይ፣ ሃይማኖት የእግዚአብሔርን መገለጥ ሲያመለክት፣ እምነት የሰው ልጅ ይህንን መገለጥ በፈቃደኝነት መቀበልን፣ እና መታመን ደግሞ በእግዚአብሔር ታማኝነትና የመዳን ኃይል ላይ ሙሉ በሙሉ መደገፍን ያሳያል። እነዚህ ሦስት ገጽታዎች አንድ ላይ በመሆን፣ የክርስቲያንን መንፈሳዊ ጉዞና ከፈጣሪው ጋር ያለውን ግንኙነት ይገልጻሉ። የኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን እነዚህን መሠረታዊ የሃይማኖት ምሰሶዎች በጽኑ ትውፊትና ትምህርቷ ስትጠብቅ ኖራለች።
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