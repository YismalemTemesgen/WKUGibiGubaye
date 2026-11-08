import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WhoIsJesusScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>ኢየሱስ ክርስቶስ ማን ነው?</Text>
        
        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            ኢየሱስ የሚለው ስም፣ ከቀላል ስያሜ በላይ ሆኖ፣ የክርስትና እምነት ማዕከላዊ ምሥጢር፣ የድኅነት ታሪክ ፍጻሜ እና የመለኮታዊ ፍቅር ፍጹም መገለጫ ነው። ይህ ስም ከዕብራይስጡ የሹዓ (ኢያሱ) የመጣ ሲሆን ትርጉሙ እግዚአብሔር ያድናል (መድኃኒት) ማለት ነው።
          </Text>
          
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እርሱ ሕዝቡን ከኃጢአታቸው ያድናቸዋልና ስሙን ኢየሱስ ትለዋለህ» (ማቴዎስ 1:21)</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለው የመልአኩ ቃል፣ የዚህን ስም እውነተኛ ትርጉም ያረጋግጣል። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ ከሐዋርያት ዘመን ጀምሮ ባላት ጽኑ ትውፊትና ቀኖናዊ አስተምህሮ፣ የኢየሱስ ክርስቶስን ፍጹም አምላክነትና ፍጹም ሰውነት፣ የዘለዓለማዊ ልጅነቱን፣ መሢሕነቱን፣ አዳኝነቱን እና ሊቀ ካህናትነቱን በማያወላውል እምነት ስትሰብክ ኖራለች።
          </Text>

          <Text style={styles.paragraph}>
            በቅድስት ቤተክርስቲያናችን አስተምህሮ፣ ክርስቶስ አንድ አካል ከሁለት ባሕርይ በሆነው ተዋሕዶ አማካይነት መለኮትንና ሰብአዊነትን ያለመቀላቀል፣ ያለመለወጥ፣ ያለመከፋፈልና ያለመለያየት ለዘለዓለም አንድ አድርጓል። እርሱ የድኅነትን ሥራ ለመፈጸም የሰውን ባሕርይ ሙሉ በሙሉ ነሣ እንጂ፣ በባሕርይው ፈጽሞ አልተለወጠም፤ ይህ አትናቴዎሳዊና ቄርሎሳዊ ቀኖና የትህርታችን ሁሉ መሠረት ነው።
          </Text>
        </View>

        {/* ኢየሱስ ክርስቶስ የባሕርይ አምላክ ነው */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ኢየሱስ ክርስቶስ የባሕርይ አምላክ ነው</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን ኢየሱስ ክርስቶስ በባሕርይው አምላክ ነው። እርሱ ከመለኮታዊ ባሕርይ ውጭ የሆነ ፍጡር ሳይሆን፣ ከአብና ከመንፈስ ቅዱስ ጋር በመለኮት አንድ ነው። «እኔና አብ አንድ ነን» (ዮሐንስ 10:30) ሲል መለኮታዊ ህልውናው ከአብ ህልውና የማይለይ መሆኑን መግለጡ ነው። ሐዋርያው ቅዱስ ቶማስ «ጌታዬ አምላኬም» (ዮሐንስ 20:28) ብሎ ሲሰግድለት ክርስቶስ አምላክነቱን አጽንቶ ተቀብሎታል።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ በሥጋ መጣ፥ እርሱም ከሁሉ በላይ ሆኖ ለዘላለም የተባረከ አምላክ ነው» (ሮሜ 9:5)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት የክርስቶስን ልዕልና መስክሯል። እርሱ ሁሉን የሚያውቅ፣ በሁሉ ያለ እና ሁሉን ቻይ የሆነ የክብር ጌታ ነው። ቅዱስ ዮሐንስም «እርሱ እውነተኛ አምላክና የዘላለም ሕይወት ነው» (1ኛ ዮሐንስ 5:20) በማለት አምላክነቱን አረጋግጧል።
          </Text>

          <Text style={styles.paragraph}>
            ክርስቶስ በባሕርይው አምላክ ባይሆን ኖሮ፣ መስዋዕትነቱ ዓለምን ለማዳን በቂ ባልሆነ ነበር። ወሰን የሌለውን የሰው ልጅ ኃጢአት ሊያጥብ የሚችለው ወሰን የሌለው መለኮታዊ ኃይል ብቻ ነውና። በመሆኑም ክርስቶስ አምላክ ወሰብእ (አምላክም ሰውም) የሆነው ለዓለም ቤዛ ለመሆን ነው።
          </Text>
        </View>

        {/* ኢየሱስ ክርስቶስ የእግዚአብሔር የባሕርይ ልጅ ነው */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ኢየሱስ ክርስቶስ የእግዚአብሔር የባሕርይ ልጅ ነው</Text>
          </View>

          <Text style={styles.paragraph}>
            የክርስቶስ ልጅነት እንደ መላእክት ወይም እንደ ቅዱሳን በጸጋና በክብር የተሰጠ ሳይሆን፣ በባሕርይ ከአብ የተገኘ ልጅነት ነው። ከእርሱ በቀር ሌላ ልጅ የሌለው አንድያ ልጁ (ዮሐንስ 3:16) መባሉ ይህን ይገልጻል። ይህ ልጅነት ከአብ ጋር ያለውን ፍጹም መለኮታዊ ግንኙነት ያሳያል።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እነሆም ድምፅ ከሰማያት መጥቶ በእርሱ ደስ የሚለኝ የምወደው ልጄ ይህ ነው አለ» (ማቴዎስ 3:17)</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለው የአብ ምስክርነት፣ ክርስቶስ ከአብ የወጣ የባሕርይ ብርሃን መሆኑን ያረጋግጣል። አይሁድ ክርስቶስን ሊገድሉት የፈለጉበት ምክንያት እግዚአብሔር አባቴ ነው ብሎ ራሱን ከእግዚአብሔር ጋር ትክክል ስለ አደረገ ነው (ዮሐንስ 5:18)። ይህም ወልድ ከአብ ጋር በባሕርይ አንድ መሆኑን ራሳቸው ጠላቶቹም የተረዱት እውነት እንደነበር ያሳያል።
          </Text>
        </View>

        {/* ኢየሱስ ክርስቶስ ፍጹም አምላክ ፍጹም ሰው ነው */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ኢየሱስ ክርስቶስ ፍጹም አምላክ ፍጹም ሰው ነው</Text>
          </View>

          <Text style={styles.paragraph}>
            የቤተክርስቲያናችን ዶግማ መሠረት ተዋሕዶ ነው። ይህም መለኮትና ትስብእት (ሰውነት) ያለ መቀላቀል፣ ያለ መለወጥ፣ ያለ መከፋፈልና ያለ መለያየት አንድ ሆኑ ማለት ነው። ከተዋሕዶ በኋላ ሁለት ባሕርይ ሳይሆን አንድ አካል አንድ ባሕርይ ነው። «ቃል ሥጋ ሆነ» (ዮሐንስ 1:14) ሲባል መለኮት በሰውነቱ ተገለጠ ማለት ነው። እርሱ ፍጹም አምላክ በመሆኑ አዳነን፤ ፍጹም ሰው በመሆኑ ደግሞ ስለ እኛ ሞተልን። ቅዱስ ቄርሎስ እንዳስተማረው፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የእግዚአብሔር ቃል የተዋሐደው አንድ ባሕርይ»</Text>
          </View>

          <Text style={styles.paragraph}>
            ብለን እናምናለን። በመሆኑም በክርስቶስ ዘንድ የመለኮት ሥራና የሰውነት ሥራ ተብሎ አይከፈልም፤ የሚሠራው ሁሉ ተዋሕዶ የከበረው አንዱ ክርስቶስ ነው።
          </Text>
        </View>

        {/* ኢየሱስ ክርስቶስ የእግዚአብሔር ቃል ነው */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ኢየሱስ ክርስቶስ የእግዚአብሔር ቃል ነው</Text>
          </View>

          <Text style={styles.paragraph}>
            «በመጀመሪያ ቃል ነበረ» (ዮሐንስ 1:1) ተብሎ እንደተጻፈ፣ ክርስቶስ የአብ ቃል ነው። ቃል የአእምሮ መገለጫ እንደሆነ ሁሉ፣ ወልድም የአብ መገለጫ ነው። ቃል ከአእምሮ እንደማይለይ፣ ወልድም ከአብ አይለይም። እርሱ የአብ ጥበብና ኃይል ነው (1ኛ ቆሮንቶስ 1:24)።
          </Text>

          <Text style={styles.paragraph}>
            ዓለማት ሁሉ የተፈጠሩት በዚህ ቃል ነው፤ «በእግዚአብሔር ቃል ሰማያት ጸኑ» (መዝሙር 32:6)። ይህ ቃል ሕያውና የሚሠራ ነው፤ የማይታየውን አምላክ ፈቃድ ለሰው ልጆች የገለጠ፣ በሥጋ ተገልጦም የድኅነትን ቃል ያበሰረ ዘላለማዊ ቃል ነው።
          </Text>
        </View>

        {/* ኢየሱስ ክርስቶስ አንድ አካል ነው */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ኢየሱስ ክርስቶስ አንድ አካል ነው</Text>
          </View>

          <Text style={styles.paragraph}>
            ከተዋሕዶ በኋላ ክርስቶስን ለሁለት መክፈል ንስጥሮሳዊነት ታላቅ ስሕተት ነው። አምላክ ለብቻ ሰው ለብቻ ተብሎ አይለይም፤ በመስቀል ላይ የሞተውና ተአምራትን የሠራው ያው አንዱ ክርስቶስ ነው። ጌታ አንድ ነው፤ እምነት አንድ ነው፤ ጥምቀት አንድ ናት (ኤፌሶን 4:5)።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ከተዋሕዶ በኋላ ክፍያ የለም»</Text>
          </View>

          <Text style={styles.paragraph}>
            ክርስቶስ አንድ አካል አንድ ባሕርይ ነው። ሁለት አካላት የሚለው ትምህርት የክርስቶስን አንድነትና የቤዛነቱን ዋጋ የሚያሳንስ ባዕድ ትምህርት ነው።
          </Text>
        </View>

        {/* ዓለማት ሳይፈጠሩ ከአብ የተወለደ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ዓለማት ሳይፈጠሩ ከአብ የተወለደ</Text>
          </View>

          <Text style={styles.paragraph}>
            የክርስቶስ ቀዳማዊ ልደት ከአብ ነው። ይህ ልደት እናት የሌለበት፣ ጊዜ የማይቀድመውና ያልተፈጠረ ነው። «ገና ተራሮች ሳይመሠረቱ እኔ ተወለድሁ» (ምሳሌ 8:25)። እርሱ ከአብ ጋር ዘለዓለማዊ ነው፤ አብ አባት ሆኖ ሳይኖር የነበረበት ጊዜ የለም፣ ወልድም ልጅ ሆኖ ሳይኖር የነበረበት ጊዜ የለም። ብርሃን ከፀሐይ እንደሚወጣ፣ ወልድም ከአብ ያለ መለየትና ያለ መቅደም ተወለደ።
          </Text>
        </View>

        {/* በሥጋ ከድንግል ማርያም የተወለደ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>በሥጋ ከድንግል ማርያም የተወለደ</Text>
          </View>

          <Text style={styles.paragraph}>
            በዘመነ ሥጋዌ ክርስቶስ ዳግመኛ ከድንግል ማርያም ተወለደ። ይህ ልደት አባት የሌለበትና ድንግልና ሳይለወጥ የሆነ ድንቅ ምስጢር ነው። «እነሆ ድንግል ትጸንሳለች ወንድ ልጅም ትወልዳለች» (ኢሳይያስ 7:14)። እርሱ ከእርሷ ነፍስንና ሥጋን ነሥቶ ፍጹም ሰው ሆነ። ድንግል ማርያም ወላዲተ አምላክ ተብላ የምትጠራው አምላክን በሥጋ ስለወለደች ነው።
          </Text>
        </View>

        {/* ኢየሱስ ክርስቶስ ፈጣሪያችን ነው */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ኢየሱስ ክርስቶስ ፈጣሪያችን ነው</Text>
          </View>

          <Text style={styles.paragraph}>
            ዓለም የተፈጠረው በእርሱ ነው። «ሁሉ በእርሱ ሆነ፥ ከሆነውም አንዳች ስንኳ ያለ እርሱ አልሆነም» (ዮሐንስ 1:3)። መለኮታዊ እጁ ፍጥረትን ሁሉ የፈጠረና ደግፎ የያዘ ነው። «ሁሉ በእርሱና ለእርሱ ተፈጥሮአል፤ እርሱም ከሁሉ በፊት ነው ሁሉም በእርሱ ጸንቶ ይኖራል» (ቆላስይስ 1:16-17)።
          </Text>
        </View>

        {/* ኢየሱስ ክርስቶስ አዳኛችንና ቤዛችን ነው */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ኢየሱስ ክርስቶስ አዳኛችንና ቤዛችን ነው</Text>
          </View>

          <Text style={styles.paragraph}>
            የሰው ልጅ በኃጢአት ምክንያት ከእግዚአብሔር ተለይቶ ነበር፤ ክርስቶስ ግን በደሙ ዋጀን። «በውድ ልጁም እንደ ጸጋው ባለጠግነት መጠን በደሙ የተደረገ ቤዛነታችንን የኃጢአታችንን ስርየት አገኘን» (ኤፌሶን 1:7)። ቤዛ ማለት በሞቱ ሞትን የሻረ ማለት ነው። እርሱ ለሰው ልጆች ሁሉ የሚበቃ ዋጋ በመስቀል ላይ ከፈለ።
          </Text>
        </View>

        {/* ኢየሱስ ክርስቶስ ዳግማዊ አዳም ነው */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ኢየሱስ ክርስቶስ ዳግማዊ አዳም ነው</Text>
          </View>

          <Text style={styles.paragraph}>
            ቀዳማዊ አዳም ሕግን ጥሶ ሞትን አመጣ፤ ክርስቶስ ግን ሕግን ፈጽሞ ሕይወታችንን አመጣ። «በአዳም ሁሉ እንደሚሞቱ እንዲሁ በክርስቶስ ሁሉ ሕያዋን ይሆናሉ» (1ኛ ቆሮንቶስ 15:22)። አዳም በዕፀ በለስ ምክንያት ገነትን አጣ፤ ክርስቶስ በዕፀ መስቀል ምክንያት ገነትን መለሰልን። እርሱ አዲስ ፍጥረትን በእኛ ውስጥ የፈጠረ የሕይወት ራስ ነው።
          </Text>
        </View>

        {/* የማይታየው እግዚአብሔር ምሳሌ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የማይታየው እግዚአብሔር ምሳሌ</Text>
          </View>

          <Text style={styles.paragraph}>
            እግዚአብሔርን ማንም አይቶት አያውቅም፤ ክርስቶስ ግን ገለጠው። እርሱም «የማይታይ አምላክ ምሳሌ ነው» (ቆላስይስ 1:15)። «እኔን ያየ አብን አይቷል» (ዮሐንስ 14:9) በማለት ፍጹም መለኮታዊ መገለጫ መሆኑን አስተምሯል። እርሱ የእግዚአብሔር ክብር ጸዳልና የባሕርዩ ምሳሌ ነው (ዕብራውያን 1:3)።
          </Text>
        </View>

        {/* የዘለዓለም ሊቀ ካህናትና መሥዋዕት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የዘለዓለም ሊቀ ካህናትና መሥዋዕት</Text>
          </View>

          <Text style={styles.paragraph}>
            ክርስቶስ ራሱ መሥዋዕት ራሱ ካህን ሆኖ ቀረበ። «እንደ መልከ ጼዴቅ ሹመት ለዘላለም ካህን ነህ» (ዕብራውያን 5:6፤ መዝሙር 109:4)። እርሱ በመስቀል ላይ ራሱን እንደ ንጹሕ መሥዋዕት አቅርቦ የዓለምን ኃጢአት አስወገደ። ክህነቱ የማይለወጥና ለዘላለም የሚኖር ነው።
          </Text>
        </View>

        {/* የሕግና የነቢያት ፍጻሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የሕግና የነቢያት ፍጻሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            «ሕግንና ነቢያትን ለመፈጸም እንጂ ለመሻር አልመጣሁም» (ማቴዎስ 5:17)። በብሉይ ኪዳን በምሳሌና በትንቢት የተነገረው ሁሉ በእርሱ ተፈጸመ። እርሱ የሕግ ፍጻሜ ነው (ሮሜ 10:4)። ጥላ የነበረው ሁሉ በእርሱ እውነት ሆነ።
          </Text>
        </View>

        {/* የነገሥታት ንጉሥ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የነገሥታት ንጉሥ</Text>
          </View>

          <Text style={styles.paragraph}>
            ክርስቶስ በምድርና በሰማይ ሥልጣን ያለው ንጉሥ ነው። መንግሥቱ የዘላለም መንግሥት ነው (ዳንኤል 7:14)። «በልብሱና በጭኑም የተጻፈበት፦ የነገሥታት ንጉሥና የጌታዎች ጌታ የሚል ስም አለው» (ራእይ 19:16)። መንግሥቱ እንደ ምድራዊ ነገሥታት በኃይል ሳይሆን በጽድቅና በሰላም ነው።
          </Text>
        </View>

        {/* የሕያዋንና የሙታን ዳኛ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የሕያዋንና የሙታን ዳኛ</Text>
          </View>

          <Text style={styles.paragraph}>
            በዓለም ፍጻሜ ክርስቶስ በክብር ይመጣል። እያንዳንዱን እንደ ሥራው ይከፍለዋል። «አብ በማንም አይፈርድም፥ ነገር ግን ፍርድን ሁሉ ለወልድ ሰጠው» (ዮሐንስ 5:22)። እርሱ ፍትሐዊና እውነተኛ ዳኛ ነው። ሁላችን በክርስቶስ የፍርድ ወንበር ፊት ልንቆም ይገባናል (2ኛ ቆሮንቶስ 5:10)።
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