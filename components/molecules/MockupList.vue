<template>
  <v-row class="ma-2 mockup-container">
    <v-col cols="2">
      <v-img :src="getMockup.ThumbnailURL" height="150" width="150" class="mockup-border"/>
    </v-col>

    <v-col cols="8">
      <div class="pt-4">
        <h2> {{ getMockup.Name }} </h2>
        <v-row class="pt-4 pl-2">
          <span class="pt-1"> ${{ getMockup.Price }}  </span>
          <span class="pl-1"> <del> ${{ getMockup['Retail Price'] }} </del> </span>
        </v-row>
      </div>
    </v-col>

    <v-col cols="2" class="mockup-container-button">
      <v-btn
        class="btn btn-success ma-2"
        color="success"
        outlined
        text
        @click="openDetails(getMockup)"
      >
        View Details
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '@/models'

export default Vue.extend({
  props: {
    mockup: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    getMockup(): Object {
      return this.mockup;
    }
  },

  methods: {
    openDetails(product: Product): void {
      if (product && product.ProductID) {
        this.$router.push('/product/' + product.ProductID)
      }
    }
  }
})
</script>