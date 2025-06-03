// src/components/PatientLoader.js
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setInitialPatients} from '../redux/patientSlice';

const PatientLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@patients');
        const patients = jsonValue != null ? JSON.parse(jsonValue) : [];
        dispatch(setInitialPatients(patients));
      } catch (error) {
        console.error('Failed to load patients:', error);
      }
    };
    loadPatients();
  }, []);

  return null;
};

export default PatientLoader;
