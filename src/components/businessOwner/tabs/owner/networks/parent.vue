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
          <b-col cols="6">
            <h6 class="font-weight-bolder m-0 p-0 t-align">
              Maketers Union Network
            </h6>
          </b-col>
          <b-col cols="6">
            <b-button variant="primary" block size="sm" style="width: 120px;">
              <b-icon icon="plus-circle"></b-icon> Community
            </b-button>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-card-text class="text-left">
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

    <b-card class="mt-4" title="" header-tag="header" footer-tag="footer">
      <h4>
        <b-icon icon="people" class="i-color"> </b-icon> Community
        <span class="i-color"> 7k </span>
      </h4>

      <SidebarCommunity />
    </b-card>
  </b-container>
</template>

<script>
import SidebarCommunity from "@/components/businessf/tabs/owner/networks/sidebarcommunity";

export default {
  name: "parent",

  components: {
    SidebarCommunity,
  },
};
</script>

<style>
.lala .nav-fill {
  margin-top: -19px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.a-center {
  text-align: center;
  align-content: center;
  justify-content: center;

  display: flex;
}
.b-none {
  border-style: none;
}
.t-align {
  text-align: left;
}
.network-avatar-icon {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 77px;
  right: 158px;
  padding: 0px 0px;
  color: #ffff;
  background: #e75c18;
  border-radius: 25px;
  border: 4px solid #ffff;
}

.i-color {
  color: #e75c18;
}
</style>
