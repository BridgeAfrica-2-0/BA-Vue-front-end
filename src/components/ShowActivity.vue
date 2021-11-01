<template>
  <div class="accordion" role="tablist">
    <FlashMessage style="zindex: 99999"/>
    <b-card no-body class="mb-1" style="width:100%">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <p block v-b-toggle.accordion-1 variant="info">
          <b-icon :icon="openBusiness ? 'arrow-down' : 'arrow-up'"></b-icon>
          Business
        </p>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div
            v-for="(item, index) in business"
            :key="index"
            class="
              d-inline-flex
              flex-row
              align-items-center
              suggest-item
              cursor-pointer
              w-full
            "
            @click="activedBusiness(item)"
          >
            <div>
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
        <p block v-b-toggle.accordion-2 variant="info">
          <b-icon :icon="openNetwork ? 'arrow-down' : 'arrow-up'"></b-icon>
          Network
        </p>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div
            v-for="(item, index) in networks"
            :key="index"
            @click="activedNetwork(item)"
            class="
              d-inline-flex
              flex-row
              align-items-center
              suggest-item
              cursor-pointer
              w-full
            "
          >
            <div>
              <img
                :src="item.network_image"
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
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      networks: "social/FIND_USER_NETWORK",
      business: "social/FIND_USER_BUSNESS",
      hasLauchNetworkRequest: "social/INIT",
    }),
  },

  mounted() {
    this.$root.$on("bv::collapse::state", (collapseId, isJustShown) => {
     

      if (collapseId == "accordion-2" && isJustShown) {
        this.openNetwork = true;
        this.openBusiness = false;

        return true;
      }

      if (collapseId == "accordion-2" && !isJustShown) {
        this.openNetwork = false;
        this.openBusiness = false;

        return true;
      }

      if (collapseId == "accordion-1" && isJustShown) {
        this.openNetwork = false;
        this.openBusiness = true;

        return true;
      }
      if (collapseId == "accordion-1" && !isJustShown) {
        this.openNetwork = false;
        this.openBusiness = false;

        return true;
      }
    });
  },

  data: () => ({
    pending: false,
    openBusiness: false,
    show:false,
    openNetwork: false,
  }),

  methods: {
    ...mapActions({
      auth: "social/AUTH",
    }),
    process: async function (item, type) {
      let request =
        "business" == type
          ? await this.$repository.share.switch(item.business_id)
          : await this.$repository.share.switch();

      if (request.success) {
        this.flashMessage.success({
          time: 5000,
          message:
            "business" == type
              ? "new" == request.data
                ? `You are connected to ${item.business_name}`
                : `You are already connected to ${item.business_name}`
              : `You are connected to ${item.network_name}`,
        });

        this.auth(
          "business" == type
            ? { user: { name: item.business_name, profile_picture: item.logo_path,id: item.business_id } }
            : { user: { name: item.name, profile_picture: item.network_image,id: item.network_id } }
        );

        if ("network" == type) {
          this.$router.push({
            name: "networks",
            params: { id: item.network_id },
          });
        }
      }
    },

    activedBusiness(item) {
      if (!this.pending) this.process(item, "business");
    },

    activedNetwork(item) {
      if (!this.pending) this.process(item, "network");
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