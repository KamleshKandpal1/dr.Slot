import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Select, SelectItem, IndexPath} from '@ui-kitten/components';

export default function FormSelect({
  placeholder,
  options = [], // array of strings only
  value,
  onValueChange,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sync external `value` with internal selected index
  useEffect(() => {
    const index = options.indexOf(value);
    if (index !== -1) {
      setSelectedIndex(new IndexPath(index));
    } else {
      setSelectedIndex(null);
    }
  }, [value, options]);

  const handleSelect = index => {
    setSelectedIndex(index);
    const selectedValue = options[index.row];
    onValueChange && onValueChange(selectedValue);
  };

  const displayValue =
    selectedIndex && options[selectedIndex.row] !== undefined
      ? options[selectedIndex.row]
      : placeholder;

  return (
    <View style={styles.container}>
      <Select
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
        value={displayValue}
        placeholder={placeholder}>
        {options.map((opt, idx) => (
          <SelectItem key={idx} title={opt} />
        ))}
      </Select>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
