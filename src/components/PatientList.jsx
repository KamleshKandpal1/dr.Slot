import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Tab, TabView} from '@ui-kitten/components';
import moment from 'moment';

const PatientList = () => {
  const Navigation = useNavigation();
  const patients = useSelector(state => state.patient.patients);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [upcoming, setUpcoming] = useState([]);
  const [history, setHistory] = useState([]);
  // const loadComponent = index => index === selectedIndex;

  useEffect(() => {
    const updateList = () => {
      const now = new Date();
      const sortByDateDesc = data =>
        [...data].sort(
          (a, b) => moment(b.date, 'DD-MM-YYYY') - moment(a.date, 'DD-MM-YYYY'),
        );

      const upcomingPatients = sortByDateDesc(
        patients.filter(item => {
          const diffInHours = moment(item.date, 'DD-MM-YYYY').diff(
            moment(),
            'hours',
          );
          return diffInHours >= 0 && diffInHours <= 24;
        }),
      );

      const historyPatients = sortByDateDesc(
        patients.filter(item => {
          const diffInHours = moment(item.date, 'DD-MM-YYYY').diff(
            moment(),
            'hours',
          );
          return diffInHours < 0;
        }),
      );
      setUpcoming(upcomingPatients);
      setHistory(historyPatients);
    };
    updateList();
    const interval = setInterval(updateList, 60 * 1000);
    return () => clearInterval(interval);
  }, [patients]);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('@patients', JSON.stringify(patients));
      } catch (error) {
        console.error('Failed to save patients:', error);
      }
    };
    saveData();
  }, [patients]);

  const renderItem = ({item}) => (
    <View className="bg-white p-4 mb-2 rounded-2xl shadow-md">
      <Text className="text-lg font-semibold text-indigo-600">
        {item.consultation || 'OPD Consultation'}
      </Text>

      <Text className="text-lg text-slate-600 mt-1">
        Department: {item.department}
      </Text>

      <View
        className="my-5 border-t border-slate-400"
        style={{borderStyle: 'dashed'}}
      />

      <View className="flex-row items-center gap-2">
        {item.gender === 'Male' && (
          <Ionicons name="male" size={24} color="#3b82f6" />
        )}
        {item.gender === 'Female' && (
          <Ionicons name="female" size={24} color="#ec4899" />
        )}
        {item.gender === 'Other' && (
          <Ionicons name="transgender" size={24} color="#8b5cf6" />
        )}
        <View className="flex-row items-center">
          <Text className="text-lg font-semibold text-slate-800">
            {item.fullName}
          </Text>
          <Text className="text-sm text-slate-500">
            ({item.age} {item.ageType})
          </Text>
        </View>
      </View>

      <View className="flex-row gap-2 my-1.5 items-center">
        <Ionicons name="calendar-number" color="#000" size={24} />
        <Text className="text-base text-slate-600 tracking-wider">
          {String(item.date)}
        </Text>
        <Text className="text-sm ml-2 text-slate-600">08:00 Am-11:30 Am</Text>
      </View>

      <View className="flex-row gap-2 my-1.5 items-center">
        <FontAwesome name="phone" color="" size={24} />
        <Text className="text-base text-slate-600 tracking-wider ml-2">
          {item.contact}
        </Text>
      </View>

      <View className="justify-end flex-row">
        <TouchableOpacity
          className="flex-row gap-2 items-center py-1.5 w-28 bg-blue-500 rounded-xl justify-center"
          onPress={() =>
            Navigation.navigate('Booking Details', {
              id: item.id,
            })
          }>
          <Ionicons name="eye" color="#fff" size={24} />
          <Text className="text-white text-lg font-medium tracking-widest uppercase">
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-slate-100 p-4">
      <TabView className='mb-20'
        selectedIndex={selectedIndex}
        // shouldLoadComponent={loadComponent}
        onSelect={index => setSelectedIndex(index)}>
        <Tab title="UPCOMING" className="py-2">
          <FlatList
            className="mt-4"
            data={upcoming}
            keyExtractor={(item, index) => item.id || index.toString()}
            renderItem={renderItem}
            ListEmptyComponent={
              <Text className="text-center text-slate-500 mt-40 text-base">
                No upcoming patients.
              </Text>
            }
          />
        </Tab>
        <Tab title="HISTORY" className="py-2">
          <FlatList
            className="mt-4"
            data={history}
            keyExtractor={(item, index) => item.id || index.toString()}
            renderItem={renderItem}
            ListEmptyComponent={
              <Text className="text-center text-slate-500 mt-40 text-base">
                No patient history found.
              </Text>
            }
          />
        </Tab>
      </TabView>
    </View>
  );
};

export default PatientList;
