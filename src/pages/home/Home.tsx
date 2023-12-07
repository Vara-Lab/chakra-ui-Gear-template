import {} from "@chakra-ui/react";
import { Blocknumber } from "components/blockNumber";

import Gusano from "../../assets/images/3d Swirl Shape.svg";
import LogoWhite from "../../assets/images/vara street logoHOMEWhite.svg";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Partners } from "./sections/Partners";

function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
    </>
  );
}

export { Home };
