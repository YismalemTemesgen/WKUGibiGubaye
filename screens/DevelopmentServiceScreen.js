import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const positionDuties = {
  chair: [
    '፩ የንዑስ ክፍሉን ሥራ በበላይነት ይመራል፤',
    '፪ በስሩ የሚገኙ ዘርፎች /ካሉ/ ሥራቸውን በአግባቡ እየሰሩ መሆናቸውን ይከታተላል፤ አስፈላጊውን እርምትም ያደርጋል፤',
    '፫ ለንዑስ ክፍሉ አባላት በክፍሉ ጉባኤ የተወሰኑ ውሳኔዎችን ያሳውቃል፤ ተፈጻሚነቱንም ድጋፍ እያደረገ ይከታተላል፤',
    '፬ በክፍሉ ጉባኤ ላይ ንዑስ ክፍሉን ወክሎ ይሳተፋል፤',
    '፭ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
    '፮ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመትና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት ለክፍሉ ገቢ ያደርጋል፤',
  ],
  viceChair: [
    '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
    '፪ የንዑስ ክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል፤',
    '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
    '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል ፤',
  ],
  secretary: [
    '፩ የንዑስ ክፍሉ ጉባኤ ላይ የውይይት አጀንዳዎችን ያቀርባል፣ ቃለ ጉባኤ ይይዛል፤',
    '፪ ከጽ/ቤት ጋር በመሆን አጀንዳዎች ይቀርጻል፤ የዉሳኔዎችን ተግባራዊነት ይከታተላል እንዲሁም ድጋፍ ያደረጋል፤',
    '፫ የንዑስ ክፍሉን መረጃዎች አደራጅቶ በመያዝ በአግባቡ እንዲቀመጡ ያደርጋል፤',
    '፬ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
    '፭ ዘርፎች ሐካሉሐ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከጽሐቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፤',
  ],
};

const createPositionSections = (idPrefix, badgePrefix, subSectionTitle) => [
  {
    id: `${idPrefix}_1`,
    badge: `${badgePrefix}፩`,
    title: `${subSectionTitle} ሰብሳቢ ተግባርና ኃላፊነት`,
    content: positionDuties.chair.join('\n\n'),
  },
  {
    id: `${idPrefix}_2`,
    badge: `${badgePrefix}፪`,
    title: `${subSectionTitle} ምክትል ሰብሳቢ ተግባርና ኃላፊነት`,
    content: positionDuties.viceChair.join('\n\n'),
  },
  {
    id: `${idPrefix}_3`,
    badge: `${badgePrefix}፫`,
    title: `${subSectionTitle} ፀሐፊ ተግባርና ኃላፊነት`,
    content: positionDuties.secretary.join('\n\n'),
  },
];

