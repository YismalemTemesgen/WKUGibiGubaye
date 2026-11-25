import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // npx expo install @expo/vector-icons

const COLORS = {
  bg: '#F7F9FA',
  card: '#FFFFFF',
  teal: '#0F7B72',
  tealSoft: '#E4F2F1',
  gold: '#D4A82C',
  text: '#1B2430',
};

/* ---------------------------------------------------------------
   Decorative header (pinned: stays at the top while the list
   scrolls underneath): gold lines + crosses on both sides of a
   white circle holding the book icon
---------------------------------------------------------------- */
function OrnamentHeader() {
  return (
    <View style={styles.ornamentRow}>
      <View style={styles.goldLine} />
      <Text style={styles.ornament}>✥</Text>
      <View style={styles.circle}>
        <Text style={styles.circleCross}>✥</Text>
        <Ionicons name="book-outline" size={38} color={COLORS.teal} />
      </View>
      <Text style={styles.ornament}>✥</Text>
      <View style={styles.goldLine} />
    </View>
  );
}

/* ---------------------------------------------------------------
   One card row: teal accent bar | icon box | title | chevron
---------------------------------------------------------------- */
function TeachingCard({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.accentBar} />
      <View style={styles.iconBox}>
        <Ionicons name="book-outline" size={26} color={COLORS.teal} />
        <Text style={styles.iconCross}>✥</Text>
      </View>
      <Text style={styles.cardText}>{title}</Text>
      <Ionicons name="chevron-forward" size={22} color={COLORS.teal} />
    </TouchableOpacity>
  );
}

/* ---------------------------------------------------------------
   Safe navigation: opens the screen if it is registered in App.js,
   otherwise shows the same "coming soon" alert the home screen uses
---------------------------------------------------------------- */
function go(navigation, item) {
  const registered = navigation.getState()?.routeNames || [];
  if (registered.includes(item.screen)) {
    navigation.navigate(item.screen);
  } else {
    alert(`${item.title} ገጽ በቅርብ ቀን ይዘጋጃል!`);
  }
}

/* ---------------------------------------------------------------
   Reusable list screen
---------------------------------------------------------------- */
export function TeachingList({ items, onSelect, showHeader = true }) {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      {showHeader ? <OrnamentHeader /> : null}
      <FlatList
        data={items}
        keyExtractor={(item, i) => item.screen || String(i)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TeachingCard title={item.title} onPress={() => onSelect(item)} />
        )}
      />
    </SafeAreaView>
  );
}

/* ---------------------------------------------------------------
   Screen 1: main categories ("መሠረታዊ ትምህርቶች")
---------------------------------------------------------------- */
const CATEGORIES = [
  { title: 'ትምህርተ ሃይማኖት', screen: 'ReligionList' },
  { title: 'ነገረ መለኮት (ነገረ እግዚአብሔር)', screen: 'TheologyList' },
  { title: 'ነገረ ክርስቶስ', screen: 'ChristologyList' },
  { title: 'ኦርቶዶክሳዊ የድኅነት ትምህርት', screen: 'SalvationList' },
  { title: '5ቱ አዕማደ ምሥጢራት', screen: 'FivePillarsList' },
  { title: '7ቱ ምሥጢራተ ቤተክርስትያን', screen: 'SevenSacramentsList' },
  { title: 'ክብረ ቅድስት ድንግል ማርያም', screen: 'MaryList' },
  { title: 'ክብረ ቅዱሳን፣ ጻድቃን፣ ሰማእታት', screen: 'SaintsList' },
  { title: 'ክብረ መላእክተ ቅዱሳን', screen: 'AngelsList' },
  { title: 'ቤተ ክርስቲያን እና ዓለምአቀፍ ጉባኤያት', screen: 'ChurchCouncilsList' },
  { title: 'ሥርዓተ ቤተ ክርስቲያን', screen: 'ChurchOrderList' },
  { title: 'ታቦት በሐዲስ ኪዳን', screen: 'TabotList' },
  { title: 'መጽሐፍ ቅዱስና ቀኖና', screen: 'BibleCanonList' },
  { title: 'አዋልድ መጽሐፍት፣ ትውፊት', screen: 'ApocryphaList' },
  { title: 'ክብረ ቅዱስ መስቀል', screen: 'HolyCrossList' },
];

