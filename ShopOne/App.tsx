import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav, DrawerNav } from '@navigation';
import { UserStore } from '@store';
import { observer } from 'mobx-react-lite';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const { authenticated } = UserStore;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {authenticated ? <StackNav /> : <DrawerNav />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default observer(App);


