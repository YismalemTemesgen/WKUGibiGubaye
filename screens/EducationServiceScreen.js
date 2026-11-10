import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EducationServiceScreen() {
  const [expandedId, setExpandedId] = useState(null);

  const sections = [
    {
      id: '1',
      badge: '፩',
      title: 'የትምህርትና ሐዋርያዊ አገልግሎት ክፍል ተግባርና ኃላፊነት',
      content: 'የግቢ ጉባኤው የትምህርትና ሐዋርያዊ አገልግሎት ክፍል ሰብሳቢ፣ ም/ሰብሳቢና ፀሐፊ የሚመራው ይሆናል።'
    },
    {
      id: '2',
      badge: '፪',
      title: 'የክፍሉ አጠቃላይ ተግባራት',
      content: 'የክፍሉ ዋና ዋና ተግባራትና ኃላፊነቶች ተዘርዝረዋል...'
    },
    {
      id: '3',
      badge: '፫',
      title: 'የትምህርትና ሐዋርያዊ አገልግሎት ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
      content: 'የክፍሉን ሥራ በበላይነት ይመራል፣ ያስተባብራል።'
    },
    {
      id: '4',
      badge: '፬',
      title: 'የትምህርትና ሐዋርያዊ አገልግሎት ክፍል ም/ሰብሳቢ ተግባርና ኃላፊነት',
      content: 'ሰብሳቢው በማይኖርበት ጊዜ ተክቶ ይሠራል።'
    },
    {
      id: '5',
      badge: '፭',
      title: 'የትምህርትና ሐዋርያዊ አገልግሎት ክፍል ፀሐፊ ተግባርና ኃላፊነት',
      content: 'የስብሰባ ቃለ-ጉባኤዎችን ይይዛል፣ ደብዳቤዎችንና ሪፖርቶችን ያዘጋጃል።'
    },
    {
      id: '6',
      badge: '፮',
      title: 'የትምህርት ንኡስ ክፍል ተግባርና ኃላፊነት',
      content: 'የግቢ ጉባኤውን የትምህርት መርሐ ግብሮች ያዘጋጃል፣ ይከታተላል።'
    },
    {
      id: '7',
      badge: '፯',
      title: 'የሐዋርያዊ አገልግሎት ማስተባበሪያ ንኡስ ክፍል ተግባርና ኃላፊነት',
      content: 'ሐዋርያዊ ጉዞዎችንና አገልግሎቶችን ያስተባብራል።'
    },
    {
      id: '8',
      badge: '፰',
      title: 'የመምህራን ስልጠና ንኡስ ክፍል ተግባርና ኃላፊነት',
      content: 'ለመምህራንና ለአገልግሎት ሰጪዎች የሚሰጡ ስልጠናዎችን ያዘጋጃል።'
    },
    {
      id: '9',
      badge: '፱',
      title: 'የአብነት ትምህርት ማስተባበሪያ ንኡስ ክፍል ተግባርና ኃላፊነት',
      content: 'የአብነት ትምህርቶች (ቅዳሴ፣ ዜማ፣ ዋዜማ ወዘተ) እንዲሰጡ ሁኔታዎችን ያመቻቻል።'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Title */}
        <Text style={styles.mainTitle}>የትምህርትና ሐዋርያዊ አገልግሎት ክፍል</Text>

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
    fontSize: 14.5, 
    color: '#333333', 
    lineHeight: 24, 
    textAlign: 'justify'
  }
});