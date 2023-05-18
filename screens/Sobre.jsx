import React, { useRef } from "react";
import { Box, Heading, Text, Center, Button } from "native-base";
import * as Speech from "expo-speech";

export const SobreRoute = 'Sobre';

export function Sobre() {
  const text = "";

  return (
    <Center flex={1} padding={"56px"}>
      <Box width={"100%"} >
        <Button onPress={() => Speech.speak("Este app foi desenvolvido com o intuito de lhe auxiliar lhe proporcionando lugares pré mapeados assim facilitando a sua vida")} height={"700px"} width={"100%"}>
          <Text fontSize={30}>Abrir Audio</Text>
        </Button>
        <Text marginTop={"1px"} fontSize={"50px"}>{text}</Text>
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