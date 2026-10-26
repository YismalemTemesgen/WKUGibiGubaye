import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HowFaithReligionScreen({ navigation }) {
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
        
        <Text style={styles.mainTitle}>አንዲት እምነት / ሃይማኖት</Text>

        <Text style={styles.paragraph}>
          በቅድስት ኦርቶዶክሳዊት ተዋሕዶ ቤተክርስቲያን አስተምህሮ፣ አንዲት እምነት ወይም አንዲት ሃይማኖት የሚለው ጽንሰ ሐሳብ የክርስትና ሕይወት ማዕከላዊ ምሰሶ ነው። ቤተክርስቲያን የክርስቶስ ሕያው አካል እንደመሆኗ መጠን፣ አንድነትዋ ከመለኮታዊ ምንጭ የሚመነጭና በመንፈስ ቅዱስ ኃይል የሚጠበቅ ነው። ሐዋርያው ቅዱስ ጳውሎስ በኤፌሶን መልእክቱ 
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ተስፋ ስለምናደርገው ነገር የሚያስረግጥ፥ የማናየውንም ነገር የሚያስረዳ ነው»</Text>
        </View>
        <Text style={styles.paragraph}>
         በማለት የክርስትናን አንድነት በጥልቀት ይገልጻል። ይህ የአንድነት ጥሪ ለመካፈል ሳይሆን፣ የመንፈስን አንድነት በሰላም ማሰሪያ በመጠበቅ፣ ምእመናን በአንድ እውነትና በተመሳሳይ የአምልኮ ሥርዓት እንዲመሩ ለማስረዳት ነው። ሐዋርያዊት ቤተክርስቲያን ከጥንት ዘመናት ጀምሮ ይህንን የአንድነት ትምህርት ስትጠብቅና ስትመሰክር ኖራለች።
        </Text>

        <Text style={styles.sectionHeader}>አንዲት ሃይማኖት ማለት በአንድ አምላክ ማመን ነው</Text>
        <Text style={styles.paragraph}>
        የክርስትና እምነት መሠረቱ በአንድ አምላክ ማመን ነው። ይህ አምላክ ከብሉይ ኪዳን ዘመን ጀምሮ ራሱን የገለጠው አምላክ ሲሆን፣ የአዳም፣ የአብርሃም፣ የይስሐቅ፣ የያዕቆብ፣ የሙሴ፣ የዳዊት እንዲሁም የሐዋርያት የጴጥሮስና የጳውሎስ አምላክ ነው። እርሱ ዘላለማዊ፣ የማይለወጥ፣ ሁሉን የፈጠረና የሚመግብ፣ በአብ፣ በወልድና በመንፈስ ቅዱስ ሦስትነት የተገለጠ አንድ አምላክ ነው። በአንድ አምላክ ማመን ማለትም ይህንን  ሥሉስ ቅዱስ እግዚአብሔርን / እርሱ እንደ ገለጠውና ቅዱሳን አባቶቻችን እንዳመለኩት በአንድ አይነት አምልኮ ማምለክ ማለት ነው። እውነተኛው ሃይማኖት ከፍጥረት ጀምሮ ሳይቋረጥ የዘለቀውን የእግዚአብሔርን መገለጥ የሚከተል ነው። ክርስትና አዲስ ሃይማኖት ሳይሆን፣ የብሉይ ኪዳን መሲሐዊ ተስፋዎች ፍጻሜና የእግዚአብሔር ፍጹም መገለጥ ነው። ይህ አንድ አምላክነት የመለኮታዊ ማንነትን አንድነት የሚያመለክት ሲሆን፣ ሦስቱ አካላት ደግሞ በአንድነትና በፍጹም ፍቅር የሚኖሩበትን ምሥጢር ይገልጻል።
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«አንድ ጌታ፣ አንድ ሃይማኖት፣ አንዲት ጥምቀት፣ ከሁሉ በላይ የሚሆን በሁሉም የሚሠራ በሁሉም የሚኖር አንድ አምላክ የሁሉም አባት አለ።» (ኤፌሶን 4:5-6)</Text>
        </View>
        <Text style={styles.paragraph}>
          ይህ ጥቅስ የመለኮታዊውን አንድነት፣ የሃይማኖትን አንድነት እና የእግዚአብሔርን ሁሉን አባትነት ያረጋግጣል።
        </Text>

        <Text style={styles.subHeader}>ቅዱስ አትናቴዎስ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ወልድን የማያውቅ አብንም አያውቅም፤ መንፈስ ቅዱስን የማያውቅ ደግሞ ወልድን አያውቅም። አንድ አምላክ በሦስት አካላት እንደሚገለጥ ይህ እምነት የቤተክርስቲያን መሠረት ነው።»</Text>
        </View>
        <Text style={styles.paragraph}>
          ይህ የአበው ትምህርት የሥላሴን አንድነት እና የክርስቶስን አምላክነት ያብራራል።
        </Text>

        <Text style={styles.subHeader}>ቅዱስ ጎርጎርዮስ ዘእንዚናዙ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«አንድ እግዚአብሔር በአብ፣ በወልድና በመንፈስ ቅዱስ ይከበራል፤ ይህ የሥላሴ ምሥጢር የሃይማኖታችን መሠረት ነው።»</Text>
        </View>
          <Text style={styles.paragraph}>
          ይህ አባባል የሥላሴን አንድነትና የሃይማኖት መሠረትነቱን ያጎላል።
        </Text>
      
        <Text style={styles.sectionHeader}>አንዲት ሃይማኖት ማለት በአንዲት ጥምቀት መወለድ ነው</Text>
        <Text style={styles.paragraph}>
  የሃይማኖት መግቢያ በርና የክርስቶስን ቤተሰብ የመቀላቀል መንገድ በአንድ አምላክ አምኖ መጠመቅ ነው። ጥምቀት ማለት ከውኃና ከመንፈስ ቅዱስ ዳግም መወለድ ሲሆን፣ ይህም አንድን ሰው ወደ እግዚአብሔር ልጅነት የሚያስገባ  ቅዱስ ምሥጢር / ነው። እያንዳንዳችን የምንጠመቃት ጥምቀት በቁጥር አንዲት ናት፤ ምክንያቱም የልጅነት ጸጋ የሚገኘው አንድ ጊዜ ብቻ ነው። ልጅ ከተባልንና ወደ እቅፉ ከገባን በኋላ ሌላ ስም እንደማይሰጠን ሁሉ፣ ዳግመኛ ልጅነትም ስለሌለ፣ ጥምቀታችን አንዲት ብቻ ናት። ይህች አንዲት ጥምቀት ሁላችንንም ከኢየሱስ ክርስቶስ ጋር አንድነትንና ኅብረትን እንድንፈጥር ታደርገናለች፤ ሞቱንና ትንሣኤውን እንድንጋራ፣ መንፈሳዊ የጸጋ ልጅነትንም እንድናገኝ ምክንያት ትሆንለች። ይህ የልጅነት ጸጋም አንድ ነው፣ አይለያይም። ስለዚህ፣ ይህችን አንዲት ጥምቀት ተጠምቆ ልጅነትን አግኝቶ ከአንድ ከክርስቶስ ቤተሰብ የተቀላቀለ ሰው አንዲት ሃይማኖት ነው የሚከተለው። ጥምቀት የኃጢአት ሥርየትን፣ የመንፈስ ቅዱስን ስጦታ፣ እና ወደ ክርስቶስ አካል የመቀላቀል ምሥጢርን ያካትታል።
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እውነት እውነት እልሃለሁ፥ ሰው ከውኃና ከመንፈስ ካልተወለደ በቀር ወደ እግዚአብሔር መንግሥት ሊገባ አይችልም።» (ዮሐንስ 3:5)</Text>
        </View>
          <Text style={styles.paragraph}>
          ይህ ጥቅስ የጥምቀትን አስፈላጊነት ለዘላለማዊ ሕይወት ያጎላል።
        </Text>
      
        <Text style={styles.subHeader}>ቅዱስ ቄርሎስ ዘእስክንድርያ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«በጥምቀት አማካኝነት የክርስቶስ አካል እንሆናለን፣ እናም የእርሱ መለኮታዊ ሕይወት ተካፋዮች እንሆናለን።»</Text>
        </View>
        <Text style={styles.paragraph}>
          ይህ አባባል በጥምቀት አማካኝነት ወደ ክርስቶስ አካል የመቀላቀልን ምሥጢር ያብራራል።
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"አንድ ጌታ፣ አንድ ሃይማኖት፣ አንዲት ጥምቀት" (ኤፌሶን 4:5)»</Text>
        </View>
          <Text style={styles.paragraph}>
          ይህ ጥቅስ የጥምቀትን አንድነትና የሃይማኖት መግቢያ በር መሆኑን ያረጋግጣል።
        </Text>

        <Text style={styles.sectionHeader}>አንዲት ሃይማኖት ማለት በአንድና ለአንድ ተስፋ መጠራት ነው</Text>
        <Text style={styles.paragraph}>
          በአንድ አምላክ አምኖ አንዲት ጥምቀትን የተጠመቀ የሚጠባበቀው አንድ ተስፋ ነው። እርሱም የዘላለም ሕይወት፣ የቅድስና ሕይወት ፍጻሜ የሆነው መንግስተ ሰማያት ነው። ለአንዱ ሌላ፣ ለሌላው ደግሞ ሌላ ተስፋ የለም፤ ሁሉም በክርስቶስ ተስፋ የተሰጣቸው የአንድ የዘላለም በረከት ወራሾች ናቸው። አንድ ተስፋ የተጠራ ሰው በተለያዩ ሃይማኖቶች ሊሆን አይችልም፤ ምክንያቱም ያ ተስፋ የተመሠረተው በአንድ ወንጌል ላይ ነውና። ሐዋርያው ቅዱስ ጴጥሮስና ቅዱስ ጳውሎስ ለአሕዛብም ሆነ ለተገረዙት አስተምረው ያመኑ ክርስቲያኖች አንድ ሃይማኖት ነበራቸው፤ ምክንያቱም ሁሉም የተጠሩት ለአንድ የድኅነት ተስፋ ነበር። ይህ ተስፋ እግዚአብሔር ከዘላለም በፊት የወሰነው፣ በክርስቶስ የተፈጸመው እና በመንፈስ ቅዱስ አማካኝነት ለምእመናን የተሰጠ ነው። ይህ ተስፋ የክርስቶስን ዳግም ምጽአት፣ የሙታን ትንሣኤ፣ እና የእግዚአብሔር መንግሥት ፍጻሜን ያጠቃልላል።
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እኔም የዘላለምን ሕይወት እሰጣቸዋለሁ፥ ለዘላለምም አይጠፉም፥ ከእጄም ማንም አይነጥቃቸውም።» (ዮሐንስ 10:28)</Text>
        </View>
        <Text style={styles.paragraph}>
          ጌታችን ለሚያምኑበት የዘላለም ሕይወትን እንደሚሰጥ የገባው ቃል ነው።
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የተጠራችሁበትም ተስፋ አንድ እንደ ሆነ፥ እንዲሁ አንድ አካልና አንድ መንፈስ አለ።» (ኤፌሶን 4:4)</Text>
        </View>
        <Text style={styles.paragraph}>
        ይህ ጥቅስ የክርስትናን አንድነት በመንፈስና በተስፋ ያረጋግጣል።
        </Text>

        <Text style={styles.subHeader}>ቅዱስ ባስልዮስ ዘቂሳርያ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«የእኛ ተስፋ የዘላለም ሕይወት ነው፤ ይህም የክርስቶስን ሞትና ትንሣኤ በመካፈል የሚገኝ ነው።»</Text>
        </View>
         <Text style={styles.paragraph}>
        ይህ አባባል የዘላለም ሕይወትን እንደ ክርስቶስ ሞትና ትንሣኤ ፍሬ ያብራራል።
        </Text>
        <Text style={styles.sectionHeader}>አንዲት ሃይማኖት ማለት አንድ  አካል መሆን ነው።</Text>
        <Text style={styles.paragraph}>
          አንዲት ሃይማኖት ማለት አማኞች ሁሉም በአንድ መንፈስ አንድ አካል መሆን ማለት ነው። ሐዋርያው ቅዱስ ጳውሎስ ይህንን ሲገልጽ
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«አካልም አንድ እንደ ሆነ ብዙም ብልቶች እንዳሉበት ነገር ግን የአካል ብልቶች ሁሉ ብዙዎች ሳሉ አንድ አካል እንደ ሆኑ፥ ክርስቶስ ደግሞ እንዲሁ ነው፤ አይሁድ ብንሆን የግሪክ ሰዎችም ብንሆን ባሪያዎችም ብንሆን ጨዋዎችም ብንሆን እኛ ሁላችን በአንድ መንፈስ አንድ አካል እንድንሆን ተጠምቀናልና… አካል ብዙ ብልቶች እንጂ አንድ ብልት አይደለምና…እናንተም የክርስቶስ አካል ናችሁ እያንዳንዳችሁም ብልቶች ናችሁ።»</Text>
        </View>
          <Text style={styles.paragraph}>
              (1ኛ ቆሮንቶስ 12:12-27) ይላል። ጌታችንም     
         </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እኔ የወይን ግንድ ነኝ እናንተም ቅርንጫፎች ናችሁ።»</Text>
        </View>
          <Text style={styles.paragraph}>
 (ዮሐንስ 15:5) እንዳለ፣ ሁላችንም በአንዱ ግንድ ላይ የተመሠረትን ነን። የተለያዩ ጸጋዎች ቢኖረንም፣ የአንዱ የክርስቶስ አካል ስለሆንን አንድ ሃይማኖት ነን እንጂ ብዙ ሃይማኖቶች አይደለንም። ይህ አንድነት የሚመነጨው ከክርስቶስ ጋር ባለን ምሥጢራዊ ኅብረት ሲሆን፣ እርሱም የቤተክርስቲያን ራስ ነው። ይህ አንድነት የቤተክርስቲያንን ህልውናና ተልዕኮ መሠረት ሲሆን፣ ምእመናን እርስ በእርስ በፍቅር እንዲተሳሰሩና የክርስቶስን ፍቅር ለዓለም እንዲያሳዩ ያስችላቸዋል።       
         </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሁሉ አንድ እንዲሆኑ፥ አንተ፥ አባት ሆይ፥ በእኔ እንዳለህ እኔም በአንተ፥ እነርሱ ደግሞ በእኛ አንድ እንዲሆኑ፥ ዓለምም አንተ እንደ ላክኸኝ እንዲያምን።» (ዮሐንስ 17:21)</Text>
        </View>
        <Text style={styles.paragraph}>
          ይህ የጌታችን ጸሎት የቤተክርስቲያንን የአንድነት ምኞት ያሳያል።
        </Text>

        <Text style={styles.subHeader}>ቅዱስ ዮሐንስ አፈወርቅ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ቤተክርስቲያን የክርስቶስ አካል እንደመሆኗ መጠን፣ መለያየት በእርሷ ውስጥ ቦታ የለውም። አንድነቷ የእርሷ ሕይወት ነው።»</Text>
        </View>
        <Text style={styles.paragraph}>
          ይህ አባባል የቤተክርስቲያንን አንድነት እንደ የሕይወት መሠረት ያብራራል።
        </Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«"በአንድ መንፈስ ሁላችን ወደ አንድ አካል ተጠመቅንና፥ አይሁድ ብንሆን የግሪክ ሰዎችም ብንሆን ባሪያዎችም ብንሆን ጨዋዎችም ብንሆን ሁላችንም አንድ መንፈስን ጠጥተናል።" (1ኛ ቆሮንቶስ 12:13)</Text>
        </View>
        <Text style={styles.paragraph}>ይህ ጥቅስ በመንፈስ ቅዱስ አማካኝነት የሚገኘውን የአካል አንድነት ያረጋግጣል።</Text>

        <Text style={styles.sectionHeader}>አንዲት ሃይማኖት ማለት በአንድ መንፈስ መመራት ነው።</Text>
        <Text style={styles.paragraph}>
          ክርስቶስ ወደ ሰማይ ካረገ በኋላ ቤተክርስቲያንን የሚመራት በሐዋርያት ላይ የወረደው መንፈስ ቅዱስ ነው። ከጴንጤቆስጤ ቀን ጀምሮ እስከዛሬ ድረስ፣ መንፈስ ቅዱስ በቅዱስ ሲኖዶስ አማካኝነት፣ እንዲሁም በቅዱስ ትውፊትና በቅዱሳት መጻሕፍት አማካኝነት ቤተክርስቲያንን ይመራል። ሐዋርያው እንደተናገረው
        </Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሁላችንም አንዱን መንፈስ ጠጥተናል»</Text>
        </View>
          <Text style={styles.paragraph}>(1ኛ ቆሮንቶስ 12:13)። በአንድ መንፈስ ቅዱስ የምንመራ ከሆነ፣ አንድ እምነት እና አንድ ሃይማኖት እንጂ ብዙ እምነቶች ወይም ብዙ ሃይማኖቶች ሊኖሩን አይችሉም። ስለዚህ፣ አንዲት ሃይማኖት ማለት በሕያውና አንድ በሆነው መንፈስ ቅዱስ የሚመራት ማለት ነው። መንፈስ ቅዱስ የአንድነታችን ዋስና የድኅነታችን መሪ ነው። እርሱ ቤተክርስቲያንን ወደ እውነት ሁሉ ይመራታል፣ የክርስቶስን ትምህርት ያስተምራል፣ እና ምእመናንን በጸጋ ያጠናክራል።</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ለሐዋርያት ትምህርትና ለኅብረት እንጀራንም ለመቁረስና ለጸሎት ይተጉ ነበር።» (የሐዋርያት ሥራ 2:42)</Text>
        </View>
       <Text style={styles.paragraph}>ይህ ጥቅስ የጥንቷ ቤተክርስቲያን በመንፈስ ቅዱስ አንድ ሆና ትምህርትን፣ ኅብረትንና አምልኮን እንዴት ትጠብቅ እንደነበር ያሳያል።</Text>
        <Text style={styles.subHeader}>ቅዱስ አትናቴዎስ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መንፈስ ቅዱስ የቤተክርስቲያን ነፍስ ነው፤ እርሱም ቤተክርስቲያንን ወደ እውነት ሁሉ ይመራታል።»</Text>
        </View>
        <Text style={styles.paragraph}>ይህ አባባል የመንፈስ ቅዱስን ማዕከላዊ ሚና በቤተክርስቲያን አመራር ያብራራል።</Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እኔም አብን እለምናለሁ፥ ለዘላለም ከእናንተ ጋር እንዲኖር ሌላ አጽናኝ ይሰጣችኋል፤ እርሱም ዓለም የማያየውና የማያውቀው የእውነት መንፈስ ነው፤ እናንተ ግን ከእናንተ ጋር ይኖራልና በእናንተም ውስጥ ይሆናልና ታውቁታላችሁ። (ዮሐንስ 14:16-17)»</Text>
        </View>
        <Text style={styles.paragraph}>ይህ የጌታችን ቃል መንፈስ ቅዱስ ከቤተክርስቲያን ጋር ዘወትር እንደሚኖርና እንደሚመራት ያረጋግጣል።</Text>
        <Text style={styles.sectionHeader}>አንዲት ሃይማኖት ማለት አንድ ጊዜ የተሰጠች ማለትም ነው።</Text>
        <Text style={styles.paragraph}>
        ሃይማኖት ለአማኞች አንድ ጊዜ ፈጽሞ የተሰጠች በመሆኗ፣ የማይሻርና የማይለወጥ መሠረት አላት። ቅዱስ ይሁዳ
        </Text>
         <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ወዳጆች ሆይ፥ ስለምንካፈለው ስለ መዳናችን ልጽፍላችሁ እጅግ ተግቼ ሳለሁ፥ ለቅዱሳን አንድ ጊዜ ፈጽሞ ስለ ተሰጠ ሃይማኖት እንድትጋደሉ እየመከርኋችሁ እጽፍላችሁ ዘንድ ግድ ሆነብኝ»</Text>
        </View>
        <Text style={styles.paragraph}>(ይሁዳ 1:3) በማለት ይህንን እውነት አጽንቶበታል። ይህች ሃይማኖት ኢየሱስ ክርስቶስ ራሱ ራስ ሆኖ በአለት ላይ የመሠረታት ናት (ማቴዎስ 16:18)። በዚህ መሠረት፣ ሃይማኖት ደግማ ደጋግማ የምትሰጥ አይደለችም። ለሐዋርያት የተሰጠችው ያችው ሃይማኖት ናት ዛሬም በእኛ ዘመን መኖር ያለባት። ይህ ማለት ሃይማኖት የምትጠበቅ እንጂ በየጊዜው የምትሻሻል አይደለችም ማለት ነው። እንዲህ ከሆነ መጀመሪያ የተሰጠው ሃይማኖት ሕፀፅ ነበረበት ወይም ምሉዕ አልነበረም ያስብላል። የእግዚአብሔር የገለጠው እውነት ፍጹም ነውና፣ ከእርሱ ምንም መጨመርም መቀነስም የለብንም። የቤተክርስቲያን ታሪክም ይህንን የማይለወጥ የሃይማኖት ባህርይ ያረጋግጣል።</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ነገር ግን እኛ ብንሆን ወይም ከሰማይ መልአክ ከሰበክንላችሁ ወንጌል የሚበልጥ ወንጌልን ቢሰብክላችሁ፥ የተረገመ ይሁን። አስቀድመን እንዳልን እንዲሁ አሁን ደግሞ እላለሁ፥ ከተቀበላችሁት ወንጌል የሚበልጥ ወንጌልን ማንም ቢሰብክላችሁ የተረገመ ይሁን። (ገላትያ 1:8-9)»</Text>
        </View>
        <Text style={styles.paragraph}>ይህ ጥቅስ በሐዋርያዊው ትውፊት አንድ ጊዜ ለዘላለም የተሰጠውን ወንጌል የመጠበቅን አስፈላጊነት ያሳያል።</Text>
        <Text style={styles.subHeader}>ቅዱስ ኢሬኔዎስ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ቤተክርስቲያን፣ ምንም እንኳ በመላው ዓለም ተበትና ብትገኝም፣ ከሐዋርያት የተቀበለችውን አንድ እምነት በጥንቃቄ ትጠብቃለች።»</Text>
        </View>

        <Text style={styles.sectionHeader}>አንዲት ሃይማኖት ማለት አንድን ክርስቶስን መምሰል ማለት ነው።</Text>
        <Text style={styles.paragraph}>
          የአንዲት ሃይማኖት ቁንጮ ግብ አንዱን ክርስቶስን መምሰል ነው። የክርስትና ሕይወት ከክርስቶስ ተምሮ እርሱን መምሰል ነው። ሐዋርያው 
        </Text>
       <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ከክርስቶስ ኢየሱስ ጋር አንድ እንሆን ዘንድ የተጠመቅን ሁላችን ከሞቱ ጋር አንድ እንሆን ዘንድ እንደ ተጠመቅን አታውቁምን? … ሞቱንም በሚመስል ሞት ከእርሱ ጋር ከተባበርን ትንሣኤውን በሚመስል ትንሣኤ ደግሞ ከእርሱ ጋር እንተባበራለን።»</Text>
        </View>
          <Text style={styles.paragraph}>(ሮሜ 6:3-5) በማለት ይህንን ገልጿል። ጌታችንም</Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መምህራችሁ፣ ሊቃችሁ፣ አባታችሁ አንድ ነው።»</Text>
        </View>
        <Text style={styles.paragraph}> (ማቴዎስ 23:8) ሲል፣ እኛ የምንከተለው አንድ አስተማሪ እንዳለን ያሳስባል። ቅዱስ ጳውሎስም</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እኔ ክርስቶስን እንደምመስል እናንተ እኔን ምሰሉ።»</Text>
        </View>
          <Text style={styles.paragraph}>(1ኛ ቆሮንቶስ 11:1) በማለት ክርስቶስን የመምሰልን ግዴታ አጽንቶበታል። ጌታችን ከእኔ ተማሩ (ማቴዎስ 11:29) እና</Text>
          <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እኔ ቅዱስ ነኝና እናንተም ቅዱሳን ሁኑ።»</Text>
        </View>
          <Text style={styles.paragraph}> (1ኛ ጴጥሮስ 1:16) በማለት የቅድስናን መንገድ አሳይቶናል። ስለዚህ፣ በሃይማኖት መኖር ማለት አንዱን ክርስቶስን በመምሰል ወደ ፍጹምነት ማደግ ከሆነ፣ ሃይማኖትም አንዲት ናት ማለት ነው። ይህ የመምሰል ሂደት መንፈስ ቅዱስ የሚያግዘን የዕለት ተዕለት ተጋድሎ ነው። ይህ ሂደት  ቴዎሲስ ወይም ሱታፌ አምላክ / ተብሎ የሚታወቀው የኦርቶዶክሳዊት ቤተክርስቲያን መሠረታዊ ትምህርት ሲሆን፣ ሰው በጸጋ ከእግዚአብሔር ጋር አንድ በመሆን የእግዚአብሔርን ባሕርያት በጸጋ እንዲካፈል ነው።</Text>
        <Text style={styles.subHeader}>ቅዱስ ዲዮናስዮስ ዘአሬዎስፋጎስ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«መለኮታዊ ውበትን የመምሰልና የመካፈል ፍላጎት የሰው ልጅ የሕይወት ትርጉም ነው።»</Text>
        </View>
       <Text style={styles.paragraph}>ይህ የአባቶች ትምህርት ክርስቶስን የመምሰልን ዓላማ ያጎላል።</Text>
        <Text style={styles.subHeader}>ቅዱስ አትናቴዎስ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እግዚአብሔር ሰው ሆነ፣ ሰውም አምላክ እንዲሆን።»</Text>
        </View>
       <Text style={styles.paragraph}>ይህ አባባል የቴዎሲስን ምሥጢርና ክርስቶስን የመምሰልን የመጨረሻ ግብ ያብራራል።</Text>

        <Text style={styles.sectionHeader}>አንዲት እምነት ወይስ አንዲት ሃይማኖት?</Text>
        <Text style={styles.paragraph}>
          አንዳንዶች በአማርኛ መጽሐፍ ቅዱስ አንድ ሃይማኖት ቢልም፣ በሌሎች ቋንቋዎች ግን አንድ እምነት የሚለው አገላለጽ እንደሚገኝ በመጥቀስ፣ አንድ እምነት ያላቸው የተለያዩ ሃይማኖቶች ሊኖሩ ይችላሉ ብለው ይከራከራሉ። ሆኖም፣ ከላይ እንደተገለጸው፣ ይህ አከራካሪ አይደለም። እምነት ማለት ለእግዚአብሔር መገለጥ የሚሰጥ ውስጣዊ የልብ ምላሽ ወይም አእምሮአዊ ውሳኔ ሲሆን፣ ሃይማኖት ደግሞ ይህንን ውስጣዊ እምነት የሚያስረግጥ የዶክትሪን፣ የአምልኮ እና የተግባር ሥርዓት ነው። ሁለቱ እርስ በርስ የተሳሰሩ ናቸው። ከቅዱስ ጴጥሮስ ጋር በእምነት ብቻ ሳይሆን በአምልኮም አንድ መሆን ማለትም፣ እርሱ ያመነውን ማመን፣ እንዳመነው አድርጎ ማመን፣ እርሱም እንዳመለከው አድርጎ ማምለክ ነው ፍጹም የሚያደርገው። የአንዲት እምነት ፍጹም መገለጫዋ አንዲት ሃይማኖት ናት። የተለያየ እምነት እንጂ አንዲት እምነት በተለያዩ ሃይማኖቶች ልትገለጥ አትችልም። አንዲት እምነት የምትገለጸው በአንዲት ሃይማኖት ነው፤ ይህም መገለጫው በአንድ አምላክ ማመንና ማምለክ፣ አንዲት ጥምቀት መጠመቅ፣ ለአንድም ተስፋ መጠራት እና በአንድ መንፈስ መመራት ናቸው። ስለዚህ እምነትም ሃይማኖትም አንዲት ናት።
        </Text>
    
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«"መንፈስንም ሁሉ አትመኑ፥ ነገር ግን መናፍስት ከእግዚአብሔር የሆኑ እንደ ሆኑ መርምሩ፤ ብዙዎች ሐሰተኞች ነቢያት ወደ ዓለም ወጥተዋልና።» (1ኛ ዮሐንስ 4:1)</Text>
        </View>
      <Text style={styles.paragraph}>ይህ ጥቅስ የእውነተኛውን እምነትና አስተምህሮ የመለየትን አስፈላጊነት ያሳያል።</Text>
        <Text style={styles.subHeader}>ቅዱስ ቄርሎስ ዘኢየሩሳሌም፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«እምነት አንድ ናት፤ እውነትም አንድ ናት። የተለያየ እምነት ሊኖር አይችልም፤ ምክንያቱም እውነት አንድ ነውና።»</Text>
        </View>
      <Text style={styles.paragraph}>ይህ አባባል የእምነትንና የእውነትን አንድነት ያረጋግጣል።</Text>
        <Text style={styles.paragraph}>
          በመሆኑም፣ አንዲት እምነት እና አንዲት ሃይማኖት የኦርቶዶክስ ተዋሕዶ ክርስትና የማዕዘን ድንጋዮች ናቸው። እነዚህ ጽንሰ ሐሳቦች የእግዚአብሔርን አንድነት፣ የቤተክርስቲያንን አንድነት፣ የአምልኮን አንድነት እና የዘላለም የድኅነት ተስፋን ያረጋግጣሉ።
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
  subHeader: { fontSize: 14.5, fontWeight: 'bold', color: '#004D40', marginTop: 12, marginBottom: 4 },
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