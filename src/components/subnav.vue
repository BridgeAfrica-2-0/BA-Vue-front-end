<template>
  <div class="container-flex mobi d-none d-lg-none d-xl-block search">
    <b-row>
      <b-col cols="1" lg="2"> </b-col>
      <b-col cols="8" lg="10" style="text-align: left">
        <span style="display: inline-flex">
          <span
            v-for="(category, index) in categories"
            :key="index"
            @mouseover="showSubCat(category.id)"
            @click="showSubCat(category.id)"
            @mouseleave="hideSubCat(category.id)"
          >
            <b-nav-item-dropdown
              id="dropdown-1"
              :text="category.name"
              :ref="category.id"
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
                    <!-- <b-dropdown-item @click="category('Vegetables')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/vegetable1.png"
                      />
                      Vegetables</b-dropdown-item
                    > -->

                    <b-dropdown-item
                      v-for="(subCat, index) in subCategories"
                      :key="index"
                      @click="category(subCat.name)"
                      href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        :src="subCat.cat_image"
                      />
                      {{ subCat.name }}</b-dropdown-item
                    >

                    <b-dropdown-item @click="category('More')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/more.png"
                      />
                      More</b-dropdown-item
                    >
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
      this.$store
        .dispatch("market/getCategories")
        .then((res) => {
          console.log("categories loaded!");
        })
        .catch((err) => {
          console.error({ err: err });
        });
    },
    getSubCat(cat_id) {
      let bussiness_id = this.$route.params;
      // this.subCategories = [];
      this.$store
        .dispatch("market/getSubCat", {
          bussiness_id: bussiness_id,
          cat_id: cat_id
        })
        .then(res => {
          console.log("categories loaded!");
        })
        .catch(err => {
          console.error({ err: err });
        });
    },
    category(category) {
      this.$emit("category", category);
    },
    showSubCat(catId) {
      this.$refs[catId][0].visible = true;
      this.$emit("parentcategory", catId);
      if (this.subCategories.lenght>0) {
      console.log('filled!');

      }else {
      this.getSubCat(catId);

      }
    },
    hideSubCat(catId) {
      this.$refs[catId][0].visible = false;
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
