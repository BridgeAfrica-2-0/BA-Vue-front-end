<template>
  <div class="p-notifaction">
    <b-container>
      <b-row>
        <b-col>
          <div class="b-bottomn f-left">
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              class="m-left-top"
              unchecked-value="not_accepted"
            >
              Select All
            </b-form-checkbox>
          </div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button variant="success" class="a-button-l">
              Mark as Read</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
      <br />

      <div>
        <b-container class="bb-bottom">
          <b-list class="d-flex align-items-center m-list">
            <b-form-checkbox
              class="m-left"
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
            </b-form-checkbox>
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
                      animation="cylon-vertical"
                      font-scale="1"
                    ></b-icon>
                  </template>

                  <b-dropdown-item href="#"> Delete </b-dropdown-item>
                  <b-dropdown-item href="#"> Read </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </b-list>
          <p>
            Lorem Ipsum is this is just a dummy text to post simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </p>
        </b-container>

        <b-container class="bb-bottom">
          <b-list class="d-flex align-items-center m-list">
            <b-form-checkbox
              class="m-left"
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
            </b-form-checkbox>
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
                      animation="cylon-vertical"
                      font-scale="1"
                    ></b-icon>
                  </template>

                  <b-dropdown-item href="#"> Delete </b-dropdown-item>
                  <b-dropdown-item href="#"> Read </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </b-list>
          <p>
            Lorem Ipsum is this is just a dummy text to post simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </p>
        </b-container>
      </div>
   
  </div>
</template>

<script>
export default {
  name: "notification",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.f-left {
  float: left;
}

.f-right {
  float: right;
}
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;

  border-bottom: 0.5px solid;
  border-color: gray;
}

.m-left {
  margin-left: -20px;
}




.m-left-top{
  margin-left: -15px;
}
.p-notifaction{

  padding: 30px;
}
</style>
