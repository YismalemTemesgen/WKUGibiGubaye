import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LanguageServiceScreen() {
  const [expandedId, setExpandedId] = useState(null);
  const [subExpandedId, setSubExpandedId] = useState(null);

  const sections = [
    {
      id: '1',
      badge: '፬',
      title: 'የቋንቋዎችና ልዩ ፍላጎቶች አገልግሎት ማስተባበሪያ ክፍል ተግባርና ኃላፊነት',
      content: 'የግቢ ጉባኤው የቋንቋዎችና ልዩ ፍላጎቶች አገልግሎት ማስተባበሪያ ክፍል ሰብሳቢ፣ ምክትል ሰብሳቢና ፀሐፊ የሚያካትት ሲሆን የሚከተሉት ዋና ዋና ተግባራት ይኖሩታል፡፡'
    },
    {
      id: '2',
      badge: '፬፥፩',
      title: 'የክፍሉ አጠቃላይ ተግባራት',
      content: '1. በግቢ ጉባኤው ውስጥ ያሉ የቋንቋ ልማት ሥራዎችን ያስተባብራል፤\n\n2. ልዩ ፍላጎት ያላቸው አባላት ተገቢውን መንፈሳዊና ማህበራዊ አገልግሎት እንዲያገኙ ሁኔታዎችን ይመቻቻል፤\n\n3. ከሌሎች ክፍሎች ጋር በመተባበር ተስማሚ ሥልጠናዎችን ይሰጣል።'
    },
    {
      id: '3',
      badge: '፬፥፪',
      title: 'የቋንቋዎችና ልዩ ፍላጎቶች አገልግሎት ማስተባበሪያ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
      content: '1. የክፍሉን ሥራዎች በበላይነት ይመራል፣ ያስተባብራል፤\n\n2. በሥራ አስፈጻሚ ጉባኤ የሚሰጡ አቅጣጫዎችን ተፈጻሚ ያደርጋል፤\n\n3. የክፍሉን ሪፖርቶች ለአካል ግልጽ በሆነ መልኩ ያቀርባል።'
    },
    {
      id: '4',
      badge: '፬፥፫',
      title: 'የቋንቋዎችና ልዩ ፍላጎቶች አገልግሎት ማስተባበሪያ ክፍል ምክትል ሰብሳቢ ተግባርና ኃላፊነት',
      content: '1. ሰብሳቢው በማይኖርበት ጊዜ ተክቶ ይሰራል፤\n\n2. የክፍሉን ዕቅዶች አፈጻጸም ይከታተላል፤\n\n3. ከሌሎች ንዑስ ክፍሎች ጋር ያለውን ግንኙነት ያጠናክራል።'
    },
    {
      id: '5',
      badge: '፬፥፬',
      title: 'የቋንቋዎችና ልዩ ፍላጎቶች አገልግሎት ማስተባበሪያ ክፍል ፀሐፊ ተግባርና ኃላፊነት',
      content: '1. የክፍሉን ቃለ ጉባኤና ሰነዶች በንጹህ ይይዛል፤\n\n2. ደብዳቤዎችንና ሪፖርቶችን ከኃላፊዎች ጋር በመሆን ያዘጋጃል፤\n\n3. መረጃዎችን በአግባቡ አደራጅቶ ያስቀምጣል።'
    },
    {
      id: '6',
      badge: '፬፥፭',
      title: 'የቋንቋዎች ማስተባበሪያ ንዑስ ክፍል ተግባርና ኃላፊነት',
      content: 'በግቢ ጉባኤው ውስጥ የሚከናወኑ የቋንቋ አገልግሎቶችን እና ክንውኖችን በቅርበት ይከታተላል ያስተባብራልም።'
    },
    {
      id: '7',
      badge: '፬፥፮',
      title: 'የልዩ ፍላጎት መርሃ ግብራት ማስተባበሪያ ን/ክፍል ተግባርና ኃላፊነት',
      content: 'ልዩ ፍላጎት ያላቸው ተማሪዎች በሚፈልጉት መልኩ መንፈሳዊ አገልግሎቶችን እንዲያገኙ ልዩ መርሃ ግብሮችን ነድፎ ይንቀሳቀሳል።'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>የቋንቋዎችና ልዩ ፍላጎቶች አገልግሎት ማስተባበሪያ ክፍል</Text>

        {sections.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <View key={item.id} style={styles.sectionBox}>
              <TouchableOpacity 
                style={styles.headingRow} 
                activeOpacity={0.7}
                onPress={() => toggleExpand(item.id)}
              >
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
    fontSize: 14, 
    color: '#333333', 
    lineHeight: 24, 
    textAlign: 'justify'
  }
});