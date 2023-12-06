import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  Center,
  
} from '@chakra-ui/react'
import { Blocknumber } from 'components/blockNumber';

import Gusano from "../../assets/images/3d Swirl Shape.svg"
import LogoWhite from "../../assets/images/vara street logoHOMEWhite.svg"
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';





function Home() {
  


  return (
    <>
        <Hero />
        <Features />
    </>
        
  )
  
}


export { Home };
