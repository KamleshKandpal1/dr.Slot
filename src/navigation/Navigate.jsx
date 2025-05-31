import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Details, Feedback, Form, Home, Logout, Policy} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StatusBar, TouchableOpacity, Text} from 'react-native';
import {useApp, AppProvider} from '../redux/AppContext.js';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Navigate = () => {
  return (
    <AppProvider>
      <StatusBar backgroundColor="#1e40af" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="New Visit"
            component={Form}
            options={{
              headerShown: true,
              title: 'New Visit Form',
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: '#1e40af'},
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

const HomeStack = () => {
  const {language, toggleLanguage} = useApp();

  const LanguageToggle = () => (
    <TouchableOpacity onPress={toggleLanguage} style={{marginRight: 15}}>
      <Text style={{color: '#fff'}}>
        {language === 'en' ? '🇬🇧 EN' : '🇮🇳 HI'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: '#1e40af'}, // dark header
        headerTintColor: '#fff', // text color
        headerTitleAlign: 'center',
        drawerActiveTintColor: '#1e40af',
        drawerInactiveTintColor: '#555',
        drawerStyle: {backgroundColor: '#f8fafc',paddingTop:30},
        headerRight: () => <LanguageToggle />,
      }}>
      <Drawer.Screen
        name="OPD Registration"
        component={Home}
        options={{
          drawerLabel: 'Register Patient',
          drawerIcon: ({color, size}) => (
            <Icon name="user-plus" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Hospital Details"
        component={Details}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="hospital-o" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={Feedback}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="comments" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={Policy}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="shield" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="sign-out" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Navigate;
