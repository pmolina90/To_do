import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';

const Main = () => (
  <PaperProvider>
    <App />
  </PaperProvider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => Main);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);