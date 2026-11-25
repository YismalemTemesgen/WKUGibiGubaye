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
    '፭ ዘርፎች /ካሉ/ ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የንዑስ ክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከጽሐቤት ጋር በመሆን አዘጋጅቶ ለክፍሉ ያቀርባል፡፡',
  ],
};

const createPositionSections = (idPrefix, badgePrefix, subsectionTitle, viceTitle) => [
  {
    id: `${idPrefix}_1`,
    badge: `${badgePrefix}፩`,
    title: `${subsectionTitle} ሰብሳቢ ተግባርና ኃላፊነት`,
    content: positionDuties.chair.join('\n\n'),
  },
  {
    id: `${idPrefix}_2`,
    badge: `${badgePrefix}፪`,
    title: `${viceTitle || `${subsectionTitle} ምክትል ሰብሳቢ`} ተግባርና ኃላፊነት`,
    content: positionDuties.viceChair.join('\n\n'),
  },
  {
    id: `${idPrefix}_3`,
    badge: `${badgePrefix}፫`,
    title: `${subsectionTitle} ፀሐፊ ተግባርና ኃላፊነት`,
    content: positionDuties.secretary.join('\n\n'),
  },
];

const sections = [
  {
    id: '10',
    badge: '፲',
    title: 'የባችና መርሐ ግብራት ማስተባበሪያ ክፍል ተግባርና ኃላፊነት',
    content: 'የግቢ ጉባኤው የባችና መርሐ ግብራት ማስተባበሪያ ክፍል ሰብሳቢ፣ ምክትል ሰብሳቢና ፅሃፊ የሚያካትት ሲሆን የሚከተሉት ዋና ዋና ተግባራት ይኖሩታል',
  },
  {
    id: '10_1',
    badge: '፲፥፩',
    title: 'የክፍሉ አጠቃላይ ተግባራት',
    content: [
      '፩ ለተቋሙ ኦርቶዶክሳውያን በሙሉ በግቢ ጉባኤው ውስጥ በየቀኑ ለሚደረጉ መርሃ ግብራት አስፈላፊውን ማስታወቂያና ቅስቀሳ ያደርጋል፤',
      '፪ በተቋሙ ውስጥ ስላሉ እንቅስቃሴዎች መረጃ ይሰበስባል፤',
      '፫ ወደ ገዳማትና አድባራት የሚደረጉ ጉዞዎችንና በግቢ ጉባኤው ውስጥ የሚደረጉ በዓላትን ሌሎች ክፍሎችን በማስተባበር እንዲከናወኑ ያደርጋል፤',
      '፬ ሁሉንም ዲፓርትመንቶች/ባቾች የሚያካትት መርሃ ግብር/የአንድነት ጉባኤ ስልጠና ስብከት ወቅታዊ ጉዳይ ወዘተ ከሌሎች ክፍሎች ጋር በመሆን ያዘጋጃል፤',
      '፭ የግቢ ጉባኤው አባላት ስለ ጽዋ ማኅበራት ምንነትና ስርዓት እንዲያውቁ ልዩ ልዩ የግንዛቤ ማስጨበጫ መርሃ ግብራትን ያዘጋጃል፤',
      '፮ በግቢ ጉባኤው ውስጥ ከግቢ ጉባኤው እውቅናና ፈቃድ ውጭ የጽዋ ማኅበራት/መርሃ ግብራት እንዳይካሄዱ ይቆጣጠራል፤',
      '፯ የሁሉንም ክፍል መርሃ ግብሮች በተመለከተ የሚሰጡትን ልዩ ልዩ ቅድመ ዝግጅት፣ ጊዜ ዝግጅትና ድህረ ዝግጅት ተግባራዊ እንዲደረጉ አስፈላጊውን አቅጣጫ',
      '፰ በግቢ ጉባኤ የሚከናወኑ የሁሉንም መርሃ ግብራት ጥራትና ያመጡትን ለውጥ ይከታተላል፣ አስፈላጊውንም አቅጣጫ ይሰጣል፣ ሪፖርትም ለማዕከሉ ይልካል፤',
      '፱ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለሥራ አስፈጻሚ ያስገባል፡፡',
    ].join('\n\n'),
  },
  {
    id: '10_2',
    badge: '፲፥፪',
    title: 'የባችና መርሐ ግብራት ማስተባበሪያ ክፍል ሰብሳቢ ተግባርና ኃላፊነት',
    content: [
      '፩ የክፍሉን አገልግሎት በበላይነት ይመራል፤ ጉባኤውንም ይሰበስባል፤',
      '፪ ክፍሉን አስመልክቶ በሥራ አስፈጻሚ ጉባኤ የሚወሰኑ ውሳኔዎችንና የሚሠጡ አቅጣጫዎች ተፈጻሚነታቸውን ይከታተላል፤',
      '፫ ክፍሉን ወክሎ በሥራ አስፈጻሚ ጉባኤ ላይ ይሳተፋል፤',
      '፬ በክፍሉ ጽ/ቤት የሥራ ክፍፍል መሠረት ለሚደርሰውን ንዑስ ክፍል የአገልግሎት',
      '፭ ንዑስ ክፍሎች/ዘርፎች ስራቸውን በአግባቡ መወጣታቸውን ይከታተላል፣ ይቆጣጠራል፤',
      '፮ በስሩ የሚገኙ የንዑስ ክፍልና የዘርፍ ኃላፊዎችን ከክፍሉ አባላት ያስመርጣል፣ ለስራ አስፈጻሚ ጉባኤም አቅርቦ ያስጸድቃል፤',
      '፯ በማዕከሉ የግቢ ጉባኤያት ማስተባበሪያ ዋና ክፍል/አቻ የማዕከሉ ዋና ክፍል ስብሰባ ላይ ግቢውን ወክሎ ይገኛል፤',
      '፰ ለክፍሉ አባላት /ለንዑስ ክፍል ኃላፊዎች/ በስራ አስፈጻሚ ጉባኤ የተወሰኑ ውሳኔዎችን እና የተከናወኑ ተግባራትን አጠቃላይ መረጃ ያሳውቃል፣',
      '፱ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት በማዘጋጀት ለስራ አስፈጻሚ ያስገባል፡፡',
    ].join('\n\n'),
  },
  {
    id: '10_3',
    badge: '፲፥፫',
    title: 'የባችና መርሐ ግብራት ማስተባበሪያ ክፍል ም/ሰብሳቢ ተግባርና ኃላፊነት',
    content: [
      '፩ ሰብሳቢው በሌለበት ሰዓት ሰብሳቢውን ተክቶ ይሰራል፤',
      '፪ የክፍሉን አባላት መንፈሳዊ ሕይዎት ሊያሳድጉ የሚችሉ የውይይት መነሻ ሀሳቦችን ያዘጋጃል ፤',
      '፫ በጽ/ቤት የሥራ ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል/ዘርፍ አገልግሎት',
      '፬ ከምክትል ሰብሳቢ ሥራ መደብ ጋር ተያያዥ የሆኑ ሌሎች አገልግሎቶችን ይፈጽማል',
    ].join('\n\n'),
  },
  {
    id: '10_4',
    badge: '፲፥፬',
    title: 'የባችና መርሐ ግብራት ማስተባበሪያ ክፍል ፀሐፊ ተግባርና ኃላፊነት',
    content: [
      '፩ የስብሰባዎችን ቃለ ጉባኤ በአግባቡ ይይዛል። ተሰብሳቢዎች በቃለ ጉባ ኤው ላይ ፊርማቸውን እንዲያሰፍሩ ያደርጋል። የስብሰባ ቃለ ጉባዔዎች በአግባቡ ተደራጅተው',
      '፪ ክፍሉን የሚመለከቱ ሠነዶች እና መረጃዎች በአግባቡ ተደራጅተው እንዲቀመጡ ያደርጋል። በክፍሉ ስር ያሉ ንዑስ ክፍሎችን የመረጃና የሠነድ አያያዝ እና አጠባበቅ ይከታተላል፤',
      '፫ የክፍሉን ወጪ እና ገቢ ደብዳቤዎች በአግባቡ ተመዝግበው ወጪ እና ገቢ እንዲደረጉ ያደርጋል',
      '፬ የክፍሉን የውይይት አጀንዳ ኃላፊውንና ምክትል ኃላፊውን በማማከር ያዘጋጃል፤',
      '፭ ንዑስ ክፍሎች ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ሪፖርት እንዲያዘጋጁ ያሳስባል፣ ከዚያም ሰብስቦ የክፍሉን ወርሐዊ፣ የሲሶ ዓመት እና ዓመታዊ ዕቅድና የዕቅድ አፈጻጸም ዘገባ ከሰብሳቢውና ከምክትል ሰብሳቢው ጋር በመሆን ያዘጋጃል፤',
      '፮ በክፍሉ ጽ/ቤት መካከል በሚደረገው ክፍፍል መሠረት የሚደርሰውን ንዑስ ክፍል አገልግሎት ይከታተላል አስፈላጊውንም እገዛ ያደርጋል፤',
      '፯ ሌሎች ከጸሐፊ የአገልግሎት መደብ ጋር ተያያዥ የሆኑ ሥራዎችን ያከናውናል።',
      '፰ ከግቢ ጉባኤው ጽሐቤት የተሰጠውን የክፍሉን ዕቅድ አባዝቶ ለንዑስ ክፍሎች ኃላፊዎች ይሰጣል፤',
    ].join('\n\n'),
  },
  {
    id: '10_5',
    badge: '፲፥፭',
    title: 'የማስታወቂያና ቅስቀሳ ንዑስ ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ ለእያንዳንዱ መርሐ ግብራት ቅስቀሳ የሚያስፈልጉ ልዩ ልዩ መንገዶችን ይቀይሳል፤ ተግባራዊም ያደርጋል፤',
      '፪ በግቢ ጉባኤው በሚደረጉ ማናቸውም መርሃ ግብራት ላይ አባላት እንዲሳተፉ በዲፓርትመንት/ባች የመርሐ ግብራት ዝግጅት ተወካዮች አማካኝነት ቅስቀሳ ያደርጋል፤ መረጃም ያስተላልፍል፤ የባች ተወካዮች ዝርዝር ተግባርም ከስር ይገኛል፤',
      '፫ ማስታወቂያ እንዲነገርላቸው ወይም እንዲጻፍላቸው ክፍሎች ሲጠይቁ የማስታወቂያውን ይዞታ ገምግሞ እንዲጻፍና እንዲለጠፍ ወይም በጉባኤ እንዲነገሩ ያደርጋል፤ ማስታወቂያዎችም ጊዜያቸው ሲያልቅ ሰብስቦ ያስቀምጣል፤',
      '፬ ከግቢ ጉባኤው እውቅናና ፍቃድ ውጭ ለግቢ ጉባኤው አባላት የሚሰራጩ ማናቸውንም መልዕክቶች/ማስታወቂያዎች ይቆጣጠራል፣ አስፈላጊውንም እርምጃ ይወስዳል፤',
      '፭ የግቢ ጉባኤውን አባላት ከመናፍቃን ቅሰጣ ለመጠበቅ በግቢው የሚደረጉ የአጽራረ ቤተ ክርስቲያን እንቅስቃሴዎችን መረጃ በባች የአባላት ጉዳይ ተወካዮች እንዲሁም በሌሎች አባላት አማካኝነት ይሰበስባል፣ ይተነትናል፣ ለክፍሉ ያሳውቃል፤',
      '፮ የትምህርት ተቋሙ፣ የግቢ ጉባኤው እንዲሁም የአባላት የየዕለት እንቅስቃሴ በትኩረት በመከታተል አስፈላጊውን መረጃ ይሰበስባል፤ ይተነትናል ለክፍሉም ያቀርባል፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '10_5',
      '፲፥፭፥',
      'የማስታወቂያና ቅስቀሳ ንዑስ ክፍል',
    ),
  },
  {
    id: '10_6',
    badge: '፲፥፮',
    title: 'የመርሃ ግብራት ጥራት ቁጥጥርና ቦታ ዝግጅት ን/ክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ ለሁሉም መርሐ ግብራት ማከናወኛ የሚሆኑ ቦታዎች ቀድመው እንዲዘጋጁ ያደርጋል',
      '፪ ለልዩ ልዩ መርሐግብረት /ለምክክር፤ ለጉባኤ …../ የሚሆኑ ቦታዎች ምቹነታቸውን ያረጋግጣል፤ ለጉባኤውም አስፈላጊውን ግብዓቶች በማሟላት ማስተካከያ',
      '፫ ለዲፓርትመንት/ባቹ ለሚዘጋጁ ልዩ ልዩ መርሃ ግብራት (የጽዋ፣ ጉዞ፣ የውይይት ወዘተ) ከሚመለከታቸው ክፍሎች ጋር በመነጋገር የጊዜ ሰሌዳ እንዲወጣላቸውና የመርሐ ግብራት መደራደብ እንዳይፈጠር ያደርጋል፤',
      '፬ የዲፓርትመንት/ባቹን ልዩ ልዩ መርሃ ግብራት ያስተባብራል፣ ይከታተላል፣ መረጃ ያሰባስባል፣ ለዲፓርትመንት/ባቹ ኃላፊ ያሳውቃል፤',
      '፭ በዲፓርትመንት/ባቹን መርሃ ግብራት ላይ መምህራንና መርሃ ግብር መሪዎች መገኘታቸውን ይከታተላል፤',
      '፮ የዲፓርትመንት/ባቹን አመቺ ጊዜያት በመለየት ለጋራ መርሃ ግብር ዝግጅት ሁኔታዎችን ያመቻቻል፤',
      '፯ በግቢ ጉባኤ የሚከናወኑ የሁሉንም መርሃ ግብራት ጥራትና ያመጡትን ለውጥ ይከታተላል፣ አስፈላጊውንም አቅጣጫ ይሰጣል፣ ሪፖርትም ለክፍሉ ያስገባል፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '10_6',
      '፲፥፮፥',
      'የመርሃ ግብራት ጥራት ቁጥጥርና ቦታ ዝግጅት ን/ክፍል',
    ),
  },
  {
    id: '10_7',
    badge: '፲፥፯',
    title: 'የጉዞ፣ በዓላትና ፅዋ መርሃ ግብራት ማስተባበሪያ ንሐክፍል ተግባርና ኃላፊነት',
    content: [
      'የንዑስ ክፍሉ አጠቃላይ ተግባራት',
      '፩ ለበዓላት የሚያስፈልጉ ነገሮችን እንደ ኅብስት ፀበል ቄጤማ ወዘተ እንዲሟሉ ያደርጋል፤',
      '፪ አባላት በዲፓርትመንት በባች ወይም በጋራ ወደ ተለያዩ አድባራትና ገዳማት በመሄድ በረከት እንዲካፈሉና የአድባራቱን/ገዳማቱን/ ታሪክ እንዲያውቁ መንፈሳዊ የጉዞ መርሃ ግብራትን ያዘጋጃል፤',
      '፫ በየጉዞዎች ላይ የተሳተፉ አባላትን ዝርዝር መዝግቦ ይይዛል፤',
      '፬ በጉዞዎች ላይ የሚደረጉ መርሃ ግብራትን ያስተባብራል መምህራን /አወያዮች/ ከትምህርት ንዑስ ክፍል ጋር በመሆን በማስመደብ የውይይት አጀንዳዎችን በማዘጋጀት ወዘተ፤',
      '፭ አባላት ለበዓላት ለወርኃ ጽጌ ወዘተ ወደየአድባራቱ በመሄድ የማኅሌትና የቅዳሴ አገልግሎት ተካፋይ እንዲሆኑ ሁኔታዎችን ያመቻቻል ያስተባብራል፤',
      '፮ በግቢ ጉባኤው የሚደረጉ የጽዋ መርሃ ግብራትን ያስተባብራል ይከታተላል፤',
      '፯ በግቢ ጉባኤው የሚደረጉ ልዩ ልዩ በዓላትን /የአዲስ ዓመት የመስቀል የልደት የጥምቀት የትንሳኤ የእመቤታችን ልደትና የማኅበሩ የምስረታ በዓል የአዲስ ተማሪዎች አቀባበልና የምረቃ በዓል ወዘተ/ ዝግጅቶችን ያስተባብራል፤',
      '፰ ለግቢ ጉባኤው የጽዋ መርሃ ግብር አስፈላጊ ቁሳቁሶች እንዲሟሉ ያደርጋል፤',
    ].join('\n\n'),
    isParent: true,
    subSections: createPositionSections(
      '10_7',
      '፲፥፯፥',
      'የጉዞ፣ በዓላትና ፅዋ መርሃ ግብራት ማስተባበሪያ ን/ክፍል',
      '፲፥፯፥፪ የጉዞ፣ በዓላትና ፅዋ መርሃ ግብራት ማስተባበሪያ ንዑስ ክፍል ምክትል ሰብሳቢ',
    ),
  },
];

export default function BachCoordinatinServiceScreen() {
  const [expandedId, setExpandedId] = useState('10');
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
        <Text style={styles.mainTitle}>የባችና መርሐ ግብራት ማስተባበሪያ ክፍል</Text>

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

        <View style={styles.sectionBox}>
          <Text style={styles.sectionHeading}>የዲፓርትመንት ባች /ኮሚቴ/ አባላት ተግባርና ኃላፊነት</Text>
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
