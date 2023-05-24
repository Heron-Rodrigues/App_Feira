import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Select, Image } from "native-base";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system"
import * as Speech from "expo-speech";
import { apiMeGuiaAi } from "../api";

// --> Mensagem de voz
// Speech.speak("Olá, seja bem-vindo ao aplicativo Me guia ai. Este app irá ser seu novo guia.");

// --> Rota
export const HomeRoute = 'Home';


// --> Tela Inicial
export function Home() {
  const cameraRef = React.useRef(null);
  const [permission, setPermission] = React.useState(false);
  const [camera, setCamera] = React.useState(false);

  // Tira uma foto
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync({base64: true, quality: 0});
      const response = await apiMeGuiaAi.post("/v1/models/predict", {
        model: 1,
        image: data.base64
      }).then((res) => res.data).catch((err) => console.log(err.request))

      console.log(data.uri != null, response)
    }
  }

  /* USEEFFECT ---------- */
  React.useEffect(() => {
    // Pede as permissões da camera
    const requestPermissions = async () => {
      try {
        const request = await MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setPermission(true);

      } catch (e) {
        console.log(e);
        setPermission(false);
      }
    };
    requestPermissions();
  }, [])
  /* ---------------------- */

  const example = () => {
    console.log("Renan")
  }

  const interv = useRef();
  const modelLoaded = useRef();

  const printExample = () => {
    console.log("Start")
    interv.current = setInterval(() => takePicture(), 1000)
    modelLoaded.current = true;
  }

  const stopExample = () => {
    console.log("Stop")
    clearInterval(interv.current)
    modelLoaded.current = false;
  }

  // Retorna os elementos da TELA
  return (
    <React.Fragment>
      <View flex={1}>
        <Camera
          style={{ flex: 1 }}
          onCameraReady={() => console.log("Camera Ready")}
          ref={ref => setCamera(ref)}
          type={CameraType.back}
        />
        <Select
          fontSize={22}
          height={"15%"}
          borderRadius={0}
          minHeight={"15%"}
          textAlign="center"
        >
          {/* Items do SELECT --> */}
          <Select.Item label="EEEP Valter Nunes de Alencar" />
          <Select.Item label="Casa" />
          <Select.Item label="Apartamento" />
          {/* < -- Items do SELECT */}
        </Select>

        <Button
          onPress={() => {
            if (!modelLoaded.current) {
              printExample()
            } else {
              stopExample()
            }
          }}
          _pressed={{ bg: "darkBlue.600" }}
          borderRadius={0}
          bg="darkBlue.400"
          size={"lg"}
          height={"15%"}
        >
          <Text bold color={"white"} fontSize={21}>
            Carregar Mapeamento
          </Text>
        </Button>
      </View>
    </React.Fragment>
  );
}