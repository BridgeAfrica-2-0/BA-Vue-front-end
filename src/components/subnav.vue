<template>
  <div class="container-flex mobi d-none d-lg-none d-xl-block search">
    <b-row>
      <b-col cols="1" lg="2"> </b-col>
      <b-col cols="8" lg="10" style="text-align: left">
        <span style="display: inline-flex">
          <span
            v-for="(category, index) in categories"
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
                  <b-col cols="6">
                    <b-dropdown-item
                      v-for="(subCat, subIndex) in category.sub_cat"
                      :key="subIndex"
                      @click="category(subCat)"
                      href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        :src="subCat.cat_image"
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
      return this.$store.state.market.categories;
    },
    subCategories() {
      return this.$store.state.market.subCat;
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
      this.$refs[catId][0].visible = true;
      this.$emit("parentcategory", catId);
      // this.subCategories.push(subCat);
      this.$store.commit('market/setSubCat', subCat)
      if (!subCat.length) this.hideSubCat(catId)
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
