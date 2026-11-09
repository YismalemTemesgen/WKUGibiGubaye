import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tim25Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>አንድ እግዚአብሔርና አንድ መካከለኛ ፡ የክርስቶስ ተዋሕዶዊ አስታራቂነት</Text>
         
        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            በ1ኛ ጢሞቴዎስ 2:5 ላይ የተመዘገበው፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«አንድ እግዚአብሔር አለና፥ በእግዚአብሔርና በሰውም መካከል ያለው መካከለኛው ደግሞ አንድ አለ፥ እርሱም ሰው የሆነ ክርስቶስ ኢየሱስ ነው»</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለው ቃል፣ የክርስትናን የድኅነት መንገድና የኢየሱስ ክርስቶስን ልዩ ማንነት የሚያሳይ ቁልፍ ጥቅስ ነው። በተጨማሪም ዕብራውያን 12:24 ላይ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የአዲስም ኪዳን መካከለኛ ወደሚሆን ወደ ኢየሱስ፥ ከአቤልም ደም ይልቅ የሚሻለውን ወደሚናገር ወደ መርጨት ደም ደርሳችኋል»</Text>
          </View>

          <Text style={styles.paragraph}>
            ተብሎ ተጽፏል። እነዚህ የተቀደሱ ጥቅሶች፣ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን መሠረታዊ አስተምህሮ የሆነውን፣ ክርስቶስ በእግዚአብሔርና በሰው መካከል ያለው ብቸኛና ማዕከላዊ አስታራቂ መሆኑን ያረጋግጣሉ። ይህ ጽሑፍ፣ የክርስቶስን ልዩና ማዕከላዊ አስታራቂነት፣ የሁለት ባሕርያት ተዋሕዶን፣ እና በብሉይና በአዲስ ኪዳን ውስጥ ያለውን የክህነት ሚና በጥልቀት ይተነትናል።
          </Text>
        </View>

        {/* የእግዚአብሔርና የሰው መካከለኛ ፡ የክርስቶስ ብቸኛ አስታራቂነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የእግዚአብሔርና የሰው መካከለኛ ፡ የክርስቶስ ብቸኛ አስታራቂነት</Text>
          </View>

          <Text style={styles.paragraph}>በ1ኛ ጢሞቴዎስ 2:5 ላይ፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«በእግዚአብሔርና በሰውም መካከል ያለው መካከለኛው ደግሞ አንድ አለ፥ እርሱም ሰው የሆነ ክርስቶስ ኢየሱስ ነው»</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለው የእግዚአብሔር ቃል፣ የጌታችንን ልዩና ብቸኛ አስታራቂነት በግልጽ ያውጃል። ይህ አንድ መካከለኛ መባሉ፣ እርሱ ብቻ ፍጹም አምላክና ፍጹም ሰው በመሆኑ ነው። በመለኮታዊ ተፈጥሮው ከአብና ከመንፈስ ቅዱስ ጋር አንድ ሲሆን፣ በሥጋዌው ደግሞ ከሰው ልጆች ጋር አንድ ሆነ። በዚህም ፍጹም አንድነት፣ ከአምላክ ወደ ሰው፣ እንዲሁም ከሰው ወደ አምላክ የሚደረገውን ግንኙነት የሚመራ ብቸኛ ድልድይ ሆነ።
          </Text>

          <Text style={styles.paragraph}>
            ይህ ልዩ አስታራቂነት የተመሠረተው በመለኮትና በሰውነት ባሕርያት መካከል በሆነው አካላዊ ተዋሕዶ ላይ ነው። ይህም ማለት፣ የባሕርይ ለውጥ ሳያገኝ፣ ያለመቀላቀል፣ ያለመለወጥ፣ ያለመለያየትና ያለመከፋፈል፣ መለኮታዊው ወልድ የሰውን ባሕርይ ሙሉ በሙሉ በአንድ አካል ውስጥ መዋሐዱን ያመለክታል። በዚህ ባሕርያት ውህደት ውስጥ፣ እያንዳንዱ ባሕርይ የራሱን ባሕርያዊ ንብረቶች እንደያዘ ይቆያል፤ ነገር ግን የሚሠራውና የሚሰቃየው አንድ አካል ብቻ ነው።
          </Text>

          <Text style={styles.paragraph}>
            እግዚአብሔርን ከሰው፣ ሰውን ከእግዚአብሔር ጋር ለማስታረቅ፣ ሁለቱንም ባሕርያት የያዘ አካል አስፈላጊ ነበር። የሰው ባሕርይ ብቻ ቢሆን ኖሮ የኃጢአትን ዋጋ መክፈልና ከእግዚአብሔር ጋር መገናኘት አይችልም ነበር። መለኮታዊ ባሕርይ ብቻ ቢሆን ደግሞ መከራን መቀበል ስለማይችል የሰው ባሕርይን ሊቤዥ አይችልም። ስለዚህ፣ ሁለቱን ፍጹማን ባሕርያት በአንድ አካል የያዘው ክርስቶስ፣ የሰውነትን መከራ በመቀበልና የመለኮትን ሥልጣን በመጠቀም፣ በሰውና በእግዚአብሔር መካከል ያለውን የጥል ግድግዳ ያፈረሰ ብቸኛው አስታራቂ ሆነ።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ አትናቴዎስ እንዳስተማረው፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ቃል ሰው የሆነው፣ እኛን አምላክ ለማድረግ ነው፤ ነገር ግን ይህ የባሕርይ ለውጥ ሳይሆን፣ የመለኮታዊ ፍቅር መገለጫ ነው።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ የሥጋዌ ዓላማ የሰው ልጆችን ከዘለዓለማዊ ሞት ነፃ በማውጣት የመለኮታዊ ጸጋ ተካፋይ እንዲሆኑ ለማድረግ ነው። እርሱ ሰው በመሆኑ የሰውን ሞት ሞቷል፤ አምላክ በመሆኑ ደግሞ በሦስተኛው ቀን ሞትን ድል ነስቶ የዘለዓለም ሕይወትን ለሁሉ ወገን ሰጥቷል።
          </Text>
        </View>

        {/* ራሱን ለሁሉ ቤዛ ሰጠ ፡ የጥል ግድግዳን ማፍረስ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ራሱን ለሁሉ ቤዛ ሰጠ ፡ የጥል ግድግዳን ማፍረስ</Text>
          </View>

          <Text style={styles.paragraph}>
            የክርስቶስ አስታራቂነት ማዕከላዊ መገለጫ ራሱን ለሁሉ ቤዛ አድርጎ መስጠቱ ነው። ኤፌሶን 2:14-16 እንዲል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እርሱ ሰላማችን ነውና፤ ሁለቱን ያዋሐደ በአዋጅ የተነገሩትንም የትእዛዛትን ሕግ ሽሮ በመካከል ያለውን የጥል ግድግዳን በሥጋው ያፈረሰ፤ ይህም ከሁለታቸው አንድን አዲስን ሰው በራሱ ይፈጥር ዘንድ ሰላምንም ያደርግ ዘንድ፥ በጥልም በመስቀሉ ሁለታቸውን በአንድ አካል ከእግዚአብሔር ጋር ያስታርቅ ዘንድ፥»።</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህም ጥቅስ፣ ጌታ በመስቀል ላይ ባፈሰሰው ደሙ፣ በኃጢአት ምክንያት በእግዚአብሔርና በሰው መካከል የቆመውን የመለያየትና የሞት ግድግዳ እንዳፈረሰ በግልጽ ያሳያል።
          </Text>

          <Text style={styles.paragraph}>
            ኢየሱስ ክርስቶስ አስታራቂ መባሉ ሰው ስለሆነ ብቻ ሳይሆን፣ እርሱ ሰው ሆኖ በመስቀል ላይ ራሱን ፍጹም መስዋዕት አድርጎ በመስጠቱ ነው። በዕለተ ዓርብ፣ ክርስቶስ ከንጽሕት ድንግል የነሣውን ንጹሕ ሥጋ ይዞ የሰው ልጆችን ኃጢአት ለማስተሥረይ በመስቀል ላይ በመዋሉ፣ የሰው ልጆችን ከእግዚአብሔር ጋር ለማስታረቅ በኃጢአትና በጽድቅ መካከል ቆመ። ይህ መስዋዕትነት በምድርም በሰማይም ሰላምን ያወጀ፣ የመላውን ዓለም ኃጢአት ይቅርታ ያስገኘ የመጨረሻውና የዘለዓለም ቤዛ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ይህ የሚያሳየው፣ በመስቀል ላይ በሥጋው የተፈጸመውን የቀራንዮን የአስታራቂነት አገልግሎት ነው። ራሱን ለሁሉ ቤዛ አድርጎ ሰጠ በማለት፣ አስታራቂነቱ የተፈጸመው በሥጋዌውና በቤዛነቱ ዘመን መሆኑን ያሳየናል። 1ኛ ጢሞቴዎስ 2:7 ላይ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ይህም በገዛ ዘመኑ ምስክርነቱ ነበር»</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት የሥጋዌውን ሰው የሆነበትን ዘመን ያስታውሰናል። ስለዚህ፣ የክርስቶስ አስታራቂነት በቃሉ ብቻ ሳይሆን፣ በሥጋው ባደረገው የቤዛነት ሥራ ላይ የተመሠረተ ነው።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ ዮሐንስ አፈወርቅ እንዳብራራው፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ በመስቀል ላይ የጥል ግድግዳን አፈረሰ፤ እግዚአብሔርን ከሰው ጋር፣ ሰውንም ከእግዚአብሔር ጋር አስታረቀ። ይህ እርቅ ፍጹም ነው፣ ዳግም መስዋዕትነትን አይሻም።»</Text>
          </View>

          <Text style={styles.paragraph}>
            የክርስቶስ መስዋዕትነት የሁሉንም የኃጢአት ክፍተት አስወግዶ፣ በሁሉም መካከል ፍጹም ሰላምን እንዳመጣ ያስረዳል። የእርሱ ሥራ ፍጹም በመሆኑ፣ የሰው ልጅን ከእግዚአብሔር ጋር ለዘለዓለም አስታርቋል።
          </Text>
        </View>

        {/* የኪዳናት አስታራቂነት ፡ የብሉይና የአዲስ ኪዳን መካከለኛ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የኪዳናት አስታራቂነት ፡ የብሉይና የአዲስ ኪዳን መካከለኛ</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ በአዲስ ኪዳን መሥራችነትም አስታራቂ ነው። በብሉይ ኪዳን ስለ ሕዝብ ኃጢአት ይቀርብ የነበረው መስዋዕት በግ፣ ፍየል፣ ወይም ላም ነበር። እነዚህ የእንስሳት ደሞች ጊዜያዊ፣ ምሳሌያዊና ኃጢአትን ፍጹም የማያስተሰርዩ ነበሩ። የብሉይ ኪዳን ሊቀ ካህናት የካህናትና የሕዝብ ኃጢአት አስተስርይ ዘንድ የዕርቅ ዕለት በዓመት አንድ ጊዜ ወደ ቅድስተ ቅዱሳን ይገባ የነበረው በእንስሳት ደም ነበር። ይህ ሥርዓት ግን የክርስቶስን ፍጹም መስዋዕትነትና የክህነት አገልግሎት ጥላ ብቻ ነበር።
          </Text>

          <Text style={styles.paragraph}>
            ጌታችን ኢየሱስ ክርስቶስ ግን ከአሮጌው ኪዳን መሥዋዕቶች በባሕርይና በውጤት እጅግ የሚበልጥ የራሱን አምላካዊ ሥጋና ደም ለሥርየተ ኃጢአት ሰጠ። ቀድሞ በሙሴ አማካኝነት በእንስሳት ደም የተመሠረተውን ጊዜያዊ ኪዳን ሻረና፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ስለ ብዙዎች ለኃጢአት ይቅርታ የሚፈስ የአዲስ ኪዳን ደሜ ይህ ነው» (ማቴዎስ 26:26-28)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት አዲስ፣ ዘለዓለማዊና ፍጹም ኪዳንን መሠረተልን። ይህ አዲስ ኪዳን በክርስቶስ ደም ብቻ የተመሠረተ በመሆኑ፣ በሥልጣን፣ በጸጋና በውጤት ከቀድሞው ኪዳን እጅግ ይበልጣል።
          </Text>

          <Text style={styles.paragraph}>
            ስለዚህ የክርስቶስ አስታራቂነት የኃጢአትን ስርየት ከማምጣትም ባሻገር፣ በመለኮታዊ ፈቃድ የተሰጠውን የድኅነት ሥርዓት በዘመናት ሁሉ የማገናኘት ሚና አለው። የብሉይ ኪዳን ሊቃውንት የክርስቶስን መምጣት ሲጠባበቁ የኖሩት እርሱ ብቻ የኪዳናት ሁሉ ፍጻሜና የዘለዓለም ሕይወት መሥራች መሆኑን በማመን ነው። እርሱ የብሉይ ኪዳንን ትንቢቶች ፈጻሚ፣ የሥርዓቱን ዓላማ አድራጊ፣ የአዲሱንም ኪዳን ጸጋና እውነት አምጭ ነው።
          </Text>
        </View>

        {/* ከአቤል ደም የሚሻለው ፡ የኃጢአት ስርዓት ፍጹምነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ከአቤል ደም የሚሻለው ፡ የኃጢአት ስርዓት ፍጹምነት</Text>
          </View>

          <Text style={styles.paragraph}>
            የዕብራውያን መልዕክት የክርስቶስን ደም ከአቤል ደም እንደሚበልጥ ይናገራል። የአቤል ደም ወንድሙ ቃየን ገደለኝ እያለ ፍርድን የሚጠይቅና የሚከስ ሲሆን፣ ይህም የኃጢአትን ክብደትና ከአቤል ደም ይልቅ የሚሻለውን የሚናገረው የክርስቶስ ደም አስፈላጊነት ያሳያል (ዕብ 12:24)። የአቤል ደም የኃጢአትን ፍርድ የሚያመለክት ሲሆን፣ የክርስቶስ ደም ግን የኃጢአትን ስርየትና ይቅርታን የሚያመጣ ነው።
          </Text>

          <Text style={styles.paragraph}>
            የጌታችን የኢየሱስ ክርስቶስ ሥጋና ደም ግን ከኃጢአት ነፃ የሆነ፣ ፍጹም ንጹሕ የሆነ መስዋዕት ነው። የእርሱ ደም የሚያስወቅስና የሚከስ ሳይሆን፣ አምነው የመጡትን ሁሉ ከኃጢአት ፍርድ ነፃ የሚያደርግ፣ የዘለዓለም ቤዛና መድኃኒት ነው። ስለዚህም የክርስቶስ መስዋዕትነት በእጅጉ ይበልጣል፤ የሚመስለውና የሚተካከለውም ፍጹም የለም። ጌታችን ሥጋውንና ደሙን ለሰው ልጆች ሁሉ ቤዛ አድርጎ ካቀረበ በኋላ የሚቀርበው ሌላ መሥዋዕት የለም።
          </Text>

          <Text style={styles.paragraph}>ሊቃውንት እንደሚያስተምሩት፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የክርስቶስ ደም፣ የብሉይ ኪዳንን መስዋዕቶች ሁሉ ይበልጣል፤ ምክንያቱም እርሱ የዘለዓለም መስዋዕት ነውና። በእርሱ የኃጢአት ስርየት ፍጹም ሆኗል።»</Text>
          </View>

          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የምትፈትተው በዕለተ ዓርብ ጌታችን ያቀረበውን የእርሱን የከበረ ሥጋና ደም ብቻ ነው። ይህ መስዋዕተ ቅዳሴ ፍጹም በሆነው አስታራቂ ሥራ ላይ የተመሠረተ፣ ለኃጢአት ስርየት የሚሰጥ፣ የማይደገም የቤዛነት ሥራ ነው።
          </Text>

          <Text style={styles.paragraph}>
            የክርስቶስ ደም ፍጹም በመሆኑ ምክንያት፣ በብሉይ ኪዳን ይፈለግ የነበረውን የመከራና የሞት ፍርድ አስወግዷል። በክርስቶስ ደም ለሚያምኑ ሁሉ የጽድቅና የሕይወት መንገድ ተከፍቷል፤ ከእንግዲህ የብሉይ ኪዳን ፍርድ በላያቸው ላይ ሥልጣን የለውም። የእርሱ ደም የመንጻት፣ የቅድስናና ከእግዚአብሔር ጋር የመታረቅ ምንጭ ነው።
          </Text>
        </View>

        {/* የክህነት ሥርዓት አስታራቂ ፡ የብሉይና የሐዲስ ትስስር */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የክህነት ሥርዓት አስታራቂ ፡ የብሉይና የሐዲስ ትስስር</Text>
          </View>

          <Text style={styles.paragraph}>
            የክርስቶስ አስታራቂነት በብሉይና በሐዲስ ኪዳን መካከል ባለው የክህነት ሥርዓት ልዩነት ላይም የመጨረሻው መፍትሔ ነው። የብሉይ ኪዳን ክህነት (የአሮን ክህነት) በዘር የሚተላለፍ፣ ጊዜያዊና በሞት የሚቋረጥ ነበር። ካህናቱ ለራሳቸውም ለሕዝቡም ያለማቋረጥ መስዋዕት የሚያቀርቡት፣ ፍጹም የሆነ የኃጢአት ስርየትን ማምጣት ባለመቻላቸው ነው።
          </Text>

          <Text style={styles.paragraph}>
            የክርስቶስ ክህነት ግን እንደ መልከ ጼዴቅ ሥርዓት ዘለዓለማዊና የማይለወጥ ነው። እርሱ ራሱ ካህን፣ መስዋዕትና መሠዊያ ነው። በመሆኑም፣ በብሉይ ኪዳን የነበረውን የክህነት አገልግሎት ፍጹም በሆነ መንገድ ፈጸመውና፣ በአዲስ ኪዳን ደግሞ በቤተክርስቲያን በኩል የሚሠራ ዘለዓለማዊ የክህነት ሥርዓትን መሠረተ። ይህም ክህነት የኃጢአትን ስርየት የመስጠት፣ የቅዱስ ቁርባንን የመፈጸምና ሰዎችን ወደ እግዚአብሔር የማቅረብ ሥልጣን አለው።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ ቄርሎስ ዘእስክንድርያ እንዳለው፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ የሁለቱም ኪዳናት ፍጻሜ ነው፤ እርሱ የብሉይን ትንቢቶች ፈጸመ፣ የአዲሱንም ኪዳን መሠረት ጣለ።»</Text>
          </View>

          <Text style={styles.paragraph}>
            እርሱ ባይወለድና የሕይወት መንገድ ባይሆን ኖሮ፣ የብሉይን ቅዱሳን ከሐዲስ ኪዳን ቅዱሳን የሚያገናኝ፣ የሁለቱንም ኪዳናት ቃልኪዳንና ተስፋ ወደ ፍጻሜ የሚያመጣ ማንም አይኖርም ነበር። በመሆኑም፣ የእርሱ አስታራቂነት የሁለንተናዊነትና የዘመናትን ሁሉ የማገናኘት ባሕርይ አለው።
          </Text>
        </View>

        {/* ብቸኛ አስታራቂነት ፡ የክርስቶስ ልዩ ማንነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ብቸኛ አስታራቂነት ፡ የክርስቶስ ልዩ ማንነት</Text>
          </View>

          <Text style={styles.paragraph}>
            በአጭር ቃል አስታራቂ ማለት ወልድ ዋህድ ማለት እንጂ አማላጅ ማለት አይደለም። ክርስቶስ ብቸኛ አስታራቂ ነው። ይህ ማለት፣ ከእርሱ ውጪ ማንም በፍጹም ኃጢአትን ሊያስተሰርይ፣ የጥል ግድግዳን ሊያፈርስ፣ ወይም የዘለዓለም ሕይወትን ሊሰጥ አይችልም። የእርሱ አስታራቂነት በመለኮታዊ ባሕርዩ ላይ የተመሠረተ ባሕርያዊና አዳኝነት ሲሆን፣ የቅዱሳን አማላጅነት ደግሞ በክርስቶስ በተገኘው ድኅነት ላይ የተመሠረተ ጸጋዊና ምልጃዊ ነው።
          </Text>

          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የምትስተምረው ክርስቶስ ብቸኛና ፍጹም አስታራቂ መሆኑን ነው። ነገር ግን፣ ቅዱሳን የእግዚአብሔር ወዳጆች ስለሆኑ፣ ወደ እግዚአብሔር በጸሎት ቀርበው ለእኛ ሊያማልዱ ይችላሉ። ይህ ምልጃ የኃጢአት ስርየትን የሚሰጥ ሥልጣን ሳይሆን፣ የእግዚአብሔርን ምሕረት በጸሎት የሚለምን ልመና ነው። አስታራቂነት የክርስቶስን መለኮታዊና ሰብአዊ ባሕርይ በአንድነት የሚያመለክት ሲሆን፣ ምልጃ ደግሞ በፍጡራን ዘንድ በጸጋ የተሰጠ የጸሎት አገልግሎት ነው።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ ዮሐንስ አፈወርቅ እንደገለጸው፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ ብቸኛ አስታራቂ ነው፤ እርሱ የኃጢአትን ዋጋ ከፍሏልና። ቅዱሳን የሚማልዱት በክርስቶስ በኩል ነው፣ እርሱ የኃይል ምንጭ ነውና።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ የሚያሳየው፣ የክርስቶስ አስታራቂነት የመዳን ምንጭና መሠረት መሆኑን ነው። የቅዱሳን ምልጃ በክርስቶስ በተገኘው ድኅነት ላይ የተመሠረተ እንጂ፣ ከራሳቸው ችሎታ የመነጨ አይደለም።
          </Text>
        </View>

        {/* የአስታራቂነት ፍጻሜ ፡ የኃጢአት ሸክም መወገድ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የአስታራቂነት ፍጻሜ ፡ የኃጢአት ሸክም መወገድ</Text>
          </View>

          <Text style={styles.paragraph}>
            የክርስቶስ አስታራቂነት ሥራ፣ የሰው ልጅን ከኃጢአት ሸክም ነፃ በማውጣት ፍጻሜውን አግኝቷል። እርሱ አንድ ጊዜ ለዘለዓለም ራሱን መስዋዕት በማድረግ፣ ሞትን በሞቱ ደምስሶ፣ የሰውንም ኃጢአት አስወግዷል። ይህ ማለት፣ የኃጢአት ግድግዳ ፈርሷል፣ የሰላም መንገድ በክርስቶስ በኩል ተከፍቷል፣ እና አማኞች በቀጥታና በልበ ሙሉነት ወደ እግዚአብሔር ዙፋን መቅረብ ይችላሉ።
          </Text>

          <Text style={styles.paragraph}>አስታራቂነት የክርስቶስ የመለኮትና የትስብእት ተዋሕዶ ውጤት እንደሆነ ሊቃውንት ያስተምራሉ።</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ አስታራቂ ነው፣ ምክንያቱም እርሱ አምላክና ሰው ነው። በአምላክነቱ ከእግዚአብሔር ጋር አንድ ነው፤ በሰውነቱ ደግሞ ከእኛ ጋር አንድ ነው።»</Text>
          </View>

          <Text style={styles.paragraph}>
            በመሆኑም፣ እርሱ ብቻ ነው ፍጹም በሆነ መንገድ እግዚአብሔርንና ሰውን ሙሉ በሙሉ የሚያገናኘው።
          </Text>

          <Text style={styles.paragraph}>
            የክርስቶስ የአስታራቂነት ፍጻሜ የሚያረጋግጠው፣ የድኅነት ሥራው ፍጹምና ሙሉ መሆኑን ነው። አዲስ ኪዳን የመጨረሻውን የድኅነት ቃልኪዳን ስለሚያረጋግጥ፣ አማኞች ከእንግዲህ ለኃጢአት ስርየት ሌላ መስዋዕት ወይም ሌላ መካከለኛ አያስፈልጋቸውም። ይህ እውነት ለክርስቲያኖች ሁሉ የጽኑ ተስፋና የዘለዓለም ሕይወት ማረጋገጫ ነው።
          </Text>
        </View>

        {/* ማጠቃለያ ፡ የክርስቶስ አስታራቂነት ፍጹምነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ ፡ የክርስቶስ አስታራቂነት ፍጹምነት</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ በእግዚአብሔርና በሰው መካከል ያለው ብቸኛ አስታራቂ ነው። ይህ አስታራቂነት በሁለት ባሕርያት አንድነቱ (ፍጹም አምላክና ፍጹም ሰው መሆኑ)፣ በመስቀል ላይ ባፈሰሰው የከበረ ደሙ፣ እና በአዲስ ኪዳን መሥራችነቱ ላይ የተመሠረተ ነው። እርሱ የኃጢአትን ግድግዳ ያፈረሰ፣ የብሉይን ኪዳን የፈጸመ፣ የአዲሱን ኪዳን የመሠረተ፣ እና የዘለዓለም ሕይወትን የሰጠ ነው። ይህ የወልድ ዋህድ አስተምህሮ ማዕከላዊ ትውፊት ነው።
          </Text>

          <Text style={styles.paragraph}>
            የክርስቶስ አስታራቂነት ፍጹም፣ ብቸኛና የማይተካ ነው። ይህ እውነት የክርስትና እምነት መሠረት ሲሆን፣ የድኅነታችንን እውነታና የክርስቶስን ልዩ ማንነት ያረጋግጣል። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ይህንን እውነት በጽኑ የዶግማ አስተምህሮዋ ስትጠብቅ ኖራለች። የክርስቶስን አስታራቂነት በትክክል መረዳት፣ የእግዚአብሔርን ፍቅር፣ ፍትሕና ምሕረትን በጥልቀት እንድንረዳ ያስችለናል።
          </Text>

          <Text style={styles.paragraph}>
            ክርስቶስ የዓለም ሁሉ ፈጣሪ፣ አዳኝና ገዢ እንደመሆኑ መጠን፣ ለእርሱ ብቻ የማይለወጥ ክብር፣ ውዳሴና አምልኮ ይገባል። ይህ የዘለዓለም እውነት በቤተክርስቲያን ውስጥ ሲሰበክና ሲከበር ይኖራል፤ የክርስቲያኖችም የጽኑ እምነት፣ የብሩህ ተስፋና የመለኮታዊ ፍቅር ማረጋገጫ ሆኖ ይቀጥላል።
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#004D40', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  sectionBox: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: '#E0E0E0', 
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  headingRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  verticalBar: { 
    width: 4, 
    height: 18, 
    backgroundColor: '#004D40', 
    borderRadius: 2, 
    marginRight: 8 
  },
  sectionHeading: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#004D40', 
    flex: 1 
  },
  paragraph: { 
    fontSize: 14.5, 
    color: '#333333', 
    lineHeight: 24, 
    marginBottom: 10,
    textAlign: 'justify'
  },
  boldText: { 
    fontWeight: 'bold', 
    color: '#004D40' 
  },
  quoteBox: { 
    backgroundColor: '#E0F2F1', 
    borderLeftWidth: 4, 
    borderLeftColor: '#00796B', 
    padding: 12, 
    marginVertical: 10, 
    borderRadius: 6 
  },
  quoteText: { 
    fontSize: 14, 
    fontStyle: 'italic', 
    color: '#004D40', 
    fontWeight: '600',
    textAlign: 'center'
  }
});