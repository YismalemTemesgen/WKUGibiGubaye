import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OneIncarnateNatureScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>አንድ ባሕርይ (One Incarnate Nature): የመለኮትና የትስብእት ፍፁም ተዋሕዶ</Text>
        
        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>አንድ ባሕርይ (ተዋሕዶ) </Text>፣ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያንን ጨምሮ የኦርቶዶክስ ተዋሕዶ አብያተ ክርስቲያናት፣ ማለትም የግብጽ፣ የህንድ፣ የአርመንና የሶርያ አብያተ ክርስቲያናት፣ የጌታችን የኢየሱስ ክርስቶስን ማንነት የሚገልጽ ማዕከላዊ ቀኖና ነው። ይህ ትምህርት፣ ጌታችን ኢየሱስ ክርስቶስ በተዋሕዶ ከሁለት አካል አንድ አካል፣ ከሁለት ባሕርይ ደግሞ አንድ የተዋሐደ ባሕርይ መሆኑን በጽኑ ያረጋግጣል። የሥነ መለኮት ግንዛቤያችን መሠረት የሆነው የዚህ ትምህርት ዋና ዓላማ፣ የክርስቶስን ፍጹም አምላክነትና ፍጹም ሰውነት ሳይቀንስ፣ የሁለቱ ባሕርያት አንድነት በውስጡ ያለውን የድኅነት ምሥጢር ማጉላት ነው። የእኛዋ ተዋሕዶ ቤተክርስቲያን ከቅዱስ ቄርሎስ ዘእስክንድርያና ከቅዱስ ዲዮስቆሮስ ዘመን ጀምሮ የጠነከረችው በዚህ ኦርቶዶክሳዊ ትምህርት ላይ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ይህ ታላቅ ምሥጢር የክርስትና እምነት የልብ ምት ሲሆን፣ የሰው ልጆች ወደ እግዚአብሔር የመመለሻ መንገዳችን የክርስቶስ አካላዊ አንድነት መሆኑን ያብራራል። የመለኮታዊው ቃል ሰው መሆን (ሥጋዌ) የዘለዓለም ዕቅድ ፍጻሜ ሲሆን፣ የክርስቶስ የተዋሐደ ባሕርይ ያለመከፋፈል የሰውነቱን ድካም በመለኮታዊ ኃይል በመሸፈን፣ ለዘላለም ሞትንና ኃጢአትን ድል መንሳትን አስችሏል። ይህ ፍጹም አንድነት የድኅነት ሥራውን ፍጹምነት ከፍ የሚያደርግ እና የሰውን ልጅ በጸጋ የመለኮታዊው ባሕርይ ተካፋይ (2ኛ ጴጥ 1:4) እንዲሆን ከፍ የሚያደርግ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ለመጀመሪያ ጊዜ ዓለም አቀፋዊቷ ቤተ ክርስቲያን በሥነ መለኮት ምክንያት ለሁለት የተከፈለችበት ዋናው መሠረት የአንድ ባሕርይ እና የሁለት ባሕርይ ትምህርት ሲሆን፣ ይህ ክስተት የኦርቶዶክስ ተዋሕዶ ቤተክርስቲያንን ከንስጥሮሳዊነትና ከኤውቲኬሳዊነት አስተሳሰቦች ለመጠበቅ በተደረገ ትግል የተከሰተ ነው። በዚህ ሰነድ ውስጥ የዚህን የሥነ መለኮት ጽንሰ ሐሳብ ጥልቀት፣ የመጽሐፍ ቅዱስ ማስረጃዎችን፣ የአበው ትምህርቶችን፣ እና የድኅነት ምሥጢርን በዝርዝር እና በኦርቶዶክሳዊ አቋም ይቀርባል።
          </Text>
        </View>

        {/* የአንድ ባሕርይ ትምህርት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የአንድ ባሕርይ ትምህርት</Text>
          </View>

          <Text style={styles.paragraph}>
            ኦርቶዶክሳዊያን ክርስቲያኖች በአንድ ባሕርይ የምናምነው ከሁለቱ ባሕርያት የአንዱን የክርስቶስ ባሕርይ ክደው አይደለም። ይልቁንም፣ በመለኮትና በሥጋ ባሕርይ ፍጹምነትና ሙሉነት እና በሁለቱ ፍጹም ተዋሕዶ በማመን ነው። ቤተ ክርስቲያን የክርስቶስን የሰውነት ባሕርይም ሆነ የአምላክነት ባሕርይ በምንም መልኩ አትክድም። ነገር ግን ጌታችን ከተዋሐደ በኋላ ፍጹም ሰውና ፍጹም አምላክ እንደሆነ፣ እና እነዚህ ሁለቱ ፍጹም ባሕርያት ተዋሕደው አንድ ባሕርይ ሆነዋል ብላ ታምናለች።
          </Text>

          <Text style={styles.paragraph}>
            የሥጋዌ ምሥጢር፣ መለኮታዊው ቃል የሰውን ሥጋ ያለ ኃጢአት ገንዘቡ ማድረግ ሲሆን፣ ይህ ማለት እግዚአብሔር ሰው ሆነ፣ ሰውም እግዚአብሔር ሆነ ማለት ነው። ይህ አንድነት የባሕርያትን ማንነት የሚቀይር ወይም የሚደመስስ ሳይሆን፣ እያንዳንዱ ባሕርይ የራሱን ማንነት ጠብቆ፣ በመለኮታዊው አካል ውስጥ ፍጹም አንድነትን መፍጠሩ ነው። መለኮት እንደ መለኮት ሲቀር፣ ሥጋም እንደ ሥጋ መቅረቱ የክርስቶስን ፍጹምነት በሁለቱም በኩል ያረጋግጣል። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ የክርስቶስን አካላዊ ተዋሕዶ ከስድስት የተሳሳቱ አመለካከቶች ትጠብቃለች። እነዚህም እንበለ ውላጤ (ያለመለወጥ)፣ እንበለ ሚጠት (ያለመመለስ)፣ እንበለ ህድረት (ያለማደር)፣ እንበለ ቱሳሔ (ያለመቀላቀል)፣ እንበለ በዐዴ (ያለመለያየት)፣ እና እንበለ ትድምርት (ያለመደረብ) ናቸው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>እንበለ ውላጤ (ያለመለወጥ)፡- </Text>መለኮት ወደ ሥጋነት አልተለወጠም፣ ሥጋም ወደ መለኮትነት አልተለወጠም። ይህ መለወጥ ቢኖር ኖሮ፣ መለኮት ውስንና ፍጡር ይሆናል፣ ይህም መለኮታዊነቱን ይሽረዋል፤ ሥጋም ቢለወጥ የሰውን ባሕርይ ያጣል፣ ይህም የድኅነት ሥራውን ያሳንሳል። ቅዱስ አትናቴዎስ እግዚአብሔር የማይለወጥ ነው በማለት ይህንን አጽንቷል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>እንበለ ሚጠት (ያለመመለስ)፡- </Text>ተዋሕዶው ዘለዓለማዊ እንጂ ወደ አለመዋሐድ የሚመለስ አይደለም። አንዴ ከተዋሐዱ በኋላ፣ ይህ አንድነት ሊፈርስ አይችልም፤ ምክንያቱም የድኅነት ሥራው ፍጹም እንዲሆን ዘለዓለማዊ አንድነት ያስፈልጋል። የክርስቶስ አንድነት ዘለዓለማዊ በመሆኑ፣ የድኅነት ውጤቱም ዘለዓለማዊ ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>እንበለ ህድረት (ያለማደር)፡- </Text>መለኮት በሥጋ ላይ እንደ ልብስ አላደረበትም፣ ይልቁንም ሥጋን ገንዘቡ አድርጓል። ህድረት ማለት መለኮት በሥጋ ላይ እንደ ልብስ ማደር ማለት ሲሆን፣ ይህም የክርስቶስን አካላዊ አንድነት ይክዳል። ቅዱስ ቄርሎስ ዘእስክንድርያ ንስጥሮስ የካደውን ቴዎቶኮስ (ወላዲተ አምላክ) የሚለውን ማዕረግ በመከላከል፣ የክርስቶስን መለኮትነት ከሥጋዌው ቅጽበት ጀምሮ ፍጹም መሆኑን አረጋግጧል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>እንበለ ቱሳሔ (ያለመቀላቀል)፡- </Text>መለኮትና ሥጋ ተቀላቅለው አዲስ ባሕርይ አልፈጠሩም። ይህ መቀላቀል ቢኖር ኖሮ፣ የክርስቶስ መለኮትነትም ሆነ ሰውነቱ ፍጹም አይሆንም ነበር፣ ይህም የድኅነት ሥራውን ይሽራል። ባሕርያቱ ማንነታቸውን ሳይለቁ በአንድ አካል ውስጥ ተዋሕደዋል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>እንበለ በዐዴ (ያለመለያየት)፡- </Text>መለኮትና ሥጋ አይለያዩም፣ በአንድ አካል ውስጥ ፍጹም አንድነት አላቸው። መለያየት ቢኖር ኖሮ፣ የመለኮትና የትስብእት ተግባራት ተለያይተው ይታዩ ነበር፣ ይህም የክርስቶስን አንድነት ይሽራል፣ እናም መከራው የሰውን ብቻ በመሆኑ የመቤዠት ኃይል አይኖረውም ነበር። "ክርስቶስ አንድ ነው፣ ሥጋ የለበሰ አምላክ" የሚለው የቅዱስ ቄርሎስ ቀመር ይህንን አንድነት ያረጋግጣል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>እንበለ ትድምርት (ያለመደረብ)፡- </Text>መለኮት በሥጋ ላይ አልተደረበም፣ ይልቁንም ሥጋን ተዋሕዷል። ተዋሕዶው ጥልቅና በባሕርይ የሆነ እንጂ፣ ውጫዊ ወይም ላዩን የሆነ መደመር አይደለም። መደረብ ቢኖር ኖሮ፣ መለኮትና ትስብእት እውነተኛ አንድነት አይኖራቸውም ነበር፣ ይህም የክርስቶስን ማንነትና የድኅነት ሥራውን ያሳንሳል።
          </Text>
        </View>

        {/* የመለኮትና የሥጋ ባሕርያት ልዩነትና ፍጹምነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የመለኮትና የሥጋ ባሕርያት ልዩነትና ፍጹምነት</Text>
          </View>

          <Text style={styles.paragraph}>
            የመለኮት ባሕርይ ምሉዕ፣ ረቂቅ፣ ኃያል፣ ባዕድ፣ ሕያው፣ የማይወሰንና የማይለወጥ ሲሆን፣ የሥጋ ባሕርይ ደግሞ ውሱን፣ ግዙፍ፣ ድኩም፣ ነዳይ፣ መዋቲ፣ የሚራብና የሚሞት ነው። እነዚህ ሁለት ባሕርያት በመሠረታዊነታቸው ፍጹም ተቃራኒና የተለያዩ ናቸው። እያንዳንዳቸውም በራሳቸው ሙሉና ፍጹም መሆናቸው ለሥነ መለኮት እውነት ወሳኝ ነው። የመለኮት ባሕርይ መለኮታዊነቱን ሳይቀንስ፣ የሰውነቱን ባሕርይ ደግሞ ሰብዓዊነቱን ሳይተው በአንድ አካል ውስጥ መዋሐዳቸው የሥጋዌ ምሥጢር ልዩነትን ያሳያል።
          </Text>

          <Text style={styles.paragraph}>
            የክርስቶስ አካላዊ ተዋሕዶ የመለኮትና የሥጋ ባሕርያትን ማንነት አላጠፋም፣ ወይም ወደ አንድ አዲስ ባሕርይ አልቀየረም። ይህ ፍጹም ልዩነት በሥጋዌው ወቅትም ቢሆን ተጠብቋል፤ ሆኖም የተራበውም ተአምራትን ያደረገውም አንዱ ሰው የሆነው አምላክ ቃል ነው፤ የሥጋ ገንዘብ ለቃል፣ የቃል ገንዘብ ለሥጋ ሆኗልና። ነገር ግን፣ እርሱ እንደ አንድ አካል ስለሚሠራ፣ እነዚህ ተግባራት ሁሉ የአንድ አካል ሥራዎች ናቸው።
          </Text>
        </View>

        {/* የ 'አንድ የተዋሐደ ባሕርይ' ትርጓሜ የቅዱስ ቄርሎስ ተግሣጻት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የ 'አንድ የተዋሐደ ባሕርይ' ትርጓሜ የቅዱስ ቄርሎስ ተግሣጻት</Text>
          </View>

          <Text style={styles.paragraph}>
            የኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የምታምነው አንድ አካል አንድ ባሕርይ በሚለው ትምህርት ነው። ይህም ማለት፣ መለኮትና ትስብእት ተዋሕደው አንድ ባሕርይ ሆነዋል ማለት እንጂ፣ ባሕርያቱ ተቀላቀለዋል (እንደ ኤውቲኬስ) ወይም ወደ አንድ አዲስ ባሕርይ ተለውጠዋል ማለት አይደለም። ይልቁንም፣ ባሕርያቱ ሳይለወጡ፣ ሳይቀላቀሉ፣ ሳይለያዩ፣ ሳይከፋፈሉ በአንድ አካል ውስጥ ፍጹም አንድነትን ፈጥረዋል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>ወላዲተ አምላክነት፦ </Text>አማኑኤል እውነተኛ አምላክ እንደሆነ፣ ቅድስት ድንግል ማርያምም ወላዲተ አምላክ እንደሆነች የማይቀበል የተለየ ይሁን።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>ባሕርያዊ ተዋሕዶ፦ </Text>መለኮታዊው ቃል ከሥጋ ጋር በባሕርይ እንደተዋሐደ፣ ክርስቶስም አንድ እንደሆነ የማይቀበል የተለየ ይሁን።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>የተዋሐደ ግብር፦ </Text>ከተዋሕዶ በኋላ አካላትን የሚከፍል፣ ወይም ተዋሕዶውን የሥልጣን አንድነት ብቻ ነው የሚል የተለየ ይሁን።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>ሕይወት ሰጪ ሥጋ፦ </Text>የምንካፈለው ሥጋ መለኮታዊው ቃል የገዛው ያደረገው ሕይወት ሰጪ ሥጋ መሆኑን የማይቀበል የተለየ ይሁን።
          </Text>
        </View>

        {/* የኬልቄዶን ጉባኤ ታሪካዊ ዳራና ኦርቶዶክሳዊ ምላሽ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የኬልቄዶን ጉባኤ ታሪካዊ ዳራና ኦርቶዶክሳዊ ምላሽ</Text>
          </View>

          <Text style={styles.paragraph}>
            በ451 ዓ.ም የተደረገው የኬልቄዶን ጉባኤ፣ የሮማው ጳጳስ ሊዮን በቶሜ በሚል ደብዳቤያቸው የሁለት ባሕርይ ትምህርትን ባቀረቡበት ወቅት፣ የእስክንድርያው ሊቀ ጳጳስ ቅዱስ ዲዮስቆሮስና ተከታዮቹ በተዋሕዶ አንድ ባሕርይ ብለው አቋም በመያዝ ጉባኤውን ትተው ወጥተዋል። ይህ ክስተት የዓለም አቀፋዊቷ ቤተ ክርስቲያን ለመጀመሪያ ጊዜ ለሁለት የተከፈለችበት ዋናው ምክንያት ሆኗል።
          </Text>

          <Text style={styles.paragraph}>
            የቤተ ክርስቲያን አባቶችም ይህንን ጉባኤ ጉባኤ ከለባት በማለት የጠሩት፣ የጉባኤው ውሳኔ በንስጥሮሳዊ አስተሳሰብ ያዘነበለና የቅዱስ ቄርሎስን ኦርቶዶክሳዊ ቀመር የተቃረነ እንደሆነ ስላመኑ ነው።
          </Text>
        </View>

        {/* የአንድ ባሕርይ ትምህርት መጽሐፍ ቅዱሳዊ መሠረታዊ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የአንድ ባሕርይ ትምህርት መጽሐፍ ቅዱሳዊ መሠረቶች</Text>
          </View>

          <Text style={styles.paragraph}>የክርስቶስ አንድ ባሕርይነት በቅዱሳት መጻሕፍት ውስጥ በሰፊው ተገልጧል።</Text>

          <Text style={styles.paragraph}>• የዮሐንስ ወንጌል 1፡14፦</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ቃልም ሥጋ ሆነ፤ ጸጋንና እውነትንም ተመልቶ በእኛ አደረ»</Text>
          </View>

          <Text style={styles.paragraph}>• 1ኛ ጢሞቴዎስ 3፡16፦</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«በሥጋ የተገለጠ፣ በመንፈስ የጸደቀ... እግዚአብሔር ነው»</Text>
          </View>

          <Text style={styles.paragraph}>• የሐዋርያት ሥራ 20፡28፦</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«በገዛ ደሙ የዋጃትን የእግዚአብሔርን ቤተ ክርስቲያን»።</Text>
          </View>
          <Text style={styles.paragraph}>
            እግዚአብሔር (መለኮት) በባሕርዩ ደም የለውም፤ ነገር ግን በተዋሕዶ የሥጋን ደም የራሱ ስላደረገ የእግዚአብሔር ደም ተባለ።
          </Text>

          <Text style={styles.paragraph}>• ቆላስይስ 2፡9፦</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«በእርሱ የመለኮት ሙላት ሁሉ በሰውነት ተገልጦ ይኖራልና»</Text>
          </View>

          <Text style={styles.paragraph}>• ዕብራውያን 13:8፦</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ኢየሱስ ክርስቶስ ትናንትና ዛሬ እስከ ዘላለምም ያው ነው»</Text>
          </View>
        </View>

        {/* የቅዱሳን አባቶች ትምህርትና የተዋሕዶ ምሳሌዎች */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የቅዱሳን አባቶች ትምህርትና የተዋሕዶ ምሳሌዎች</Text>
          </View>

          <Text style={styles.paragraph}>የቤተክርስቲያን ዓምዶች ይህንን ምስጢር በሚከተለው መልኩ አስተምረውታል፦</Text>

          <Text style={styles.sectionHeading}>1. ቅዱስ አትናቴዎስ ሐዋርያዊና የእሳት ምሳሌ</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እንደ ብረትና እሳት ተዋሕዶ ነው፤ ብረቱ ሲቀጠቀጥ እሳቱ አብሮ ይቀጠቀጣል፣ እሳቱ ሲያበራ ብረቱም አብሮ ያበራል፤ ነገር ግን እሳቱ ብረት አልሆነም፣ ብረቱም እሳት አልሆነም»</Text>
          </View>
          <Text style={styles.paragraph}>በማለት ባሕርያቱ ሳይቀላቀሉ አንድ መሆናቸውን ገልጧል።</Text>

          <Text style={styles.sectionHeading}>2. ቅዱስ ቄርሎስና የነፍስና ሥጋ ምሳሌ</Text>
          <Text style={styles.paragraph}>ሰው የነፍስና የሥጋ ተዋሕዶ ውጤት እንደሆነና አንድ ባሕርይ እንደሚባል ሁሉ፣ ክርስቶስም መለኮትና ትስብእት ተዋሕደው አንድ የተዋሐደ ባሕርይ ሆኗል በማለት አንድነቱን አጽንቷል።</Text>

          <Text style={styles.sectionHeading}>3. ቅዱስ ጎርጎርዮስ ዘእንዚናንዙ</Text>
          <Text style={styles.paragraph}>«ያልተዋሐደው አልዳነም» የሚለው የታወቀው ንግግሩ፣ መለኮት ሙሉውን የሰው ባሕርይ (ነፍስንና ሥጋን) ካልተዋሐደ ሰው ሙሉ ድኅነትን አያገኝም ነበር በማለት ያስረዳል።</Text>

          <Text style={styles.sectionHeading}>4. ቅዱስ ሳዊሮስና ቅዱስ ዮሐንስ አፈወርቅ</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«መለኮት በሥጋ ተሸሸገ፤ ሥጋም በመለኮት ከበረ። ሁለቱ ግን አንድ ሆኑ እንጂ አልተለያዩም»</Text>
          </View>
          <Text style={styles.paragraph}>በማለት የሥጋዌን ታላቅነትና የባሕርያት አንድነትን አስተምረዋል።</Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ</Text>
          </View>

          <Text style={styles.paragraph}>
            በዚህ ዝርዝር መገለጥ እንደተመለከትነው፣ የአንድ ባሕርይ ትምህርት የክርስትና እምነት የልብ ምት ነው። የጌታችን የኢየሱስ ክርስቶስ ማንነት፣ በዘለዓለማዊ ልደቱ ከአብ፣ እና በጊዜያዊ ልደቱ ከድንግል ማርያም፣ የሁለት ፍጹም ባሕርያት (መለኮታዊና ሰብዓዊ) በአንድ አካል ውስጥ ያለመቀላቀል፣ ያለመለወጥ፣ ያለመለያየትና ያለመከፋፈል መዋሐዳቸው፣ ፍጹም አምላክነቱና ፍጹም ሰውነቱ፣ እንዲሁም እንደ ብቸኛ መድኃኒትና አዳኝ ያለው ሚና፣ የድኅነት ምሥጢርን ሙሉ በሙሉ ይገልጻል።
          </Text>

          <Text style={styles.paragraph}>
            ይህ ትምህርት የሰው ልጅን ከኃጢአትና ከሞት ባርነት ነፃ በማውጣት፣ የመለኮት ባሕርይ ተካፋይ እንዲሆን የሚያስችል ዘለዓለማዊ ድኅነትን ያረጋግጣል። የኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ይህንን ቀኖና አጥብቃ በመያዝ፣ የክርስቶስን ማንነትና የድኅነት ሥራው ፍጹምነት ትመሰክራለች።
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
    marginVertical: 4
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
    color: '#111111' 
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