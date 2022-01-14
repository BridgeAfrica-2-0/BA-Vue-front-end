<template>
  <b-button
    :block="header"
    variant="primary"
    size="sm"
    :class="header ? 'message size' : 'b-background flexx shadow'"
    @click="cta()"
  >
    <i
      :class="
        header
          ? 'fas fa-envelope fa-lg btn-icon'
          : 'fas fa-envelope fa-lg btn-icon pt-1 pr-1'
      "
    ></i>

    <span v-if="header" style="margin-left: -3px">
      <span class="ml-1"> {{ $t("businessf.Message") }}</span>
    </span>

    <span v-else>
      <span class="btn-text"> {{ $t("dashboard.Messages") }}</span>
    </span>
  </b-button>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
    },
    header: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,

        type: "loop",
        perMove: 1,
      },
    };
  },
  computed: {
    activeAccount() {
      return this.$store.getters["auth/profilConnected"];
    },
  },

  methods: {
    cta() {
      console.log(this.element);
      this.$store.commit("businessChat/setSelectedChat", this.element);
      let path = "";

      if (this.activeAccount.user_type == "business") {
        path = "/business_owner/" + this.activeAccount.id;
      } else if (this.activeAccount.user_type == "network") {
        path = "/network/" + this.activeAccount.id;
      } else path = "/messaging";

      let msgTabId = 0;
      if (this.type == "people") {
        msgTabId = 0;
      } else if (this.type == "business") {
        msgTabId = 1;
      } else {
        msgTabId = 2;
      }
      console.log("path:", path);
      this.$router.push({
        path: `${path}`,
        query: { tabId: 1, msgTabId: msgTabId },
      });
      // this.$router.push({ path: `/business_owner/${this.activeAccount.id}`, query: { tabId: 1, msgTabId: 0 } });
    },
  },
};
</script>

<style scoped>
.b-background {
  background-color: #e75c18;
  color: white;

  border-top-left-radius: 4px;

  border-bottom-left-radius: 4px;

  border-top-right-radius: 4px;

  border-bottom-right-radius: 4px;
}
.flexx {
  display: inline-flex;
}
.pobtn {
  font-size: 10px;
}

/* cta comp */
.message {
  color: #fff !important;
  background-color: #32a400;
  border: none;
  border-radius: none;
}
.message:hover {
  background-color: #006400;
}
/* cta comp */
@media only screen and (max-width: 768px) {
}
</style>
