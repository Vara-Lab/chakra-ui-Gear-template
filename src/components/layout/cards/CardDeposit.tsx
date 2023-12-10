/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "./Card.module.scss";

function CardDeposit() {
  return (
    <Box
      m={{ base: ".5rem", sm: "1rem", md: "2rem" }}
      borderWidth="1px"
      h="15rem"
      w={{ base: "20rem", sm: "20rem", md: "22rem" }}
      className={styles.CardDeposit}
    />
  );
}

export { CardDeposit };
