import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Main from '~/pages/Main';
import Header from '~/parts/Header';

import '~/config/ReactotronConfig';

import { store } from './store';

const Stack = createStackNavigator();

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar hidden={true} />
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: 'transparent',
            },
          }}
          initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Main}
            options={{
              headerTitle: (props) => <Header {...props} />,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
