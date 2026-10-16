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
import OrthodoxAnswersScreen from './screens/OrthodoxAnswersScreen'; // ኦርቶዶክሳዊ መልሶች ገጽ
import SettingsModal from './components/SettingsModal';

const Stack = createNativeStackNavigator();

const menuItems = [
  { id: '1', title: 'ስለ ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ', icon: 'church', screen: 'About' },
  { id: '2', title: 'አዲስ ተመዝጋቢ', icon: 'account-plus', screen: 'Register' },
  { id: '3', title: 'ዕቅበተ እምነት (የኬዝ መመዝገቢያ)', icon: 'shield-check', screen: 'CaseForm' },
  { id: '4', title: 'ክፍላትና አገልግሎቶች', icon: 'grid', screen: 'Departments' },
  { id: '5', title: 'ማስታወቂያ', icon: 'bullhorn', screen: 'Announcements' },
  { id: '6', title: 'መሠረታዊ ትምህርቶች', icon: 'book-open-variant', screen: 'Books' },
  { id: '7', title: 'ኦርቶዶክሳዊ መልሶች', icon: 'help-circle-outline', screen: 'OrthodoxAnswers' },
  { id: '8', title: 'ሃይማኖተ አበው', icon: 'book-cross', screen: 'HaymanoteAbew' },
  { id: '9', title: 'መዝሙራት', icon: 'music-note', screen: 'Hymns' },
  { id: '10', title: 'ግቢ ጉባኤውን ለመረዳት', icon: 'hand-heart', screen: 'Support' },
  { id: '11', title: 'የግቢ ጉባኤውን ታሪክ እና ደረጃ', icon: 'history', screen: 'History' },
  { id: '12', title: 'ጥያቄ አለዎት(ሀሳብና አስተያየት)?', icon: 'comment-question-outline', screen: 'Feedback' },
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

        {/* Grid Dashboard - 2 Columns */}
        <View style={styles.gridContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.card, { backgroundColor: dynamicStyles.cardBg }]} 
              activeOpacity={0.7}
              onPress={() => {
                if (item.screen === 'About') {
                  navigation.navigate('About');
                } else if (item.screen === 'Register') {
                  navigation.navigate('Register');
                } else if (item.screen === 'CaseForm') {
                  navigation.navigate('CaseForm');
                } else if (item.screen === 'Support') {
                  navigation.navigate('Support');
                } else if (item.screen === 'Feedback') {
                  navigation.navigate('Feedback'); 
                } else if (item.screen === 'HaymanoteAbew') {
                  navigation.navigate('HaymanoteAbew');
                } else if (item.screen === 'OrthodoxAnswers') {
                  navigation.navigate('OrthodoxAnswers'); // ወደ ኦርቶዶክሳዊ መልሶች ገጽ ይወስዳል
                } else {
                  alert(`${item.title} ገጽ በቅርብ ቀን ይዘጋጃል!`);
                }
              }}
            >
              <View style={[styles.iconContainer, { backgroundColor: dynamicStyles.iconCircleBg }]}>
                <MaterialCommunityIcons name={item.icon} size={28} color={dynamicStyles.iconColor} />
              </View>
              <Text style={[styles.cardTitle, { color: dynamicStyles.textColor }]} numberOfLines={2}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Settings Modal - passes theme props */}
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

          <Stack.Screen 
            name="About" 
            component={AboutScreen} 
            options={{ title: 'ስለ ወልቂጤ ዩኒቨርሲቲ' }} 
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ title: 'አዲስ ተመዝጋቢ' }} 
          />
          <Stack.Screen 
            name="CaseForm" 
            component={CaseFormScreen} 
            options={{ title: 'የኬዝ መመዝገቢያ ፎርም' }} 
          />
          <Stack.Screen 
            name="WolkiteInfo" 
            component={WolkiteInfoScreen} 
            options={{ title: 'ስለ ወልቂጤ ዩኒቨርሲቲ' }} 
          />
          <Stack.Screen 
            name="Support" 
            component={SupportScreen} 
            options={{ title: 'ግቢ ጉባኤውን ለመረዳት' }} 
          />
          <Stack.Screen 
            name="Feedback" 
            component={QuestionSupportScreen} 
            options={{ title: 'ጥያቄ አለዎት(ሀሳብና አስተያየት)?' }} 
          />
          <Stack.Screen 
            name="HaymanoteAbew" 
            component={HaymanoteAbewScreen} 
            options={{ title: 'ሃይማኖተ አበው' }} 
          />
          <Stack.Screen 
            name="OrthodoxAnswers" 
            component={OrthodoxAnswersScreen} 
            options={{ title: 'ኦርቶዶክሳዊ መልሶች' }} 
          />
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
  gridContainer: { 
    padding: 12, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  card: {
    width: '48%', // 2 Columns
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  iconContainer: { 
    padding: 14, 
    borderRadius: 50, 
    marginBottom: 10 
  },
  cardTitle: { 
    fontSize: 12, 
    fontWeight: '600', 
    textAlign: 'center', 
    lineHeight: 16,
    height: 32
  },
});