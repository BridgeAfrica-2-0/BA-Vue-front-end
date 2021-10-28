<template>
  <div class="a-left container">
    <!--
    <h5 class=" d-inline-block">
      Keywords Alerts
    </h5>

    <hr width="100%" />

    -->

    <b-row>
      <b-col cols="12">
        <div class="">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              :label="$t('follower.Keyword_Alerts')"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0 text"
            >
              <b-form-input
                id="textarea"
                :placeholder="$t('follower.Enter_keyword_alert')"
                rows="3"
                max-rows="6"
              ></b-form-input>
            </b-form-group>
          </b-container>
          <hr />
        </div>

        <div v-for="i in 4" :key="i" class="mb-4">
          <div class="mb-2">
            <div>
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
                    {{ $t("follower.Mapoure_Agrobusiness") }}
                    <span class="float-right">
                      <b-dropdown
                        size="lg"
                        variant="link"
                        toggle-class="text-decoration-none"
                        no-caret
                      >
                        <template #button-content>
                          <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                          ><span class="sr-only">{{ $t("follower.Settings") }}</span>
                        </template>
                        <b-dropdown-item href="#">
                          {{ $t("follower.Ignore") }}
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          {{ $t("follower.Delete_a_Comment") }}
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          {{ $t("follower.Send_Messge_To_User") }}
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          {{ $t("follower.Remove_User") }}
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h5>
                  <p>
                    {{ $t("follower.1h_Ago") }} -
                    <span class="text-primary">{{ $t("follower.Commented_on_a_Post") }}</span>
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

          <hr />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "keywordAlert"
};
</script>

<style scoped>
.a-left {
  text-align: left;
}
</style>
