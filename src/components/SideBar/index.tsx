import {
   Box,
   useBreakpointValue,
   Drawer,
   DrawerOverlay,
   DrawerHeader,
   DrawerBody,
   DrawerContent,
   DrawerCloseButton
   } from '@chakra-ui/react'
import { useSideBarDrawer } from '../../contexts/SideBarDrawerContext'

import { SideBarNav } from './SideBarNav'

export function Sidebar() {
   const { isOpen, onClose } = useSideBarDrawer();
   const isDrawerSideBar = useBreakpointValue({
      base: true,
      lg: false
   })

   if (isDrawerSideBar) {
      return (
         <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
            <DrawerOverlay>
               <DrawerContent bg={'gray.900'}>
                  <DrawerHeader >Navegação</DrawerHeader>
                  <DrawerCloseButton mt="2" />
                  <DrawerBody>
                     <SideBarNav />
                  </DrawerBody>
               </DrawerContent>
            </DrawerOverlay>
         </Drawer>
      )
   }

   return (
      <Box as="aside" w="64" mr="8">
         <SideBarNav />
      </Box>
   )
}
