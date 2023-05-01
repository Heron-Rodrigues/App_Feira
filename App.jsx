import React from "react";
import { NativeBaseProvider } from "native-base";
import { Navigator } from "./components/Navigator";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

