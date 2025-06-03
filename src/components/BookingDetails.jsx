import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BookingDetails = () => {
  const route = useRoute();
  const {id} = route.params;

  const patients = useSelector(state => state.patient.patients);
  const patient = patients.find(p => p.id === id); // ✅ filter single patient

  if (!patient) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-lg text-slate-500">Patient not found.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-100 p-4">
      <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
        <Text className="text-lg font-semibold text-indigo-600">
          {patient.consultation || 'OPD Consultation'}
        </Text>

        <Text className="text-lg text-slate-600 mt-1">
          Department: {patient.department}
        </Text>

        <View
          className="my-5 border-t border-slate-400"
          style={{borderStyle: 'dashed'}}
        />

        <View className="flex-row items-center gap-2">
          {patient.gender === 'Male' && (
            <Ionicons name="male" size={24} color="#3b82f6" />
          )}
          {patient.gender === 'Female' && (
            <Ionicons name="female" size={24} color="#ec4899" />
          )}
          {patient.gender === 'Other' && (
            <Ionicons name="transgender" size={24} color="#8b5cf6" />
          )}
          <View className="flex-row items-center">
            <Text className="text-lg font-semibold text-slate-800">
              {patient.fullName}
            </Text>
            <Text className="text-sm text-slate-500">
              ({patient.age} {patient.ageType})
            </Text>
          </View>
        </View>

        <View className="flex-row gap-2 my-1.5 items-center">
          <Ionicons name="calendar-number" color="#000" size={24} />
          <Text className="text-base text-slate-600 tracking-wider">
            {String(patient.date)}
          </Text>
          <Text className="text-sm ml-2 text-slate-600">08:00 Am-11:30 Am</Text>
        </View>

        <View className="flex-row gap-2 my-1.5 items-center">
          <FontAwesome name="phone" color="" size={24} />
          <Text className="text-base text-slate-600 tracking-wider ml-2">
            {patient.contact}
          </Text>
        </View>

        <View className="mt-4 mb-8 border border-gray-400 rounded-full py-3 px-3">
          <Text className="text-black text-xs font-normal tracking-widest text-center">
            Please visit the online registration print counter for futher
            information.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BookingDetails;
