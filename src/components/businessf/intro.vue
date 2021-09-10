<template>
  <div>
    <b-card title="" header-tag="header" footer-tag="footer">
      <h6 class="mb-2"><b>Intro</b></h6>

      <b-card-text>
        <p>
          <b-icon icon="briefcase-fill" class="primary"></b-icon>  {{business_intro.category}}     
        </p>
        <p><b-icon icon="search" class="primary"></b-icon>  {{business_intro.keywords}} </p>
        <p>
          <b-icon icon="geo-alt-fill" class="primary"></b-icon> Mokolo, Yaounde,
          Cameroon
        </p>
        <p><b-icon icon="link" class="primary"></b-icon> www.business.com</p>
        <p>
          <b-icon icon="people-fill" class="primary"></b-icon>  {{business_intro.community}} Community
        </p>
        <p>
          <b-icon icon="telephone-fill" class="primary"></b-icon>
            {{business_intro.phone}}
        </p>
        <p>
          <b-icon icon="envelope-fill" class="primary"></b-icon>
         {{business_intro.email}}
        </p>
        <p>
          <b-icon icon="clock" class="primary"></b-icon>
          <b-link> Open now</b-link>
          <br />
          <b-dropdown size="sm" variant="transperent">
            <template #button-content>
              10:00AM - 7:00PM
            </template>
            <b-dropdown-item> 10:00AM - 7:00PM</b-dropdown-item>
          </b-dropdown>
        </p>
      </b-card-text>
      

          <GmapMap
      :center='position'
      :zoom='12'
      style='width:100%;  height: 250px;'
    >
      <GmapMarker
       
       
        :position="position"
       
      />
    </GmapMap>

    </b-card>
  </div>
</template>

<script>
export default {

    computed: {

  

      business_intro() {
      return  this.$store.state.businessOwner.businessInfo;  

    
    }

  },

};
</script>

<style></style>
