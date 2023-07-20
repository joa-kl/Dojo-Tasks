import { Avatar, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react"

export const NavBar = () => {
    return (
        <Flex as="nav" p="10px" alignItems="center">
            <Heading as="h1">Dojo Tasks</Heading>
            <Spacer />
            
            <HStack spacing="20px">
                <Avatar bg="gray.200" p="10px"></Avatar>
                <Text>marion@mario.com</Text>
                <Button colorScheme="purple">Logout</Button>
            </HStack>
        </Flex>
        // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
        //     <Box w="150px" h="50px" bg="red">1</Box>
        //     <Box w="150px" h="50px" bg="blue">2</Box>
        //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
        //     <Box w="150px" h="50px" bg="yellow">4</Box>
        // </Flex>
    )
}
