import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

const ameHawaryatData = {
  title: "አመ ሐዋርያት",
  chapter: "ምዕራፍ ፩፤",
  sections: [
    {
      sectionTitle: "ክፍል ፩፤",
      verses: [
        "፩፤ ሐዋርያት በእውነት ያስተማሩ የምሥጢረ ሥጋዌን የምሥጢረ ሥላሴን ነገር በተናገሩበት በዲድስቅልያ ዐሥራ ሁለቱ ሐዋርያት ጳውሎስ የጌታችን ወንድም የተባለ ያዕቆብ ሰባቱ ዲያቆናት ሰባ ሁለቱ አርድእት እንዲህ አሉ። የእግዚአብሔር አገልጋዮች የሰላም ልጆች እኛም በእውነት ጸንተው ለሚታዘዙ ይህን የከበረ ትምህርት እናስተምራለን፤ መዝ ፱፪ (፱፩)፡፮፤ ሮሜ ፰፡፮፯።",
        "፪፤ ሁሉን በፈጠረ በአንዱ አምላክ በጌታችን በፈጣሪያችን በመድኃኒታችን በኢየሱስ ክርስቶስ አባት በእግዚአብሔር አብ እናምናለን በባሕርይ አበሳጭ የለውምና፤ ዮሐ ፭፡፲፯ እና ፲፰፤ ፲፡፴፮፤ ማር ፩፡፩፤ ፪፡ ቆሮ ፩፡፫፤ መዝ ፯ (፹፱)፡፪።",
        "፫፤ አስቀድመን እንደተናገርን በዘመኑ ሁሉ በአበሳጭነት ያለ እርሱ ብቻ ነው እንጂ ጥንት ፍጻሜ የለውም።",
        "፬፤ የማይለወጥ ብርሃን ገንዘቡ ነው፤ ወደእርሱ መቅረብ የሚችለው የለም።",
        "፭፤ ሁለት አይደለም ሦስትም አይደለም ተጨማሪም የለውም ለዘላለም ጸንቶ የሚኖር አንድ ብቻ ነው እንጂ፤ ኤፌ ፬፡፭።",
        "፮፤ የማይታወቅ የተሠወረ አይደለምና በአውሬ በነቢያት ፈጽመው አውቀውታል እንጂ።",
        "፯፤ ሁሉን የፈጠረ ከሁሉ በላይ ያለ በፍጥረት ሁሉ ላይ ሥልጣን ያለው እንደሆነ፤ ዘዳግም ፴፪፡፮፤ መዝ ፴፫ (፴፪)፡፭ እና ፮፤ ዕብ ፩፡፩፤ ራእ ዮሐ ፲፮፡፫-፭።",
        "፰፤ ዓለም ሳይፈጠር የተወለደ የጌታችን የፈጣሪያችን የመድኃኒታችን ኢየሱስ ክርስቶስ አባቱ እግዚአብሔር አብ አንድ ነው። ወልድ ዋሕድ ከእርሱ ጋር ትክክል የሚሆን የባሕርይ አምላክ ነው።",
        "፱፤ ሠራዊትን ሢመታትን ሥልጣናትን ሁሉ የፈጠረ በኋላ ዘመን ሰው ይሆን ዘንድ የወደደ።",
        "፲፤ ያለዘርአ ብእሲ ንጽሕት ድንግል ከምትሆን ከእመቤታችን ማርያም ሥጋን ነሣ፤ ገላ ፬፡፬፤ ቆላ ፩፡፲፭-፲፰፤ ዮሐ ፩፡፩-፲፬።",
        "፲፩፤ ኃጢአት ሳይሠራ እንደ ሰው በየጥቂቱ አደገ፤ በአንደበቱ ሐሰት የለበትም። ሉቃ ፪፡፭፪፤ ኢሳይያስ ፶፫፡፱፤ ዮሐ ፰፡፬፮፤ ፩፡ ጴጥ ፪፡፳፪።",
        "፲፪፤ ከዚህ በኋላ በሥጋ የታመመ፤ ሞተ፤ በሦስተኛውም ቀን ከሙታን ተለይቶ ተነሣ።",
        "፲፫፤ ወደላከው ወደአብ ወደሰማይ ዐረገ፤ ኃይል ባለው ዕረፍት ተቀመጠ፤ መዝ ፬፯ (፬፮)፡፭ እና ፮፤ ማር ፲፮፡፲፱-፳፤ ፩፡ ጴጥ ፫፡፲፰-፳፪።",
        "፲፬፤ ከአብ የተገኘ መንፈስ ጽድቅ ᰰራቅሊጦስን ላከልን፤ ዓለሙን ያዳነ፤ ከአብ ከወልድ ጋር በቅድምና የነበረ፤ ዮሐ ፲፭፡፪፮ እና ፪፯፤ ፩፡ ዮሐ ፪፡፩።",
        "፲፭፤ እንግዲህ እግዚአብሔር የፈጠረው ሁሉ ንጹሕ እንደሆነ ርኩስ እንዳልሆነ እንናገራለን፤ ዘፍ ፩፡፩-፴፩፤ ፩፡ ጢሞ ፬፡፫-፭።",
        "፲፮፤ የሥጋ ሕይወት የምትሆን ነፍስ በሁሉ ንጽሕት ክብርት ናት፤ ሮሜ ፲፡፩-፲፩።",
        "፲፯፤ እኛስ ባል ንጹሕ እንደሆነ መወለድም ርኩሰት እንደሌለበት እንናገራለን፤ ዕብ ፲፫፡፬።",
        "፲፰፤ ሕዝብ ይበዙ ዘንድ እግዚአብሔር አዳምና ሔዋንን ፈጥሯልና፤ ዘፍ ፩፡፪፮-፪፰፤ ማቴ ፲፱፡፬።",
        "፲፱፤ ከሥጋ ጋር የማትሞት የማትለወጥ (የማትፈርስ የማትበሰብሳት) ነፍስ በሥጋችን እንዳለች ፈጽመን እንወቅ፤ ማቴ ፲፡፪፰።",
        "፳፤ ሃይማኖትን የካዱ የመናፍቃን ሥራቸውን ሁሉ መለየትን ሁሉ፤ ሕግ መለወጥንም እነርሱ በእኛ ዘንድ የተጠሉ ናቸውና፤ ፪፡ዮሐ ፩፡፲ እና ፲፩፤ ቲቶ ፩፡፲-፲፮፤ ፫፡፲።",
        "፳፩፤ ዳግመኛም የሞቱ የኃጥአንን የጻድቃንን ትንሣኤ እናምናለን፤ ሁሉ እንደ ሥራው የሚቀበልበት የፍርድ ቀን እንዳለ እናምናለን፤ መዝ ፯፪ (፯፩)፡፪፱-፴፩፤ ማቴ ፲፮፡፪፯-፪፰፤ ፩፡ ቆሮ ፲፭፡፬፪-᭭፰፤ ራእ፡ ዮሐ ፳፪፡፲፪።",
        "፳፬፤ ዳግመኛም ክርስቶስ ሰው በመሆኑ የተነሣ ምንም ምን ሕፀፅ እንደሌለበት እናምናለን፤ በእውነት ሰው የሆነ እርሱ እግዚአብሔር ቃል ነው እንጂ፤ ዮሐ ፩፡፩-፬፤ ፩፡ዮሐ ፩፡፩-፲።",
        "፳፫፤ ሊቀ ካህናት እርሱ ሰውን ከእግዚአብሔር ጋር አስታረቀ፤ ዕብ ፪፡፲፯ እና ፲፰።",
        "፳፬፤ እንግዲህ እንደ አይሁድ አንገዝዘር ኦሪትን ነው ያችን የሚፈጽም እንደመጣ እናውቃለን፤ ማቴ ፭፡፲፯-፲፰፤ ሮሜ ፪፡፪፯-፪፱፤ ፫፡፩ እና ፳፭-፪፱።",
        "፳፭፤ ሰዎች ሁሉ የእርሱን መምጣት ተስፋ የሚያደርጉት ከይሁዳ ከዕሴይ ባሕርይ የተገኘ ሥልጣን የባሕርይ የሚሆን ኢየሱስ ክርስቶስ፤ ኢሳይያስ ፱፡፮-፯፤ ሮሜ ፮፡፲፱፤ ዕብ ፯፡፲፬፤ ራእ፡ ዮሐ ፭፡፭።"
      ]
    },
    {
      sectionTitle: "ክፍል ፪፤",
      verses: [
        "፳፮፤ ዳግመኛም ትንሣኤ ሙታንን በተናገሩበት አንቀጽ በዲድስቅልያ የክርስቶስ ደቀ መዛሙርት የምንሆን እኛ ምእመናን በወንጌል እንዲህ እንስማለን አሉ፤ የታመነ ነው በተናገረውም ሐሰት የለበትም፤ መዝ ፴፱ (፴፰)፡፪፭-፭፯።",
        "፳፯፤ ዳዊት እግዚአብሔር በነገሩ ሁሉ የታመነ ነው፤ በሥራውም ሁሉ እውነተኛ ነው ብሏልና፤ መዝ ፻፵፭ (፻፵፬)፡፲፬፤ ዓአዙን ተመልከት።",
        "፳፰፤ ከንጽሕት ድንግል እመቤታችን ማርያም ሥጋን ፈጥሮ የተዋሐደ እርሱ ነው፤ ሰውን ሁሉ የፈጠረ እርሱ ነው፤ ከሙታን ተለይቶ የተነሣ ሙታንንም ሁሉ የሚያስነሣ እርሱ ብቻ ነው፤ ሮሜ ፩፡፫-፭。"
      ]
    }
  ]
};

