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
    '፮ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት ለክፍሉ ገቢ ያደርጋል፤',
  ],
  viceChair: [
    '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
    '፪ የንዑስ ክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል ፤',
    '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
    '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል፤',
  ],
  secretary: [
    '፩ የንዑስ ክፍሉ ጉባኤ ላይ የውይይት አጀንዳዎችን ያቀርባል፣ ቃለ ጉባኤ ይይዛል፤',
    '፪ ከጽ/ቤት ጋር በመሆን አጀንዳዎች ይቀርጻል፤ የዉሳኔዎችን ተግባራዊነት ይከታተላል እንዲሁም ድጋፍ ያደረጋል፤',
    '፫ የንዑስ ክፍሉን መረጃዎች አደራጅቶ በመያዝ በአግባቡ እንዲቀመጡ ያደርጋል፤',
    '፬ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ዘርፍ /ካለ/ አገልግሎት እየተከታተለ ይደግፋል፤',
  ],
};

const createPositionSections = (
  idPrefix,
  badgePrefix,
  subsectionTitle,
  secretaryReport,
  secretaryTitle = 'ፀሐፊ',
) => [
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
    title: `${subsectionTitle} ${secretaryTitle} ተግባርና ኃላፊነት`,
    content: [...positionDuties.secretary, secretaryReport].join('\n\n'),
  },
];

