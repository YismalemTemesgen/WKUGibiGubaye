import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const subsectionChairDuties = [
  '፩ የንዑስ ክፍሉን ሥራ በበላይነት ይመራል፤',
  '፪ በስሩ የሚገኙ ዘርፎች /ካሉ/ ሥራቸውን በአግባቡ እየሰሩ መሆናቸውን ይከታተላል፤ አስፈላጊውን እርምትም ያደርጋል፤',
  '፫ ለንዑስ ክፍሉ አባላት በክፍሉ ጉባኤ የተወሰኑ ውሳኔዎችን ያሳውቃል፤ ተፈጻሚነቱንም ድጋፍ እያደረገ ይከታተላል፤',
  '፬ በክፍሉ ጉባኤ ላይ ንዑስ ክፍሉን ወክሎ ይሳተፋል፤',
  '፭ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
  '፮ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት ለክፍሉ ገቢ ያደርጋል፡፡',
];

const subsectionViceChairDuties = [
  '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
  '፪ የንዑስ ክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል ፤',
  '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
  '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል ፤',
];

const subsectionSecretaryDuties = (annualReport) => [
  '፩ የንዑስ ክፍሉ ጉባኤ ላይ የውይይት አጀንዳዎችን ያቀርባል፣ ቃለ ጉባኤ ይይዛል፤',
  '፪ ከጽ/ቤት ጋር በመሆን አጀንዳዎች ይቀርጻል፤ የዉሳኔዎችን ተግባራዊነት ይከታተላል እንዲሁም ድጋፍ ያደረጋል፤',
  '፫ የንዑስ ክፍሉን መረጃዎች አደራጅቶ በመያዝ በአግባቡ እንዲቀመጡ ያደርጋል፤',
  '፬ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
  annualReport,
];

const createSubsectionRoles = (
  idPrefix,
  badgePrefix,
  subsectionTitle,
  secretaryTitle,
  secretaryAnnualReport,
) => [
  {
    id: `${idPrefix}_1`,
    badge: `${badgePrefix}፩`,
    title: `${subsectionTitle} ሰብሳቢ ተግባርና ኃላፊነት`,
    content: subsectionChairDuties.join('\n\n'),
  },
  {
    id: `${idPrefix}_2`,
    badge: `${badgePrefix}፪`,
    title: `${subsectionTitle} ምክትል ሰብሳቢ ተግባርና ኃላፊነት`,
    content: subsectionViceChairDuties.join('\n\n'),
  },
  {
    id: `${idPrefix}_3`,
    badge: `${badgePrefix}፫`,
    title: `${subsectionTitle} ${secretaryTitle} ተግባርና ኃላፊነት`,
    content: subsectionSecretaryDuties(secretaryAnnualReport).join('\n\n'),
  },
];

