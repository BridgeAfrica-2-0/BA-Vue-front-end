<template>
  <div class=" ">
    <b-card title="" class="">
      <b-container class="a-center">
        <b-avatar
          src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
          variant="primary"
          square
          rounded
          class="network-logo"
        >
        </b-avatar>

        <b-icon
          icon="camera"
          class=" cursor-pointer network-avatar-icon"
          v-b-modal.modal-4
        ></b-icon>
      </b-container>

      <br />

      <b-container>
        <b-row>
          <b-col cols="6">
            <h6 class="  m-0 p-0 a-center network-name "><b> {{ $t('profilefollower.Heavy_Gym') }} </b></h6>
          </b-col>
          <b-col cols="6">
            <b-button
              variant="primary"
              size="sm"
              @click="addNetwork"
              style="width: 120px;"
              class="a-center"
            >
              <b-icon icon="pencil"></b-icon> {{ $t('profilefollower.Edit') }}
            </b-button>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-card-text class="text-left">
        <b-container>
          <b-row>
            <b-col>
              <p class="a-center ">
                <b-icon icon="globe" variant="primary"></b-icon>
                <span class="pivate text"> {{ $t('profilefollower.Private') }} </span>
              </p>
            </b-col>
            <b-col>
              <p class="a-center">
                <b-icon icon="people-fill" variant="primary"></b-icon>
                <span class="pivate text"> 3.5K {{ $t('profilefollower.Community') }} </span>
              </p>
            </b-col>
          </b-row>
        </b-container>

        <h6 class="mt-2 font-weight-bolder title ">{{ $t('profilefollower.About') }}</h6>
        <p class="text-justify text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <span class="d-inline-block float-right">
            <a href="#">{{ $t('profilefollower.Read_more') }}</a>
          </span>
        </p>
      </b-card-text>
    </b-card>

    <SidebarCommunity />

    <b-modal hide-footer title="Edit network" size="md" v-model="showModal">
      <b-container>
        <b-form>
          <b-form-group
            label-cols-lg="12"
            :label="$t('profilefollower.Network_Name')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input id="network_name" placeholder="" required>
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            :label="$t('profilefollower.Brief_Description') "
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-textarea
              id="textarea"
              v-model="text"
              :placeholder="$t('profilefollower.Enter_something')"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            :label="$t('profilefollower.Email')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input id="network_name" placeholder="" required>
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            :label="$t('profilefollower.Tel1')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input id="tel-1" placeholder="" required> </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            :label="$t('profilefollower.Tel2')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input id="network_name" placeholder="" required>
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-lg="12"
            :label="$t('profilefollower.Location')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-input id="network_name" placeholder="" required>
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-md="6"
            :label="$t('profilefollower.Allow_Business_to_join_network')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-checkbox name="check-button" switch> </b-form-checkbox>
          </b-form-group>

          <b-button class="mt-2 " style="float:right" variant="primary">
            {{ $t('profilefollower.Update_Network') }}</b-button
          >
        </b-form>
      </b-container>
    </b-modal>

    <b-modal id="modal-4" title="Upload Profile Picture">
      <div class="w3-container">
        <div class="row pb-3">
          <div
            class="col-sm-6 text-center"
            style="border-right:1px solid #dee2e6;"
          >
            <h1>
              <fas-icon class="primary" :icon="['fas', 'upload']" />
            </h1>
            <div>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
            <h4>{{ $t('profilefollower.Upload_a_New_picture') }}</h4>
          </div>

          <div class="col-sm-6 text-center">
            <h1>
              <fas-icon class="primary" :icon="['fas', 'edit']" />
            </h1>
            <h4>{{ $t('profilefollower.Edit_Your_New_picture') }}</h4>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import SidebarCommunity from "@/components/businessf/tabs/owner/networks/sidebarcommunity";

export default {
  name: "parent",

  data() {
    return {
      networkShow: true,
      showModal: false,
      text: "",
    };
  },

  components: {
    SidebarCommunity,
  },

  methods: {
    openNetwork() {
      this.networkShow = false;
    },

    addNetwork() {
      console.log("hello");
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
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

.i-color {
  color: #e75c18;
}

@media only screen and (min-width: 768px) {
  .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;

    top: 200px;
    margin-left: 200px;

    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }

  .network-name {
    font-size: 20px;
  }

  .pivate {
    font-size: 16px;

    padding-left: 8px;
    text-align: left;
  }

  .network-logo {
    width: 200px !important;
    height: 200px !important;
  }
}

@media only screen and (max-width: 768px) {
  .network-logo {
    width: 78px !important;
    height: 78px !important;
  }

  .network-name {
    font-size: 16px;
  }

  .pivate {
    font-size: 14px;

    padding-left: 8px;

    text-align: left;
  }

  .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;

    top: 78px;
    margin-left: 78px;

    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }
}
</style>
