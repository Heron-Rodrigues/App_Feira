import React, { useRef } from "react";
import { Box, Heading, Text, Center, Button } from "native-base";
import * as Speech from "expo-speech";

export const SobreRoute = 'Sobre';

export function Sobre() {
  const text = "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos";

  return (
    <Center flex={1} padding={"16px"}>
      <Box>
        <Heading marginBottom={"12px"} size={"xl"}>Sobre</Heading>
        <Button onPress={() => Speech.speak(text)} size={"lg"}>Abrir audio</Button>
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