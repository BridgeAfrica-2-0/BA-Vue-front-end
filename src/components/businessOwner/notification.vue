<template>
  <div class="container-fluid" style="padding-right:30px; padding-left:30px">
    <b-row class="mt-4">
      <b-col cols="12">
        <h4 class="font-weight-bolder d-inline-block">
          <b-icon-person-plus></b-icon-person-plus> Membership Requests
        </h4>
        <span class="float-right">35 Pending</span>

        <hr width="100%" />
       <b-row>
        <b-col md="6" class="mr-3" v-for="i in 6" :key="i">
          <p class="">
            <span class="">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
              <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                Mapoure Agrobusiness
              </h5>
            </span>
            <span class="float-right mt-1">
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
                <b-dropdown-item href="#">
                  Approve
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  Reject
                </b-dropdown-item>
              </b-dropdown>
            </span>
          </p>
          <hr width="100%" />
        </b-col>

        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "notification"
};
</script>

<style scoped></style>
