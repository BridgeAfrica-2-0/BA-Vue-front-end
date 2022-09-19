<template>
  <div>
    <b-card
      class="border shadow card pr-3"
      style="height: 500px; padding-bottom: 50px"
    >
     
      <h6>Market Activites</h6>
      <div class="product-activi mt-2">
        <VuePerfectScrollbar
          class="scroll-area s-card"
          settings="{maxScrollbarLength: 60px}"
        >
          <b-table
            class="mt-2"
            borderless
            responsive
            :fields="fields"
            :items="items"
          >
            <template #cell(product)="data">
              <div class="d-flex">
                <b-avatar
                  size="4em"
                  variant="light"
                  :src="data.item.product.image"
                  class="mr-1"
                >
                </b-avatar>

                <span class="ml-1 m-auto">
                  {{ data.item.product.name }} <br />
                  <!-- <span> {{data.item.product.description}} </span> -->
                </span>
              </div>
            </template>

             <template #cell(price)="data">
               <span class="mt-1  d-flex">
                  {{ data.item.price }} Fcfa
                 
                </span>
              
            </template>

          </b-table>

          <div v-if="items.length == 0" class="text-center mt-5"> No  Activity </div>

          <infinite-loading
            @infinite="infiniteHandler"
            ref="infiniteLoading"
          ></infinite-loading>
        </VuePerfectScrollbar>
      </div>
    </b-card>
  </div>
</template>

<script>
import moment from 'moment';


import VuePerfectScrollbar from "vue-perfect-scrollbar";
import axios from "axios";
export default {
  components: { VuePerfectScrollbar },

  data() {
    return {
      products: [],
      page: 1,

      fields: [
        {
          key: "product",
          label: "Product",
          formatter: "Product",
        },
       

        {
          key: "price",
          label: "Price",
        },

        {
         
          key: "qty",
          label: "qty",
        },

        {
         
          key: "date",
          label: "Date",
        },

        {
         
          key: "status",
          label: "status",
        },
      ],
    };
  },

 computed: {
    items() {
      let items = [];

      this.products.forEach(function (item) {
        let topush = {
          product: { image: item.product_picture, name: item.product_name },
          qty: item.quantity,
          date: moment(item.created_at).format('MM/DD/YYYY'),
          price: item.price,
          status: item.status,
        };
        items.push(topush);
      });

      return items;
    },
  },

  methods: {
    infiniteHandler($state) {
      let url = `user-order/items/${this.page}`;

       axios.get(url)
        .then(({ data }) => {
          if (data.data.length) {
            this.page += 1;

            this.products.push(...data.data);
            $state.loaded();
            this.$nextTick(() => {});
          } else {
            $state.complete();
          }
        })
        .catch((err) => {});
    },
  },
};
</script>


<style scoped>
.product-activi {
  height: 100%;
  overflow: hidden;
  padding-bottom: 20px;
}
</style>

<style >
td {
  border-top: 1.5px solid #e8eef3 !important ;
   color: #455a64;
}

th {
  color: #455a64;
  font-weight: 500;

}
</style>
