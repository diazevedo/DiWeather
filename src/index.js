import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Main from '~/pages/Main';
import Initial from '~/pages/Initial';

import Header from '~/parts/Header';

import '~/config/ReactotronConfig';

import { store } from './store';

const RootStack = createStackNavigator();

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar hidden={true} />

        <RootStack.Navigator
          initialRouteName="Initial"
          screenOptions={{
            headerTitle: (props) => <Header {...props} />,
          }}>
          <RootStack.Screen
            name="Initial"
            component={Initial}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="Main"
            component={Main}
            options={{
              headerTitleAlign: 'left',
              headerTitle: (props) => <Header {...props} />,
              headerStyle: {
                shadowColor: 'transparent',
              },
              headerLeft: false,
            }}
          />
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
