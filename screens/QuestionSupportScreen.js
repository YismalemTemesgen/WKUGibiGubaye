import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function QuestionSupportScreen() {
  const [activeTab, setActiveTab] = useState('tiyakewoch'); // 'tiyakewoch' | 'teyik' | 'melis'
  const [questionText, setQuestionText] = useState('');
  
  // ተጠቃሚው አንዴ በ Google ከገባ Login ሆኖ ይቆያል
  const [userProfile, setUserProfile] = useState(null); 

  // ለሁሉም አዲስ እና ነባር ተጠቃሚዎች የሚታዩ የጥያቄዎችና የመልሶች ስብስብ
  const [questions, setQuestions] = useState([
    { 
      id: '1', 
      title: 'ቃልን በጸሎትና በስግደት እንዴት መጠበቅ እንችላለን?', 
      author: 'ዮሐንስ ተስፋዬ', 
      date: 'ጥቅምት 2017', 
      answered: true, 
      answer: 'ቃለ እግዚአብሔርን ሁልጊዜ በማንበብ፣ በመጸለይ እና በስግደት መጠበቅ ይቻላል።' 
    },
    { 
      id: '2', 
      title: 'የግቢ ጉባኤው የሳምንት መርሃ ግብር ሰዓት ስንት ነው?', 
      author: 'ማርታ አለሙ', 
      date: 'ትናንት', 
      answered: false, 
      answer: '' 
    },
    { 
      id: '3', 
      title: 'በካምፓስ ውስጥ የህይወት ፈተና ሲያጋጥመን የሚረዱ መጻሕፍት የትኞቹ ናቸው?', 
      author: 'አቤል ከበደ', 
      date: 'ከ 3 ቀን በፊት', 
      answered: true, 
      answer: 'የአባቶች ምክር እና የህይወት መመሪያዎችን የያዙ ኦርቶዶክሳዊ መጻሕፍትን ከግቢ ጉባኤው ቤተ መጻሕፍት ማግኘት ይችላሉ።' 
    }
  ]);

  // በ Google አካውንት የመግባት ሂደት (Login)
  const handleGoogleLogin = () => {
    // እውነተኛ የ Google አካውንት መረጃ ማስመሰያ
    const mockGoogleUser = {
      name: 'ተማሪ/አባል',
      email: 'user@gmail.com',
    };
    setUserProfile(mockGoogleUser);
    Alert.alert('ተሳክቷል', 'በ Google አካውንትዎ በስኬት ገብተዋል!');
  };

  // አዲስ ጥያቄ መላኪያ
  const handlePostQuestion = () => {
    if (!questionText.trim()) {
      Alert.alert('ትኩረት', 'እባክዎን ጥያቄዎን ያስገቡ!');
      return;
    }

    const newQ = {
      id: Date.now().toString(),
      title: questionText,
      author: userProfile?.name || 'የግቢ ጉባኤ አባል',
      date: 'አሁን',
      answered: false,
      answer: ''
    };

    setQuestions([newQ, ...questions]);
    setQuestionText('');
    Alert.alert('ተልኳል', 'ጥያቄዎ በስኬት ተመዝግቧል! እሁድ በመምህራን መልስ ይሰጥበታል።');
    setActiveTab('tiyakewoch'); // ወደ ጥያቄዎች ዝርዝር ገጽ ይመልሰዋል
  };

  return (
    <View style={styles.container}>
      
      {/* 1. ዋናው የይዘት ማሳያ ክፍል */}
      <View style={styles.mainContent}>
        
        {/* ሀ. ጥያቄዎች Tab - ሁሉም ሰው የቀደሙ ጥያቄዎችን የሚያይበት */}
        {activeTab === 'tiyakewoch' && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topBanner}>
              <Text style={styles.bannerTitle}>ጥያቄ ይጠይቁ - መልስ ያግኙ</Text>
              <Text style={styles.bannerSub}>ጥያቄዎች በመምህራን እሁድ እሁድ ይመለሳሉ!</Text>
            </View>

            {questions.map((item) => (
              <View key={item.id} style={styles.questionCard}>
                <Text style={styles.qTitle}>{item.title}</Text>
                <Text style={styles.qMeta}>በ {item.author} • {item.date}</Text>
                
                {item.answered ? (
                  <View style={styles.answerContainer}>
                    <Text style={styles.answerHeader}>💡 የመምህራን መልስ፦</Text>
                    <Text style={styles.answerBody}>{item.answer}</Text>
                  </View>
                ) : (
                  <View style={styles.pendingContainer}>
                    <Text style={styles.pendingText}>⏳ ጥያቄው ተመዝግቧል (እሁድ በመምህራን ይመለሳል)</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        )}

        {/* ለ. ጠይቅ Tab - ጥያቄ መጠየቂያ */}
        {activeTab === 'teyik' && (
          <View style={styles.centerContainer}>
            {!userProfile ? (
              /* ገና ካልገባ የ Google መግቢያ ያሳያል */
              <View style={styles.authCard}>
                <MaterialCommunityIcons name="google" size={48} color="#EA4335" />
                <Text style={styles.authTitle}>እባክዎን ይግቡ</Text>
                <Text style={styles.authSub}>
                  ጥያቄ ለመጠየቅ አሊያም ለሌሎች መልስ ለመስጠት እባክዎን በ Google አካውንትዎ ይግቡ።
                </Text>
                <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                  <MaterialCommunityIcons name="google" size={20} color="#004D40" />
                  <Text style={styles.googleButtonText}>በ Google ይጠቀሙ</Text>
                </TouchableOpacity>
              </View>
            ) : (
              /* አንዴ ከገባ ቀጥታ ጥያቄ መጻፊያው ይከፈታል */
              <View style={styles.formCard}>
                <Text style={styles.formTitle}>ጥያቄዎን እዚህ ይጻፉ...</Text>
                <TextInput
                  style={styles.textArea}
                  multiline
                  placeholder="ጥያቄዎትን በግልጽ ያስገቡ..."
                  value={questionText}
                  onChangeText={setQuestionText}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handlePostQuestion}>
                  <Text style={styles.submitButtonText}>ጥያቄውን ላክ</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        {/* ሐ. መልስ Tab - የመምህራን መግቢያና መመለሻ */}
        {activeTab === 'melis' && (
          <View style={styles.centerContainer}>
            {!userProfile ? (
              /* ገና ካልገባ የ Google መግቢያ ያሳያል */
              <View style={styles.authCard}>
                <MaterialCommunityIcons name="shield-account" size={48} color="#004D40" />
                <Text style={styles.authTitle}>የመምህራን መግቢያ</Text>
                <Text style={styles.authSub}>
                  ያልተመለሱ ጥያቄዎችን ለመመለስ በ Google አካውንትዎ ይግቡ።
                </Text>
                <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                  <MaterialCommunityIcons name="google" size={20} color="#004D40" />
                  <Text style={styles.googleButtonText}>በ Google ይጠቀሙ</Text>
                </TouchableOpacity>
              </View>
            ) : (
              /* አንዴ ከተገባ ያልተመለሱ ጥያቄዎችን አደርድሮ ያሳያል */
              <ScrollView style={{ width: '100%' }}>
                <Text style={styles.sectionTitle}>ያልተመለሱ ጥያቄዎች (እሁድ የሚመለሱ)</Text>
                {questions.filter(q => !q.answered).length === 0 ? (
                  <Text style={styles.emptyText}>ሁሉም ጥያቄዎች ተመልሰዋል!</Text>
                ) : (
                  questions.filter(q => !q.answered).map((item) => (
                    <View key={item.id} style={styles.questionCard}>
                      <Text style={styles.qTitle}>{item.title}</Text>
                      <TouchableOpacity 
                        style={styles.replyButton}
                        onPress={() => Alert.alert('መምህር', 'መልስ መስጫ ሳጥን እሁድ ይከፈታል')}
                      >
                        <Text style={styles.replyButtonText}>መልስ ስጥ (እሁድ)</Text>
                      </TouchableOpacity>
                    </View>
                  ))
                )}
              </ScrollView>
            )}
          </View>
        )}

      </View>

      {/* 2. የታችኛው አዝራሮች (Bottom Navigation Bar) */}
      <View style={styles.bottomTabBar}>
        
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => setActiveTab('tiyakewoch')}
        >
          <MaterialCommunityIcons 
            name="chat-question-outline" 
            size={24} 
            color={activeTab === 'tiyakewoch' ? '#004D40' : '#888'} 
          />
          <Text style={[styles.tabLabel, activeTab === 'tiyakewoch' && styles.activeTabLabel]}>
            ጥያቄዎች
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => setActiveTab('teyik')}
        >
          <MaterialCommunityIcons 
            name="plus-box-outline" 
            size={24} 
            color={activeTab === 'teyik' ? '#004D40' : '#888'} 
          />
          <Text style={[styles.tabLabel, activeTab === 'teyik' && styles.activeTabLabel]}>
            ጠይቅ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => setActiveTab('melis')}
        >
          <MaterialCommunityIcons 
            name="account-check-outline" 
            size={24} 
            color={activeTab === 'melis' ? '#004D40' : '#888'} 
          />
          <Text style={[styles.tabLabel, activeTab === 'melis' && styles.activeTabLabel]}>
            መልስ
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  mainContent: { flex: 1, padding: 14 },
  topBanner: { backgroundColor: '#004D40', padding: 16, borderRadius: 16, marginBottom: 14 },
  bannerTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  bannerSub: { color: '#E0F2F1', fontSize: 12, marginTop: 4 },
  questionCard: { backgroundColor: '#FFF', padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: '#EFEFEF', elevation: 1 },
  qTitle: { fontSize: 14, fontWeight: 'bold', color: '#222', lineHeight: 20 },
  qMeta: { fontSize: 11, color: '#777', marginTop: 6 },
  answerContainer: { marginTop: 10, backgroundColor: '#F0F7F4', padding: 12, borderRadius: 10, borderLeftWidth: 3, borderLeftColor: '#004D40' },
  answerHeader: { fontWeight: 'bold', fontSize: 12, color: '#004D40' },
  answerBody: { fontSize: 12, color: '#333', marginTop: 4, lineHeight: 18 },
  pendingContainer: { marginTop: 10, backgroundColor: '#FFF8E1', padding: 8, borderRadius: 8 },
  pendingText: { fontSize: 11, color: '#B71C1C', fontWeight: '500' },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  authCard: { backgroundColor: '#FFF', padding: 24, borderRadius: 20, alignItems: 'center', width: '100%', elevation: 2 },
  authTitle: { fontSize: 18, fontWeight: 'bold', color: '#111', marginTop: 12 },
  authSub: { fontSize: 12, color: '#666', textAlign: 'center', marginVertical: 12, lineHeight: 18 },
  googleButton: { backgroundColor: '#E0F2F1', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  googleButtonText: { fontWeight: 'bold', color: '#004D40', marginLeft: 8 },
  formCard: { backgroundColor: '#FFF', padding: 18, borderRadius: 16, width: '100%', flex: 1 },
  formTitle: { fontSize: 15, fontWeight: 'bold', color: '#004D40', marginBottom: 12 },
  textArea: { borderWidth: 1, borderColor: '#DDD', borderRadius: 12, padding: 12, height: 140, textAlignVertical: 'top', marginBottom: 16, backgroundColor: '#FAFAFA' },
  submitButton: { backgroundColor: '#004D40', padding: 14, borderRadius: 12, alignItems: 'center' },
  submitButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#004D40', marginBottom: 12 },
  emptyText: { textAlign: 'center', color: '#888', marginTop: 30 },
  replyButton: { backgroundColor: '#004D40', padding: 10, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  replyButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  bottomTabBar: { flexDirection: 'row', height: 62, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#ECECEC', justifyContent: 'space-around', alignItems: 'center' },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabLabel: { fontSize: 11, color: '#888', marginTop: 3 },
  activeTabLabel: { color: '#004D40', fontWeight: 'bold' },
});