import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MiaphysitismScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>ነገረ ተዋሕዶ (Miaphysitism)</Text>
        

          <Text style={styles.paragraph}>
          
            <Text style={styles.sectionHeading}>ተዋሕዶ </Text>የሚለው ቃል በቅድስት ቤተክርስቲያን መዝገበ ቃላትና በሊቃውንት ትርጓሜ ሲተነተን፣ የሁለት ባሕርያት በአንድ አካልና በአንድ ባሕርይ የመጽናታቸውን ምስጢር የሚያመለክት ሰማያዊ ቃል ነው። ይህ ተዋሕዶ    
          </Text>
            <Text style={styles.paragraph}>እንበለ ቱሳሔ (ያለ መቀላቀል)፣</Text>
            <Text style={styles.paragraph}>እንበለ ውላጤ (ያለ መለወጥ)፣</Text>
            <Text style={styles.paragraph}>እንበለ በዐዴ (ያለ መለየት) እና፣</Text>
            <Text style={styles.paragraph}>እንበለ ትድምርት (ያለ መደረብ)</Text>
            <Text style={styles.paragraph}>የተፈጸመ መለኮታዊ ግብር ነው። አምላካዊው ቃል መለኮታዊ ባሕርዩን ሳይለቅና ሳይለውጥ፣ ትስብእትም (ሥጋም) ፍጡርነቱን ሳይተው በአንድ አካል ተዋሐዱ። ቅዱስ አትናቴዎስ እንዳስተማረው </Text>
            <Text style={styles.paragraph}>ይህ ታላቅ ምስጢር ለሰው ልጅ ድኅነት መሠረትና መጀመሪያ ነው። የአካል ተዋሕዶ ባይኖር ኖሮ፣ በሰውና በእግዚአብሔር መካከል ያለው የጥል ግድግዳ አይፈርስም ነበር። </Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>"ቃል ሥጋ ሆነ፤ ጸጋንና እውነትንም ተመልቶ በእኛ አደረ" (ዮሐንስ 1፡14)</Text>
          </View>
          <Text style={styles.paragraph}> ተብሎ እንደተጻፈ፣ ተዋሕዶ የክርስቶስን ፍጹም አምላክነት እና ፍጹም ሰውነት በአንድነት የምናምንበት ሐዋርያዊ መሠረት ነው።</Text>

                   <View style={styles.headingRow}>
                      <View style={styles.verticalBar} />
                      <Text style={styles.sectionHeading}>የሥጋዌ አስፈላጊነት</Text>
                    </View>
              <Text style={styles.paragraph}>ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ ሰው የሆነው ያለ ምክንያት አይደለም፤ የሰው ልጅን ከወደቀበት ጥልቅ የኃጢአት አዘቅትና ከዘለዓለማዊ ሞት ያድነው ዘንድ እንጂ። ይህ አስፈላጊነት ከመለኮታዊ ፍትሕና ከማይመረመር ቸርነቱ የሚመነጭ ነው። በፍትሐ መለኮት መሠረት በደልን ያደረገው ሰው በመሆኑ፣ መከራን ተቀብሎ ዕዳውን መክፈል ያለበት ሰው ነበር። ነገር ግን አዳምና ዘሩ ሁሉ በበደል ረክሰው፣ በኃጢአት ተይዘው ስለነበር፣ ዕዳውን መክፈል የሚችል ንጹሕ መሥዋዕት ከሰው ወገን አልተገኘም። </Text>
                  <Text style={styles.paragraph}>የሰው ልጅ በበደሉ ምክንያት ከፈጣሪው ጋር ያለው ግንኙነት ተቋርጦ ነበር። ቅዱስ ቄርሎስ እንዳስተማረው  </Text>
                    <View style={styles.quoteBox}>
                      <Text style={styles.quoteText}>"በሰውና በእግዚአብሔር መካከል ያለውን ክፍተት ሊሞላ የሚችል፣ የሰውን ባሕርይ ነሥቶ መለኮታዊ ኃይሉን የሚገልጥ አማኑኤል ብቻ ነው"።</Text>
                    </View>
                  <Text style={styles.paragraph}> ስለዚህ አምላክ በቸርነቱ ሰው ለመሆን ወሰነ፤ በፍትሑም መሠረት የሰው ልጅን ዕዳ የሰው ልጅን ባሕርይ ተላብሶ በሰውነቱ ከፈለ።</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>"እግዚአብሔር ዓለሙን እንዲሁ ወዶአልና፤ በአንድያ ልጁ የሚያምን ሁሉ የዘለዓለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ" (ዮሐንስ 3፡16)።</Text>
          </View>
          <Text style={styles.paragraph}>ይህም ማለት መለኮት ወደ ሥጋ ባሕርይ አልተለወጠም፣ ሥጋም ወደ መለኮት ባሕርይ አልተለወጠም፤ ነገር ግን በነገረ ተዋሕዶ አንድ ሆኑ።</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>«አንድ አካል ከሁለት አካል፣ አንድ ባሕርይ ከሁለት ባሕርይ (ያለ መደባለቅ እና ያለ መለወጥ)»</Text>
          </View>


             <View style={styles.headingRow}>
                      <View style={styles.verticalBar} />
                      <Text style={styles.sectionHeading}>የአዳም ውድቀትና የኃጢአት ዕዳ</Text>
                    </View>       
          <Text style={styles.paragraph}>
          እግዚአብሔር አምላክ ሰውን በምስሉና በአምሳሉ ፈጥሮ፣ የጸጋ ልብስ አልብሶ በገነት አኖረው። ነገር ግን አዳም በሰይጣን ምክር ተሸንፎ የፈጣሪውን ትእዛዝ ተላለፈ። ይህ በደል የባሕርይ ውድቀትን አመጣ። አዳም የጸጋ ልብሱን ተገፈፈ፣ ባሕርዩም በመከራና በሞት ቆሰለ። 
          </Text>
              <View style={styles.quoteBox}>
            <Text style={styles.quoteText}> "በአንድ ሰው ምክንያት ኃጢአት ወደ ዓለም ገባ፤ በኃጢአትም ሞት" (ሮሜ 5፡12)</Text>
          </View>
          <Text style={styles.paragraph}>እንዳለ ሐዋርያው፣ የአዳም በደል የሰው ልጅን ሁሉ ለሞትና ለጥፋት አሳልፎ ሰጠ።</Text>
          <Text style={styles.paragraph}>አዳም የበደለው ፈጣሪውን እግዚአብሔርን ስለሆነ፣ በደሉ ሰው በራሱ ሊከፍለው የማይችል ዕዳን አስከተለ። ፍጡር የሆነው ሰው ደግሞ ራሱን ከሞትና ከፍዳ ማዳን አይችልም። ስለዚህ ዕዳው መከፈል የነበረበት በበደለው በሰው ባሕርይ ሲሆን፣ መክፈል የሚችለው ግን አምላክ ብቻ ነበር፤ ስለዚህም "በደለኛ ሰው፣ ተበዳይ አምላክ" እንዲሉ አበው፣ አምላክ ሰው ሆኖ ዕዳውን ከፈለ። በዚህም ምክንያት እግዚአብሔር ወልድ የሰውን ባሕርይ ተዋሕዶ መገኘቱ ለሰው ልጅ ድኅነት ብቸኛው መንገድ ሆነ።</Text>

          <View style={styles.headingRow}>
                  <View style={styles.verticalBar} />
                  <Text style={styles.sectionHeading}>የመላእክት ፡ የነቢያትና የመሥዋዕቶች ውስንነት</Text>
                </View>
                  <Text style={styles.paragraph}>የአዳምን ዕዳ ሊከፍል የሚችል ከእግዚአብሔር ወልድ በቀር ሌላ ፍጡር ከቶ አልነበረም። መላእክት ምንም እንኳ ቅዱሳንና ረቂቃን ቢሆኑም፣ በባሕርያቸው ፍጥረታት በመሆናቸው የፈጣሪን ዕዳ ሊከፍሉ አይችሉም። ነቢያትም ቢሆኑ ራሳቸው </Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>"በኃጢአት ተወለድሁ፤ እናቴም በኃጢአት ጸነሰችኝ" (መዝሙር 50፡5)</Text>
          </View>
            <Text style={styles.paragraph}> በሚለው የአዳም ባሕርይ ውስጥ ያሉ በመሆናቸው፣ ሌላውን ሊያድኑ ቀርቶ ራሳቸው መድኃኒትን የሚሹ ነበሩ።</Text>
                  <Text style={styles.paragraph}>በብሉይ ኪዳን ይሰዉ የነበሩት በጎችና ፍየሎችም ለጊዜው የበደል ማስታወሻ እንጂ የኃጢአትን ሥር ሊነቅሉ አልቻሉም።</Text>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>"የኮርማዎችና የፍየሎች ደም ኃጢአትን ሊያስወግድ አይችልምና" (ዕብራውያን 10፡4)። </Text>
          </View>
            <Text style={styles.paragraph}>  እነዚህ ሁሉ ወደፊት ለሚመጣው እውነተኛው የእግዚአብሔር በግ ጥላና ምሳሌ ነበሩ። ስለዚህ ዓለምን ሁሉ ሊያድን የሚችል፣ ኃጢአት የሌለበትና መለኮታዊ ኃይል ያለው የክርስቶስ መሥዋዕትነት ብቻ አስፈላጊ ሆነ።</Text>

                <View style={styles.headingRow}>
                  <View style={styles.verticalBar} />
                  <Text style={styles.sectionHeading}>የክርስቶስ ማንነት ፡ ቀዳማዊና ድኅራዊ ልደት</Text>
                </View>
                  <Text style={styles.paragraph}>የጌታችን የመድኃኒታችን የኢየሱስ ክርስቶስ ማንነት በሁለት ልደቶች ይነገራል። እነዚህም ቀዳማዊ ልደት እና ድኅራዊ ልደት ተብለው ይታወቃሉ። ቅዱስ ሳዊሮስ እንዳስተማረው  </Text>
                <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}>"ወልድ ዋሕድ በአባቱ ዘንድ ያለ እናት፣ በድንግል ማርያምም ዘንድ ያለ አባት ተወለደ"።</Text>
                </View>
            <Text style={styles.paragraph}> ይህ ምስክርነት ክርስቶስ ፍጹም አምላክና ፍጹም ሰው መሆኑን ያረጋግጣል።</Text>

                <View style={styles.headingRow}>
                  <View style={styles.verticalBar} />
                  <Text style={styles.sectionHeading}>ቀዳማዊ ልደት</Text>
                </View>
                  <Text style={styles.paragraph}>ቀዳማዊ ልደት የሚባለው ወልድ ዋሕድ ከዘመናት በፊት፣ ከአለም መፈጠር አስቀድሞ ከአብ ባሕርይ የተወለደው ልደት ነው። ይህ ልደት ያለ እናት የተፈጸመ፣ መለኮታዊና ዘለዓለማዊ ነው። </Text>
                <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}>"አንተ ልጄ ነህ፤ እኔ ዛሬ ወለድሁህ" (መዝሙር 2፡7)</Text>
                </View>
            <Text style={styles.paragraph}>  ተብሎ እንደተጻፈ፣ ዛሬ የሚለው ቃል መለኮታዊው ልደት ዘለዓለማዊና ቀዳሚ የሌለው መሆኑን ያሳያል። ወልድ ከአብ ጋር በትክክል አንድ ባሕርይ ነው። </Text>

                <View style={styles.headingRow}>
                  <View style={styles.verticalBar} />
                  <Text style={styles.sectionHeading}>ድኅራዊ ልደት</Text>
                </View>
                  <Text style={styles.paragraph}>ድኅራዊ ልደት የሚባለው ደግሞ በዘመኑ ፍጻሜ፣ ዓለምን ለማዳን ከእመቤታችን ከቅድስት ድንግል ማርያም ያለ አባት በድንግልና የተወለደው ልደት ነው።  </Text>
                <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}>"የዘመኑ ፍጻሜ በደረሰ ጊዜ እግዚአብሔር ከሴት የተወለደውን ልጁን ላከ" (ገላትያ 4፡4)።</Text>
                </View>
            <Text style={styles.paragraph}>በዚህ ልደት አምላክ ሰው ሆነ፤ ሥጋን ተዋሐደ። ይህ ልደት ለሰው ልጅ ድኅነት ሲባል የተፈጸመ የትንቢት ፍጻሜ ነው። </Text>

                <View style={styles.headingRow}>
                  <View style={styles.verticalBar} />
                  <Text style={styles.sectionHeading}>አካላዊ ተዋሕዶ</Text>
                </View>
                  <Text style={styles.paragraph}>አካላዊ ተዋሕዶ የምንለው መለኮታዊው አካልና ሰብዓዊው አካል በቅድስት ድንግል ማርያም ማኅፀን አንድ የሆኑበትን ምስጢር ነው። ይህም ተዋሕዶ አንድ አካል፣ አንድ ባሕርይ (ተዋሕዶ) ያስገኘ ነው። ቅዱስ ቄርሎስ  </Text>
                <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}> "ከተዋሕዶ በኋላ የባሕርይ ሁለትነት የለም"</Text>
                </View>
            <Text style={styles.paragraph}>ብሎ እንደመሰከረው፣ ክርስቶስ አንድ አካል አንድ ባሕርይ ነው። በሥጋዌው መከራን የተቀበለው፣ የተራበውና የተጠማው፣ በመስቀል ላይ የሞተው ሥጋ የለበሰው ቃለ እግዚአብሔር ነው።</Text>
                  <Text style={styles.paragraph}>ይህ አንድ የተዋሐደ ባሕርይ ሲባል መለኮት ወደ ሥጋነት ተለወጠ ወይም ሥጋ ወደ መለኮትነት ተቀየረ ማለት አይደለም። ይልቁንም ባሕርያቱ ሳይለወጡና ሳይቀላቀሉ በአንድ አካል መጽናታቸውን ያመለክታል። </Text>
                <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}>"የክብር ጌታ ባልሰቀሉትም ነበር" (1ኛ ቆሮንቶስ 2፡8)</Text>
                </View>
            <Text style={styles.paragraph}> ተብሎ እንደተጻፈ፣ በመስቀል ላይ የሞተው የክብር ባለቤት የሆነው ራሱ እግዚአብሔር ወልድ በተዋሐደው ሥጋ ነው።</Text>

              <View style={styles.headingRow}>
                  <View style={styles.verticalBar} />
                  <Text style={styles.sectionHeading}>የሁለት ባሕርያት በአንድ አካል አንድነት ትርጓሜ</Text>
                </View>
                <Text style={styles.paragraph}>ቅድስት ቤተክርስቲያናችን የምታስተምረው ተዋሕዶ  የሚለው ትምህርት፣ ሁለት ባሕርያት ተዋሐደው አንድ የተዋሐደ ባሕርይ መሆናቸውን ያረጋግጣል። ይህ ማለት መለኮትና ትስብእት በአንድ አካል ውስጥ ፍጹም አንድነት ፈጥረዋል ማለት ነው። በዚህ ተዋሕዶ ውስጥ መለኮታዊ ግብሮችና ሰብዓዊ ግብሮች ለአንዱ አካል ይነገራሉ። መለኮት የሥጋን ባሕርይ ገንዘብ አደረገ፣ ሥጋም የመለኮትን ባሕርይ ገንዘብ አደረገ።</Text>
                <Text style={styles.paragraph}>ለዚህ ነው አምላክ ሞተ የምንለው፤ ሞት የሥጋ ባሕርይ ቢሆንም፣ ሥጋ ከመለኮት ጋር በተዋሕዶ አንድ ስለሆነ፣ ሞቱ ለአንዱ አካል ለወልድ ይነገራል። በተመሳሳይ መልኩ ሥጋ በባሕር ላይ ሄደ የምንለው፣ በባሕር ላይ መሄድ መለኮታዊ ኃይል ቢሆንም፣ ሥጋ ከመለኮት ጋር አንድ ስለሆነ ነው። ይህ የባሕርያት መለዋወጥ ሳይሆን፣ የተዋሕዶ ውጤት የሆነ የግብር አንድነት ነው።</Text>


              <View style={styles.headingRow}>
                  <View style={styles.verticalBar} />
                  <Text style={styles.sectionHeading}>ነገረ ክርስቶስ ላይ የተነሱ የኑፋቄ ትምህርቶች</Text>
                </View>
                <Text style={styles.paragraph}>በታሪክ ውስጥ ነገረ ተዋሕዶንና የጌታችንን ማንነት ለማዛባት የተለያዩ ጥንታውያን መናፍቃን ተነስተዋል። ቅድስት ቤተክርስቲያናችን እነዚህን ሁሉ ውድቅ በማድረግ ሐዋርያዊቷን እምነት ጠብቃ ቆይታለች።</Text>
                <Text style={styles.paragraph}><Text style={styles.sectionHeading}>አርዮስ፡</Text> ወልድ ፍጡር በመለከቱ ነው በማለት አምላክነቱን ክዷል። ቤተክርስቲያን ግን በኒቂያ ጉባኤ ከአብ ጋር በባሕርይ አንድ ነው በማለት አውግዛዋለች።</Text>
                <Text style={styles.paragraph}><Text style={styles.sectionHeading}>ንስጥሮስ፡ </Text>ክርስቶስን ለሁለት ከፍሎታል። መለኮትና ሥጋ በባሕርይ አልተዋሐዱም፣ መለኮት በሰውዬው ላይ እንደ ማደሪያ አደረ እንጂ በማለት</Text>
                  <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}>"ሁለት አካል፣ ሁለት ባሕርይ"</Text>
                  <Text style={styles.paragraph}> ብሏል። </Text>
                </View>
                  <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}>"ድንግል ማርያም የአምላክ እናት አይደለችም"</Text>
                </View>
                <Text style={styles.paragraph}>በማለት ታላቅ ድፍረት ተናግሯል። ቤተክርስቲያን በኤፌሶን ጉባኤ አውግዛዋለች።</Text>
                <Text style={styles.paragraph}>  <Text style={styles.sectionHeading}>አውጣኪ፡</Text> ተዋሕዶን በመዋጥ  ፈጽሞታል። ሥጋ በመለኮት ተዋጠ ወይም ጠፋ በማለት የክርስቶስን ሰብዓዊነት ክዷል። ሥጋው ሰማያዊ ነው በማለት ከድንግል የነሳውን ሥጋ ክዷል። ቤተክርስቲያን ይህንንም ትምህርት ትቃወማለች።</Text>
    
                <Text style={styles.paragraph}><Text style={styles.sectionHeading}>አቡሊናርዮስ፡</Text> ክርስቶስ ፍጹም ሰው አይደለም በማለት "መለኮት የሰውን ነፍስ ተክቶ ገባ" ብሎ አስተምሯል። ቤተክርስቲያን ግን ክርስቶስ ፍጹም ሰው (ነፍስና ሥጋ ያለው) መሆኑን በማረጋገጥ አውግዛዋለች።</Text>
                <Text style={styles.paragraph}><Text style={styles.sectionHeading}>ሰባልዮስ፡</Text> "አብ፣ ወልድ፣ መንፈስ ቅዱስ ስም እንጂ አካል የላቸውም፤ አንዱ አካል ለሦስት ተከፍሎ ይገለጣል" በማለት የሥላሴን ሦስትነት ክዷል።</Text>

                          <View style={styles.headingRow}>
                  <View style={styles.verticalBar} />
                  <Text style={styles.sectionHeading}>የኬልቄዶን ጉባኤ ልዩነትና አስተምህሮአችን</Text>
                </View>
                <Text style={styles.paragraph}>የኬልቄዶን ጉባኤ ልዩነት፡ በ451 ዓ.ም የተደረገው የኬልቄዶን ጉባኤ ክርስቶስን በሁለት ባሕርይ  የሚኖር በማለት ተዋሕዶን ለሁለት ከፍሏል። ይህ ጉባኤ የንስጥሮስን ትምህርት በሌላ መንገድ መልሶ ያመጣ ነው። የእኛ ቤተክርስቲያን ግን </Text>
                    <View style={styles.quoteBox}>
                  <Text style={styles.quoteText}>"ከሁለት ባሕርይ አንድ ባሕርይ"</Text>
                </View>
                  <Text style={styles.paragraph}> የሚለውን የቅዱስ ቄርሎስን ትምህርት ትከተላለች።</Text>
                <Text style={styles.paragraph}>ልዩነቱ በ  እና ከ  በሚሉ ቃላት ላይ ነው። ኬልቄዶናውያን ከተዋሕዶ በኋላም ባሕርያቱ ሳይዋሐዱ በሁለትነት ይኖራሉ ሲሉ፣ እኛ ግን ከተዋሕዶ በኋላ ባሕርያቱ ተዋሕደው አንድ የተዋሐደ ባሕርይ ሆነዋል እንላለን። ሁለት ባሕርይ ማለት ሁለት አካል ወደ ማለት ስለሚመራ፣ ነገረ ድኅነትን አደጋ ላይ ይጥላል ብለን እናምናለን። ክርስቶስ አንድ አካል አንድ ባሕርይ ነው እንጂ በሁለት ባሕርይ አይከፈልም። ስለዚህ ቤተክርስቲያናችን ፍጹም ተዋሕዶ በማለት ጸንታ ትኖራለች።</Text>
                
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { fontSize: 18, fontWeight: 'bold', color: '#004D40', textAlign: 'center', marginBottom: 20 },
  sectionBox: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#E0E0E0', elevation: 2 },
  headingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  verticalBar: { width: 4, height: 18, backgroundColor: '#004D40', borderRadius: 2, marginRight: 8 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#004D40' },
  paragraph: { fontSize: 14.5, color: '#333333', lineHeight: 24, marginBottom: 10, textAlign: 'justify' },
  quoteBox: { backgroundColor: '#E0F2F1', borderLeftWidth: 4, borderLeftColor: '#00796B', padding: 12, marginVertical: 10, borderRadius: 6 },
  quoteText: { fontSize: 14, fontStyle: 'italic', color: '#004D40', fontWeight: '600', textAlign: 'center' }
});