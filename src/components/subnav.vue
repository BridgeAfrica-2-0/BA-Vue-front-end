<template>
  <div class="container-flex mobi d-none d-lg-none d-xl-block search">
    <b-row>
      <b-col cols="1" lg="2"> </b-col>
      <b-col cols="8" lg="10" style="text-align: left">
        <span style="display: inline-flex">
          <span
            v-for="(category, index) in categories.slice(0, 6)"
            :key="index"
           >
          
            <b-nav-item-dropdown
              :id="'dropdown-' + index"
            >
              <template slot="button-content">
                <span @click="() => {
                  showSubCat(category.category, category.sub_cat)
                  bcategory({ cat_id: category.category.id })
                  $emit('activate:matching:category', null)
                  $emit('activateSuggestion',category.category.name)
                  
                }">
                  {{ category.category.name }}
                </span>
              </template>
              <hr
                style="margin-top: -10px;background-color: red;height: 3px;width: 41%;float: left;"
              />
              <br />
              <div :ref="category.category.id">
                <div style="columns: 2;">
                  <b-dropdown-item
                    v-for="(subCat, subIndex) in category.sub_cat.slice(0, 6)"
                    :key="subIndex"
                    @click="() => {
                      $store.commit('marketSearch/setSubCat', [])
                      $emit('update:keyword', {
                        keyword: subCat.name,
                        cat_id: subCat.cat_id
                      });
                      $emit('activate:matching:category', {name:subCat.name})
                       $emit('activateSuggestion',subCat.name)
                      bcategory({ cat_id: subCat.cat_id, id: subCat.id })
                      
                      
                    }"
                    href="#"
                    class="ml-2"
                  >
                   
                      <img
                        class="img-fluid picture logo-img"
                        :src="subCat.cat_image"
                      />
                      {{ subCat.name }}
                 
                  </b-dropdown-item>

             
                </div>
              </div>
            </b-nav-item-dropdown>
          </span>
        </span>
        <span @mouseover="onOverMore()" @mouseleave="onLeaveMore()">
          <b-nav-item-dropdown id="dropdown-1" text="More" ref="more">
            <hr
              style="
                margin-top: -10px;
                background-color: red;
                height: 3px;
                width: 40%;
                float: left;
              "
            />
            <br />

            <div>
              <b-row>
                <b-col
                  cols="6"
                  v-for="(category, index) in categories.slice(6)"
                  :key="index"
                  class="padding:50px"
                >
                  <b-dropdown-item
                    class="ml-1"
                    @click="
                    () => {
                      $emit('onChangeCategoryName', category.category.name);
                      bcategory({ cat_id: category.category.id })
                      $emit('activate:matching:category', null)
                      $emit('activateSuggestion',  category.category.name)  
                       $emit('update:keyword', {
                           keyword: category.category.name,
                           cat_id: category.category.id
                          })
                      
                    }"
                  >
                    {{ category.category.name }}
                  </b-dropdown-item>
                </b-col>
              </b-row>
            </div>
          </b-nav-item-dropdown>
        </span>
      </b-col>

      <b-col cols="1" lg="2"> </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "subnav",
  data() {
    return {
    };
  },
  computed: {
    categories() {
      return this.$store.getters["marketSearch/getCategories"];
    },
    subCategories() {
      return this.$store.getters["marketSearch/getSubCat"];
    },
  },

  created() {
    this.getCategories();
  },

  methods: {
    
    bcategory(category, value = null) {

      this.$emit("category", category);

    
      if (value){

        this.$emit("onChangeCategoryName", value.name);
        this.$emit('update:keyword', {
          keyword: value.name,
          cat_id: value.id
        })
      }
        
    },

    getCategories() {
      this.$store
        .dispatch("marketSearch/getCategories")
        .then((res) => {
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    async getProducts() {
      console.log("PRoducts ", this.$store.getters["marketSearch/getProducts"]);
      await this.$store.dispatch("marketSearch/getProducts");
    },

    async searchProduct(data) {
      await this.$store.dispatch("marketSearch/searchProducts", data);
    },

    searchByCat(data) {
      console.log("nani...");
      this.allSearch(data);
      this.searchProduct(data);
    },
    allSearch(data) {
    
      this.$store
        .dispatch("allSearch/SEARCH", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },


    showSubCat(category, subCat, show=true) {

      
      this.$store.commit("marketSearch/setSubFilters", []);
      this.$refs[category.id][0].visible = true;

      if (show)
        this.$emit("parentcategory", category.id);

      this.$emit("onChangeCategoryName", category.name);
      // this.subCategories.push(subCat);
      // this.searchProduct({ catId: catId, cat_id: catId });
      this.$store.commit("marketSearch/setSubCat", subCat);
      if (!subCat.length) this.hideSubCat(category.id);
      // console.log("Subcat:", this.subCategories);
     console.log(category);
      this.$emit('update:keyword', {
        keyword: category.name,
        cat_id: category.id
      })

    },

    hideSubCat(catId) {

      this.$refs[catId][0].visible = false;
      this.subCategories = [];

    },

    onOverMore() {
      this.$refs.More.visible = true;
      this.$emit("parentcategory", "More");
    },
    onLeaveMore() {
      this.$refs.More.visible = false;
    },
  },
};
</script>

<style scoped>
.logo-img {
  width: 25px;
}
.mgmg {
  margin-left: 30px;
}
@media only screen and (max-width: 768px) {
  .mobi {
    display: none;
  }
}
.a-center {
  align-content: center;
  text-align: center;
}
.drop-text {
  color: black;
}
</style>


<style >


 /* .dropdown .show{
  color:#e75c18 !important;
}

.nav-link:active{
 color:#e75c18 !important;
}

 dropdown-toggle :active{
color:#e75c18 !important;
 }

.dropdown-toggle :hover{
  color:#e75c18 !important;
}

.nav-link :hover{
 color: #e75c18 !important;
}

.b-nav-dropdown :hover{
  color: #e75c18 !important;
} */

</style>