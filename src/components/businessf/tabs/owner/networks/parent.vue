import Businesses from '@/components/follower/tabs/businesses'; import Bussiness
from '@/components/owner/tabs/bussiness';

<template>
  <b-container fluid="" class="text-justify ">
    <b-card title="">
      <b-container class="a-center">
        <b-avatar
          size="6em"
          src="https://business.bridgeafrica.info/assets/img/pea.jpg"
          class="network-profile-image-profile"
        >
        </b-avatar>
        <b-icon-plus class="network-avatar-icon"></b-icon-plus>
      </b-container>

      <br />

      <b-container>
        <b-row>
          <b-col>
            <h6 class="font-weight-bolder m-0 p-0">Marketers</h6>
          </b-col>
          <b-col>
            <b-button variant="primary" size="sm">
              <b-icon-check class=""></b-icon-check> Joined
            </b-button>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-card-text class="text-left">
        <b-container>
          <b-row>
            <b-col>
              <p><b-icon icon="person" variant="primary"></b-icon> Owner</p>
            </b-col>
            <b-col>
              <p><b-icon icon="briefcase" variant="primary"></b-icon> Name</p>
            </b-col>
          </b-row>
        </b-container>

        <b-container>
          <b-row>
            <b-col>
              <p><b-icon icon="globe" variant="primary"></b-icon> Private</p>
            </b-col>
            <b-col>
              <p>
                <b-icon icon="people-fill" variant="primary"></b-icon> 3.5K
                Members
              </p>
            </b-col>
          </b-row>
        </b-container>

        <h6 class="mt-2 font-weight-bolder">About</h6>
        <p class="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <span class="d-inline-block float-right">
            <a href="#">lire la Suite</a>
          </span>
        </p>
      </b-card-text>
    </b-card>

    <b-card
      class="mt-4"
      title="Community"
      header-tag="header"
      footer-tag="footer"
    >
      <b-list-group-item class="d-flex align-items-center m-0 p-2 b-none">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto font-weight-bolder">Itz blec blec</span>
      </b-list-group-item>

      <b-list-group-item class="d-flex align-items-center m-0 p-2 b-none">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto font-weight-bolder">do wilflow</span>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center m-0 p-2 b-none">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto font-weight-bolder">blezour blec</span>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center m-0 p-2 b-none">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto font-weight-bolder">John Deo</span>
      </b-list-group-item>
      <b-card-text class="mt-2">
        <span class="float-left"> <a href="">View All Members</a> </span>
        <span class="float-right">
          <b-button variant="outline-primary" size="sm">
            <b-icon-plus class=""></b-icon-plus> Invite
          </b-button>
        </span>
      </b-card-text>
    </b-card>

    <b-card
      class="mt-4"
      title="Businesses"
      header-tag="header"
      footer-tag="footer"
    >
      <b-list-group-item class="d-flex align-items-center m-0 p-2 b-none">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto font-weight-bolder"> Business name</span>
      </b-list-group-item>

      <b-list-group-item class="d-flex align-items-center m-0 p-2 b-none">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto font-weight-bolder"> Business name </span>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center m-0 p-2 b-none">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto font-weight-bolder"> Business name </span>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center m-0 p-2 b-none">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto font-weight-bolder"> Business name </span>
      </b-list-group-item>
      <b-card-text class="mt-2">
        <span class="float-left"> <a href="">View All Bussiness</a> </span>
        <span class="float-right">
          <b-button variant="outline-primary" size="sm">
            <b-icon-plus class=""></b-icon-plus> Invite
          </b-button>
        </span>
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "pendingFeedback"
};
</script>

<style scoped>
.a-center {
  text-align: center;
  align-content: center;
  justify-content: center;

  display: flex;
}
.b-none {
  border-style: none;
}

.network-avatar-icon {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 77px;
  right: 98px;
  padding: 0px 0px;
  color: #ffff;
  background: #e75c18;
  border-radius: 25px;
  border: 4px solid #ffff;
}
</style>
