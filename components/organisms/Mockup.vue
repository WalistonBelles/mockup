<template>
  <v-container class="mt-4">
    <MockupList 
      v-for="(mockup, idx) in mockupList" 
      :key="idx"
      :mockup="mockup"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mockupData } from '@/utils/mockupData'

export default Vue.extend({
  computed: {
    mockupList(): Object[] {
      return mockupData;
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  
}
</style>