<template>
  <div>
    <navbar />
    <div class="thank-you-container">
      <h1 class="thank-you-title">Thank you for your order!</h1>
      <p class="order-message">
        Your order number {{ orderNumber }} could be tracked from your 
        <router-link to="/myorders" class="order-history-link">Order History</router-link>.
      </p>
      <b-button
          v-b-modal.edit-shipping-modal
          variant="primary"
          @click="goHome"
          class="back-btn"
        >
          Back To Home
        </b-button>
    </div>
  </div>
  </template>
  
  <script>
  import navbar from "@/components/navbar.vue";
  export default {
    name: "ThankYouPage",
    components: { navbar },
    data() {
      return {
        orderNumber: this.$route.query.order_ids || '', // Example order number, you can change this dynamically
      };
    },
    methods: {
      goHome() {
        this.$router.push({ path: "/" }); // Navigate to home page
      },
    },
  };
  </script>
  
  <style scoped>
  .thank-you-container {
    margin-left: 100px;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    min-height: 100vh;
    background-color: #fff;
    padding: 20px;
    text-align: center;
  }
  
  .thank-you-title {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 1rem;
  }
  
  .order-message {
    font-size: 1rem;
    color: black;
    margin-bottom: 2rem;
  }
  
  .order-history-link {
    color: #ff7e1b;
    font-weight: 600;
    text-decoration: none;
  }
  
  .order-history-link:hover {
    text-decoration: underline;
  }
  
  .back-btn {
  width: 250px;
  height: 46px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 10px;
}
  
  /* .home-btn:hover {
    background-color: #e76a17;
    border-color: #e76a17;
  } */
  </style>
  