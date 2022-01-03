<template>
  <div class="container-flex mobi d-none d-lg-none d-xl-block search">

  
    <b-row>
      <b-col cols="1" lg="2"> </b-col>
      <b-col cols="8" lg="10" style="text-align: left">
        <span style="display: inline-flex">
          <span
            v-for="(category, index) in categories.slice(0, 6)"
            :key="index"
            @mouseover="showSubCat(category.category.id, category.sub_cat)"
            @click="showSubCat(category.category.id, category.sub_cat)"
            @mouseleave="hideSubCat(category.category.id)"
          >
            <b-nav-item-dropdown
              id="dropdown-1"
              :text="category.category.name"
              :ref="category.category.id"
              @click="searchProduct({ cat_id: category.category.id })"
            >
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
                  <b-dropdown-item
                    v-for="(subCat, subIndex) in category.sub_cat.slice(0, 6)"
                    :key="subIndex"
                    @click="bcategory(subCat)"
                    href="#"
                    class="ml-2"
                  >
                    <b-col cols="6">
                      <img
                        class="img-fluid picture logo-img"
                        :src="subCat.cat_image"
                      />

                      {{ subCat.name }}
                    </b-col>
                  </b-dropdown-item>

                  <!-- <b-dropdown-item @click="category('More')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/more.png"
                      />
                      More</b-dropdown-item
                    > -->
                </b-row>
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
                  <b-dropdown-item class="ml-1" @click="getProducts()">
                    {{ category.category.name }}
                  </b-dropdown-item>
                </b-col>
              </b-row>
            </div>
          </b-nav-item-dropdown>
        </span>

        <div></div>
      </b-col>

      <b-col cols="1" lg="2"> </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "subnav",
  data() {
    return {};
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
    bcategory(category) {
      this.$emit("category", category);
      console.log(category);
    },

    getCategories() {
      this.$store
        .dispatch("marketSearch/getCategories")
        .then((res) => {
          // console.log("categories loaded!");
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
      console.log("clicked...");
      await this.$store.dispatch("marketSearch/searchProducts", data);
      // console.log("PRoducts ", this.$store.getters["marketSearch/getProducts"]);
    },

    showSubCat(catId, subCat) {
      this.$refs[catId][0].visible = true;
      this.$emit("parentcategory", catId);
      // this.subCategories.push(subCat);

      // this.searchProduct({ catId: catId, cat_id: catId });
      this.$store.commit("marketSearch/setSubCat", subCat);
      if (!subCat.length) this.hideSubCat(catId);
      console.log("Subcat:", this.subCategories);
    },
    hideSubCat(catId) {
      this.$refs[catId][0].visible = false;
      this.subCategories = [];
    },

    // ------------------------------------

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
