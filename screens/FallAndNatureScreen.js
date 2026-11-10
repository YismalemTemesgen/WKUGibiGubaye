import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FallAndNatureScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>የሰውን ልጅ ውድቀትና የባሕርይ መታደስ (ድቀትና ባሕርይ)</Text>

        {/* መግቢያ */}
        <View style={styles.sectionBox}>
          <Text style={styles.paragraph}>
            በክርስትና ሥነ መለኮት መሠረት፣ የሰውን ልጅ ድኅነትና የድኅነትን አስፈላጊነት በትክክል ለመረዳት ቀዳሚው መሠረት የሰውን ልጅ የመጀመሪያ ፍጥረት፣ በበደል ምክንያት መውደቁን (ውድቀቱን) እና በክርስቶስ በኩል የተገኘውን የባሕርይ መታደስ ማወቅ ነው። እግዚአብሔር አምላክ ሰውን ሲፈጥረው በመልኩና በምሳሌው፣ ንጹሕ፣ ሐሰት የሌለበትና ከሞት ነፃ ሆኖ ነበር። ነገር ግን በነጻ ፈቃዱ በተደረገው የትእዛዝ መተላለፍ ምክንያት የሰው ልጅ ከክብሩ ወረደ፤ ባሕርዩም ቆሰለ።
          </Text>

          <Text style={styles.paragraph}>
            ይህ ውድቀት የሰው ልጅን አካላዊና መንፈሳዊ ሕይወት ብቻ ሳይሆን፣ መላውን የባሕርይ መዋቅር ያረከሰና ከእግዚአብሔር ጋር የነበረውን የጠበቀ ግንኙነት ያቋረጠ ነበር። ኦርቶዶክሳዊት ተዋሕዶ ቤተክርስቲያን እንደ አስተማረችው፣ የውድቀቱ ውጤት የሞትና የኃጢአት ርስት ወደ አዳም ዘር ሁሉ መተላለፉ ነው። ስለዚህ፣ የክርስቶስ መገለጥና የሥጋዌው ምሥጢር ያረከሰውን የሰው ባሕርይ እንደገና ለማደስና ወደ ቀድሞ ክብሩ ለመመለስ የተደረገ መለኮታዊ ጣልቃ ገብነት ነው።
          </Text>
        </View>

        {/* 1. የሰውን ልጅ የመጀመሪያ ፍጥረትና ክብር */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>1. የሰውን ልጅ የመጀመሪያ ፍጥረትና ክብር</Text>
          </View>

          <Text style={styles.paragraph}>
            እግዚአብሔር አምላክ ሰውን ከምድር አፈር አበጅቶ የሕይወት እስትንፋስ እፍ አለበት፤ ሰውም ሕያው ነፍስ ያለው ፍጥረት ሆነ (ኦሪት ዘፍጥረት 2:7)። አዳም ሲፈጠር ሞት ሳይኖርበት፣ በገነት ውስጥ በፍጹም ደስታና ንጽሕና ይኖር ነበር። በመለኮታዊ አርአያና ምሳሌ መፈጠሩ ከፍ ያለ ክብርንና የጸጋ ባለጸግነትን ሰጥቶት ነበር። 
          </Text>

          <Text style={styles.paragraph}>
            በዚህ የመጀመሪያ ደረጃ ላይ የሰው ልጅ ነፃ ፈቃድ (Free Will) ነበረው። ይህ ነፃ ፈቃድ እግዚአብሔርን በፍቅርና በውድድር ሳይሆን በፈቃደኝነት እንዲያመልክ ያስችለው ዘንድ የተሰጠ ታላቅ ስጦታ ነበር። አበው ሊቃውንት እንደሚገልጹት፣ የሰው ልጅ ባሕርይ ገና ሳይቆሽሽ፣ በንጽሕናና በቅድስና እግዚአብሔርን እያመሰገነ በገነት ይኖር ነበር።
          </Text>
        </View>

        {/* 2. የትእዛዝ መተላለፍና የውድቀት (ድቀት) ጥልቀት */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>2. የትእዛዝ መተላለፍና የውድቀት (ድቀት) ጥልቀት</Text>
          </View>

          <Text style={styles.paragraph}>
            በጥንተ ጠላት በዲያብሎስ (በእባብ) መታለል ምክንያት፣ የመጀመሪያው ሰው አዳም እና ሔዋን የእግዚአብሔርን አንዲት ትእዛዝ በመተላለፍ ከእግዚአብሔር የተሰጣቸውን ጸጋ አጡ። ይህ የትእዛዝ መተላለፍ «ውድቀት» ወይም «ድቀት» በመባል ይታወቃል። 
          </Text>

          <Text style={styles.paragraph}>
            የውድቀቱ ውጤት ወዲያውኑ ተከተለ፦
          </Text>

          <Text style={styles.paragraph}>
            • <Text style={styles.boldText}>የባሕርይ መቆሸሽ፡-</Text> ንጹህና ቅዱስ የነበረው የሰው ባሕርይ በኃጢአት መረንነት ተበከለ።
          </Text>

          <Text style={styles.paragraph}>
            • <Text style={styles.boldText}>ከእግዚአብሔር መለየት፡-</Text> ሰው ከፈጣሪው ጋር የነበረው የፊት ለፊት ግንኙነት ተቋረጠ፤ በገነትም መቆየት አቅቶት ተባረረ።
          </Text>

          <Text style={styles.paragraph}>
            • <Text style={styles.boldText}>የሞት መግባት፡-</Text> «በተበላህ ቀን ሞትን ትሞታለህ» እንደተባለ፣ ሥጋዊና መንፈሳዊ ሞት በሰው ልጆች ላይ ሥልጣን አገኘ (ኦሪት ዘፍጥረት 3:19)።
          </Text>
        </View>

        {/* 3. የባሕርይ መታደስና የክርስቶስ መዳን */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>3. የባሕርይ መታደስና የክርስቶስ መዳን</Text>
          </View>

          <Text style={styles.paragraph}>
            የሰው ልጅ በራሱ ጥረትና ኃይል ይህንን የውድቀት ጉድጓድ ልቆ መውጣት አልቻለም ነበር። የኃጢአት ዕዳን መክፈልም ሆነ የሞትን ሥልጣን መስበር ከፍጡር አቅም በላይ ነበር። ስለዚህም እግዚአብሔር አምላክ በማይመረምር ፍቅሩና ምሕረቱ ሰውን ለመታደግ የራሱን ባሕርይ (ሥጋ) ተዋሕዶ ወደ ምድር መጣ።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ቃል ሰው የሆነው፣ እኛን አምላክ (በጸጋ) ለማድረግ ነው፤ የሰውነትን ድካም በመሸከምም ባሕርያችንን አደሰን።» (ቅዱስ አትናቴዎስ)</Text>
          </View>

          <Text style={styles.paragraph}>
            በክርስቶስ መስቀልና ትንሣኤ አማካኝነት የተገኘው ድኅነት፣ ሰውን ወደ ነበረበት የመጀመሪያው ክብር ብቻ ሳይሆን፣ ከዚያም በላይ በመለኮታዊ ጸጋ የተሞላ የልጅነት ክብር አጎናጽፎታል። በጥምቀትና በቅዱስ ቁርባን አማካኝነት የቆሰለው የሰው ባሕርይ ይፈወሳል፤ አዲሱ ሰውም በእግዚአብሔር መልክ ዳግም ይፈጠራል።
          </Text>
        </View>

        {/* ማጠቃለያ */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>ማጠቃለያ</Text>
          </View>

          <Text style={styles.paragraph}>
            የሰውን ልጅ ውድቀትና የባሕርይ መታደስ በጥልቀት መረዳት የኦርቶዶክሳዊት ተዋሕዶ እምነት መሠረት ነው። ውድቀቱ የሰውን ባሕርይ የደቀቀና የሞተ ቢያደርገውም፣ የክርስቶስ የሥጋዌ ምሥጢር ግን ያንን የረከሰ ባሕርይ አድሶ የዘለዓለም ሕይወትን አሰጥቶታል። ይህ የመታደስ ሕይወት በቤተክርስቲያን ምሥጢራትና በሰማያዊ ጸጋ ውስጥ ዘወትር የሚታደስ ታላቅ መለኮታዊ ምሥጢር ነው።
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