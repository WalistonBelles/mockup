<template>
  <v-container class="mt-4">
    <ValueNoExists 
      v-if="!mockupExists()"
      text="Produto não encontrado"
      to="/products"
    />

    <MockupInfo
      v-else
      :mockup="getMockup"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mockupData } from '@/utils/mockupData'
import { Product } from '@/models'

export default Vue.extend({
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    mockup_id: {
      type: Number,
      default: null
    }
  },

  computed: {
    mockupList(): Object[] {
      return mockupData;
    },
    getMockup(this: any): Product {
      return this.mockupList.find((mockup: Product) => mockup.ProductID === this.mockup_id);
    }
  },

  methods: {
    mockupExists(this: any): Boolean {
      return this.mockupList.some((mockup: Product) => mockup.ProductID === this.mockup_id);
    },
  }
})
</script>