import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MemberCareServiceScreen() {
  const [expandedId, setExpandedId] = useState(null);
  const [subExpandedId, setSubExpandedId] = useState(null);

  const sections = [
    {
      id: '1',
      badge: '፩',
      title: 'የአባላት እንክብካቤ፣ ምክክርና አቅም ማጎልበቻ ክፍል ተግባርና ኃላፊነት',
      content:
        'የግቢ ጉባኤው የአባላት እንክብካቤ፣ ምክክርና አቅም ማጎልበቻ ክፍል የአባላትን መንፈሳዊና ማኅበራዊ ደኅንነት መጠበቅ፣ በምክክርና በንስሐ አገልግሎት መደገፍ እንዲሁም በዕውቀት፣ በክህሎትና በአገልግሎት ብቁ እንዲሆኑ አቅማቸውን ማጎልበት ዋነኛ ተልዕኮው ነው። በሰብሳቢ፣ በምክትል ሰብሳቢና በጸሐፊ የሚመራ ሆኖ የሚከተሉትን ዋና ዋና ተግባራት ያከናውናል፡፡'
    },
    {
      id: '2',
      badge: '፪',
      title: 'የክፍሉ አጠቃላይ ተግባራት',
      content:
        '1. የግቢ ጉባኤውን አባላት መንፈሳዊና ማኅበራዊ እንክብካቤ በስርዓት ይመራል፣ ይከታተላል፤\n\n2. አባላት በግቢ ቆይታቸው የሚያጋጥሟቸውን ችግሮች በምክክር፣ በንስሐና በድጋፍ እንዲፈቱ ያስተባብራል፤\n\n3. የአባላትን የአቅም ማጎልበቻ ስልጠናዎች በማቀድና በማስፈጸም ብቁና አገልጋይ አባላትን ያፈራል፤\n\n4. የክፍሉን ዕቅድና በጀት ያዘጋጃል፣ ያስፈጽማል፣ የአፈጻጸም ሪፖርትም ለሚመለከተው አካል ያቀርባል፡፡'
    },
    {
      id: '3',
      badge: '፫',
      title: 'የአባላት እንክብካቤ፣ ምክክርና አቅም ማጎልበቻ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
      content:
        '1. የክፍሉን አጠቃላይ እንቅስቃሴ በበላይነት ይመራል፣ ያስተባብራል፣ በዕቅድ መሠረት መፈጸሙን ይከታተላል፤\n\n2. ከግቢ ጉባኤው አመራርና ከሌሎች ክፍላት ጋር በቅንጅት በመሥራት የአባላትን ደኅንነትና እድገት ያረጋግጣል፤\n\n3. የንዑሳን ክፍሎችን ሥራ ይገመግማል፣ የጋራ ስብሰባዎችን ይመራል፣ ውሳኔዎችንም ያስፈጽማል፤\n\n4. የክፍሉን አጠቃላይ የሥራ ሪፖርት አቀናብሮ ያቀርባል፡፡'
    },
    {
      id: '4',
      badge: '፬',
      title: 'የአባላት እንክብካቤ፣ ምክክርና አቅም ማጎልበቻ ክፍል ምክትል ሰብሳቢ ተግባርና ኃላፊነት',
      content:
        '1. ሰብሳቢው በማይኖርበት ወይም በተለየ ኃላፊነት በተጠመደ ጊዜ ተክቶ ይሠራል፤\n\n2. የንዑሳን ክፍሎችን ዕለታዊ አፈጻጸም በቅርብ ይከታተላል፣ ድጋፍም ይሰጣል፤\n\n3. በአባላት መካከል መተሳሰብን፣ አንድነትንና የጋራ መንፈሳዊ ሕይወትን የሚያጠናክሩ መርሐ ግብራትን ይከታተላል፤\n\n4. በሰብሳቢው የሚሰጡ ተጨማሪ የሥራ ኃላፊነቶችን ያከናውናል፡፡'
    },
    {
      id: '5',
      badge: '፭',
      title: 'የአባላት እንክብካቤ፣ ምክክርና አቅም ማጎልበቻ ክፍል ጸሐፊ ተግባርና ኃላፊነት',
      content:
        '1. የክፍሉን ስብሰባዎች ቃለ ጉባኤ በንጹህ ይይዛል፣ ያደራጃል፣ የተወሰኑ ውሳኔዎችንም ይመዘግባል፤\n\n2. የክፍሉን ዕቅዶች፣ ደብዳቤዎች፣ ማስታወሻዎችና ሪፖርቶች በአግባቡ ሰነድ አድርጎ ይይዛል፤\n\n3. የንዑሳን ክፍሎችን ሪፖርቶች በወቅቱ ያሰባስባል፣ ለክፍሉ አመራርም ተደራሽ ያደርጋል፤\n\n4. የክፍሉን የመረጃ ልውውጥና የማኅደር አያያዝ ስርዓት የተጠበቀ እንዲሆን ያግዛል፡፡'
    },
    {
      id: '6',
      badge: '፮',
      title: 'የአባላት እንክብካቤ ንዑስ ክፍል ተግባርና ኃላፊነት',
      content:
        'የንዑስ ክፍሉ አጠቃላይ ተግባራት\n\nይህ ንዑስ ክፍል የግቢ ጉባኤውን አባላት መንፈሳዊና ማኅበራዊ እንክብካቤ በቅርበት የሚከታተልና የሚደግፍ ነው፡፡',
      isParent: true,
      subSections: [
        {
          id: '6_1',
          badge: '፮፥፩',
          title: 'የአባላት እንክብካቤ ንዑስ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
          content:
            '1. የንዑስ ክፍሉን ሥራ በበላይነት ይመራል፤\n\n2. የታመሙ፣ በችግር ውስጥ ያሉ ወይም ልዩ ትኩረት የሚሹ አባላትን በመለየት እንክብካቤና ድጋፍ ያስተባብራል፤\n\n3. በንዑስ ክፍሉ የተወሰኑ ውሳኔዎችን ለአባላት ያሳውቃል፣ ተፈጻሚነቱንም ይከታተላል፤\n\n4. የንዑስ ክፍሉን ዕቅድና የአፈጻጸም ሪፖርት ለክፍሉ ያቀርባል፡፡'
        },
        {
          id: '6_2',
          badge: '፮፥፪',
          title: 'አዲስ ገቢ አባላት አቀባበልና መከታተል ተግባርና ኃላፊነት',
          content:
            '1. አዲስ የሚገቡ ተማሪዎችንና አባላትን ይቀበላል፣ ያስተዋውቃል፣ ከግቢ ጉባኤው ሕይወት ጋር እንዲዋሃዱ ያግዛል፤\n\n2. አዳዲስ አባላት ስለ ግቢ ጉባኤው ክፍላትና አገልግሎቶች ግንዛቤ እንዲያገኙ ያመቻቻል፤\n\n3. በአባላት መካከል ፍቅር፣ መረዳዳትና ወንድማዊ/እኅታዊ መቀራረብ እንዲጎለብት ይሠራል፡፡'
        }
      ]
    },
    {
      id: '7',
      badge: '፯',
      title: 'የመረጃ መሰብሰቢያና ማደራጃ ንዑስ ክፍል ተግባርና ኃላፊነት',
      content:
        'የንዑስ ክፍሉ አጠቃላይ ተግባራት\n\nይህ ንዑስ ክፍል የግቢ ጉባኤውን አባላት መረጃ በስርዓት የሚሰበስብ፣ የሚያደራጅና ለውሳኔና ለዕቅድ ምቹ የሚያደርግ ነው፡፡',
      isParent: true,
      subSections: [
        {
          id: '7_1',
          badge: '፯፥፩',
          title: 'የመረጃ መሰብሰቢያና ማደራጃ ንዑስ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
          content:
            '1. የንዑስ ክፍሉን ሥራ በበላይነት ይመራል፤\n\n2. የአባላትን መረጃ (የትምህርት ክፍል፣ ዓመት፣ መኖሪያ፣ የአገልግሎት ተሳትፎ ወዘተ.) በስርዓት እንዲሰበሰብና እንዲደራጅ ያደርጋል፤\n\n3. የተሰበሰበውን መረጃ ወቅታዊ ያደርጋል፣ ለክፍሉና ለግቢ ጉባኤው አመራር ያቀርባል፤\n\n4. የአባላትን መረጃ ሚስጥራዊነትና ደኅንነት ይጠብቃል፡፡'
        },
        {
          id: '7_2',
          badge: '፯፥፪',
          title: 'የመረጃ ትንተናና ሪፖርት ዝግጅት ተግባርና ኃላፊነት',
          content:
            '1. ከሌሎች ክፍላት ጋር በመተባበር የአባላት ተሳትፎና እንቅስቃሴ መረጃን ያጠናቅራል፤\n\n2. የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመትና ዓመታዊ ዕቅድና ሪፖርት ያዘጋጃል፡፡'
        }
      ]
    },
    {
      id: '8',
      badge: '፰',
      title: 'የአቅም ማጎልበቻ ስልጠና ንዑስ ክፍል ተግባርና ኃላፊነት',
      content:
        'የንዑስ ክፍሉ አጠቃላይ ተግባራት\n\nይህ ንዑስ ክፍል አባላት በዕውቀት፣ በክህሎትና በአገልግሎት ብቁ እንዲሆኑ ስልጠናዎችን የሚያዘጋጅና የሚያስተባብር ነው፡፡',
      isParent: true,
      subSections: [
        {
          id: '8_1',
          badge: '፰፥፩',
          title: 'የአቅም ማጎልበቻ ስልጠና ንዑስ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
          content:
            '1. የንዑስ ክፍሉን ሥራ በበላይነት ይመራል፤\n\n2. የአባላትን የዕውቀት፣ የመንፈሳዊ ሕይወትና የአገልግሎት ክህሎት ክፍተት ይለያል፤\n\n3. ተከታታይ ስልጠናዎችን፣ ወርክሾፖችንና የውይይት መድረኮችን ያዘጋጃል፣ ያስተባብራል፤\n\n4. የስልጠናዎችን ውጤታማነት ይገመግማል፣ ለቀጣይ ስልጠናዎች ማሻሻያ ያቀርባል፡፡'
        }
      ]
    },
    {
      id: '9',
      badge: '፱',
      title: 'የምክክር አገልግሎት ማስተባበሪያ ንዑስ ክፍል ተግባርና ኃላፊነት',
      content:
        'የንዑስ ክፍሉ አጠቃላይ ተግባራት\n\nይህ ንዑስ ክፍል አባላት በትምህርት፣ በማኅበራዊ፣ በግላዊና በመንፈሳዊ ጉዳዮች የምክክር አገልግሎት እንዲያገኙ የሚያመቻች ነው፡፡',
      isParent: true,
      subSections: [
        {
          id: '9_1',
          badge: '፱፥፩',
          title: 'የምክክር አገልግሎት ማስተባበሪያ ንዑስ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
          content:
            '1. የንዑስ ክፍሉን ሥራ በበላይነት ይመራል፤\n\n2. በትምህርት፣ በማኅበራዊ ሕይወት፣ በግላዊ ጉዳዮችና በመንፈሳዊ ፍላጎት ዙሪያ ለሚጠይቁ አባላት የምክክር አገልግሎት ያመቻቻል፤\n\n3. ብቁ አማካሪዎችንና የምክክር መድረኮችን በማቀናጀት አባላት ችግሮቻቸውን በጥበብ እንዲፈቱ ይረዳል፤\n\n4. የሚሰጡ የምክክር አገልግሎቶች ሚስጥራዊነት የተጠበቀና በአክብሮት የተሞላ እንዲሆን ያረጋግጣል፡፡'
        }
      ]
    },
    {
      id: '10',
      badge: '፲',
      title: 'የንስሐ አገልግሎት ማስተባበሪያ ንዑስ ክፍል ተግባርና ኃላፊነት',
      content:
        'የንዑስ ክፍሉ አጠቃላይ ተግባራት\n\nይህ ንዑስ ክፍል አባላት የንስሐ አባት እንዲያገኙና ወደ ንስሐ ሕይወት እንዲቀርቡ የሚያመቻች ነው፡፡',
      isParent: true,
      subSections: [
        {
          id: '10_1',
          badge: '፲፥፩',
          title: 'የንስሐ አገልግሎት ማስተባበሪያ ንዑስ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
          content:
            '1. የንዑስ ክፍሉን ሥራ በበላይነት ይመራል፤\n\n2. አባላት የንስሐ አባት እንዲያገኙና ወደ ንስሐ ሕይወት እንዲቀርቡ ያመቻቻል፣ ያግዛል፤\n\n3. ከሚመለከታቸው የቤተ ክርስቲያን አባቶችና አገልጋዮች ጋር በመቀናጀት የንስሐ አገልግሎት መርሐ ግብራትን ያደራጃል፤\n\n4. የንስሐ አገልግሎትን ሚስጥራዊነትና መንፈሳዊ ሥርዓት ጠብቆ ያስተባብራል፡፡'
        }
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleSubExpand = (subId) => {
    setSubExpandedId(subExpandedId === subId ? null : subId);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header Title */}
        <Text style={styles.mainTitle}>የአባላት እንክብካቤ፣ ምክክርና አቅም ማጎልበቻ ክፍል</Text>

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
                  name={isExpanded ? 'chevron-up' : 'chevron-down'}
                  size={22}
                  color="#111"
                />
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.contentContainer}>
                  {item.isParent && item.subSections ? (
                    <View>
                      <Text style={styles.paragraph}>{item.content}</Text>
                      {item.subSections.map((sub) => {
                        const isSubExpanded = subExpandedId === sub.id;
                        return (
                          <View key={sub.id} style={styles.subSectionBox}>
                            <TouchableOpacity
                              style={styles.headingRow}
                              activeOpacity={0.7}
                              onPress={() => toggleSubExpand(sub.id)}
                            >
                              <View style={styles.subBadgeBox}>
                                <Text style={styles.subBadgeText}>{sub.badge}</Text>
                              </View>

                              <Text style={styles.subSectionHeading}>{sub.title}</Text>

                              <MaterialCommunityIcons
                                name={isSubExpanded ? 'chevron-up' : 'chevron-down'}
                                size={20}
                                color="#111"
                              />
                            </TouchableOpacity>

                            {isSubExpanded && (
                              <View style={styles.contentContainer}>
                                <Text style={styles.paragraph}>{sub.content}</Text>
                              </View>
                            )}
                          </View>
                        );
                      })}
                    </View>
                  ) : (
                    <Text style={styles.paragraph}>{item.content}</Text>
                  )}
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
    shadowRadius: 2
  },
  subSectionBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8'
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  badgeBox: {
    backgroundColor: '#111111',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold'
  },
  subBadgeBox: {
    backgroundColor: '#333333',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold'
  },
  sectionHeading: {
    fontSize: 14.5,
    fontWeight: 'bold',
    color: '#111111',
    flex: 1
  },
  subSectionHeading: {
    fontSize: 13.5,
    fontWeight: 'bold',
    color: '#222222',
    flex: 1
  },
  contentContainer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12
  },
  paragraph: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 24,
    textAlign: 'justify'
  }
});