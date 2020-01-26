<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<script>
    export default {
        name: 'PageIndex',
        created() {
            this.$axios.get('https://localhost:5001/api/v1/products').then(res => console.log(res))
        }
    }
</script>
