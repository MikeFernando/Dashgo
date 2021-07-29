import {
   Box,
   Flex,
   Heading,
   Button,
   Icon,
   Table,
   Thead,
   Tr,
   Th,
   Checkbox,
   Tbody,
   Td,
   Text,
   useBreakpointValue,
   Spinner,
} from '@chakra-ui/react'
import { RiAddLine, RiEditLine } from 'react-icons/ri'
import Link from 'next/link'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/SideBar'
import { useUsers } from '../../services/hooks/useUsers'

export default function UsersList() {
   const { data, isLoading, isFetching, error } = useUsers();

   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
   });

   return (
      <Box>
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <Box flex="1" my="6" borderRadius={8} bg="gray.800" p="8">
               <Flex mb="8" justify="space-between" align="center">
                  <Heading size="lg" fontWeight="normal">
                     Usuários
                     {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
                  </Heading>
                  <Link href="/users/create" passHref>
                     <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine} size="20" />}>
                        Criar novo
                     </Button>
                  </Link>
               </Flex>

               { isLoading ? (
                  <Flex justify="center">
                     <Spinner />
                  </Flex>
               ) : error ? (
                  <Flex justify="center">
                     Falha ao obter dados dos usuários
                  </Flex>
               ) : (
                  <>
                     <Table colorScheme="whiteAlpha">
                        <Thead>
                           <Tr>
                              <Th px="6" color="gray.300" width="8">
                                 <Checkbox colorScheme="pink" />
                              </Th>
                              <Th>usuários</Th>
                              {isWideVersion && <Th>Data de cadastro</Th>}
                              <Th width="8"></Th>
                           </Tr>
                        </Thead>
                        <Tbody>
                           {data.map(user => {
                              return (
                                 <Tr key={user.id}>
                                    <Td px="6">
                                       <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                       <Box>
                                          <Text fontWeight="bold">{user.name}</Text>
                                          <Text fontWeight="normal" fontSize="sm" color="gray.300">{user.email}</Text>
                                       </Box>
                                    </Td>
                                       {isWideVersion && <Td>{user.createdAt}</Td>}
                                       {isWideVersion &&  <Td>
                                       <Button
                                          as="a"
                                          size="sm"
                                          fontSize="sm"
                                          colorScheme="purple"
                                          leftIcon={<Icon as={RiEditLine} size="20" />}>
                                          editar
                                       </Button>
                                    </Td>}
                                 </Tr>
                              )
                           })}
                        </Tbody>
                     </Table>
                     <Pagination />
                  </>
               )}
            </Box>
         </Flex>
      </Box>
   )
}
