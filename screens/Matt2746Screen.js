import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Matt2746Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>አምላኬ አምላኬ ለምን ተውኸኝ [ማቴ 27:46]</Text>
        
        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            ጌታችንና መድኃኒታችን ኢየሱስ ክርስቶስ በመስቀል አደባባይ ላይ ሆኖ በዘጠኝ ሰዓት በታላቅ ድምፅ፦
          </Text>
          
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ኤሎሄ ኤሎሄ ለማ ሰበቅታኒ? አምላኬ አምላኬ ለምን ተውኸኝ?»</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት የተናገረው ቃል፣ የሥጋዌን ረቂቅነትና የቤዛነትን ጥልቀት የሚመሰክር ሰማያዊ ምስጢር ነው። ይህ ቃል በሥጋዊ አእምሮ ሲታይ አምላክ ለብቻው የተተወ ወይም መለኮት ሥጋን የለቀቀ ሊመስል ይችላል። ነገር ግን የቤተ ክርስቲያናችን ሊቃውንት እንደሚመሰክሩት፣ ይህ ቃል የፍቅሩ መግለጫና የቤዛነቱ ማረጋገጫ እንጂ መለኮትና ትስብእት በተዋሕዶ ከከበሩበት አንድ አካልና አንድ ባሕርይ የተለዩበት ከፍልጠት (መለያየት) የተነገረ አይደለም።
          </Text>

          <Text style={styles.paragraph}>
            ይህ ቃል በክርስትና ታሪክ ውስጥ ለብዙዎች የመሰናከያ ዐለት ቢሆንባቸውም፣ በተዋሕዶ ሃይማኖት ለጸኑት ግን ራሱን ባዶ የማድረጉ (ፊል 2:7) ምስጢር መክፈቻ ነው። ክርስቶስ በመስቀል ላይ እንደ ፍጹም ሰው፣ የኃጢአትን ሸክም እና የሰውን ልጅ የመጨረሻውን የብቸኝነትና የሞት ፍርሃት ሙሉ በሙሉ ተካፍሏል። ስለዚህ ጩኸቱ፣ የሰው ባሕርይ የሚያጋጥመውን የመከራና የሥቃይ ጥልቀት የሚገልጽ እንጂ፣ የልጁን ከመንፈስ ቅዱስና ከአብ ያለው ዘላለማዊ አንድነት መቋረጥን በፍጹም አያመለክትም።
          </Text>
        </View>

        {/* 1. በትስብእት (በሰውነት) የቀረበ የልመና ቃል */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>1. በትስብእት (በሰውነት) የቀረበ የልመና ቃል</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን ይህንን ቃል የተናገረው በተዋሐደው ሥጋ (በትስብእቱ) ነው። አምላክ በመሆኑ አምላኬ አይልም፤ ነገር ግን ፍጹም ሰው በመሆኑና የእኛን ባሕርይ ገንዘብ በማድረጉ የእኛን ድካም፣ የእኛን መከራና የእኛን ጩኸት ለብሶ ተናገረ።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የአዳምን ጩኸት መወከሉ፦</Text> አዳም በኃጢአቱ ምክንያት ከገነት ተለይቶ፣ ከፈጣሪው ርቆ አምላኬ ለምን ተውኸኝ? እያለ በሲኦል ይጮኽ ነበር። ጌታችን በመስቀል ላይ ሆኖ ይህንን የአዳምን ጩኸት በራሱ ጩኸት ተካው። ቅዱስ ቄርሎስ ዘእስክንድርያ እንዲህ ይላል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እርሱ የተናገረው ስለ እኛ ነው። እኛ በኃጢአት ተጥለን ነበርና የእኛን ጩኸት በራሱ አንደበት ተናገረ።»</Text>
          </View>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• መለኮት አልተለየውም፦</Text> በተዋሕዶ ትምህርት መለኮትና ትስብእት ከተዋሐዱ በኋላ ለአንድ አፍታ እንኳ አልተለያዩም። በመስቀል ላይ ሲጮኽ መለኮት ከሥጋው ጋር ነበር። ተውኸኝ ማለቱ ለሞትና ለመከራ አሳልፈህ ሰጠኸኝ ማለቱ ነው እንጂ መለኮት ተለየኝ ማለቱ አይደለም።
          </Text>

          <Text style={styles.paragraph}>
            ሥጋ ከቃል ጋር በመዋሐዱ ባሕርዩን ሳይለቅ የቃልን ገንዘብ ገንዘቡ እንዳደረገ፣ አምላክ ቃልም አምላክነቱን ሳይለቅ የሥጋን ገንዘብ ገንዘቡ አድርጓልና፣ መከራ በሚቀበልበት ሥጋው አምላኬ አምላኬ ብሎ መናገሩ የሥጋ ገንዘብ ለቃል፣ የቃል ገንዘብ ለሥጋ የሚለው ምስጢር መገለጫ ነው።
          </Text>
        </View>

        {/* 2. የመዝሙረ ዳዊት ፍጻሜ (ትንቢታዊ አንድነት) */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>2. የመዝሙረ ዳዊት ፍጻሜ (ትንቢታዊ አንድነት)</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን ይህንን የተናገረው በመዝሙር 21 ላይ የቀረበውን ትንቢት ለመፈጸም ነው። ይህም ለሐዋርያትና ለአይሁድ እርሱ ትክክለኛው መሲሕ መሆኑን የሚያሳይ ማስረጃ ነው፦
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ምስክርነቱ፦</Text> አይሁድ በመስቀል ሥር ሆነው «በእግዚአብሔር ታምኗል፤ ቢወደውስ አሁን ያድነው» እያሉ ሲዘባበቱ፣ ጌታችን ያንኑ መዝሙር በመጥቀስ በመዝሙሩ ላይ የተጻፈው መከራ በእርሱ ላይ እየደረሰ መሆኑንና እርሱም ባለቤት መሆኑን አሳያቸው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ፍጹም ሰው መሆኑን ማሳየቱ፦</Text> ሞትንና መከራን በትክክል እየተቀበለ መሆኑን ለማሳየት ይህን ቃል ተናገረ። ቅዱስ ዮሐንስ አፈወርቅ ሲያብራራው፦ «ይህ ቃል ጌታችን በሥጋው መከራን መቀበሉንና እንደ ሰውም ማዘኑን ያስረዳል።»
          </Text>
        </View>

        {/* 3. የሊቃውንት ትርጓሜ፦ የአራቱ ምስጢራት ፍቺ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>3. የሊቃውንት ትርጓሜ፦ የአራቱ ምስጢራት ፍቺ</Text>
          </View>

          <Text style={styles.paragraph}>
            የቤተ ክርስቲያን መተርጉማን በአንድምታ ትርጓሜያቸው ይህንን ቃል በዋናነት ለአራት ምክንያቶች እንደተነገረ ይፈቱታል፦
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>፩. ለአርአያነት (ምሳሌነት)፦</Text> ለሁሉም አማኞች በአስቸጋሪ ሁኔታዎች ውስጥም ቢሆን ወደ እግዚአብሔር እንዲጮኹ እና ተስፋ እንዳይቆርጡ የሚያስተምር ነው። ክርስቶስ የዋህና ትሑት በመሆኑ፣ በመከራው ሰዓት አባቱን መጥራቱ፣ ክርስቲያኖች በሕይወታቸው ፈተና ሲገጥማቸው በትዕግስትና በታዛዥነት የመከራውን መንገድ እንዲከተሉ ያስተምራል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>፪. ስለ አዳም ተገብቶ የተናገረው፦</Text> ክርስቶስ ዳግማዊ አዳም ነውና፣ የሰው ልጅ በእግዚአብሔር ዘንድ ያጣውን ልጅነትና ጸሎቱ የመሰማት ዕድል እንዲመለስ፣ የኃጢአተኞችን ሁሉ ጩኸት ወክሎ ጮኸ። ይህ ጩኸት በክርስቶስ የተገኘውን የዕርቅና የመታረቅ ምሥጢር ያጎላል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>፫. ለአይሁድ ጥያቄና ለትንቢት ፍጻሜ፦</Text> ጌታችን አምላኬ፥ አምላኬ ማለቱ፣ አይሁድ ይህ በእርሱ ላይ የተነገረ ትንቢት እንደሆነ እንዲያምኑ ለማድረግ ነው። እንደ ሰውነቱ የመከራውን ጽናት ይገልጻል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>፬. ለአቅርቦተ ሰይጣን (ሰይጣንን ለማሰር)፦</Text> ሰይጣን ክርስቶስን ተራ ሰው (ዕሩቅ ብዕሲ) መስሎት እንዲቀርበውና በመለኮታዊ ኃይሉ እንዲይዘው የተደረገ ዘዴ ነው። አንዳንድ ሊቃውንትም ይህ ጩኸት ሰይጣንን በሞት ወጥመድ ለማሰርና ለማሸነፍ የተነገረ ነው ብለው ይተረጉማሉ።
          </Text>
        </View>

        {/* 4. 'አምላኬ አምላኬ' ፦ የተዋሕዶ ምሥጢርና ሁለንተናዊ ድኅነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>4. «አምላኬ አምላኬ» ፦ የተዋሕዶ ምሥጢርና ሁለንተናዊ ድኅነት</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን አምላኬ አምላኬ ብሎ ሁለት ጊዜ መጥራቱ፣ የክርስቶስን ፍጹም አምላክነትና ፍጹም ሰውነት፣ እንዲሁም የድኅነቱን ሁለንተናዊነት ለማጠየቅ ነው። በተዋሕዶ ትምህርት መሠረት፣ ጌታችን በአንድ አካልና በአንድ ባሕርይ ፍጹም አምላክ ፍጹም ሰው መሆኑን እናረጋግጣለን። ይህ ድግግሞሽ የሚከተሉትን ጥልቅ ትርጉሞች ይዟል፦
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የባለቤትነትና የጸጋ ጥሪ፦</Text> አምላኬ የሚለው ጥሪ አዳም በኃጢአት ምክንያት ያጣውን አባታዊ ግንኙነት ዳግም መመለሱን ያበስራል። ቅዱስ ዮሐንስ አፈወርቅ እንዲህ ይላል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እርሱ ፍጹም ሰው ነውና አምላኬ አምላኬ አለ፤ ፍጹም አምላክ ነውና ደግሞ ዛሬ ከእኔ ጋር በገነት ትኖራለህ ሲል በቀኙ ለተሰቀለው ወንበዴ ተናገረ።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ ንግግር በአንድ አካል ውስጥ ያለውን መለኮታዊ ሥልጣንና ሰብዓዊ ትሕትናን ያሳያል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ሁለንተናዊ ቤዛነት፦</Text> ድኅነቱ ለጻድቃን ብቻ ሳይሆን ለኃጥአንም ጭምር መሆኑን፣ እንዲሁም ለብሉይ ኪዳን ሕዝብና ለአሕዛብ ዓለም ሁሉ መሆኑን ያስረዳል። ጌታችን የእኛን ጩኸት በራሱ ላይ አድርጎ በመጮኽ፣ የእግዚአብሔርን ፊት ወደ እኛ መልሷል።
          </Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ</Text>
          </View>

          <Text style={styles.paragraph}>
            «አምላኬ አምላኬ ለምን ተውኸኝ?» የሚለው ቃል የፍጹም ሰውነቱ ምስክር፣ የፍጹም ቤዛነቱ ማረጋገጫና የአዳም ጩኸት የታሰረበት መለኮታዊ ቃል ነው። ጌታችን በመስቀል ላይ ሆኖ ይህን የተናገረው እኛን ከዘላለም መተዋት (ከሲኦል) ለማውጣት ነው። በዚህ የተዋሕዶ እውነት የሰው ልጅ ከእግዚአብሔር ጋር ታረቀ፤ የልጅነት ክብርም ተመለሰ።
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