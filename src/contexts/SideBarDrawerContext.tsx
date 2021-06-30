import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useContext } from "react";
import { ReactNode } from "react"
import { createContext } from "react"

interface SideBarDrawerProviderProps {
   children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData)

export function SideBarDrawerProvider({ children }: SideBarDrawerProviderProps) {
   const disclosure = useDisclosure()
   const router = useRouter()

   useEffect(() => {
      disclosure.onClose()
   }, [router.asPath])

   return (
      <SideBarDrawerContext.Provider value={disclosure}>
         {children}
      </SideBarDrawerContext.Provider>
   )
}

export const useSideBarDrawer = () => {
   return useContext(SideBarDrawerContext);
}
