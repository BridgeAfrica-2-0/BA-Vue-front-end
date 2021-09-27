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
            @click="showSubCat(category.category.id)"
            @mouseleave="hideSubCat(category.category.id)"
          >
            <b-nav-item-dropdown
              id="dropdown-1"
              :text="category.category.name"
              :ref="category.category.id"
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
                  <b-col
                    cols="6"
                    v-for="(subCat, subIndex) in category.sub_cat"
                    :key="subIndex"
                    @click="category(subCat)"
                    @mouseover="getFilter(subCat)"
                  >
                    <b-dropdown-item href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        :src="`../../assets${subCat.cat_image}`"
                      />
                      {{ subCat.name }}
                    </b-dropdown-item>

                    <!-- <b-dropdown-item @click="category('More')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/more.png"
                      />
                      More</b-dropdown-item
                    > -->
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
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
                    @mouseover="
                        showMoreSubCat(category.category.id, category.sub_cat)
                      "
                      @click="showMoreSubCat(category.category.id,category.sub_cat)"
                  >
                    <b-dropdown-item
                      class="ml-1"
                      href="#"
                      
                      ><img
                        class="img-fluid picture logo-img"
                        :src="`@/assets${category.category.cat_image}`"
                      />
                      {{ category.category.name }}
                    </b-dropdown-item>

                    <!-- <b-dropdown-item @click="category('More')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/more.png"
                      />
                      More</b-dropdown-item
                    > -->
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
          </span>
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
      return this.$store.getters["market/getCategories"];
    },
    subCategories() {
      return this.$store.getters["market/getSubCat"];
    },
  },
  created() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      let bussiness_id = this.$route.params;
      this.$store
        .dispatch("market/getCategories", bussiness_id)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    category(category) {
      this.$emit("category", category);
      console.log(category);
    },
    showSubCat(catId, subCat) {
      // console.log("[debuging] ", subCat);
      this.$refs[catId][0].visible = true;
      this.$emit("parentcategory", catId);

      // this.subCategories.push(subCat);
      this.$store.commit("market/setSubCat", subCat);

      if (!subCat.length) this.hideSubCat(catId);
      console.log("Subcat:", this.subCategories);

      // // Search by categories
      this.searchProducts({ cat_id: catId });
    },
    hideSubCat(catId) {
      this.$refs[catId][0].visible = false;
      this.subCategories = [];
    },

    searchProducts(data) {
      this.$store
        .dispatch("market/searchProducts", data)
        .then((res) => {
          // console.log("categories loaded!");
        })
        .catch((err) => {
          console.log("Error erro!");
        });
    },

    // ------------------------------------

    onOverMore() {
      this.$refs.more.visible = true;
      this.$emit("parentcategory", "more");
    },
    showMoreSubCat(catId, subCat) {
      console.log("[debuging] cat:  ", catId);
      console.log("[debuging] subcat:  ", subCat);


      // this.subCategories.push(subCat);
      this.$store.commit("market/setSubCat", subCat);
      // console.log("Subcat:", this.subCategories);

      // // Search by categories
      this.searchProducts({ cat_id: catId });
    },
    onLeaveMore() {
      this.$refs.more.visible = false;
    },

    getFilter(subCat) {
      // this.filterLoader = true;
      // this.noFilter = "";
      console.log("[DEBUG] Subcategories: ", subCat);

       this.$store
        .dispatch("market/getFilter", subCat.id)
        .then((res) => {
          this.searchProducts({ cat_id: subCat.cat_id, sub_cat: subCat.id });
          console.log("Filters: ");
          console.log(res.data.data);
          // if (res.data.data.length === 0) {
          //   this.noFilter = `No filter available for ${subCat.name}!`;
          // }

          // this.filterLoader = false;
          this.$store.commit("market/setSubFilters", res.data.data);
        })
        .catch((err) => {
          console.error(err);
          this.filterLoader = false;
        });
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
