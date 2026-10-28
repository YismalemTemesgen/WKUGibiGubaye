import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DogmaAndCanonScreen({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.mainTitle}>ዶግማ እና ቀኖና : የቤተክርስቲያን መሠረት እና ሥርዓት</Text>

        <Text style={styles.paragraph}>
        የቤተክርስቲያን ትምህርተ ሃይማኖት የመለኮታዊ እውነት መገለጫ ሲሆን፣ በሁለት የማይነጣጠሉ ምሰሶዎች ላይ የተመሠረተ ነው፡- ዶግማ እና ቀኖና። እነዚህ ሁለት ጽንሰ ሐሳቦች የክርስትናን እምነት ምንነት፣ አወቃቀርና ተግባራዊ ገጽታዎች የሚገልጹ ሲሆን፣ የቤተክርስቲያንን ማንነትና ቀጣይነት ለመረዳት ቁልፍ ናቸው። ዶግማ የመለኮታዊ እውነት የማይለወጥ መሠረት ሲሆን፣ ቀኖና ደግሞ ይህንን እውነት በተግባር የምንኖርበት ሥርዓት ነው።
        </Text>

        <Text style={styles.sectionHeader}>1. ዶግማ : የመለኮት እውነት የማይለወጥ መሠረት</Text>
        <Text style={styles.paragraph}>
            <Text style={styles.sectionHeader}>ዶግማ </Text>
    የሚለው ቃል ከግሪክ ዶኬይን የመጣ ሲሆን፣ በጥሬው አመለካከት ወይም አስተሳሰብ ማለት ቢሆንም፣ በቤተክርስቲያናዊ ሥነ መለኮት ግን የእምነት መሠረት ወይም የመለኮታዊ እውነት መገለጥ የሚል ጥልቅ ትርጉም ይይዛል። ዶግማ በሰው የተደነገገ ሳይሆን፣ ከዘላለማዊው እግዚአብሔር የተገለጠ እውነት ነው። መገኛው እግዚአብሔር ነውና ከሰው ሊፈጠር አይችልም፡፡ ከእግዚአብሔር የተሰጠ እውነት ነው፡፡ በማንኛውም አካል (በሲኖዶስም ጭምር)፣ በየትኛውም ዘመን፣ በየትኛውም ሁኔታ የማይለወጥ፣ ወሰን የለሽ ማንነት አለው።
        </Text>
     <Text style={styles.paragraph}>ዶግማ የቤተክርስቲያን መሠረታዊ ትምህርተ ሃይማኖት ነው፡፡ ስለ ቅድስት ሥላሴ፣ ስለ ምሥጢረ ሥጋዌ (ክርስቶስ ፍጹም አምላክ ፍጹም ሰው መሆኑን፣ ከእመቤታችን ከቅድስት ድንግል ማርያም በድንግልና ተጸንሶ በድንግልና እንደተወለደ፣ እንደ ተሰቀለ በሦስተኛውም ቀን ከሙታን ተለይቶ እንደተነሣ፣ ዳግመኛ በክበበ ትስብእት እንደሚመጣ)፣ ስለ መንፈስ ቅዱስ፣ ስለ ምሥጢረ ጥምቀት፣ ስለ ምሥጢረ ቁርባን፣ ስለ ቤተክርስቲያንና ምሥጢራተ ቤተክርስቲያን፣ ስለ ክብረ ድንግል ማርያምና ክብረ ቅዱሳን የምናምነው እንጂ ማናችንም ልናሻሽለው አንችልም፡፡ እንኳንስ አንድ ግለሰብ ይቅርና ሲኖዶስም ቢሆን አለመለወጡን፣ አለመፋለሱን ይመረምራል እንጂ መጨመር ወይም መቀነስ አይችልም፡፡ ሐዋርያው ቅዱስ ጳውሎስ፡- </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ነገር ግን እኛ ብንሆን ወይም ከሰማይ መልአክ ከሰበክንላችሁ ወንጌል የሚበልጥ ወንጌልን ቢሰብክላችሁ፥ የተረገመ ይሁን።» (ገላትያ 1:8)</Text>
        </View>
        <Text style={styles.paragraph}>ያለውም ስለዚሁ ነው።</Text>

        <Text style={styles.subHeader}>ቅዱስ አትናቴዎስ፦</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ዶግማ የእምነት መሠረት ነው፤ በሰው ሊቀየር አይችልም፣ ምክንያቱም ከእግዚአብሔር የተገለጠ እውነት ነው።»</Text>
        </View>

        <Text style={styles.sectionHeader}>2. ቀኖና : የቤተክርስቲያን ሥርዓትና የሕይወት መመሪያ</Text>
        <Text style={styles.paragraph}>
            <Text style={styles.sectionHeader}>ቀኖና</Text>
           የሚለው ቃል ከግሪክ ካኖን የመጣ ሲሆን፣ ትርጉሙም መለኪያ፣ መስፈርት፣ ሕግ፣ ሥርዓት ወይም ደንብ ማለት ነው። በጥንታዊው የዕብራይስጥ ቋንቋም ቃኒህ ከሚለው ቃል ጋር ይዛመዳል፤ ይህም አንድን ነገር ለመለካት፣ ለመመዘን፣ ትክክል መሆኑንና አለመሆኑን ለመለየት የሚያገለግል መለኪያ ወይም መስፈርት ነው።
        </Text>
        <Text style={styles.paragraph}>ቤተክርስቲያን፣ እንደ አሐቲ ጕባኤ (አንዲት ጉባኤ) የምእመናን ስብስብ እንደመሆኗ መጠን፣ ውስጣዊ ሰላሟን፣ ሥርዓቷንና መንፈሳዊ እድገቷን ለማስጠበቅ የራሷ የሆነ ሕግጋት ያስፈልጋታል። አባቶች ያልተገራ ፈረስ የባለቤቱን ጥርስ ይሰብራል እንደሚሉት፣ ይህ የምእመናን ስብስብ ሰላማዊ እንዲሆን የሚያደርገው የቤተክርስቲያን ሕግ ወይም ሥርዓትም ቀኖና ይባላል። ቀኖና የእምነትን መሠረት (ዶግማን) ወደ ተግባራዊ ሕይወት የምንተረጉምበት ዝርዝር መመሪያ ነው።</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>«ሕግ የሌለበት ማኅበረሰብ እንደ መሪ የሌለው መርከብ ነው። ቤተክርስቲያን ደግሞ በሕግ የምትመራ፣ ሥርዓት ያላት፣ የመንፈስ ቅዱስ መኖሪያ ናት።» — ቅዱስ ዮሐንስ አፈወርቅ</Text>
        </View>
      <Text style={styles.paragraph}>ጠቅለል ባለ መልኩ ስንመለከተው ሕግ 2 ዓይነት ነው፤</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.sectionHeader}>1. ተፈጥሮአዊ ሕግ (መለኮታዊ ሕግ):</Text> ይህ ሕግ የእግዚአብሔር የፍጥረት ሥርዓት አካል ሲሆን፣ በሰው ዘንድ ሊለወጥ የማይችል ነው። ለምሳሌ ወንድ ከሴት ጋር መጋባት አምላካዊ ሕግ ነው። ግብረ ሰዶማዊነትም ይህንን የተፈጥሮ ሕግ የሚቃረን ነው። ፈረስና አህያ ተዳቅለው በቅሎን ይወልዳሉ፤ ነገር ግን በቅሎ ራሷን መተካት አለመቻሏ ከሕገ ተፈጥሮ ውጪ የተወለደች መሆኗን ይነግረናል።</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.sectionHeader}>2. የቤተክርስቲያን ሥርዓታዊ ሕግ (ቀኖና):</Text> ይህ ሕግ በቅዱስ ሲኖዶስ አማካኝነት በመንፈስ ቅዱስ መሪነት የሚወጣ ነው። ምንም እንኳን የስምምነት ሕግ ብለን ብንጠራውም፣ ቅዱስ ሲኖዶስን የሚመራው መንፈስ ቅዱስ ስለሆነ እንዲህ የሰዎች ስምምነት ነው ብለን የምንወስደው አይደለም። የስምምነቱ ሕግ ጊዜያዊም ለረዥም ጊዜ የሚቆይም ሊሆን ይችላል፡፡ ለምሳሌ ቅዱስ ሲኖዶስ ለ2 ሳምንት ጾምና ጸሎት ቢያውጅ ጊዜያዊ ቀኖና ይባላል፡፡ በዓመት 7 የአዋጅ አጽዋማት መኖራቸው ግን በሕይወት እስካለን ድረስ የሚገዛን ቀኖና ነው፡፡</Text>
      
        <Text style={styles.sectionHeader}>ቀኖና ቤተ ክርስቲያን ፡ የሕያው አካል መመሪያ</Text>
          <Text style={styles.paragraph}>ቤተክርስቲያንም መጀመሪያ አካባቢ ላይ ቀኖና የሚለውን ቃል ስትጠቀም የመጻሕፍቶቿን ዝርዝር፣ የሥርዓተ አምልኮቷን አፈጻጸም፣ የምሥጢራተ ቤተክርስቲያንን አፈጻጸም፣ የአንድ ክርስቲያን ሥነ ምግባር ምን መምሰል እንዳለበት ለመግለጥ ነበር፡፡ በተለይ አንዳንድ ከእምነትም ከምግባርም የሚወጡ ሰዎች ሲገኙ ምእመናን ግራ እንዳይጋቡ ሕገ ቤተክርስቲያን ይወጣ ነበር፡፡ እንደ ችግሩ መጠንም የሚወጣው ቀኖና ዳርቻው አጥቢያዊ፣ ወይም ሀገራዊ፣ ወይም ዓለማቀፋዊ ይዘት ሊኖረው ይችላል፡፡ ለምሳሌ በጉባኤ ኒቅያ የተደነገጉት ቀኖናት ዓለማቀፋዊ ይዘት ያላቸው ናቸው፡፡</Text>
          <Text style={styles.paragraph}>ቤተክርስቲያን ቀኖናዊት ካልሆነች እውነተኛ አይደለችም፡፡ እምነታችንን የምናከናውንበት ዝርዝር ቀኖና ከሌለ እምነታችን ትርጉም አልባ ነው፤ ምክንያቱም ቀኖና እምነታችንን እንዴት እንፈጽም? ለሚለው ጥያቄ መልስ የሚሰጥ ዝርዝር አፈጻጸም ነውና፡፡ የቤተክርስቲያን ቀኖናት የተሰጡት በሐዋርያት ነው፡፡ የቀኖና ቤተክርስቲያን ዋና ዓላማም ሰዎችን ሥርዓት አስይዞ የዘለዓለም ሕይወት እንዲኖራቸው ማድረግ ነው፡፡</Text>
            <Text style={styles.paragraph}>ሕግ ከጽዮን ይወጣል (2:3)</Text>
            <Text style={styles.paragraph}>እንደተባለ የሕግ ምንጭ ቤተክርስቲያን ነች፡፡ ሕግ አውጪ ብቻ ሳትሆን ሕግ ተርጓሚዋና ሕግ አስፈጻሚዋም እርሷ ራሷ ናት፡፡ ሕጓም ዓለምአቀፋዊ ዳርቻ አለው፡፡ ጾም የቤተክርስቲያን ሕግ ነው፡፡ አፈጻጸሙ ግን እንደየቦታውና እንደየሰዉ ሁኔታ ሊለያይ ይችላል፡፡ እንዲህ ዓይነት ለየት ያለ ቀኖና የሚያወጣው የቤተክርስቲያኒቱ ሕጋዊ አካል ብቻ ነውና ይህ እኮ ቀኖና ነው፤ ባናደርገውም ምንም ችግር የለውም ከሚለው ግላዊ አስተሳሰብ ልንጠነቀቅ ያስፈልጋል፡፡</Text>
        <Text style={styles.sectionHeader}>የቀኖና ቤተ ክርስቲያን ልዩ ባሕርያት</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ሥልጣናዊ አመጣጥ:</Text> ቀኖና በሥልጣን ባለው አካል (በቅዱስ ሲኖዶስ) በመንፈስ ቅዱስ መሪነት የሚደነገግ ነው።</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>መንፈሳዊ ዓላማ:</Text> ዋና ዓላማው ሰውን ሁሉ ወደ መንግሥተ እግዚአብሔር ማፍለስ ስለሆነ፣ ዓለማዊ ይዘት የለውም።</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ቀላልነትና ተገቢነት:</Text> ቀኖና የሰው ልጅ ከሚችለው በላይ ሸክምን አይጭንም፤ ሸክሜ ቀሊል ነው (11:29) እንዲል፡፡</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ሸላሚነትና አስተማሪነት:</Text> ቀኖና የሸላሚነትና የቀጪነት ሥልጣን አለው፡፡</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>የመለኪያነት ባሕርይ:</Text>አምልኮአዊ ይዘት: በውስጡ ጾም፣ ጸሎት፣ ምጽዋት እና የመሳሰሉትን የአምልኮ ተግባራትን ሁሉ ያካትታል፡፡</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>የመለኪያነት ባሕርይ:</Text>ቀኖና የመመዘን ጠባይ አለው፡፡</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>አንድነትና ቀጣይነት: </Text> ከሐዋርያት ዘመን ጀምሮ በተለያዩ ጉባኤዎችና በቅዱሳን አበው አማካኝነት የተሰበሰበ ነው።</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>መለኮታዊ ዓላማ: </Text> የሚወጣው እግዚአብሔርን ደስ ለማሰኘት ብቻ ነው፡፡</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ፍጹምነትና ግልጽነት: </Text> ጥቁሩን ጥቁር ነጩንም ነጭ የሚል እንጂ የተድበሰበሰ ቀኖና ቤተክርስቲያን አታወጣም።</Text>
        <Text style={styles.sectionHeader}>የቀኖና ምንጮች</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ሀ) የሐዋርያት ሲኖዶስ: </Text>እነዚህ መጻሕፍት 81 ተብለው ከሚታወቁት መጻሕፍት የሚካተቱ ሲሆኑ፣ እነርሱም መጽሐፈ ዱድስቅልያና መጻሕፍተ ሲኖድሳት ናቸው፡፡  </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>እናስተውል!</Text> የጌታ ትእዛዛት በሙሉ ዶግማ ነው፡፡ ጾም፣ ጸሎት፣ ጥምቀት፣ ቁርባን፣ ንስሐ ዶግማ ነው፡፡ ቀኖና የሚሆነው ዝርዝር አፈጻጸሙ ላይ ሲሆን ነው፡፡  </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ለ) ዓለም አቀፍ ጉባኤያት:</Text> ኦርየንታል ኦርቶዶክሶች የምንቀበላቸው 3ቱ ጉባኤያት ጉባኤ ኒቅያ (በ325 ዓ.ም.)፣ ጉባኤ ቁስጥንጥንያ (በ381 ዓ.ም.) እና ጉባኤ ኤፌሶን (በ431 ዓ.ም.) ናቸው፡፡ </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>ሐ) ብሔራውያን ጉባኤያት:</Text> ከዓለምአቀፋውያን ጉባኤያት በተጨማሪ በየአካባቢው ጉባኤያት ሊደረጉ ይችላሉ፡፡ ለምሳሌ በቅዱስ ያሬድ ዜማ ላይ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ውሳኔ በብሔራዊ ጉባኤ የተወሰነ ነው፡፡  </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>መ) የቅዱሳን አበው ቀኖናት: </Text>ቤተክርስቲያን የእኔ ብላ የተቀበለቻቸው ቀኖናት ናቸው፡፡ ለምሳሌ ሥርዓተ ምንኩስና እና ስለ ቅዱስ ቁርባን የተናገረው ሥርዓት ተጠቃሾች ናቸው፡፡  </Text>
      
        <Text style={styles.sectionHeader}>የቀኖና ቤተ ክርስቲያን ይዘት</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>1. የቅዱሳት መጻሕፍት ቀኖና:</Text> የመጻሕፍቱን እውነተኛነትንና አምላካዊነትን የተመለከተ ነው። እነዚህን መጻሕፍት ሰፍረው የሰጡንም ኦርቶዶክሳውያን አባቶቻችን ናቸው፡፡ በተለይም እነ ቅዱስ ሄሬኔዎስ፣ ቅዱስ አግናጥዮስ ምጥው ለአንበሳ፣ ቅዱስ አትናቴዎስ በዚህ ተጠቃሽ ናቸው፡፡</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>እናስተውል! </Text>በኦርቶዶክሳዊት ቤተክርስቲያን አስተምህሮ ዳትሮካኖኒካል የሚባሉ መጻሕፍት የለም፡፡ እነዚህ መጻሕፍት ከመጀመሪያውኑ የነበሩ እንጂ በኋላ የተጨመሩ አይደለም፡፡ እንዲሁም እነዚህን መጻሕፍት አፖክሪፋ አንላቸውም ። </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}> 2. የቅዱሳን ቀኖና: </Text>ቤተክርስቲያን ቀኖና ቅዱሳን ማውጣት ጀመረች ማለት ለቅድስናቸው ዕውቅናን ሰጠች ለማለት ነው፡፡ አንድን ቅዱስ ቅዱስ ለማለት መስፈርቶች አሉት፡- ክርስቲያን መሆን፣ በምግባር የታወቁ፣ ገቢረ ተአምራትን የፈጸሙ፣ ዓፅማቸው ሕሙማንን ከፈወሰ፣ ለየት ያለ አገልግሎት ለቤተክርስቲያን ካበረከቱ ናቸው፡፡</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>3. የሥርዓተ አምልኮ ቀኖና:</Text> በቤተክርስቲያን ውስጥ የምንፈጽመው ማንኛውም ዓይነት መንፈሳዊ ድርጊት የአምልኮ ባሕርይ አለው፡፡ ቀኖናና አምልኮ በእጅጉ የተቆራኙ መሆናቸውን አውቀን ልንጠነቀቅ ይገባናል፡፡ </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>4. ሥርዓተ ሲመትን የሚመለከት ቀኖና:</Text> ስዩማነ ካህናትን ለመሾም የራሱ የሆነ መስፈርት አለው፡፡ ይህን መስፈርት ሳያሟላ ማንም ራሱን ሊሾም አይችልም፡፡ </Text>
      <Text style={styles.sectionHeader}>አጠቃላይ የቀኖና አስፈላጊነት</Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>የአንድነት ዋስ:</Text> ቀኖና ቤተክርስቲያን በቤተክርስቲያን ውስጥ ሊኖሩ የሚችሉ አለመስማማቶችን የሚፈታ ነው፡፡ </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>የአካል ሥርዓት:</Text> እኛ ክርስቲያኖች የአንድ ክርስቶስ ብልቶች ነን፡፡ ቀኖና ቤተክርስቲያን ይህ አንድነት እንዲኖር ይረዳል፡፡ </Text>
        <Text style={styles.paragraph}><Text style={styles.sectionHeader}>መብትና ግዴታ:</Text> እንደ ቤተክርስቲያን ልጅነታችን መብታችንና ግዴታችንን ለይቶ የሚነግረን ነው፡፡ </Text>
      <Text style={styles.paragraph}>በመሆኑም፣ ዶግማ የቤተክርስቲያን የማትለወጥ የእምነት መሠረት ሲሆን፣ ቀኖና ደግሞ ይህንን እምነት በተግባር የምንኖርበት፣ ሥርዓት ያለው የሕይወት መንገድ ነው። ሁለቱም የክርስትናን እውነት ለመጠበቅ ወሳኝ ሚና ይጫወታሉ።</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContainer: { padding: 16, paddingBottom: 30 },
  mainTitle: { fontSize: 20, fontWeight: 'bold', color: '#004D40', marginBottom: 16, textAlign: 'center' },
  sectionHeader: { fontSize: 16, fontWeight: 'bold', color: '#00796B', marginTop: 16, marginBottom: 8 },
  subHeader: { fontSize: 14.5, fontWeight: 'bold', color: '#004D40', marginTop: 12, marginBottom: 4 },
  paragraph: { fontSize: 14.5, color: '#333333', lineHeight: 22, marginBottom: 10 },
  quoteBox: {
    backgroundColor: '#E0F2F1',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#004D40',
    marginVertical: 8,
  },
  quoteText: { fontSize: 14, fontStyle: 'italic', color: '#004D40', lineHeight: 20 },
});