<template>
  <div>
    <h5 class="font-weight-bolder d-inline-block">
      <b-icon-star-fill></b-icon-star-fill> {{ $t('network.No_Pending_Posts_To_Show') }} 
    </h5>
    <span class="float-right">35 Pending</span>

    <hr width="100%" />
    <b-row>
      <b-col cols="12">
        <div v-for="i in 4" :key="i" class="mb-4">
          <b-card class="mb-2">
            <b-card-text>
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
                  <h5 class="m-0 font-weight-bolder">
                    {{ $t('network.Mapoure_Agrobusiness') }}
                    <span class="float-right">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                          ><span class="sr-only">{{ $t('network.Settings') }} </span>
                        </template>
                        <b-dropdown-item href="#">
                          {{ $t('network.Approve') }} 
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          {{ $t('network.Reject') }} 
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h5>
                  <p>
                    1h Ago - <span class="text-primary">{{ $t('network.Feedback_Type') }}</span>
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p class="text-justify">
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
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "pendingFeedback"
};
</script>

<style scoped></style>
