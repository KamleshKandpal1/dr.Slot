import 'react-native-gesture-handler';
import React from 'react';
import Navigate from './src/navigation/Navigate';
import './global.css';
const App = () => {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name="Home" component={Home} />
    //     <Drawer.Screen name="Profile" component={Profile} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <Navigate />
  );
};

export default App;
