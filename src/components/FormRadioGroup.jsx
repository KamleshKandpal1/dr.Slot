import React from 'react';
import {View} from 'react-native';
import {Radio, RadioGroup, Text} from '@ui-kitten/components';

export default function FormRadioGroup({
  label,
  options,
  selectedIndex,
  onSelect,
}) {
  return (
    <View className="ml-3 -mt-2">
      <Text category="label" className="font-medium mb-2">
        {label}
      </Text>
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={onSelect}
        className="flex-row -mb-3">
        {options.map((opt, idx) => (
          <Radio key={idx}  >
            {opt}
          </Radio>
        ))}
      </RadioGroup>
    </View>
  );
}
