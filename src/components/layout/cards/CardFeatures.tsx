import { Box, Heading, Text } from "@chakra-ui/react"



function CardFeatures(){

    return(
    <Box borderColor="green.100" borderWidth="1px" borderRadius="20" h="15rem" w="25rem" bgGradient='linear(to-l, #1C1C1C ,#121212)'>
    <Heading m="1rem" color="white">
      Lending
    </Heading>
    <Text color="white" m="1rem"
    >
    Leverage your synthetic assets as collateral 
    for stablecoin borrowing. Our streamlined platform 
    offers secure, transparent lending, giving you the flexibility 
    to enhance your investment strategies effectively.</Text>
</Box>
    )
}

export {CardFeatures}