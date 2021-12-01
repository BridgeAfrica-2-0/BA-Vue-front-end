<template>
  <div class="container">
    <navbar />
    <hr />
    <!-- Desktop Top Bar -->
    <div class="row parent desktop">
      <b-avatar
        id="a1"
        class="avatar"
        :class="isTabActive == 1 ? 'bg-success' : ''"
        text="1"
        @click="changeTab(1)"
      ></b-avatar>
      <h2 class="text cursor" @click="changeTab(1)">
        {{ $t("myOrders.All") }}
      </h2>
      <div
        id="p1"
        class="progress prog cursor gris"
        :class="isTabActive == 1 ? 'bg-success' : ''"
        @click="changeTab(1)"
      >
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <b-avatar
        id="a2"
        class="avatar"
        :class="isTabActive == 2 ? 'bg-success' : ''"
        text="2"
        @click="changeTab(2)"
      ></b-avatar>
      <h2 class="text cursor" @click="changeTab(2)">
        {{ $t("myOrders.In_Progress") }}
      </h2>
      <div
        id="p2"
        class="progress prog cursor gris"
        :class="isTabActive == 2 ? 'bg-success' : ''"
        @click="changeTab(2)"
      >
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <b-avatar
        id="a3"
        class="avatar"
        :class="isTabActive == 3 ? 'bg-success' : ''"
        text="3"
        @click="changeTab(3)"
      ></b-avatar>
      <h2 class="text cursor" @click="changeTab(3)">
        {{ $t("myOrders.Complete") }}
      </h2>
      <div
        id="p3"
        class="progress prog cursor gris"
        :class="isTabActive == 3 ? 'bg-success' : ''"
        @click="changeTab(3)"
      >
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <b-avatar
        id="a4"
        class="avatar"
        :class="isTabActive == 4 ? 'bg-success' : ''"
        text="4"
        @click="changeTab(4)"
      ></b-avatar>
      <h2 class="text cursor" @click="changeTab(4)">
        {{ $t("myOrders.Cancel") }}
      </h2>
      <div
        id="p4"
        class="progress prog cursor gris"
        :class="isTabActive == 4 ? 'bg-success' : ''"
        @click="changeTab(4)"
      >
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <!-- Mobile Top Bar -->
    <div class="mobile-view">
      <div class="justify-content-between d-flex row cd B">
        <div
          id="m1"
          class="mobile bg-success t col transition pl-4"
          @click="changeTab(1)"
        >
          <div class="cercle1">1</div>
          <h2 class="h2 text-position">{{ $t("myOrders.All") }}</h2>
        </div>
        <div
          id="m2"
          class="mobile1 col t start-50"
          @click="changeElementType(2)"
        >
          <div class="cercle2">2</div>

          <h2 class="h2 text-position text-center">
            {{ $t("myOrders.In_progress") }}
          </h2>
        </div>
        <div
          id="m3"
          class="mobile3 col t start-50"
          @click="changeElementType(3)"
        >
          <div class="cercle2">3</div>

          <h2 class="h2 text-position text-center">
            {{ $t("myOrders.Complete") }}
          </h2>
        </div>
        <div id="m4" class="mobile2 col t" @click="changeElementType(4)">
          <div class="cercle2">4</div>
          <h2 class="h2 text-position text-center">Cancel</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import navbar from "./navbar.vue";
export default {
  components: { navbar },
  data() {
    return {
      isTabActive: 1,
      orders: [],
      totalOrders: 0,
      orderPerPage: 5,
      currentPage: 1,
    };
  },

  created() {
    this.getAllOrders();
  },
  methods: {
    changeTab(index) {
      this.isTabActive = index;
      if (index == 2) {
        this.getOrderByStatus("pending");
      } else if (index == 3) {
        this.getOrderByStatus("complete");
      } else if (index == 4) {
        this.getOrderByStatus("cancel");
      } else {
        this.getAllOrders();
      }
    },
    async getAllOrders() {
      await axios
        .get(`orders/all`)
        .then((res) => {
          this.orders = res.data.data;
          this.totalOrders = res.data.total;
          this.totalOrders = res.data.total;
          this.orderPerPage = res.data.per_page;
        })
        .catch((err) => console.log(err));
    },
    async getOrderByStatus(status) {
      console.log(status);
      await axios
        .get(`shipping-checkout/orders/${status}`)
        .then((res) => {
          this.orders = res.data.data;
          this.totalOrders = res.data.total;
          this.totalOrders = res.data.total;
          this.orderPerPage = res.data.per_page;

          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.progress {
  width: 160px;

  /* border-radius: 8%; */
  line-height: 50px;
  margin-right: 50px;
  margin-left: -30px;
  margin-top: 40px;
}

.avatar {
  margin-top: 23px;
  margin-right: 10px;
}

.cursor {
  cursor: pointer;
}

.prog {
  height: 10px;
  margin-left: 20px;
  margin-right: 10px !important;
  width: 130px !important;
}
.gris {
  background-color: #6c757d;
}
.text {
  margin-top: 35px;
}

.mobile {
  width: 195px;
  height: 50px;
  color: white;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 0 52%, 0% 0%);
}
.mobile1 {
  width: 200px;
  height: 50px;
  margin-left: -21px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
}
.mobile2 {
  width: 200px;
  height: 50px;
  margin-left: -20px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 75% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
}
.mobile3 {
  width: 200px;
  height: 50px;
  margin-left: -20px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
}
.cercle1 {
  margin-top: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: white;
  color: black;
  margin-left: -20px;
  text-align: center;
  line-height: 23px;
}
.cercle2 {
  margin-top: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: white;
  color: black;
  margin-left: 3px;
  text-align: center;
  line-height: 23px;
}

.text-position {
  line-height: 25px;
  margin-top: -22px;
  font-size: 14px;
  margin-left: 5px;
}
.mobile-view{
    max-width: 100%;
}
@media only screen and (max-width: 1200px) {
  .desktop.parent {
    display: none;
  }
}
@media only screen and (max-width: 470px) {
  .h2 {
    font-size: 10px !important;
    margin-left: 12px;
  }
  .cercle2 {
    margin-left: -4px !important;
  }
}
@media only screen and (min-width: 1200px) {
  .mobile-view {
    display: none !important;
  }
}
</style>
