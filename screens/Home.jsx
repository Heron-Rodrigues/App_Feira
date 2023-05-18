import React, { useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Select, HStack, Center } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Speech from "expo-speech";

// --> Mensagem de voz
Speech.speak("Olá, seja bem-vindo ao aplicativo Me guia ai. Este app irá ser seu novo guia.");

// --> Rota
export const HomeRoute = 'Home';

// --> Tela Inicial
export function Home() {
  const [loaded, setloaded] = useState(false);
  const cameraRef = useRef(null);
  const [camera, setCamera] = React.useState(false);
  const [permission, setPermission] = React.useState(false);
  const [image, setImage] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        console.log(cameraStatus);
        setPermission(true);

      } catch (e) {
        console.log(e);
        setPermission(false);
      }
    })();
  }, [])

  const takePicture = async () => {
    const options = {
      quality: 0.8,
      base64: true,
      skipProcessing: true,
    };
    if (camera) {
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    }console.log(data.uri);
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

  <HStack position={"absolute"} py={3} w={"100%"}>
    <HStack>
      <Button mx={"auto"} onPress={() => takePicture()} colorScheme={"gray"} w={"56px"} height={"56px"} borderRadius={"56px"}>
        <HStack>
        <Icon name="camera-outline" size={28} color={"white"} />
      </HStack>
      </Button>
    </HStack>
      </HStack>
          

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