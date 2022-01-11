<template>
  <Mockup 
    v-if="!getMockup"
  />

  <MockupDetail
    :mockup_id="getMockup"
    v-else
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    is_detail: {
      type: Number,
      default: null
    }
  },

  computed: {
    getMockup(this: any) {
      return this.is_detail;
    }
  }
})
</script>