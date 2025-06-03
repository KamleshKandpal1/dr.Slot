import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  Linking,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Details = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:expamledsslot@gmail.com');
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-4 py-10 bg-stone-200 h-full">
        <View style={styles.row}>
          <Image style={styles.logo} source={require('../assets/Logo.png')} />
          <View style={styles.hosInfo}>
            <Text className="font-semibold">DS SLOT</Text>
            <Text className="font-medium">(GOVT. OF NCT OF DELHI)</Text>
            <Text className="font-medium">Kaushik Enclave, Delhi, 110084</Text>
            <Text className="font-medium items-center">
              Email:{' '}
              <Text
                className="text-blue-800 font-semibold underline"
                onPress={handleEmailPress}>
                expamledsslot@gmail.com
              </Text>
            </Text>
          </View>
        </View>
        <View className="mb-6 h-64">
          <Image
            className="h-full w-full "
            // resizeMode='contain'
            source={require('../assets/hospital.jpg')}
          />
        </View>
        <View className="px-5">
          <Text className="text-base font-normal leading-snug tracking-widest">
            DrSlot is a modern and user-friendly mobile application designed to
            simplify the process of booking medical appointments. Whether you’re
            a patient looking for a nearby specialist or a clinic managing
            multiple bookings, DrSlot streamlines the entire experience with
            real-time slot availability, instant confirmations, and reminders.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Details;

const styles = StyleSheet.create({
  row: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    height: 150,
    width: 150,
    objectFit: 'scale-down',
  },
  hosInfo: {
    alignItems: 'center',
  },
});
