import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AboutScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Top Banner */}
      <View style={styles.bannerCard}>
        <View style={styles.bannerIconBox}>
          <MaterialCommunityIcons name="information-outline" size={28} color="#FFF" />
        </View>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>ስለ ወልቂጤ ዩኒቨርሲቲ እና ስለ ግቢ ጉባኤያችን</Text>
          <Text style={styles.bannerSubtitle}>እባክዎ ማወቅ የሚፈልጉትን ይምረጡ::</Text>
        </View>
      </View>

    {/* Option 1 Card */}
    <TouchableOpacity 
      style={styles.optionCard}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('WolkiteInfo')} // <-- እዚህ ጋር ነው የሚቀየረው!
    >
        <View style={styles.cardLeft}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="office-building" size={24} color="#FFF" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.optionLabel}>አማራጭ 1</Text>
            <Text style={styles.optionTitle}>ስለ ወልቂጤ ዩኒቨርሲቲ</Text>
            <Text style={styles.optionSubtitle}>About Wolkite University</Text>
          </View>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#008744" />
      </TouchableOpacity>

      {/* Option 2 Card */}
      <TouchableOpacity 
        style={styles.optionCard} 
        activeOpacity={0.7}
        onPress={() => Alert.alert('ግቢ ጉባኤያችን', 'ስለ ወልቂጤ ዩኒቨርሲቲ ግቢ ጉባኤ የሚገልጽ ዝርዝር መረጃ በቅርብ ቀን ይዘጋጃል!')}
      >
        <View style={styles.cardLeft}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="church" size={24} color="#FFF" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.optionLabel}>አማራጭ 2</Text>
            <Text style={styles.optionTitle}>ስለ ግቢ ጉባኤያችን በአጭሩ</Text>
            <Text style={styles.optionSubtitle}>About Our Gibi Gubaye</Text>
          </View>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#008744" />
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F5',
    padding: 16,
  },
  // Banner Styles
  bannerCard: {
    backgroundColor: '#008744',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  bannerIconBox: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#E8F5E9',
    fontSize: 12,
  },

  // Option Cards
  optionCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    elevation: 1,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#008744',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardTextContainer: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#008744',
    marginBottom: 2,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});