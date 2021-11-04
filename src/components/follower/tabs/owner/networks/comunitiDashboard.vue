<template>
  <div class="lala">
    <b-card class="border-0">
      <div class=" border shadow   p-tab" style="padding:20px">
        <span>
          <h4>
            <img class="img-fluid picture" src="@/assets/icons/people.png" style="width: 60px;" />
            COMMUNITY <span class="h4-color"> 7K </span>
          </h4>
        </span>

        <b-tabs pills content-class="mt-3  f-left ">
          <b-tab active>
            <template slot="title"> People <span class="spa-color"> 7K </span> </template>

            <div>
              <b-row>
                <b-col>
                  <b-tabs fill pills content-class="mt-3  f-left m-up">
                    <b-tab active>
                      <template slot="title"> Followers <span class="spa-color"> 7K </span> </template>

                      <div class="s-comcard">
                        <b-row>
                          <b-col md="6" sm="12">
                            <div><People /></div>
                          </b-col>
                          <b-col md="6" sm="12">
                            <div><People /></div>
                          </b-col>
                        </b-row>
                      </div>
                    </b-tab>

                    <b-tab>
                      <template slot="title"> Following <span class="spa-color"> 7K </span> </template>

                      <div class="s-comcard">
                        <b-row>
                          <b-col md="6" sm="12">
                            <div><People /></div>
                          </b-col>
                          <b-col md="6" sm="12">
                            <div><People /></div>
                          </b-col>
                        </b-row>
                      </div>
                    </b-tab>
                  </b-tabs>
                </b-col>
              </b-row>
            </div>
          </b-tab>

          <b-tab>
            <template slot="title"> Businesses <span class="spa-color"> 7K </span> </template>

            <div>
              <b-tabs fill pills content-class="mt-3  f-left m-up checkcheck">
                <b-tab active>
                  <template slot="title"> Followers <span class="spa-color"> 7K </span> </template>

                  <div class="s-comcard">
                    <b-row>
                      <b-col md="6" sm="12">
                        <div><Business /></div>
                      </b-col>
                      <b-col md="6" sm="12">
                        <div><Business /></div>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>

                <b-tab>
                  <template slot="title"> Following <span class="spa-color"> 7K </span> </template>

                  <div class="s-comcard">
                    <b-row>
                      <b-col md="6" sm="12">
                        <div><Business /></div>
                      </b-col>
                      <b-col md="6" sm="12">
                        <div><Business /></div>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </b-card>
  </div>
</template>

<script>
import People from '@/components/dasboard/communityMember';
import Business from '@/components/dasboard/communitybusiness';

export default {
  name: 'comunitiDashboard',

  components: {
    People,
    Business,
  },
};
</script>

<style>
.lala .nav-fill {
  margin-top: -19px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.s-comcard {
  height: 350px;
  overflow: auto;
  overflow-x: hidden;
}

.spa-color {
  color: white;
  margin-left: 10px;
  font-size: 14px;
}

.h4-color {
  color: orangered;
  margin-left: 10px;
  font-size: 14px;
}

.m-up {
  margin-top: -5px;
}
</style>
