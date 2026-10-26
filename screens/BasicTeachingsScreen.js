import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// 15ቱ መሠረታዊ ትምህርቶች እና ከቀረቡት ምስሎች የተወሰዱት ንዑስ ርዕሶቻቸው
const teachingsData = [
  {
    id: '1',
    title: 'ትምህርት ሃይማኖት',
    subItems: [
      'የሃይማኖት ምንነትና አስፈላጊነት',
      'እምነት እና ሃይማኖት',
      'አንዲት እምነት / ሃይማኖት',
      'ኦርቶዶክስ ተዋሕዶ',
      'የእውቀት እምነትና የእውነት እምነት',
      'ጾማና ቀፍና',
      'ቅዱስ ትውፊት'
    ]
  },
  {
    id: '2',
    title: 'ነገረ መለኮት (ነገረ እግዚአብሔር)',
    subItems: [
      'ህልውና እግዚአብሔር',
      'ምሥጢረ ሕረት አግናህዊ',
      'ባሕርየ እግዚአብሔር',
      'የእግዚአብሔር አንድነትና ሦስትነት (ምሥጢረ ሥላሴ)',
      'የመንፈስ ቅዱስ መለኮታዊ ክብር'
    ]
  },
  {
    id: '3',
    title: 'ነገረ ክርስቶስ',
    subItems: [
      'የነገረ ክርስቶስ መግቢያ (Christology)',
      'ነገረ ተዋሕዶ Miaphysitism',
      'አንድ ባሕርይ One incarnate Nature',
      'ኢየሱስ ክርስቶስ ማን ነው?',
      'የክርስቶስ የማስታረቅ አገልግሎት',
      'ወደ አምላኬና ወደ አምላካችሁ [ዮሐ 20:17]',
      'እክእ አብ ይበልጣል [ዮሐ 14:27]',
      'አምላኬ አምላኬ ለምን ተወኝ [ማቴ 27:46]',
      'የኢየሱስ ክርስቶስ አምላክና አባት [ኤፌ 1:3]',
      'በእኔ በቀ ወደ አብ የሚመጣ የለም [ዮሐ 14:6]',
      'ስለ እኛ የሚማልደው [ሮሜ 8:34]',
      'ስለ እርሱ ሊማልድ [ዕብ 7:24]',
      'ከአብ ዘንድ \'መብቀ\' አለኝ? ጻድቃለመን አለኝ! [1ኛ ዮሐ 2:1]',
      'የአዲስ ኪዳን መካከለኛ [1ኛ ጢሞ 2:5]',
      'ጸሎትና ምልጃን አቀረበ [ዕብ 5:7]',
      'ስለ እኛ አሁንም ይደይ ዘንድ [ዕብ 9:24]',
      'ክርስቶስን እንደማል አዳኝ አድርገህ ተቀብለው?'
    ]
  },
  {
    id: '4',
    title: 'ኦርቶዶክሳዊ የድኅነት ትምህርት',
    subItems: [
      'የሰው ልጅ ውድቀትና የባሕርይ መታወክ (ርቀት ባሕርይ)',
      'የድኅነት ትርጉምና አስፈላጊነት',
      'የአምላክ ሰው መሆንና የዓለም ቤዛነት',
      'የክርስቶስ ሕመም ፥ ሞትና ትንሣኤ ለድኅነታችን',
      'ከምዕና እንዴት ድንን? (ዓላማውና መንገዱ)',
      'ሰው የድኅያው እንዴት ነው? (የእግዚአብሔር የማዳን ሥራ)',
      'ኦርቶዶክሳዊ የድኅነት ገጽታዎች (ድኅናል ፥ እየዳንን ነው ፥ እንድናለን)',
      'አምላኬ አዶማዊ ምሥጢርና ድኅነት',
      'ጥምቀት ፥ ልጅነትና የሥነ ሕይወት',
      'የቅዱስ ሥጋና ክብር ደም ሕይወት (ቁርባን)',
      'ሰው ለመዳን ምን ያስፈልጋል? (እምነት ፥ መልካምሥራ ጸጋ)',
      'የእያንዳንዱ ሰው ድኅነትና የሰው ነፃ ፈቃድ',
      'የአመቤታችንና የቅዱሳን አማላጅነት በድኅነት ሕይወት',
      'የቤተ ክርስቲያን አንድነትና የቅዱሳን ኅብረት',
      'ጽድቅ ፥ ንጽሕናና የዘለአለም ሕይወት'
    ]
  },
  {
    id: '5',
    title: '፭ቱ አዕማደ ምስጢር',
    subItems: [
      'ምሥጢረ ሥላሴ',
      'ምሥጢረ ሥጋዌ',
      'ምሥጢረ ጥምቀት',
      'ምሥጢረ ቁርባን',
      'ምሥጢረ ትንሣኤ ሙታን'
    ]
  },
  {
    id: '6',
    title: '፯ቱ ምስጢራተ ቤተክርስቲያን',
    subItems: [
      'ምሥጢረ ጥምቀት',
      'ምሥጢረ ማኅሮት (ሜሮን)',
      'ምሥጢረ ቁርባን',
      'ምሥጢረ ክህነት',
      'ምሥጢረ ተክሊል',
      'ምሥጢረ ንስሐ',
      'ምሥጢረ قንዴል'
    ]
  },
  {
    id: '7',
    title: 'ክብር ቅድስት ድንግል ማርያም',
    subItems: [
      'የአመቤታችንን ንጽሕናና ቅድስና',
      'ነገረ ጥት አብሮ/ ርቀት ባሕርይ እና አመቤታችን',
      'የአመቤታችን የዘለአለማዊ ድንግልና',
      'አመቤታችን የግዕላን እናትነት (ወላዲተ አምላክ)',
      'እጮኛ : ሳይፈትኝ [ማቴ 1 : 18]',
      'የብንር ልጅን እስከምትወልድ ድረስ [ማቴ 1:25]',
      'ወንድሞቹና እኅቶቹ [ማቴ 13:55]',
      'የአመቤታችን አማላጅነት',
      'እንዳት ሴት ከአንቺ ጋር ምን አለኝ [ዮሐ 2:4]',
      'ድንግል ማርያም በመጽሐፍ ቅዱስ',
      'ዕረፍተ ፥ ትንሣኤፋና ዕርገተ',
      'ቤተ ክርስቲያን ስለ ድንግል ማርያም ለምን ታስተምራለች?',
      'ለምን ኪ.ዳን ምህረት ተባለች?',
      'ቤቴቲ ማን ናት? [ራእይ 12 : 1]'
    ]
  },
  {
    id: '8',
    title: 'ክብር ቅዱሳን ፥ ሰዕዳን ፥ እና መላእክት',
    subItems: [
      'ነገረ ቅዱሳን: ለምን ለቅዱሳን እንማራለን?',
      'የባህር ቅድስና የጸጋ ቅድስና',
      'ቤተክርስቲያን ቅዱሳንን የምትላቸው ማንን ነው?',
      'የቅዱሳን ክብራቸው በመእቲክርስቲያን',
      'አማላጅነታቸው በእድ አሥጋ',
      'አማላጅነታቸው በእድ ነፍስ',
      'የልሞት ዎች ከሞት እኛም ይቻላል [መክ 9:4]'
    ]
  },
  {
    id: '9',
    title: 'ክብር መላእክት ቅዱሳን',
    subItems: [
      'ነገረ መላእክት',
      'የቅዱሳን መላእክት አማላጅነት',
      'ስግደት ለቅዱሳን መላእክት',
      'እንዲያደርጉ ተጠንቀቅ <<አትንገረኝ>> ራእ 19 : 10'
    ]
  },
  {
    id: '10',
    title: 'ቤተ ክርስቲያን እና ዓለምአቀፍ ንባቤት',
    subItems: [
      'የቤተክርስቲያን ትርጉም',
      'አሐቲ ቤተክርስቲያን',
      'የኦርቶዶክስ ቤተክርስቲያን ምሥጢራዊ ስሞቿ',
      'ቤተክርስቲያን በመ/ም ሐዋርያት',
      'ጉባኤ ኒቂያ',
      'ጉባኤ ቁስጥንጥንያ',
      'ጉባኤ ኤፌሶን',
      'ጉባኤ ኬልቄዶንና የባዎች ተጅሮ',
      'እውነተኛው ቤተ ክርስቲያን ድምፅ የትኛው ነው?'
    ]
  },
  {
    id: '11',
    title: 'ሥርዓተ ቤተ ክርስቲያን',
    subItems: [
      'ሥርዓተ ቅዱስ',
      'ሰግደት',
      'ጾም',
      'ጸሎት',
      'ስትባ.',
      'ቅዱሳት ሰዕላት',
      'እምነትና ሥራ',
      'አስት',
      'በዓላት',
      'ምጽዋት',
      'የጾም ማኅበር',
      'ዕጣን መንፈሳዊ አገልግሎት',
      'መብል (ማፍ : ጾማ)'
    ]
  },
  {
    id: '12',
    title: 'ታሪክ በሐዲስ ኪዳን',
    subItems: [
      'ታሪክ በሐዲስ ኪዳን?',
      'እነዚህ ሁሉ ታሪኮች ከየት መጡ?',
      'ታሪኩ በቤተ ክርስቲያን (በቅዱሳን ስም ይሰማል?)'
    ]
  },
  {
    id: '13',
    title: 'መጽሐፍ ቅዱስና ቀጥተኛ',
    subItems: [
      'የመጽሐፍ ቅዱስ ታሪክና ትርጉም',
      'የመጽሐፍ ቅዱስ ቀጥተኛ',
      'የብሉይ ኪዳን መጻሕፍት ዝርዝር ጥናት',
      'የሐዲስ ኪዳን መጻሕፍት ዝርዝር ጥናት',
      'ኦርቶዶክሳዊ የመጽሐፍ ቅዱስ አሠራር'
    ]
  },
  {
    id: '14',
    title: 'አዋልድ መጻሕፍት ፥ ትውፊት',
    subItems: [
      'ቅዱስ ትውፊት (Holy Tradition)[cite: 24]',
      'አዋልድ መጻሕፍት[cite: 24]',
      'ዜና አብው[cite: 24]',
      'መጻሕፍተ መክስካት[cite: 24]',
      'ድርሳናት[cite: 24]',
      'ድንጋናት[cite: 24]',
      'ስንክሳር[cite: 24]'
    ]
  },
  {
    id: '15',
    title: 'ክብር ቅዱስ መስቀል',
    subItems: [
      'ክርስቶስ በመስቀሉ',
      'ለቅዱስ መስቀል ክብር',
      'ማማተብ',
      'መስቀል መሳለም (መሳም)',
      'በመስቀል መባረክ',
      'ማዕጠንት',
      'መስቀል የአባቶቻችን ኀየ ነው?'
    ]
  }
];

