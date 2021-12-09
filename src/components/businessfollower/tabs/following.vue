<template>
  <div>
    <b-card header-bg-variant="primary" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0"><b-icon icon="people-fill"></b-icon> Following</h6>
      </template>
      <b-tabs content-class="mt-3">
        <b-tab title="People Who Follow Me" active>
          <b-row>
            <b-col sm="12" md="4" v-for="i in 12" :key="i" class="mb-2">
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
                <span class="mr-auto">Super Kitty</span>
                <BtnCtaMessage :element="item" type="business" />
              </b-list-group-item>

              <b-list-group-item class="d-flex align-items-center">
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
                <span class="mr-auto">Super Kitty</span>
                <b-button variant="outline-primary" class="mb-2 ml-2" size="sm">
                  <b-icon icon="person-plus-fill" aria-hidden="true"></b-icon>
                  <span class="show">Add</span>
                </b-button>
              </b-list-group-item>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="People I Am Following">
          <b-row>
            <b-col sm="12" md="4" v-for="i in 12" :key="i" class="mb-2">
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
                <span class="mr-auto">Super Kitty</span>
                <BtnCtaMessage :element="item" type="business" />
              </b-list-group-item>

              <b-list-group-item class="d-flex align-items-center">
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>
                <span class="mr-auto">Super Kitty</span>
                <b-button variant="outline-primary" class="mb-2 ml-2" size="sm">
                  <b-icon icon="person-plus-fill" aria-hidden="true"></b-icon>
                  <span class="show">Add</span>
                </b-button>
              </b-list-group-item>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "following",
};
</script>

<style>
.avatar-size {
  width: 60px;
}

@media (max-width: 576px) {
  .show {
    display: none;
  }

  .nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    font-size: 10px;
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
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }
}
</style>
