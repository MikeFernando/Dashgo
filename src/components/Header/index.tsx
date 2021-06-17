import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './logo'
import { NavNotification } from './NavNotification'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
   })

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

         {isWideVersion && <SearchBox />}

         <Flex align="center" ml="auto">
            <NavNotification />
            <Profile showProfileData={isWideVersion} />
         </Flex>
      </Flex>
   )
}
