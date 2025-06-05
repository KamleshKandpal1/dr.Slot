// screens/DataFormScreen.js
import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addPatient} from '../redux/patientSlice.js';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import PatientForm from '../components/PatientForm.jsx';
import {Snackbar} from 'react-native-paper';

export default function DataFormScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    guardianName: Yup.string().required("Father's/Husband's name is required"),
    email: Yup.string().email('Invalid email'),
    contact: Yup.string().required('Contact Number is required'),
    gender: Yup.string().required('Gender is required'),
    age: Yup.string().required('Age is required'),
    address: Yup.string().required('Address is required'),
    department: Yup.string().required('Department is required'),
    date: Yup.string().required('Please select the date'),
    aadhaar: Yup.string().max(12).required('Aadhaar is required '),
    voterId: Yup.string().required('Voter Id is required '),
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-100 px-5 py-6 relative">
        <Formik
          initialValues={{
            fullName: '',
            guardianName: '',
            email: '',
            contact: '',
            altContact: '',
            gender: '',
            ageType: '',
            age: '',
            address: '',
            aadhaar: '',
            voterId: '',
            consultation: 'Opd Consultation',
            department: '',
            date: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {resetForm}) => {
            const formData = {
              ...values,
              id: uuid.v4(),
              date: moment(values.date).format('DD-MM-YYYY'),
            };
            setTimeout(() => {
              dispatch(addPatient(formData));
              setLoading(false);
              setSnackbarVisible(true);
              resetForm();
              navigation.navigate('Home');
            }, 1500);
            // Toast.show({
            //   type: 'success',
            //   text1: 'Success',
            //   text2: 'Patient added successfully!',
            // });
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
            resetForm,
          }) => (
            <>
              <PatientForm
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                loading={loading}
              />

              <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
                style={{backgroundColor: '#1e3a8a'}}>
                Patient addes successfully!
              </Snackbar>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