export default function AmeHawaryatScreen({ navigation }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const currentSection = ameHawaryatData.sections[currentSectionIndex];

  const handleNext = () => {
    if (currentSectionIndex < ameHawaryatData.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    } else {
      alert("ቀጣዩ የቅዱስ አባት ትምህርት በቅርብ ቀን ይጫናል!");
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    } else {
      navigation.navigate('AlmesmayaScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ርዕስ (Header) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{ameHawaryatData.title}</Text>
        <Text style={styles.chapterTitle}>{ameHawaryatData.chapter} - {currentSection.sectionTitle}</Text>
      </View>

      {/* የንባብ ማሳያ (Content ScrollView) */}
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {currentSection.verses.map((verse, index) => (
          <Text key={index} style={styles.verseText}>{verse}</Text>
        ))}
      </ScrollView>

      {/* የዳስስ በተኖች (Next / Previous Buttons) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handlePrevious}
        >
          <Text style={styles.buttonText}>
            {currentSectionIndex === 0 ? '‹ ወደ እልመስማእያ' : 'ቀደመ (Prev)'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>
            {currentSectionIndex === ameHawaryatData.sections.length - 1 ? 'ቀጣይ ርዕስ ›' : 'ቀጣይ (Next)'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    padding: 16,
    backgroundColor: '#004D40',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  chapterTitle: {
    fontSize: 15,
    color: '#FFD700',
    marginTop: 4,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  verseText: {
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 14,
    lineHeight: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  button: {
    backgroundColor: '#004D40',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});