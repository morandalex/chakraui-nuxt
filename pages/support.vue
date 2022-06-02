<template>
  <div class="container">
    <div>
      <h1>Pagina di supporto</h1>
    <p><NuxtLink to="/" class="button--grey"><CButton background='grey' color='white' variant= 'solid '>Back home </CButton> </NuxtLink></p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: (process.server ? 'server' : 'client')
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #00C48D;
}
p {
  margin-top: 20px;
}
</style>
