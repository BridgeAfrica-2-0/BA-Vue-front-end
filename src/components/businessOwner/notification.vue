<template>
  <div class="container" style=" ">


    <b-row class="mt-3">  <b-col cols="12">  <h4 class=" d-inline-block">
          <b-icon-person-plus></b-icon-person-plus> Membership Requests
        </h4>
        <span class="float-right">35 Pending</span>

        <hr width="100%" />     </b-col>                  </b-row>

        <div class="container">

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
            <b-button variant="primary" class="a-button-l">
              Mark as Read</b-button
            >
          </div>
        </b-col>
      </b-row>
      <br />

 
       <b-row>
        <b-col cols="12" class="mr-3" v-for="i in 6" :key="i">
          <p class="">
            <span style="display:inline-flex">
               <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              class="m-left-top"
              unchecked-value="not_accepted"
            >
             
            </b-form-checkbox>
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
              <h5 class="m-0  d-inline-block ml-2">
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
        </div>
  </div>
</template>

<script>
export default {
  name: "notification"
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
