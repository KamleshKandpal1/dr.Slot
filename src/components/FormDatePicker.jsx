import React from 'react';
import {StyleSheet} from 'react-native';
import moment from 'moment';
import {Datepicker, Layout} from '@ui-kitten/components';
import {MomentDateService} from '@ui-kitten/moment';

const dateService = new MomentDateService();

const FormDatePicker = ({value, onChange, placeholder}) => {
  return (
    <Layout style={styles.container} level="1">
      <Datepicker
        boundingMonth={true}
        placeholder={placeholder}
        date={value ?? null} // only show date if one is selected
        dateService={dateService}
        onSelect={onChange}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});

export default FormDatePicker;
