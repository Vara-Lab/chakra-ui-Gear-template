import {
  Box,
  Text,
  Center,
  Heading,
  Container,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";

import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from "@polkadot/extension-dapp";
import { useAccount, useAlert } from "@gear-js/react-hooks";

import { DepositFunds } from "components/gear/DepositFunds";
import { CollateralBalanceToken } from "components/gear/CollateralBalance";
import { ReadState } from "components/gear/ReadState";
import { Blocknumber } from "components/gear/blockNumber";
import { CardDeposit } from "components/layout/cards/CardDeposit";
import styles from "../../components/layout/cards/Card.module.scss";

function Dapp() {
  return (
    <Container p="0" maxW="100vw" bgGradient="linear(to-l, #121215 ,#284736)">
      <Box w="100vw" bgRepeat="no-repeat" bgPos="center">
        <Blocknumber />
        <Stack
          pl={{ base: "1rem", md: "3rem", xl: "8rem", "2xl": "15rem" }}
          pr={{ base: "1rem" }}
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Box className={styles.CardDeposit}>
                <DepositFunds />
              </Box>

              <CollateralBalanceToken />
              <ReadState />
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify="center"
            align="center"
            position="relative"
            w="full"
          >
            {/* <Blob
          w='150%'
          h='150%'
          position='absolute'
          top='-20%'
          left={0}
          zIndex={-1}
          color={useColorModeValue('red.50', 'red.400')}
        /> */}
            {/* <Box
          position='relative'
          height='300px'
          rounded='2xl'
          boxShadow='2xl'
          width='full'
          overflow='hidden'>
          <IconButton
            aria-label='Play Button'
            variant='ghost'
            _hover={{ bg: 'transparent' }}
            // icon={<PlayIcon w={12} h={12} />}
            size='lg'
            color='white'
            position='absolute'
            left='50%'
            top='50%'
            transform='translateX(-50%) translateY(-50%)'
          />
          <Image
            alt='Hero Image'
            fit='cover'
            align='center'
            w='100%'
            h='100%'
            src={Gusano}
            
          />
        </Box> */}
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
}

export { Dapp };
