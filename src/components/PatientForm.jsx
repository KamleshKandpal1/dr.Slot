// components/PatientForm.jsx
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRadioGroup from './FormRadioGroup';
import FormDatePicker from './FormDatePicker';
import FormError from './FormError';
import departmentData from '../json/Department.json';
import {ActivityIndicator} from 'react-native';

export default function PatientForm({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
  handleSubmit,
  loading,
}) {
  return (
    <ScrollView className="gap-y-5">
      <View className="mb-6 bg-slate-200/25 border px-5 gap-y-5 rounded-2xl shadow-md p-4 border-stone-200">
        <FormInput
          placeholder="Full Name *"
          value={values.fullName}
          onChangeText={handleChange('fullName')}
        />
        <FormError name="fullName" />

        <FormInput
          placeholder="Father's/Husband's Name"
          value={values.guardianName}
          onChangeText={handleChange('guardianName')}
        />
        <FormError name="guardianName" />

        <FormInput
          placeholder="Email"
          value={values.email}
          onChangeText={handleChange('email')}
          keyboardType="email-address"
        />
        <FormError name="email" />

        <FormInput
          placeholder="Contact Number"
          value={values.contact}
          onChangeText={handleChange('contact')}
          keyboardType="numeric"
        />
        <FormError name="contact" />

        <FormInput
          placeholder="Alternate Contact"
          value={values.altContact}
          onChangeText={handleChange('altContact')}
          keyboardType="numeric"
        />

        <Text className="text-slate-700 font-semibold ml-2">Select Gender</Text>
        <FormSelect
          placeholder="Select Gender"
          options={departmentData.gender}
          value={values.gender}
          onValueChange={val => setFieldValue('gender', val)}
        />
        <FormError name="gender" />

        <FormRadioGroup
          label="Age In"
          options={departmentData.age}
          selectedIndex={departmentData.age.indexOf(values.ageType)}
          onSelect={index =>
            setFieldValue('ageType', departmentData.age[index])
          }
        />

        <FormInput
          placeholder="Age"
          value={values.age}
          onChangeText={handleChange('age')}
          keyboardType="numeric"
        />
        <FormError name="age" />

        <FormInput
          placeholder="Address"
          value={values.address}
          onChangeText={handleChange('address')}
        />
        <FormError name="address" />

        <FormInput
          placeholder="Aadhaar Number"
          value={values.aadhaar}
          onChangeText={handleChange('aadhaar')}
          keyboardType="numeric"
        />
        <FormError name="aadhaar" />

        <FormInput
          placeholder="Voter Id Card"
          value={values.voterId}
          onChangeText={handleChange('voterId')}
        />
        <FormError name="voterId" />

        <Text className="text-slate-700 font-semibold ml-2">
          Select Department
        </Text>
        <FormSelect
          value={values.department}
          placeholder="Select Department"
          options={departmentData.department}
          onValueChange={val => setFieldValue('department', val)}
        />
        <FormError name="department" />

        <Text className="text-slate-700 font-semibold ml-2">Select Date</Text>
        <FormDatePicker
          value={values.date}
          onChange={val => setFieldValue('date', val)}
          placeholder="Select Date*"
        />
        <FormError name="date" />

        {values.date && (
          <Text className="border border-slate-300 bg-white rounded-xl px-4 py-3 text-base text-gray-500">
            08:00 Am - 11:00 Am
          </Text>
        )}
      </View>

      <TouchableOpacity
        disabled={loading}
        className={`${
          loading ? 'bg-slate-500' : 'bg-blue-800'
        } px-20 py-3 rounded-full items-center justify-center self-center`}
        onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-lg text-white font-semibold uppercase tracking-widest">
            Submit
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
