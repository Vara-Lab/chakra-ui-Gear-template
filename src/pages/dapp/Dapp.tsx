import { Box, Text, Center, Heading, Container } from "@chakra-ui/react";
import { useState } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from "@polkadot/extension-dapp";
import { useAccount, useAlert } from "@gear-js/react-hooks";

import { DepositFunds } from "components/gear/DepositFunds";

function Dapp() {
  return (
    <Container
      justifyContent="center"
      bgGradient="linear(to-l, #121215 ,#284736)"
      minWidth="100vw"
    >
      <DepositFunds />
    </Container>
  );
}

export { Dapp };
