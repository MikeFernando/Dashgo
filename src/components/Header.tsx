import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
   return (
      // CONTAINER
      <Flex
         as="header"
         w="100%"
         maxWidth={1480}
         h="20"
         mx="auto"
         mt="4"
         px="6"
         align="center"
      >
         {/* LOGO */}
         <Text w="64" fontWeight="bold" letterSpacing="tight" fontSize="3xl">
            Dashgo
            <Text as="span" ml="1" color="pink.500">
               .
            </Text>
         </Text>
         {/* INPUT */}
         <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            align="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
         >
            <Input
               color="gray.50"
               variant="unstyled"
               px="4"
               mr="4"
               placeholder="Buscar na plataforma"
               _placeholder={{ colo: "gray.400" }}
            />
            <Icon as={RiSearchLine} fontSize="20" />
         </Flex>
         {/* HEADER ICONS AND PROFILE*/}
         <Flex
            align="center"
            ml="auto"
         >
            <HStack
               spacing="8"
               mx="8"
               pr="8"
               py="1"
               color="gray.300"
               borderRightWidth={1}
               borderColor="gray.700"
            >
               <Icon as={RiNotificationLine} fontSize="20" />
               <Icon as={RiUserAddLine} fontSize="20" />
            </HStack>

            <Flex align="center">
               <Box mr="4" textAlign="right">
                  <Text>Mike Fernando</Text>
                  <Text color="gray.300" fontSize="small">
                     Mikera2021@outlook.com
                  </Text>
               </Box>
               <Avatar size="md" name="Mike Fernando" src="https://github.com/MikeFernando.png" />
            </Flex>
         </Flex>
      </Flex>
   )
}
