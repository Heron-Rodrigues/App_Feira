import React from "react";
import { Box, Heading, Text, Image } from "native-base";

export const SobreRoute = 'Sobre';

export function Sobre() {
  return (
    <Box>
      <Heading h={1}>Titulo</Heading>
      <Text>Cerrote</Text>
      <Image {...styles.image} width={"100%"} src="https://images.pexels.com/photos/16549110/pexels-photo-16549110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="Imagem" />
    </Box>
  )
}

const styles = {
  image: {
    width: "100%",
    height: "300px",
  },
}