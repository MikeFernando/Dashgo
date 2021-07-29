import { Button, Flex, Stack } from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Input } from '../components/Forms/Input'

type SignInFormData = {
   email: string;
   password: string;
}

const signInFormSchema = yup.object().shape({
   email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
   password: yup.string().required('Senha obrigatória')
})

export default function Home() {
   const { register, handleSubmit, formState } = useForm({
      resolver: yupResolver(signInFormSchema)
   })

   const { errors } = formState;

   const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
      await new Promise(resolve => setTimeout(resolve, 2000))

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
                 error={errors.email}
                 {...register('email')}
               />
               <Input
                 name="password"
                 type="password"
                 label="Senha"
                 error={errors.password}
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
