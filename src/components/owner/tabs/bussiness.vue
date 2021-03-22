<template>
  <div class="p-0 m-0">
    <b-card
      header-bg-variant="primary"
      header-tag="header"
      footer-tag="footer"
      class="m-0 p-0"
    >
      <template #header>
        <h6 class="mb-0"><b-icon icon="people-fill"></b-icon> Bussiness</h6>
      </template>
      <b-row>
        <b-col sm="12" md="12" v-for="i in 12" :key="i" class="mb-2">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="3" class="my-auto">
                <img
                  src="@/assets/img/photo1.jpg"
                  alt="Image"
                  class="rounded-0 img-fluid"
                />
              </b-col>
              <b-col md="9">
                <b-row>
                  <b-col md="6" class="ml-md-3">
                    <b-card-body class="m-0">
                      <h4 class="text-sm-center text-md-left">
                        Business Name Here1
                      </h4>
                      <p class="m-1">
                        <a
                          href="mywebsitebridegeafrica.com"
                          class="text-primary"
                          >mywebsitebridegeafrica.com</a
                        >
                      </p>

                      <p class="m-1">Business Category</p>

                      <p class="m-1">1.1 M Followers</p>

                      <p class="m-1">Neighbourhood, city, country</p>

                      <p class="m-1">keyword 1, keyword 2, keyword 3</p>
                    </b-card-body>
                  </b-col>
                  <b-col md="5" class="my-md-auto mx-sm-auto">
                    <b-card-body>
                      <h4 class="">Contacts</h4>
                      <p class="m-1">
                        <b-icon
                          icon="chat-dots-fill"
                          aria-hidden="true"
                        ></b-icon>
                        <span class="show">Message</span>
                      </p>

                      <p class="m-1">
                        <b-icon
                          icon="telephone-fill"
                          aria-hidden="true"
                        ></b-icon>
                        <span class="show">Call-Him</span>
                      </p>

                      <p class="m-1">
                        <b-icon icon="geo-alt-fill" aria-hidden="true"></b-icon>
                        <span class="show">Position</span>
                      </p>

                      <p class="m-1">
                        <b-button
                          variant="outline-primary"
                          class="mb-2"
                          size="sm"
                        >
                          <b-icon
                            icon="person-plus-fill"
                            aria-hidden="true"
                          ></b-icon>
                          <span class="show">Add</span>
                        </b-button>
                      </p>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "bussiness"
};
</script>

<style scoped>
@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 6rem !important;
  }
}
</style>
