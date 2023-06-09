import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { PRIMARY, WHITE } from '../colors';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontweight: '700' },
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO List',
          headerRight: HeaderRightButton,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: '로그인', headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
