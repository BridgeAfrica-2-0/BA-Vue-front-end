<template>
  <div>
    <navbar></navbar>
    <b-container fluid="md" class="text-justify mx-auto mt-header">
      <b-card class="border-0">
        <caroussel-dashboard></caroussel-dashboard>
        <network-dashboard></network-dashboard>
        <business-dashboard></business-dashboard>
        <comuniti-dashboard></comuniti-dashboard>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import CarousselDashboard from "@/components/dasboard/carousselDashboard";
import NetworkDashboard from "@/components/dasboard/networkDashboard";
import BusinessDashboard from "@/components/dasboard/businessDashboard";
import ComunitiDashboard from "@/components/dasboard/comunitiDashboard";
export default {
  name: "dashboard",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  components: {
    ComunitiDashboard,
    BusinessDashboard,
    NetworkDashboard,
    CarousselDashboard,
    Navbar
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped></style>
