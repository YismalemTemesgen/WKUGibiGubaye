import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SupportScreen from './screens/SupportScreen';
import WolkiteInfoScreen from './screens/WolkiteInfoScreen';
import RegisterScreen from './screens/RegisterScreen';
import CaseFormScreen from './screens/CaseFormScreen';
import AboutScreen from './screens/AboutScreen'; 
import QuestionSupportScreen from './screens/QuestionSupportScreen';
import HaymanoteAbewScreen from './screens/HaymanoteAbewScreen';
import OrthodoxAnswersScreen from './screens/OrthodoxAnswersScreen'; 
import AlmesmayaScreen from './screens/AlmesmayaScreen'; 
import AmeHawaryatScreen from './screens/AmeHawaryatScreen'; 
import HereneosScreen from './screens/HereneosScreen'; 
import AtifosScreen from './screens/AtifosScreen';
import SettingsModal from './components/SettingsModal';
import ArkyaosScreen from './screens/ArkyaosScreen';
import DiyonasayosScreen from './screens/DiyonasayosScreen';
import IgnatyosScreen from './screens/IgnatyosScreen';
import GergoriosScreen from './screens/GergoriosScreen';
import EskendrosScreen from './screens/EskendrosScreen';
import SelesTuMietScreen from './screens/SelesTuMietScreen';
import AtnatewosScreen from './screens/AtnatewosScreen';
import BasleyosScreen from './screens/BasleyosScreen';
import Gergorios2Screen from './screens/Gergorios2Screen';
import FeliksScreen from './screens/FeliksScreen';
import AbulidisScreen from './screens/AbulidisScreen';
import EyakndrosScreen from './screens/EyakndrosScreen';
import SelbestrosScreen from './screens/SelbestrosScreen';
import VetalisScreen from './screens/VetalisScreen';
import EfremScreen from './screens/EfremScreen';
import EraqlisScreen from './screens/EraqlisScreen';
import SablinosScreen from './screens/SablinosScreen';
import AfronyosScreen from './screens/AfronyosScreen';
import YohannesScreen from './screens/YohannesScreen';
import TewodosyosScreen from './screens/TewodosyosScreen';
import EpifanyosScreen from './screens/EpifanyosScreen';
import ZegergoriosScreen from './screens/ZegergoriosScreen';
import YohannesAfeworkScreen from './screens/YohannesAfeworkScreen';
import TewoflosScreen from './screens/TewoflosScreen';
import QerlosScreen from './screens/QerlosScreen';
import Tewodosyos2Screen from './screens/Tewodosyos2Screen';
import SayresScreen from './screens/SayresScreen';
import YaqobScreen from './screens/YaqobScreen';
import BinyamiScreen from './screens/BinyamiScreen';
import Yohannes2Screen from './screens/Yohannes2Screen';
import KiriosScreen from './screens/KiriosScreen';
import Tewodosyos3Screen from './screens/Tewodosyos3Screen';
import DiosqorosScreen from './screens/DiosqorosScreen';
import AbaGebrielScreen from './screens/AbaGebrielScreen';
import QozmosScreen from './screens/QozmosScreen';
import Baslios2Screen from './screens/Baslios2Screen';
import Qozmos2Screen from './screens/Qozmos2Screen';
import MaqaresScreen from './screens/MaqaresScreen';
import Diosqoros2Screen from './screens/Diosqoros2Screen';
import MinasScreen from './screens/MinasScreen';
import Diosqoros3Screen from './screens/Diosqoros3Screen';
import Yohannes3Screen from './screens/Yohannes3Screen';
import FiltawosScreen from './screens/FiltawosScreen';
import Egnatios2Screen from './screens/Egnatios2Screen';
import Atnatewos2Screen from './screens/Atnatewos2Screen';
import Yohannes4Screen from './screens/Yohannes4Screen';
import ZekariasScreen from './screens/ZekariasScreen';
import SenutiyuScreen from './screens/SenutiyuScreen';
import DionasyosScreen from './screens/DionasyosScreen';
import AkristodolosScreen from './screens/AkristodolosScreen';
import ZeyohannesScreen from './screens/ZeyohannesScreen';
import HabibScreen from './screens/HabibScreen';
import ZekariasYihyaScreen from './screens/ZekariasYihyaScreen';
import QalGizetScreen from './screens/QalGizetScreen';
import SemaatScreen from './screens/SemaatScreen';
import BasicTeachingsScreen from './screens/BasicTeachingsScreen';
import ReligionNatureScreen from './screens/ReligionNatureScreen';
import FaithAndReligionScreen from './screens/FaithAndReligionScreen';
import HowFaithReligionScreen from './screens/HowFaithReligionScreen';
import OrthodoxTewahedoScreen from './screens/OrthodoxTewahedoScreen';

