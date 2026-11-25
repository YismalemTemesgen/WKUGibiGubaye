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
    '፮ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት ለክፍሉ ገቢ ያደርጋል፡፡',
  ],
  viceChair: [
    '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
    '፪ የንዑስ ክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል ፤',
    '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
    '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል ፤',
  ],
  secretary: [
    '፩ የንዑስ ክፍሉ ጉባኤ ላይ የውይይት አጀንዳዎችን ያቀርባል፣ ቃለ ጉባኤ ይይዛል፤',
    '፪ ከጽ/ቤት ጋር በመሆን አጀንዳዎች ይቀርጻል፤ የዉሳኔዎችን ተግባራዊነት ይከታተላል እንዲሁም ድጋፍ ያደረጋል፤',
    '፫ የንዑስ ክፍሉን መረጃዎች አደራጅቶ በመያዝ በአግባቡ እንዲቀመጡ ያደርጋል፤',
    '፬ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
  ],
};

const createPositionSections = (idPrefix, badgePrefix, subsectionTitle, secretaryReport) => [
  {
    id: `${idPrefix}_1`,
    badge: `${badgePrefix}፩`,
    title: `${subsectionTitle} ሰብሳቢ ተግባርና ኃላፊነት`,
    content: positionDuties.chair.join('\n\n'),
  },
  {
    id: `${idPrefix}_2`,
    badge: `${badgePrefix}፪`,
    title: `${subsectionTitle} ምክትል ሰብሳቢ ተግባርና ኃላፊነት`,
    content: positionDuties.viceChair.join('\n\n'),
  },
  {
    id: `${idPrefix}_3`,
    badge: `${badgePrefix}፫`,
    title: `${subsectionTitle} ፀሐፊ ተግባርና ኃላፊነት`,
    content: [...positionDuties.secretary, secretaryReport].join('\n\n'),
  },
];

