import { Box, Text, Center, Heading, Container } from "@chakra-ui/react";
import { useState } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from "@polkadot/extension-dapp";
import { useAccount, useAlert } from "@gear-js/react-hooks";
import { Button, Input, Modal } from "@gear-js/ui";

function Dapp() {
  const { account } = useAccount();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [address, setAddress] = useState("");

  const [valueAmount, setValueAmount] = useState("");

  const alert = useAlert();

  const wsEndpoint = "wss://testnet.vara-network.io";

  const transfer = async function main() {
    await web3Enable("my wallet");

    const allAccounts = await web3Accounts();

    const accountextension = allAccounts[0];

    const wsProvider = new WsProvider(wsEndpoint);

    const api = await ApiPromise.create({ provider: wsProvider });

    const transferExtrinsic = api.tx.balances.transfer(
      address,
      Number(valueAmount) * 1000000000000
    );

    setValueAmount("");
    setAddress("");

    const injector = await web3FromSource(accountextension.meta.source);

    transferExtrinsic
      .signAndSend(
        accountextension.address,
        { signer: injector.signer },
        ({ status }) => {
          if (status.type === "Finalized") {
            alert.success(status.type);
          }
        }
      )
      .catch((error: any) => {
        console.log(":( transaction failed", error);
      });
  };

  const AddressInputChange = (event: any) => {
    setAddress(event.target.value);
  };

  const AmountInputChange = (event: any) => {
    setValueAmount(event.target.value);
  };
  return (
    <Container
      justifyContent="center"
      bgGradient="linear(to-l, #121215 ,#284736)"
      minWidth="100vw"
    >
      <Button text="Transfer" onClick={openModal} />
      {isModalOpen && (
        <Modal size="large" heading="Connect" close={closeModal}>
          <Center>
            <Heading size="xs" textColor="white">
              Address
            </Heading>
          </Center>
          <Input type="text" value={address} onChange={AddressInputChange} />
          <p>{address}</p>
          <Center>
            <Heading size="xs" textColor="white">
              Amount
            </Heading>
          </Center>
          <Input type="text" value={valueAmount} onChange={AmountInputChange} />
          <p>{valueAmount}</p>
          <Center>
            <Button text="Send" onClick={() => transfer()} />
          </Center>
        </Modal>
      )}
    </Container>
  );
}

export { Dapp };
