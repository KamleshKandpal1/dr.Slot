import React from 'react';
import {View, Text, Image} from 'react-native';
import {useFormikContext} from 'formik';

const FormError = ({name}) => {
  const {errors, touched} = useFormikContext();

  const showError = touched[name] && errors[name];

  if (!showError) return null;

  return (
    <View className="bg-black/20  rounded-full realtive z-10 flex-row  items-center justify-center">
      <Image source={require('../assets/Logo.png')} className="w-12 h-12" />
      <Text className="text-lg font-medium text-white/80">{errors[name]}</Text>
    </View>
  );
};

export default FormError;
