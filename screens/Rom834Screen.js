import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Rom834Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>ስለ እኛ የሚማልደው [ሮሜ 8:34]</Text>
         
        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን የነገረ ሃይማኖት መሠረት፣ በምሥጢረ ሥላሴ አንድነትና ሦስትነት፣ እንዲሁም በምሥጢረ ሥጋዌ (በተዋሕዶ) ላይ የጸና ነው። ሐዋርያው ቅዱስ ጳውሎስ በሮሜ መልእክቱ ምዕራፍ 8 ቁጥር 34 ላይ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የሞተው፥ ይልቁንም ከሙታን የተነሣው፥ በእግዚአብሔር ቀኝ ያለው፥ ደግሞ ስለ እኛ የሚማልደው ክርስቶስ ኢየሱስ ነው»</Text>
          </View>

          <Text style={styles.paragraph}>
            ሲል የተናገረው ቃል፣ በቤተ ክርስቲያኒቱ በሊቃውንት ጉባኤ ሲብራራ፣ ክርስቶስን ከድኅነት በኋላ እንደገና ወደ ድካም ወይም ወደ ልመና የሚመልስ ሳይሆን፣ የድል አድራጊነቱንና የሊቀ ካህናትነቱን ዘለዓለማዊ ክብር የሚያረጋግጥ ነው።
          </Text>

          <Text style={styles.paragraph}>
            በቤተ ክርስቲያናችን አስተምህሮ፣ ይህ ጥቅስ የተፈጸመውን የድኅነት ሥራ የሚያውጅ እንጂ፣ ያልተፈጸመ ነገር ኖሮ በልመና የሚሞላ አይደለም። ሊቃውንቱ እንደሚያስተምሩት፣ የክርስቶስ ምልጃ ከባሕርይ አባቱ ከአብ፣ ከባሕርይ ሕይወቱ ከመንፈስ ቅዱስ ጋር ያለውን የባሕርይ ትክክለኝነት የሚጋፋ አይደለም። ስለዚህ ይህንን ቃል ስንመረምር፣ በመንፈሳዊ ጥንቃቄ፣ በቅዱሳት መጻሕፍትና በአበው ምስክርነት ላይ ተመሥርተን፣ የምዕራባውያንን የሁለት ባሕርይ አስተሳሰብ ወይም የንዑስ ፈጣሪነት ስህተት በመለየት፣ የቃሉን ኦርቶዶክሳዊ ትርጓሜ በጥልቀት እንመለከታለን።
          </Text>
        </View>

        {/* 1. የክርስቶስ የፍርድ ሥልጣንና መለኮታዊ ገዥነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>1. የክርስቶስ የፍርድ ሥልጣንና መለኮታዊ ገዥነት</Text>
          </View>

          <Text style={styles.paragraph}>
            የጥቅሱ መነሻ ሐሳብ የክርስቶስን አምላካዊ ሥልጣን የሚያረጋግጥ ነው። ቅዱስ ጳውሎስ የሚኰንንስ ማን ነው? ሲል ይጠይቃል። መኮነን የሚለው ቃል ከግእዙ ኮነነ የመጣ ሲሆን፣ ትርጉሙም ፈረደ ወይም ገዛ ማለት ነው። ስለሆነም ጥያቄው፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የሚፈርደው ወይም የሚገዛው ማን ነው?»</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚል ሲሆን፣ ምላሹም ክርስቶስ ኢየሱስ መሆኑን ያረጋግጣል። እርሱ ክርስቶስ ገዥ ነው፣ ፈራጅ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ቅዱሳት መጻሕፍት ይህንን የክርስቶስን የፍርድ ሥልጣን በግልጽ ያረጋግጣሉ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>ሮሜ 14:9፦ «ስለዚህ ነገር ሙታንንም ሕያዋንንም ይገዛ ዘንድ ክርስቶስ ሞቶአልና ሕያውም ሆኖአልና»</Text>
          </View>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>2ኛ ጢሞቴዎስ 4:8፦ «ጻድቅ ፈራጅ የሆነው ጌታ ያን ቀን ለእኔ ያስረክባል»</Text>
          </View>

          <Text style={styles.paragraph}>
            ሊቃውንትም ይህንን ሥልጣን ከመለኮታዊ ባሕርይው ጋር አያይዘው ተርጉመውታል። ቅዱስ ቄርሎስ ዘእስክንድርያ እንዲህ ይላል፦ «የሚፈርደው ክርስቶስ ነው፣ ምክንያቱም እርሱ አምላክ ነውና።» ክርስቶስ ፍርድን በሥጋ የፈጸመው በአብ ፈቃድ ብቻ ሳይሆን በገዛ ስልጣኑ ነው፤ ምክንያቱም ወልድ ከፈራጅነት ሥልጣን አንጻር ከአብና ከመንፈስ ቅዱስ ጋር ትክክል ነው።
          </Text>

          <Text style={styles.paragraph}>
            ስለዚህ፣ በሮሜ 8:34 ላይ የተጠቀሰው ክርስቶስ፣ የሚለምን ወይም የሚማጸን ሳይሆን፣ ፍርድን ሁሉ ለወልድ የሰጠ (ዮሐንስ 5:22) ባለ ሥልጣን ፈራጅ መሆኑን ማረጋገጥ ይገባል። ዮሐንስ 5:22፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ነገር ግን አብ ማንንም አይፈርድም፥ ፍርድን ሁሉ ለወልድ ሰጥቶታል እንጂ።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ማጽደቅና መኮነን የፈራጅነት ሥራ እንጂ የአማላጅነት ሥራ አይደለም።
          </Text>
        </View>

        {/* 2. የድኅነት ሥራው ፍጹምነትና አንድ ጊዜ የተፈጸመ መሥዋዕት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>2. የድኅነት ሥራው ፍጹምነትና አንድ ጊዜ የተፈጸመ መሥዋዕት</Text>
          </View>

          <Text style={styles.paragraph}>
            ሐዋርያው «የሞተው፥ ይልቁንም ከሙታን የተነሣው» በማለት የክርስቶስን የድኅነት ሥራ ማዕከላዊ ገጽታዎች ይገልጻል። የክርስቶስ ሞት ለሰው ልጅ ድኅነት መሠረት ነው። ይህ ሞትና ትንሣኤ የክርስቶስን መለኮታዊ ፍቅር እና ሰብአዊ አካል (መስዋዕት) ፍጹም ተዋሕዶ ያረጋግጣል።
          </Text>

          <Text style={styles.paragraph}>
            የክርስቶስ ቤዛነት ተደጋጋሚ ልመናን የሚጠይቅ ጉድለት ያለበት አይደለም። ሮሜ 5:10 እንደሚል፣ «ጠላቶች ሳለን ከእግዚአብሔር ጋር በልጁ ሞት ታረቅን» እርቁ የተፈጸመው በሞቱ ነው። ይህ የታረቅንበት ሞቱ ደግሞ አንድ ጊዜ ለዘላለም የተደረገ የቤዛነት ሥራ በመሆኑ፣ እስከ መጨረሻው ቀን ድረስ የሚያምኑ ሁሉ የሚታረቁበት አንድ ጊዜ የተፈጸመ ሕያው አገልግሎት ነው።
          </Text>

          <Text style={styles.paragraph}>መጽሐፍ ቅዱስ ስለዚህ ጉዳይ ሲናገር፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>ዕብራውያን 10:12፦ «እርሱ ግን ስለ ኃጢአት አንድን መሥዋዕት ለዘላለም አቅርቦ በእግዚአብሔር ቀኝ ተቀመጠ»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ የሚያሳየው የክርስቶስ መስዋዕትነት አንድ ጊዜ የተፈጸመና ዘለዓለማዊ ውጤት ያለው መሆኑን ነው። ቅዱስ አትናቴዎስም ይህንን በማጽናት፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ሞትን በሞቱ ድል ነሥቶ፣ ሕይወትን ለሰው ልጆች ሁሉ ሰጠ»</Text>
          </View>

          <Text style={styles.paragraph}>በማለት የድኅነት ሥራውን ፍጹምነት መስክሯል። ክርስቶስ በመስቀል ላይ (ዮሐንስ 19:30) እንዳለ፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ኢየሱስም ሆምጣጤውን ከተቀበለ በኋላ፦ ተፈጸመ አለ፥ ራሱንም አዘንብሎ ነፍሱን አሳልፎ ሰጠ።»</Text>
          </View>

          <Text style={styles.paragraph}>
            የማዳን ሥራው የተሟላ ነው። በሰማይ እየወደቀና እየተነሳ ይማልዳል ብሎ ማሰብ፣ በምድር ላይ የፈጸመውን የማዳን ሥራ እንዳልተሟላ አድርጎ መቁጠር ነው።
          </Text>
        </View>

        {/* 3. ' በእግዚአብሔር ቀኝ ' - የክብርና የሥልጣን ትርጓሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>3. «በእግዚአብሔር ቀኝ» - የክብርና የሥልጣን ትርጓሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            ክርስቶስ በእግዚአብሔር ቀኝ ተቀመጠ መባሉ እርሱ አምላክ ስለሆነ ነው። ቀኝ የሚለው ቃል በዚህ ዐውድ ክብርንና ሥልጣንን ያመለክታል እንጂ፣ እግዚአብሔር ቀኝና ግራ ኖሮት አይደለም። ይህ አገላለጽ የእግዚአብሔርን ስፍራ የለሽነት የሚያረጋግጥ ሲሆን፣ ወልድም በመለኮት ፍፁም እኩልነት እንዳለው ያመለክታል።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ ዳዊት በመዝሙር 117:16 ላይ፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የእግዚአብሔር ቀኝ ኃይልን አደረገች፤ የእግዚአብሔር ቀኝ ከፍ ከፍ አደረገችኝ፤ የእግዚአብሔር ቀኝ ኃይልን አደረገች።»</Text>
          </View>

          <Text style={styles.paragraph}>ሲል፣ እግዚአብሔር በሥልጣኑና በመለኮታዊ ኃይሉ ከፍ ከፍ ማድረጉን መግለጹ ነው።</Text>

          <Text style={styles.paragraph}>ጌታችን ኢየሱስ ክርስቶስም ስለ ራሱ ሲናገር (ማቴዎስ 26:64)፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ኢየሱስም፦ አንተ አልህ፤ ነገር ግን እላችኋለሁ፥ ከእንግዲህ ወዲህ የሰው ልጅ በኃይል ቀኝ ሲቀመጥ በሰማይም ደመና ሲመጣ ታያላችሁ አላቸው።»</Text>
          </View>

          <Text style={styles.paragraph}>ብሏል።</Text>

          <Text style={styles.paragraph}>
            ቅዱስ ቄርሎስ ዘእስክንድርያ ይህንን ምስጢር ሲያብራራ፦ «በእግዚአብሔር ቀኝ መቀመጥ ማለት ከእግዚአብሔር ጋር እኩል ክብርና ሥልጣን መጋራት ማለት ነው።»
          </Text>

          <Text style={styles.paragraph}>
            ይህ ክብርና ሥልጣን ለክርስቶስ አዲስ የተሰጠ ሳይሆን፣ ከባሕርይ አባቱ ከአብና ከባሕርይ ሕይወቱ ከመንፈስ ቅዱስ ጋር ያለው ትክክለኛና ዘለዓለማዊ ክብር ነው። ስለዚህ በቀኝ መቀመጥ የፈራጅነትና የገዥነት ምልክት እንጂ፣ የለማኝነት ወይም የበታችነት ማረጋገጫ አይደለም። እርሱ በእግዚአብሔር ቀኝ መቀመጡ ማለት፣ በሰውነቱ ተዋሕዶ ምክንያት መለኮታዊውን ሥልጣን ሙሉ በሙሉ መካፈሉን የሚያሳይ ነው።
          </Text>
        </View>

        {/* 4. አዲሱ ፍጥረትና የዕርቁ ፍጹምነት (2ኛ ቆሮንቶስ 5 ፡ 16-21 ) */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>4. አዲሱ ፍጥረትና የዕርቁ ፍጹምነት (2ኛ ቆሮንቶስ 5 ፡ 16-21)</Text>
          </View>

          <Text style={styles.paragraph}>
            ቅዱስ ጳውሎስ በሮሜ 8:34 ላይ የገለጸውን የክርስቶስን የድል አድራጊነት ሥራ፣ በ2ኛ ቆሮንቶስ 5:16-21 ላይ ይበልጥ ያብራራዋል። እዚህ ላይ ክርስቶስን እንደ ሥጋ ልማድ ማወቅ እንደማይገባ ያስጠነቅቃል። ክርስቶስ አሁን በድካም ያለ ሰው አይደለም፤ ይልቁንም ዓለምን ከራሱ ጋር ያስታረቀ አምላክ ነው።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>2ኛ ቆሮንቶስ 5:19፦ «ይህም እግዚአብሔር በክርስቶስ ሆኖ ዓለሙን ከእርሱ ጋር ያስታርቅ ነበር፥ በደላቸውንም አይቈጥርባቸውም ነበር፤ የእርቅንም ቃል በእኛ አኖረ።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ ጥቅስ ክርስቶስ አማላጅ ሳይሆን አስታራቂ መሆኑን ያረጋግጣል። አስታራቂና አማላጅ ይለያያሉ። አማላጅ በሁለት ወገን መካከል ቆሞ የሚለምን ሲሆን፣ አስታራቂ ግን እርቁን ራሱ የሚፈጽም ባለሥልጣን ነው። እግዚአብሔር በክርስቶስ ሆኖ ዓለምን አስታረቀ ማለት፣ በክርስቶስ በኩል የሰው ልጅ የበደል ዕዳ ተከፍሎ ተፈጸመ ማለት ነው።
          </Text>

          <Text style={styles.paragraph}>
            ቅዱስ ዮሐንስ አፈወርቅ ይህንን ሲያብራራ፦ «እግዚአብሔር በክርስቶስ ሆኖ ዓለምን አስታረቀ ስንል፣ ክርስቶስ ራሱ እግዚአብሔር መሆኑንና እርቁን የፈጸመውም በገዛ ሥልጣኑ መሆኑን ማሳያ ነው። ስለዚህ አሁን የሚቀርበው ልመና ሳይሆን፣ የተፈጸመውን እርቅ አምኖ መቀበል ብቻ ነው።»
          </Text>
        </View>

        {/* 5. የአበው ምስክርነትና የ ' ምልጃ ' ትርጓሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>5. የአበው ምስክርነትና «የምልጃ» ትርጓሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            በሮሜ 8:34 ላይ ምልጃ የሚለው ቃል የክርስቶስን ዘለዓለማዊ ሊቀ ካህናትነት የሚገልጥ እንጂ ልመናን የሚያሳይ እንዳልሆነ አበው እንዲህ ያስተምራሉ፦ ይህ ምልጃ የምንለው አገልግሎት የክርስቶስን የሰብአዊነትና የመለኮታዊነት ተዋሕዶ በተግባር የሚያሳይ ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• አምብሮስዩስ፦</Text> «ክርስቶስ ስለ እኛ ይማልዳል ሲባል፣ እንደ ባሪያ አጎንብሶ ይለምናል ማለት አይደለም፤ ነገር ግን በእግዚአብሔር ቀኝ ሆኖ የድኅነትን ሥራውን ያቀርባል።»
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ቅዱስ ኤጲፋንዮስ፦</Text> «ወልድ አብን ይለምናል ብለህ አታስብ፤ እርሱ ከአብ ጋር አንድ ነውና። ምልጃው ግን የሰውነታችንን ተፈጥሮ ይዞ በአብ ፊት መታየቱ ነው።»
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ቅዱስ ጎርጎሬዎስ ዘእንዚናዙ፦</Text> «ሊቀ ካህናችን ክርስቶስ፣ ራሱን የኃጢአት መስዋዕት አድርጎ አቀረበ፣ ይህ መስዋዕትነትም አንዴ ለዘላለም የተፈጸመ ነው። የእርሱ ምልጃ የምንለው፣ ይህ አንድ ጊዜ የቀረበ ፍጹም መስዋዕትነት በአብ ፊት ዘወትር ሕያው ሆኖ መታየቱ ነው።»
          </Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ፦ ክርስቶስ ፈራጅ እንጂ ለማኝ አይደለም</Text>
          </View>

          <Text style={styles.paragraph}>
            በሮሜ 8:34 ላይ ስለ እኛ የሚማልደው የሚለው ሐሳብ የክርስቶስን የድኅነት ሥራ ፍጹምነት የሚያሳይ እንጂ፣ ጌታችን አሁንም በሰማይ እየጸለየ ወይም እየለመነ መሆኑን የሚያመለክት አይደለም። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን የምታስተምረውና ቅዱሳት መጻሕፍትም የሚያረጋግጡት እውነት የሚከተለው ነው፦
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ክርስቶስ ጸሎት አቅራቢ ሳይሆን ጸሎት ተቀባይ ነው፦</Text> በምድር ሳለ ስለ እኛ ጸልዮአል፤ በሰማይ ግን በክብር ዙፋን ላይ ተቀምጧል። አሁን እርሱ የሚለመን አምላክ እንጂ የሚለምን ፍጡር አይደለም። ክርስቶስ ስለ እኛ ይጸልያል ብሎ ማሰብ አምላክነቱን መካድ ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ምልጃው የተፈጸመ ሥራ ነው፦</Text> የክርስቶስ ምልጃ በቀራኒዮ በፈሰሰው ደሙና በለበሰው ሥጋው የተገኘ ዘለዓለማዊ ውጤት ነው። ይህ ሥራ ዳግም ልመናን የማይሻ፣ አንድ ጊዜ ለዘላለም የተፈጸመ የቤዛነት ሥራ ነው። መስቀሉ በሰማይ ለዘለዓለም ይናገራል፤ ደሙም ለዘለዓለም ይጮኻል፤ ይህም ምልጃው ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ክርስቶስ ኃያል ፈራጅ ነው፦</Text> ሐዋርያው የሚኰንንስ ማን ነው? ብሎ የጀመረው፣ ክርስቶስ የማጽደቅና የመኰነን (የመፍረድ) ሙሉ ሥልጣን ያለው አምላክ መሆኑን ለማሳየት ነው። ፈራጅ ደግሞ አይለምንም፤ ይፈርዳል እንጂ። እርሱ በዙፋኑ ላይ ተቀምጦ ዓለምን የሚገዛና የሚቀድስ አምላክ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ስለዚህ፣ ክርስቶስ በሰማይ እየወደቀና እየተነሣ ስለ እኛ ይማልዳል ብሎ ማሰብ፣ በመስቀል ላይ የፈጸመውን ተፈጸመ የተባለውን መለኮታዊ ሥራ ማቃለል ነው። እርሱ አሁን በክብር ቀኝ ያለው እንደ ፈራጅ፣ እንደ ገዥና እንደ አምላክ ነው። ምልጃውም የእኛን ተፈጥሮ (ሥጋችንን) ይዞ በሥላሴ ዙፋን መታየቱ ብቻ ነው።
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