import Navigate from './src/navigation/Navigate';
import * as eva from '@eva-design/eva';
import './global.css';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {ApplicationProvider} from '@ui-kitten/components';
import Toast from 'react-native-toast-message';
import PatientLoader from './src/components/PatientLoader';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <PatientLoader/>
        <Navigate />
        <Toast />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
