<template>
  <b-container>
    

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Business_Visibility')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2 text"
              :options="['Published', 'Unplublish']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
      <hr />
    </div>
    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Posting_Permissions')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2 text "
              :options="['Admin only', 'Allow visitors/followers to post']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>

      <hr />
    </div>

    <div>
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Post_Approval')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
        >
          <b-form-checkbox
            id="checkbox-1"
            class="text"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            {{$t("businessowner.All_business_posts_must_be_approved_by_an_admin")}}
          </b-form-checkbox>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Keyword_Alerts')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-textarea
            id="textarea"
          
            :placeholder="$t('businessowner.Enter_something')"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Marketplace')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
        >
          <b-form-checkbox v-model="checked" name="check-button" switch>
          </b-form-checkbox>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <b-container>
      <b-link href="#foo" class="f-left text">{{$t("businessowner.Delete_Business_Identity")}}</b-link>
    </b-container>


    <div class="b-bottomn">
      <b-button variant="primary" class="a-button-l text">{{$t("businessowner.Save_Changes")}}</b-button>
      <br />
    </div>
    
  </b-container>
</template>

<script>
export default {
  name: "general"
};
</script>

<style scoped>
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid;
  border-color: gray;
}
.b-bottomn {
 
  margin-bottom: 30px;
  padding-bottom: 10px;
}
.f-left {
  float: left;
}
.tabs {
  width: 100%;
}
.a-button-l {
  margin-bottom: 1000px;
  align-content: right;
  float: right;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}
@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
  .btn{
    font-size: 12px;
  }
}
</style>