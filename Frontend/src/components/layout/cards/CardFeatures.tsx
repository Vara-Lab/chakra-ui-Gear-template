/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "./Card.module.scss";

function CardFeatures(props: { title: string }) {
  return (
    <Box
      m={{ base: ".5rem", sm: "1rem", md: "2rem" }}
      borderWidth="1px"
      h="15rem"
      w={{ base: "20rem", sm: "20rem", md: "22rem" }}
      className={styles.CardFeature}
    >
      <Heading m="1rem" color="white">
        {props.title}
      </Heading>
      <Text fontSize={{ sm: "1rem", md: ".8rem" }} color="white" m="1rem">
        Leverage your synthetic assets as collateral for stablecoin borrowing.
        Our streamlined platform offers secure, transparent lending, giving you
        the flexibility to enhance your investment strategies effectively.
      </Text>
    </Box>
  );
}

export { CardFeatures };
