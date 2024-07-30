<template>
  <section>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="(item, index) in items" :key="index">
        <div class="card-header" :id="'heading' + index">
          <div class="d-flex justify-content-between">
            <h6>{{ item.title }}</h6>
            <h2 class="mb-0">
              <button
                class="btn btn-block"
                type="button"
                @click="toggleCollapse(index)"
                :aria-expanded="expandedIndex === index"
                :aria-controls="'collapse' + index"
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
          title: "How can we help you?",
          content: `We are a technology firm, on a mission to digitalise businesses and consumers in Africa. Through our bridgeafrica.com platform, we help SMEs create websites, gain database visibility, sell online and network. We equally manage an online artisanal platform cameroongallery.com, which helps craft artists sell their goods globally. Through our consulting services, we provide expert support to public and private entities.`,
        },
        {
          title: "How can I track my order?",
          content: `We are a technology firm, on a mission to digitalise businesses and consumers in Africa. Through our bridgeafrica.com platform, we help SMEs create websites, gain database visibility, sell online and network. We equally manage an online artisanal platform cameroongallery.com, which helps craft artists sell their goods globally. Through our consulting services, we provide expert support to public and private entities.`,
        },
        {
          title: "What payment methods do you accept?",
          content: `We are a technology firm, on a mission to digitalise businesses and consumers in Africa. Through our bridgeafrica.com platform, we help SMEs create websites, gain database visibility, sell online and network. We equally manage an online artisanal platform cameroongallery.com, which helps craft artists sell their goods globally. Through our consulting services, we provide expert support to public and private entities.`,
        },
        {
          title: "Do you offer international shipping?",
          content: `We are a technology firm, on a mission to digitalise businesses and consumers in Africa. Through our bridgeafrica.com platform, we help SMEs create websites, gain database visibility, sell online and network. We equally manage an online artisanal platform cameroongallery.com, which helps craft artists sell their goods globally. Through our consulting services, we provide expert support to public and private entities.`,
        },
        {
          title: "What is your return policy?",
          content: `We are a technology firm, on a mission to digitalise businesses and consumers in Africa. Through our bridgeafrica.com platform, we help SMEs create websites, gain database visibility, sell online and network. We equally manage an online artisanal platform cameroongallery.com, which helps craft artists sell their goods globally. Through our consulting services, we provide expert support to public and private entities.`,
        },
        {
          title: "Are your products cruelty-free?",
          content: `We are a technology firm, on a mission to digitalise businesses and consumers in Africa. Through our bridgeafrica.com platform, we help SMEs create websites, gain database visibility, sell online and network. We equally manage an online artisanal platform cameroongallery.com, which helps craft artists sell their goods globally. Through our consulting services, we provide expert support to public and private entities.`,
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
}

.accordion .card-header {
  background-color: #fff;
  padding: 0 !important;
  border-bottom: none !important;
}

.accordion .card-header h6 {
  font-weight: 600;
  color: black;
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
</style>
