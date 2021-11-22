<template>
  <div>

         <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            :placeholder="$t('network.Search_Something')"
            type="text"
            class="form-control"
            v-model="searchTitle"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <br/>

    <b-row cols="1">
      <b-col class="ml-0 mr-0"
        v-for="member in displayfollowers"
        :key="member.id"
      >
        <b-skeleton-wrapper :loading="loading" >
          <template #loading>
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
        <div style="display:none;">{{member['communityNum'] = nFormatter(member.followers)}}</div>
        <CommunityMembers :member="member" @BlockUser="BlockUser" />
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
    <b-row >
      <b-col col="12">
        <infinite-loading @infinite="infiniteHandler">
          <div class="text-red" slot="no-more">{{ $t('network.No_More_Request') }}</div>
          <div class="text-red" slot="no-results">{{ $t('network.No_More_Request') }}</div>
        </infinite-loading>
      </b-col>
    </b-row>
    
    <FlashMessage />
  </div>
</template>

<script>
import CommunityMembers from "../../communityMember"
export default {
  components:{
      CommunityMembers
  }
}
</script>

<style>

</style>