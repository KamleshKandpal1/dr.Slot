import {useNavigation} from '@react-navigation/native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='relative w-full h-full'>
      <Text>Home Screen</Text>
      <TouchableOpacity className='absolute bottom-4 right-4 flex-row items-center gap-2 px-5 py-2 bg-blue-800  rounded-2xl' onPress={()=>navigation.navigate('New Visit')}>
            <MaterialIcons name="add-circle" color="#fff" size={30} />
            <Text className='text-white text-xl uppercase'>New Visit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
