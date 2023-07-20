import { Box, Container, Heading, Text } from "@chakra-ui/react";

const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ":hover": {
        color: "black",
        bg: "blue.200"
    }
}

export default function Dashboard() {
  return (
      <Container as="section" maxW="4xl" py="20px">
          <Heading my="30px" p="10px">Heading</Heading>
          <Text ml="30px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eveniet corporis officiis, illum mollitia voluptatem. Nihil pariatur recusandae, quos sint deleniti delectus labore aspernatur ducimus non incidunt perferendis accusamus cumque.</Text>
          <Text ml="30px" color="blue.400" fontWeight="bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, magni!</Text>

          <Box my="30px" p="20px" bg="pink.700">
              <Text color="white">This is a box</Text>
          </Box>

          <Box sx={boxStyles}>
              Hello, Ninjas!
          </Box>
    </Container>
  )
}