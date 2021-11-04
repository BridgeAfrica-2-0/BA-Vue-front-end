<template>
  <b-container style="text-align:left">
    <b-container class="b-bottom">
      <b-row>
        <b-col>
          <div class="b-bottomn f-left"><H5> Settings </H5></div>
        </b-col>
        <b-col>
          <div class="b-bottomn f-right">
            <b-button variant="primary" class="a-button-l"> Save Changes </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <br />

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Network Name"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input id="bname" placeholder="" required></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Website"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input id="bname" placeholder="" required></b-form-input>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label=" Description "
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Privacy"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2"
              :options="['Private', 'Public']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Visibility"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2"
              :options="['Visible', 'Hidden']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Posting Permission"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2"
              :options="['Admin Only', 'Anyone']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Post Approval"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2"
              :options="['All Network Post', 'Unplublish']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Posting Permissions"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2"
              :options="['Admin only', 'Allow visitors/followers to post']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label=" Allow Membership Request From Business"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2"
              :options="['Allow', 'Do Not Allow']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Marketplace"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-checkbox v-model="checked" name="check-button" switch> </b-form-checkbox>
        </b-form-group>
      </b-container>
    </div>

    <b-container>
      <b-link href="#foo" class="f-left">Delete Business Identity</b-link>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'general',
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

  border-bottom: 0.25px solid rgb(238, 230, 230);
}

.m-left {
  margin-left: -20px;
}

.bb-bottom {
  margin-bottom: 7px;
  margin-top: 5px;
}
</style>
