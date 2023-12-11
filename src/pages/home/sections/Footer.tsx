import { Box, Heading } from "@chakra-ui/react";
import BgFooter from "../../../assets/images/Liquid Footer.svg";

function Footer() {
  return (
    <Box bgImage={BgFooter} h="17rem" bgSize="cover" bgRepeat="no-repeat">
      <Heading>FOOTER VARA STREET</Heading>
    </Box>
  );
}

export { Footer };
