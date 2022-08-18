<template>
  <div>
    <b-card
      class="border shadow card pr-3"
      style="height: 500px; padding-bottom: 50px"
    >  lalalal  {{ite}}
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
                  src="https://placekitten.com/300/300"
                >
                </b-avatar>

                <span class="mr-1 m-auto">
                  {{ data.item.product.name }} <br />
                  <!-- <span> {{data.item.product.description}} </span> -->
                </span>
              </div>
            </template>
          </b-table>
    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading" ></infinite-loading>
        </VuePerfectScrollbar>
      </div>
    </b-card>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import axios from "axios";
export default {
  components: { VuePerfectScrollbar },

  data() {
    return {

      products:[],
       page: 1,


      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "product",
          label: "Product",
          formatter: "Product",
        },
        // A regular column

        {
          // A virtual column with custom formatter
          key: "price",
          label: "Price",
        },

        {
          // A regular column with custom formatter
          key: "qty",
          label: "qty",
        },

        {
          // A regular column with custom formatter
          key: "date",
          label: "Date",
        },

        {
          // A virtual column with custom formatter
          key: "status",
          label: "status",
        },
      ],
      items: [
        {
          product: { image: "", name: "super max " },
          qty: "Male",
          date: "12-12-12",
          price: 42,
          status: "Pending",
        },
        {
          product: {
            image: "Jane",
            name: "cool shirt",
            description:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
          },
          qty: "12",
          date: "12-12-12",
          price: 36,
          status: "Pending",
        },
        {
          product: {
            image: "Jane",
            name: "cool shirt",
            description:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
          },
          qty: "2",
          date: "12-12-12",
          price: 36,
          status: "Sccuess",
        },
        {
          product: {
            image: "Jane",
            name: "cool shirt",
            description:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
          },
          qty: "4",
          date: "12-12-12",
          price: 36,
          status: "Succes",
        },
        {
          product: {
            image: "Jane",
            name: "cool shirt",
            description:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
          },
          qty: "5",
          date: "12-12-12",
          price: 36,
          status: "Pending",
        },
        {
          product: {
            image: "Jane",
            name: "cool shirt",
            description:
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
          },
          qty: "7",
          date: "12-12-12",
          price: 36,
          status: "Success",
        },
        // { product: { image: 'Jane', name: 'cool shirt' }, qty: 'Female' ,  price: 36, status: 42 },
        // { product: { image: 'Rubin', name: 'aasdfrt bbaxxy' }, qty: 'male', price: 73, v: 42 },
        // { product: { image: 'Shirley', name: 'air force' }, qty: 'female', price: 62,status: 42 }
      ],
    };
  },

  computed: {
    
    ite() {

      let items=[];

   this.products.forEach(function (item) {
        let  topush={prodct:{image:item.product_picture, name:item.product_name },
     qty: item.quantity,
    date: item.date,
    price: item.price,
    status:item.status,
        }
       items.push(topush);
  });


   return items

     
    },
  },


  methods: {
   
     infiniteHandler($state) {
    let url = "user-order/items/1?id=23/";
   alert('yoo')
    axios
      .get(url + this.page)
      .then(({ data }) => {
        if (data.data.length) {
          this.page += 1;

          this.products.push(...data.data);
          $state.loaded();
           this.$nextTick(() => {
        
      });

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
}

th {
  color: #455a64;
  font-weight: 600;
}
</style>