const sections = [
  {
    id: '13',
    badge: '፲፫',
    title: 'የኦዲት አገልግሎት ክፍል ተግባርና ኃላፊነት',
    content: 'የግቢ ጉባኤው የኦዲት አገልግሎት ክፍል ሰብሳቢ፣ ምክትል ሰብሳቢና ፅሃፊ የሚያካትት ሲሆን ተጠሪነቱ ለጠቅላላ ጉባኤ ሆኖ የሚከተሉት ዋና ዋና ተግባራት ይኖሩታል።',
  },
  {
    id: '13_1',
    badge: '፲፫፥፩',
    title: 'የክፍሉ አጠቃላይ ተግባራት',
    content: [
      '፩ የተጠየቁ ወጭዎች መወራረዳቸውን ያረጋግጣል፤ የመንፈቅ ዓመትና ዓመታዊ የኦዲት ሪፖርትም ለጠቅላላ ጉባኤ ያቀርባል ሲጸድቅለትም ለማእከሉ ይልካል፤',
      '፪ በስራ አስፈጻሚ ጉባኤ ስብሰባ ላይ የሚቀርብ የግቢ ጉባኤውን የአገልግሎት ክፍሎችን እንቅስቃሴ በየወሩ ከዕቅዳቸው ጋር በማነጻጸር ይገመግማል፣ እንዲሁም አገልግሎቱ ሲፈጸም ብዙዋኑን አባላት ያሳተፈ መሆኑን/አለመሆኑን በመገምገም ለስራ አስፈጻሚ ያቀርባል፤',
      '፫ የግቢ ጉባኤው ዕቅድ ከማኅበሩ ሥልታዊ እቅድ አንጻር መሆኑን ይቃኛል፤ አቅጣጫዎችንም ይሰጣል፤',
      '፬ የስራ አስፈጻሚ ጉባኤ ስብሰባ በሁሉም በኩል ውጤታማ እንዲሆን አስፈላጊውን አቅጣጫና ድጋፍ ያደርጋል፤',
      '፭ የግቢ ጉባኤው አጠቃላይና ገቢና ወጭዎች ተመዝግበው ሰነዶች በአግባቡ መያዛቸውን ይከታተላል፤',
      '፮ የግቢ ጉባኤውን አጠቃላይ የወጭና ገቢ ሒሳብ እንቅስቃሴ ይቆጣጠራል፤ በአጠቃላይ ከማኅበሩ የግቢ ጉባኤያት የገንዘብና ንብረት አጠቃቀም መመሪያ እንጻር ማስተካከያዎችንም እንዲያደርጉ ያደርጋል፤',
      '፯ በትምህርት ዓመቱ መጀመሪያ ወቅት የግቢ ጉባኤው ንብረቶች አስፈላጊው መረጃ ተይዞና ተፈርሞ ለተመደበላቸው ክፍሎች መሰጠቱን ያረጋግጣል እንዲሁም በትምህርት ዓመቱ መጨረሻ የግቢ ጉባኤው ንብረቶች ተሰብስበው ለማዕከል ማስረከባቸውን ያረጋግጣል፤',
      '፰ የግቢ ጉባኤው አገልግሎቶች በማኅበሩ መመሪያና ደንብ እና/ወይም በግቢ ጉባኤያት የአገልግሎት መዋቅር መመሪያ መሰረት እየተከናወኑ መሆናቸውን ይቆጣጠራል፣ ስህተቶች ወይም ልዩነቶች ሲኖሩ የእርምት አስተያየት በወቅቱ ይሰጣል፣ የእርምት እርምጃ የማይወሰድ ከሆነ ለማዕከሉ ያሳውቃል፤',
    ].join('\n\n'),
  },
  {
    id: '13_2',
    badge: '፲፫፥፪',
    title: 'የኦዲት አገልግሎት ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
    content: [
      '፩ የክፍሉን አገልግሎት በበላይነት ይመራል፤ ጉባኤውንም ይሰበስባል፤',
      '፪ ክፍሉን አስመልክቶ በሥራ አስፈጻሚ ጉባኤ የሚወሰኑ ውሳኔዎችንና የሚሠጡ አቅጣጫዎች ተፈጻሚነታቸውን ይከታተላል፤',
      '፫ ክፍሉን ወክሎ በሥራ አስፈጻሚ ጉባኤ ላይ ይሳተፋል፤',
      '፬ በክፍሉ ጽ/ቤት የሥራ ክፍፍል መሠረት ለሚደርሰውን ንዑስ ክፍል የአገልግሎት ድጋፍ ይሰጣል፤',
      '፭ ንዑስ ክፍሎች/ዘርፎች ስራቸውን በአግባቡ መወጣታቸውን ይከታተላል፣ ይቆጣጠራል፤',
      '፮ በስሩ የሚገኙ የንዑስ ክፍልና የዘርፍ ኃላፊዎችን ከክፍሉ አባላት ያስመርጣል፣ ለስራ አስፈጻሚ ጉባኤም አቅርቦ ያስጸድቃል፤',
      '፯ በማዕከሉ የግቢ ጉባኤያት ማስተባበሪያ ዋና ክፍል/አቻ የማዕከሉ ዋና ክፍል ስብሰባ ላይ ግቢውን ወክሎ ይገኛል፤',
      '፰ ለክፍሉ አባላት /ለንዑስ ክፍል ኃላፊዎች/ በስራ አስፈጻሚ ጉባኤ የተወሰኑ ውሳኔዎችን እና የተከናወኑ ተግባራትን አጠቃላይ መረጃ ያሳውቃል፣',
      '፱ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለስራ አስፈጻሚ ያስገባል፡፡',
    ].join('\n\n'),
  },
  {
    id: '13_3',
    badge: '፲፫፥፫',
    title: 'የኦዲት አገልግሎት ክፍል ምክትል ሰብሳቢ ተግባርና ኃላፊነት',
    content: [
      '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
      '፪ የክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል ፤',
      '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል/ዘርፍ አገልግሎት እየተከታተለ ይደግፋል፤',
      '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል ፤',
    ].join('\n\n'),
  },
  {
    id: '13_4',
    badge: '፲፫፥፬',
    title: 'የኦዲት አገልግሎት ክፍል ፀሐፊ ተግባርና ኃላፊነት',
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
    id: '13_5',
    badge: '፲፫፥፭',
    title: 'የክዋኔ ኦዲት ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ የአገልግሎት ክፍሎች በዕቅዳቸው መሰረት ስራቸውን እያከናወኑ መሆናቸውን ይከታተላል፣ ተገቢውንም የእርምት አስተያየት በወቅቱ ይሰጣል፣ የዕርምት እርምጃ የማይወስዱ ከሆነ ለማዕከሉ የኦዲትና ኢንስፔክሽን አገልግሎት ዋና ክፍል እና ለግቢ ጉባኤው ጠቅላላ ጉባኤ ያሳውቃል፤',
      '፪ የግቢ ጉባኤው አገልግሎቶች በማኅበሩ መመሪያና ደንብ እና/ወይም በግቢ ጉባኤያት የአገልግሎት መዋቅር መመሪያ መሰረት እየተከናወኑ መሆናቸውን ይቆጣጠራል፣ ስህተቶች ወይም ልዩነቶች ሲኖሩ የእርምት አስተያየት በወቅቱ ይሰጣል፣ የእርምት እርምጃ የማይወሰድ ከሆነ ለክፍሉ ያሳውቃል፤',
      '፫ የስራ አስፈጻሚና የአገልግሎት ክፍሎች መደበኛ ስብሰባዎች መደረጋቸውንና አባላት መገኘታቸውን ይከታተላል፣ ተወካዮችን በመመደብ በስብሰባዎቹ የሚወሰኑ ውሳኔዎችን ተግባራዊነት ይከታተላል፤',
      '፬ ወጭዎች በዕቅድ ወይም በቃለ ጉባኤ ውሳኔ መሰረት መሆናቸውን ይከታተላል፣ ስህተቶች ሲታዩ አስፈላጊ ማስተካከያዎች እንዲደረጉ ያሳስባል፤',
      '፭ በስራ አስፈጻሚ ጉባኤ ስብሰባ ላይ የሚቀርብ የግቢ ጉባኤውን የአገልግሎት ክፍሎችን እንቅስቃሴ በየወሩ ከዕቅዳቸው ጋር በማነጻጸር ይገመግማል፣ እንዲሁም አገልግሎቱ ሲፈጸም ብዙዋኑን አባላት ያሳተፈ መሆኑን/አለመሆኑን በመገምገም ለዋና ክፍሉ ያስገባል፤',
      '፮ የግቢ ጉባኤውን እለታዊ ሥራዎች በታቀደው መሠረት መከናወናቸውን እየተከታተለ ድጋፍም ሆነ አቅጣጫ ይሰጣል፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '13_5',
      '፲፫፥፭፥',
      'የክዋኔ ኦዲት ንዑስ ክፍል',
      '፭ ዘርፎች /ካሉ/ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከጽሐቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፡፡',
    ),
  },
  {
    id: '13_6',
    badge: '፲፫፥፮',
    title: 'የፍይናንስ ኦዲት ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ የግቢ ጉባኤውን አጠቃላይ የወጭና ገቢ ሒሳብ እንቅስቃሴ ይቆጣጠራል፤ በአጠቃላይ ከማኅበሩ የግቢ ጉባኤያት የገንዘብና ንብረት አጠቃቀም መመሪያ እንጻር ማስተካከያዎችንም እንዲያደርጉ ያደርጋል፤',
      '፪ የተጠየቁ ወጭዎች መወራረዳቸውን ያረጋግጣል፤ ለጠቅላላ ጉባኤ የሚቀርብ የመንፈቅ ዓመትና ዓመታዊ የኦዲት ሪፖርትም ለክፍሉ ያቀርባል፤',
      '፫ የግቢ ጉባኤውን ንብረቶች በየሲሶ ዓመት ይቆጣጠራል ደህንነታቸውንም ያረጋግጣል፤',
      '፬ በትምህርት ዓመቱ መጀመሪያ ወቅት የግቢ ጉባኤው ንብረቶች አስፈላጊው መረጃ ተይዞና ተፈርሞ ለተመደበላቸው ክፍሎች መሰጠቱን ያረጋግጣል እንዲሁም በትምህርት ዓመቱ መጨረሻ የግቢ ጉባኤው ንብረቶች ተሰብስበው ለማዕከል ማስረከባቸውን ያረጋግጣል፤',
      '፭ የግቢ ጉባኤው የገንዘብም ሆነ የንብረት እንቅስቃሴወጭና ገቢ ዘመናዊ በሆነ መንገድ እንዲከናወን አስፈላጊውን እገዛ ማድረግ፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '13_6',
      '፲፫፥፮፥',
      'የፍይናንስ ኦዲት ንዑስ ክፍል',
      '፭ ዘርፎች /ካሉ/ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከጽሐቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፡፡',
    ),
  },
];

export default function AuditServiceScreen() {
  const [expandedId, setExpandedId] = useState('13');
  const [subExpandedId, setSubExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleSubExpand = (id) => {
    setSubExpandedId(subExpandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.mainTitle}>የኦዲት አገልግሎት ክፍል</Text>

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
