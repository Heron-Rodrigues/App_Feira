import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Select } from "native-base";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Speech from "expo-speech";
import { apiMeGuiaAi } from "../api";

// --> Mensagem de voz
// Speech.speak("Olá, seja bem-vindo ao aplicativo Me guia ai. Este app irá ser seu novo guia.");

// --> Rota
export const HomeRoute = 'Home';

// --> Tela Inicial
export function Home() {
  const [loaded, setloaded] = React.useState(false);
  const cameraRef = React.useRef(null);
  const [permission, setPermission] = React.useState(false);
  const [camera, setCamera] = React.useState(false);

  const takePicture = () => {
    if (camera) {
      const data = camera.takePictureAsync();
      console.log(data.uri)
    }
  }

  React.useEffect(() => {
    const requestPermissions = async () => {
      try {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        console.log(cameraStatus);
        setPermission(true);

      } catch (e) {
        console.log(e);
        setPermission(false);
      }
    };
    requestPermissions();
  }, [])


  const example = () => {
    console.log("Renan")
  }

  let interv;

  const printExample = () => {
    interv = setInterval(() => example(), 2000)
  }

  const stopExample = () => {
    clearInterval(interv)
    interv = null;
  }

  return (
    <View style={styles.container}>
      <Select display={loaded ? "none" : "flex"} fontSize={22} height={"50%"} borderRadius={0} minHeight={"50%"} textAlign="center">
        <Select.Item label="EEEP Valter Nunes de Alencar" />
        <Select.Item label="Casa" />
        <Select.Item label="Apartamento" />
        <Select.Item label="Corporação" />
      </Select>
      <Button
        onPress={() => { setloaded(!loaded); }}
        _pressed={{ bg: "darkBlue.600" }}
        borderRadius={0}
        bg="darkBlue.400"
        size={"lg"}
        height={loaded ? "64px" : "50%"}
      >
        <Text bold color={"white"} fontSize={23}>Carregar Mapeamento</Text>
      </Button>
      {loaded
        ? (
          <Camera
            style={{ flex: 1 }}
            useCamera2Api
            onCameraReady={() => console.log("Camera Ready")}
            ref={ref => setCamera(ref)}
            type={CameraType.back}
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