<template>
  <div>
    <b-row class="mb-5">
      <b-col cols="12">
        <div class="h-100 w-100">
          <div class="mx-auto text-center my-5">
            <h2 class="my-3 font-weight-bolder">
              {{ $t('network.Create_personalised_website_for_your_business') }}
            </h2>
            <p class="my-2">
              {{ $t('network.Start_with_a_template_and_make_it_your_own') }},
              {{ $t('network.with_easy_drag_and_drop_and_1000s_of_design_features') }} 
            </p>
            <br /><br />
            <b-col class="my-3" cols="8" offset-md="2">
              <p class="d-inline-block float-left">
                <b-icon-card-image class="select-temp"></b-icon-card-image>
                <span class="d-block mt-1">{{ $t('network.Select_a_template') }}</span>
              </p>
              <p class="d-inline-block float-right">
                <b-icon-cursor-fill class="select-temp2"></b-icon-cursor-fill>
                <span class="d-block mt-1">{{ $t('network.Launch') }}</span>
              </p>
            </b-col>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-2">
      <b-col md="10" offset-md="1">
        <p class="float-right">
          <span>{{ $t('general.Show') }}: &nbsp;</span>
          <span class="d-inline-block">
            <b-form-select
              class="d-inline-block"
              v-model="selected"
              :options="options"
              size="sm"
            ></b-form-select>
          </span>
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-nav pills fill>
          <b-nav-item v-on:click="filter('all')">{{ $t('network.All') }}</b-nav-item>
          <b-nav-item v-on:click="shuffle">{{ $t('network.Shuffle') }}</b-nav-item>
          <b-nav-item v-on:click="filter('agriculture')"
            >{{ $t('network.Agriculture') }}</b-nav-item
          >
          <b-nav-item v-on:click="filter('business')">{{ $t('network.Business') }}</b-nav-item>
          <b-nav-item v-on:click="filter('event')">{{ $t('network.Event') }}</b-nav-item>
          <b-nav-item v-on:click="filter('personalcare')"
            >Personal Care</b-nav-item
          >
          <b-nav-item v-on:click="filter('pharmacy')">{{ $t('network.Pharmacy') }}</b-nav-item>
          <b-nav-item v-on:click="filter('food')">{{ $t('network.Food') }}</b-nav-item>
          <b-nav-item v-on:click="filter('other')">{{ $t('network.Others') }}</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div id="list-complete-demo" class="demo">
          <transition-group
            name="list-complete"
            class="list-complete"
            tag="section"
          >
            <b-col
              md="4"
              v-for="item in filteredItems"
              v-bind:key="item.id"
              class="list-complete-item"
            >
              <b-card header-tag="header" footer-tag="footer">
                <template #header>
                  <p>
                    <span class="float-left">
                      {{ $t('network.Template_Name') }}
                    </span>
                    <span class="float-right">
                      <b-icon-eye-fill class="mr-3"></b-icon-eye-fill>
                      <b-icon-check></b-icon-check>
                    </span>
                  </p>
                </template>
                <img :src="item.img" alt="" />
                <template #footer>
                  <em>{{ item.type }}</em>
                </template>
              </b-card>
            </b-col>
          </transition-group>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "createWebsiteStep1",
  data() {
    return {
      selected: "f",
      options: [
        { value: "a", text: "Any" },
        { value: "f", text: "Free Only" },
        { value: "p", text: "Premium Only" }
      ],
      items: [
        {
          id: 1,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu1.png",
          type: "Premium",
          tags: ["all", "agriculture"]
        },
        {
          id: 2,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu2.png",
          type: "Free",
          tags: ["all", "business"]
        },
        {
          id: 3,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu1.png",
          type: "Premium",
          tags: ["all", "agriculture"]
        },
        {
          id: 4,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu2.png",
          type: "Premium",
          tags: ["all", "event"]
        },
        {
          id: 5,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu1.png",
          type: "Premium",
          tags: ["all", "personalcare"]
        },
        {
          id: 6,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu2.png",
          type: "Free",
          tags: ["all", "pharmacy"]
        },
        {
          id: 7,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu1.png",
          type: "Free",
          tags: ["all", "pharmacy"]
        },
        {
          id: 8,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu2.png",
          type: "Free",
          tags: ["all", "food"]
        },
        {
          id: 9,
          img:
            "https://business.bridgeafrica.info/assets/img/portfolio/portfoliu1.png",
          type: "Premium",
          tags: ["all", "other"]
        }
      ],
      currentTag: "all"
    };
  },
  computed: {
    filteredItems: function() {
      let filter = this.currentTag;
      return this.items.filter(function(item) {
        return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    shuffle: function() {
      this.items = this.items.sort(() => 0.5 - Math.random());
    },
    filter: function(tag) {
      this.currentTag = tag;
    }
  }
};
</script>

<style scoped>
.select-temp {
  border: 1px solid;
  padding: 13px;
  font-size: 71px;
  border-radius: 50px;
  background-color: #64a148;
  color: #fff;
}
.select-temp2 {
  border: 1px solid;
  padding: 13px;
  font-size: 71px;
  border-radius: 50px;
  background-color: #f2f2f2;
  color: #dadada;
}
.list-complete {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
}
.list-complete-item {
  transition: transform 1s;
  flex: 1 1 25%;
  padding: 10px;
}
.list-complete-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.list-complete-enter, .list-complete-leave-to
 {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
