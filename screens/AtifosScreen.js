import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

const atifosData = {
  title: "ሃይማኖተ አበው ዘቅዱስ አጢፎስ",
  chapter: "ምዕራፍ ፡ ፰",
  sections: [
    {
      sectionTitle: "ክፍል ፩",
      verses: [
        "፩ ፤ በራንጥያ ፡ ትባል ፡ በነበረ ፡ ጊዜ ፡ በቊስጥንጥንያ፡ ሊቀ ፡ ጳጳስነት ፡ የተሾመ ፡ የሐዋርያት ፡ ደቀ መዝሙራቸው ' አጢፎስ ፡ የልደትን ፡ ነገር ፡ በተናገረበት ፡ ድርሳኑ ፡ የባሕርይ ፡ ገዥ ፡ ክርስቶስ፡ ከዕለት ፡ ከሰዐት አስቀድሞ ፡ የነበረ ፡ ቀዳማዊ ሲሆን ፡ የሰዎችን ፡ ልደት ፡ ዛሬ ተወለደ ፡ አለ ሉቃ ፡ ፪ ፡ ፲፩ ። ",
        "፪ ፤ ከአብ ፡ የተወለደ ፤ ከአብ ፤ ከመንፈስ ቅዱስ ፡ ጋር ፡ አንድ ፡ የሚሆን ፡ የእግዚአብሔር ፡ ቃል ፡ ሰው ፡ ሆነ ፡ በመለኮቱ መዋረድ ፡ ሳይኖርበት በፈቃዱ ፡ ተዋርዶ ፡ የተገዥ ፡ ባሕርይን ፡ ተዋሐደ መዝ ፡ ፳፡፴፱)፡ ፪ ። ፺፫ (፺፪) - ፪ ። ሚክ '፭ • ፪ ። ዕብ ፡ ፲፫ ፰ ። ፊልጵ ፪ ፭፰ ። ",
        "፫ ፡ ሰው ፡ ሆይ!ሥጋ ፡ ያልነበረው ፡ እርሱ ፡ ለአንተ ፡ ብሎ ፡ ሥጋን ተዋሐደ ፡ ሰው ፡ ሆይ ! በመለኮቱ፡ አይዳሠሥ የነበረ ነፍስን ሥጋን የተዋሐደ ቃል ' ለአንተ ብሎ ተዳሠሠ ፤ በመለኮቱ ፡ ጥንት፡ የሌለው እርሱ፡ ጥንት፡ ያለውን ፡ ፍጹም ፡ ሥጋ፡ ተዋሐደ ። ዮሐ ፩ ፥ ፩፲፬ ። ሉቃ ፳፬ ፥ ፴፱ ። ፩ 'ዮሐ፡ ፩ ፡ ፩-፫።",
        "፬ ፥አይታይ ፡ የነበረው ፡ የሚታይ፡ ሥጋን ፡ ተዋሐደ ፡ የማይለወጥ ፡እርሱ በሚለወጥ፡ ሥጋ ፡ ተዳሠሠ የማይለወጥም ፡ አደረገው ። ፩ ፡ ጢሞ ፡ ፫ ፡ ፲፯ ። ሮሜ ፡ ፩ ፡ ፫",
        "፭ ፤ ባዕል ፡ እርሱ ፡ ከሌዊ ፡ ወገን ፡ በተወለደች ፡ በድንግል ፡ ማኅፀን ፡ አደረ ፡ ሰማይን ፡ በደመና ፍን እርሱ ፡ በጨርቅ ፡ ተጠቀለለ ፡ ንጉሥ ፡ በበረት ፡ ተጣለ ። ሉቃ ፡ ፩ ፡ ፶፩ና ፡ ፶፭ ። ፪ ፡ ፮ና፯ ። ፪ ፡ ቆሮ ፲ ፡ ፱ "
      ]
    }
  ]
};

export default function AtifosScreen({ navigation }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const currentSection = atifosData.sections[currentSectionIndex];

  const handleNext = () => {
    if (currentSectionIndex < atifosData.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    } else {
      navigation.navigate('HereneosScreen');
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{atifosData.title}</Text>
        <Text style={styles.chapterTitle}>{atifosData.chapter} - {currentSection.sectionTitle}</Text>
      </View>

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {currentSection.verses.map((verse, index) => (
          <Text key={index} style={styles.verseText}>{verse}</Text>
        ))}
      </ScrollView>

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