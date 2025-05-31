import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been successfully logged out.', [
      {
        text: 'OK',
        onPress: () => navigation.replace('Home'), // or navigate to Login
      },
    ]);
  };

  return (
    <View className="flex-1 justify-center items-center bg-slate-300 px-5">
      <FontAwesome name="sign-out" size={60} color="#334155" />
      <Text className="text-xl text-slate-800 font-semibold text-center mt-6 mb-4">
        Are you sure you want to logout?
      </Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-slate-800 px-6 py-3 rounded-xl">
        <Text className="text-black text-base font-medium">Yes, Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
