<template>
  <ProductTemplate 
    :is_detail="getIsDetail"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProductPage',
  
  computed: {
    getIsDetail(this: any): number | void {
      if (this.$route.params && this.$route.params.id)
        return parseInt(this.$route.params.id);
    }
  }
})
</script>
