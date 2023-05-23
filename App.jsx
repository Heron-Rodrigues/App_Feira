import React from "react";
import { NativeBaseProvider } from "native-base";
import { Navigator } from "./components/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

