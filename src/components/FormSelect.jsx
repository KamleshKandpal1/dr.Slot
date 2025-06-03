import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Select, SelectItem} from '@ui-kitten/components';

export default function FormSelect({
  placeholder,
  options = [],
  value,
  onValueChange,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sync external value (from Formik or parent) to selectedIndex
  useEffect(() => {
    const index = options.findIndex(opt => opt === value);
    if (index !== -1) {
      setSelectedIndex({row: index});
    } else {
      setSelectedIndex(null);
    }
  }, [value, options]);

  const handleSelect = index => {
    setSelectedIndex(index);
    const selectedValue = options[index.row];
    onValueChange && onValueChange(selectedValue);
  };

  return (
    <View style={styles.container}>
      <Select
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
        value={
          selectedIndex === null ? placeholder : options[selectedIndex.row]
        }
        placeholder={placeholder}>
        {options.map((opt, idx) => (
          <SelectItem key={idx} title={opt} />
        ))}
      </Select>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginVertical: 8,
  },
});
