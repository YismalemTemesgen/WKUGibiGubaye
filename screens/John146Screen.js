import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function John146Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>በእኔ በቀር ወደ አብ የሚመጣ የለም [ዮሐ 14:6]</Text>
        
        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ የሥላሴን አካላት የማይነጣጠል አንድነትና የጌታችን የኢየሱስ ክርስቶስን መለኮታዊ ማንነት በጽኑ ታስተምራለች። ከዚህም መካከል በዮሐንስ ወንጌል 14:6 ላይ የሚገኘው የጌታችን የራሱ ቃል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ኢየሱስም፦ እኔ መንገድና እውነት ሕይወትም ነኝ፤ በእኔ በቀር ወደ አብ የሚመጣ የለም።»</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለው አገላለጽ፣ የክርስቶስን ብቸኛነትና የድኅነት ሥራውን የሚገልጥ ቁልፍ ጥቅስ ነው። ይህ ቃል ጌታችን ለመንፈስ ቅዱስ መምጣት፣ ስለ መንግሥተ ሰማያትና ስለ ራሱ መለኮታዊ ማንነት ሲናገር፣ ሐዋርያው ቶማስ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ወደምትሄድበት አናውቅም መንገዱንስ እንዴት እናውቃለን?» (ዮሐንስ 14:5)</Text>
          </View>

          <Text style={styles.paragraph}>
            ብሎ ለጠየቀው ጥያቄ የተሰጠ የፍጹምነት ምላሽ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ይህ ታላቅ መለኮታዊ መግለጫ፣ ክርስቶስን ወደ አብ የሚወስድ አሳላፊ ወይም አማላጅ ብቻ አድርጎ የሚያስቡትን ትርጓሜዎች በሙሉ በጥብቅ ውድቅ ያደርጋል። የቃል አጠቃቀሙና አውዱ የሚያሳየው፣ ጌታችን የድኅነትን ሥራ ከራሱ ሥልጣንና ባሕርይ የመነጨ አድርጎ መግለጹን ነው። እርሱ ራሱ መንገድ ነው፣ ማለትም ወደ አብ የመድረሻው ሥርዓት፣ እውነት ነው፣ ማለትም የአብ ፍጹም መገለጫ፣ እንዲሁም ሕይወት ነው፣ ማለትም የዘለዓለም ሕይወት ሰጪና ምንጭ ነው። ይህ የማይነጣጠል የሶስትዮሽ ማንነት ፍቺ፣ የክርስቶስን ፍጹም አምላክነት የሚያረጋግጥ እንጂ፣ በመለኮትና በሰው መካከል ቆሞ ወደ አብ የሚያመለክት ተራ መካከለኛ አያደርገውም።
          </Text>

          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ከጥንት ሐዋርያዊ ትውፊት ጀምሮ ስትጠብቀው በመጣችው የተዋሕዶ ቀኖናዊ ትምህርት መሠረት፣ ክርስቶስ ሁለት ፍጹም ባሕርያትን (መለኮትና ሰውነት) በአንድ አካልና በአንድ ባሕርይ ያለመቀላቀል፣ ያለመለወጥ፣ ያለመለያየትና ያለመከፋፈል የዋሐደ ነው። ስለዚህ፣ እርሱ ወደ አብ የምንቀርብበት ብቸኛ መንገድ ሲሆን፣ ይህ መንገድ የእርሱ መለኮትነቱና ሰብዓዊነቱ በፍጹም አንድነት በመዋሐዳቸው የተገኘ አዲስ ሕይወት ነው። የዚህ ጥቅስ ጥልቅ ትርጓሜ፣ የክርስቶስን ፍጹምነትና የድኅነትን ሥራ ያለማንም እርዳታ የመፈጸም መለኮታዊ ሥልጣን እንዳለው ያረጋግጣል።
          </Text>
        </View>

        {/* ' እኔ መንገድና እውነት ሕይወትም ነኝ ' - የክርስቶስ ፍጹም ማንነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>«እኔ መንገድና እውነት ሕይወትም ነኝ» - የክርስቶስ ፍጹም ማንነት</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን ኢየሱስ ክርስቶስ ራሱን መንገድና እውነት ሕይወትም ነኝ በማለት መግለጹ፣ እርሱ ከቀላል ነቢይነት ወይም መሪነት በላይ፣ ራሱ የመዳንና ወደ እግዚአብሔር የመድረስ ምንጭ መሆኑን ያመለክታል። ይህ ሦስቱ ማዕከላዊ የሆኑ ቃላት የተዋሕዶ ክርስቶስን ማንነት ይገልጻሉ፤ የእያንዳንዱ ቃል ትርጉም በክርስቶስ መለኮታዊ ባሕርይ ላይ የተመሰረተ ነው። የእግዚአብሔር ልጅ ለሰው ልጆች ድኅነት ሲል፣ በመዋሐድ መለኮታዊ ባሕርዩን አልቀነሰም፤ ይልቁንም፣ ሰብዓዊ ፍጥረትን ወደ ፍጹምነት አምጥቶ ወደ አብ የምንቀርብበትን መንገድ ከፈተ።
          </Text>

          <Text style={styles.paragraph}>
            ይህ የክርስቶስ ማንነት መገለጫ፣ አማላጅነትን ከሚያመለክት ይልቅ፣ ፍጹም አምላክነቱንና የድኅነትን ሥራ ያለማንም እርዳታ በራሱ የመፈጸም ሥልጣን እንዳለው ያረጋግጣል። በቤተክርስቲያናችን ትምህርት፣ ክርስቶስ ሊያመላክት የሚችል አካል ሳይሆን፣ ራሱ መድረሻው ነው። የድኅነቱ ምሥጢር በአንድነቱ ውስጥ ስለሆነ፣ ወደ አብ መቅረብ ማለት በወልድ መለኮታዊና ሰብዓዊ ባሕርያት በተዋሐዱበት አንድነት ውስጥ መካፈል ማለት ነው።
          </Text>

          <Text style={styles.paragraph}>
            ቅዱስ ቄርሎስ ዘእስክንድርያ እንዳስተማረው፣ ወደ አብ የሚመጣበት ብቸኛው መንገድ ወልድ ነው፣ እርሱ ራሱ የእግዚአብሔርን እውቀትና ሕይወትን ለሰው ልጆች የሚያመጣ ነው። ይህ የሚያረጋግጠው፣ ክርስቶስ አማላጅ ሆኖ ወደ አብ የሚመጣበትን መንገድ የሚያሳይ ሳይሆን፣ የፈጠረውንና ራሱ የሆነውን አዲስና ሕያው መንገድ የሚሰጥ አምላክ መሆኑን ነው።
          </Text>
        </View>

        {/* ' እኔ መንገድ ነኝ ' - የባሕርያት ተዋሕዶ ምሥጢር */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>«እኔ መንገድ ነኝ» - የባሕርያት ተዋሕዶ ምሥጢር</Text>
          </View>

          <Text style={styles.paragraph}>
            ክርስቶስ መንገድ ነኝ ሲል፣ ወደ አብ ለመድረስ የሚያስችል ብቸኛና ፍጹም መንገድ መሆኑን ይገልጻል። እርሱ በቀላሉ ወደ አብ የሚያመለክት ወይም የሚያመላክት ሳይሆን፣ ራሱ ያ መንገድ ነው። የሰው ልጅ በኃጢአት ምክንያት ከእግዚአብሔር ተለይቶ ነበርና፣ የድኅነት መንገድ ሊከፈት የሚችለው በእግዚአብሔር ኃይል ብቻ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ጌታችን ሥጋን በመልበስና በመስቀል ላይ በመሞት፣ በእግዚአብሔርና በሰው መካከል የነበረውን የኃጢአት ግንብ አፍርሶ፣ ወደ አብ የምንቀርብበትን አዲስና ሕያው መንገድ ከፍቷል። ቅዱስ ጳውሎስ እንዲህ ይላል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እንግዲህ፥ ወንድሞች ሆይ፥ በኢየሱስ ደም ወደ ቅድስት ስፍራ ለመግባት ድፍረት ስላለን፥ ወደ መጋረጃው ማለት ወደ ሥጋው በአዲስና በሕያው መንገድ።» (ዕብራውያን 10:19-20)</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ የሚያሳየው፣ መንገዱ የክርስቶስ ሥጋ መሆኑን ነው። ሥጋው ደግሞ ከመለኮት ጋር በፍጹምነት የተዋሐደ በመሆኑ፣ ወደ አብ የምንደርስበት መንገዱ እርሱ ራሱ ሲሆን፣ የሰው ልጅ በእግዚአብሔር ልጅ ሰብዓዊነት ውስጥ በመካፈል ወደ መለኮትነት ያድጋል።
          </Text>

          <Text style={styles.paragraph}>
            የቅዱስ አትናቴዎስ ትምህርትም እርሱ መንገድ ነው፣ ምክንያቱም በእርሱ አማካኝነት ብቻ ነው ወደ አብ የምንቀርበው በማለት፣ የክርስቶስን ልዩና ብቸኛ የመዳን መንገድ መሆኑን ያጎላል። ይህ ብቸኛ መንገድነት የክርስቶስን ፍጹም አምላክነት እና በድኅነት ሥራ ውስጥ ማንም ሊጋራው የማይችል ሥልጣን እንዳለው ያረጋግጣል።
          </Text>
        </View>

        {/* ' እኔ እውነት ነኝ ' - የመለኮታዊ ቃል (ሎጎስ) መገለጥ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>«እኔ እውነት ነኝ» - የመለኮታዊ ቃል (ሎጎስ) መገለጥ</Text>
          </View>

          <Text style={styles.paragraph}>
            ክርስቶስ እውነት ነኝ ሲል፣ እርሱ የፍጹም እውነት ምንጭና መገለጫ መሆኑን ይገልጻል። የእርሱ ማንነት ስለ እግዚአብሔር፣ ስለ ሰው ልጅ እና ስለ ድኅነት ያለውን እውነት ሁሉ የያዘ ነው። እርሱ ስለ አብ የሚመሰክር ብቻ ሳይሆን፣ ራሱ አብን ፍጹም በሆነ መንገድ የገለጠ ቃል (ሎጎስ) ነው።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ ዮሐንስ ወንጌላዊ እንደመሰከረው፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ቃልም ሥጋ ሆነ፤ ጸጋንና እውነትንም ተመልቶ በእኛ አደረ።» (ዮሐንስ 1:14)</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ የሚያሳየው፣ ክርስቶስ እውነትን የሚያስተምር ብቻ ሳይሆን፣ ራሱ እውነት መሆኑን ነው። በብሉይ ኪዳን እግዚአብሔር የእውነት አምላክ (መዝሙር 30:5) ተብሎ እንደተገለጸው፣ ወልድም ይህንን መለኮታዊ ባሕርይ በራሱ የያዘ ነው። ስለዚህ በእርሱ የአብ እውነት ሙሉ በሙሉ ተገልጧል፣ ፍጡር የሆነ አካል ሊሰጠው የሚችል የባሕርይ ገንዘብም አይደለም።
          </Text>

          <Text style={styles.paragraph}>
            ቅዱስ ዮሐንስ አፈወርቅ ክርስቶስ ራሱ እውነት ነው፣ ምክንያቱም እርሱ የእግዚአብሔር ቃል ነው፣ በእርሱም እግዚአብሔር ለሰው ልጆች ሁሉን ገልጧል በማለት፣ ክርስቶስን ከቀላል ነቢይነት ወይም አስተማሪነት በላይ፣ የመለኮታዊ እውነት ፍጹም መገለጫ መሆኑን ያረጋግጣል። እርሱ በብሉይ ኪዳን በምሳሌና በጥላ የተሰጡትን ትንቢቶች በሙሉ የፈጸመና የእግዚአብሔርን ፍጹም ፈቃድ ለሰው ልጆች የገለጠ አምላክ ነው።
          </Text>
        </View>

        {/* ' እኔ ሕይወትም ነኝ ' - የዘለዓለም ሕይወት ምንጭ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>«እኔ ሕይወትም ነኝ» - የዘለዓለም ሕይወት ምንጭ</Text>
          </View>

          <Text style={styles.paragraph}>
            ክርስቶስ ሕይወት ነኝ ሲል፣ እርሱ የዘለዓለም ሕይወት ምንጭና ሰጪ መሆኑን ይገልጻል። የድኅነት ፍጻሜ የዘለዓለም ሕይወትን ማግኘት ከሆነ፣ ክርስቶስ ራሱ ሕይወት በመሆኑ፣ ወደ ሕይወት የሚያመራ አማላጅ ሳይሆን፣ ራሱ ሕይወትን የሚሰጥ አምላክ ነው።
          </Text>

          <Text style={styles.paragraph}>ጌታችን በዮሐንስ ወንጌል ላይ፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«አብ ሙታንን እንደሚያነሣ ሕይወትም እንደሚሰጣቸው፥ እንዲሁ ወልድ ደግሞ ለሚወዳቸው ሕይወትን ይሰጣቸዋል።» (ዮሐንስ 5:21)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት፣ ወልድ ከአብ ጋር እኩል ሥልጣን ያለውና ሕይወትን በራሱ የሚሰጥ መሆኑን ያረጋግጣል። ይህም ፍፁም አምላክነቱን፣ ከሞት የማስነሳትና የዘለዓለም ሕይወትን የመስጠት መለኮታዊ ሥልጣን ያለው አምላክ መሆኑን ያስረዳል።
          </Text>

          <Text style={styles.paragraph}>
            የክርስቶስን መለኮታዊ ሥልጣን በተመለከተ፣ «እኔም የዘላለም ሕይወትን እሰጣቸዋለሁ፥ ለዘላለምም አይጠፉም፥ ከእጄም ማንም አይነጥቃቸውም» (ዮሐንስ 10:28) የሚለው ቃል የዘለዓለም ሕይወት ሰጪነት ማረጋገጫ ነው። ቅዱስ ኢሬኔዎስ እንዳስተማረው፣ ክርስቶስ ሕይወት ነው፣ ምክንያቱም እርሱ የሕይወት ቃል ነው፣ እናም በእርሱ አማካኝነት ነው የማይጠፋው ሕይወት ለሰው ልጆች የተሰጠው። ይህ የሚያሳየው፣ የእርሱ ሥራ ሕይወትን ማስገኘት እንጂ፣ ወደ ሕይወት ሰጪ አካል መማለድ አለመሆኑን ነው።
          </Text>
        </View>

        {/* ' በእኔ በቀር ወደ አብ የሚመጣ የለም ' -  የሥላሴ የአንድነት ምሥጢር */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>«በእኔ በቀር ወደ አብ የሚመጣ የለም» - የሥላሴ የአንድነት ምሥጢር</Text>
          </View>

          <Text style={styles.paragraph}>
            በእኔ በቀር ወደ አብ የሚመጣ የለም የሚለው የጌታችን ቃል፣ የሥላሴ አካላትን የማይነጣጠል አንድነትና እርስ በርስ መተላለፍ የሚያሳይ ነው። ይህም የሚያመለክተው ወልድ የአብን ማንነትና ባሕርይ ሙሉ በሙሉ ገላጭ መሆኑን ነው፤ ወደ አብ ለመቅረብ ወልድን ማወቅና በእርሱ ማመን የግድ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ክርስቶስን ብቸኛ መንገድ የሚያደርገው፣ በሰውነቱ ምክንያት ወደ አብ የሚመራ አማላጅ መሆኑ ሳይሆን፣ በመለኮትነቱና በሰብዓዊነቱ ተዋሕዶ አማካኝነት የሰው ልጆች ከመለኮት ጋር እንዲዋሐዱ ማድረጉ ነው። ወልድ የአብን ፍፁም ባሕርይ ስለሚካፈል፣ እርሱን ማወቅ ማለት የአብን ማወቅ ማለት ነው፤ እርሱን ያየ አብን አይቷል።
          </Text>

          <Text style={styles.paragraph}>
            ጌታችን በሥጋ በመገለጡ ነው አብን እንደ አባት፣ ራሱንም እንደ ልጅ፣ መንፈስ ቅዱስንም እንደ መንፈስ ቅዱስ ያወቅነው። ስለዚህ ይህ አገላለጽ ወደ አብ ለመድረስ ያለው ብቸኛ መዳረሻ ወልድ መሆኑን የሚያሳይ፣ የክርስቶስን መለኮታዊ የብቸኝነት ሥልጣን የሚያረጋግጥ ነው።
          </Text>
        </View>

        {/* የአብ ፍጹም መገለጥ በወልድ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የአብ ፍጹም መገለጥ በወልድ</Text>
          </View>

          <Text style={styles.paragraph}>ቅዱስ ዮሐንስ ወንጌላዊ፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«መቼም ቢሆን እግዚአብሔርን ያየው አንድ ስንኳ የለም፤ በአባቱ እቅፍ ያለ አንድ ልጁ እርሱ ተረከው።» (ዮሐንስ 1:18)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት ይመሰክራል። ተረከው የሚለው ቃል ገለጠው ወይም አብራራው ማለት ሲሆን፣ ወልድ የአብን ማንነት ሙሉ በሙሉ የገለጠ ብቸኛ አካል መሆኑን ያረጋግጣል።
          </Text>

          <Text style={styles.paragraph}>ጌታችን ራሱ ለሐዋርያቱ፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እኔን ብታውቁኝ አባቴን ደግሞ ባወቃችሁ ነበር፤ ከአሁንም ጀምሮ ታውቁታላችሁ አይታችሁትማ» (ዮሐንስ 14:7)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት የሁለቱን አካላት ፍጹም አንድነት አስረድቷል። የአብና የወልድ ባሕርያት አንድነት ፍጹም ከመሆኑ የተነሳ፣ ወልድን ያየ አብን ያየ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ቅዱስ ባስልዮስ ዘቂሳርያ እንዳስተማረው፣ ወልድ የአብ ፍጹም ምሳሌና መገለጫ ነው፤ አብን ማወቅ የሚቻለው በወልድ በኩል ብቻ ነው። ይህም የሚያሳየው፣ ወልድ ወደ አብ የሚመጣበትን መንገድ የሚያመላክት ሳይሆን፣ ራሱ የአብን መገለጥ፣ የባሕርይና የሥልጣን እኩልነት ያለው አካል መሆኑን ነው።
          </Text>
        </View>

        {/* የመንፈስ ቅዱስ ስጦታ በወልድ በኩል */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የመንፈስ ቅዱስ ስጦታ በወልድ በኩል</Text>
          </View>

          <Text style={styles.paragraph}>
            የሥላሴ አንድነት የሚረጋገጠው በወልድ በኩል ወደ አብ መቅረብ ብቻ ሳይሆን፣ የመንፈስ ቅዱስን ማንነትና ሥራ የገለጠልንም እርሱ በመሆኑ ነው። ጌታችን ለደቀ መዛሙርቱ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«አብ በስሜ የሚልከው ግን መንፈስ ቅዱስ የሆነው አጽናኝ እርሱ ሁሉን ያስተምራችኋል እኔም የነገርኋችሁን ሁሉ ያሳስባችኋል» (ዮሐንስ 14:26)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት የመንፈስ ቅዱስን የመላክ ኃይል በአብና በራሱ ስም መሆኑን አረጋግጧል። እንዲሁም ጌታችን፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ዳሩ ግን እኔ ከአብ ዘንድ የምልክላችሁ አጽናኝ እርሱም ከአብ የሚወጣ የእውነት መንፈስ በመጣ ጊዜ፥ እርሱ ስለ እኔ ይመሰክራል» (ዮሐንስ 15:26)</Text>
          </View>

          <Text style={styles.paragraph}>ብሏል። እነዚህ ጥቅሶች የመንፈስ ቅዱስ ከአብ መውጣቱንና በወልድ በኩል መላኩን ያረጋግጣሉ።</Text>

          <Text style={styles.paragraph}>
            መንፈስ ቅዱስም ስለ ወልድ ይመሰክራል፤ ይህም የሥላሴ አካላት በድኅነት ሥራ ውስጥ ያላቸውን ፍጹም ትስስር ያሳያል። የድኅነት ጸጋ የሚገኘው በወልድ በኩል ሲሆን፣ የመንፈስ ቅዱስም ሥራ የክርስቶስን ሥራና ትምህርት በቤተክርስቲያን ውስጥ ማስቀጠል ነው።
          </Text>
        </View>

        {/* አማላጅነትን የሚመለከት የተሳሳተ ትርጓሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>አማላጅነትን የሚመለከት የተሳሳተ ትርጓሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            በእኔ በቀር ወደ አብ የሚመጣ የለም የሚለው ቃል የክርስቶስን አማላጅነት ያመለክታል የሚለው ትርጓሜ፣ ከኦርቶዶክሳዊ ነገረ ክርስቶስ ጋር የሚጋጭና የክርስቶስን ፍጹም አምላክነት የሚቀንስ ነው። አማላጅነት ማለት አንድ አካል በሁለት ተለያይተው ባሉ ወገኖች መካከል ሆኖ አንዱን ወገን ለሌላው መማለድ ማለት ነው። ነገር ግን ክርስቶስ ራሱ አምላክ ሲሆን፣ ከእግዚአብሔር ጋር አንድ ባሕርይ ነው፤ ከሰውም ጋር በአንድ አካል ተዋሕዷል።
          </Text>

          <Text style={styles.paragraph}>
            መጽሐፍ ቅዱስ ክርስቶስን ሊቀ ካህናት ብሎ ይጠራዋል (ዕብራውያን 4:14-16)፤ ይህ ግን እንደ ኦሪት ካህናት ዘወትር የሚለምን ማለት አይደለም። በመስቀል ላይ ራሱን አንድ ጊዜ መሥዋዕት አድርጎ ያቀረበ ሠዋዒም ተሠዋዒም፣ ከአብና ከመንፈስ ቅዱስ ጋር መሥዋዕቱን ተቀባይም እርሱ ራሱ ነው። ቅድስት ቤተ ክርስቲያን ምልጃው የምትለው ይህ የአንድ ጊዜ ቤዛነቱ ነው እንጂ የልመና ጸሎት አይደለም። እርሱ ከሁለት ወገን እኩል የባሕርይ ርቀት ያለው አማላጅ ሳይሆን፣ ራሱ መለኮታዊውንና ሰብዓዊውን ባሕርይ በፍጹምነት የዋሐደ አምላክ በመሆኑ፣ ወደ አብ የምንቀርብበት ሕያው መንገድ ሆኗል፤ ምልጃው የተባለውም ይህ በገዛ ደሙ የፈጸመው የቤዛነት ሥራው ነው እንጂ ልመና አይደለም።
          </Text>

          <Text style={styles.paragraph}>
            ስለዚህ፣ ጌታችን ራሱን መንገድ ብሎ ከገለጸ በኋላ በእኔ በቀር ወደ አብ የሚመጣ የለም ማለቱ፣ ወደ አብ የሚያመለክት መካከለኛ ሳይሆን፣ ራሱ የመዳንና የመድረሻ ምንጭ መሆኑን የሚያረጋግጥ ነው። እርሱ በሥጋ ለባሽነቱ በሰውና በአብ መካከል ድልድይ ሲሆን፣ ይህ ድልድይ የመለኮት ቃል በሥጋ የመገለጥ ታላቅ ምሥጢር ነው።
          </Text>
        </View>

        {/* የክርስቶስ መለኮታዊ ሥልጣን (አማላጅነት አይደለም) */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የክርስቶስ መለኮታዊ ሥልጣን (አማላጅነት አይደለም)</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን ራሱን ሕይወት ብሎ ከገለጸ በኋላ በእኔ በቀር ወደ አብ የሚመጣ የለም ማለቱ፣ የአማላጅነትን ሚና ብቻ እንደማይጫወት ያሳያል። አማላጅነት ሕይወትን የሚሰጥን ሳይሆን፣ ሕይወት ወደሚሰጥ አካል የሚያመላክት ነው። ሆኖም ዮሐንስ 5:21 ላይ ወልድ ሕይወትን እንደሚሰጣቸው በአብ ላይ ያለውን እኩል ሥልጣን አረጋግጧል።
          </Text>

          <Text style={styles.paragraph}>
            ወልድ ሕይወትን የመስጠት ሥልጣን ካለው፣ እርሱ ራሱ ሕይወት ሰጪ ከሆነ፣ ወደ ሕይወት የሚመራ አማላጅ አያስፈልገውም። «እኔም የዘላለም ሕይወትን እሰጣቸዋለሁ፥ ለዘላለምም አይጠፉም፥ ከእጄም ማንም አይነጥቃቸውም» (ዮሐንስ 10:28) የሚለው ጥቅስ የመለኮታዊ ሥልጣኑንና የዘለዓለም ሕይወት ሰጪነቱን ፍጹምነት የሚያሳይ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ስለዚህ በእኔ በቀር ወደ አብ የሚመጣ የለም የሚለው ቃል፣ የክርስቶስን የድኅነትን ሥራ የመፈጸም ብቸኛ መለኮታዊ ሥልጣን ያረጋግጣል። ወደ አብ ለመቅረብ የክርስቶስን መንገድነት መቀበል ማለት፣ በመለኮታዊ ማንነቱና በሰብዓዊ ሥራው ሙሉ በሙሉ ማመን ማለት ነው።
          </Text>
        </View>

        {/* ' አብ ከሳበው በቀር... ' - የሥላሴ የድኅነት ትብብር */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>«አብ ከሳበው በቀር...» - የሥላሴ የድኅነት ትብብር</Text>
          </View>

          <Text style={styles.paragraph}>
            አንዳንድ ሰዎች በእኔ በቀር ወደ አብ የሚመጣ የለም የሚለውን ጥቅስ አማላጅነትን ለማረጋገጥ ሲጠቀሙ፣ ዮሐንስ 6:44 ላይ ያለውን «አብ ከሳበው በቀር ወደ እኔ ሊመጣ የሚችል የለም» የሚለውን ጥቅስ ችላ ይላሉ። ይህንን ጥቅስ በጥሬው ከተረጎምነው፣ አብም ወደ ወልድ የሚመራ አማላጅ ነው ልንል ነው፤ ይህም የሥላሴን አካላት አንድነትና እኩልነት ይጥሳል።
          </Text>

          <Text style={styles.paragraph}>
            ይልቁንም፣ ይህ ጥቅስ የሚያሳየው፣ ወደ ወልድ መምጣት የአብን መሳብ (መለኮታዊ ጥሪ) እንደሚፈልግ ነው። ይህ የሥላሴ አካላት በድኅነት ሥራ ውስጥ ያላቸውን ፍጹም ትብብር ያመለክታል። አብ ይስባል፣ ወልድ ያድናል፣ መንፈስ ቅዱስ ያጸድቃል። ይህ መሳብ አማላጅነት ሳይሆን፣ የሥላሴ የመዳን ዕቅድ አካል ነው። አብ ወልድን ወደ እርሱ እንዲመጣ አይለምነውም፤ ይልቁንም፣ በራሱ መለኮታዊ ኃይል ሰዎችን ወደ ወልድ ይስባል።
          </Text>

          <Text style={styles.paragraph}>
            ስለዚህ፣ በእኔ በቀር ወደ አብ የሚመጣ የለም እና አብ ከሳበው በቀር ወደ እኔ ሊመጣ የሚችል የለም የሚሉት አገላለጾች የማይነጣጠሉ ናቸው፤ ሁለቱም የሥላሴን አንድ የድኅነት ፈቃድና ሥራ ያረጋግጣሉ። ወደ አብ የሚወስደው መንገድ ወልድ ብቻ ሲሆን፣ ወደ ወልድ የሚወስደው ኃይል ደግሞ የአብ መሳብ ነው። ይህ የሚያረጋግጠው የክርስቶስን ብቸኛነትና መለኮታዊ ሥልጣን እንጂ፣ ወደ አብ የሚያመለክት አማላጅ አለመሆኑን ነው።
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
    color: '#004D40' 
  },
  paragraph: { 
    fontSize: 14.5, 
    color: '#333333', 
    lineHeight: 24, 
    marginBottom: 10,
    textAlign: 'justify'
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