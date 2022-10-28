/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import Homescreen from './UI/Screens/Homescreen';

const backgroundStyle = {
  backgroundColor: '#212121',
  flex: 1,
};

const queryClient = new QueryClient;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle="light-content" />
        <Homescreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
