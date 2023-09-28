import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const { tabs } = Routes;

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route: { params }, navigation }: any) => ({
        tabBarIcon: ({ size }) => {
          return <Icon name={params?.icon} size={size}></Icon>
        },
        headerLeft: () =>
          <Icon
            name={"account-circle"}
            color={'black'}
            onPress={navigation.toggleDrawer}
            style={{ marginLeft: 15 }}
            size={30} />
      })}
    >
      {Object.values(tabs).map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{ headerShown: true }}
          initialParams={{ icon: item.icon }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNav;