const Stack = createNativeStackNavigator();

// 💡 እዚህ ጋር የትኛው ካርድ የትኛዋም ቦታ ላይ (1ኛ፣ 2ኛ፣ 3ኛ...) እንዲቀመጥ እንደሚፈልጉ ቅደም ተከተላቸውን መቀያየር ይችላሉ!
const menuItems = [
  { id: '1', title: 'ስለ ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ', icon: 'church', screen: 'About' },       // Row 1 (1 card)
  { id: '2', title: 'አዲስ ተመዝጋቢ', icon: 'account-plus', screen: 'Register' },          // Row 2 (2 cards - 1)
  { id: '3', title: 'ዕቅበተ እምነት (የኬዝ መመዝገቢያ)', icon: 'shield-check', screen: 'CaseForm' }, // Row 2 (2 cards - 2)
  { id: '4', title: 'ክፍላትና አገልግሎቶች', icon: 'grid', screen: 'Departments' },        // Row 3 (3 cards - 1)
  { id: '5', title: 'ማስታወቂያ', icon: 'bullhorn', screen: 'Announcements' },            // Row 3 (3 cards - 2)
  { id: '6', title: 'መሠረታዊ ትምህርቶች', icon: 'book-open-variant', screen: 'Books' },     // Row 3 (3 cards - 3)
  { id: '7', title: 'ኦርቶዶክሳዊ መልሶች', icon: 'help-circle-outline', screen: 'OrthodoxAnswers' }, // Row 4 (3 cards - 1)
  { id: '8', title: 'ሃይማኖተ አበው', icon: 'book-cross', screen: 'HaymanoteAbew' },       // Row 4 (3 cards - 2)
  { id: '9', title: 'መዝሙራት', icon: 'music-note', screen: 'Hymns' },                   // Row 4 (3 cards - 3)
  { id: '10', title: 'ግቢ ጉባኤውን ለመረዳት', icon: 'hand-heart', screen: 'Support' },     // Row 5 (3 cards - 1)
  { id: '11', title: 'የግቢ ጉባኤውን ታሪክ እና ደረጃ', icon: 'history', screen: 'History' }, // Row 5 (3 cards - 2)
  { id: '12', title: 'ጥያቄ አለዎት(ሀሳብና አስተያየት)?', icon: 'comment-question-outline', screen: 'Feedback' }, // Row 5 (3 cards - 3)
];

