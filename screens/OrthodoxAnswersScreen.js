import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// በምስል 1, 2 እና 3 ላይ ያሉ የነበሩት ክፍሎች በሙሉ
const categories = [
  { id: '1', title: 'ከፕሮቴስታንት ለሚነሱ ጥያቄዎች መልስ' },
  { id: '2', title: 'ከእስልምና ለሚነሱ ጥያቄዎች መልስ' },
  { id: '3', title: 'ከOnly Jesus (Oneness) ለሚነሱ ጥያቄዎች መልስ' },
  { id: '4', title: 'ለኤቴኢስቶችና ለዓለማውያን ፍልስፍናዎች መልስ' },
  { id: '5', title: 'ሃይማኖትና እምነት ላይ የሚነሱ አጠቃላይ ጥያቄዎች' },
  { id: '6', title: 'በትምህርተ ሥላሴ ላይ የሚነሱ ጥያቄዎች' },
  { id: '7', title: 'በነገረ ክርስቶስ ላይ የሚነሱ ጥያቄዎች' },
  { id: '8', title: 'በነገረ ድኅነት (ስለ መዳን) የሚነሱ ጥያቄዎች' },
  { id: '9', title: 'በወላዲተ አምላክ ማርያም ላይ የሚነሱ ጥያቄዎች' },
  { id: '10', title: 'በቅዱሳን፤ መላእክትና አማላጅነት ላይ የሚነሱ ጥያቄዎች' },
  { id: '11', title: 'ስለ ቤተ ክርስቲያንና ሐዋርያዊ ቅብብሎሽ የሚነሱ ጥያቄዎች' },
  { id: '12', title: 'በገድላትና ድርሳናት ላይ የሚነሱ ጥያቄዎች' },
  { id: '13', title: 'ስለ ጸሎትና ጸሎተ ፍትሐት የሚነሱ ጥያቄዎች' },
  { id: '14', title: 'በምሥጢረ ቁርባን ላይ የሚነሱ ጥያቄዎች' },
  { id: '15', title: 'በምሥጢረ ንስሐ ላይ የሚነሱ ጥያቄዎች' },
  { id: '16', title: 'ምሥጢረ ጥምቀት ላይ የሚነሱ ጥያቄዎች' },
];

export default function OrthodoxAnswersScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // የፍለጋ መቆጣጠሪያ (Search filter)
  const filteredCategories = categories.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* 1. ጥያቄ ፈልግ... (Search Bar) */}
      <View style={styles.searchBox}>
        <MaterialCommunityIcons name="magnify" size={24} color="#004D40" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="ጥያቄ ፈልግ..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <MaterialCommunityIcons name="close-circle" size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>

      {/* 2. የርዕሶች ዝርዝር (List Cards) */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {filteredCategories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => Alert.alert(item.title, 'በዚህ ርዕስ ስር ያሉ ጥያቄዎችና መልሶች በቅርብ ቀን ይጫናሉ!')}
          >
            {/* የጎን ቢጫ/ወርቃማ መስመር */}
            <View style={styles.goldLine} />

            {/* የመጽሐፍ አይከን */}
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="book-open-page-variant" size={22} color="#004D40" />
            </View>

            {/* የርዕሱ ጽሑፍ */}
            <Text style={styles.cardTitle}>{item.title}</Text>

            {/* የቀስት ምልክት */}
            <MaterialCommunityIcons name="chevron-right" size={24} color="#C5A059" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DDD',
    elevation: 1,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#222' },
  scrollContent: { padding: 16 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  goldLine: {
    width: 4,
    height: '120%',
    backgroundColor: '#C5A059',
    position: 'absolute',
    left: 0,
  },
  iconCircle: {
    backgroundColor: '#FFF8E1',
    padding: 10,
    borderRadius: 50,
    marginLeft: 8,
    marginRight: 12,
  },
  cardTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    lineHeight: 20,
  },
});