export default function BasicTeachingsScreen({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ግምደ ሃይማኖት (መሠረታዊ ትምህርቶች)</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {teachingsData.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            {/* ዋናው ርዕስ ካርድ */}
            <View style={styles.mainCardHeader}>
              <View style={styles.leftSection}>
                <MaterialCommunityIcons name="book-open-outline" size={24} color="#004D40" />
                <Text style={styles.mainCardTitle}>{item.title}</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.subItems.length}</Text>
              </View>
            </View>

            {/* በውስጡ ያሉ ንዑስ ርዕሶች (Sub-items) */}
            <View style={styles.subItemsList}>
              {item.subItems.map((subTitle, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.subItemRow}
                  activeOpacity={0.6}
                  onPress={() => {
                    if (subTitle === 'የሃይማኖት ምንነትና አስፈላጊነት') {
                      navigation.navigate('ReligionNature');
                    } else if (subTitle === 'እምነት እና ሃይማኖት') {
                      navigation.navigate('FaithAndReligion');
                    } else if (subTitle === 'አንዲት እምነት / ሃይማኖት') {
                      navigation.navigate('HowFaithReligion');
                    } else {
                      alert(`${subTitle} ተመረጠ!`);
                    }
                  }}
                >
                  <MaterialCommunityIcons name="file-document-outline" size={18} color="#00796B" style={{ marginRight: 8 }} />
                  <Text style={styles.subItemText}>{subTitle}</Text>
                  <MaterialCommunityIcons name="chevron-right" size={18} color="#888" style={{ marginLeft: 'auto' }} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  header: { 
    backgroundColor: '#004D40', 
    paddingVertical: 16, 
    paddingHorizontal: 20,
  },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#FFFFFF' },
  scrollContainer: { padding: 12 },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 14,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  mainCardHeader: {
    backgroundColor: '#E0F2F1',
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#B2DFDB',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  mainCardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#004D40',
    marginLeft: 10,
    flexShrink: 1,
  },
  badge: {
    backgroundColor: '#00796B',
    paddingHorizontal: 8,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  subItemsList: {
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  subItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  subItemText: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },
});