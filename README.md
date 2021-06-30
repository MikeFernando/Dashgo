> # Sidebar responsiva

                           Before

> ![Imgur](https://imgur.com/vgmSzeV.gif)

                           After

> ![Imgur](https://imgur.com/FHKRIig.gif)

## Commit

-  Criei um componente SideBarNav e passei a Stack que continha os dados da SideBar
   como NavSection, NavLink e importei o SideNavBar no lugar, porque eu quero que ela
   seja aberta com um botão.
-  No index de SideBar criei uma variável isDrawerSideBar(quer dizer uma nav flutuante,
   as pessoas costumam chamar de Drawer, porque fica por cima do conteúdo). = useBreakPointValue
   do chakra/react. passando: { base: true, lg: false } dizendo que quando for large
   não quero que fique Drawer.
-  Ai eu verifico com If(isDrawerSideBar) eu utilizo o Drawer do chakra, ele recebe
   uma propriedade isOpen={true ou false}, placement={ top, right, bottom, left} e uma função
   onClose={() => {para fechar}}
-  Dentro do Drawer importo DrawerOverLay para deixar a tela mais escura.
-  DrawerContent que vai fica o conteúdo do Drawer a SideBar em si (por padrão ela vai
   ficar com bg={light} então altero para bg={gray-900}).
-  Dentro desse DrawerContent coloco DrawerCloseButton que é um botão para fechar SideBar
   passando mt="6"
-  DrawerHeader Navegação que tipo um título
-  DrawerBody que é o conteúdo
   <br />

> ## SideBarDrawerContext

-  Eu preciso fechar/abrir a SideBar clicando no botão.
-  Mas o botão de abrir a SideBar fica no meu componente Header e para compartilhar
   informações entre outros componentes é apropriado o uso de Contextos.

-  Na ./src criei uma pasta ./contexts SideBarDrawerContext
-  SideBarDrawerContext = createContext do 'react'
-  Exportar um provider chamado SideBarDrawerProvider retornando SideBarDrawerContext.Provider
   passando um value={} e no conteúdo o children.
-  Interface SideBarDrawerProviderProps para permitir que o children receba tudo que um componente recebe (ReactNode)
   > ### Obs:
-  Para o value SideBarDrawerContext.Provider teria que criar um estado e duas funções
   para abrir e fechar o botão alterando o valor do estado.
-  Mas o chakra traz pronto essa funcionalidade através de um hook chamado useDisclosure
   ele basicamente retorna se está aberto, fechado etc... então eu passo esse hook no value
   do meu contexto.
-  E preciso dizer que tipo será o meu SideBarDrawerContext.
-  type SideBarDrawerContextData = UseDisclosureReturn porque são os dados que o hook useDisclosure retorna.
   (Para ver oque um hook retorna basta clicar ctrl + clique no hook) nesse caso ele retorna UseDisclosureReturn.)
-  {} as UseDisclosureReturn

> ### Hook useSideBarDrawer Para não ficar importando o useContext do React toda vez que for utilizar as informações desse contexto

-  Muito simples exporto uma variável que recebe uma função useSideBarDrawer que retorna o useContext do react passando SideBarDrawerContext.
-  Lá no ./App passo esse Provider por volta dos componentes que eu quero que tenha acesso.
-  Agora no meu Header eu ja posso utilizar a informação do SideBarDrawerContext para
   abrir/fechar o Drawer
   \_ No Header importo { onOpen } = useSideBarDrawer()
-  E verifico se eu não estiver na versão if(!isWideVersion) onde aparece a sideBar
-  Eu vou colocar um botão a mais, que vai ser um IconButton do chakra passando algumas
   propriedades aria-label="Open navigation" icon={Icon as={RiMenuLine}} fontSize="24"
   variante="unstyled" onClick={onOpen} mr="2"
-  Volto no componente SideBar e import o hook useSideBarDrawer pegando isOpen, e isClose
   passando para o Drawer.

> ### Se trocar de tela a sideBar vai continuar ativa, como resolver?

-  No contexto eu posso pegar router = useRouter do react e utilizar a propriedade asPath
   que retorna exatamente a rota que está ativa.
-  Então com useEffect eu posso fechar a sideBar com método disclosure.onClose toda vez que router.asPath mudar