const sections = [
  {
    id: '9',
    badge: '፱',
    title: 'ሒሳብና ንብረት ክፍል ተግባርና ኃላፊነት',
    content:
      'የግቢ ጉባኤው የሒሳብና ንብረት ክፍል ሰብሳቢ፣ ምክትል ሰብሳቢና ፅሃፊ የሚያካትት ሲሆን የሚከተሉት ዋና ዋና ተግባራት ይኖሩታል።',
  },
  {
    id: '9_1',
    badge: '፱፥፩',
    title: 'የክፍሉ አጠቃላይ ተግባራት',
    content: [
      '፩ አጠቃላይ የግቢ ጉባኤዉን ገቢና ወጭ ሰነዶች በአግባቡ መዝግቦ ይይዛል፤',
      '፪ ወጭዎች በተያዘላቸዉ የበጀት እቅድ መሠረት መከናወናቸዉን ይከታተላል፤',
      '፫ በግቢ ጉባኤዉ ሰብሳቢዉ/ምክትል ሰብሳቢ/ፊርማ የሚታዘዙ ወጭዎችን ይከፍላል፤ ተገቢዉንም ደረሰኝ ከወጣዉ ብር ጋር በማገናዘብ በመረጃነት ይይዛል፤',
      '፬ የግቢ ጉባኤዉን ንብረት ቋሚ ገቢ ማስገኛ ንግዶችን ጨምሮ በአራት ወር አንዴ ይቆጣጠራል፤ይመዘግባል፤በተገቢዉ ስራ ላይ መዋላቸዉን ያረጋግጣል፤',
      '፭ ወቅታዊና አመታዊ የሂሳብ ሪፖርቶችን ያዘጋጃል፤',
      '፮ የግቢ ጉባኤዉን አጠቃላይ ገንዘብ በሂሳብ መመሪያዉ መሰረት የሂሳብ መዝገብ /Bank Account/ በመክፈት በግቢ ጉባኤዉ ስም ባንክ እንዲገባ ያደርጋል፣ ይቆጣጠራል፣ በሂሳብ መመሪያዉ መሰረት ይከታተላል ለሥራ አስፈጻሚ ጉባኤ ሪፖርት ያቀርባል፣ አስፈላጊ ሁኖ ሲገኝ ወጪ ያደርጋል፤',
      '፯ በዓመቱ መጨረሻ ላይ የግቢ ጉባኤዉን ንብረት በአደራነት ለማእከሉ በህጋዊ ሰነድ አስረክቦ ይሄዳል፤ሲመለሱ ይረከባል፤እንዲሁም ሌሎች ሂሳብ ነክ ተግባራትን ያከናዉናል፤',
      '፰ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለሥራ አስፈጻሚ ያስገባል፤',
    ].join('\n\n'),
  },
  {
    id: '9_2',
    badge: '፱፥፪',
    title: 'ሒሳብና ንብረት ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
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
    id: '9_3',
    badge: '፱፥፫',
    title: 'ሒሳብና ንብረት ክፍል ምክትል ሰብሳቢ ተግባርና ኃላፊነት',
    content: [
      '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
      '፪ የክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል ፤',
      '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል/ዘርፍ አገልግሎት እየተከታተለ ይደግፋል፤',
      '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል ፤',
    ].join('\n\n'),
  },
  {
    id: '9_4',
    badge: '፱፥፬',
    title: 'ሒሳብና ንብረት ክፍል ፀሐፊ ተግባርና ኃላፊነት',
    content: [
      '፩ የስብሰባዎችን ቃለ ጉባኤ በአግባቡ ይይዛል። ተሰብሳቢዎች በቃለ ጉባ ኤው ላይ ፊርማቸውን እንዲያሰፍሩ ያደርጋል። የስብሰባ ቃለ ጉባዔዎች በአግባቡ ተደራጅተው እንዲቀመጡ ያደርጋል፤',
      '፪ ክፍሉን የሚመለከቱ ሠነዶች እና መረጃዎች በአግባቡ ተደራጅተው እንዲቀመጡ ያደርጋል። በክፍሉ ስር ያሉ ንዑስ ክፍሎችን የመረጃና የሠነድ አያያዝ እና አጠባበቅ ይከታተላል፤',
      '፫ የክፍሉን ወጪ እና ገቢ ደብዳቤዎች በአግባቡ ተመዝግበው ወጪ እና ገቢ እንዲደረጉ ያደርጋል ፤',
      '፬ የክፍሉን የውይይት አጀንዳ ኃላፊውንና ምክትል ኃላፊውን በማማከር ያዘጋጃል፤',
      '፭ ንዑስ ክፍሎች ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከሰብሳቢውና ከምክትል ሰብሳቢው ጋር በመሆን ያዘጋጃል፤',
      '፮ በክፍሉ ጽ/ቤት መካከል በሚደረገው ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል አገልግሎት ይከታተላል አስፈላጊውንም እገዛ ያደርጋል፤',
      '፯ ሌሎች ከጸሐፊ የአገልግሎት መደብ ጋር ተያያዥ የሆኑ ሥራዎችን ያከናውናል።',
      '፰ ከግቢ ጉባኤው ጽሐቤት የተሰጠውን የክፍሉን ዕቅድ አባዝቶ ለንዑስ ክፍሎች ኃላፊዎች ይሰጣል፡፡',
    ].join('\n\n'),
  },
  {
    id: '9_5',
    badge: '፱፥፭',
    title: 'የሒሳብ ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ አጠቃላይ የግቢ ጉባኤዉን ገቢና ወጭ ሰነዶች በአግባቡ መዝግቦ ይይዛል፣ አስፈላጊውን ግንዛቤ ማስጨበጫ ሥልጠናም ከማእከሉ ጋር በመሆን ያሰለጥናል፤',
      '፪ ወጪዎችን በተያዘላቸዉ ዕቅድ/በጀት/ መሰረት መከናወናቸዉን ይከታተላል፤',
      '፫ በሰብሰቢዉ ፊርማ የሚታዘዙ ወጪዎችን ይከፍላል፤ ተገቢዉንም ደረሰኝ ከወጣዉ ገንዘብ ጋር በማገናዘብ ለመረጃነት ይይዛል ፤',
      '፬ ወቅታዊ፣ የወር፣ የሲሶ ዓመትና ዓመታዊ የሒሳብ ረፖርቶችን ያዘጋጃል፣ ለግቢ ጉባኤው ስራ አስፈጻሚም ያቀርባል፤',
      '፭ የግቢ ጉባኤዉን አጠቃላይ ገንዘብ በሂሳብ መመሪያዉ መሰረት የሂሳብ መዝገብ /Bank Account/ በመክፈት በግቢ ጉባኤዉ ስም ባንክ እንዲገባ ያደርጋል፤ ይቆጣጠራል፤ ይከታተላል ለሥራ አስፈጻሚ ጉባኤ ሪፖርት ያቀርባል፤ አስፈላጊ ሆኖ ሲገኝም ወጪ ማድረግ ይችላል፡፡',
      '፮ ከግቢ ጉባኤዉ አባላት የሚዋጡ ልዩ ልዩ አስተዋጽዎችን /ወርኃዊ ዓመታዊ መዋጮ /ካለ ይሰበስባል ወጭም ያደርጋል፤',
      '፯ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለክፍሉ ያስገባል፡፡',
    ].join('\n\n'),
    isParent: true,
    subSections: createSubsectionRoles(
      '9_5',
      '፱፥፭፥',
      'የሒሳብ ንዑስ ክፍል',
      'ጸሐፊ',
      '፭ ዘርፎች /ካሉ/ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከጽ/ቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፡፡',
    ),
  },
  {
    id: '9_6',
    badge: '፱፥፮',
    title: 'የንብረት ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ የግቢ ጉባኤዉን ንብረቶች/ቋሚ የገቢ ማስገኛ ተቋማትን ጨምሮ/ይመዘግባል፤ ለተገቢዉ ስራ መዋላቸዉን ይቆጣጠራል፤',
      '፪ አዳዲስ ተገዝተዉ የሚገቡ ንብረቶችን ይመዘግባሉ፤ ለተገቢዉ አገልግሎት እንዲዉሉም ያደርጋል፤',
      '፫ በልዩ ልዩ ምክንያት ጉዳት የደረሰባቸዉ ንብረቶች ሲኖሩ እሰፈላጊዉን ጥገና እንዲደረግላቸዉ ያደርጋል፤',
      '፬ የግቢ ጉባኤውን ንብረቶች ዝርዝር አጠናቅሮ ይይዛል፤',
      '፭ ንብረቶች የንብረትነት ኮድ ተሰጥቷቸው አገልግሎት ላይ እንዲውሉ ያደርጋል፤',
      '፮ የግቢ ጉባኤውን አላቂና ቋሚ ንብረቶች በየ3ወሩ ቆጠራ ያከናውናል፤ ሪፖርትም ለዋና ክፍሉ ጽ/ቤት ያቀርባል፤',
      '፯ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለክፍሉ ያስገባል፡፡',
    ].join('\n\n'),
    isParent: true,
    subSections: createSubsectionRoles(
      '9_6',
      '፱፥፮፥',
      'የንብረት ንዑስ ክፍል',
      'ፀሐፊ',
      '፭ ዘርፎች /ካሉ/ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከጽሐቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፡፡',
    ),
  },
];

export default function PropertyServiceScreen() {
  const [expandedId, setExpandedId] = useState('9');
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
        <Text style={styles.mainTitle}>ሒሳብና ንብረት ክፍል</Text>

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
