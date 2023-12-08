import { Container, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { CardFeatures } from "components/layout/cards/CardFeatures";

function Features() {
  return (
    <Container
      maxW="100vw"
      bgGradient="linear(to-l, #121215 ,#284736)"
      pt="10rem"
    >
      <Box ml="2rem" textAlign="center" position="relative">
        <Text
          left={{ lg: "34rem", xl: "38rem", "2xl": "42rem" }}
          position="absolute"
          top="-5.5rem"
          color="white"
          fontWeight="200"
          fontSize="5rem"
        >
          DEFI
        </Text>
        <Heading
          left={{ lg: "41rem", xl: "45rem", "2xl": "49rem" }}
          position="absolute"
          top="0rem"
          color="white"
          fontWeight="700"
        >
          Services
        </Heading>
      </Box>
      <Flex
        mt="4rem"
        justify="center"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <CardFeatures title="Lending" />
        <CardFeatures title="Staking" />
        <CardFeatures title="Lending" />
      </Flex>
    </Container>
  );
}

export { Features };
