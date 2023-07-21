import { Avatar, AvatarBadge, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons"

export const NavBar = () => {
    const toast = useToast()

    const showToast = () => {
        toast({
            title: "Logged out",
            description: "Successfully logged out",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top",
            icon: <UnlockIcon/>
        })
    }

    return (
        <Flex as="nav" p="10px" mb="40px" alignItems="center">
            <Heading as="h1">Dojo Tasks</Heading>
            <Spacer />
            
            <HStack spacing="20px">
                <Avatar src="/img/mario.png" bg="gray.200">
                    <AvatarBadge width="1.3em" bg="teal.400">
                        <Text fontSize="xs">3</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>marion@mario.com</Text>
                <Button colorScheme="purple" onClick={showToast}>Logout</Button>
            </HStack>
        </Flex>
    )
}