const sections = [
  {
    id: '11',
    badge: '፲፩',
    title: 'የሞያና በጎ አድራጎት ማስተባበሪያ ክፍል ተግባርና ኃላፊነት',
    content: 'የግቢ ጉባኤው የሞያና በጎ አድራጎት አገልግሎት ክፍል ሰብሳቢ፣ ምክትል ሰብሳቢና ፀሃፊ የሚያካትት ሲሆን የሚከተሉት ዋና ዋና ተግባራት ይኖሩታል።',
  },
  {
    id: '11_1',
    badge: '፲፩፥፩',
    title: 'የክፍሉ አጠቃላይ ተግባራት',
    content: [
      '፩ አመቺ በሆነ ቦታ ቋሚና ተንቀሳቃሽ ቤተ መጻሕፍት እንዲኖር ሁኔታዎችን ያመቻቻል፤',
      '፪ የግቢ ጉባኤው አባላት ባላቸው/በሚማሩበት ሞያና ጉልበት አገልግሎት ለሚያገኙበት ሰንበት ት/ቤትና ሰበካ ጉባኤ እንዲሁም በአቅራቢያቸው ለሚገኙ ገዳማትና ለአካባቢው ማህበረሰብ ነጻ አገልግሎት እንዲሰጡ ያደርጋል፤',
      '፫ በግቢው ውስጥ ለሚገኙ አካል ጉዳተኞች ውጤታቸው የተሻለ እንዲሆን ከማድረግ አንጻር ተማሪዎችን በመመደብ አስፈላጊውን እገዛ ያደርጋል፤',
      '፬ አባላት በቀለም ትምህርታቸው የሚጠናከሩበትን መንገድ ያመቻቻል ትምህርትም እንዲያገኙ ያደርጋል። ሁሉም በሚማሩበት ሙያና ጉልበት ቤተ ክርስቲያንንና ማኅበሩን እንዲያገለግሉ ሁኔታዎችን ያመቻቻል፤',
    ].join('\n\n'),
  },
  {
    id: '11_2',
    badge: '፲፩፥፪',
    title: 'የሞያና በጎ አድራጎት ማስተባበሪያ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
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
    id: '11_3',
    badge: '፲፩፥፫',
    title: 'የሞያና በጎ አድራጎት ማስተባበሪያ ክፍል ም/ሰብሳቢ ተግባርና ኃላፊነት',
    content: [
      '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
      '፪ የክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል፤',
      '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል/ዘርፍ አገልግሎት እየተከታተለ ይደግፋል፤',
      '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል፤',
    ].join('\n\n'),
  },
  {
    id: '11_4',
    badge: '፲፩፥፬',
    title: 'የሞያና በጎ አድራጎት ማስተባበሪያ ክፍል ፀሐፊ ተግባርና ኃላፊነት',
    content: [
      '፩ የስብሰባዎችን ቃለ ጉባኤ በአግባቡ ይይዛል። ተሰብሳቢዎች በቃለ ጉባ ኤው ላይ ፊርማቸውን እንዲያሰፍሩ ያደርጋል። የስብሰባ ቃለ ጉባዔዎች በአግባቡ ተደራጅተው እንዲቀመጡ ያደርጋል፤',
      '፪ ክፍሉን የሚመለከቱ ሠነዶች እና መረጃዎች በአግባቡ ተደራጅተው እንዲቀመጡ ያደርጋል። በክፍሉ ስር ያሉ ንዑስ ክፍሎችን የመረጃና የሠነድ አያያዝ እና አጠባበቅ ይከታተላል፤',
      '፫ የክፍሉን ወጪ እና ገቢ ደብዳቤዎች በአግባቡ ተመዝግበው ወጪ እና ገቢ እንዲደረጉ ያደርጋል ፤',
      '፬ የክፍሉን የውይይት አጀንዳ ኃላፊውንና ምክትል ኃላፊውን በማማከር ያዘጋጃል፤',
      '፭ ንዑስ ክፍሎች ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከሰብሳቢውና ከምክትል ሰብሳቢው ጋር በመሆን ያዘጋጃል፤',
      '፮ በክፍሉ ጽ/ቤት መካከል በሚደረገው ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል አገልግሎት ይከታተላል አስፈላጊውንም እገዛ ያደርጋል፤',
      '፯ ሌሎች ከጸሐፊ የአገልግሎት መደብ ጋር ተያያዥ የሆኑ ሥራዎችን ያከናውናል።',
      '፰ ከግቢ ጉባኤው ጽ/ቤት የተሰጠውን የክፍሉን ዕቅድ አባዝቶ ለንዑስ ክፍሎች ኃላፊዎች ይሰጣል፤',
    ].join('\n\n'),
  },
  {
    id: '11_5',
    badge: '፲፩፥፭',
    title: 'የሞያ አገልግሎት ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ ለአዲስ ገቢ ተማሪዎች በሲኒየር ተማሪዎች ገለጻ /orientation/ በማዘጋጀት የፈተና ወረቀቶችንና ሃንዳውቶችን ከቀደሙ ተማሪዎች በማሰባሰብ እንዲደርሳቸው በማድረግ ስለ አጠናንና የጊዜ አጠቃቀም ስልጠና በመስጠት ወይም ምክር እንዲያገኙ በማድረግ ወዘተ አባላት በቀለም ትምህርታቸው እንዲጠነክሩ ሁኔታዎችን ያመቻቻል፤',
      '፪ አባላት በሚማሩበት የሞያ ዘርፍ ከልማት ክፍል ጋር በመተባበር ለግቢ ጉባኤው ገቢ ሊያስገኙ የሚችሉ ቴክኖሎጅና የዕደ ጥበብ ውጤቶችን እንዲያዘጋጁ እንዲያበረክቱ ሁኔታዎችን ያመቻቻል ያበረታታል፤',
      '፫ የግቢ ጉባኤው አባላት በሚማሩበት ሞያና በጉልበታቸው አገልግሎት ለሚያገኙበት ግቢ ጉባኤ፣ ሰንበት ት/ቤት፣ ሰበካ ጉባኤና ማዕከል/ወረዳ ማዕከል እንዲሁም በአቅራቢያቸው ለሚገኙ ገዳማትና ለአካባቢው ማህበረሰብ ነጻ አገልግሎት እንዲሰጡ ሁኔታዎችን ያመቻቻል፤',
      '፬ የግቢ ጉባኤው አባላት ለሚማሩበት ሰንበት ት/ቤት አባላት የማጠናከሪያ ትምህርት እንዲሰጡ ሁኔታዎችን ያመቻቻል፤',
      '፭ ተመራቂ ተማሪዎች የመመረቂያ ጽሁፋቸውን በቤተክርስቲያን ዙሪያ እንድያደርጉ ቅስቀሳ ያደርጋል፤ ጽሁፋቸውንም በቤተክርስቲያን ዙሪያ ለሚያደርጉ ከማእከሉ ጋር በመተባበር አማካሪ ይመድባል፤',
      '፮ ከማእከሉ ሙያና ማኅበራዊ አገልግሎት ጥናት እና ምርምር ዋና ክፍል ጋር በመተባበር ለግቢ ጉባኤ አባላት ስልጠናዎችን ያዘጋጃል፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '11_5',
      '፲፩፥፭፥',
      'የሞያ አገልግሎት ንዑስ ክፍል',
      '፭ ዘርፎች /ካሉ/ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ቅድና የዕቅድ አፈጻጸም ዘገባ ከጽ/ቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፡፡',
    ),
  },
  {
    id: '11_6',
    badge: '፲፩፥፮',
    title: 'የበጎ አድራጎት ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ የአካል ጉዳት፣ የጤና ችግር ወይም ከአቅም በላይ የሆነ የገንዘብ ችግር ያለባቸውን የግቢ ጉባኤው አባላት ከአባላት እንክብካቤ፣ አቅም ማጎልበቻና ቅስቀሳ ክፍል፣ ከዲያቆናት ጋር በመተባበር አስፈላጊውን እርዳታ እንዲያገኙ ያደርጋል፤',
      '፪ ፈቃደኛ ከሆኑ አባላት ያገለገሉ አልባሳትን፣ በአጽዋማት ወቅት የቁርስ ዳቦ በማሰባሰብ ወዘተ ለነዳያን እንዲደርሱ ያደርጋል። እንዲሁም ነዳያን ጾም እንዲፈቱና በዓላትን እንዲያከብሩ አስተዋጽኦ ያደርጋል፤',
      '፫ ለተቸገሩ ግቢ ጉባኤያትና አብያተ ክርስቲያናት መርጃ የሚውል እርዳታ/መባዕ በማሰባሰብ ከሚመለከተው የማዕከሉ ዋና ክፍል ጋር በመተባበር የሚረዱበትን መንገድ ያመቻቻል፤',
      '፬ የግቢ ጉባኤውን አባላት በማስተባበር በአጥቢያ ቤተ ክርስቲያን የሚሰሩ ስራዎችን ለምሳሌ የቤተ ክርስቲያኑን ግቢ ማጽዳት፣ ዛፍ መትከል፣ ልብሰ ተክህኖ ማጠብ ወዘተ እንዲያገለግሉ ያደርጋል፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '11_6',
      '፲፩፥፮፥',
      'የበጎ አድራጎት ንዑስ ክፍል',
      '፭ ዘርፎች /ካሉ/ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከጽሐቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፡፡',
    ),
  },
  {
    id: '11_7',
    badge: '፲፩፥፯',
    title: 'የቤተ መጻህፍትና መዛግብት ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ የግቢ ጉባኤው ንብረት የሆኑ መጻሕፍትን፣ መጽሔቶችን፣ ጋዜጦችን፣ የአስኳላ ትምህርት መርጃ ወርክ ሽቶችና ሃንዳውቶች፣ እንዲሁም የድምጽና የምስል መዝሙራትና ስብከቶችን በጥንቃቄ በመያዝ አመቺ በሆነ ቦታ ቋሚ ወይም ተንቀሳቃሽ ቤተ መጻሕፍት በማዘጋጀት አባላት በቤተ መጻሕፍት እንዲጠቀሙ እንዲሁም ተውሰው መጠቀም የሚችሉበትን ሁኔታ ያመቻቻል፤',
      '፪ ከግቢ ጉባኤው አባላት መጻሕፍትን፣ መጽሔቶችን፣ ጋዜጦችን፣ የአስኳላ ትምህርት መርጃ ወርክ ሽቶችና ሃንዳውቶች፣ እንዲሁም የድምጽና የምስል መዝሙራትና ስብከቶችን ወዘተ በስጦታ ወይም በውሰት በማሰባሰብ ቤተ መጻሕፍቱን ያጠናክራል፤',
      '፫ የቤተ መጻሕፍቱን ንብረቶች በጥንቃቄ መዝግቦ ያሉትና የጠፉትን ወይም የተበላሹትን በየ3 ወሩ ለሒሳብና ንብረት ክፍል ያሳውቃል፤',
      '፬ ከየክፍሎች አገልግሎታቸውን የጨረሱ መረጃዎችን /የቃለ ጉባኤ አጀንዳዎችን፣ደብዳቤዎችን፣ ሥነ ጽሑፎችን፣ ሥነ ስዕላት፣ ትምህርታዊ ጽሁፎች፣ የክፍሎች የአገልግሎት ዘገባዎች፣ እንዲሁም የአባላትና የአገልጋዮች መረጃ ወዘተ በአግባቡ ያስቀምጣል፤',
      '፭ የግቢ ጉባኤውን ልዩ ልዩ ተግባራትና እንቅስቃሴዎች የሚያሳዩ የፎቶ፣ የድምጽና የምስል /የቪድዮ/ መረጃዎችን ያሰባስባል፣ በአግባቡም ያስቀምጣል፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '11_7',
      '፲፩፥፯፥',
      'የቤተ መጻህፍትና መዛግብት ንዑስ ክፍል',
      '፭ ዘርፎች /ካሉ/ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከጽሐቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፡፡',
      'ጸሐፊ',
    ),
  },
];

export default function ProfessionAndCharityServiceScreen() {
  const [expandedId, setExpandedId] = useState('11');
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
        <Text style={styles.mainTitle}>የሞያና በጎ አድራጎት ማስተባበሪያ ክፍል</Text>

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
