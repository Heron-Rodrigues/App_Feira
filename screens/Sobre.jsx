import React, { useRef } from "react";
import { Box, Text, Center, Button } from "native-base";
import * as Speech from "expo-speech";

export const SobreRoute = 'Sobre';

export function Sobre() {

  return (
    <Center flex={1} padding={"30px"}>
      <Box width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Button onPress={() => Speech.speak("Este app foi desenvolvido com o intuito de lhe auxiliar lhe proporcionando lugares pré mapeados assim facilitando a sua vida")} 
        height={"90%"} width={"100%"}>
          <Text fontSize={40}>Abrir Audio</Text>
        </Button>
      </Box>
    </Center>
  )
}

const styles = {
  image: {
    width: "100%",
    height: "300px",
  },
}