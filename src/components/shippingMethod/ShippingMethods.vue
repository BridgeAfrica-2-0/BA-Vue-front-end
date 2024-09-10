<template>
    <div class="shipping-methods">
      <h4 class="font-weight-bold">Select Shipping methods</h4>
      
      <div 
        v-for="(method, index) in shippingMethods" 
        :key="index" 
        :class="['shipping-method', { 'active': selectedMethod === method.name }]"
        @click="selectMethod(method.name)"
      >
        <div class="shipping-info">
          <div>
            <h6 class="font-weight-bold">{{ method.name }}</h6>
            <p>{{ method.description }}</p>
          </div>
          <div>
            <h6>{{ method.price }}</h6>
            <span v-if="selectedMethod === method.name" class="checkmark">&#10003;</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedMethod: '',
        shippingMethods: [
          {
            name: 'LOCAL SHIPPING',
            description: 'Ships in 7 to 10 days',
            price: 'FREE',
          },
          {
            name: 'DHLSHIPPING',
            description: 'Ships faster & out of Africa',
            price: '$10.00',
          },
          {
            name: 'US POSTAL SERVICE',
            description: 'Ships in 7 to 10 days out of Africa',
            price: 'FREE',
          },
        ],
      };
    },
    methods: {
      selectMethod(name) {
        this.selectedMethod = name;
      },
    },
  };
  </script>
  
  <style scoped>
  .shipping-methods {
    /* margin-top: 20px; */
  }
  
  .shipping-method {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .shipping-method.active {
    border: 2px solid #FF9900;
  }
  
  .shipping-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .shipping-info h6 {
    margin: 0;
  }
  
  .checkmark {
    font-size: 24px;
    color: #FF9900;
  }
  
  .font-weight-bold {
    font-size: 18px;
  }
  </style>
  