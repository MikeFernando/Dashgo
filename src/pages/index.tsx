import { Button, Flex, Stack } from "@chakra-ui/react"
import { Input } from '../components/Forms/Input'
import { useForm, SubmitHandler } from "react-hook-form"

type SignInFormData = {
   email: string;
   password: string;
}

export default function Home() {
   const { register, handleSubmit, formState } = useForm()

   const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
      await new Promise(resolve => setTimeout(resolve, 3000))

      console.log(values)
   }
   return (
      <Flex w="100vw" h="100vh" align="center" justify="center">
         <Flex
            as="form"
            width="100%"
            maxWidth={360}
            bg="gray.800"
            p="8"
            flexDir="column"
            borderRadius={8}
            onSubmit={handleSubmit(handleSignIn)}
         >
            <Stack spacing="4">
               <Input
                 name="email"
                 type="email"
                 label="E-mail"
                 {...register('email')}
               />
               <Input
                 name="password"
                 type="password"
                 label="Senha"
                 {...register('password')}
               />
            </Stack>

            <Button
              type="submit"
              mt="8"
              size="lg"
              colorScheme="pink"
              isLoading={formState.isSubmitting}
            >
               Entrar
            </Button>
         </Flex>
      </Flex >
   )
}
