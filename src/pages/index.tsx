import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from '../components/Forms/Input'

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
               <Input name="email" type="email" label="E-mail" />
               <Input name="password" type="password" label="Senha" />
            </Stack>

            <Button type="submit" mt="8" size="lg" colorScheme="pink">
               Entrar
            </Button>
         </Flex>
      </Flex >
   )
}
