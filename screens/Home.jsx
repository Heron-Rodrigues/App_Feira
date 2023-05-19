import React, { useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Select, HStack, Center, Image } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Camera, CameraType } from "expo-camera";
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
  const [permission, setPermission] = React.useState(false);
  const [camera, setCamera] = React.useState(false);
  const [image, setImage] = React.useState(null);

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
    if (camera) {
      const data = await camera.takePictureAsync();
      console.log(data.uri)
      if (data) {
        RNFS.readFile(data.uri, 'base64')
          .then(res => {
            setImage(res);
          })
      }
    }
    console.log(image);
  }

  return (
    <View style={styles.container}>
      <Select display={loaded ? "none" : "flex"} fontSize={22} height={"50%"} borderRadius={0} minHeight={"50%"} textAlign="center">
        <Select.Item label="EEEP Valter Nunes de Alencar" />
        <Select.Item label="Casa" />
        <Select.Item label="Apartamento" />
        <Select.Item label="Corporação" />
      </Select>
      <Button _pressed={{ bg: "darkBlue.600" }} onPress={() => { setloaded(!loaded) }} borderRadius={0} bg="darkBlue.400" size={"lg"} height={loaded ? "64px" : "50%"}>
        <Text bold color={"white"} fontSize={23}>Carregar Mapeamento</Text>
      </Button>
      <View display={loaded ? "flex" : "none"} flex={1} position={"relative"} justifyContent={"flex-end"} alignItems={"center"}>
      {loaded ? (
        <Camera
          style={styles.camera}
          ref={ref => setCamera(ref)}
          type={CameraType.back}
        />
      ) : null}
      <HStack position={"absolute"} py={3} w={"100%"} justifyContent={"center"} alignItems={"center"}>
        <HStack>
          <Button onPress={() => takePicture()} colorScheme={"gray"} w={"70px"} height={"70px"} borderRadius={"56px"}>
            <HStack>
              <Icon name="camera-outline" size={35} color={"white"}/>
            </HStack>
          </Button>
        </HStack>
      </HStack>
      </View>
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