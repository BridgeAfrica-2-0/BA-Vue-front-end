<template>
  <div style="overflow-x:hidden">
    <navbar></navbar>
    <b-container fluid="xl" class="text-justify mt-3 order-sm-1">
      <b-row>
        <b-col md="3">
          <b-card title="" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0 d-inline-block">{{ $t('dashboard.Intro') }}</h6>
              <span class="float-right btn m-0 p-0 mt-1 action-intro"
                ><b-icon icon="pencil-fill" variant="primary"></b-icon>
                {{ $t('dashboard.Edit_Profile') }}</span
              >
            </template>
            <img
              src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
              class="info-image"
            />
            <b-card-text class="text-left text-size mt-2">
              <p>
                <b-icon icon="briefcase-fill" variant="primary"></b-icon> 
                {{ $t('dashboard.Work_at') }}: {{ $t('dashboard.Current_or_Last_Organization') }}
              </p>
              <p>
                <b-icon icon="book-fill" variant="primary"></b-icon> {{ $t('dashboard.Studied_at') }}:
                {{ $t('dashboard.Last_Education') }}
              </p>
              <p>
                <b-icon icon="house-fill" variant="primary"></b-icon> {{ $t('dashboard.') }}
                {{ $t('dashboard.Home_Town_Name') }}:Dummy
              </p>
              <p>
                <b-icon icon="geo-alt-fill" variant="primary"></b-icon> 
                {{ $t('dashboard.Current_City_Name') }}:Dummy
              </p>
              <p>
                <b-icon icon="people-fill" variant="primary"></b-icon> 
                {{ $t('dashboard.Followed_by') }}: 525
              </p>
            </b-card-text>
          </b-card>

          <b-card class="text-center mt-2 p-2">
            <div class="">
              <h6 class="font-weight-bolder">
                {{ $t('dashboard.Invite_friends_on_Bridge_Africa') }}
              </h6>
              <b-button variant="outline-primary" class="btn-block mt-2">
                <b-icon-plus></b-icon-plus> {{ $t('dashboard.Invite') }}</b-button
              >
            </div>
          </b-card>
        </b-col>
        <b-col md="6">
          <posts-dahboard></posts-dahboard>
        </b-col>
        <b-col md="3">
          <b-card class="text-center mt-2 p-2" v-if="!bussinessExist">
            <div class="">
              <h6 class="font-weight-bolder">{{ $t('dashboard.Setup_your_business_identity') }}</h6>
              <p>
                {{ $t('dashboard.Create_your_business_profile_so_the_people_can_search_you') }}, 
                {{ $t('dashboard.see_your_products') }}, {{ $t('dashboard.communicate_with_you_and_much_more') }}
              </p>
              <b-button variant="outline-primary" class="btn-block mt-2">
                {{ $t('dashboard.Add_Business') }}</b-button
              >
            </div>
          </b-card>

          <b-card class="text-center mt-2 p-2" v-if="bussinessExist">
            <div class="">
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
              <b-row class="mt-2">
                <b-col cols="4" class="m-0 p-0 p-2">
                  <img
                    src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
                    class="img-left"
                  />
                </b-col>
                <b-col cols="8" class="m-0 p-0 my-auto">
                  <h6 class="text-blue font-weight-bolder m-0 p-1 ">
                    1.1 M {{ $t('dashboard.Followers') }}
                  </h6>
                  <p class="m-0 p-1">{{ $t('dashboard.Category_Name_Here') }}</p>
                  <p class="m-0 p-1">{{ $t('dashboard.Current_Plan') }}: {{ $t('dashboard.Basic') }}</p>
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col cols="12" class="text-left text-size">
                  <p>
                    <b-icon icon="person-fill" variant="primary"></b-icon> 
                    {{ $t('dashboard.view_Profile') }}
                  </p>
                  <p>
                    <b-icon icon="chat-fill" variant="primary"></b-icon> {{ $t('dashboard.Message') }}
                    <span class="float-right badge badge-pill badge-success"
                      >3</span
                    >
                  </p>
                  <p>
                    <b-icon icon="bell-fill" variant="primary"></b-icon>
                    {{ $t('dashboard.Notifications') }}
                    <span class="float-right badge badge-pill badge-success"
                      >9+</span
                    >
                  </p>
                  <p>
                    <b-icon icon="globe2" variant="primary"></b-icon> 
                    {{ $t('dashboard.Visit_Website') }}
                  </p>
                  <p>
                    <b-icon icon="arrow-repeat" variant="primary"></b-icon>
                    {{ $t('dashboard.Upgrade_Plan') }}
                  </p>
                </b-col>
              </b-row>
              <b-button variant="outline-primary" class="btn-block mt-2">
                {{ $t('dashboard.Add_Business') }}</b-button
              >
            </div>
          </b-card>

          <br />

          <b-card title="" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0 d-inline-block font-weight-bolder">
                {{ $t('dashboard.Hot_Businesses') }}
              </h6>
              <span class="float-right btn m-0 p-0 mt-1 action-intro"
                ><b-icon-chevron-left
                  class="font-weight-bolder"
                ></b-icon-chevron-left>
                <b-icon-chevron-right
                  class="font-weight-bolder"
                ></b-icon-chevron-right>
              </span>
            </template>
            <img
              src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
              class="info-image"
            />
            <b-card-text class="text-left text-size mt-2">
              <h6 class="text-blue font-weight-bolder m-0 p-1 ">
                {{ $t('dashboard.Business_Name_Here') }}
              </h6>
              <p class="m-0 p-1">{{ $t('dashboard.Business_Category') }}</p>
              <p class="m-0 p-1">1.1 M {{ $t('dashboard.Followers') }}</p>
              <p class="m-0 p-1">{{ $t('dashboard.Neighborhood') }}, {{ $t('dashboard.City') }}, {{ $t('dashboard.Country') }}</p>
              <p class="m-0 p-1">{{ $t('dashboard.Keyword') }} 1, {{ $t('dashboard.Keyword') }} 2, {{ $t('dashboard.Keyword') }} 3</p>
              <b-button variant="primary" class="mt-2" size="sm">
                {{ $t('dashboard.Contact_Us') }}</b-button
              >
              <b-button variant="primary" class="mt-2 float-right" size="sm">
                {{ $t('dashboard.Follow') }}</b-button
              >
            </b-card-text>
          </b-card>
          <br />

          <b-card title="" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0 d-inline-block font-weight-bolder">
                {{ $t('dashboard.Popular_Networks') }}
              </h6>
              <span class="float-right btn m-0 p-0 mt-1 action-intro"
                ><b-icon-chevron-left
                  class="font-weight-bolder"
                ></b-icon-chevron-left>
                <b-icon-chevron-right
                  class="font-weight-bolder"
                ></b-icon-chevron-right>
              </span>
            </template>
            <img
              src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
              class="info-image"
            />
            <b-card-text class="text-left text-size mt-2">
              <h6 class="text-blue font-weight-bolder m-0 p-1 ">
                {{ $t('dashboard.Network_Name_Here') }}
              </h6>
              <p class="m-0 p-1">{{ $t('dashboard.Business_Name_Here') }}</p>
              <p class="m-0 p-1">1.1 M {{ $t('dashboard.Members') }}</p>
              <b-button variant="outline-primary" class="btn-block mt-2">
                {{ $t('dashboard.Join') }}</b-button
              >
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import PostsDahboard from "@/components/dasboard/postsDahboard";
import Footer from "@/components/footer";

export default {
  name: "dashboard",
  components: {
    PostsDahboard,
    Navbar,
    Footer
  },
  data() {
    return {
      bussinessExist: true,
      selected: null,
      options: [
        { value: null, text: "Bussiness Name Her" },
        { value: "a", text: "Action" },
        { value: "b", text: "Another Action" },
        { value: "c", text: "Someting else Here" }
      ]
    };
  }
};
</script>

<style scoped>
.action-intro {
  font-size: 0.8rem;
  font-family: Arial, sans-serif;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.5rem;
}
.text-size {
  font-size: 13px;
}
.info-image {
  vertical-align: middle;
  border-style: none;
  width: -moz-available;
  height: 227px;
}
.text-blue {
  color: dodgerblue;
}

.img-left {
  vertical-align: middle;
  border-style: none;
  width: inherit;
  height: inherit;
}
</style>