function HomeScreen({ navigation, isDarkMode, setIsDarkMode }) {
  const [modalVisible, setModalVisible] = useState(false);

  // Dynamic style variables for Light / Dark Mode
  const dynamicStyles = {
    bgContainer: isDarkMode ? '#121212' : '#FAF9F6',
    cardBg: isDarkMode ? '#1E1E1E' : '#FFF',
    textColor: isDarkMode ? '#FFF' : '#111',
    subTextColor: isDarkMode ? '#AAA' : '#666',
    iconCircleBg: isDarkMode ? '#2A3A38' : '#E0F2F1',
    iconColor: isDarkMode ? '#80CBC4' : '#004D40',
  };

  const handlePress = (screen, title) => {
    if (screen === 'About') {
      navigation.navigate('About');
    } else if (screen === 'Register') {
      navigation.navigate('Register');
    } else if (screen === 'CaseForm') {
      navigation.navigate('CaseForm');
    } else if (screen === 'Support') {
      navigation.navigate('Support');
    } else if (screen === 'Feedback') {
      navigation.navigate('Feedback'); 
    } else if (screen === 'HaymanoteAbew') {
      navigation.navigate('HaymanoteAbew');
    } else if (screen === 'OrthodoxAnswers') {
      navigation.navigate('OrthodoxAnswers');
    } else if (screen === 'Books') {
      navigation.navigate('BasicTeachings');
    } else {
      alert(`${title} ገጽ በቅርብ ቀን ይዘጋጃል!`);
    }
  };

  // ካርዶቹን እንደ ቅርጹ (1፣ ከዚያ 2፣ ከዚያ 3 እያለ) መክፈል
  const row1 = menuItems.slice(0, 1);   // 1ኛ ረድፍ: 1 ካርድ
  const row2 = menuItems.slice(1, 3);   // 2ኛ ረድፍ: 2 ካርዶች
  const row3 = menuItems.slice(3, 6);   // 3ኛ ረድፍ: 3 ካርዶች
  const row4 = menuItems.slice(6, 9);   // 4ኛ ረድፍ: 3 ካርዶች
  const row5 = menuItems.slice(9, 12);  // 5ኛ ረድፍ: 3 ካርዶች

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: dynamicStyles.bgContainer }]} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#004D40" />
      
      {/* Top Header Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.menuButton} onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons name="menu" size={26} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerBarTitle}>ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Welcome Banner */}
        <View style={[styles.welcomeBanner, { backgroundColor: dynamicStyles.bgContainer }]}>
          <Text style={styles.englishWelcome}>
            WELCOME TO WOLKITE UNIVERSITY GIBI GUBAYE SERVICE
          </Text>
          
          <View style={styles.logoWrapper}>
            <Image 
              source={require('./assets/wku-logo.jpg')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <Text style={[styles.amharicWelcome, { color: dynamicStyles.textColor }]}>
            እንኳን ወደ ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ መተግበሪያ በደህና መጡ
          </Text>
          <Text style={[styles.subHelpText, { color: dynamicStyles.subTextColor }]}>
            ምን ይፈልጋሉ፤ ምን እንረዳዎ?
          </Text>
        </View>

        {/* Structured Shape Container (1, 2, 3 pattern) */}
        <View style={styles.patternContainer}>
          
          {/* Row 1: 1 Card */}
          <View style={styles.row}>
            {row1.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={[styles.cardFull, { backgroundColor: dynamicStyles.cardBg }]} 
                activeOpacity={0.7}
                onPress={() => handlePress(item.screen, item.title)}
              >
                <View style={[styles.iconContainer, { backgroundColor: dynamicStyles.iconCircleBg }]}>
                  <MaterialCommunityIcons name={item.icon} size={28} color={dynamicStyles.iconColor} />
                </View>
                <Text style={[styles.cardTitle, { color: dynamicStyles.textColor }]} numberOfLines={2}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 2: 2 Cards */}
          <View style={styles.row}>
            {row2.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={[styles.cardHalf, { backgroundColor: dynamicStyles.cardBg }]} 
                activeOpacity={0.7}
                onPress={() => handlePress(item.screen, item.title)}
              >
                <View style={[styles.iconContainer, { backgroundColor: dynamicStyles.iconCircleBg }]}>
                  <MaterialCommunityIcons name={item.icon} size={28} color={dynamicStyles.iconColor} />
                </View>
                <Text style={[styles.cardTitle, { color: dynamicStyles.textColor }]} numberOfLines={2}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 3: 3 Cards */}
          <View style={styles.row}>
            {row3.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={[styles.cardThird, { backgroundColor: dynamicStyles.cardBg }]} 
                activeOpacity={0.7}
                onPress={() => handlePress(item.screen, item.title)}
              >
                <View style={[styles.iconContainer, { backgroundColor: dynamicStyles.iconCircleBg }]}>
                  <MaterialCommunityIcons name={item.icon} size={24} color={dynamicStyles.iconColor} />
                </View>
                <Text style={[styles.cardTitleSmall, { color: dynamicStyles.textColor }]} numberOfLines={2}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 4: 3 Cards */}
          <View style={styles.row}>
            {row4.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={[styles.cardThird, { backgroundColor: dynamicStyles.cardBg }]} 
                activeOpacity={0.7}
                onPress={() => handlePress(item.screen, item.title)}
              >
                <View style={[styles.iconContainer, { backgroundColor: dynamicStyles.iconCircleBg }]}>
                  <MaterialCommunityIcons name={item.icon} size={24} color={dynamicStyles.iconColor} />
                </View>
                <Text style={[styles.cardTitleSmall, { color: dynamicStyles.textColor }]} numberOfLines={2}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 5: 3 Cards */}
          <View style={styles.row}>
            {row5.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={[styles.cardThird, { backgroundColor: dynamicStyles.cardBg }]} 
                activeOpacity={0.7}
                onPress={() => handlePress(item.screen, item.title)}
              >
                <View style={[styles.iconContainer, { backgroundColor: dynamicStyles.iconCircleBg }]}>
                  <MaterialCommunityIcons name={item.icon} size={24} color={dynamicStyles.iconColor} />
                </View>
                <Text style={[styles.cardTitleSmall, { color: dynamicStyles.textColor }]} numberOfLines={2}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ScrollView>

      {/* Settings Modal */}
      <SettingsModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </SafeAreaView>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#004D40' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen 
            name="Home" 
            options={{ headerShown: false }} 
          >
            {(props) => <HomeScreen {...props} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
          </Stack.Screen>

          <Stack.Screen name="About" component={AboutScreen} options={{ title: 'ስለ ወልቂጤ ዩኒቨርሲቲ' }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'አዲስ ተመዝጋቢ' }} />
          <Stack.Screen name="CaseForm" component={CaseFormScreen} options={{ title: 'የኬዝ መመዝገቢያ ፎርም' }} />
          <Stack.Screen name="WolkiteInfo" component={WolkiteInfoScreen} options={{ title: 'ስለ ወልቂጤ ዩኒቨርሲቲ' }} />
          <Stack.Screen name="Support" component={SupportScreen} options={{ title: 'ግቢ ጉባኤውን ለመረዳት' }} />
          <Stack.Screen name="Feedback" component={QuestionSupportScreen} options={{ title: 'ጥያቄ አለዎት(ሀሳብና አስተያየት)?' }} />
          <Stack.Screen name="HaymanoteAbew" component={HaymanoteAbewScreen} options={{ title: 'ሃይማኖተ አበው' }} />
          <Stack.Screen name="OrthodoxAnswers" component={OrthodoxAnswersScreen} options={{ title: 'ኦርቶዶክሳዊ መልሶች' }} />

          {/* የንባብ ገጾች */}
          <Stack.Screen name="AlmesmayaScreen" component={AlmesmayaScreen} options={{ title: 'እልመስጦአግያ' }} />
          <Stack.Screen name="AmeHawaryatScreen" component={AmeHawaryatScreen} options={{ title: 'አመ ሐዋርያት' }} />
          <Stack.Screen name="HereneosScreen" component={HereneosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ሄሬኔዎስ' }} />
          <Stack.Screen name="AtifosScreen" component={AtifosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ አጢፎስ' }} />
          <Stack.Screen name="ArkyaosScreen" component={ArkyaosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ አርክያኦስ' }} />
          <Stack.Screen name="DiyonasayosScreen" component={DiyonasayosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዲዮናስዮስ' }} />
          <Stack.Screen name="IgnatyosScreen" component={IgnatyosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ እግናጥዮስ' }} />
          <Stack.Screen name="GergoriosScreen" component={GergoriosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ገርጎሪዮስ' }} />
          <Stack.Screen name="EskendrosScreen" component={EskendrosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ እስክንድሮስ' }} />
          <Stack.Screen name="SelesTuMietScreen" component={SelesTuMietScreen} options={{ title: 'ሃይማኖተ አበው ዘሠለስቱ ምዕት' }} />
          <Stack.Screen name="AtnatewosScreen" component={AtnatewosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ' }} />
          <Stack.Screen name="BasleyosScreen" component={BasleyosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ባስልዮስ' }} />
          <Stack.Screen name="Gergorios2Screen" component={Gergorios2Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ገርጎሪዮስ' }} />
          <Stack.Screen name="FeliksScreen" component={FeliksScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ፊሊክስ' }} />
          <Stack.Screen name="AbulidisScreen" component={AbulidisScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ አቡሊዲስ' }} />
          <Stack.Screen name="EyakndrosScreen" component={EyakndrosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ እያክንድሮስ' }} />
          <Stack.Screen name="SelbestrosScreen" component={SelbestrosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ስልብስትሮስ' }} />
          <Stack.Screen name="VetalisScreen" component={VetalisScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ቪጣሊስ' }} />
          <Stack.Screen name="EfremScreen" component={EfremScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ኤፍሬም' }} />
          <Stack.Screen name="EraqlisScreen" component={EraqlisScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ኤራቅሊስ' }} />
          <Stack.Screen name="SablinosScreen" component={SablinosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ሳብሊኖስ' }} />
          <Stack.Screen name="AfronyosScreen" component={AfronyosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ አፍሮንዮስ' }} />
          <Stack.Screen name="YohannesScreen" component={YohannesScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ' }} />
          <Stack.Screen name="TewodosyosScreen" component={TewodosyosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ' }} />
          <Stack.Screen name="EpifanyosScreen" component={EpifanyosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ኤጲፋንዮስ' }} />
          <Stack.Screen name="ZegergoriosScreen" component={ZegergoriosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዘገርጎሪዮስ' }} />
          <Stack.Screen name="YohannesAfeworkScreen" component={YohannesAfeworkScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ አፈወርቅ' }} />
          <Stack.Screen name="TewoflosScreen" component={TewoflosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ቴዎፍሎስ' }} />
          <Stack.Screen name="QerlosScreen" component={QerlosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ቄርሎስ' }} />
          <Stack.Screen name="Tewodosyos2Screen" component={Tewodosyos2Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ' }} />
          <Stack.Screen name="SayresScreen" component={SayresScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ሳይረስ' }} />
          <Stack.Screen name="YaqobScreen" component={YaqobScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ያዕቆብ' }} />
          <Stack.Screen name="BinyamiScreen" component={BinyamiScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ብንያሚ' }} />
          <Stack.Screen name="Yohannes2Screen" component={Yohannes2Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ' }} />
          <Stack.Screen name="KiriosScreen" component={KiriosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ኪሪኦስ' }} />
          <Stack.Screen name="Tewodosyos3Screen" component={Tewodosyos3Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ' }} />
          <Stack.Screen name="DiosqorosScreen" component={DiosqorosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ' }} />
          <Stack.Screen name="AbaGebrielScreen" component={AbaGebrielScreen} options={{ title: 'ሃይማኖተ አበው ዘአባ ገብርኤል' }} />
          <Stack.Screen name="QozmosScreen" component={QozmosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ቆዝሞስ' }} />
          <Stack.Screen name="Baslios2Screen" component={Baslios2Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ባስልዮስ' }} />
          <Stack.Screen name="Qozmos2Screen" component={Qozmos2Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ቆዝሞስ' }} />
          <Stack.Screen name="MaqaresScreen" component={MaqaresScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ መቃርስ' }} />
          <Stack.Screen name="Diosqoros2Screen" component={Diosqoros2Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ' }} />
          <Stack.Screen name="MinasScreen" component={MinasScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ሚናስ' }} />
          <Stack.Screen name="Diosqoros3Screen" component={Diosqoros3Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዲዮስቆሮስ' }} />
          <Stack.Screen name="Yohannes3Screen" component={Yohannes3Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ' }} />
          <Stack.Screen name="FiltawosScreen" component={FiltawosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ፊልታዎስ' }} />
          <Stack.Screen name="Egnatios2Screen" component={Egnatios2Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ እግናጥዮስ' }} />
          <Stack.Screen name="Atnatewos2Screen" component={Atnatewos2Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ' }} />
          <Stack.Screen name="Yohannes4Screen" component={Yohannes4Screen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዮሐንስ' }} />
          <Stack.Screen name="ZekariasScreen" component={ZekariasScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዘካርያስ' }} />
          <Stack.Screen name="SenutiyuScreen" component={SenutiyuScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ሰኑትዩ' }} />
          <Stack.Screen name="DionasyosScreen" component={DionasyosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዲዮናስዮስ' }} />
          <Stack.Screen name="AkristodolosScreen" component={AkristodolosScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ አክርስቶዶሎስ' }} />
          <Stack.Screen name="ZeyohannesScreen" component={ZeyohannesScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ዘዮሐንስ' }} />
          <Stack.Screen name="HabibScreen" component={HabibScreen} options={{ title: 'ሃይማኖተ አበው ዘቅዱስ ሐቢብ' }} />
          <Stack.Screen name="ZekariasYihyaScreen" component={ZekariasYihyaScreen} options={{ title: 'ሃይማኖተ አበው ዘዘካርያስ ይህያ' }} />
          <Stack.Screen name="QalGizetScreen" component={QalGizetScreen} options={{ title: 'ቃለ ግዘት' }} />
          <Stack.Screen name="SemaatScreen" component={SemaatScreen} options={{ title: 'ስምዓት' }} />
          <Stack.Screen name="BasicTeachings" component={BasicTeachingsScreen} options={{ title: 'መሠረታዊ ትምህርቶች' }} />
          <Stack.Screen name="ReligionNature" component={ReligionNatureScreen} options={{ title: 'የሃይማኖት ምንነትና አስፈላጊነት' }} />
          <Stack.Screen name="FaithAndReligion" component={FaithAndReligionScreen} options={{ title: 'እምነት እና ሃይማኖት' }} />
          <Stack.Screen name="HowFaithReligion" component={HowFaithReligionScreen} options={{ title: 'አንዲት እምነት / ሃይማኖት' }} />
          <Stack.Screen name="OrthodoxTewahedo"   component={OrthodoxTewahedoScreen}   options={{ title: 'ኦርቶዶክስ ተዋሕዶ' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerBar: {
    backgroundColor: '#004D40',
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 6,
    borderRadius: 8,
    marginRight: 12,
  },
  headerBarTitle: { color: '#FFF', fontSize: 17, fontWeight: 'bold' },
  welcomeBanner: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  englishWelcome: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006633',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  logoWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 12,
  },
  logoImage: { width: 110, height: 110 },
  amharicWelcome: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  subHelpText: { fontSize: 13, textAlign: 'center' },
  
  // Custom Pattern Layout Styles
  patternContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardFull: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardHalf: {
    width: '48%',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardThird: {
    width: '31.5%',
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  iconContainer: { 
    padding: 12, 
    borderRadius: 50, 
    marginBottom: 8 
  },
  cardTitle: { 
    fontSize: 13, 
    fontWeight: '600', 
    textAlign: 'center', 
    lineHeight: 18,
  },
  cardTitleSmall: { 
    fontSize: 11, 
    fontWeight: '600', 
    textAlign: 'center', 
    lineHeight: 15,
  },
});