<template>
  <b-button
    block
    variant="primary"
    size="sm"
    class="b-background flexx  shadow"
    @click="cta()"
  >
    <i class="fas fa-envelope fa-lg btn-icon pt-1 pr-1"></i>
    <span class="btn-text"> {{ $t("dashboard.Messages") }}</span>
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
        path = "/";
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
      this.$router.push({ path: `${path}`, query: { tabId: 1, msgTabId: msgTabId } });
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
</style>
