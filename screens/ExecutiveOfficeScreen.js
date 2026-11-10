import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ExecutiveOfficeScreen() {
  const [expandedId, setExpandedId] = useState(null);

  const sections = [
    {
      id: '1',
      badge: '፩',
      title: 'የሥራ አስፈጻሚ ጽ/ቤት ተግባርና ኃላፊነት',
      content: 'የግቢ ጉባኤው ጽ/ቤት የግቢ ጉባኤውን ሰብሳቢ፣ ም/ሰብሳቢና ፀሃፊ የሚያካትት ይሆናል।'
    },
    {
      id: '2',
      badge: '፪',
      title: 'የሥራ አስፈጻሚ ጽሕፈት ቤት አጠቃላይ ተግባራት',
      content: '1. የግቢ ጉባኤውን አገልግሎት በበላይነት ይመራል፤ ሌሎች ክፍሎች አገልግሎታቸውን በአግባቡ እንዲወጡ ያበረታታል።\n\n2. ለሥራ አስፈጻሚ ጉባኤ የስብሰባ አጀንዳዎችን ተወያይቶ ያዘጋጃል።\n\n3. የግቢ ጉባኤውን የስራ አስፈጻሚ ሪፖርት አጠናክሮ ለስራ አስፈጻሚ ጉባኤ ያቀርባል ሲፀድቅም ለማዕከሉ ያቀርባል።\n\n4. እንደአስፈላጊነቱ አስቸኳይ ስብሰባዎች ይጠራል።\n\n5. በየስድስት ወሩ አጠቃላይ የግቢውን ጠቅላላ ጉባኤ ከስራ አስፈጻሚ አባላት ጋር በመሆን ያዘጋጃል ተወካይም ከማዕከሉ ያስመድባል።\n\n6. ግቢ ጉባኤያት ከሌሎች አካላት ጋር ያሉ የውጭ ግንኙነቶችን ከማዕከሉ ግቢ ጉባኤያት ዋና ክፍል ጋር በመመካከር ያከናውናል።'
    },
    {
      id: '3',
      badge: '፫',
      title: 'የግቢ ጉባኤው ሰብሳቢ ተግባርና ኃላፊነት',
      content: '1. የግቢ ጉባኤውን ስራ በበላይነት ይመራል፣ ክፍሎችም አገልግሎታቸውን በአግባቡ እንዲወጡ ያበረታታል።\n\n2. የግቢ ጉባኤውን ጠቅላላ ጉባኤና የስራ አስፈጻሚ ጉባኤ ስብሰባዎችን ይመራል።\n\n3. ለግቢ ጉባኤው የተመደበውን በጀት፣ ቁሳቁስ፣ ወዘተ ከሂሳብና ንብረት ክፍል ኃላፊ ጋር በመሆን ይፈቅዳል።\n\n4. እንደአስፈላጊነቱ አስቸኳይ ስብሰባዎችን ይጠራል።\n\n5. በማዕከሉ/ወ/ማዕከሉ ስራ አስፈጻሚ ጉባኤ ስብሰባ ላይ ግቢ ጉባኤውን ወክሎ ይገኛል።\n\n6. በግቢ ጉባኤው ስም የሚወጡ ደብዳቤዎችን ፈርሞ እንዲወጡ ያደርጋል።\n\n7. በየ6ወሩ የግቢ ጉባኤውን ጠቅላላ ጉባኤ እንዲዘጋጅ ጥሪ ያስተላልፍል።\n\n8. ገቢ ደብዳቤዎችን ለሚመለከታቸው ክፍሎች ይመራል፣ ምላሽ የሚፈልጉ ደብዳቤዎች ማስታወሻ በመያዝ ከሚመለከተው ክፍል ወቅታዊ ምላሽ መሰጠቱን ይከታተላል።\n\n9. የሲሶ ዓመት ሪፖርት ለማዕከሉ/ወረዳ ማዕከሉ ወቅቱን ጠብቆ መላኩን ይቆጣጠራል።\n\n10. የክፍል ኃላፊዎች የተሰጣቸውን ተግባርና የተጣለባቸውን ኃላፊነት በአግባቡ እየተወጡ መሆኑን ይከታተላል። መስተካከል ያለባቸው ጉዳዮች ካሉ በግልፅ ያስረዳል። በዚህ ሂደት መሻሻል ካልታየና ስራዎች እየተበደሉ መሆናቸው ከተረጋገጠ በምትካቸው ሌሎች ኃላፊዎች በስራ አስፈጻሚ ውሳኔ እንዲመደቡ ለስራ አስፈጻሚ ጉባኤ ያቀርባል።\n\n11. በግቢ ጉባኤው ጠቅላላ ጉባኤ የፀደቀውን ዕቅድ ለማዕከሉ ይልካል። ማዕከሉ ማሻሻያ አድርጎበት ከጸደቀ በኋላ በሚፈለገው መጠን ተባዝቶ ለዋና ክፍሎች መሰጠቱንና ለግቢ ጉባኤውም ቀሪ መደረጉን ያረጋግጣል።\n\n12. ከምክትል ሰብሳቢውና ከጸሐፊው ጋር በመመዳደብ በክፍሎች ስብሰባዎች ላይ ይገኛል።\n\n13. የማዕከሉንና የወረዳ ማዕከሉን ተወካዮች በመጋበዝ የስራ አስፈጻሚ ጉባኤ የምክክር መርሐ ግብር እንዲዘጋጅ ያደርጋል።\n\n14. ከማዕከሉ/ወረዳ ማዕከሉ ስራ አስፈጻሚ አንድ ተወካይ በመጠየቅ እና ከግቢ ጉባኤውም አንድ የስራ አስፈጻሚ አባል (የሂሳብና ንብረት ክፍል ኃላፊ ቢሆን ይመረጣል) በማስመረጥ የግቢ ጉባኤው የጋራ ቁጠባ ሂሳብ መከፈቱንና ገንዘብ በባንክ መቀመጡን ያረጋግጣል (የግቢ ጉባኤያት የሂሳብና ንብረት አያያዝ መመሪያ በሚፈቅደው መሠረት)።\n\n15. በማዕከሉና በወረዳ ማዕከሉ ጠቅላላ ጉባኤያት ላይ ሌሎች የስራ አስፈጻሚ አባላትን ጨምሮ ይገኛል።\n\n16. የአገልግሎት ክፍሎች የዓመቱን ዕቅድና መርሐ ግብራት በማዕከሉ እንዲጸድቁ ያደርጋል፣ ይቆጣጠራል።'
    },
    {
      id: '4',
      badge: '፬',
      title: 'የምክትል ሰብሳቢ ተግባርና ኃላፊነት',
      content: '1. ሰብሳቢው በሌለበት ተክቶ ይሰራል።\n\n2. በሰብሳቢው የሚሰጠውን የስራ ድርሻ ያከናውናል።\n\n3. ግቢ ጉባኤው ከሌሎች አካላት ጋር የሚያደርገውን ማንኛውንም የውጭ ግንኙነቶች ከማዕከሉ ግቢ ጉባኤያት ዋና ክፍል እና ከማዕከሉ ከሚወከሉ የግቢ ጉባኤ ስራ አስፈጻሚ ጉባኤ አባላት ጋር በመመካከር ያከናውናል።'
    },
    {
      id: '5',
      badge: '፭',
      title: 'የፀሀፊ ተግባርና ኃላፊነት',
      content: '1. ግቢ ጉባኤውን በተመለከተ የሚጻፉ ደብዳቤዎችን ጽፎ በሰብሳቢው ተፈርመው እንዲወጡ ያደርጋል።\n\n2. የሥራ አስፈጻሚ ጉባኤ የመወያያ አጀንዳ ከሰብሳቢውና ከምክትል ሰብሳቢው ጋር በመሆን ያዘጋጃል፣ ቃለ ጉባኤ ይይዛል።\n\n3. የግቢ ጉባኤውን የሥራ አፈጻጸም ሪፖርት አጠናክሮ ለስራ አስፈጻሚ ጉባኤ ያቀርባል፣ ሲፀድቅም ለማዕከሉ ይልካል።\n\n4. የአገልግሎት ክፍሎች ዓመታዊ ዕቅድና የሩብ ዓመት ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ተሰርተውም ሲመጡ አጠናክሮ ለስራ አስፈጻሚው ጉባኤ እንዲገመገሙ ያቀርባል። የተገመገመውንም ለማዕከሉ ይልካል።\n\n5. ገቢ ደብዳቤዎችን በፕሮቶኮል መዝገብ ገቢ ካደረገ በኋላ ሰብሳቢው ወይም ምክትል ሰብሳቢው ለሚመለከተው ክፍል እንዲመራበት ያቀርባል፤ ከተመራበትም በኋላ ለሚመለከተው ክፍል ያደርሳል።\n\n6. በትምህርት ዓመቱ ማብቂያ ለግቢ ጉባኤው ጠቅላላ ጉባኤ የሚቀርብ ዓመታዊ ሪፖርት ያጠናክራል።\n\n7. በበዓላት ወቅት ለተቋሙ አስተዳደር አካላት፣ ለአጥቢያ ሰበካ ጉባኤ፣ ለሰ/ ት/ቤት እና ለማዕከሉ/ወረዳ ማዕከሉ የመልካም ምኞት መግለጫ ደብዳቤዎችን ያዘጋጃል።\n\n8. ጽ/ቤቱን የ3ወር ዕቅድ አፈጻጸም ሪፖርትና ዓመታዊ ዕቅድ ያዘጋጃል።\n\n9. በጠቅላላ ጉባኤ የጸደቀውን ዕቅድ በሚፈለገው መጠን አባዝቶ ለማዕከሉ/ወረዳ ማዕከሉ ይልካል።\n\n10. ቋሚና አላቂ የጽህፈት ዕቃዎችን በተያዘው የግዥ ሰሌዳ መሰረት ከሂሳብና ንብረት ክፍል ጋር በመሆን ገዝቶ በወቅቱ ለየክፍሎች ይሰጣል።\n\n11. የሥራ አስፈጻሚ ጉባኤና የአገልግሎት ክፍሎች አባላትንና ዝርዝር መዝግቦ ይይዛል።\n\n12. የግቢ ጉባኤውን መረጃዎች/ፋይሎች በአግባቡ አደራጅቶ በተፈለጉ ጊዜ በቀላሉ ለማግኘት በሚቻልበት መልኩ ያስቀምጣል።\n\n13. ከሰብሳቢውና ከምክትል ሰብሳቢው ጋር በመነጋገር የጽ/ቤቱ አባላት በክፍሎች ስብሰባ ላይ የሚገኙበትን መርሐ ግብር ያወጣል፣ ተፈጻሚነቱንም ይከታተላል (አመዳደቡ በዙር ወይም እንደአመቺነቱ የሚቀያየር ቢሆን የጽ/ቤቱ አባላት ብዙ ክፍሎችን እንዲያዩ ያስችላል)።\n\n14. ክፍሎች የገቢና የወጭ ማህደር አዘጋጅተው ደብዳቤዎችንና ተዛማጅ መረጃዎችን በአግባቡ እንዲያስቀምጡ ያሳስባል አፈጻጸሙንም ይከታተላል።\n\n15. የግቢ ጉባኤውን ዕቅድ በበጀት ዓመቱ መጀመሪያ አባዝቶ ለክፍል ኃላፊዎች ይሰጣል።\n\n16. ሌሎች በሰብሳቢ የሚሰጡትን ተግባራት ያከናውናል።'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>የሥራ አስፈጻሚ ጽ/ቤት</Text>

        {sections.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <View key={item.id} style={styles.sectionBox}>
              <TouchableOpacity 
                style={styles.headingRow} 
                activeOpacity={0.7}
                onPress={() => toggleExpand(item.id)}
              >
                {/* ጥቁር የቁጥር ምልክት ማቀፊያ (Badge) */}
                <View style={styles.badgeBox}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>

                <Text style={styles.sectionHeading}>{item.title}</Text>

                <MaterialCommunityIcons 
                  name={isExpanded ? "chevron-up" : "chevron-down"} 
                  size={22} 
                  color="#111" 
                />
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.contentContainer}>
                  <Text style={styles.paragraph}>{item.content}</Text>
                </View>
              )}
            </View>
          );
        })}

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
    padding: 14, 
    marginBottom: 14, 
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
  },
  badgeBox: {
    backgroundColor: '#111111',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  sectionHeading: { 
    fontSize: 14.5, 
    fontWeight: 'bold', 
    color: '#111111', 
    flex: 1 
  },
  contentContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12,
  },
  paragraph: { 
    fontSize: 14.5, 
    color: '#333333', 
    lineHeight: 24, 
    textAlign: 'justify'
  }
});