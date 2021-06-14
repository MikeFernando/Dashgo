import { Button, Stack, Box } from "@chakra-ui/react";

export function Pagination() {
   return (
      <Stack direction="row" spacing="6" mt="8" justify="space-between" align="center" >
         <Box><strong>0</strong> - <strong>10</strong> registros de <strong>100</strong></Box>
         <Stack direction="row" spacing="2">
            <Button
               size="sm"
               fontSize="xs"
               colorScheme="pink"
               width="4"
               disabled
               _disabled={{ bg: 'pink.500', cursor: 'default' }}
            >
               1
            </Button>
            <Button
               size="sm"
               fontSize="xs"
               bg="gray.700"
               width="4"
               _hover={{ bg: 'gray.500' }}
            >
               2
            </Button>
            <Button
               size="sm"
               fontSize="xs"
               bg="gray.700"
               width="4"
               _hover={{ bg: 'gray.500' }}
            >
               3
            </Button>
            <Button
               size="sm"
               fontSize="xs"
               bg="gray.700"
               width="4"
               _hover={{ bg: 'gray.500' }}
            >
               4
            </Button>
         </Stack>
      </Stack>
   )
}
