import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Main from '~/pages/Main';
import WeatherDay from '~/pages/WeatherDay';

import Header from '~/parts/Header';

import '~/config/ReactotronConfig';

import { store } from './store';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitle: (props) => <Header {...props} />,
        headerStyle: {
          shadowColor: 'transparent',
        },
      }}>
      <MainStack.Screen name="Home" component={Main} />
    </MainStack.Navigator>
  );
}

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar hidden={true} />

        <RootStack.Navigator
          mode="modal"
          initialRouteName="Home"
          headerMode="none">
          <RootStack.Screen name="Home" component={MainStackScreen} />

          <RootStack.Screen
            name="WeatherDay"
            component={WeatherDay}
            options={{
              title: 'My modal',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </RootStack.Navigator>
      </Provider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
