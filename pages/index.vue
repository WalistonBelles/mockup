<template>
  <v-container class="text-center">
    <v-btn @click="openList">
      Lista de Produtos
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  methods: {
    openList(): void {
      this.$router.push('/products');
    }
  }
})
</script>
