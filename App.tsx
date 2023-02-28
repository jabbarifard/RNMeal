import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
// import FavoritesContextProvider from './store/context/favorites-context';
import FavoritesScreen from './screens/FavoritesScreen';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

// type Props = NativeStackScreenProps<RootStackParamList, "Drawer">;

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string }; // categoryId: string };
  Drawer: undefined;
};

export type ParamListBase = {
  Categories: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<ParamListBase>();

const DrawerNavigator = (): JSX.Element => {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name='Categories' component={CategoriesScreen} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' }
            }}
          >
            <Stack.Screen
              name="Drawer"
              // name="MealsCategories"
              // component={CategoriesScreen}
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                // headerStyle: { backgroundColor: '#351401' },
                // headerTintColor: 'white',
                // contentStyle: { backgroundColor: '#3f2f25' }
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            // options={({ route, navigation }) => {//setting options dynamically and taking the route
            //   const catId = route.params.categoryId;
            //   return{
            //     title: catId,
            //   }
            // }}
            ></Stack.Screen>
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
            // options={{//if we have indirect interaction with the screen this works, but
            //if we need a direct interaction with MealDetailScreen we should do something in that screen
            //and set options by using layoutEffect
            //   headerRight: () => {//the value of headerRight is a react element(component unction) that returns jsx
            //     return <Button title="Tap me" onPress={}/>;
            //   }
            // }}
            ></Stack.Screen>
          </Stack.Navigator>
          {/* <CategoriesScreen /> */}
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
  },
});
