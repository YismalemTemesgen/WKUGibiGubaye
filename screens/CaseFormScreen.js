import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CaseFormScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [batch, setBatch] = useState('First Year');
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState('');
  const [dormitory, setDormitory] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');
  const [caseDetail, setCaseDetail] = useState('');

  const batchOptions = [
    'First Year', 'Second Year',
    'Third Year', 'Fourth Year',
    'Fifth Year', 'Other'
  ];

  const handleSubmit = () => {
    if (!fullName || !caseDetail) {
      Alert.alert('ማስጠንቀቂያ', 'እባክዎን አስፈላጊ የሆኑ መረጃዎችን (* ያለባቸውን) ይሙሉ!');
      return;
    }
    Alert.alert('እናመሰግናለን!', 'መረጃዎ በስኬት ተመዝግቧል::');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Top Banner Card */}
      <View style={styles.bannerCard}>
        <View style={styles.bannerIconBox}>
          <MaterialCommunityIcons name="shield-check" size={32} color="#004D40" />
        </View>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>የኬዝ ዝርዝር መመዝገቢያ ፎርም</Text>
          <Text style={styles.bannerSubtitle}>
            ይህ ፎርም ለ 2017 የኬዝ ዝርዝር መረጃ ለመሰብሰብ የተዘጋጀ ነው:: እባክዎ ትክክለኛና የተሟላ ዝርዝሮችን ያስገቡ::
          </Text>
        </View>
      </View>

      {/* Main Form Content */}
      <View style={styles.formCard}>
        
        <View style={styles.sectionHeader}>
          <View style={styles.greenBar} />
          <Text style={styles.sectionTitle}>የኬዝ አስፈላጊ መረጃዎች</Text>
        </View>

        {/* Full Name */}
        <Text style={styles.label}>ስም <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="ሙሉ ስም ያስገቡ"
          value={fullName}
          onChangeText={setFullName}
        />

        {/* Batch Selection */}
        <Text style={styles.label}>Batch <Text style={styles.required}>*</Text></Text>
        <View style={styles.batchContainer}>
          {batchOptions.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.radioOption,
                batch === item && styles.radioOptionSelected
              ]}
              onPress={() => setBatch(item)}
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name={batch === item ? "radiobox-marked" : "radiobox-blank"}
                size={20}
                color={batch === item ? "#006633" : "#888"}
              />
              <Text style={styles.radioText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Department & Section (Side-by-Side) */}
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Department</Text>
            <TextInput
              style={styles.input}
              placeholder="ትምህርት ክፍል"
              value={department}
              onChangeText={setDepartment}
            />
          </View>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Section</Text>
            <TextInput
              style={styles.input}
              placeholder="ሴክሽን"
              value={section}
              onChangeText={setSection}
            />
          </View>
        </View>

        {/* Dormitory */}
        <Text style={styles.label}>Dormitory (Campus, Building and Dorm Number)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Main Campus, Block 5, Room 214"
          value={dormitory}
          onChangeText={setDormitory}
        />

        {/* Phone & Telegram Username (Side-by-Side) */}
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="09..."
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Telegram Username</Text>
            <TextInput
              style={styles.input}
              placeholder="@username"
              value={telegram}
              onChangeText={setTelegram}
            />
          </View>
        </View>

        {/* Case Detail */}
        <Text style={styles.label}>Case Detail <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="ስለኬዙ አስፈላጊ ነው ብለው የሚያስቡትን ገልጸው ያስገቡ..."
          multiline={true}
          numberOfLines={6}
          textAlignVertical="top"
          value={caseDetail}
          onChangeText={setCaseDetail}
        />

        {/* Bottom Actions */}
        <View style={styles.actionRow}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" size={18} color="#333" />
            <Text style={styles.backButtonText}>ተመለስ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <MaterialCommunityIcons name="send" size={18} color="#FFF" />
            <Text style={styles.submitButtonText}>አስገባ</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 14,
  },
  // Banner Styles
  bannerCard: {
    backgroundColor: '#008744',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 3,
  },
  bannerIconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0F2F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#E8F5E9',
    fontSize: 11,
    lineHeight: 16,
  },

  // Form Card Styles
  formCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 30,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  greenBar: {
    width: 4,
    height: 20,
    backgroundColor: '#008744',
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008744',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    marginTop: 10,
  },
  required: {
    color: '#D32F2F',
  },
  input: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 13,
    color: '#333',
  },
  textArea: {
    height: 110,
  },

  // Batch Radio Grid
  batchContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  radioOption: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  radioOptionSelected: {
    borderColor: '#008744',
    backgroundColor: '#F0F9F4',
  },
  radioText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#333',
  },

  // Row Alignment
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },

  // Actions
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  backButtonText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008744',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 20,
  },
  submitButtonText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
});