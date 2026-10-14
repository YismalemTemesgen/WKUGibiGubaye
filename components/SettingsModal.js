import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsModal({ visible, onClose }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialCommunityIcons name="close" size={24} color="#004D40" />
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            
            {/* Header Section with Logo & Title */}
            <View style={styles.headerSection}>
              <View style={styles.logoCircle}>
                <MaterialCommunityIcons name="church" size={40} color="#004D40" />
              </View>
              <Text style={styles.appTitle}>ወልቂጤ ግቢ ጉባኤ</Text>
              <Text style={styles.appSubtitle}>አንዲት ሃይማኖት፤ አንዲት መንፈሳዊ ቤት::</Text>
              <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <MaterialCommunityIcons name="diamond-stone" size={16} color="#D4AF37" />
                <View style={styles.dividerLine} />
              </View>
            </View>

            {/* Menu List */}
            <View style={styles.menuContainer}>
              
              {/* ግቢ ጉባኤውን ይደግፉ */}
              <TouchableOpacity style={[styles.menuItem, styles.primaryMenuItem]}>
                <View style={styles.menuLeft}>
                  <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
                    <MaterialCommunityIcons name="hand-heart" size={22} color="#D4AF37" />
                  </View>
                  <Text style={[styles.menuText, { fontWeight: 'bold' }]}>ግቢ ጉባኤውን ይደግፉ</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
              </TouchableOpacity>

              {/* ማስተካከያዎች */}
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="tune" size={22} color="#004D40" />
                  </View>
                  <Text style={styles.menuText}>ማስተካከያዎች</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
              </TouchableOpacity>

              {/* ብሩህ ገጽታ (Theme Switch) */}
              <View style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="white-balance-sunny" size={22} color="#004D40" />
                  </View>
                  <Text style={styles.menuText}>ብሩህ ገጽታ</Text>
                </View>
                <Switch
                  value={isDarkMode}
                  onValueChange={setIsDarkMode}
                  trackColor={{ false: '#DDD', true: '#004D40' }}
                  thumbColor={isDarkMode ? '#D4AF37' : '#FFF'}
                />
              </View>

              {/* ያግኙን */}
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="phone-outline" size={22} color="#004D40" />
                  </View>
                  <Text style={styles.menuText}>ያግኙን</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
              </TouchableOpacity>

              {/* ለሌሎች ያጋሩ */}
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="share-variant-outline" size={22} color="#004D40" />
                  </View>
                  <Text style={styles.menuText}>ለሌሎች ያጋሩ</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
              </TouchableOpacity>

              {/* የግላዊነት ፖሊሲ */}
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="shield-check-outline" size={22} color="#004D40" />
                  </View>
                  <Text style={styles.menuText}>የግላዊነት ፖሊሲ</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
              </TouchableOpacity>

              {/* የቅጂ መብት */}
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={styles.iconBox}>
                    <MaterialCommunityIcons name="copyright" size={22} color="#004D40" />
                  </View>
                  <Text style={styles.menuText}>የቅጂ መብት</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right" size={22} color="#888" />
              </TouchableOpacity>

            </View>

            {/* Bottom QR Share Card */}
            <View style={styles.qrCard}>
              <MaterialCommunityIcons name="qrcode-scan" size={45} color="#004D40" />
              <View style={styles.qrTextContainer}>
                <Text style={styles.qrTitle}>ለጓደኛዎ ያጋሩ</Text>
                <Text style={styles.qrSubtitle}>Share with a friend</Text>
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 77, 64, 0.85)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FAF9F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '90%',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
    backgroundColor: '#E0F2F1',
    borderRadius: 50,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  headerSection: {
    alignItems: 'center',
    marginVertical: 10,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#D4AF37',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004D40',
  },
  appSubtitle: {
    fontSize: 13,
    color: '#00796B',
    marginTop: 4,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    marginVertical: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D4AF37',
  },
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  primaryMenuItem: {
    borderColor: '#D4AF37',
    borderWidth: 1.5,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    backgroundColor: '#E0F2F1',
    padding: 8,
    borderRadius: 20,
    marginRight: 14,
  },
  menuText: {
    fontSize: 15,
    color: '#333',
  },
  qrCard: {
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    borderColor: '#D4AF37',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  qrTextContainer: {
    marginLeft: 15,
  },
  qrTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D40',
  },
  qrSubtitle: {
    fontSize: 12,
    color: '#666',
  },
});