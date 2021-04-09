<template>
  <div>
    <b-container fluid  style="padding-left:30px; padding-right:30px">
      <b-row class="b-bottom">
        <b-col>
          <h5>Pending Posts</h5>
        </b-col>
        <div class="f-right">
          <b-col> <p>35 Pending</p> </b-col>
        </div>
      </b-row>

      <br />

      <b-container class="bb-bottom">
        <b-list class="d-flex align-items-center m-list">
          <b-avatar class="mr-3" size="4em"></b-avatar>
          <span class="mr-auto"
            >J. Circlehead
            <p>1hr</p>
          </span>
          <span class=" ">
            <div>
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon
                    icon="three-dots-vertical"
                   
                    font-scale="1"
                  ></b-icon>
                </template>
                <b-dropdown-item href="#">Approve</b-dropdown-item>
                <b-dropdown-item href="#"> Delete Post </b-dropdown-item>

                <b-dropdown-item href="#"> Send Message </b-dropdown-item>
                <b-dropdown-item href="#"> Remove User </b-dropdown-item>
              </b-dropdown>
            </div>
          </span>
        </b-list>
        <p>
          Lorem Ipsum is this is just a dummy text to post simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </p>
      </b-container>

      <b-container class="bb-bottom">
        <b-list class="d-flex align-items-center m-list">
          <b-avatar class="mr-3" size="4em"></b-avatar>
          <span class="mr-auto">J. Circlehead</span>
          <span class=" ">
            <div>
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon
                    icon="three-dots-vertical"
                   
                    font-scale="1"
                  ></b-icon>
                </template>
                <b-dropdown-item href="#">Approve</b-dropdown-item>
                <b-dropdown-item href="#"> Delete Post </b-dropdown-item>

                <b-dropdown-item href="#"> Send Message </b-dropdown-item>
                <b-dropdown-item href="#"> Remove User </b-dropdown-item>
              </b-dropdown>
            </div>
          </span>
        </b-list>
        <p>
          Lorem Ipsum is this is just a dummy text to post simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </p>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "pending",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.f-right {
  float: right;
}

.b-bottom {
  border-bottom: 1px solid;
}

.bb-bottom {
  border-bottom: 0.5px solid;
  border-color: aqua;
  margin-bottom: 7px;
  margin-top: 5px;
}
</style>
