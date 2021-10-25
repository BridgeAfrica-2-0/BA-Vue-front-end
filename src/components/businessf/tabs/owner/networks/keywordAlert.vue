<template>
  <div class="a-left container">
    <b-row>
      <b-col cols="12">
        <div class="">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Keyword Alerts"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0 text"
            >
              <b-form-input
                id="textarea"
                placeholder="Enter keyword alert..."
                rows="3"
                max-rows="6"
              ></b-form-input>
            </b-form-group>
          </b-container>
          <hr />
        </div>

        <div v-for="post in allAlerts" :key="post.id" class="mb-4">
          <div class="mb-2">
            <div>
              <b-row class="px-md-3">
                <b-col cols="2" md="1" class="m-0 p-0">
                  <b-avatar
                    class="d-inline-block mt-1"
                    variant="info"
                    :src="post.image"
                    size="3.5rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="10" md="11" class="pt-2">
                  <h5 class="m-0 font-weight-bolder">
                    {{ post.name }}
                    <span class="float-right">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                          ><span class="sr-only">Settings</span>
                        </template>

                        <b-dropdown-item
                          @click="approved(post.id)"
                          :loading="load"
                        >
                          Approved
                        </b-dropdown-item>
                        <b-dropdown-item
                          @click="unapproved(post.id)"
                          :loading="load"
                        >
                          Unapproved
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h5>
                  <p>
                    {{ post.time }} -
                    <span class="text-primary">{{ post.comment }}</span>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p class="text-justify text">
                    {{ post.description }}
                  </p>
                </b-col>
              </b-row>
            </div>
          </div>

          <hr />
        </div>

        <b-row>
          <b-col>
            <p class="text-center" v-if="allAlerts < 1">
              No Keyword Alerts To Show
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "keywordAlert",
  data: () => ({
    load: null,
    networkId: ''
  }),
  computed: {
    ...mapGetters({
      allAlerts: "networkSetting/allAlerts",
      getNetwork: "networkSetting/getNetwork",
    }),
  },
  methods: {
    ...mapActions({
      getAlerts: "networkSetting/getAlerts",
      approvedAlerts: "networkSetting/approvedAlerts",
      unapprovedAlerts: "networkSetting/unapprovedAlerts",
    }),

    approved(id) {
      this.load = true;
      
      this.approvedAlerts(id)
        .then(() => {
          this.load = false;
        })
        .catch((err) => {
          this.load = true;
          console.log(err);
        });
    },

    unapproved(id) {
     this.load = true;
      
      this.unapprovedAlerts(id)
        .then(() => {
          this.load = false;
        })
        .catch((err) => {
          this.load = true;
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.a-left {
  text-align: left;
}
</style>
