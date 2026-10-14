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
import SettingsModal from './components/SettingsModal';

const Stack = createNativeStackNavigator();

const menuItems = [
  { id: '1', title: 'ስለ ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ', icon: 'church', screen: 'About' },
  { id: '2', title: 'አዲስ ተመዝጋቢ', icon: 'account-plus', screen: 'Register' },
  { id: '3', title: 'ዕቅበተ እምነት (የኬዝ መመዝገቢያ)', icon: 'shield-check', screen: 'CaseForm' },
  { id: '4', title: 'ክፍላትና አገልግሎቶች', icon: 'grid', screen: 'Departments' },
  { id: '5', title: 'ማስታወቂያ', icon: 'bullhorn', screen: 'Announcements' },
  { id: '6', title: 'ትምህርቶች እና መጻሕፍት', icon: 'book-open-variant', screen: 'Books' },
  { id: '7', title: 'መዝሙራት', icon: 'music-note', screen: 'Hymns' },
  { id: '8', title: 'ግቢ ጉባኤውን ለመረዳት', icon: 'hand-heart', screen: 'Support' },
  { id: '9', title: 'የግቢ ጉባኤውን ታሪክ እና ደረጃ', icon: 'history', screen: 'History' },
  { id: '10', title: 'ሀሳብ አስተያየት ለመስጠት', icon: 'comment-text', screen: 'Feedback' },
];

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#004D40" />
      
      {/* Top Header Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.menuButton} onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons name="menu" size={28} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerBarTitle}>ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Welcome Banner */}
        <View style={styles.welcomeBanner}>
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

          <Text style={styles.amharicWelcome}>
            እንኳን ወደ ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ መተግበሪያ በደህና መጡ
          </Text>
          <Text style={styles.subHelpText}>
            ምን ይፈልጋሉ፤ ምን እንረዳዎ?
          </Text>
        </View>

        {/* Grid Dashboard */}
        <View style={styles.gridContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.card} 
              activeOpacity={0.7}
              onPress={() => {
                if (item.screen === 'About') {
                  navigation.navigate('About');
                } else if (item.screen === 'Register') {
                  navigation.navigate('Register');
                } else if (item.screen === 'CaseForm') {
                  navigation.navigate('CaseForm');
                } else if (item.screen === 'Support') {
                  navigation.navigate('Support'); // <-- 1. እዚህ ጋር ተጨምሯል
                } else {
                  alert(`${item.title} ገጽ በቅርብ ቀን ይዘጋጃል!`);
                }
              }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name={item.icon} size={28} color="#004D40" />
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Settings Modal */}
      <SettingsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
}

export default function App() {
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
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
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
    paddingVertical: 20,
    backgroundColor: '#FAF9F6',
  },
  englishWelcome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#006633',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 15,
  },
  logoWrapper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 15,
  },
  logoImage: { width: 120, height: 120 },
  amharicWelcome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
    marginBottom: 6,
  },
  subHelpText: { fontSize: 13, color: '#666', textAlign: 'center' },
  gridContainer: { 
    padding: 12, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  card: {
    backgroundColor: '#FFF',
    width: '48%',
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  iconContainer: { backgroundColor: '#E0F2F1', padding: 14, borderRadius: 50, marginBottom: 10 },
  cardTitle: { fontSize: 12, fontWeight: '600', color: '#222', textAlign: 'center', lineHeight: 18 },
});