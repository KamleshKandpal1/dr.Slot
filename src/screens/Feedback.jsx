import {Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const Feedback = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="px-4 py-10 bg-slate-100 h-full">
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Enter your message"
          textAlignVertical="top"
          className="border border-gray-400 rounded-xl p-4 h-44 text-lg placeholder:text-gray-400 placeholder:bg-white"
        />
        <Pressable className="my-10 py-3 rounded-xl bg-blue-600">
          <Text className="text-center text-lg font-semibold text-white">
            Send Feedback
          </Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Feedback;
