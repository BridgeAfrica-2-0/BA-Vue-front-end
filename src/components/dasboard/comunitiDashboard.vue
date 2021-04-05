<template>
  <div>
    <b-card>
      <h2 class="p-3 bg-light shadow-sm mb-4 my-auto">
        <fas-icon
          class="text-primary mr-2 pt-1"
          :icon="['fas', 'user-friends']"
        />COMMUNITY
        <h6 class="text-primary mr-5">7k</h6>
      </h2>
      <b-tabs content-class="mt-3">
        <b-tab active>
          <template #title>
            <span>People</span>
          </template>
          <b-tabs content-class="mt-3" fill pills>
            <b-tab active>
              <template #title>
                <span>Followers (1.5k)</span>
              </template>
              <div class=" row border shadow pt-3 pb-3 pl-0 mb-4">
                <div class="col-md-6 mb-3">
                  <div class="row">
                    <div class="d-flex col-md-12 colum">
                      <img
                          src="@/assets/img/alima.jpg"
                          alt="John Doe"
                          class="mr-2 rounded-circle picture-avatar"
                      />
                      <div class="my-auto">
                        <h4 class="font-weight-bolder mb-0 pb-0">Maxine Mosfett</h4>
                        <p class="mb-1">7k Community</p>
                      </div>
                      <div class="d-flex my-auto colums">
                  <b-button variant="primary" size="sm" class="mb-2"
                  ><b-icon-person></b-icon-person>
                    &nbsp;&nbsp;Contact</b-button
                  >
                  <b-button variant="primary" size="sm"
                  ><b-icon-dash-circle></b-icon-dash-circle>
                    &nbsp;&nbsp;Community</b-button
                  >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="row">
                    <div class="d-flex col-md-12 colum">
                      <img
                          src="@/assets/img/alima.jpg"
                          alt="John Doe"
                          class="mr-2 rounded-circle picture-avatar"
                      />
                      <div class="my-auto">
                        <h4 class="font-weight-bolder mb-0 pb-0">Maxine Mosfett</h4>
                        <p class="mb-1">7k Community</p>
                      </div>
                      <div class="d-flex my-auto colums">
                  <b-button variant="primary" size="sm" class="mb-2"
                  ><b-icon-person></b-icon-person>
                    &nbsp;&nbsp;Contact</b-button
                  >
                  <b-button variant="primary" size="sm"
                  ><b-icon-dash-circle></b-icon-dash-circle>
                    &nbsp;&nbsp;Community</b-button
                  >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="row">
                    <div class="d-flex col-md-12 colum">
                      <img
                          src="@/assets/img/alima.jpg"
                          alt="John Doe"
                          class="mr-2 rounded-circle picture-avatar"
                      />
                      <div class="my-auto">
                        <h4 class="font-weight-bolder mb-0 pb-0">Maxine Mosfett</h4>
                        <p class="mb-1">7k Community</p>
                      </div>
                      <div class="d-flex my-auto colums">
                  <b-button variant="primary" size="sm" class="mb-2"
                  ><b-icon-person></b-icon-person>
                    &nbsp;&nbsp;Contact</b-button
                  >
                  <b-button variant="primary" size="sm"
                  ><b-icon-dash-circle></b-icon-dash-circle>
                    &nbsp;&nbsp;Community</b-button
                  >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="row">
                    <div class="d-flex col-md-12 colum">
                      <img
                          src="@/assets/img/alima.jpg"
                          alt="John Doe"
                          class="mr-2 rounded-circle picture-avatar"
                      />
                      <div class="my-auto">
                        <h4 class="font-weight-bolder mb-0 pb-0">Maxine Mosfett</h4>
                        <p class="mb-1">7k Community</p>
                      </div>
                      <div class="d-flex my-auto colums">
                  <b-button variant="primary" size="sm" class="mb-2"
                  ><b-icon-person></b-icon-person>
                    &nbsp;&nbsp;Contact</b-button
                  >
                  <b-button variant="primary" size="sm"
                  ><b-icon-dash-circle></b-icon-dash-circle>
                    &nbsp;&nbsp;Community</b-button
                  >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="Following (2k)">

            </b-tab>
          </b-tabs>
        </b-tab>
        <b-tab title="Bussiness">
          <b-tabs content-class="mt-3" fill pills>
            <b-tab title="Followers (2)" active>
              <div class=" row border shadow pt-3 pb-3 pl-0 mb-4">
                <div class="d-flex col-md-3">
                  <img class="img-fluid" src="@/assets/img/photo2.jpg" />
                </div>
                <div class="col-md-5 pl-md-0">
                  <b>Business Name Here2</b>
                  <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
                  <p class="mb-1">Business Category</p>
                  <p class="mb-1">1.1 M Followers</p>
                  <p class="mb-1">Neighbourhood, city, country</p>
                  <p class="mb-1">keyword 1, keyword 2, keyword 3</p>
                </div>
                <div class="text-right col-md-4 my-auto">
                  <span class="pull-right my-auto">
                    <b-dropdown
                      id="dropdown-1"
                      text="Contact"
                      class="m-md-2 drop"
                      variant="primary"
                      size="sm"
                    >
                      <b-dropdown-item>
                        <b-icon icon="chat-fill" variant="primary"></b-icon>
                        Message</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon
                          icon="telephone-fill"
                          variant="primary"
                        ></b-icon>
                        Call Now</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon icon="geo-alt" variant="primary"></b-icon> Get
                        Direction</b-dropdown-item
                      >
                    </b-dropdown>
                    <b-button variant="outline-primary" size="sm"
                      ><b-icon-plus></b-icon-plus> Community</b-button
                    >
                  </span>
                </div>
              </div>
              <div class=" row border shadow pt-3 pb-3 pl-0 mb-4">
                <div class="d-flex col-md-3">
                  <img class="img-fluid" src="@/assets/img/photo2.jpg" />
                </div>
                <div class="col-md-5 pl-md-0">
                  <b>Business Name Here2</b>
                  <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
                  <p class="mb-1">Business Category</p>
                  <p class="mb-1">1.1 M Followers</p>
                  <p class="mb-1">Neighbourhood, city, country</p>
                  <p class="mb-1">keyword 1, keyword 2, keyword 3</p>
                </div>
                <div class="text-right col-md-4 my-auto">
                  <span class="pull-right my-auto">
                    <b-dropdown
                      id="dropdown-1"
                      text="Contact"
                      class="m-md-2 drop"
                      variant="primary"
                      size="sm"
                    >
                      <b-dropdown-item>
                        <b-icon icon="chat-fill" variant="primary"></b-icon>
                        Message</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon
                          icon="telephone-fill"
                          variant="primary"
                        ></b-icon>
                        Call Now</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon icon="geo-alt" variant="primary"></b-icon> Get
                        Direction</b-dropdown-item
                      >
                    </b-dropdown>
                    <b-button variant="outline-primary" size="sm"
                      ><b-icon-plus></b-icon-plus> Community</b-button
                    >
                  </span>
                </div>
              </div>
            </b-tab>
            <b-tab title="Following (1)">
              <div class=" row border shadow pt-3 pb-3 pl-0 mb-4">
                <div class="d-flex col-md-3">
                  <img class="img-fluid" src="@/assets/img/photo2.jpg" />
                </div>
                <div class="col-md-5 pl-md-0">
                  <b>Business Name Here2</b>
                  <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
                  <p class="mb-1">Business Category</p>
                  <p class="mb-1">1.1 M Followers</p>
                  <p class="mb-1">Neighbourhood, city, country</p>
                  <p class="mb-1">keyword 1, keyword 2, keyword 3</p>
                </div>
                <div class="text-right col-md-4 my-auto">
                  <span class="pull-right my-auto">
                    <b-dropdown
                      id="dropdown-1"
                      text="Contact"
                      class="m-md-2 drop"
                      variant="primary"
                      size="sm"
                    >
                      <b-dropdown-item>
                        <b-icon icon="chat-fill" variant="primary"></b-icon>
                        Message</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon
                          icon="telephone-fill"
                          variant="primary"
                        ></b-icon>
                        Call Now</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon icon="geo-alt" variant="primary"></b-icon> Get
                        Direction</b-dropdown-item
                      >
                    </b-dropdown>
                    <b-button variant="outline-primary" size="sm"
                      ><b-icon-plus></b-icon-plus> Community</b-button
                    >
                  </span>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "comunitiDashboard"
};
</script>

<style scoped>
.avatar-size {
  width: 90px;
}
.picture-avatar {
  border-radius: 10px;
  width: 78px;
}

.colum {
  justify-content: space-evenly;
}
.colums {
  flex-direction: column;
}

.text-design {
  line-height: 40px;
}
</style>
