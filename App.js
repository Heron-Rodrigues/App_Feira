import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native'
import {Camera} from 'expo-camera'

export default function App () {
const [type, setType] = useState(Camera.Constants.Type.back);
const [hasPermission, setHaspermission] = useState(null);

useEffect(() => {
  (async () => {
    const{ status } = await Camera.requestCameraPermissionsAsync();
    setHaspermission(status === 'granted');
  })();
}, []);

if(hasPermission === null){
  return<View/>
}

if(hasPermission === false) {
  return <Text>Acesso negado</Text>
}

  return (
    <SafeAreaView style={styles.container}>
      <Camera
      style={{ flex: 1}}
      type={type}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})