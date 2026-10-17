import React, { useState } from 'react';
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
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Updated Telegram Integration Keys
const BOT_TOKEN = "8787077305:AAFuRbG6YgWCr9cDdisX3C6goXi4OcUUwmM";
const CHAT_ID = "6399792712";

const batches = [
  'First Year', 
  'Second Year', 
  'Third Year', 
  'Fourth Year', 
  'Fifth Year', 
  'Other'
];

export default function CaseFormScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('First Year');
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState('');
  const [dormitory, setDormitory] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [caseDetail, setCaseDetail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Input Validations
    if (!fullName.trim()) {
      Alert.alert("ትኩረት", "እባክዎን ሙሉ ስምዎን ያስገቡ!");
      return;
    }
    if (!caseDetail.trim()) {
      Alert.alert("ትኩረት", "እባክዎን የኬዙን ዝርዝር መረጃ ያስገቡ!");
      return;
    }

    setLoading(true);

    // Telegram Message Formatting
    const message = 
`📌 *አዲስ የኬዝ መመዝገቢያ ፎርም*

👤 *ስም:* ${fullName.trim()}
🎓 *Batch:* ${selectedBatch}
📚 *Department:* ${department.trim() || 'ያልተጠቀሰ'}
🏢 *Section:* ${section.trim() || 'ያልተጠቀሰ'}
🏠 *Dormitory:* ${dormitory.trim() || 'ያልተጠቀሰ'}
📞 *Phone:* ${phoneNumber.trim() || 'ያልተጠቀሰ'}
✈️ *Telegram:* ${telegramUsername.trim() || 'ያልተጠቀሰ'}

📝 *የኬዝ ዝርዝር:*
${caseDetail.trim()}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
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
      console.log("Telegram API Response:", data);

      if (response.ok && data.ok) {
        Alert.alert(
          "ተሳክቷል! 🎉", 
          "የኬዝ መረጃዎ በስኬት ለአስተዳዳሪው ተልኳል። በቅርብ ቀን ያገኙዎታል!",
          [{ text: "እሺ", onPress: () => navigation.goBack() }]
        );
        // Clear Form Fields
        setFullName('');
        setDepartment('');
        setSection('');
        setDormitory('');
        setPhoneNumber('');
        setTelegramUsername('');
        setCaseDetail('');
      } else {
        Alert.alert(
          "Telegram Error", 
          `Error Code: ${data.error_code || 'Unknown'}\nDescription: ${data.description || 'ያልታወቀ ስህተት አጋጥሟል'}`
        );
      }
    } catch (error) {
      console.error("Network Error:", error);
      Alert.alert("Network Error", "የኔትወርክ ችግር አጋጥሟል። እባክዎን የኢንተርኔት ግንኙነትዎን ያረጋግጡ።");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>ስም <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="ሙሉ ስም ያስገቡ"
          placeholderTextColor="#999"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Batch Radio Buttons */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Batch <Text style={styles.required}>*</Text></Text>
        <View style={styles.batchGrid}>
          {batches.map((batch) => {
            const isSelected = selectedBatch === batch;
            return (
              <TouchableOpacity
                key={batch}
                style={[styles.radioCard, isSelected && styles.radioCardSelected]}
                onPress={() => setSelectedBatch(batch)}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons 
                  name={isSelected ? "radiobox-marked" : "radiobox-blank"} 
                  size={20} 
                  color={isSelected ? "#004D40" : "#777"} 
                />
                <Text style={[styles.radioText, isSelected && styles.radioTextSelected]}>
                  {batch}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Department and Section in Row */}
      <View style={styles.rowInputs}>
        <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
          <Text style={styles.label}>Department</Text>
          <TextInput
            style={styles.input}
            placeholder="ትምህርት ክፍል"
            placeholderTextColor="#999"
            value={department}
            onChangeText={setDepartment}
          />
        </View>

        <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
          <Text style={styles.label}>Section</Text>
          <TextInput
            style={styles.input}
            placeholder="ሴክሽን"
            placeholderTextColor="#999"
            value={section}
            onChangeText={setSection}
          />
        </View>
      </View>

      {/* Dormitory Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Dormitory (Campus, Building and Dorm Number)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Main Campus, Block 5, Room 214"
          placeholderTextColor="#999"
          value={dormitory}
          onChangeText={setDormitory}
        />
      </View>

      {/* Phone and Telegram in Row */}
      <View style={styles.rowInputs}>
        <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="09..."
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
          <Text style={styles.label}>Telegram Username</Text>
          <TextInput
            style={styles.input}
            placeholder="@username"
            placeholderTextColor="#999"
            value={telegramUsername}
            onChangeText={setTelegramUsername}
          />
        </View>
      </View>

      {/* Case Detail Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Case Detail <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="ስለኬዙ አስፈላጊ ነው ብለው የሚያስቡትን ገልጸው ያስገቡ..."
          placeholderTextColor="#999"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          value={caseDetail}
          onChangeText={setCaseDetail}
        />
      </View>

      {/* Actions */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.backBtn} 
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <MaterialCommunityIcons name="arrow-left" size={20} color="#333" />
          <Text style={styles.backBtnText}>ተመለስ</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.submitBtn} 
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <>
              <MaterialCommunityIcons name="send" size={18} color="#FFF" style={{ marginRight: 6 }} />
              <Text style={styles.submitBtnText}>አስገባ</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6' },
  scrollContent: { padding: 16 },
  inputGroup: { marginBottom: 16 },
  label: { fontSize: 13, fontWeight: 'bold', color: '#333', marginBottom: 6 },
  required: { color: '#D32F2F' },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#222',
  },
  textArea: { minHeight: 110 },
  batchGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  radioCard: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  radioCardSelected: { borderColor: '#004D40', backgroundColor: '#E0F2F1' },
  radioText: { marginLeft: 8, fontSize: 13, color: '#444' },
  radioTextSelected: { color: '#004D40', fontWeight: 'bold' },
  rowInputs: { flexDirection: 'row', justifyContent: 'space-between' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 30 },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  backBtnText: { marginLeft: 6, fontWeight: 'bold', color: '#333' },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004D40',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 25,
  },
  submitBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
});