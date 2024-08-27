<template>
  <b-popover target="messages" triggers="hover" placement="top">
    <div class="popover-body">
      <p class="font-weight-bold">Messages</p>
      <hr class="h-divider" />

      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="d-inline-flex flex-row justify-content-between align-items-center suggest-item cursor-pointer"
      >
        <div class="d-inline-flex flex-row align-items-center">
          <div>
            <img
              :src="msg.user_picture"
              class="rounded-circle"
              alt=""
              width="30"
              height="30"
            />
          </div>
          <div class="d-flex flex-column ml-1 line-size">
            <div class="font-weight-bold">{{ msg.user_name }}</div>
            <div class="small text-muted">{{ msg.content | parseContent }}</div>
          </div>
        </div>
        <div class="small text-muted">{{ msg.created_at | fromNow }}</div>
      </div>
      <hr class="h-divider" />

      <a href="https://bridgeafrica.info/nav/inbox.html" class="text-ored"
        ><u>{{ $t("general.See_Inbox") }}</u></a
      >
    </div>
  </b-popover>
</template>

<script>
import { fromNow } from "@/helpers";

export default {
  data: () => ({
    messages: []
  }),

  filters: {
    fromNow,
    parseContent: function(value) {
      return value.length < 10 ? value : `${value.substring(0, 10)} ...`;
    }
  },
  methods: {
    showMessages: async function() {
      const response = await this.$repository.post.showInboxMessage();

      if (response.success) this.messages = response.data;
    }
  }
};
</script>

<style scoped>
.hov:hover {
  background-color: #eeeeef;
  border-color: #eeeeef;
}

@media (min-width: 992px) {
  .balogo {
    width: 170px;
  }
}

@media (max-width: 992px) {
  .balogo {
    width: 100px;
    margin-left: -30px;
  }
}

.b-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.b-radius {
  border-radius: 10px;
}

.color-sit {
  background-color: #e75c18;
}

@media only screen and (max-width: 992px) {
  .search-mobile {
    border-left: none;
  }

  .color-mobile {
    background-color: white;
  }
}

@media only screen and (min-width: 768px) {
  .search-h {
    height: 48px;
  }
}

.input-size {
  width: 401px;
}

.input-size-phone {
  width: 401px;
}

.color-site {
  color: #e75c18;
}

.col-bg {
  color: #e75c18;
}

/*Responsive Side*/

@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }

  .montre {
    display: none;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
  .show {
    display: block;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
  .show {
    display: block;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
  .show {
    display: block;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }

  .show {
    display: block;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 6rem !important;
  }

  .show {
    display: block;
  }
}

.website-logo-name {
  font-size: 24px;
  color: #2e2e2e;
  margin-top: 2px;
}
.vl {
  border-left: 1px solid #dee2e6;
  height: 20px;
}
.text-ored {
  color: #e75c18;
}

.text-dark {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: rgba(43, 39, 60, 1);
  text-align: left;
}

.line-size {
  width: 150px;
}

.blec-container {
  width: 95%;
}

@media (max-width: 992px) {
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    position: absolute !important;

    margin-top: -100px !important;

    right: 13px !important;
  }

  .togglebtn {
    margin-top: -145px !important;
  }
}
.shadow-nav {
  box-shadow: 0 0.25rem 0.5rem rgb(0 0 0 / 10%) !important;
}
.mup {
  margin-top: -5px;
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
</style>
