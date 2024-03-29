import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFonts from "./hooks/useFonts";
import AppLoading from "expo-app-loading"; //permet de charger le Font complètement avant le 1er render

import HomeScreen from "./screens/HomeScreen";
import MusicScreen from "./screens/MusicScreen";
import FilmScreen from "./screens/FilmScreen";
// import NewItemScreen from "./screens/NewItemScreen";
// import UpdateItemScreen from "./screens/UpdateItemScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!dataLoaded) {
    //Attends que fetchFonts a terminé de charger
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
          <Stack.Screen name="Music" component={MusicScreen} options={{ title: 'Musiques' }}

          />
          <Stack.Screen name="Film" component={FilmScreen} options={{ title: 'Films' }} />
          {/* <Stack.Screen name="NewItem" component={NewItemScreen} options={{ title: 'Nouveau' }} />
          <Stack.Screen name="UpdateItem" component={UpdateItemScreen} options={{ title: 'MAJ' }} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});
