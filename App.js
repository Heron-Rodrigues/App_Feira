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
       <TouchableOpacity
       onPress={setHaspermission}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 50
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Abrir Camera
            </Text>
          </TouchableOpacity>
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