import React from 'react';
import {TextInput} from 'react-native';


export default function FormInput({
  placeholder,
  value,
  onChangeText,
  onBlur,
  keyboardType = 'default',
}) {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        keyboardType={keyboardType}
        className="border border-slate-300 bg-white rounded-xl px-4 py-3 text-base text-gray-500"
        placeholderTextColor="#c3aaa8"
      />
      
    </>
  );
}