export function BasicTeachingsScreen({ navigation }) {
  return (
    <TeachingList
      items={CATEGORIES}
      onSelect={(item) => go(navigation, item)}
    />
  );
}

/* ---------------------------------------------------------------
   Screen 2: Orthodox salvation teachings
---------------------------------------------------------------- */
const SALVATION = [
  { title: 'የሰው ልጅ ውድቀትና የባሕርይ መታወክ (ድቀተ ባሕርይ)', screen: 'FallAndNature' },
  { title: 'የድኅነት ትርጉምና አስፈላጊነት', screen: 'SalvationMeaning' },
  { title: 'የአምላክ ሰው መሆንና የዓለም ቤዛነት', screen: 'IncarnationAndRedemption' },
  { title: 'የክርስቶስ ሕማም፣ ሞትና ትንሣኤ ለድኅነታችን', screen: 'ChristSufferingAndResurrection' },
  { title: 'ከምን እና እንዴት ዳንን? (ዓላማውና መንገዱ)', screen: 'FaithAndPurpose' },
  { title: 'ሰው የዳነው እንዴት ነው? (የእግዚአብሔር የማዳን ሥራ)', screen: 'HowManIsSaved' },
  { title: 'ኦርቶዶክሳዊ የድኅነት ገጽታዎች (ድነናል፣ እየዳንን ነው፣ እንድናለን)', screen: 'SalvationAspects' },
  { title: 'አምስቱ አዕማደ ምሥጢራትና ድኅነት', screen: 'SacramentsAndSalvation' },
  { title: 'ጥምቀት፣ ልጅነትና የንስሐ ሕይወት', screen: 'BaptismAndNewLife' },
  { title: 'የቅዱስ ሥጋውና ክቡር ደሙ ሕይወት (ቁርባን)', screen: 'HolyCommunionLife' },
  { title: 'ሰው ለመዳን ምን ያስፈልገዋል? (እምነት፣ ምግባርና ጸጋ)', screen: 'WhySalvationIsNeeded' },
  { title: 'የእያንዳንዱ ሰው ድኅነትና የሰው ነፃ ፈቃድ', screen: 'FreeWillAndSalvation' },
  { title: 'የአመቤታችንና የቅዱሳን አማላጅነት በድኅነት ሕይወት', screen: 'SaintsAndSalvation' },
  { title: 'የቤተ ክርስቲያን አንድነትና የቅዱሳን ኅብረት', screen: 'ChurchUnityAndCommunion' },
  { title: 'ጽድቅ፣ ኩነኔና የዘላለም ሕይወት', screen: 'GloryAndEternalLife' },
];

export function SalvationListScreen({ navigation }) {
  return (
    <TeachingList
      items={SALVATION}
      onSelect={(item) => go(navigation, item)}
    />
  );
}

/* ---------------------------------------------------------------
   Other category lists (same data/screen names as your old screen)
---------------------------------------------------------------- */
const RELIGION = [
  { title: 'የሃይማኖት ምንነትና አስፈላጊነት', screen: 'ReligionNature' },
  { title: 'እምነት እና ሃይማኖት', screen: 'FaithAndReligion' },
  { title: 'አንዲት እምነት / ሃይማኖት', screen: 'HowFaithReligion' },
  { title: 'ኦርቶዶክስ ተዋሕዶ', screen: 'OrthodoxTewahedo' },
  { title: 'የእውቀት እምነትና የእውነት እምነት', screen: 'FaithAndTruth' },
  { title: 'ዶግማ እና ቀኖና', screen: 'DogmaAndCanon' },
  { title: 'ቅዱስ ትውፊት', screen: 'HolyTradition' },
];

const THEOLOGY = [
  { title: 'ሀልዎተ እግዚአብሔር', screen: 'HlawinaEgziabiher' },
  { title: 'ምሥጢረ ኩነት አምላካዊ', screen: 'MismireHirit' },
  { title: 'ባሕርያተ እግዚአብሔር', screen: 'BahriyEgziabiher' },
  { title: 'የእግዚአብሔር አንድነትና ሦስትነት (ምሥጢረ ሥላሴ)', screen: 'HolyTrinity' },
  { title: 'የመንፈስ ቅዱስ መለኮታዊ ክብር', screen: 'HolySpiritGlory' },
];

