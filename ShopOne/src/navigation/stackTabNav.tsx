
import { Routes } from "@navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from './tabNav';

const Stack = createNativeStackNavigator();
const { stack: { ItemScreen, SearchScreen, PlaceOrder } } = Routes;

export const StackTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Name'
                component={TabNav}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={SearchScreen.name}
                component={SearchScreen.component}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name={ItemScreen.name}
                component={ItemScreen.component}
                options={({ route }: any) => ({ headerShown: true, title: route.params?.name })}
            />
            <Stack.Screen
                name={PlaceOrder.name}
                component={PlaceOrder.component}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    )
}