const sections = [
  {
    id: '8',
    badge: '፰',
    title: 'የልማትና ገቢ አሰባሰብ ክፍል ተግባርና ኃላፊነት',
    content:
      'የግቢ ጉባኤው የልማትና ገቢ አሰባሰብ ክፍል ሰብሳቢ፣ ምክትል ሰብሳቢና ፀሐፊ የሚያካትት ሲሆን የሚከተሉት ዋና ዋና ተግባራት ይኖሩታል።',
  },
  {
    id: '8_1',
    badge: '፰፥፩',
    title: 'የክፍሉ አጠቃላይ ተግባራት',
    content: [
      '፩ በዓመቱ ውስጥ ለሚደረጉ የግቢ ጉባኤው ዝግጅቶችና ሌሎች ተግባራትን ለማከናወን የተለያዩ የገቢ ማስገኛ መርሐ ግብራትን ያዘጋጃል፤ የሚገኘውንም ገቢ በሂሳብ መመሪያው መሰረት ይሰበስባል፤ የሰበሰባቸውንም በሙሉ ለግቢ ጉባኤው ስራ አስፈጻሚ ያሳውቃል፤',
      '፪ ማኅበሩ የህትመት ውጤቶች የሆኑትን ሐመር መጽሔት፣ ስምዓ ጽድቅ ጋዜጣና ሌሎች በማኅበሩ ኢዲቶሪያል ቦርድ ያለፉ መጽሐፍትን ለግቢ ጉባኤው አባላትና በተለያየ ምክንያት ወደ ግቢ ጉባኤ መምጣት ላልቻሉ የቤተክርስቲያን ልጆች በቋሚነትና በወቅቱ እንዲደርሱ ያደርጋል፤',
      '፫ ግቢ ጉባኤው ያለበትን አካባቢ ነባራዊ ሁኔታ በማጥናት ቋሚ የልማት ፕሮጀክቶችን ያጠናል እንዲጠናለትም ግብዓት ይሰጣል፤ በማዕከሉ ልማት ተቋማት አስተዳዳር ሲፈቀድም ተግባራዊ ያደርጋል፤',
      '፬ የግቢ ጉባኤው ልማትና ገቢ አሰባሰብ ክፍል አመሰራረት፣ አስተዳደርና የገንዘብ አጠቃቀም በማኅበሩ መመሪያ መሰረት እየተሰራ መሆኑን ይቆጣጠራል፤',
      '፭ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለሥራ አስፈጻሚ ያስገባል፤',
    ].join('\n\n'),
  },
  {
    id: '8_2',
    badge: '፰፥፪',
    title: 'የልማትና ገቢ አሰባሰብ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
    content: [
      '፩ የክፍሉን አገልግሎት በበላይነት ይመራል፤ ጉባኤውንም ይሰበስባል፤',
      '፪ ክፍሉን አስመልክቶ በሥራ አስፈጻሚ ጉባኤ የሚወሰኑ ውሳኔዎችንና የሚሠጡ አቅጣጫዎች ተፈጻሚነታቸውን ይከታተላል፤',
      '፫ ክፍሉን ወክሎ በሥራ አስፈጻሚ ጉባኤ ላይ ይሳተፋል፤',
      '፬ በክፍሉ ጽ/ቤት የሥራ ክፍፍል መሠረት ለሚደርሰውን ንዑስ ክፍል የአገልግሎት ድጋፍ ይሰጣል ፤',
      '፭ ንዑስ ክፍሎች/ዘርፎች ስራቸውን በአግባቡ መወጣታቸውን ይከታተላል፣ ይቆጣጠራል፤',
      '፮ በስሩ የሚገኙ የንዑስ ክፍልና የዘርፍ ኃላፊዎችን ከክፍሉ አባላት ያስመርጣል፣ ለስራ አስፈጻሚ ጉባኤም አቅርቦ ያስጸድቃል፤',
      '፯ በማዕከሉ የግቢ ጉባኤያት ማስተባበሪያ ዋና ክፍል/አቻ የማዕከሉ ዋና ክፍል ስብሰባ ላይ ግቢውን ወክሎ ይገኛል፤',
      '፰ ለክፍሉ አባላት /ለንዑስ ክፍል ኃላፊዎች/ በስራ አስፈጻሚ ጉባኤ የተወሰኑ ውሳኔዎችን እና የተከናወኑ ተግባራትን አጠቃላይ መረጃ ያሳውቃል፣',
      '፱ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለስራ አስፈጻሚ ያስገባል፡፡',
    ].join('\n\n'),
  },
  {
    id: '8_3',
    badge: '፰፥፫',
    title: 'የልማትና ገቢ አሰባሰብ ክፍል ምክትል ሰብሳቢ ተግባርና ኃላፊነት',
    content: [
      '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
      '፪ የክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል፤',
      '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል/ዘርፍ አገልግሎት እየተከታተለ ይደግፋል፤',
      '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል ፤',
    ].join('\n\n'),
  },
  {
    id: '8_4',
    badge: '፰፥፬',
    title: 'የልማትና ገቢ አሰባሰብ ክፍል ፀሐፊ ተግባርና ኃላፊነት',
    content: [
      '፩ የስብሰባዎችን ቃለ ጉባኤ በአግባቡ ይይዛል። ተሰብሳቢዎች በቃለ ጉባ ኤው ላይ ፊርማቸውን እንዲያሰፍሩ ያደርጋል። የስብሰባ ቃለ ጉባዔዎች በአግባቡ ተደራጅተው እንዲቀመጡ ያደርጋል፤',
      '፪ ክፍሉን የሚመለከቱ ሠነዶች እና መረጃዎች በአግባቡ ተደራጅተው እንዲቀመጡ ያደርጋል። በክፍሉ ስር ያሉ ንዑስ ክፍሎችን የመረጃና የሠነድ አያያዝ እና አጠባበቅ ይከታተላል፤',
      '፫ የክፍሉን ወጪ እና ገቢ ደብዳቤዎች በአግባቡ ተመዝግበው ወጪ እና ገቢ እንዲደረጉ ያደርጋል ፤',
      '፬ የክፍሉን የውይይት አጀንዳ ኃላፊውንና ምክትል ኃላፊውን በማማከር ያዘጋጃል፤',
      '፭ ንዑስ ክፍሎች ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከሰብሳቢውና ከምክትል ሰብሳቢው ጋር በመሆን ያዘጋጃል፤',
      '፮ በክፍሉ ጽ/ቤት መካከል በሚደረገው ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል አገልግሎት ይከታተላል አስፈላጊውንም እገዛ ያደርጋል፤',
      '፯ ሌሎች ከጸሐፊ የአገልግሎት መደብ ጋር ተያያዥ የሆኑ ሥራዎችን ያከናውናል።',
      '፰ ከግቢ ጉባኤው ጽሐቤት የተሰጠውን የክፍሉን ዕቅድ አባዝቶ ለንዑስ ክፍሎች ኃላፊዎች ይሰጣል፤',
    ].join('\n\n'),
  },
  {
    id: '8_5',
    badge: '፰፥፭',
    title: 'የፕሮጀክት ቀረፃና ትግበራ ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ ለግቢ ጉባኤ አገልግሎት ማስፈጸሚያ የሚያስፈልገውን ዓመታዊ በጀት ለመሸፈን ልዩ ልዩ የገቢ ማስገኛ መንገዶችን ተጠቅሞ ይሠራል፤',
      '፪ የተባባሪ አካላት እና ከአካባቢው ማኅበረሰብ ጋር በመሆን የገቢ ሥራዎችን ለመሥራት የሚያስችሉ የገቢ ፕሮጀክቶችን ይቀርጻል፤ በማእከሉ ግቢ ጉባኤያት ማስተባበሪያ ዋና ክፍል ፍቃድ ሲያገኝ ተግባራዊ ያደርጋል፤',
      '፫ ቀላልና ጊዜ ቆጣቢ አዋጭ የገቢ ማስገኛዎችን ይቀይሳል፤',
      '፬ በሚቀረጹ ፕሮጀክቶች ላይ አስፈላጊውን ሙያዊ ድጋፍ የሚያደርጉ የግቢ ጉባኤውን አባላት ተሳታፊ ያደርጋል፤',
      '፭ በሚቀረጹ ፕሮጀክቶች ላይ አስፈላጊውን ሙያዊ ድጋፍ የሚያደርጉ የግቢ ጉባኤውን አባላት ተሳታፊ ያደርጋል፤',
      '፮ ቋሚ የልማት ተቋማቱን የስራ ሂደት ይቆጣጠራል፤',
      '፯ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለክፍሉ ያስገባል፡፡',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '8_5',
      '፰፥፭፥',
      'የፕሮጀክት ቀረፃና ትግበራ ንዑስ ክፍል',
    ),
  },
  {
    id: '8_6',
    badge: '፰፥፮',
    title: 'የገቢ አሰባሰብ ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ በግቢ ጉበባኤው የፕሮጀክት ቀረጻና ትግበራ ንዑስ ክፍል ተዘጋጅተው ተግባራዊ የሚደረጉ ሥራዎችን ብሎም አጠቃላይ የገቢ እንቅስቃሴዎችን ይቆጣጠራል፤ ወጭና ገቢ ሰነዶችን በአግባቡ መዝግቦ ይይዛል አቅጣጫም ይሰጣል፤',
      '፪ ለግቢ ጉባኤው ገቢ ሊያስገኙ የሚችሉ ሥራዎችን ከፕሮጀክት ንዑስ ክፍል ጋር በመሆን ተግባራዊ ያደርጋል፤',
      '፫ በሌሎች የግቢ ጉባኤው ክፍላት የሚሠሩ ገቢ ማስገኛ ዘዴዎች (በስነ ጥበባት ንዑስ ክፍል፣ በሞያ አገልግሎት፣ ወዘተ) አስፈላጊውን ድጋፍ በማድረግ ተግባራዊ እንዲሆኑ የማድረግና ገቢን የመሰብሰብ ስራ ይሰራል፤',
      '፬ በገቢ ማሰባሰብ ሂደት የሚሰበሰቡ ገንዘቦች በአግባቡ ወደ ግቢ ጉባኤው አካውንት ገቢ እንዲደረጉ ከሒሳብ ንዑስ ክፍል ጋር ይሠራል፤',
      '፭ የሂሳብ ሪፖርቶችን አዘጋጅቶ ለልማትና ገቢ አሰባሰብ ክፍል ያቀርባል፣',
      '፮ ከክፍሉ ጽ/ቤት ጋር በመነጋገር ገንዘብ ከግቢ ጉባኤው አጠቃላይ ሂሳብ ጋር ተመዝግቦ እንዲቀመጥ ያደርጋል፣',
      '፯ በግቢ ጉባኤው ያሉትን የገቢ ማስገኛ ስራዎችን በሃላፊነት ያስተባብራል፣ ገቢውንም ይሰበስባል፤',
      '፰ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለክፍሉ ያስገባል፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '8_6',
      '፰፥፮፥',
      'የገቢ አሰባሰብ ንዑስ ክፍል',
    ),
  },
];

export default function DevelopmentServiceScreen() {
  const [expandedId, setExpandedId] = useState('8');
  const [subExpandedId, setSubExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleSubExpand = (subId) => {
    setSubExpandedId(subExpandedId === subId ? null : subId);
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.mainTitle}>የልማትና ገቢ አሰባሰብ ክፍል</Text>

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
    marginBottom: 20,
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
  subSectionBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  headingRow: { flexDirection: 'row', alignItems: 'center' },
  badgeBox: {
    backgroundColor: '#111111',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: { color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' },
  subBadgeBox: {
    backgroundColor: '#333333',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subBadgeText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
  sectionHeading: {
    fontSize: 14.5,
    fontWeight: 'bold',
    color: '#111111',
    flex: 1,
  },
  subSectionHeading: {
    fontSize: 13.5,
    fontWeight: 'bold',
    color: '#222222',
    flex: 1,
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
    textAlign: 'justify',
  },
});
