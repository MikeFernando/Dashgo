import { Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

export default function Home() {
   return (
      <Flex
         w="100vw"
         h="100vh"
         align="center"
         justify="center"
      >
         <Flex
            as="form"
            width="100%"
            maxWidth={360}
            bg="gray.800"
            p="8"
            flexDir="column"
            borderRadius={8}
         >
            <Stack spacing="4">
               <FormControl>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                     type="email"
                     name="E-mail"
                     id="email"
                     bgColor="gray.900"
                     variant="filled"
                     _hover={{ bgColor: "gray.900" }}
                     size="lg"
                     focusBorderColor="pink.500" />
               </FormControl>
               <FormControl>
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <Input
                     type="password"
                     name="Senha"
                     id="password"
                     bgColor="gray.900"
                     variant="filled"
                     _hover={{ bgColor: "gray.900" }}
                     size="lg"
                     focusBorderColor="pink.500" />
               </FormControl>
            </Stack>

            <Button
               type="submit"
               mt="8"
               size="lg"
               colorScheme="pink">
               Entrar
            </Button>
         </Flex>
      </Flex >
   )
}