const CHRISTOLOGY = [
  { title: 'የነገረ ክርስቶስ መግቢያ (Christology)', screen: 'Christology' },
  { title: 'ነገረ ተዋሕዶ Miaphysitism', screen: 'Miaphysitism' },
  { title: 'አንድ ባሕርይ One incarnate Nature', screen: 'OneIncarnateNature' },
  { title: 'ኢየሱስ ክርስቶስ ማን ነው?', screen: 'WhoIsJesus' },
  { title: 'የክርስቶስ የማስታረቅ አገልግሎት', screen: 'ChristReconciliation' },
  { title: 'ወደ አምላኬና ወደ አምላካችሁ [ዮሐ 20:17]', screen: 'John2017' },
  { title: 'ከእኔ አብ ይበልጣል [ዮሐ 14:27]', screen: 'John1427' },
  { title: 'አምላኬ አምላኬ ለምን ተውከኝ [ማቴ 27:46]', screen: 'Matt2746' },
  { title: 'የኢየሱስ ክርስቶስ አምላክና አባት [ኤፌ 1:3]', screen: 'Eph13' },
  { title: 'በእኔ በቀር ወደ አብ የሚመጣ የለም [ዮሐ 14:6]', screen: 'John146' },
  { title: 'ስለ እኛ የሚማልደው [ሮሜ 8:34]', screen: 'Rom834' },
  { title: 'ስለ እነርሱ ሊያማልድ [ዕብ 7:24]', screen: 'Heb724' },
  { title: 'ከአብ ዘንድ ጠበቃ አለን? ጰራቅሊጦስ አለን! [1ኛ ዮሐ 2:1]', screen: 'John121Screen' },
  { title: 'የአዲስ ኪዳን መካከለኛ [1ኛ ጢሞ 2:5]', screen: 'Tim25' },
  { title: 'ጸሎትና ምልጃን አቀረበ [ዕብ 5:7]', screen: 'Heb57' },
  { title: 'ስለ እኛ አሁን ይታይ ዘንድ [ዕብ 9:24]', screen: 'Heb924' },
  { title: 'ክርስቶስን እንደግል አዳኝ አድርገህ ተቀበለው?', screen: 'AcceptChrist' },
];

export function ReligionListScreen({ navigation }) {
  return <TeachingList items={RELIGION} onSelect={(item) => go(navigation, item)} />;
}
export function TheologyListScreen({ navigation }) {
  return <TeachingList items={THEOLOGY} onSelect={(item) => go(navigation, item)} />;
}
export function ChristologyListScreen({ navigation }) {
  return <TeachingList items={CHRISTOLOGY} onSelect={(item) => go(navigation, item)} />;
}

// default export (named exports above also work)
export default BasicTeachingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  listContent: { paddingHorizontal: 24, paddingTop: 14, paddingBottom: 30 },

  // ornament header
  ornamentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 0,
    backgroundColor: COLORS.bg,
    zIndex: 1,
  },
  goldLine: { flex: 1, height: 1, backgroundColor: COLORS.gold, opacity: 0.7 },
  ornament: { color: COLORS.gold, fontSize: 14, marginHorizontal: 2 },
  circle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    elevation: 6,
    shadowColor: COLORS.teal,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 },
  },
  circleCross: { position: 'absolute', top: 8, color: COLORS.gold, fontSize: 14 },

  // card
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 20,
    paddingVertical: 16,
    paddingLeft: 36,
    paddingRight: 14,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  accentBar: {
    position: 'absolute',
    left: 6,
    top: 14,
    bottom: 14,
    width: 5,
    borderRadius: 3,
    backgroundColor: COLORS.teal,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: COLORS.tealSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconCross: { position: 'absolute', top: 7, color: COLORS.gold, fontSize: 9 },
  cardText: {
    flex: 1,
    fontSize: 16.5,
    fontWeight: '800',
    lineHeight: 26,
    color: COLORS.text,
    marginRight: 6,
  },
});