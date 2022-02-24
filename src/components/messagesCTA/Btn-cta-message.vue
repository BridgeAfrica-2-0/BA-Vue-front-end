<template>
  <b-button variant="primary" v-if="isBuyNow" @click="cta()" style="width:100%">
    <span>Buy now</span>
  </b-button>

  <b-button v-else
    :block="header"
    variant="primary"
    size="sm"
    style="position: relative"
    :class="
      header
        ? 'message size text-center'
        : 'b-background flexx shadow text-center'
    "
    @click="cta()"
  >
    <span v-if="header" style="margin-left: -3px">
      <i class="fas fa-envelope fa-lg btn-icon"></i>
      <span class="ml-1"> {{ $t("businessf.Message") }}</span>
    </span>
    <!-- <span v-else-if="isBuyNow" >Buy Now</span> -->
    <span v-else style="display: inline-flex">
      <i class="fas fa-envelope fa-lg btn-icon pb-3 mt-1 mr-1 mt-sm-1"></i>
      <span class="btn-text" style="margin-top: -1px">
        {{ $t("businessf.Message") }}</span
      >
    </span>
  </b-button>

</template>

<script>
export default {
  /**
   * The custom HTML `<BtnCtaMessage>` component.
   *
   * @author Edouard Yonga
   * Copyright (c) Bridge Africa. All rights reserved.
   */
  name: "BtnCtaMessage",
  props: {
    /**
     * Element is the data of the disired inbox redirection
     * A call to action button that redirect the clicked element to his inbox
     */
    element: {
      type: Object,
      required: true,
    },
    /**
     * Take the Type of inbox (business,profile or network)
     */
    type: {
      type: String,
    },
    /**
     * To differentiate the styling of the btn
     */
    header: {
      default: false,
      type: Boolean,
    },
    /**
     * Boolean that will later be used in the inbox to extrat the business ID of the product
     */
    isProduct: {
      default: false,
      type: Boolean,
    },
    /**
     * To difrentiat the text on the button
     */
    isBuyNow: {
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
    /**
     * This will be ignored on rendering
     * @private
     */
    cta() {
      /**
       * Fired when the button is clicked.
       *
       */
      
      this.$store.commit("businessChat/setSelectedChat", {
        isProduct: this.isProduct,
        ...this.element,
      });
      let path = "";

      if (this.isProduct) {
        path = "/messaging";
      } else {
        if (this.activeAccount.user_type == "business") {
          path = "/business_owner/" + this.activeAccount.id;
        } else if (this.activeAccount.user_type == "network") {
          path = "/network/" + this.activeAccount.id;
        } else path = "/messaging";
      }

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
.centralize {
  position: absolute;
  top: 40%;
  left: 44%;
  transform: translate(-40%, -40%);
  display: block;
  font-size: 16px;
}
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
  .mt-sm-1 {
    margin-top: 1px !important;
  }
}
</style>
