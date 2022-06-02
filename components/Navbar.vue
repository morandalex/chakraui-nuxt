<template>
  <div>
    <CBox
      display="flex"
      :flex-dir="['column', 'row', 'row', 'row']"
      alignItems="center"
      justifyContent="center"
      bg="gray.800"
      p="2"
      mb="2"
    >
      <CButton
        variant="outline"
        :display="['flex', 'flex', 'none', 'none']"
        ref="btnRef"
        @click="isOpen = true"
        >Menu</CButton
      >
      <CBox
        :display="['none', 'none', 'flex', 'flex']"
        alignItems="center"
        justifyContent="center"
      >
        <CHeading color="white" textAlign="center" mr="3"
          >⚡️ fauna.life
        </CHeading>

        <CText mx="2" fontsize="md" color="white"
          ><NuxtLink to="/about">Chi siamo</NuxtLink></CText
        >
        <CText mx="2" fontsize="md" color="white"
          ><NuxtLink to="/readid">Leggi ID</NuxtLink></CText
        >
        <CText mx="2" fontsize="md" color="white"
          ><NuxtLink to="/profile">Profilo</NuxtLink></CText
        >
        <CText mx="2" fontsize="md" color="white"
          ><NuxtLink to="/support">Supporto</NuxtLink></CText
        >

        <CAvatar
          m="1"
          name="Marco CrottaSegun Adebayo"
          alt="Marco Crotta"
          src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
        >
        </CAvatar>
        <CButton m="1" variant="solid" background="green" color="white">
          Esci</CButton
        >
        <CIconButton
          m="1"
          color="white"
          variant="solid"
          background="green"
          :icon="colorMode === 'light' ? 'moon' : 'sun'"
          @click="toggleColorMode"
          :aria-label="`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`"
        />
      </CBox>
    </CBox>
    <CImage
      src="https://www.fauna.life/wp-content/uploads/2021/03/header.jpeg"
    ></CImage>

    <CDrawer
      :isOpen="isOpen"
      placement="left"
      :on-close="close"
      :initialFocusRef="() => $refs.inputInsideModal"
    >
      <CDrawerOverlay />
      <CDrawerContent>
        <CDrawerCloseButton />
        <CDrawerHeader>
          <CHeading>⚡️ fauna.life </CHeading>
        </CDrawerHeader>

        <CDrawerBody>
          <CBox
            display="flex"
            flex-dir="column"
            alignItems="left"
            justifyContent="left"
            textAlign="left"
            p="2"
          >
            <CText fontsize="4xl"> <NuxtLink to="/about">Chi siamo </NuxtLink></CText>
            <CText fontsize="4xl"> <NuxtLink to="/">Leggi ID </NuxtLink></CText>
            <CText fontsize="4xl"> <NuxtLink to="/">Profilo </NuxtLink></CText>
            <CText fontsize="4xl"> <NuxtLink to="/">Supporto </NuxtLink></CText>

            <CAvatar
              m="1"
              name="Marco CrottaSegun Adebayo"
              alt="Marco Crotta"
              src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
            >
            </CAvatar>
            <CButton m="1" variant="solid" background="green" color="white">
              Esci</CButton
            >
            <CIconButton
              m="1"
              color="white"
              variant="solid"
              background="green"
              :icon="colorMode === 'light' ? 'moon' : 'sun'"
              @click="toggleColorMode"
              :aria-label="`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
              } mode`"
            />
          </CBox>
        </CDrawerBody>
      </CDrawerContent>
    </CDrawer>
  </div>
</template>

<script>
export default {
  inject: ["$chakraColorMode", "$toggleColorMode"],
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
    theme() {
      return this.$chakraTheme();
    },
    toggleColorMode() {
      return this.$toggleColorMode;
    },
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>