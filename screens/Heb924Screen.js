import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Heb924Screen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>ስለ እኛ አሁን ይታይ ዘንድ ወደ እርስዋ ወደ ሰማይ ገባ። የዕብ 9 ፡ 24 ትርጓሜ</Text>

        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የመለኮታዊ ሊቀ ካህናትነት መሠረት</Text>
          </View>

          <Text style={styles.paragraph}>
            በክርስትና ሥነ መለኮት ውስጥ፣ የጌታችን የኢየሱስ ክርስቶስ ዕርገት እና በሰማያዊው መቅደስ ያለው አገልግሎት እጅግ መሠረታዊና ጥልቅ ትርጉም አላቸው። ይህ ምሥጢር የድኅነታችንን ፍጻሜ የሚያረጋግጥ ሲሆን፣ የብሉይ ኪዳን መሥዋዕታዊ ሥርዓት በክርስቶስ እንዴት ፍጹምነት እንዳገኘ በግልጽ ያሳያል። የዕብራውያን መልእክት ደራሲው ይህንን ጥልቅ እውነት ሲገልጥ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ በእጅ ወደ ተሰራች፥ የእውነተኛይቱ ምሳሌ ወደ ምትሆን ቅድስት አልገባምና፥ ነገር ግን በእግዚአብሔር ፊት ስለ እኛ አሁን ይታይ ዘንድ ወደ እርስዋ ወደ ሰማይ ገባ።» (ዕብ 9:24)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት፣ የክርስቶስን የሊቀ ካህናትነት ሚና፣ የአዲስ ኪዳንን ፍጹምነት፣ እና የመስቀሉ መሥዋዕት በሰማያት ያለውን ዘላለማዊ ኃይል ያብራራል።
          </Text>

          <Text style={styles.paragraph}>
            ክርስቶስ ወደ ሰማይ ማረጉ፣ ከምድር ላይ የኃጢአትን ዋጋ ከፍሎ የፈጸመው መስዋዕትነት በሰማያት ዘለዓለማዊ ተቀባይነት እንዳገኘ የሚያሳይ መለኮታዊ ማኅተም ነው። እርሱ ለዓለም ኃጢአት ፍጹም ቤዛ ሆኖ በመሥዋዕትነት ራሱን አቅርቧል። ይህ የሥጋና የደም መስዋዕትነት፣ ከብሉይ ኪዳን ጊዜያዊ እና ምሳሌያዊ መሥዋዕቶች ፍጹም የተለየ ነው። ብሉይ ኪዳን ውስጥ ሊቀ ካህናቱ በየዓመቱ ወደ ቅድስተ ቅዱሳን የሚገቡት የጥጆችና የፍየሎች ደም ይዘው ነበር፤ ይህም የኃጢአት ሥርየትን መልክ ብቻ እንጂ ፍጹምነትን አያመጣም ነበር። ክርስቶስ ግን ራሱን አቅርቦ፣ የቅድስተ ቅዱሳንን እውነተኛ ባለቤትነት አረጋግጧል።
          </Text>

          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ቀኖናዊ ትምህርት፣ በተዋሕዶ ምሥጢር ክርስቶስ ፍጹም አምላክና ፍጹም ሰው መሆኑን አረጋግጣለች። የሰውነቱን ባሕርይ ይዞ ወደ ሰማያት መቅደስ መግባቱ፣ ይህንን ሰብአዊነት ከመለኮት ጋር የዘለዓለም ክብር የሰጠው ተግባር ነው። ስለዚህ፣ የዕርገቱ ምሥጢር፣ የሰው ልጅ በእርሱ አማካኝነት ወደ መለኮታዊ ክብር ከፍ የማለት ዕድል ማግኘቱን ያረጋግጣል።
          </Text>
        </View>

        {/* ' አሁን ይታይ ዘንድ ' ፡ የዘለዓለም መስዋዕትነት መገኘት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>«አሁን ይታይ ዘንድ» ፡ የዘለዓለም መስዋዕትነት መገኘት</Text>
          </View>

          <Text style={styles.paragraph}>
            አሁን ይታይ ዘንድ የሚለው አገላለጽ፣ የክርስቶስን ሰማያዊ አገልግሎት ከብሉይ ኪዳን የአምልኮ ሥርዓት ጋር በጥልቀት ያገናኛል። የብሉይ ኪዳኑ ሊቀ ካህናት ወደ ቅድስተ ቅዱሳን በዓመት አንድ ጊዜ የኃጢአት ደም ይዞ ይገባ እንደነበረው (ዘሌዋውያን 16)፣ የክርስቶስም ዕርገት የሰማያዊውና የእውነተኛው መቅደስ መግቢያ ሆኗል። ነገር ግን ልዩነቱ በጊዜያዊነትና ዘለዓለማዊነት ላይ ነው። እርሱ በገዛ ደሙ አንድ ጊዜ ለዘለዓለም ገብቷል (ዕብ 9:12)። ይህ አሁን የሚለው ጊዜ፣ ከታሪካዊው መስቀል ላይ መሥዋዕትነት ወደ ሰማያዊው ዘለዓለማዊ ተፈጻሚነት የሚያሸጋግር ቁልፍ ሥነ መለኮታዊ ቃል ነው።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ ዮሐንስ አፈወርቅ እንደገለጸው፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ ወደ ሰማይ የገባው በራሱ ደም ነው፣ ይህም ደም የኃጢአትን ስርየት ያመጣል፤ ይህም መስዋዕትነት አንድ ጊዜ ለዘለዓለም የተፈጸመ ነው።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህም የሚያሳየው፣ በመስቀል ላይ ተፈጸመ የተባለው ሥራ፣ በሰማያዊው መቅደስ በእግዚአብሔር ፊት የማያቋርጥና ፍጹም ተቀባይነት ያለው መሆኑን ነው። ደሙ የታየው መስቀል ላይ ነው፣ ነገር ግን የዚህ ደም ዋጋና ኃይል አሁን በሰማያት ቀርቦ፣ ለተዋሕዶ ልጆች ሁሉ የዘለዓለም የኃጢአት ሥርየትንና ከእግዚአብሔር ጋር የመታረቅን ዕድል ይለግሳል።
          </Text>

          <Text style={styles.paragraph}>
            የክርስቶስ መስዋዕትነት አንድ ጊዜ ለዘለዓለም (ዕብ 9:26) መሆኑን ዕብራውያን መልእክት በጽኑ ያረጋግጣል። ሊቀ ካህናትም፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«በየዓመቱ የሌላውን ደም ይዞ ወደ ቅድስት እንደሚገባ፥ ራሱን ብዙ ጊዜ ሊያቀርብ አልገባም» (ዕብ 9:25)።</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ የዘለዓለማዊነት እውነት፣ በቤተክርስቲያን ውስጥ የሚቀርበው ቅዳሴ የክርስቶስን የመስቀል ላይ መስዋዕትነት ዳግም መፈጸም ሳይሆን፣ የዚያ ፍጹም መስዋዕትነት መዘከር እና መገኘት መሆኑን ያሰምርበታል። ክርስቶስ ዳግም መስቀል ላይ አይውልም፤ ራሱን የሠዋው አንድ ጊዜ ብቻ ሲሆን፣ ያም በዓለም ፍጻሜ (በአዲስ ኪዳን መጀመሪያ) ተፈጽሟል።
          </Text>

          <Text style={styles.paragraph}>ይህ የመስቀል ላይ ሞትና ዕርገት ፍጹም ትስስር አለው። ጌታችን ኢየሱስ ክርስቶስ፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እኔም ከምድር ከፍ ከፍ ያልሁ እንደ ሆነ ሁሉን ወደ እኔ እስባለሁ» (ዮሐ 12:32)</Text>
          </View>

          <Text style={styles.paragraph}>
            ያለው ቃል፣ በመስቀል ላይ መሞቱ (መሠዋቱ) እና ወደ ሰማይ ከፍ ከፍ ማለቱ (ማረጉ) የሰውን ልጆች ወደ አብ መንግሥት የመሳብ ኃይል እንዳለው ያረጋግጣል። አሁን ይታይ ዘንድ ያለው የደም መስዋዕትነት በሰማያት መቅደስ ውስጥ ተቀምጦ፣ ከእግዚአብሔር አብ ጋር የገባነው የአዲስ ኪዳን መሠረት ሆኖ ይዘልቃል።
          </Text>
        </View>

        {/* የክርስቶስ ሰማያዊ መቀመጫ ፡ የድኅነት ፍጻሜና ዘላለማዊ ቤዛነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የክርስቶስ ሰማያዊ መቀመጫ ፡ የድኅነት ፍጻሜና ዘላለማዊ ቤዛነት</Text>
          </View>

          <Text style={styles.paragraph}>
            የክርስቶስ ዕርገት የድኅነት ሥራው ፍጻሜ ብቻ ሳይሆን፣ እርሱ በሰማያዊው የክብር ዙፋን ላይ በእግዚአብሔር ቀኝ መቀመጡን ያመለክታል።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ነገር ግን ይህ ሰው ስለ ኃጢአት አንድን መሥዋዕት ለዘላለም አቅርቦ በእግዚአብሔር ቀኝ ተቀመጠ» (ዕብ 10:12)።</Text>
          </View>

          <Text style={styles.paragraph}>
            በእግዚአብሔር ቀኝ መቀመጡ፣ የሥልጣን፣ የክብርና የዘለዓለማዊ ድል ማረጋገጫ ሲሆን፣ የሰውነቱ ባሕርይ የመለኮታዊውን ክብር ከፍታ መጎናጸፉን ያመለክታል። ቅዱስ ጎርጎርዮስ ዘናዚያንዙስ እንደገለጸው፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«የክርስቶስ ዕርገት፣ የሰው ልጅን ክብር ከፍ ያደረገ ነው። እርሱ ሰው ሆኖ ወደ ሰማይ በማረጉ፣ የሰው ልጅን ወደ መለኮታዊ ክብር ከፍ አድርጓል።»</Text>
          </View>

          <Text style={styles.paragraph}>
            መጽሐፍ ቅዱስ ይህንን የክርስቶስን በአብ ፊት መታየት ምልጃ ብሎ ቢጠራውም (ዕብ 7:25)፣ ይህ እንደ ፍጡራን ተንበርክኮ መለመን አይደለም; ክርስቶስ ከአብና ከመንፈስ ቅዱስ ጋር በባሕርይ, በፈቃድና በሥልጣን አንድ የሆነ አምላክ ነውና። ምልጃው የተባለው በመስቀል አንድ ጊዜ የፈሰሰው ደሙ፣ የተወጋው ጎኑና የተቸነከሩት እጆቹ በአብ ፊት መታየታቸውና የኃጢአታችን ዕዳ እንዳይቆጠርብን ለዘላለም ስለ እኛ መቆማቸው ነው። በዚህም ለኃጢአተኞች ሁሉ የዘለዓለም የይቅርታ ምንጭ ሆኖ ይገኛል። የዚህ ቤዛነት ምንጭ የሰማያዊው ሊቀ ካህናት በእውነተኛው መቅደስ ውስጥ አሁን ይታይ ዘንድ ይዞ የገባው ፍጹም ደሙ ነው (ዕብ 9:12)።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ ቄርሎስ ዘእስክንድርያ እንዳስተማረው፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ ወደ ሰማይ የገባው, የሰው ልጅን ወደ አብ ለመምራት ነው። እርሱ የሰውነቱን ባሕርይ ይዞ ወደ ሰማይ በማረጉ፣ እኛም ወደዚያ እንድንገባ መንገድ ከፍቶልናል»።</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ ማለት፣ የክርስቶስ ዕርገት ለግል ድኅነታችን ብቻ ሳይሆን፣ ለሰው ዘር ሁሉ ወደ እግዚአብሔር መመለስ የመንገዱ መክፈቻ ነው። ዕርገቱ እኛም በትንሣኤ ዘመን ከክርስቶስ ጋር የመነሳትና የመክበር ተስፋ እንዳለን ያረጋግጣል።
          </Text>
        </View>

        {/* ማጠቃለያ ፡ የቃል ኪዳኑ ፍጹምነትና የቤተክርስቲያን እምነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ ፡ የቃል ኪዳኑ ፍጹምነትና የቤተክርስቲያን እምነት</Text>
          </View>

          <Text style={styles.paragraph}>
            በመጨረሻም፣ ዕብራውያን 9:24 ላይ የሚገኘው ኃይለ ቃል፣ የጌታችን የኢየሱስ ክርስቶስን ሰማያዊ አገልግሎት፣ የመስቀል ላይ መስዋዕትነትን ፍጹምነት፣ እና የአዲሱን ኪዳን የበላይነት በግልጽ ያሳያል። አሁን ይታይ ዘንድ የሚለው አገላለጽ፣ የክርስቶስ ደም በሰማያዊው መቅደስ ዘለዓለማዊ ተቀባይነት እንዳገኘና እርሱም የማያቋርጥ ሊቀ ካህናት መሆኑን ያረጋግጣል። ይህ እውነት፣ የብሉይ ኪዳን መሥዋዕታዊ ሥርዓት በክርስቶስ እንዴት ፍጻሜ እንዳገኘ ያብራራል፣ እንዲሁም የክርስቶስ መስዋዕትነት አንድ ጊዜ ለዘለዓለም መሆኑን ያረጋግጣል።
          </Text>

          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ ይህንን ውስብስብና ጥልቅ ትምህርት በጽኑ ትውፊትና ቀኖናዊ ትምህርቷ ስትጠብቅ ኖራለች። የክርስቶስን ፍጹም አንድነት መረዳት፣ የእግዚአብሔርን ፍቅር፣ ፍትሕና ምሕረትን በጥልቀት እንድንረዳ ያስችለናል። እርሱ የዓለም ሁሉ ፈጣሪ፣ አዳኝና ገዢ እንደመሆኑ መጠን፣ ለእርሱ ክብር፣ ውዳሴና አምልኮ ይገባል።
          </Text>

          <Text style={styles.paragraph}>
            ይህ እውነት ለዘለዓለም በቤተክርስቲያን ውስጥ ሲሰበክና ሲከበር ይኖራል, የክርስቲያኖችም የጽኑ እምነት, የብሩህ ተስፋና የመለኮታዊ ፍቅር ማረጋገጫ ሆኖ ይቀጥላል። አማናዊው ሊቀ ካህናችን ኢየሱስ ክርስቶስ አንድ ጊዜ በመስቀል ያቀረበው መሥዋዕትና ስለ እኛ በአብ ፊት የሚታየው የቆሰለው ሥጋውና የፈሰሰው ደሙ፣ የድኅነታችን ዋስትና መሆኑን ዐውቀን፣ በምሥጋናና በትጋት ሕይወታችንን ልንመራ ይገባናል።
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