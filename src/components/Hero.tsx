import { Box, Image } from "@mantine/core";
import hero from "../assets//images/Hero/vision1.png"; 

function Hero() {
  return (
    <Box
      component="section"
      id="home"
      pos="relative"
      h="80vh"
      mih={500}
      display="flex"
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Image
        src={hero}
        alt="E-commerce Business"
        pos="absolute"
        inset={0}
        w="100%"
        h="100%"
        fit="cover"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          zIndex: 0,
        }}
      />
      <Box pos="absolute" inset={0} style={{ zIndex: 1 }} />
    </Box>
  );
}

export default Hero;
