import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function John1427Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>ከእኔ አብ ይበልጣል [ዮሐ 14:28]</Text>
        
        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            ጌታችንና መድኃኒታችን ኢየሱስ ክርስቶስ ለደቀ መዛሙርቱ በሰጠው የሰናበት ትምህርት ላይ፦
          </Text>
          
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ብትወዱኝስ፥ ወደ አብ እሄዳለሁ ብዬ ባልኋችሁ ደስ ባላችሁ ነበር፤ ከእኔ አብ ይበልጣልና» (ዮሐ 14፡28)</Text>
          </View>

          <Text style={styles.paragraph}>
            ብሎ የተናገረው ቃል፣ የቤተ ክርስቲያናችን የሃይማኖት መሠረት ከሆኑት ጥልቁ ምሥጢራት አንዱ ነው። ይህ ቃል የወልድን ከአብ ጋር ያለውን ትክክለኛ ግንኙነትና የምሥጢረ ሥላሴን ጥልቀት የምንረዳበት እንጂ፣ አንዳንዶች እንደሚመስላቸው ወልድ ከአብ ያንሳል ወይም ፍጡር ነው የሚል ትርጉም የለውም።
          </Text>

          <Text style={styles.paragraph}>
            የቤተ ክርስቲያን ዓምድ የሆነው ቅዱስ አትናቴዎስ ዘእስክንድርያ እንዳስተማረው፣ ይህ ቃል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የመለኮቱን ክብር የሚቀንስ ሳይሆን፣ ስለ እኛ የደረሰበትን የፍቅሩንና የትሕትናውን ልክ የሚገልጥ ሰማያዊ ምስክርነት ነው»።</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን ይህንን የተናገረው ሰው ሆኖ በምድር ላይ ሳለ በመሆኑ፣ ትርጓሜውም ከነገረ ሥጋዌና ከተዋሕዶ ምሥጢር ጋር ቀጥተኛ ግንኙነት አለው።
          </Text>
        </View>

        {/* 1. ትስብእትና በትሕትና የቀረበ ትርጓሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>1. ትስብእትና በትሕትና የቀረበ ትርጓሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን ይህንን ኃይለ ቃል የተናገረው ስለ ተዋሐደው ሥጋ (ስለ ሰውነቱ) መሆኑን ሊቃውንተ ቤተ ክርስቲያን በአጽንኦት ያስተምራሉ። አምላክ ሆኖ ሳለ የሰውን ባሕርይ ገንዘብ በማድረጉ የደረሰበትን የትሕትና ልክ ሲያስረዱን፣ ሊቃውንት እንዲህ ይላሉ፦ ሰው ባይሆን ኖሮ አብ ይበልጣል ባላለም ነበር፤ ስለ እኛ ሰው በመሆኑ የእኛን ባሕርይ ገንዘብ አድርጎ የእኛን ቃል ተናገረ፤ ይህም የትሕትናው መግለጫ እንጂ የመለኮቱ መጉደል አይደለም።
          </Text>

          <Text style={styles.paragraph}>
            ይህ በሰውነት አብ ይበልጣል የተባለበት ምክንያት በሚከተሉት ነጥቦች ይበልጥ ይብራራል፦
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የባሪያ መልክ በመያዙ፦</Text> ቅዱስ ጳውሎስ «የባሪያን መልክ ይዞ በሰውም ምሳሌ ሆኖ ራሱን ባዶ አደረገ» (ፊል 2፡7) እንዳለው፣ አብ ሥጋ አልለበሰም፣ ወልድ ግን ስለ እኛ ድኅነት ሥጋ ለብሶ ተዋርዷል። በዚህም ምክንያት አብ ሥጋ ባለመልበሱ ይበልጣል ይባላል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ለመከራ በመገዛቱ፦</Text> ጌታችን በሥጋው ተርቧል፣ ተጠምቷል፣ ደክሟል፣ ተገርፏል፣ በመጨረሻም በመስቀል ላይ ሞቷል። እነዚህ ሁሉ የሰው ባሕርይ ድካሞች በአብ ዘንድ የሉም፤ ስለዚህም በእነዚህ ድካሞች መካከል ሆኖ እንደ ሰውነቱ ከእኔ አብ ይበልጣል ይላል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• በትሕትናው ልዕልናን ለመስጠት፦</Text> ጌታችን ራሱን ዝቅ ማድረጉ እኛን ከፍ ለማድረግ ነው። ቅዱስ ጎርጎርዮስ ዘእንዚናንዙ ሲያብራራው፦ «አብ ይበልጣል ማለቱ እንደ ሰውነቱ (በትስብእቱ) ነው፤ እርሱ ዝቅ ማለቱ ግን የእኛ ባሕርይ ወደ አባቱ ክብር እንዲመጣ መንገድ መክፈቱ ነው።»
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ለትምህርትና ለምሳሌ፦</Text> ሐዋርያት በትሕትና እንዲመላለሱና የመከራውን ጽናት እንዲረዱት ሲል ራሱን ዝቅ አድርጎ መናገሩ ነው። ቅዱስ ዮሐንስ አፈወርቅ ሲተረጉመው፦ «ደቀ መዛሙርቱ በሐዘን ተውጠው ነበር፤ እርሱ ግን ወደ አብ የመሄዱን ክብርና በዚያ ያለውን ዕረፍት ሲያሳያቸው ከእኔ አብ ይበልጣል አላቸው፤ ይህም ካለሁበት መከራ ይልቅ የምሄድበት የአባቴ ክብር ይበልጣል ማለቱ ነው» በማለት የቃሉን አጽናኝ ምስጢር ይገልጠዋል።
          </Text>
        </View>

        {/* 2. መጽሐፍ ቅዱሳዊ የአንድነትና የእኩልነት ማስረጃዎች */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>2. መጽሐፍ ቅዱሳዊ የአንድነትና የእኩልነት ማስረጃዎች</Text>
          </View>

          <Text style={styles.paragraph}>
            ጌታችን ከእኔ አብ ይበልጣል ማለቱ በባሕርይ ከአብ እንደሚያንስ የሚያሳይ እንዳልሆነ መጽሐፍ ቅዱስ በብዙ ቦታዎች ይመሰክራል። የሚከተሉት ኃይለ ቃላት ወልድ ከአብ ጋር በክብር፣ በሥልጣንና በባሕርይ አንድ መሆኑን በግልጽ ያሳያሉ፦
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• በባሕርይ አንድነት፦</Text> «እኔና አብ አንድ ነን» (ዮሐ 10፡30)። እዚህ ላይ አንድ የሚለው ቃል በባሕርይ፣ በፈቃድና በሥልጣን ፍጹም እኩል መሆናቸውን ያረጋግጣል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• በእይታ አንድነት፦</Text> «እኔን ያየ አብን አይቷል» (ዮሐ 14፡9)። ወልድ ከአብ የሚያንስ ቢሆን ኖሮ፣ አብን ለማየት ወልድን ማየት ባልበቃ ነበር። ወልድ የአብ ፍጹም መልክና የባሕርዩ ምሳሌ በመሆኑ እኩልነታቸውን ያሳያል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• በሥራ አንድነት፦</Text> «አብ የሚያደርገውን ሁሉ ወልድ ደግሞ ይህን እንዲሁ ያደርጋልና» (ዮሐ 5፡19)። በሥራው ሁሉ ከአብ ጋር እኩል የሆነና የአብ ሥራ የራሱ ሥራ የሆነ አምላክ መሆኑን ያስረዳል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• በክብር አንድነት፦</Text> «ሰዎች ሁሉ አብን እንደሚያከብሩት ወልድን ያከብሩት ዘንድ» (ዮሐ 5፡23)። አምልኮና ክብር የሚገባው ለአምላክ ብቻ ከሆነ፣ ወልድም እንደ አብ እኩል አምልኮና ስግደት ይገባዋል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• በበባለቤትነት አንድነት፦</Text> «የአብ የሆነ ሁሉ የእኔ ነው» (ዮሐ 16፡15)። የአብ የሆነው መለኮታዊ ባሕርይ፣ ሥልጣንና ክብር ሁሉ የራሱ የወልድ መሆኑን በማረጋገጥ እኩልነታቸውን ይገልጣል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• በሕልውና አንድነት፦</Text> «እኔ በአብ እንዳለሁ አብም በእኔ እንዳለ አታምንምን?» (ዮሐ 14:10)። ይህ ቃል በሦስቱ አካላት መካከል ያለውን የባሕርይ እኩልነት የሚያሳይ ሲሆን፣ አንዱ ከአንዱ እንደማይበልጥና እንደማያንስ ምስክር ነው።
          </Text>
        </View>

        {/* 3. የሊቃውንት ትርጓሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>3. የሊቃውንት ትርጓሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ሊቃውንት በአንድምታ ትርጓሜያቸው ይህንን ቃል ሲፈቱት፣ በሥርዓተ መለኮት ውስጥ ያለውን ምስጢር እንዲህ ያብራሩታል፦ ጌታችን ከእኔ አብ ይበልጣል ማለቱ በልደት ምክንያት ነው። አብ ወላጅ ነው፤ ወልድ ደግሞ ተወላጅ ነው። በሥጋዊ ሥርዓት አባት ከልጅ እንደሚበልጥ ሁሉ፣ አብም ለወልድ መገኛ በመሆኑ በሥርዓት ይበልጣል ይባላል።
          </Text>

          <Text style={styles.paragraph}>
            ሆኖም ይህ መበላለጥ በዘመን መቅደምን ወይም በክብር መለየትን አያመጣም፤ ልክ ብርሃን ከፀሐይ እንደሚወጣና ፀሐይ ለብርሃኑ መገኛ ብትሆንም፣ ፀሐይ ያለ ብርሃን ብርሃንም ያለ ፀሐይ እንደማይኖሩ ሁለቱም እኩል እንደሆኑ ሁሉ፣ አብና ወልድም በባሕርይና በክብር እኩል ናቸው። ቅዱስ አምብሮስ እንዲህ ይላል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ወልድ አብን የሚያከብረው እንደ አባቱ ነው፤ ይህም የወልድ ትሕትና እንጂ የአብ የበላይነት አይደለም። በመለኮት ግን ሁለቱም አንድ ናቸው።»</Text>
          </View>
        </View>

        {/* 4. ለኑፋቄዎች የተሰጠው ምላሽ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>4. ለኑፋቄዎች የተሰጠው ምላሽ</Text>
          </View>

          <Text style={styles.paragraph}>ይህ ኃይለ ቃል ለቤተ ክርስቲያን መናፍቃን ታላቅ መከላከያ ነው።</Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ለአርዮስ፦</Text> ወልድ ፍጡር ነው ለሚለው ስህተት፣ አብ ይበልጣል ማለቱ በትስብእቱና በሥርዓተ ልደቱ እንጂ በባሕርዩ እንዳልሆነ በማስረዳት የአርዮስን ክህደት ይሽራል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ለንስጥሮስ፦</Text> ኢየሱስ ሁለት አካል ነው ለሚለው፣ ጌታችን እኔ በማለት በአንድ አካል ሆኖ ሁለቱንም ባሕርያት (የአብን ታላቅነትና የራሱን ትሕትና) መናገሩ ተዋሕዶን ያጸናል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ለአውጣኪ፦</Text> ሥጋው በመለኮቱ ጠፍቷል ለሚለው፣ አብ ይበልጣል በማለት የሰውነቱ ባሕርይ ሳይጠفاና ሳይለወጥ በተዋሕዶ መኖሩን ያስረዳል።
          </Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ</Text>
          </View>

          <Text style={styles.paragraph}>
            ከእኔ አብ ይበልጣል የሚለው ቃል የወልድን የትሕትና ጉዞና ስለ እኛ ድኅነት ሰው የመሆኑን ምሥጢር የሚገልጽ እንጂ መለኮታዊ ክብሩን የሚቀንስ አይደለም። ኦርቶዶክሳዊት ተዋሕዶ ቤተ ክርስቲያናችን በጸሎተ ሃይማኖት፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ከብርሃን የተገኘ ብርሃን፣ ከእውነተኛ አምላክ የተገኘ እውነተኛ አምላክ፣ የተፈጠረ ሳይሆን የተወለደ፣ በባሕርዩ ከአብ ጋር የሚተካከል»</Text>
          </View>

          <Text style={styles.paragraph}>
            ብላ እንደምታምነው፣ ወልድ ከአብና ከመንፈስ ቅዱስ ጋር በትክክለኛ እኩልነት በአንድ መለኮት ለዘለዓለም ይመሰገናል።
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