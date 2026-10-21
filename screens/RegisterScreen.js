import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Alert, 
  ActivityIndicator 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Telegram Integration Keys from .env
const NEW_MEMBER_BOT_TOKEN = process.env.EXPO_PUBLIC_BOT_TOKEN_MEMBER;
const CHAT_ID = process.env.EXPO_PUBLIC_CHAT_ID;

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // መተግበሪያው ሲከፈት ተጠቃሚው ቀደም ብሎ መመዝገቡን ማረጋገጥ
  useEffect(() => {
    checkRegistrationStatus();
  }, []);

  const checkRegistrationStatus = async () => {
    try {
      const status = await AsyncStorage.getItem('@is_member_registered');
      if (status === 'true') {
        setIsRegistered(true);
      }
    } catch (e) {
      console.error("Error checking registration status", e);
    }
  };

  const handleRegister = async () => {
    // ተጠቃሚው ቀድሞ ተመዝግቦ ከሆነ እዚህ ይገታል
    if (isRegistered) {
      Alert.alert("ትኩረት ⚠️", "እርስዎ አስቀድመው ተመዝግበዋል! ሁለተኛ ጊዜ መመዝገብ አይችሉም።");
      return;
    }

    if (!fullName.trim()) {
      Alert.alert("ትኩረት", "እባክዎን ሙሉ ስምዎን ያስገቡ!");
      return;
    }
    if (!phoneNumber.trim()) {
      Alert.alert("ትኩረት", "እባክዎን ስልክ ቁጥርዎን ያስገቡ!");
      return;
    }

    if (!NEW_MEMBER_BOT_TOKEN) {
      Alert.alert("ስህተት", "የአባልነት ቦት ቶከን በ .env ፋይል ውስጥ አልተገኘም!");
      return;
    }

    setLoading(true);

    const message = 
`👥 *አዲስ የኣባልነት መመዝገቢያ ፎርም*

👤 *ሙሉ ስም:* ${fullName.trim()}
📞 *ስልክ ቁጥር:* ${phoneNumber.trim()}
📚 *ትምህርት ክፍል:* ${department.trim() || 'ያልተጠቀሰ'}
🎓 *የትምህርት ዘመን:* ${year.trim() || 'ያልተጠቀሰ'}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${NEW_MEMBER_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        // ተጠቃሚው መመዝገቡን በስልኩ ማከማቻ (AsyncStorage) እንመዝግባለን
        await AsyncStorage.setItem('@is_member_registered', 'true');
        setIsRegistered(true);

        Alert.alert(
          "ተሳክቷል! 🎉", 
          "የአባልነት መመዝገቢያ መረጃዎ በስኬት ለአባላት ክፍል ተልኳል!",
          [{ text: "እሺ", onPress: () => navigation.goBack() }]
        );
      } else {
        Alert.alert("ስህተት", `መረጃውን መላክ አልተቻለም፦ ${data.description || 'እባክዎን ቦቱን /start ማድረጎትን ያረጋግጡ።'}`);
      }
    } catch (error) {
      Alert.alert("ስህተት", "የኔትወርክ ችግር አጋጥሟል። እባክዎን የኢንተርኔት ግንኙነትዎን ያረጋግጡ።");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      
      <Text style={styles.formTitle}>የአዲስ አባልነት መመዝገቢያ ፎርም</Text>

      {/* ቀድሞ የተመዘገበ ከሆነ የሚታይ ማስጠንቀቂያ */}
      {isRegistered && (
        <View style={styles.warningBox}>
          <Text style={styles.warningText}>⚠️ እርስዎ ቀድመው ተመዝግበዋል! መረጃዎ ለአስተዳዳሪው ደርሷል።</Text>
        </View>
      )}

      {/* Full Name Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>ሙሉ ስም <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={[styles.input, isRegistered && styles.disabledInput]}
          placeholder="ስም ከነ አያት ያስገቡ"
          placeholderTextColor="#999"
          value={fullName}
          onChangeText={setFullName}
          editable={!isRegistered}
        />
      </View>

      {/* Phone Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>ስልክ ቁጥር <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={[styles.input, isRegistered && styles.disabledInput]}
          placeholder="09..."
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          editable={!isRegistered}
        />
      </View>

      {/* Department Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>ትምህርት ክፍል (Department)</Text>
        <TextInput
          style={[styles.input, isRegistered && styles.disabledInput]}
          placeholder="ምሳሌ፦ Software Engineering"
          placeholderTextColor="#999"
          value={department}
          onChangeText={setDepartment}
          editable={!isRegistered}
        />
      </View>

      {/* Year Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>የትምህርት ዘመን (Year)</Text>
        <TextInput
          style={[styles.input, isRegistered && styles.disabledInput]}
          placeholder="ምሳሌ፦ 3ኛ ዓመት"
          placeholderTextColor="#999"
          value={year}
          onChangeText={setYear}
          editable={!isRegistered}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity 
        style={[styles.submitBtn, isRegistered && styles.disabledBtn]} 
        onPress={handleRegister}
        disabled={loading || isRegistered}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.submitBtnText}>{isRegistered ? "უკვე ተመዝግበዋል" : "መዝግብ"}</Text>
        )}
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContent: { padding: 20 },
  formTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#004D40', 
    textAlign: 'center', 
    marginBottom: 20, 
    marginTop: 10 
  },
  warningBox: {
    backgroundColor: '#FFF3CD',
    borderColor: '#FFEEBA',
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  warningText: {
    color: '#856404',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputGroup: { marginBottom: 18 },
  label: { fontSize: 13, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  required: { color: '#D32F2F' },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#222',
  },
  disabledInput: {
    backgroundColor: '#F0F0F0',
    color: '#888',
  },
  submitBtn: {
    backgroundColor: '#004D40',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  disabledBtn: {
    backgroundColor: '#9E9E9E',
  },
  submitBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});