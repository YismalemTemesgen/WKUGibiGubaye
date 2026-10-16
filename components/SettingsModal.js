import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Switch, Clipboard, Alert, Linking, Share } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsModal({ visible, onClose, isDarkMode, setIsDarkMode }) {
  const [activeSubPage, setActiveSubPage] = useState(null); // null | 'support' | 'settings' | 'contact'
  const [selectedLanguage, setSelectedLanguage] = useState('am'); // 'am' | 'en' | 'om'

  // Reminders Toggle State
  const [dailyReading, setDailyReading] = useState(true);
  const [morningPrayer, setMorningPrayer] = useState(false);
  const [eveningPrayer, setEveningPrayer] = useState(false);
  const [nightPrayer, setNightPrayer] = useState(false);

  const accountNumber = "1000467682028";
  const telegramUrl = "https://t.me/WkuGibiGubaye";
  const tiktokUrl = "https://www.tiktok.com/@wkugibigubaye";

  const handleCopyAccount = () => {
    Clipboard.setString(accountNumber);
    Alert.alert("ተሳክቷል", "የአካውንት ቁጥሩ ተቀድቷል (Copied)!");
  };

  const handleOpenTelegram = () => {
    Linking.openURL(telegramUrl).catch(() => {
      Alert.alert("ስህተት", "የቴሌግራም መተግበሪያውን መክፈት አልተቻለም");
    });
  };

  const handleOpenTikTok = () => {
    Linking.openURL(tiktokUrl).catch(() => {
      Alert.alert("ስህተት", "የቲክቶክ መተግበሪያውን መክፈት አልተቻለም");
    });
  };

  const handleShareApp = async () => {
    try {
      await Share.share({
        message: 'እንኳን ወደ ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ መተግበሪያ በደህና መጡ! መተግበሪያውን ለማውረድ ይህንን ሊንክ ይጠቀሙ፦ https://t.me/WkuGibiGubaye',
      });
    } catch (error) {
      Alert.alert("ስህተት", "ማጋራት አልተቻለም");
    }
  };

  const dynamicStyles = {
    modalBg: isDarkMode ? '#121212' : '#FAF9F6',
    cardBg: isDarkMode ? '#1E1E1E' : '#FFF',
    textColor: isDarkMode ? '#EEE' : '#111',
    subTextColor: isDarkMode ? '#AAA' : '#666',
    bannerBg: isDarkMode ? '#00332C' : '#004D40',
    infoBoxBg: isDarkMode ? '#1E2D2A' : '#F5F5F5',
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={[styles.container, { backgroundColor: dynamicStyles.modalBg }]}>
        
        {/* Header Bar */}
        <View style={[styles.headerBar, { backgroundColor: dynamicStyles.bannerBg }]}>
          <Text style={styles.headerTitle}>
            {activeSubPage === 'support' ? "ግቢ ጉባኤውን ለመረዳት" : activeSubPage === 'settings' ? "ቅንብሮች" : activeSubPage === 'contact' ? "ስለ እኛ እና ያግኙን" : "ማስተካከያዎች"}
          </Text>
          <TouchableOpacity 
            style={styles.closeBtn} 
            onPress={() => {
              if (activeSubPage !== null) {
                setActiveSubPage(null);
              } else {
                onClose();
              }
            }}
          >
            <MaterialCommunityIcons name="close" size={24} color="#004D40" />
          </TouchableOpacity>
        </View>

        {/* 1. ቅንብሮች (Settings Page - Image 2 & 3) */}
        {activeSubPage === 'settings' && (
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            
            {/* 1.1 ማሳሰቢያዎች እና ማስታወቂያዎች */}
            <Text style={[styles.sectionHeaderTitle, { color: dynamicStyles.textColor }]}>ማሳሰቢያዎችና ማስታወቂያዎች</Text>
            <View style={[styles.cardBox, { backgroundColor: dynamicStyles.cardBg }]}>
              
              <View style={styles.reminderRow}>
                <View style={styles.bellIconBg}>
                  <MaterialCommunityIcons name="bell-ring-outline" size={22} color="#D84315" />
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={[styles.reminderTitle, { color: dynamicStyles.textColor }]}>የዕለታዊ ንባብ ማሳሰቢያ</Text>
                  <Text style={styles.reminderSub}>በየቀኑ መጽሐፍ ቅዱስን እንዲያነቡ ማሳሰቢያ ይደርስዎታል</Text>
                </View>
                <Switch 
                  value={dailyReading} 
                  onValueChange={setDailyReading}
                  trackColor={{ false: '#DDD', true: '#004D40' }}
                />
              </View>

              <View style={styles.timeRow}>
                <Text style={[styles.timeLabel, { color: dynamicStyles.textColor }]}>መደበኛ የማሳሰቢያ ሰዓት</Text>
                <View style={styles.timeBadge}>
                  <Text style={styles.timeText}>06:00</Text>
                </View>
              </View>
            </View>

            {/* 1.2 የጸሎት ማሳሰቢያዎች */}
            <Text style={[styles.sectionHeaderTitle, { color: dynamicStyles.textColor }]}>የጸሎት ማሳሰቢያዎች</Text>
            <View style={[styles.cardBox, { backgroundColor: dynamicStyles.cardBg }]}>
              
              {/* ጸሎተ ነግህ */}
              <View style={styles.reminderRow}>
                <View style={[styles.bellIconBg, { backgroundColor: '#FFF8E1' }]}>
                  <MaterialCommunityIcons name="weather-sunny" size={22} color="#F57F17" />
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={[styles.reminderTitle, { color: dynamicStyles.textColor }]}>ጸሎተ ነግህ</Text>
                  <Text style={styles.reminderSub}>የዕለቱ ውዳሴ ማርያም</Text>
                  <Text style={styles.timeSubText}>⏰ 6:00 AM • ጠዋት 12...</Text>
                </View>
                <Switch 
                  value={morningPrayer} 
                  onValueChange={setMorningPrayer}
                  trackColor={{ false: '#DDD', true: '#004D40' }}
                />
              </View>

              {/* ጸሎተ ሠርክ */}
              <View style={styles.reminderRow}>
                <View style={[styles.bellIconBg, { backgroundColor: '#FFF3E0' }]}>
                  <MaterialCommunityIcons name="white-balance-sunny" size={22} color="#E65100" />
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={[styles.reminderTitle, { color: dynamicStyles.textColor }]}>ጸሎተ ሠርክ</Text>
                  <Text style={styles.reminderSub}>ጸሎት በመዝሙረ ዳዊት</Text>
                  <Text style={styles.timeSubText}>⏰ 6:00 PM • ማታ 12...</Text>
                </View>
                <Switch 
                  value={eveningPrayer} 
                  onValueChange={setEveningPrayer}
                  trackColor={{ false: '#DDD', true: '#004D40' }}
                />
              </View>

              {/* ጸሎተ ንዋም */}
              <View style={styles.reminderRow}>
                <View style={[styles.bellIconBg, { backgroundColor: '#EDE7F6' }]}>
                  <MaterialCommunityIcons name="weather-night" size={22} color="#512DA8" />
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={[styles.reminderTitle, { color: dynamicStyles.textColor }]}>ጸሎተ ንዋም</Text>
                  <Text style={styles.reminderSub}>ቀኑን በጸሎት ይዝጉ</Text>
                  <Text style={styles.timeSubText}>⏰ 9:00 PM • ማታ 3 ሰ...</Text>
                </View>
                <Switch 
                  value={nightPrayer} 
                  onValueChange={setNightPrayer}
                  trackColor={{ false: '#DDD', true: '#004D40' }}
                />
              </View>

            </View>

            {/* 1.3 ቋንቋ (Amharic, English, Oromiffa) */}
            <Text style={[styles.sectionHeaderTitle, { color: dynamicStyles.textColor }]}>ቋንቋ</Text>
            <View style={[styles.cardBox, { backgroundColor: dynamicStyles.cardBg }]}>
              
              {/* አማርኛ */}
              <TouchableOpacity 
                style={styles.langRow} 
                onPress={() => setSelectedLanguage('am')}
              >
                <MaterialCommunityIcons name="web" size={22} color="#004D40" />
                <Text style={[styles.langText, { color: dynamicStyles.textColor }]}>አማርኛ</Text>
                {selectedLanguage === 'am' && (
                  <MaterialCommunityIcons name="check-circle" size={22} color="#004D40" />
                )}
              </TouchableOpacity>

              {/* English */}
              <TouchableOpacity 
                style={styles.langRow} 
                onPress={() => setSelectedLanguage('en')}
              >
                <MaterialCommunityIcons name="web" size={22} color="#004D40" />
                <Text style={[styles.langText, { color: dynamicStyles.textColor }]}>English</Text>
                {selectedLanguage === 'en' && (
                  <MaterialCommunityIcons name="check-circle" size={22} color="#004D40" />
                )}
              </TouchableOpacity>

              {/* Afaan Oromoo */}
              <TouchableOpacity 
                style={[styles.langRow, { borderBottomWidth: 0 }]} 
                onPress={() => setSelectedLanguage('om')}
              >
                <MaterialCommunityIcons name="web" size={22} color="#004D40" />
                <Text style={[styles.langText, { color: dynamicStyles.textColor }]}>Afaan Oromoo</Text>
                {selectedLanguage === 'om' && (
                  <MaterialCommunityIcons name="check-circle" size={22} color="#004D40" />
                )}
              </TouchableOpacity>

            </View>

          </ScrollView>
        )}

        {/* 2. ዋናው Settings ገጽ (Image 1) */}
        {activeSubPage === null && (
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            
            <View style={styles.profileHeader}>
              <View style={styles.churchIconCircle}>
                <MaterialCommunityIcons name="church" size={36} color="#004D40" />
              </View>
              <Text style={[styles.churchName, { color: dynamicStyles.textColor }]}>ወልቂጤ ግቢ ጉባኤ</Text>
              <Text style={styles.motto}>አንዲት ሃይማኖት፤ አንዲት መንፈሳዊ ቤት::</Text>
            </View>

            <View style={styles.divider} />

            <TouchableOpacity 
              style={[styles.settingRow, { backgroundColor: dynamicStyles.cardBg }]}
              onPress={() => setActiveSubPage('support')}
            >
              <View style={styles.rowLeft}>
                <View style={styles.iconBg}>
                  <MaterialCommunityIcons name="hand-heart" size={20} color="#004D40" />
                </View>
                <Text style={[styles.rowText, { color: dynamicStyles.textColor }]}>ግቢ ጉባኤውን ይደግፉ</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
            </TouchableOpacity>

            {/* ማስተካከያዎች (ቅንብሮች) */}
            <TouchableOpacity 
              style={[styles.settingRow, { backgroundColor: dynamicStyles.cardBg }]}
              onPress={() => setActiveSubPage('settings')}
            >
              <View style={styles.rowLeft}>
                <View style={styles.iconBg}>
                  <MaterialCommunityIcons name="tune" size={20} color="#004D40" />
                </View>
                <Text style={[styles.rowText, { color: dynamicStyles.textColor }]}>ማስተካከያዎች (ቅንብሮች)</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
            </TouchableOpacity>

            <View style={[styles.settingRow, { backgroundColor: dynamicStyles.cardBg }]}>
              <View style={styles.rowLeft}>
                <View style={styles.iconBg}>
                  <MaterialCommunityIcons name="white-balance-sunny" size={20} color="#004D40" />
                </View>
                <Text style={[styles.rowText, { color: dynamicStyles.textColor }]}>ብርሁ ገጽታ</Text>
              </View>
              <Switch 
                value={isDarkMode} 
                onValueChange={(val) => setIsDarkMode(val)}
                trackColor={{ false: '#DDD', true: '#004D40' }}
                thumbColor={isDarkMode ? '#FFF' : '#F4F3F4'}
              />
            </View>

            <TouchableOpacity 
              style={[styles.settingRow, { backgroundColor: dynamicStyles.cardBg }]}
              onPress={() => setActiveSubPage('contact')}
            >
              <View style={styles.rowLeft}>
                <View style={styles.iconBg}>
                  <MaterialCommunityIcons name="phone" size={20} color="#004D40" />
                </View>
                <Text style={[styles.rowText, { color: dynamicStyles.textColor }]}>ያግኙን</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.settingRow, { backgroundColor: dynamicStyles.cardBg }]}
              onPress={handleShareApp}
            >
              <View style={styles.rowLeft}>
                <View style={styles.iconBg}>
                  <MaterialCommunityIcons name="share-variant" size={20} color="#004D40" />
                </View>
                <Text style={[styles.rowText, { color: dynamicStyles.textColor }]}>ለሌሎች ያጋሩ</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
            </TouchableOpacity>

          </ScrollView>
        )}

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerBar: { paddingTop: 45, paddingBottom: 15, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  closeBtn: { backgroundColor: '#E0F2F1', borderRadius: 20, padding: 4 },
  scrollContent: { padding: 16 },
  profileHeader: { alignItems: 'center', marginVertical: 15 },
  churchIconCircle: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#C5A059', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', marginBottom: 8 },
  churchName: { fontSize: 20, fontWeight: 'bold' },
  motto: { fontSize: 13, color: '#C5A059', marginTop: 4 },
  divider: { height: 1, backgroundColor: '#DDD', marginVertical: 15 },
  settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 14, borderRadius: 14, marginBottom: 10, elevation: 1 },
  rowLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBg: { backgroundColor: '#E0F2F1', padding: 8, borderRadius: 50, marginRight: 12 },
  rowText: { fontSize: 15, fontWeight: '500' },
  sectionHeaderTitle: { fontSize: 15, fontWeight: 'bold', marginTop: 14, marginBottom: 8 },
  cardBox: { borderRadius: 16, padding: 14, marginBottom: 10, elevation: 1 },
  reminderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  bellIconBg: { padding: 8, borderRadius: 10, backgroundColor: '#FBE9E7' },
  reminderTitle: { fontSize: 14, fontWeight: 'bold' },
  reminderSub: { fontSize: 11, color: '#777', marginTop: 2 },
  timeSubText: { fontSize: 10, color: '#004D40', fontWeight: 'bold', marginTop: 3 },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTopWidth: 1, borderTopColor: '#EEE' },
  timeLabel: { fontSize: 13, fontWeight: '500' },
  timeBadge: { backgroundColor: '#E0F2F1', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  timeText: { color: '#004D40', fontWeight: 'bold', fontSize: 13 },
  langRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#EEE' },
  langText: { flex: 1, marginLeft: 12, fontSize: 14, fontWeight: 'bold' },
});