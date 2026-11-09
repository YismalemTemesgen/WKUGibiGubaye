import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function John121Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>«የሚበድልም ቢኖር ከአብ ዘንድ ጰራቅሊጦስ አለን» [1ኛ ዮሐ 2:1]</Text>
         
        {/* ማጠቃለያ / መግቢያ */}
        <View style={styles.sectionBox}>

          <Text style={styles.paragraph}>
            በቅዱስ ዮሐንስ የተሰበከው ይህ ትምህርት የቤተ ክርስቲያን የድኅነት መሠረትና የሰው ልጅ ከተስፋ መቁረጥ ጨለማ የሚወጣበት የብርሃን ፋና ነው። ሐዋርያው «ልጆቼ ሆይ፥ እንዳትበድሉ ይህን እጽፍላችኋለሁ» በማለት ትምህርቱን የጀመረው ኃጢአትን እንድንጠላ ለማሳሰብ ቢሆንም፤ የሰውን ልጅ ድካም አይቶ ግን ተስፋ የሚሰጥ ታላቅ የምስራች አበሰረ። ይኸውም
          </Text>
            <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የሚበድልም ቢኖር ከአብ ዘንድ ጰራቅሊጦስ አለን፤ ኢየሱስ ክርስቶስም ኃጢአታችንን ያስተሠርይልን ዘንድ ጻድቅ ነው» </Text>
          </View>
          <Text style={styles.paragraph}> የሚለው መለኮታዊ ቃል ነው። ይህም ትክክለኛው የወንጌል ቃል ሲሆን፥ በአንዳንድ ቦታዎች </Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ማንም ኃጢአትን ቢያደርግ ከአብ ዘንድ ጠበቃ አለን»  </Text>
          </View>
              <Text style={styles.paragraph}>ተብሎ የሚነገረው አገላለጽ ከምሥጢሩ ጥልቀት አንጻር ሙሉውን ትርጉም እንደማይገልጽና ከግሪኩም ከግዕዙም ጋር ሲተያይ የተሳሳተ ሆኖ እናገኘዋለን።</Text>

          <Text style={styles.paragraph}>
            የትርጉም መነሻ ማብራሪያ፦ በአንዳንድ አማርኛ ቅጂዎች መካከል ጠበቃ እና ጰራቅሊጦስ የሚሉ ቃላት ተለዋውጠው የሚታዩበት ምክንያት፣ የግሪኩ መጽሐፍ ቅዱስ ፓራክሊቶስ የሚለውን ቃል ስለሚጠቀም ነው። በቤተ ክርስቲያናችን ትርጓሜ ይህ ቃል መለኮታዊ ምሥጢር ስላለው ጰራቅሊጦስ ተብሎ መጠራቱ ይበልጥ ተገቢ ነው። በአማርኛው ትርጉም ጠበቃ ተብሎ ቢቀመጥም፣ ጰራቅሊጦስነት ከሕግ ነክ ሙግት ይልቅ የባሕርይ አዳኝነትን፣ ናዛዚነትንና የጸጋ አድራጊነትን ምሥጢር ይገልጻል።
          </Text>

          <Text style={styles.paragraph}>
            ስለዚህም የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን በ2000 ዓ.ም ባሳተመችው
          </Text>
            <View style={styles.quoteBox}>
            <Text style={styles.quoteText}> «ደቂ ቅየ ዘንተ እጽሕፍ ለክሙ ከመ ኢተአብሱ፤ ልጆቼ ሆይ፥ እንዳትበድሉ ይህን እጽፍላችኋለሁ...»  </Text>          
          </View>
          
        <Text style={styles.paragraph}>መሠረት፣ ኢየሱስ ጠበቃ የሚል ንባብም ትርጓሜም የለውም። በዚህ የቤተ ክርስቲያን ትርጓሜ መሠረት በዚህ ቃል አለን የተባለው ጰራቅሊጦስ ኢየሱስ ክርስቶስ ከአብ ዘንድ የሚልክልን መንፈስ ቅዱስ ነው (ዮሐ. 15፥26)፤ ኢየሱስ ክርስቶስ ደግሞ ኃጢአታችንን የሚያስተሠርይልን ጻድቅ ነው።</Text>
        </View>

        {/* 1. የ 1ኛ ዮሐ. 2 ፥ 1 ትርጓሜ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>1. የ 1ኛ ዮሐ. 2 ፥ 1 ትርጓሜ</Text>
          </View>

          <Text style={styles.paragraph}>
            የዚህን ኃይለ ቃል እያንዳንዱን ክፍል በሊቃውንት አንድምታ ትርጓሜ መሠረት እንደሚከተለው እንመረምረዋለን፦
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ልጆቼ ሆይ፦</Text> ሐዋርያው ምእመናንን ልጆቼ ማለቱ በአባትነቱ ያለውን የፍቅር ጥልቀትና የመንፈሳዊ ወሊድ ክብርን ይገልጻል። ቅዱስ ዮሐንስ አፈወርቅ ሲተረጉመው፦ «ከኃጢአት የምንርቀው አምላካችንን በመፍራት ብቻ ሳይሆን እንደ ልጆች በፍቅር ተገፋፍተን መሆን እንዳለበት ለማሳየት ነው» ይላል። ይህም በባርነት ፍርሃት ሳይሆን በልጅነት ፍቅር መመላለስን ያመለክታል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• እንዳትበድሉ ይህን እጽፍላችኋለሁ፦</Text> ይህ የትምህርቱ ቀዳማዊ ዓላማ ነው። ክርስቲያን ሆን ብሎ ኃጢአት እንዲሠራ ፈቃድ አይሰጠውም። ቅዱስ ባስልዮስ ዘቂሳሪያ እንደተናገረው፦ «ሕመም መኖሩን ማወቅ ጤናን ለመጠበቅ እንጂ ለመታመም ምክንያት አይሆንም»። ይህም ማለት ይቅርታ መኖሩ ኃጢአት ለመሥራት ድፍረት ሊሰጠን አይገባም ማለት ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የሚበድልም ቢኖር፦</Text> ሐዋርያው እዚህ ላይ የሰውን ልጅ የባሕርይ ድካም ያሳያል። ኃጢአት የማይሠራ ሰው እንደሌለ እያሳሰበ፣ ነገር ግን በድካም ለሚወድቁ የይቅርታንና የንስሐን በር ይከፍታል። «ሰው ሆኖ የማይበድል እንጨት ሆኖ የማይነድ የለም» እንደሚባለው፣ ለድካማችን ፈውስ መዘጋጀቱን ያበስራል።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ከአብ ዘንድ ጰራቅሊጦስ አለን፦</Text> ይህ የትምህርቱ ማዕከል ነው። ጰራቅሊጦስ መኖሩ ብቻ ሳይሆን አለን ማለቱ በባለቤትነት የጸጋው ተካፋዮች መሆናችንን ያሳያል። ይህም ጰራቅሊጦስነት በደመ ነፍስ የሚገኝ ሳይሆን በሃይማኖትና በተዋሕዶ የምናገኘው ነው።
          </Text>
        </View>

        {/* 2. የጰራቅሊጦስነት ምሥጢርና የአበው ምስክርነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>2. የጰራቅሊጦስነት ምሥጢርና የአበው ምስክርነት</Text>
          </View>

          <Text style={styles.paragraph}>
            ጰራቅሊጦስ የሚለው መለኮታዊ መጠሪያ በዚህ ቃል ለመንፈስ ቅዱስ ቢነገርም፣ ጌታችን «ሌላ ጰራቅሊጦስ» (ዮሐ. 14፥16) በማለቱ አበው ወልድንም ጰራቅሊጦስ ይሉታል፤ የሥላሴ ሥራ አንድ ነውና። ይህም መጠሪያ የሚከተሉትን ታላላቅ መለኮታዊ ግብሮች ያጠቃልላል። ቅዱስ ቄርሎስ ዘእስክንድርያ ስለዚህ ምስጢር ሲያስተምር እንዲህ ይላል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ወልድም ጰራቅሊጦስ ነው። ይህም ማለት ስለ እኛ ራሱን መሥዋዕት አድርጎ ያቀረበ፣ በአባቱ ፊትም ስለ እኛ የቆመ ማለት ነው። ጰራቅሊጦስ መባሉም ስለ ኃጢአታችን ማስተስሪያ ሆኖ ስለሚታይ ነው እንጂ እንደ ፍጡራን ተለይቶ የሚለምን አይደለም።» (ሃይማኖተ አበው)</Text>
          </View>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>1. ናዛዚ (ፈዋሽ መጽናኛ)፦</Text> በኃጢአት ፍላጻ ለቆሰለችና በተስፋ መቁረጥ ለደቀቀች ነፍስ ሰማያዊ መጽናናትን የሚሰጥ። ቅዱስ ዮሐንስ አፈወርቅ እንዲህ ይላል፦ «የጰራቅሊጦስ ኃይል እንዴት ድንቅ ነው! ኃጢአተኛው በበደሉ ምክንያት ከአምላኩ ሲሸሽ፣ እርሱ ግን በይቅርታው ጠርቶ ያሳርፈዋል።»
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>2. መጽንዒ (አጽናኝ ኃይል)፦</Text> በሰውነት ድካም ለወደቀው አዳም በጸጋው የሚደግፍና የሚያበረታ። «ኃይልን በሚሰጠኝ በክርስቶስ ሁሉን እችላለሁ» (ፊል. 4፥13) እንዳለ ሐዋርያው፣ እርሱ ወደ ንስሐ እንድንመለስ ጽናትን የሚሰጥ የሕይወት ዐለት ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>3. አስተጋቢ (አስታራቂ)፦</Text> በሰውና በእግዚአብሔር መካከል የነበረውን የጥል ግድግዳ ደምስሶ፣ ዕርቀ ሰላምን የመሠረተ። ሐዋርያው ቅዱስ ጳውሎስ «በደላቸውን ሳይቆጥርባቸው ዓለሙን ከራሱ ጋር ያስታርቅ ነበር» (2ኛ ቆሮ. 5፥19) እንዳለ፣ ይህ አስታራቂነት በፍጥረት ሁሉ ላይ ሰላምን ያወረደ ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>4. አቃቤ (መከላከያ)፦</Text> ከጥንተ ጠላት ከዲያብሎስ ክስና ከኃጢአት ባርነት ነፍስን የሚጠብቅ። እርሱ በደሙ የቀደሰን በመሆኑ ከሳሻችን በእኛ ላይ ስልጣን እንዳይኖረው አድርጓል።
          </Text>
        </View>

        {/* 3. " ጻድቅ የሆነው ኢየሱስ ክርስቶስ" */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>3. «ጻድቅ የሆነው ኢየሱስ ክርስቶስ»</Text>
          </View>

          <Text style={styles.paragraph}>
            ሐዋርያው «ኢየሱስ ክርስቶስም ኃጢአታችንን ያስተሠርይልን ዘንድ ጻድቅ ነው» ሲል፣ የክርስቶስን ፍጹም የጽድቅ ባሕርይና የታማኝነት ቃል ኪዳን ያመለክታል። ቅዱስ ኤጲፋንዮስ እንዲህ ይላል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ከጻድቁ በቀር ነፍስን ማዳን የሚችል የለም። እርሱ ያለ በደል በደለኛ ተባለ፣ እኛም ጻድቃን እንሆን ዘንድ የእኛን ዕዳ ከፈለ።»</Text>
          </View>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የጽድቅ መሥዋዕትነት፦</Text> እርሱ ምንም በደል የሌለበት ጻድቅ በመሆኑ፣ በኃጢአት ለረከሰች ነፍስ ካሳ ሆኖ ለመቅረብ ብቸኛው ብቁ ነው። እርሱ የእኛን ሥጋ ተዋሕዶ ስለ እኛ ሞተ፤ እኛም በጥምቀት ክርስቶስን ለብሰን (ገላ. 3፥27) ጸጋውን ተቀበልን። ይህ የድኅነታችን መሠረት ነው።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ማስተስሪያ (ካሳ)፦</Text> «እርሱም የኃጢአታችን ማስተስሪያ ነው»። ይህም ምሥጢር የኃጢአትን ዕዳ ከፍሎ ከሞትና ከዲያብሎስ ባርነት የሚያወጣ ማለት ነው። እርሱ ራሱ ካህን፣ ራሱ መሥዋዕት፣ ራሱ መሥዋዕት ተቀባይ በመሆን ዓለሙን በአንድነቱ ቀደሰ።
          </Text>
        </View>

        {/* 4. ' ከአብ ዘንድ ' */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>4. «ከአብ ዘንድ»</Text>
          </View>

          <Text style={styles.paragraph}>
            ከአብ ዘንድ መባሉ፣ ጰራቅሊጦስ መንፈስ ቅዱስ ከአብ የሚሰርጽ መሆኑን (ዮሐ. 15፥26)፣ ኃጢአታችንን የሚያስተሠርየው ክርስቶስም በመለኮታዊ ክብሩ ከአብ ጋር እኩል መሆኑንና በተዋሕዶ ሰውነቱ ደግሞ ለሰው ልጅ ያለውን የባሕርይ ባለሟልነት ይገልጻል። ቅዱስ አትናቴዎስ እንዲህ ይላል፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ወልድ የሌለበት ቦታ የለም። ከአብ ጋር በአንድነት ቢኖርም፣ ስለ እኛ ድኅነት ግን ሁልጊዜ በመካከላችን ነው። ጰራቅሊጦስነቱም ከአብ ጋር ባለው አንድነት ለነፍሳችን ጸጋን ማውረድ ነው።» (ሃይማኖተ አበው)</Text>
          </View>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• የቆሰለው አካል ምስክርነት፦</Text> በቤተ ክርስቲያን ሊቃውንት ትምህርት፣ ክርስቶስ ከአብ ዘንድ የሚቆመው ቃላትን በመደርደር ሳይሆን፣ ስለ እኛ የቆሰለውን አካሉንና የፈሰሰውን ደሙን ለአብ በማሳየት ነው። ያ ደም ደግሞ ስለ እኛ ይቅርታን እንጂ ፍርድን አይጠይቅም።
          </Text>

          <Text style={styles.paragraph}>
            <Text style={styles.boldText}>• ፍጹም መካከለኛነት፦</Text> እርሱ በመለኮቱ ከአብ ጋር አንድ ስለሆነ፣ በሰውነቱ ደግሞ ከእኛ ጋር አንድ ስለሆነ (ተዋሕዶ)፣ ፍጹም አስታራቂ ሆኖ በክብር ተቀምጧል።
          </Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ</Text>
          </View>

          <Text style={styles.paragraph}>
            በዚህ ታላቅ ትምህርት መሠረት፣ ክርስቲያን ኃጢአት እንዳያደርግ በንጽሕና ሊኖር ይገባዋል፤ ነገር ግን በሰውነት ድካም ቢወድቅ ተስፋ መቁረጥ የለበትም። ምክንያቱም 
          </Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}> «የሚበድልም ቢኖር ከአብ ዘንድ ጰራቅሊጦስ አለን»</Text>          
          </View>
          
        <Text style={styles.paragraph}>፤ ኢየሱስ ክርስቶስም በጽድቁ ኃጢአታችንን የሚያስተሠርይልን፣ በደላችንንም በመስቀሉ ደም የሚደመስስልን የዘላለም አዳኛችን ነው።</Text>

          <Text style={styles.paragraph}>
            «ከአብ ዘንድ ጰራቅሊጦስ አለን» ማለት፣ ክርስቶስ ከአብ ዘንድ የሚልክልን መንፈስ ቅዱስ የሚያጽናናን፣ ወደ ንስሐ የሚመልሰንና በምሥጢራት የሚቀድሰን ሲሆን፣ ክርስቶስም በተዋሐደው ሰውነቱ የድኅነት በርና የሕይወት መገኛ ሆኖልናል ማለት ነው።
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