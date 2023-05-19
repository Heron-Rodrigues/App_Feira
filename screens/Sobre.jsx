import React from "react";
import { Box, Text, Center, Button } from "native-base";
import * as Speech from "expo-speech";

export const SobreRoute = 'Sobre';

export function Sobre() {
  const textToSpeek = "Este app foi desenvolvido com o intuito de lhe auxiliar lhe proporcionando lugares pré mapeados assim facilitando a sua vida.";
  return (
    <Center flex={1} padding={"30px"}>
      <Box width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Button bg={"darkBlue.400"} _pressed={{bg: "darkBlue.600"}} onPress={() => {
          Speech.speak(textToSpeek); 
        }} 
        height={"90%"} width={"100%"}>
          <Text fontSize={22} color={"white"} bold>Abrir Audio</Text>
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