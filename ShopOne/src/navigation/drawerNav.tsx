import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Routes } from './routes';
import React from 'react';
import { UserStore } from '@store';
import { observer } from 'mobx-react-lite';
import { Button } from '@components/elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNav from './tabNav';
import { DrawerActions } from '@react-navigation/native';
import { StackTab } from '@navigation';

const Drawer = createDrawerNavigator();
const { drawer } = Routes;

const DrawerNav = () => {

  const { signOutFn, name } = UserStore;

  return (
    <Drawer.Navigator
      screenOptions={({ route, navigation }: { route: any, navigation: any }) => ({
        drawerIcon: ({ size }) => {
          return <Icon name={route.params.icon} size={size} color={'black'} />
        },
        headerLeft: () =>
          <Icon
            name={'close'}
            color={'black'}
            onPress={_ => {
              navigation.dispatch(DrawerActions.jumpTo('Account'))
            }}
            style={{ marginLeft: 15 }}
            size={30} />
      }
      )}
      drawerContent={(props) => {
        return (
          <>
            <DrawerContentScrollView {...props} bounces={false}>
              <DrawerItemList {...props} />
              <Button
                label='Sign Out'
                onPress={() => {
                  signOutFn({ name: name })
                }}
                extraProps={{ alignSelf: 'center' }} />
            </DrawerContentScrollView>
          </>
        );
      }}
    >
      {Object.values(drawer).map((item, index) => (
        <Drawer.Screen
          options={{
            drawerItemStyle: !item.component && { display: 'none' },
            headerShown: !!item.component
          }}
          name={item.name}
          component={item.component ?? StackTab}
          initialParams={{ icon: item.icon }}
          key={index} />
      ))}
    </Drawer.Navigator>
  );
};

export default observer(DrawerNav);
