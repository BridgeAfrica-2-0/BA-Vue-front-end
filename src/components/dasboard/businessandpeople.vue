<template>
  <div>
    <b-card class="shadow">
      <b-row>
        <b-col>
          <div style="p-div">
            <span>
              <h4>
                BUSINESS
                <h6 style="float:right">
                  <b-link> <u> see all </u> </b-link>
                </h6>
              </h4>
            </span>
          </div>
          <div class="div-h"><Business /></div>
        </b-col>
        <b-col>
          <div class="p-div">
            <span>
              <h4>
                People
                <h6 style="float:right">
                  <b-link> <u> see all </u> </b-link>
                </h6>
              </h4>
            </span>
          </div>
          <div class="div-h"><People /></div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import People from '@/components/dasboard/communityMember';
import Business from '@/components/dasboard/communitybusiness';

export default {
  components: {
    People,
    Business,
  },
};
</script>

<style scoped>
.div-h {
  height: 350px;
  overflow: auto;
  overflow-x: hidden;
}
</style>
