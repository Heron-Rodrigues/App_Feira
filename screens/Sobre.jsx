import React, { useRef } from "react";
import { Box, Heading, Text, Center, Button } from "native-base";
import * as Speech from "expo-speech";

export const SobreRoute = 'Sobre';

export function Sobre() {
  const text = "Este app foi desenvolvido com o intuito de lhe auxiliar lhe proporcionando lugares pré mapeados assim facilitando a sua vida";

  return (
    <Center flex={1} padding={"16px"}>
      <Box marginBottom={"200px"} >
        <Button onPress={() => Speech.speak(text)} height={"300px"}>Abrir audio</Button>
        <Text marginTop={"15px"}>{text}</Text>
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