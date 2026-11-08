import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ChristologyScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>መቅድመ ነገረ ክርስቶስ፡- የምሥጢረ ሥጋዌ መሠረተ እምነት</Text>

        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>መግቢያ</Text>
          </View>
          
          <Text style={styles.paragraph}>
            ነገረ ክርስቶስ በቅድስት ቤተክርስቲያን ዘንድ በዘመናት የማይሻር፣ በውጣ ውረድ የማይናወጥ የነገረ መለኮት ሁሉ ማዕከላዊ ምሰሶ ነው። ይህ ትምህርት የሰው ልጅ አእምሮ ሊደርስበት ከሚችለው በላይ የሆነውን፣
          </Text>
          
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«አምላክ ሰው ሆነ ፤ ሰውም አምላክ ሆነ»</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለውን ድንቅ የምሥጢረ ሥጋዌ ሐቅ የሚመረምር ሰማያዊ መስኮት ነው። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ ከቅዱሳን ሐዋርያት የተረከበችውንና በሦስቱ ዓለም አቀፍ ጉባኤያት (ኒቂያ፣ ቁስጥንጥንያ፣ ኤፌሶን) የጸናውን ቀኖናዊ አስተምህሮ መሠረት በማድረግ፣ የጌታችን የኢየሱስ ክርስቶስን ማንነት በተዋሕዶ ታስረዳለች።
          </Text>
        </View>

        {/* የአንድነትና የመዋሐድ ምሥጢር */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የአንድነትና የመዋሐድ ምሥጢር</Text>
          </View>
          
          <Text style={styles.paragraph}>
            ቤተክርስቲያናችን የምታስተምረው ነገረ ክርስቶስ <Text style={styles.boldText}>«ተዋሕዶ»</Text> በሚለው ድንቅ ቃል ይገለጻል። ይህም ማለት ረቂቅ መለኮትና ትስብእት (ሥጋ) ያለ መለወጥ፣ ያለ መደባለቅ፣ ያለ መለያየት እና ያለ መከፋፈል አንድ አካል አንድ ባሕርይ የመሆናቸው ምሥጢር ነው።
          </Text>

          <Text style={styles.paragraph}>ቅዱስ ቄርሎስ እንደተናገረው፦</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ ከሁለት ባሕርይ አንድ ባሕርይ፣ ከሁለት አካል አንድ አካል የሆነ አንድ ክርስቶስ ነው።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ መዋሐድ መለኮትን ወደ ሥጋነት ያልለወጠ፣ ሥጋንም ወደ መለኮትነት ያላቀለጠ፣ ነገር ግን ሥጋ መለኮታዊ ክብርን ገንዘብ ያደረገበት፣ መለኮትም የሥጋን ሕማምና ሞት (ያለ ኃጢአት) ለድኅነተ ዓለም ሲል የራሱ ያደረገበት ረቂቅ ጥበብ ነው።
          </Text>
    
          <Text style={styles.paragraph}>
            ነገረ ክርስቶስ በቤተክርስቲያናችን ዘንድ የደረቅ ፍልስፍና ውጤት ሳይሆን፣ የቅዱሳን አበው የሕይወትና የጸሎት ተሞክሮ ነጸብራቅ ነው። መለኮታዊ ባሕርይው ከዘለዓለም እስከ ዘለዓለም የማይለወጥ አምላክ፣ በዘመን ፍጻሜ ከእመቤታችን ከቅድስት ድንግል ማርያም በነሳው ሥጋ በመካከላችን ተገለጠ። እርሱ በባሕርይው አምላክ ሲሆን፣ ከድንግል ማርያም ሥጋንና ነፍስን ነሥቶ በተዋሕዶ ፍጹም ሰው ሆነ።
          </Text>

          <Text style={styles.paragraph}>
            የነገረ ክርስቶስ ዋና ግብ፣ እግዚአብሔር ወልድ በሥጋ የመገለጡን ድንቅ ዓላማ ማብራራት ነው። ሰው ከአምላኩ ተለይቶ በወደቀ ጊዜ፣ እርቅና ሰላም የሚገኝበት ብቸኛው መንገድ የአምላክ ሰው መሆን ነበር።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እግዚአብሔር ሰው ሆነ ፤ ሰው አምላክ ይሆን ዘንድ» (ቅዱስ አትናቴዎስ)</Text>
          </View>

          <Text style={styles.paragraph}>
            እንደሚለው፣ የነገረ ክርስቶስ ትምህርት የሰው ልጅ ከኃጢአት ባርነት ነፃ የወጣበትን፣ ሞት የተሸነፈበትንና የዘለዓለም ሕይወት የተገኘበትን የምሥጢራት ሁሉ መጀመሪያና መጨረሻ ያሳየናል።
          </Text>
        </View>

        {/* የክርስቶስ ማንነት፡ ቀዳማዊና ድኅራዊ ልደት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የክርስቶስ ማንነት፡ ቀዳማዊና ድኅራዊ ልደት</Text>
          </View>
          
          <Text style={styles.paragraph}>
            የጌታችን የኢየሱስ ክርስቶስ ማንነት የሚገለጸው በሁለት መሠረታዊ ልደቶች ነው። እነዚህ ልደቶች የክርስቶስን ዘለዓለማዊ አምላክነትና በጊዜ ውስጥ ሰው መሆኑን ያረጋግጣሉ።
          </Text>

          <View style={styles.bulletRow}>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={18} color="#004D40" style={styles.bulletIcon} />
            <Text style={styles.bulletText}>
              <Text style={styles.boldText}>ቀዳማዊው ልደት፡</Text> ከዘመናት አስቀድሞ ያለ እናት ከአብ ብቻ የተወለደበት ሲሆን፣ ይህ የመለኮታዊ ባሕርይ፣ ዘለዓለማዊነትንና ከአብ ጋር ያለውን የአንድነት ምሥጢር ያረጋግጣል።
            </Text>       
          </View>

          <View style={styles.bulletRow}>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={18} color="#004D40" style={styles.bulletIcon} />
            <Text style={styles.bulletText}>
              <Text style={styles.boldText}>ድኅራዊው ልደት፡</Text> በዘመኑ ፍጻሜ ያለ አባት ከእመቤታችን ከቅድስት ድንግል ማርያም የሥጋ ልደት ነው። ይህ ደግሞ እግዚአብሔር ለድኅነታችን ሲል የሰውን ባሕርይ ገንዘቡ ያደረገበትን ሥጋዌ ምሥጢር ያስረዳል።
            </Text>
          </View>

          <Text style={[styles.paragraph, { marginTop: 10 }]}>
            የክርስቶስ ማንነት ማዕከል እነዚህን ሁለቱን ልደቶች በውስጡ መያዙ ነው። እርሱ በመጀመሪያው ልደቱ ፍጹም አምላክ፣ በሁለተኛው ልደቱ ደግሞ ፍጹም ሰው ሆነ።
          </Text>
        </View>

        {/* ቀዳማዊ ልደት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ቀዳማዊ ልደት ፡ ዘለዓለማዊው የእግዚአብሔር ወልድ</Text>
          </View>
          
          <Text style={styles.paragraph}>
            ጌታችን ኢየሱስ ክርስቶስ፣ ከዘመናት አስቀድሞ፣ ያለ እናት ከአብ ብቻ የተወለደ፣ ከሥላሴ አንዱ አካል የሆነ ዘለዓለማዊ አምላክ ነው። ነቢዩ ዳዊት ይህንን ሲመሰክር፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«አንተ ልጄ ነህ። እኔ ዛሬ ወለድሁህ» (መዝሙር 2:7)</Text>
          </View>

          <Text style={styles.paragraph}>
            ብሏል። ቅዱስ ዮሐንስ ወንጌላዊም የመለኮታዊውን ቃል ዘለዓለማዊነት ሲገልጽ፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«በመጀመሪያ ቃል ነበረ፥ ቃልም በእግዚአብሔር ዘንድ ነበረ፥ ቃልም እግዚአብሔር ነበረ» (ዮሐንስ 1:1)</Text>
          </View>

          <Text style={styles.paragraph}>
            በማለት፣ የክርስቶስን ከአብ ጋር ያለውን ዘለዓለማዊ ሕልውናና መለኮታዊ ባሕርይ ያረጋግጣል።
          </Text>
        </View>

        {/* ድኅራዊ ልደት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ድኅራዊ ልደት ፡ በጊዜ ውስጥ ሰው መሆን</Text>
          </View>
          
          <Text style={styles.paragraph}>
            ሁለተኛው ልደት፣ በዘመኑ ፍጻሜ፣ ያለ አባት ከእመቤታችን ከቅድስት ድንግል ማርያም የሥጋ ልደት ነው። ሐዋርያው ቅዱስ ጳውሎስ ይህንን ሲገልጽ፦ «የዘመኑ ፍጻሜ በደረሰ ጊዜ እግዚአብሔር ከሴት የተወለደውን ከሕግ በታች ተወለደውን ልጁን ላከ» (ገላትያ 4:4) ይላል።
          </Text>

          <Text style={styles.paragraph}>
            የእመቤታችን ድንግልና ሳይለወጥ፣ በመንፈስ ቅዱስ አማካኝነት መፀነሱ (ሉቃስ 1:34-35)፣ ይህ ልደት ከመደበኛው የሰው ልደት የተለየና መለኮታዊ ምሥጢር መሆኑን ያረጋግጣል።
          </Text>
        </View>

        {/* አካላዊ ተዋሕዶ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>አካላዊ ተዋሕዶ ፡ የመለኮትና ትስብእት የማይነጣጠል አንድነት</Text>
          </View>
          
          <Text style={styles.paragraph}>
            የክርስቶስ ማንነት ማዕከላዊ ምሥጢር፣ አካላዊ ተዋሕዶ ነው። መለኮታዊው ባሕርይ እና የሰውነት ባሕርይ በጌታችን በኢየሱስ ክርስቶስ አንድ አካል ውስጥ፣ ያለመቀላቀል፣ ያለመለወጥ፣ ያለመለያየትና ያለመከፋፈል ተዋሕደዋል።
          </Text>

          <Text style={styles.paragraph}>
            ሐዋርያው ቅዱስ ጳውሎስ፦ «እርሱ በእግዚአብሔር መልክ ሲኖር ሳለ ከእግዚአብሔር ጋር መተካከልን መቀማት እንደሚገባ ነገር አልቆጠረውም፤ ነገር ግን የባሪያን መልክ ይዞ በሰውም ምሳሌ ሆኖ ራሱን ባዶ አደረገ» (ፊልጵስዩስ 2:6-7) በማለት ይገልጻል።
          </Text>
        </View>

        {/* የክርስቶስ አምላክነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የክርስቶስ አምላክነትና ፈጣሪነት</Text>
          </View>
          
          <Text style={styles.paragraph}>
            የጌታችን የኢየሱስ ክርስቶስ ፍጹም አምላክነት፣ የመለኮታዊ ባሕርያት ሁሉ ባለቤት መሆኑን ያረጋግጣል። ነቢዩ ኢሳይያስ «ሕፃን ተወልዶልናልና… ስሙም ድንቅ፣ መካር፣ ኃያል፣ አምላክ የዘላለም አባት፣ የሰላም አለቃ ተብሎ ይጠራል» (ኢሳይያስ 9:6) ብሏል።
          </Text>

          <Text style={styles.paragraph}>
            ጌታችን ኢየሱስ ክርስቶስ የሁሉ ነገር አስገኝና ፈጣሪ ነው። «ሁሉ በእርሱ ሆነ ከሆነውም አንዳችስ እንኳ ያለ እርሱ አልሆነም» (ዮሐንስ 1:3)።
          </Text>
        </View>

        {/* የክርስቶስ ሰውነት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የክርስቶስ ሰውነት ፡ ፍጹም ትስብእትና አዲሱ አዳም</Text>
          </View>
          
          <Text style={styles.paragraph}>
            ክርስቶስ ፍጹም አምላክ እንደሆነ ሁሉ፣ ፍጹም ሰውም ነው። እርሱ የሰውን ተፈጥሮ ሙሉ በሙሉ በመውሰድ፣ ከኃጢአት በቀር የሰውን ሕይወት በሁሉም ነገር ተካፍሏል (ዕብራውያን 4:15)።
          </Text>

          <Text style={styles.paragraph}>
            ክርስቶስ አዲሱ አዳም ነው። የመጀመሪያው አዳም ባለመታዘዙ ሞትንና ኃጢአትን ወደ ዓለም እንዳመጣ፣ ክርስቶስ በመታዘዙ የዘለዓለም ሕይወትንና ጽድቅን አመጣ (ሮሜ 5:19)።
          </Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ</Text>
          </View>
          
          <Text style={styles.paragraph}>
            ነገረ ክርስቶስ የክርስትና እምነት የልብ ምት ሲሆን፣ የጌታችን የኢየሱስ ክርስቶስን ማንነት፣ በዘለዓለማዊ ልደቱ ከአብ፣ እና በጊዜያዊ ልደቱ ከድንግል ማርያም፣ ያስረዳል።
          </Text>

          <Text style={styles.paragraph}>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ ይህንን ውስብስብና ጥልቅ ትምህርት በጽኑ ትውፊትና ቀኖናዊ ትምህርቷ ስትጠብቅ ኖራለች። እርሱ የዓለም ሁሉ ፈጣሪ፣ አዳኝና ገዢ እንደመሆኑ መጠን፣ ለእርሱ ክብር፣ ውዳሴና አምልኮ ይገባል።
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
  },
  bulletRow: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    marginTop: 8,
    paddingRight: 8
  },
  bulletIcon: { 
    marginRight: 8, 
    marginTop: 2 
  },
  bulletText: { 
    fontSize: 14, 
    color: '#333333', 
    flex: 1, 
    lineHeight: 22 
  }
});