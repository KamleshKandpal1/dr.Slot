// screens/DataFormScreen.js
import React, {useState} from 'react';
import {View, Text, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormInput from '../components/FormInput.jsx';
import FormSelect from '../components/FormSelect.jsx';
import FormRadioGroup from '../components/FormRadioGroup.jsx';
import FormDatePicker from '../components/FormDatePicker.jsx';
import department from '../json/Department.json';
import {useDispatch} from 'react-redux';
import {addPatient} from '../redux/patientSlice.js';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import FormError from '../components/FormError.jsx';

export default function DataFormScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    guardianName: Yup.string().required("Father's/Husband's name is required"),
    email: Yup.string().email('Invalid email'),
    contact: Yup.string().required('Contact Number is required'),
    gender: Yup.string().required('Gender is required'),
    age: Yup.string().required('Age is required'),
    address: Yup.string().required('Address is required'),
    department: Yup.string().required('Department is required'),
    date: Yup.string().required('Please select the date'),
    aadhaar: Yup.string().max(12).required('Aadhaar is required '),
    voterId: Yup.string().required('Voter Id is required '),
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-100 px-5 py-6 relative">
        <Formik
          initialValues={{
            fullName: '',
            guardianName: '',
            email: '',
            contact: '',
            altContact: '',
            gender: '',
            ageType: '',
            age: '',
            address: '',
            aadhaar: '',
            voterId: '',
            consultation: 'Opd Consultation',
            department: '',
            date: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {resetForm}) => {

            const formData = {
              ...values,
              id: uuid.v4(),
              date: moment(values.date).format('DD-MM-YYYY'),
            };
            dispatch(addPatient(formData));
            Alert.alert('Debug', 'Submit button pressed');
            Toast.show({
              type: 'success', // 'success', 'error', or 'info'
              text1: 'Success',
              text2: 'Patient added successfully!',
            });
            resetForm();
            navigation.navigate('Home');
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <ScrollView className="gap-y-5">
              <View className="mb-6 bg-slate-200/25 border px-5 flex gap-y-5 rounded-2xl shadow-md p-4 border-stone-200">
                <FormInput
                  placeholder="Full Name *"
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
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
                <Text className="text-slate-700 font-semibold ml-2">
                  Select Gender
                </Text>
                <FormSelect
                  placeholder="Select Gender"
                  options={department.gender}
                  value={values.gender}
                  onValueChange={val => setFieldValue('gender', val)}
                />
                <FormError name="gender" />
                <FormRadioGroup
                  label="Age In"
                  options={department.age}
                  selectedIndex={department.age.indexOf(values.ageType)}
                  onSelect={index =>
                    setFieldValue('ageType', department.age[index])
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
                  options={department.department}
                  onValueChange={val => setFieldValue('department', val)}
                />
                <FormError name="department" />
                <Text className="text-slate-700 font-semibold ml-2">
                  Select Date
                </Text>
                <FormDatePicker
                  value={values.date}
                  onChange={val => setFieldValue('date', val)}
                  placeholder="Select Date*"
                />
                <FormError name="date" />
                {values.date && (
                  <Text className="border border-slate-300 bg-white rounded-xl px-4 py-3 text-base text-gray-500">
                    08:00 Am-11:00 Am
                  </Text>
                )}
              </View>
              <TouchableOpacity
                className="bg-blue-800 px-20 py-3 rounded-full items-center justify-center self-center"
                onPress={() => {
                  handleSubmit();
                  console.log('Touched:', touched);
                  console.log('Errors:', errors);
                  console.log('Values:', values);
                }}>
                <Text className="text-lg text-white font-semibold uppercase tracking-widest">
                  Submit
                </Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </Formik>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
