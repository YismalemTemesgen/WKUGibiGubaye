import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Heb724Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>ስለ እነርሱም ፦ ሊያማልድ በሕይወት ይኖራልና ፤ ... የዕብራውያን 7 ፡ 25 ትርጓሜ</Text>
         
        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤ/ክ መለኮት ወሥጋ ተዋሐዱ፤ አሐዱ ባሕርይ ኮነ በሚለው ጽኑ ሐዋርያዊ መሠረት ላይ ቆማ፣ የጌታችን የኢየሱስ ክርስቶስን ፍጹም አምላክነትና ኃያል ፈራጅነት ታበሥራለች። በዚህም መሠረት በዕብራውያን 7፡24-25 ላይ የሚገኘውን «ስለ እነርሱም፡- ሊያማልድ በሕይወት ይኖራልና፤ ...» የሚለውን ቃል ስንመረምር፣ ጌታችንን በሰማያዊ መቅደስ ቆሞ እንደሚለምን ፍጡር ሳይሆን፣ እንደ ቀዳማዊ መሥዋዕትና እንደ ዘለዓላማዊ ሊቀ ካህናትነቱ የድኅነት ሥራውን ተፈጸመ ብሎ ያተመ ኃያል ገዥ አድርገን ነው።
          </Text>

          <Text style={styles.paragraph}>
            ይህ የወንጌል እውነት የክርስቶስን የባሕርይ አምላክነት ከአብና ከመንፈስ ቅዱስ ጋር በማስተካከል፣ የምልጃን ትርጓሜ ከውርደት ልመና ወደ ፍጹም የሥልጣን ውጤት ያሸጋግራል። ክርስቶስ በሰማይ የሚማልደው የሰውነት ባሕርያችንን በመለኮታዊ ዙፋን ላይ አስቀምጦ፣ የፈጸመው የማዳን ሥራ ፍጹም መሆኑንና እርሱ ራሱ የእርቅ ባለቤት መሆኑን ለፍጥረት ሁሉ በማብሰር እንጂ፣ ደካማ ሆኖ አብን በመለማመጥ አይደለም።
          </Text>
        </View>

        {/* 1. ሊቀ ካህናት ፡ ከኦሪት እስከ ሐዲስ ኪዳን */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>1. ሊቀ ካህናት ፡ ከኦሪት እስከ ሐዲስ ኪዳን</Text>
          </View>

          <Text style={styles.paragraph}>
            ሊቀ ካህን ማለት በትክክለኛ ትርጓሜው የመሥዋዕት አቅራቢዎች ራስ ወይም በእግዚአብሔርና በሰው መካከል ድልድይ ሆኖ የሚቆም ማለት ነው። በብሉይ ኪዳን የነበሩ ሊቀ ካህናት የምድራዊው ድንኳን አገልጋዮች ነበሩ።
          </Text>

          <Text style={styles.sectionHeading}>የብሉይ ኪዳን ሊቀ ካህናት ድካም፦</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ተለዋዋጭነት፦</Text> እነርሱ ሟቾች በመሆናቸው ክህነታቸው ከሰው ወደ ሰው ይተላለፍ ነበር።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• መስዋዕታቸው፦</Text> የሚያቀርቡት የእንስሳት ደም የኃጢአትን ሥር ሊነቅል የማይችል፣ በየዓመቱ የሚደገም መታሰቢያ ብቻ ነበር።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ባሕርያቸው፦</Text> አስቀድመው ስለ ገዛ ኃጢአታቸው መሥዋዕት ማቅረብ የሚገባቸው ደካማ ፍጡራን ነበሩ።
          </Text>

          <Text style={styles.sectionHeading}>የኢየሱስ ክርስቶስ ሊቀ ካህንነት ልዩነት፦</Text>
          <Text style={styles.paragraph}>
            ክርስቶስ ሊቀ ካህን የተባለው ግን እንደ ኦሪቱ ሥርዓት ሳይሆን እንደ መልከ ጼዴቅ ሥርዓት ነው። ይህም ማለት ያለ እናት (በሰማይ)፣ ያለ አባት (በምድር)፣ የዘመን መጀመሪያና የሕይወት ፍጻሜ የሌለው ዘለዓለማዊ ካህን ማለት ነው። እርሱ መሥዋዕት አቅራቢም (ካህን)፣ መሥዋዕት ሆኖ ቀራንዮ ላይ የቀረበም (በግ)፣ መሥዋዕት ተቀባይም (አምላክ) ነው። የክርስቶስ ክህነት አይለወጥም፤ ምክንያቱም እርሱ ለዘላለም ሕያው ሆኖ የሚኖር የባሕርይ አምላክ ነውና።
          </Text>

          <Text style={styles.paragraph}>
            ቅዱስ አትናቴዎስ ዘእስክንድርያ «ወልድ ዋሕድ ሊቀ ካህናት የተባለው ስለ እኛ ሰው ስለሆነ ነው እንጂ በመለኮቱ ከባሕርይ አባቱ ከአብ የሚያንስ ሆኖ አይደለም። በመስቀል ላይ የፈጸመው መሥዋዕትነት የኃጢአትን ሥር ስለነቀለ፣ አሁን በሰማይ ዳግም መስዋዕት ወይም ልመና አያስፈልገውም።»
          </Text>
        </View>

        {/* 2. ሊያማልድ - ትርጓሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>2. ሊያማልድ - ትርጓሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            በቅዱሳት መጻሕፍት ውስጥ ማለደ የሚለው ቃል በዐውዱ መሠረት የፈረደ፣ የገዛ፣ ወይም በሥልጣን ተከራከረ የሚሉ ትርጉሞችን ይይዛል። በቤተ ክርስቲያን ሊቃውንት ትምህርት መሠረት፣ ምልጃ እና ልመና ያላቸው ልዩነት ሰማይና ምድር ያህል የራቀ ነው።
          </Text>

          <Text style={styles.sectionHeading}>የልመናና የምልጃ መሠረታዊ ልዩነት፦</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ልመና፦</Text> ከታች ወደ ላይ የሚቀርብ፣ ፍጡር ለፈጣሪው የሚያቀርበው፣ ካለማወቅና ካለመቻል የሚመነጭ የድካም መገለጫ ነው። ለምሳሌ፦ ጌታ ሆይ ማረኝ ማለት ልመና ነው።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ምልጃ (Intercession/Mediation)፦</Text> ባለሥልጣን በሁለት ወገን መካከል ቆሞ ጉዳዩን የሚፈጽምበት፣ ዕዳን ከፍሎ የሚያስታርቅበት፣ ለተከራካሪው ወገን የሚቆምበት የሥልጣን መገለጫ ነው። ክርስቶስ ስለ እኛ የሚማልደው ደግሞ በገዛ ሥልጣኑ ነው።
          </Text>

          <Text style={styles.sectionHeading}>የአምስቱ የምልጃ ዓይነቶች በክርስቶስ ሕይወት፦</Text>
          <Text style={styles.paragraph}>ሊቃውንተ ቤተ ክርስቲያን የክርስቶስን ምልጃ በሚከተለው መልኩ ይተነትኑታል፦</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>ሀ. በሥጋው ወራት የቀረበ ምልጃ፦</Text> ጌታችን በምድር ሳለ ስለ ደቀ መዛሙርቱና ስለ ዓለም ድኅነት የጸለየው ጸሎት (ዮሐ 17)። ይህ እንደ ሰውነቱ የፈጸመው ልመና ነው።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>ለ. በመስቀል ላይ የቀረበ ምልጃ፦</Text> «አባት ሆይ የሚያደርጉትን አያውቁምና ይቅር በላቸው» (ሉቃ 23:34) በማለት በሞቱ ዓለምን ከራሱ ጋር ያስታረቀበት ምልጃ።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>ሐ. የሥራ ምልጃ፦</Text> አሁን በሰማይ የሚፈጽመው ምልጃ። ይህም በመስቀል ላይ የፈሰሰው ደሙና የቆሰለው ሥጋው ዘወትር በአብ ፊት መታየቱ ነው። ይህ መታየት ብቻውን ለእኛ ቤዛነት ነው።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>መ. የሥልጣን ምልጃ፦</Text> እንደ ባለሥልጣን ፈራጅነቱ ይህ ሰው የእኔ ነው ብሎ የሚወስነው ውሳኔ።
          </Text>
        </View>

        {/* 3. የመስቀሉ መሥዋዕትነትና የክርስቶስ ፈራጅነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>3. የመስቀሉ መሥዋዕትነትና የክርስቶስ ፈራጅነት</Text>
          </View>

          <Text style={styles.paragraph}>
            የኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ቀራንዮ ላይ የፈሰሰው የክርስቶስ ደም አንድ ጊዜ ብቻ የቀረበና ድኅነተ ዓለምን የፈጸመ መሆኑን በጽኑ ታስተምራለች።
          </Text>

          <Text style={styles.paragraph}>
            ዕብራውያን 9:12፦ «የዘላለምን ቤዛነት አግኝቶ አንድ ጊዜ ፈጽሞ ወደ ቅድስት ገባ።» ቤዛነቱ ተገኝቷል እንጂ እየተገኘ ነው አይልም።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>ዕብራውያን 10:14፦ «በአንድ መሥዋዕት የሚቀደሱትን ለዘላለም ፍጹም አድርጎአቸዋልና።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ክርስቶስ በመስቀል ላይ ተፈጸመ (ዮሐ 19:30) ሲል፣ የሰው ልጅ ዕዳ በሙሉ ተከፍሎ ማለቁን ማብሰሩ ነው። ጌታችን በዮሐንስ 16:26-27 ላይ «በዚያን ቀን በስሜ ትለምናላችሁ፤ እኔም ስለ እናንተ አብን እንድለምን የምላችሁ አይደለሁም፤ አብ እርሱ ራሱ ይወዳችኋልና» በማለት በገዛ አንደበቱ አብን እንደማይለምን አረጋግጧል።
          </Text>
        </View>

        {/* 4. የቤተ ክርስቲያን አባቶች ምስክርነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>4. የቤተ ክርስቲያን አባቶች ምስክርነት</Text>
          </View>

          <Text style={styles.paragraph}>ሊቃውንተ ቤተ ክርስቲያን የክርስቶስን ምልጃ ከባሕርይ አምላክነቱ ጋር በማስተባበር እንዲህ ይተረጉሙታል፦</Text>
          
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ቅዱስ ቄርሎስ ዘእስክንድርያ፦</Text> «ክርስቶስ ስለ እኛ ይማልዳል ስንል፣ የሰውነታችንን ባሕርይ ይዞ በመለኮታዊ ዙፋን ላይ መታየቱን ነው። እርሱ በሰውነቱ የፈጸመውን የማዳን ሥራ ለአብ ያቀርባል። ይህ ምልጃ የምንለው በሰውነቱ የፈጸመውን የማዳን ሥራ ለአብ ማቅረብ ነው።»
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ቅዱስ ጎርጎሬዎስ ዘእንዚናዙ፦</Text> «ሊቀ ካህናችን ክርስቶስ፣ ራሱን የኃጢአት መስዋዕት አድርጎ አቀረበ፣ ይህ መስዋዕትነትም አንዴ ለዘላለም የተፈጸመ ነው። የእርሱ ምልጃ የምንለው፣ ይህ አንድ ጊዜ የቀረበ ፍጹም መስዋዕትነት በአብ ፊት ዘወትር ሕያው ሆኖ መታየቱ ነው።»
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• አምብሮስዩስ፦</Text> «ክርስቶስ ይማልዳል ስንል፣ የክህነት አገልግሎቱ ዘለዓለማዊ መሆኑን ለመግለጥ ነው። አንድ ጊዜ ያቀረበው መሥዋዕቱ በሰማያዊ መቅደስ ዘወትር ሕያው ሆኖ ይኖራል፤ ይህም ማለት የሰውነታችን ባሕርይ በእርሱ አማካኝነት ከሥላሴ ጋር አንድ ሆኖ ይኖራል ማለት ነው።»
          </Text>
        </View>

        {/* 5. የምልጃ ቃል በተዛባ መልኩ ለሚተረጉሙ አካላት የሚሰጥ ምላሽ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>5. የምልጃ ቃል በተዛባ መልኩ ለሚተረጉሙ አካላት የሚሰጥ ምላሽ</Text>
          </View>

          <Text style={styles.paragraph}>ክርስቶስን አማላጅ ነው የሚሉ ወገኖች የሚከተሉትን ትልልቅ የክህደት ስህተቶች ይፈጽማሉ፦</Text>
          
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>1. አምላክነቱን መካድ፦</Text> አብን የሚለምን ከሆነ ከአብ ያንሳል ማለት ነው። ይህ ደግሞ «እኔና አብ አንድ ነን» (ዮሐ 10:30) ከሚለው ቃል ጋር ይጋጫል።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>2. የመስቀሉን ሥራ ማቃለል፦</Text> መስቀል ላይ ሁሉንም ከፈጸመ፣ አሁን በሰማይ ምን የሚለምነው ነገር ይቀራል? ልመና ካለ መሥዋዕቱ አልተሟላም ማለት ነው።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>3. ፈራጅነቱን መካድ፦</Text> መጽሐፍ ቅዱስ «በሕያዋንና በሙታን ላይ ሊፈርድ ያለው» ይለዋል (2 ጢሞ 4:1)። ፈራጅ ደግሞ ከማንም ፈቃድ ወይም ምሕረት አይለምንም፤ በራሱ ሥልጣን ይፈርዳል እንጂ።
          </Text>

          <Text style={styles.paragraph}>
            ቅዱስ ዮሐንስ አፈወርቅ በቆሮንቶስ መልእክት ትርጓሜው ላይ እንዲህ ይላል፦ «ጳውሎስ ከእንግዲህ ወዲያ ክርስቶስን በሥጋ እንዳወቅነው አናውቀውም ሲል፣ አሁን በክብር ዙፋን ላይ ያለውን ጌታ በድካም ውስጥ እንዳለ ሰው አድርገን ማሰብ እንደሌለብን ያስገነዝበናል። አሁን እርሱ ፈራጅ ነው፤ የሚለምኑትም ምእመናንና ቅዱሳን ናቸው።»
          </Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ</Text>
          </View>

          <Text style={styles.paragraph}>
            በዕብራውያን 7፡24-25 ላይ የተገለጠው «ስለ እነርሱም ሊያማልድ ዘወትር በሕይወት ይኖራል» የሚለው ቃል ጥልቅ ሥነ መለኮታዊ አንድምታው የክርስቶስን ኃያልነት እንጂ ድካም አያሳይም። ይህንን ሐቅ በማያሻማ ሁኔታ በሚከተሉት ነጥቦች መረዳት ይቻላል፦
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የምልጃው ዘለዓለማዊነት፦</Text> የክርስቶስ ምልጃ የለማኝ ልመና ቢሆን ኖሮ፣ ልመናው ተቀባይነት እስኪያገኝ የሚቆይ የተጠባባቂነት ሂደት ይሆን ነበር። ነገር ግን የእርሱ ምልጃ ተፈጸመ በተባለው መሥዋዕቱ ላይ የቆመ በመሆኑ፣ ምልጃው ራሱ የድኅነት ውጤት እንጂ የድኅነት ፍለጋ አይደለም። እርሱ በሰማያዊ ዙፋን ላይ የተቀመጠው ቤዛነትን አግኝቶ (ዕብ 9፡12) ነው እንጂ ቤዛነትን ሊለምን አይደለም።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የሥልጣን ባለቤትነት፦</Text> መጽሐፍ ቅዱስ ክርስቶስን «የነገሥታት ንጉሥና የጌታዎች ጌታ» ይለዋል (ራእይ 19፡16)። ንጉሥ አይለምንም፤ ይፈርዳል፣ ያዝዛል፣ ይገዛል እንጂ። በመሆኑም የእርሱ ምልጃ የሥልጣን ምልጃ ነው። ይህም ማለት በፈሰሰው ደሙ የዳኑትን ነፍሳት የእኔ ናቸው ብሎ የመረከብና የመጠበቅ መለኮታዊ ተግባር ነው።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የጸሎት ተቀባይነት፦</Text> ቤተ ክርስቲያን ቅዱሳን ይለምናሉ፣ ክርስቶስ ግን ጸሎትን ይቀበላል ብላ ታስተምራለች። ክርስቶስ የሚለምን ቢሆን ኖሮ፣ ምእመናን ጌታ ሆይ ማረን ብለው ወደ እርሱ መጸለይ አይችሉም ነበር። እርሱ ግን «በስሜ ብትለምኑ እኔ አደርገዋለሁ» (ዮሐ 14፡14) በማለት ራሱ ጸሎት ሰሚና ፈጻሚ መሆኑን አረጋግጧል።
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የተዋሕዶ ምሥጢር ማኅተም፦</Text> ጌታችን ኢየሱስ ክርስቶስ ፍጹም አምላክ ፍጹም ሰው ነው። በሰውነቱ መከራን ተቀብሎ ዓለምን አድኗል፤ በመለኮቱ ደግሞ ከአብና ከመንፈስ ቅዱስ ጋር አንድ ሆኖ ፍጥረትን ይገዛል። አሁን በሰማይ ያለው ምልጃ የለበሰውን ሥጋ በመለኮት ዙፋን ላይ በማስቀመጥ የሰው ልጅ ተፈጥሮ ከእግዚአብሔር ጋር መታረቁን የሚያረጋግጥ ዘለዓለማዊ ማኅተም ነው።
          </Text>

          <Text style={styles.paragraph}>
            በአጠቃላይ፣ ክርስቶስ አሁንም ይለምናል ብሎ ማሰብ፣ እርሱ በመስቀል ላይ የፈጸመውን ታላቅ ሥራ እንደ ማቃለልና መለኮታዊ ማንነቱን እንደ መገዳደር ይቆጠራል። ክርስቶስ በክብር ዙፋኑ ላይ ተቀምጦ ፍጥረትን ሁሉ የሚገዛ፣ የሚቀድስና የሚባርክ ኃያል አምላክ ነው። የሚለምኑትና የሚማልዱት ቅዱሳንና መላእክት ሲሆኑ፣ ጌታችን ግን የልመናቸው ማረፊያና የጸሎታቸው ፈጻሚ ነው። ለእርሱ ከአብና ከመንፈስ ቅዱስ ጋር ዛሬም ዘወትርም እስከ ዘለዓለም ክብርና ምስጋና ይሁን፤ አሜን።
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