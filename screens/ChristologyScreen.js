import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ChristologyScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>መቅድም፡ ነገረ ክርስቶስ - የምሥጢረ ሥጋዌ መሠረት እምነት</Text>

        {/* Section 1: Introduction */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>መግቢያ</Text>
          </View>
          <Text style={styles.paragraph}>
            ነገረ ክርስቶስ በቅድስት ቤተክርስቲያን ዘንድ በዘመናት የሚኖር፣ በውጭ ውለረ የሚተላለፍ፣ ነገረ መለኮት ሁሉ ማዕከላዊ ምሳሌ ነው። ይህ ትምህርት የሰውን ልጅ አእምሮ ሊደርስበት ከሚችለው በላይ የሆነውን፦
          </Text>
          
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«አምላክ ሰው ሆነ ፤ ሰውም አምላክ ሆነ»</Text>
          </View>

          <Text style={styles.paragraph}>
            የሚለውን ድንቅ የምሥጢረ ሥጋዌ ሐቅ የሚመረምር ከሰማያዊ መለኮት ነው። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን፣ ከቅዱሳን አሐፍት የተለነቃቸውና በሦስት ዓለም አቀፍ ጉባኤዎች (ነቅያ፣ ቀንጥሮን፣ ኤፌሶን) የጸናውን ቀዳማዊ ቀዳማዊ ትምህርት መሠረት በማድረግ፣ የጌታችንን የኢየሱስ ክርስቶስን ማንነት በጥዋሕዶ ታስተምራለች።
          </Text>
        </View>

        {/* Section 2: Unity */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የአንድነትና የመዋሐድ ምሥጢር</Text>
          </View>
          <Text style={styles.paragraph}>
            ቤተክርስቲያናችን የምታስተምረው ነገረ ክርስቶስ <Text style={styles.boldText}>«ተዋሕዶ»</Text> በሚለው ድንቅ ቃል ይገለጻል። ይህም ማለት ረቂቅ መለኮትና ትስብእት (ሥጋ) ያለ መለወጥ፣ ያለ መደባለቅ፣ ያለ መለያየት እና ያለ መከፋፈል አንድ አካል አንድ ባሕርይ የመሆናቸው ምሥጢር ነው።
          </Text>

          <Text style={styles.paragraph}>
            ቅዱስ ቅርሎስ እንደተናገረው፦
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«ክርስቶስ ከሁለት ባሕርይ አንድ ባሕርይ፣ ከሁለት አካል አንድ አካል የሆነ አንድ ክርስቶስ ነው።»</Text>
          </View>

          <Text style={styles.paragraph}>
            ይህ ምሥጢረ መለኮቱን ወደ ሥጋቱ ያለመለውጥ፣ ሥጋውንም ወደ መለኮትነት ያለመለውጥ፤ ነገር ግን ሥጋ መለኮታዊ ክብርን ገንዘብ ባደረገበት፣ መለኮትም የሥጋን አእምሮና ሞት (ለእኛ ሲባል) ለድኅነት ዓለም ሲል የራሱ ያደረገበት ረቂቅ ጥበብ ነው።
          </Text>
        </View>

        {/* Section 3: Purpose of Incarnation */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የሥጋዌ ዋና ዓላማ</Text>
          </View>
          <Text style={styles.paragraph}>
            ነገረ ክርስቶስ ዋና ዓላማ፥ እግዚአብሔር አብ በሥጋ የመገለጡን ድንቅ ዓላማ ማብራራት ነው። ሰው ከአምላክ ተለይቶ በወደቀ ጊዜ፣ እርሱ ሰላም የሚገኝበት ብቸኛው መንገድ የአምላክ ሰው መሆን ነበር።
          </Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«እግዚአብሔር ሰው ሆነ ፤ ሰው አምላክ ይሆን ዘንድ» (ቅዱስ አትናቴዎስ)</Text>
          </View>

          <Text style={styles.paragraph}>
            እንደሚለው፥ ነገረ ክርስቶስ ትምህርት የሰውን ልጅ ከኃጢአት በትር ነጻ የወጣውን፣ ሞት የተሻረበትና የዘለአለም ሕይወት የተገኘበትን የምሥጢራት ሁሉ መጀመሪያና መጨረሻ ያሳያል።
          </Text>
        </View>

        {/* Section 4: Identity */}
        <View style={styles.sectionBox}>
          <View style={styles.headingRow}>
            <View style={styles.verticalBar} />
            <Text style={styles.sectionHeading}>የክርስቶስ ማንነት፡ ቀዳማዊና ዳህራዊ ልደት</Text>
          </View>
          <Text style={styles.paragraph}>
            ጌታችን የኢየሱስ ክርስቶስ ማንነት የሚገለጸው በሁለት መሠረታዊ ልደቶች ነው። እነዚህ ልደቶች ክርስቶስን ዘለአለማዊ አምላክነትና በጊዜ ውስጥ ሰው መሆንን ያረጋግጣሉ።
          </Text>

          <View style={styles.bulletRow}>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={18} color="#004D40" style={styles.bulletIcon} />
            <Text style={styles.bulletText}>
              <Text style={styles.boldText}>ቀዳማዊው ልደት፡</Text> በዘመናት ቅድመ ያለ እጅ ከሀን ብቻ የተወለደው ሲሆን፣ ይህ መለኮታዊ ባሕርይ፣ ዘለአለማዊነትና ከአብ ጋር ያለውን የአንድነት ምሥጢር ያረጋግታል።
            </Text>
          </View>

          <View style={styles.bulletRow}>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={18} color="#004D40" style={styles.bulletIcon} />
            <Text style={styles.bulletText}>
              <Text style={styles.boldText}>ዳህራዊው ልደት፡</Text> ደግሞ፥ በዘመኑ ፍጻሜ ከእሞንታችን ከቅድስት ድንግል ማርያም የሥጋ ልደት ነው። ይህ ደግሞ እግዚአብሔር ለድኅነታችን ሲል የሰውን ባሕርይ ገንዘብ ያደረገበት ሥጋዊ ምሥጢር ነው።
            </Text>
          </View>
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