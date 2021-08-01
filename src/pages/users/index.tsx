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
   Link,
} from '@chakra-ui/react'
import { RiAddLine, RiEditLine } from 'react-icons/ri'
import { useState } from 'react'
import NextLink from 'next/link'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/SideBar'
import { useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/api'

export default function UsersList() {
   const [page, setPage] = useState(1);
   const { data, isLoading, isFetching, error } = useUsers(page);

   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
   });

   async function handlePrefetchUser(userId: number) {
      await queryClient.prefetchQuery(['user', userId], async () => {
         const response = await api.get(`users/${userId}`)

         return response.data;
      }, {
         staleTime: 1000 * 60 * 10 // 10 minutes
      })
   }

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
                  <NextLink href="/users/create" passHref>
                     <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine} size="20" />}>
                        Criar novo
                     </Button>
                  </NextLink>
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
                           {data.users.map(user => {
                              return (
                                 <Tr key={user.id}>
                                    <Td px="6">
                                       <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                       <Box>
                                          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                             <Text fontWeight="bold">{user.name}</Text>
                                          </Link>
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
                     <Pagination
                        totalCountOfRegister={data.totalCount}
                        currentPage={page}
                        onPageChange={setPage}
                     />
                  </>
               )}
            </Box>
         </Flex>
      </Box>
   )
}
