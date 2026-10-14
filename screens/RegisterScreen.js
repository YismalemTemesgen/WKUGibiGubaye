import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = () => {
    alert(`እናመሰግናለን ${fullName}! ምዝገባዎ በስኬት ተጠናቋል::`);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>የአዲስ አባልነት መመዝገቢያ ፎርም</Text>

      <Text style={styles.label}>ሙሉ ስም</Text>
      <TextInput
        style={styles.input}
        placeholder="ስም ከነ አያት ያስገቡ"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>ስልክ ቁጥር</Text>
      <TextInput
        style={styles.input}
        placeholder="09..."
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>ትምህርት ክፍል (Department)</Text>
      <TextInput
        style={styles.input}
        placeholder="ምሳሌ፦ Software Engineering"
        value={department}
        onChangeText={setDepartment}
      />

      <Text style={styles.label}>የትምህርት ዘመን (Year)</Text>
      <TextInput
        style={styles.input}
        placeholder="ምሳሌ፦ 3ኛ ዓመት"
        value={year}
        onChangeText={setYear}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>መዝግብ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  content: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#004D40', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 6 },
  input: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#DDD', borderRadius: 10, padding: 12, marginBottom: 16 },
  button: { backgroundColor: '#004D40', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});