import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon} from "@chakra-ui/icons"

export const Profile = () => {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{color: "white", bg: "purple.400"}}>Account Info</Tab>
        <Tab _selected={{color: "white", bg: "purple.400"}}>Other</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing="4px">
            <ListItem>
              <ListIcon as={EmailIcon}/>
              Email: mario@mario.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, odio!
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              Lorem ipsum dolor sit amet consectetur
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing="4px">
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              Lorem ipsum dolor sit amet.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}