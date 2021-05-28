<template>
  <div class="container">

    <!--
    <b-row>
      <b-col class="f-left">
        <h5 class=" d-inline-block">
          Pending Posts
        </h5>
      </b-col>
      <b-col class="f-right"> <span class="">35 Pending</span> </b-col>
    </b-row>


-->


    <b-row>
      <b-col cols="12" class="f-left">
        <div v-for="i in 4" :key="i" class="mb-4">
          <div class="mb-2">
            <div class="f-left">
              <b-row class="px-md-3">
                <b-col cols="2" md="1" class="m-0 p-0">
                  <b-avatar
                    class="d-inline-block mt-1"
                    variant="info"
                    src="https://business.bridgeafrica.info/assets/img/team/3.png"
                    size="3.5rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="10" md="11" class="pt-2">
                  <h6 class="m-0 font-weight-bolder">
                    Mapoure Agrobusiness
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
                        <b-dropdown-item href="#">
                          Ignore
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          Delete a Comment
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          Send Messge To User
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          Remove User
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h6>
                  <p>
                    1h Ago -
                    <span class="text-primary">Commented on a Post</span>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p class="text-justify text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </b-col>
              </b-row>
            </div>
          </div>
          
    <hr width="100%" />
        </div>
      </b-col>
      
    </b-row>
  </div>
</template>

<script>
export default {
  name: "pendingPost"
};
</script>

<style scoped>
.f-right {
  text-align: right;
}

.f-left {
  text-align: left;
}
</style>
