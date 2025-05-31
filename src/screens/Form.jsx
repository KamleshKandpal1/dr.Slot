// screens/DataFormScreen.js
import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function Form() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-100 px-5 py-6">
        <View className="mb-6 bg-slate-200/25 border px-5 flex gap-y-5 rounded-2xl shadow-md p-4 border-stone-200">
          <TextInput
            placeholder="Full Name *"
            keyboardType="ascii-capable"
            className="border border-slate-300 bg-white rounded-xl px-4 py-3 text-base text-gray-500/"
            placeholderTextColor="#c3aaa8"
          />
          <TextInput
            placeholder="Father's/Husband's Name *"
            keyboardType="ascii-capable"
            className="border border-slate-300 bg-white rounded-xl px-4 py-3 text-base text-gray-500/"
            placeholderTextColor="#c3aaa8"
          />
          <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            className="border border-slate-300 bg-white rounded-xl px-4 py-3 text-base text-gray-500/"
            placeholderTextColor="#c3aaa8"
          />
          <TextInput
            placeholder="Contact Number"
            keyboardType="numeric"
            className="border border-slate-300 bg-white rounded-xl px-4 py-3 text-base text-gray-500/"
            placeholderTextColor="#c3aaa8"
          />
          <TextInput
            placeholder="Alternate Mobile Number"
            keyboardType="numeric"
            className="border border-slate-300 bg-white rounded-xl px-4 py-3 text-base text-gray-500/"
            placeholderTextColor="#c3aaa8"
          />
        </View>

        <Pressable className="bg-blue-800 px-20 py-3  rounded-full items-center justify-center self-center">
          <Text className="text-lg text-white font-semibold uppercase tracking-widest">
            Submit
          </Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
