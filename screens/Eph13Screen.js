import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Eph13Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>
          «የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት ይባረክ።»{'\n'}— 2ኛ ቆሮ 1፥3
        </Text>

        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ ሥላሴን አንድነትና የጌታችን የኢየሱስ ክርስቶስን መለኮታዊ ማንነት በጽኑ ታስተምራለች。 ይሁን እንጂ፣ በሐዋርያው ቅዱስ ጳውሎስ መልእክት በ2ኛ ቆሮንቶስ 1:3 ላይ የሚገኘው
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት የሆነው ሁሉንም የሚያጽናና የምሕረት አባት፥ የመጽናናትም ሁሉ አምላክ ይባረክ።»</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለው አገላለጽ፣ በተለይም አምላክና አባት የሚለው ቃል የክርስቶስን ፍጹም አምላክነት የሚጋፋ ይመسላል የሚል የተሳሳተ ግንዛቤ ሊፈጥር ይችላል። ይህንኑ ጥያቄ ለመመለስ፣ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ከጥንት ሐዋርያዊ ትውፊት ጀምሮ ስትጠብቀው የመጣችውን ትክክለኛውን ትርጓሜ ማብራራት አስፈላጊ ነው።
          </Text>

          <Text style={styles.paragraph}>
            ይህን ጥቅስ በጥልቀት ለመመርመር፣ በቤተክርስቲያን ነገረ መለኮት ውስጥ ዋነኛውን ቦታ የሚይዘውን የባሕርያት ገንዘብ መገነዛዘብ ምሥጢር መገንዘብ ወሳኝ ነው። ይህ አስተምህሮ፣ መለኮታዊው አካል ቃለ እግዚአብሔር፣ የሰውን ባሕርይ በመውሰዱ ምክንያት፤ የሰው ባሕርይ የሆኑትን ነገሮች (እንደ መራብ፣ መጠማት፣ መሞት እና አምላክ መኖርን) የራሱ አድርጎ መናገሩን ያብራራል። በመሆኑም፣ ቃለ እግዚአብሔር አምላክነቱን ሳይቀንስ፥ ሰው እንደመሆኑ መጠን አብን አምላኬ ብሎ ሊጠራ ይችላል።
          </Text>

          <Text style={styles.paragraph}>
            የዚህ ትምህርት ዋና ዓላማ የክርስቶስን ፍጹም አምላክነትና ፍጹም ሰውነት፣ እንዲሁም የሁለቱ ባሕርያት ያለመቀላቀል፣ ያለመለወጥ፣ ያለመለያየትና ያለመከፋፈል በአንድ አካል ውስጥ መዋሐዳቸውን (አካላዊ ተዋሕዶ) ማረጋገጥ ነው። ይህ ጥልቅ እውነት በመጽሐፍ ቅዱሳዊ ማስረጃዎችና በቅዱሳን አባቶች ትምህርት የሚደገፍ ሲሆን፣ የእግዚአብሔርን ታላቅነትና የክርስቶስን ማንነት ልዩነት በጥልቀት እንድንመረምር ይጋብዘናል።
          </Text>
        </View>

        {/* 1. "የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት" - የጥቅሱ ትርጓሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>«የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት» - የጥቅሱ ትርጓሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            ቅዱስ ጳውሎስ በ2ኛ ቆሮንቶስ 1:3 ላይ «የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት» በማለት ሲጠራው፣ ይህ አገላለጽ የክርስቶስን ፍጹም አምላክነት የሚክድ ሳይሆን፣ ይልቁንም የሥጋዌውን ምሥጢር፣ የትሕትናውን ጥልቀትና የሰውን ባሕርይ ሙሉ በሙሉ መቀበሉን የሚያሳይ ነው። ይህ ጥቅስ አንዱ ክርስቶስ ፍጹም አምላክና ፍጹም ሰው መሆኑን ያረጋግጣል። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያንና የቅዱሳን አበው ትምህርት ይህንን ቃል የሚተረጉሙት በክርስቶስ ፍጹም አምላክነትና ፍጹም ሰውነት አንድነት (አካላዊ ተዋሕዶ) መሠረት ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• አምላክ የሚለው ቃል፦</Text> አብ የክርስቶስ አምላክ ተብሎ ሲጠራ፣ ይህ የሚያመለክተው ክርስቶስ የለበሰውን ፍጹም ሰውነት ነው። መለኮታዊው ቃል ሥጋን ነሥቶ ሰው በመሆኑ፣ በሰውነቱ በኩል አብን አምላኩ ብሎ ይጠራል። ይህ የባሕርያት ገንዘብ መገነዛዘብ ምሥጢር ነው። መለኮታዊው አካል የሰውን ባሕርይ በመውሰዱ ምክንያት፣ የሰው ባሕርይ የሆኑትን ነገሮች (እንደ መራብ፣ መጠማት፣ መሞት፣ እና አምላክ መኖርን) የራሱ አድርጎ ይናገራል። ጌታችን ኢየሱስ ክርስቶስ በዮሐንስ ወንጌል 20:17 ላይ ለመግደላዊት ማርያም «ወደ አባቴና ወደ አባታችሁ፣ ወደ አምላኬና ወደ አምላካችሁ ዐርጋለሁ» ሲል የተናገረው፣ በሥጋዌው ለለበሰው ሰውነት ሲል እንጂ፣ እንደ አምላክነቱ ከአብ ጋር አንድ ባሕርይ ነውና።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• አባት የሚለው ቃል፦</Text> አብ የክርስቶስ አባት ተብሎ ሲጠራ፣ ይህ የሚያመለክተው የክርስቶስን ዘለዓለማዊ መለኮታዊ ልደት ነው። ወልድ ከዘመናት አስቀድሞ ያለ እናት ከአብ ብቻ የተወለደ፣ ከሥላሴ አንዱ አካል የሆነ ዘለዓለማዊ አምላክ ነው። በዚህ ግንኙነት፣ አብ የወልድ የባሕርይ አባት ነው እንጂ፣ በፍጥረት መልክ አይደለም።
          </Text>

          <Text style={styles.paragraph}>
            የሐዋርያት ትምህርት የክርስቶስን ጌትነትና አምላክነት በግልጽ ይመሰክራል። ቅዱስ ጳውሎስ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«በክርስቶስ በሰማያዊ ስፍራ በመንፈሳዊ በረከት ሁሉ የባረከን የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት ይባረክ» (ኤፌሶን 1:3)</Text>
          </View>

          <Text style={styles.paragraph}>
            ሲል፣ መለኮታዊ ጸጋው በክርስቶስ ሰውነት በኩል ለሰው ልጆች እንደደረሰ ያስረዳል። በተመሳሳይ፣ ቅዱስ ጴጥሮስም፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እንደ ምሕረቱ ብዛት የወለደን የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት ይባረክ» (1ኛ ጴጥሮስ 1:3)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት፣ ሥጋዌው ከመለኮታዊ ምሕረት ጋር የተገናኘ መሆኑን ያረጋግጣል። ሁለቱም ሐዋርያት ክርስቶስን ጌታችን በማለት፣ ፍጹም አምላክነቱንና አዳኝነቱን በግልጽ መስክረዋል。
          </Text>
        </View>

        {/* 2. የቅዱሳን አበው ትርጓሜ ፡ "የኢየሱስ ክርስቶስ አምላክና አባት" */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የቅዱሳን አበው ትርጓሜ ፡ «የኢየሱስ ክርስቶስ አምላክና አባት»</Text>
          </View>

          <Text style={styles.paragraph}>
            የቤተክርስቲያን አባቶች የ2ኛ ቆሮንቶስ 1:3ን ጥቅስ በጥልቀት ተርጉመውታል። ትርጓሜያቸውም የክርስቶስን ፍጹም አምላክነትና ፍጹም ሰውነት የሚያረጋግጥ ሲሆን፣ አገላለጹም የባሕርያት ገንዘብ መገነዛዘብ ውጤት መሆኑን ያብራራል። ቅዱስ ዮሐንስ አፈወርቅ እንዲህ ሲል ያብራራል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ አብን አምላኬ ሲለው፣ በሰውነቱ ምክንያት ይናገራል፤ አባቴ ሲለው ደግሞ፣ በመለኮቱ ምክንያት ይናገራል።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ አባባል፣ ተናጋሪው አንዱ ሥግው ቃል መሆኑንና አምላኬ የሚለውን ሰው በመሆኑ፣ አባቴ የሚለውን ደግሞ የባሕርይ ልጅ በመሆኑ እንደሚናገር ያስረዳል።
          </Text>

          <Text style={styles.paragraph}>
            የኒቂያ ጉባኤ ዋነኛ ተዋጊ የነበረው ቅዱስ አትናቴዎስ፣ አርዮሳዊያንን በመቃወም፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ወልድ ከአብ ጋር አንድ ባሕርይ ነው፤ እርሱ ጌታ ነው፣ ከአብ ጋር እኩል ነው። አብ የወልድ አምላክ ተብሎ ሲጠራ፣ ይህ የሚያመለክተው የወልድን ሥጋዌ እንጂ፣ መለኮታዊ ማንነቱን አይደለም።»</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት የመለኮቱን ክብር ሳይለወጥ አጽንዖት ሰጥቷል። አባታችን ይህንን ሲናገር የክርስቶስን አንድ ባሕርይ መሆን በመመሥረት፣ በሥጋዌው የተገለጠውን ትሕትና ከዘለዓለማዊ አምላክነቱ ጋር አብሮ ማየት እንደሚገባ ያስተምራል።
          </Text>

          <Text style={styles.paragraph}>
            የቤተክርስቲያናችንን አንድ አካል አንድ ባሕርይ ትምህርት መሠረት የጣለው ቅዱስ ቄርሎስ ዘእስክንድርያም፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የእግዚአብሔር ቃል ሥጋን ነሣ እንጂ፣ መለኮት ወደ ሥጋነት አልተለወጠም፤ ሥጋም ወደ መለኮትነት አልተለወጠም፤ ነገር ግን ሁለቱ ባሕርያት ያለመቀላቀልና ያለመለወጥ በአንድ አካል ውስጥ ተዋሕደዋል። ስለዚህ፣ አብ የክርስቶስ አምላክ ተብሎ ሲጠራ፣ ይህ የሚያመለክተው ክርስቶስ የለበሰውን ሰውነት ነው።»</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት፣ የቃሉን ትምህርት በሥነ መለኮት አረጋግጧል。
          </Text>

          <Text style={styles.paragraph}>
            ሊቅ ቅዱስ ጎርጎሬዎስ ዘእንዚናዙም ይህንኑ ምሥጢር ያብራራል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«መለኮትና ትስብእት ተዋሕደው አንድ ሆነዋል፣ ነገር ግን ይህ አንድነት ባሕርያቱን አላጠፋም፣ ይልቁንም ሁለቱንም ባሕርያት አክብሯል። የቃሉን ትሕትና ስንመለከት፣ እርሱ እንደ ሰውነቱ አብን አምላኩ ይላል፤ የቃሉን ክብር ስንመለከት ግን፣ እርሱ ከአብ ጋር አንድ አምላክ ነው።»</Text>
          </View>
        </View>

        {/* 3. የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን አስተምህሮ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን አስተምህሮ</Text>
          </View>

          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ የክርስቶስን አካላዊ ተዋሕዶ በጽኑ ትውፊትና ቀኖናዊ ትምህርቷ ትጠብቃለች። ቤተክርስቲያናችን የምታምነው «አንድ አካል አንድ ባሕርይ» በሚለው ትምህርት ነው። ይህ ማለት፣ ከሥጋዌ በኋላ፣ መለኮትና ትስብእት ተዋሕደው አንድ ባሕርይ ሆነዋል， ነገር ግን ይህ አንድነት ባሕርያቱ ተቀላቅለዋል ወይም ወደ አንድ አዲስ ባሕርይ ተለውጠዋል ማለት አይደለም።
          </Text>

          <Text style={styles.paragraph}>
            በዚህ አስተምህሮ መሠረት፣ 2ኛ ቆሮንቶስ 1:3 ላይ ያለው፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት»</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለው አገላለጽ የክርስቶስን ፍጹም ሰውነት ያረጋግጣል። እርሱ የሰውን ባሕርይ ሙሉ በሙሉ በመውሰዱ， እንደ ሰውነቱ አብን አምላኩ ብሎ ሊጠራ ይችላል። ይህ ደግሞ የክርስቶስን ትሕትናና የድኅነት ሥራውን ፍጹምነት ያሳያል። በተመሳሳይ፣ አባት መባሉ ደግሞ የክርስቶስን ዘለዓለማዊ መለኮታዊ ልደት ከአብ ያመለክታል።
          </Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ</Text>
          </View>

          <Text style={styles.paragraph}>
            በዚህ ዝርዝር መገለጥ እንደተመለከትነው፣ የ2ኛ ቆሮንቶስ 1:3 ጥቅስ የክርስትና እምነት የልብ ምት የሆነውን ነገረ ክርስቶስን ጥልቀት ያሳያል። «የጌታችን የኢየሱስ ክርስቶስ አምላክና አባት» የሚለው አገላለጽ፣ የክርስቶስን ፍጹም ሰውነትና ትሕትና የሚያሳይ እንጂ፣ መለኮታዊ ማንነቱን የሚቀንስ አይደለም። የጌታችን የኢየሱስ ክርስቶስ ማንነት፣ በዘለዓለማዊ ልደቱ ከአብ፣ እና በጊዜያዊ ልደቱ ከድንግል ማርያም， የሁለት ፍጹም ባሕርያት (መለኮታዊና ሰብዓዊ) በአንድ አካል ውስጥ ያለመቀላቀል፣ ያለመለወጥ፣ ያለመለያየትና ያለመከፋፈል መዋሐዳቸው， ፍጹም አምላክነቱና ፍጹም ሰውነቱ， እንዲሁም እንደ ብቸኛ መድኃኒትና አዳኝ ያለው ሚና፣ የድኅነት ምሥጢርን ሙሉ በሙሉ ይገልጻል።
          </Text>

          <Text style={styles.paragraph}>
            ይህ ታላቅ ምሥጢር፣ እግዚአብሔር በታላቅ ፍቅሩ የሰውን ልጅ ከውድቀት ለማዳን የወሰደውን እርምጃ ያሳያል። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ ይህንን ውስብስብና ጥልቅ ትምህርት በጽኑ ትውፊትና ቀኖናዊ ትምህርቷ ስትጠብቅ ኖራለች። የክርስቶስን ማንነት በትክክል መረዳት፣ የእግዚአብሔርን ፍቅር፣ ፍትሕና ምሕረት በጥልቀት እንድንረዳ ያስችለናል። እርሱ የዓለም ሁሉ ፈጣሪ፣ አዳኝና ገዢ እንደመሆኑ መጠን፣ ለእርሱ ክብር፣ ውዳሴና አምልኮ ይገባል። ይህ እውነት ለዘለዓለም በቤተክርስቲያን ውስጥ ሲሰበክና ሲከበር ይኖራል፣ የክርስቲያኖችም የጽኑ እምነት፣ የብሩህ ተስፋና የመለኮታዊ ፍቅር ማረጋገጫ ሆኖ ይቀጥላል።
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
    marginBottom: 20, 
    lineHeight: 26 
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
    fontSize: 15, 
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