import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
   name: string;
   label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
   return (
      <FormControl>
         <FormLabel htmlFor="email">{label}</FormLabel>
         <ChakraInput
            name={name}
            type="email"
            id={name}
            bgColor="gray.900"
            variant="filled"
            _hover={{ bgColor: "gray.900" }}
            size="lg"
            focusBorderColor="pink.500"
            {...rest} />
      </FormControl>
   )
}
