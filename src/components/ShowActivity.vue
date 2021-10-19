<template>
  <div class="accordion" role="tablist">
    <FlashMessage style="zindex: 99999" />
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <p block v-b-toggle.accordion-1 variant="info">Business</p>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <div
            v-for="(item, index) in business"
            :key="index"
            class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer w-full"
          >
            <div @click="connect(item)">
              <img
                :src="item.logo_path"
                class="rounded-circle"
                alt=""
                width="30"
                height="30"
              />
            </div>
            <div class="d-flex flex-column ml-3">
              <div>
                <span class="font-weight-bold">{{ item.business_name }}</span>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <p block v-b-toggle.accordion-2 variant="info">Network</p>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div
            v-for="(item, index) in networks"
            :key="index"
            @click="() => $router.push({ name: 'networks', params: { id: item.network_id}})"
            class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer w-full"
          >
            <div>
              <img
                :src="item.Network_image"
                class="rounded-circle"
                alt=""
                width="30"
                height="30"
              />
            </div>
            <div class="d-flex flex-column ml-3">
              <div>
                <span class="font-weight-bold">{{ item.network_name }}</span>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      networks: "social/FIND_USER_NETWORK",
      business: "social/FIND_USER_BUSNESS",
      hasLauchNetworkRequest: "social/INIT",
    }),
  },
  methods: {
    connect: async function (item) {
      let request = await this.$repository.share.switch(item.business_id);

      if (request.success)
       this.flashMessage.success({
          time: 5000,
          message: "Operation success",
        });
    },
  },
};
</script>

<style scoped>
.card-body {
  padding: 10px !important;
}

.card {
  border: none;
}

.w-full {
  width: 100% !important;
}
.card-header {
  background: transparent !important;
}
p {
  overflow-anchor: none;
  margin-bottom: 0;
}
</style>