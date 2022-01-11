<template>
  <v-container class="mt-4">
    <v-row class="ma-2 mockup-container">
      <v-col cols="4">
        <v-img :src="getMockup.PictureURL" height="350" class="mockup-border align-end" />
        <v-row v-if="getBadge" class="mockup-badge text-center">
          <v-chip
            v-for="(badge, idx) in getBadge"
            class="ma-2"
            :key="idx"
            label
            color="#ff460f"
            text-color="#fff"
          >
            {{ badge }}
          </v-chip>
        </v-row>
      </v-col>

      <v-col cols="6">
        <div class="pt-4">
          <h2 class="pl-2"> {{ getMockup.Name }} </h2>
          <v-rating
            v-model="getMockup.RatingAvg"
            empty-icon="$ratingFull"
            half-increments
            hover
            small
            readonly
          ></v-rating>
        </div>

        <div class="mt-2">
          {{ getMockup.Description }}
        </div>
      </v-col>

      <v-col cols="2" class="mockup-container-button text-center">
        <v-row class="pt-4 pl-2 text-center">
          <h2 class="pt-1"> ${{ getMockup.Price }}  </h2>
          <h3 class="pl-1"> <del> ${{ getMockup['Retail Price'] }} </del> </h3>
        </v-row>

        <div>
          <span v-if="getMockup.Stock === 0" class="out-stock">
            Out Stock
          </span>

          <br>
          <v-btn
            class="btn-strong btn-success ma-2"
            color="success"
            outlined
            text
            @click="addToCart()"
          >
            Add to Cart
          </v-btn>
        </div>
      </v-col>

      <v-col cols="4">
        <strong> Brand: </strong> {{ getMockup.Brand }} <br>
        <strong> Color: </strong> {{ getMockup.Color }}
      </v-col>

      <v-col cols="12" class="text-center">
        <v-btn
          text
          class="btn btn-success-secondary"
          @click="back()"
        >
          Voltar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
    getMockup(): Product {
      return this.mockup;
    },

    getBadge(): Product | void {
      if (this.mockup.Badges)
        return this.mockup.Badges.split('|');
      return;
    }
  },

  methods: {
    back(): void {
      this.$router.push('/products');
    },

    addToCart(this: any) {
      this.$toast.success(
        'Product added successfully',
        {
          keepOnHover: true,
          position: 'top-center',
          duration: 3000,
          fullWidth: true,
          theme: "toasted-primary",
        }
      )
    }
  }
})
</script>