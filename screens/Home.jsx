import React, { useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Select } from "native-base";
import Icon from "react-native-vector-icons/Ionicons"
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";


// --> Rota
export const HomeRoute = 'Home';

// --> Tela Inicial
export function Home() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [loaded, setloaded] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, [])

  if (hasCameraPermission === false) {
    return <Text>Sem acesso a câmera!</Text>
  }

  return (
    <View style={styles.container}>
      <Select display={loaded ? "none" : "flex"} fontSize={22} height={"50%"} borderRadius={0} minHeight={"50%"} textAlign="center">
        <Select.Item label="EEEP Valter Nunes de Alencar" />
        <Select.Item label="Casa" />
        <Select.Item label="Apartamento" />
        <Select.Item label="Corporação" />
      </Select>
      <Button _pressed={{bg: "darkBlue.700"}} onPress={(e) => {setloaded(!loaded)}} borderRadius={0} bg="darkBlue.400" size={"lg"} height={loaded ? "64px" : "50%"}>Carregar mapeamento</Button>
      {loaded ? (
        <Camera
          style={styles.camera}
          ref={cameraRef}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1
  }
})