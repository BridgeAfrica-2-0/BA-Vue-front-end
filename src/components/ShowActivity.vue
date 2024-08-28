<template>
  <div class="accordion" role="tablist">
    <b-card
      class="mb-1"
      style="width: 100%"
      v-if="'business' != profile.user_type && business.length"
    >
      <b-card-header header-tag="header" class="p-1" role="tab">
        <p block v-b-toggle.accordion-1 variant="info">
          <b-icon :icon="openBusiness ? 'arrow-down' : 'arrow-up'"></b-icon>
          {{ $t("general.Business") }}
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
              my-2
            "
            @click="activedBusiness(item)"
          >
            <div>
              <b-avatar
                variant="light"
                :src="item.logo_path"
                :square="true"
                class="logo-sizee"
              ></b-avatar>
            </div>
            <div class="d-flex flex-column ml-3">
              <div>
                <span class="font-weight-bold">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card
      class="mb-1"
      v-if="'network' != profile.user_type && networks.length"
    >
      <b-card-header header-tag="header" class="p-1" role="tab">
        <p block v-b-toggle.accordion-2 variant="info">
          <b-icon :icon="openNetwork ? 'arrow-down' : 'arrow-up'"></b-icon>
          {{ $t("general.Network") }}
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
              my-2
            "
          >
            <div>
              <b-avatar
                variant="light"
                :src="item.image"
                :square="true"
                class="logo-sizee"
              ></b-avatar>
            </div>
            <div class="d-flex flex-column ml-3">
              <div>
                <span class="font-weight-bold">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      networks: "social/FIND_USER_NETWORK",
      business: "social/FIND_USER_BUSNESS",
      hasLauchNetworkRequest: "social/INIT",
      profile: "auth/profilConnected"
    })
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

  created() {
    this.strategy = {
      business: {
        newType: item => ({
          name: item.name,
          profile_picture: item.logo_path,
          id: item.id,
          slug: item.slug,
          user_type: "business"
        }),
        redirect: obj => this.redirection(obj)
      },

      network: {
        newType: item => ({
          name: item.name,
          profile_picture: item.image,
          id: item.id,
          slug: item.slug,
          user_type: "network"
        }),
        redirect: obj => this.redirection(obj)
      }
    };
  },

  data: () => ({
    pending: false,
    openBusiness: false,
    show: false,
    openNetwork: false,
    strategy: null
  }),

  methods: {
    ...mapMutations({
      auth: "auth/profilConnected"
    }),

    redirection(obj) {
      if (obj.routeName !== this.$router.name)
        this.$router.push({
          name: obj.routeName,
          params: { id: obj.routeId }
        });
    },

    process: async function(item, type) {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18"
      });

      try {
        const data = {
          routeName: "network" == type ? "networks" : "BusinessOwner",
          routeId: item.slug
        };

        const request =
          "network" == type
            ? await this.$repository.share.switch(item.slug, "network")
            : await this.$repository.share.switch(item.slug, "business");

        if (request.success) {
          this.flashMessage.success({
            time: 5000,
            message:
              "business" == type
                ? item.is_owner
                  ? `You are now connected as ${item.name}`
                  : `You are now redirect to ${item.name}`
                : item.is_owner || item.is_editor
                ? `You are now connected as ${item.name}`
                : `You are now redirect to ${item.name}`
          });

          this.auth(this.strategy[type].newType(item));
        }

        loader.hide();
        this.strategy[type].redirect(data);
      } catch (error) {
        console.log(error);
      }
    },

    activedBusiness(item) {
      if (!this.pending) this.process(item, "business");
    },

    activedNetwork(item) {
      if (!this.pending) this.process(item, "network");
    }
  }
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
.logo-sizee {
  width: 50px !important;
  height: 50px !important;
  object-fit: cover;
}
</style>
