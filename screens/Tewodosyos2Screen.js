import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tewodosyos2Data = {
  title: "ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ",
  chapter: "ምዕራፍ ፴",
  sections: [
    {
      sectionTitle: "ክፍል ፩",
      verses: [
        "፩፤ የቅዱስ ቴዎዶስዮስ ትምህርትና ሃይማኖታዊ ምስክርነት በዚህ ክፍል ይጀምራል።",
        "፪፤ (የቅዱስ ቴዎዶስዮስን የትምህርት ጽሑፍ እዚህ ጋር ማካተት ይቻላል)..."
      ]
    }
  ]
};

export default function Tewodosyos2Screen({ navigation }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const currentSection = tewodosyos2Data.sections[currentSectionIndex];

  // የስልኩን Physical Back Button መቆጣጠሪያ
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('HaymanoteAbew');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  const handleNext = () => {
    if (currentSectionIndex < tewodosyos2Data.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    } else {
      // ለቀጣዩ አባት (ቅዱስ ሳይረስ) ገጽ ሲዘጋጅ ወደ እሱ ይወስዳል
      navigation.navigate('SayresScreen');
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    } else {
      navigation.navigate('QerlosScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{tewodosyos2Data.title}</Text>
        <Text style={styles.chapterTitle}>
          {tewodosyos2Data.chapter} - {currentSection.sectionTitle}
        </Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {currentSection.verses.map((verse, index) => (
          <Text key={index} style={styles.verseText}>{verse}</Text>
        ))}
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrevious}>
          <Text style={styles.buttonText}>‹ ቀደመ (Prev)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>ቀጣይ (Next) ›</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  header: { padding: 16, backgroundColor: '#004D40', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center' },
  chapterTitle: { fontSize: 14, color: '#FFD700', marginTop: 4, fontWeight: '600' },
  contentContainer: { flex: 1, padding: 18 },
  verseText: { fontSize: 16, color: '#222222', marginBottom: 16, lineHeight: 28, textAlign: 'left' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E0E0E0' },
  button: { backgroundColor: '#004D40', paddingVertical: 12, paddingHorizontal: 22, borderRadius: 8 },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
});