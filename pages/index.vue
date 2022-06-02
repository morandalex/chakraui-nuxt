<template>
  <div class="container">
    <Navbar></Navbar>
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      flex-dir="column"
      justify-content="center"
    >
      <CFlex justify="center" direction="column" align="center">
        <CText fontSize="4xl">Utente: marco.crotta@gmail.com</CText>
        <CBox
          m="3"
          w="98%"
          rounded="md"
          border-width="3px"
          p="4"
          justify-content="center"
          align="center"
        >
          <CText fontSize="2xl"> Elenco Dati</CText>
          <CStack justify-content="center" align="center" direction="row">
            <CStack direction="column">
              <CBox p="2" rounded="md" background="green" color="white">
                <CText>Ruolo:</CText>
              </CBox>
              <CBox p="2" rounded="md" background="green" color="white">
                <CText>Fauna Life ID:</CText>
              </CBox>
            </CStack>
            <CStack direction="column">
              <CBox p="2" rounded="md" background="green" color="white">
                <CText>Proprietario</CText>
              </CBox>
              <CBox p="2" rounded="md" background="green" color="white">
                <CText>0x.....</CText>
              </CBox>
            </CStack>
          </CStack>
        </CBox>
      </CFlex>

      <CFlex justify="center" direction="column" align="center">
        <CText fontSize="4xl">I Tuoi Animali </CText>
        <CText fontSize="xl"
          >Clicca sul profilo per accedere ai dettagli
        </CText>

        <CBox
          m="3"
          rounded="md"
          border-width="3px"
          p="4"
          justify-content="center"
          align="center"
        >
          <NuxtLink to="/addnew">
            <CButton h="200px" variant="solid">
              <CStack align="center" direction="column">
                <CImage
                  w="100px"
                  src="https://app.fauna.life//img/icons/add_pet.png"
                ></CImage>
                <CText> Aggiungi Nuovo </CText>
              </CStack>
            </CButton>
          </NuxtLink>
        </CBox>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>