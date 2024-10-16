<template>
  <section>
    <div class="accordion" id="accordionExample">
      <div v-if="currentLang === 'en'">
        <div class="card" v-for="(item, index) in items" :key="index">
        <div class="card-header" :id="'heading' + index">
          <div
            class="d-flex justify-content-between align-items-center"
            style="cursor: pointer"
            @click="toggleCollapse(index)"
            :aria-expanded="expandedIndex === index"
            :aria-controls="'collapse' + index"
          >
            <h6 class="faq-title">{{ item.title }}</h6>
            <h2 class="mb-0">
              <button class="btn btn-block" type="button">
                <span v-if="expandedIndex !== index"
                  ><i class="fas fa-plus"></i
                ></span>
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
      <div v-else>
        <div class="card" v-for="(item, index) in itemsFr" :key="index">
        <div class="card-header" :id="'heading' + index">
          <div
            class="d-flex justify-content-between align-items-center"
            style="cursor: pointer"
            @click="toggleCollapse(index)"
            :aria-expanded="expandedIndex === index"
            :aria-controls="'collapse' + index"
          >
            <h6 class="faq-title">{{ item.title }}</h6>
            <h2 class="mb-0">
              <button class="btn btn-block" type="button">
                <span v-if="expandedIndex !== index"
                  ><i class="fas fa-plus"></i
                ></span>
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
          content: `To place an order, simply browse through our products, add the items you wish to purchase to your cart, and proceed to checkout. You will be able to create an account or checkout as a guest.`
        },
        {
          title: "What payment methods do you accept?",
          content: `We accept a variety of payment methods including, mobile money, credit cards, stripe`
        },
        {
          title: "When will my order be shipped?",
          content: `Orders are typically shipped within 1-2 business days. You will receive a shipping confirmation email with tracking information once your order has been shipped`
        },
        {
          title: "Is my order confirmed?",
          content: `You will receive an email confirmation once your order has been processed.`
        },
        {
          title: "How can I manage my shipping addresses?",
          content: `You can manage your shipping addresses by logging in to your account and clicking on the "My Addresses" link.`
        },
        {
          title: "Is my personal information secure?",
          content: `We take your privacy very seriously and use industry-standard security measures to protect your personal information.`
        },
        {
          title: "What happens if my order is damaged or incomplete?",
          content: `Please contact our customer service team immediately if your order is damaged or incomplete. We will work with you to resolve the issue.`
        },
        {
          title: "Can I track my order?",
          content: `Yes, you can track your order using the tracking information provided in your shipping confirmation email.`
        },
        {
          title: "Where can I find information about your company? ",
          content: `You can find information about our company on our About Us page.`
        },
        {
          title: "What's selling locally?",
          content: `Selling locally means offering your products for sale within Cameroon only. As a local seller on our platform, you can reach customers across the country, benefiting from our e-commerce tools and support while focusing on the domestic market.`
        },
        {
          title: "What's selling globally?",
          content: `Selling globally allows you to offer your products to customers worldwide. As a global seller, you can expand your reach beyond Cameroon, tapping into international markets and connecting with buyers from different countries through our platform's global network and logistics support.`
        }
      ],
      itemsFr: [
        {
          title: "Comment passer une commande ?",
          content: `Pour passer une commande, il vous suffit de parcourir nos produits, d'ajouter les articles que vous souhaitez acheter à votre panier et de passer à la caisse. Vous pourrez créer un compte ou passer à la caisse en tant qu'invité.`
        },
        {
          title: "Quels sont les modes de paiement acceptés ?",
          content: `Nous acceptons une variété de méthodes de paiement, y compris l'argent mobile, les cartes de crédit, stripe, etc.`
        },
        {
          title: "Quand ma commande sera-t-elle expédiée ?",
          content: `Les commandes sont généralement expédiées dans un délai de 1 à 2 jours ouvrables. Vous recevrez un courriel de confirmation d'expédition avec les informations de suivi une fois que votre commande aura été expédiée.`
        },
        {
          title: "Ma commande est-elle confirmée ?",
          content: `Vous recevrez un courriel de confirmation une fois que votre commande aura été traitée.`
        },
        {
          title: "Comment puis-je gérer mes adresses de livraison ?",
          content: `Vous pouvez gérer vos adresses de livraison en vous connectant à votre compte et en cliquant sur le lien « Mes adresses ».`
        },
        {
          title: "Mes informations personnelles sont-elles sécurisées ?",
          content: `Nous prenons votre vie privée très au sérieux et utilisons des mesures de sécurité standard pour protéger vos informations personnelles.`
        },
        {
          title: "Que se passe-t-il si ma commande est endommagée ou incomplète ?",
          content: `Veuillez contacter immédiatement notre service clientèle si votre commande est endommagée ou incomplète. Nous travaillerons avec vous pour résoudre le problème.`
        },
        {
          title: "Puis-je suivre ma commande ?",
          content: `Oui, vous pouvez suivre votre commande en utilisant les informations de suivi fournies dans votre e-mail de confirmation d'expédition.`
        },
        {
          title: "Où puis-je trouver des informations sur votre entreprise ?",
          content: `Vous trouverez des informations sur notre société sur notre page « A propos de nous ».`
        },
        {
          title: "Qu'est-ce qui se vend localement ?",
          content: `Vendre localement signifie proposer vos produits à la vente au Cameroun uniquement. En tant que vendeur local sur notre plateforme, vous pouvez atteindre des clients dans tout le pays, en bénéficiant de nos outils de commerce électronique et de notre assistance, tout en vous concentrant sur le marché national.`
        },
        {
          title: "Qu'est-ce qui se vend dans le monde ?",
          content: `Vendre à l'échelle mondiale vous permet de proposer vos produits à des clients du monde entier. En tant que vendeur international, vous pouvez étendre votre portée au-delà du Cameroun, en accédant aux marchés internationaux et en vous connectant avec des acheteurs de différents pays grâce au réseau mondial et au soutien logistique de notre plateforme.`
        }
      ],
      currentLang: "",
    };
  },
  methods: {
    toggleCollapse(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    }
  },
    created() {
      this.currentLang = this.$i18n.locale;
    }
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

@media screen and (max-width: 431px) {
  .faq-title {
    text-align: left !important;
    padding-right: 5px;
  }

  .accordion .card-header button .fas {
    font-size: 24px !important;
  }
}
</style>
