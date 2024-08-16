<template>
  <section>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="(item, index) in items" :key="index">
        <div class="card-header" :id="'heading' + index">
          <div class="d-flex justify-content-between align-items-center" style="cursor: pointer" @click="toggleCollapse(index)"
                :aria-expanded="expandedIndex === index"
                :aria-controls="'collapse' + index">
            <h6 class="faq-title">{{ item.title }}</h6>
            <h2 class="mb-0">
              <button
                class="btn btn-block"
                type="button"
              >
                <span v-if="expandedIndex !== index"><i class="fas fa-plus"></i></span>
                <span v-else><i class="fas fa-times"></i></span>
              </button>
            </h2>
          </div>
        </div>

        <div
          :id="'collapse' + index"
          class="collapse mt-3"
          :class="{ show: expandedIndex === index }"
          :aria-labelledby="'heading' + index"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FAQ",
  data() {
    return {
      expandedIndex: 0,
      items: [
        {
          title: "How do I place an order?",
          content: `To place an order, simply browse through our products, add the items you wish to purchase to your cart, and proceed to checkout. You will be able to create an account or checkout as a guest.`,
        },
        {
          title: "What payment methods do you accept?",
          content: `We accept a variety of payment methods including, mobile money, credit cards, stripe`,
        },
        {
          title: "When will my order be shipped?",
          content: `Orders are typically shipped within 1-2 business days. You will receive a shipping confirmation email with tracking information once your order has been shipped`,
        },
        {
          title: "Is my order confirmed?",
          content: `You will receive an email confirmation once your order has been processed.`,
        },
        {
          title: "How can I manage my shipping addresses?",
          content: `You can manage your shipping addresses by logging in to your account and clicking on the "My Addresses" link.`,
        },
        {
          title: "Is my personal information secure?",
          content: `We take your privacy very seriously and use industry-standard security measures to protect your personal information.`,
        },
        {
          title: "What happens if my order is damaged or incomplete?",
          content: `Please contact our customer service team immediately if your order is damaged or incomplete. We will work with you to resolve the issue.`,
        },
        {
          title: "Can I track my order?",
          content: `Yes, you can track your order using the tracking information provided in your shipping confirmation email.`,
        },
        {
          title: "Where can I find information about your company? ",
          content: `You can find information about our company on our About Us page.`,
        },
        {
          title: "What's selling locally?",
          content: `Selling locally means offering your products for sale within Cameroon only. As a local seller on our platform, you can reach customers across the country, benefiting from our e-commerce tools and support while focusing on the domestic market.`,
        },
        {
          title: "What's selling globally?",
          content: `Selling globally allows you to offer your products to customers worldwide. As a global seller, you can expand your reach beyond Cameroon, tapping into international markets and connecting with buyers from different countries through our platform's global network and logistics support.`,
        }
      ],
    };
  },
  methods: {
    toggleCollapse(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.accordion {
  padding: 0 100px;
}

.accordion .card {
  box-shadow: unset !important;
  padding: 25px 30px;
}

.accordion .card-header {
  background-color: #fff;
  padding: 0 !important;
  border-bottom: none !important;
}

.accordion .card-header h6 {
  font-weight: 600;
  color: black;
  margin-bottom: 0 !important;
}

.accordion .card-header button {
  padding: 0 !important;
  font-weight: 400 !important;
  border: none !important; 
  background: none !important; 
  outline: none !important;
}

.accordion .card-header button .fas {
  font-weight: 300 !important;
  font-size: 18px !important;
}

.accordion .card-body {
  padding: 0 !important;
  text-align: left !important;
  padding-left: 5px;
  font-size: 14px !important;
  color: black !important;
}

@media screen and (max-width: 425px) { 
  .faq-title {
    text-align: left !important;
    padding-right: 5px;
  }

  .accordion .card-header button .fas {
    font-size: 24px !important;
  }
}
</style>
