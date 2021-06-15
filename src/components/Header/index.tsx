import { Flex } from '@chakra-ui/react'

import { Logo } from './logo'
import { NavNotification } from './NavNotification'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
   return (
      <Flex
         as="header"
         w="100%"
         maxWidth={1480}
         h="20"
         mx="auto"
         mt="4"
         px="6"
         align="center">

         <Logo />

         <SearchBox />

         <Flex align="center" ml="auto">
            <NavNotification />
            <Profile />
         </Flex>
      </Flex>
   )
}
