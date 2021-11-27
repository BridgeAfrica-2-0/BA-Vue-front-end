<template>
  <div>
    <navbar></navbar>
    <b-container fluid="xl" class="text-justify mt-3 order-sm-1">
      <b-row>
        <b-col cols="12">
          <div class="h-100 w-100">
            <div class="mx-auto text-center my-5">
              <h2 class="my-3 font-weight-bolder">
                {{ $t('dashboard.Start_following') }}
                <span class="float-right">
                  <b-button variant="outline-primary" class="mt-2">
                    {{ $t('dashboard.Next') }} <b-icon-chevron-right></b-icon-chevron-right>
                  </b-button>
                </span>
              </h2>
              <p class="my-2 ">{{ $t('dashboard.Follow_people_or_business_from_the_list_below')}} </p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-3"> 
        <b-col cols="12">
          <b-tabs content-class="mt-3">
            <b-tab :title="$t('dashboard.Bussiness_Around_You') " active>
              <div v-for="i in 3" :key="i">
                <p class="">
                  <span class="">
                    <b-avatar
                      class="d-inline-block bg-transparent"
                      src="https://dashboard.bridgeafrica.info/resources/images/logo.png"
                      size="3.5rem"
                    ></b-avatar>
                    <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                      <span class="text-primary">Bridge Africa</span> 
                      {{ $t('dashboard.you_are_following') }}
                    </h5>
                  </span>
                  <span class="float-right mt-1">
                    <b-button variant="primary" class="mt-2"
                      >{{ $t('dashboard.Following')}}
                    </b-button>
                  </span>
                </p>
                <hr width="100%" />
              </div>

              <div v-for="i in 2" :key="i">
                <p class="">
                  <span class="">
                    <b-avatar
                      class="d-inline-block bg-transparent"
                      src="https://dashboard.bridgeafrica.info/resources/images/logo.png"
                      size="3.5rem"
                    ></b-avatar>
                    <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                      <span class="text-primary">Bridge Africa</span> 
                      {{ $t('dashboard.is_a_business_nearby') }}
                    </h5>
                  </span>
                  <span class="float-right mt-1">
                    <b-button variant="outline-primary" class="mt-2"
                      >{{ $t('dashboard.Follow')}}
                    </b-button>
                  </span>
                </p>
                <hr width="100%" />
              </div>
            </b-tab>
            <b-tab :title="$t('dashboard.People_you_may_know')">
              <div v-for="i in 5" :key="i">
                <p class="">
                  <span class="">
                    <b-avatar
                      class="d-inline-block bg-transparent"
                      src="https://dashboard.bridgeafrica.info/resources/images/logo.png"
                      size="3.5rem"
                    ></b-avatar>
                    <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                      <span class="text-primary">Boris Ebwanga</span> {{ $t('dashboard.is_someone_you_may_know') }}
                    </h5>
                  </span>
                  <span class="float-right mt-1">
                    <b-button variant="outline-primary" class="mt-2"
                      >{{ $t('dashboard.Follow') }}
                    </b-button>
                  </span>
                </p>
                <hr width="100%" />
              </div>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  name: "dashboardInfo",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
hr {
  border: solid 1px gainsboro;
}
</style>
