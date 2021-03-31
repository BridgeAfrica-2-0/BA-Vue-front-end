<template>
  <div>
    <b-card class="card">
      <b-row>
        <b-col>
          <h4>
            <b-icon icon="people" variant="primary"></b-icon>
            <span class="ml-2">Networks</span>
          </h4>
        </b-col>
        <b-col class="col">
          <b-link class="lnk">See All</b-link>
        </b-col>
      </b-row>
      <span v-for="(network, index) in data" :key="index">
        <b-row class="business mt-3">
          <b-col class="col">
            <img src="../../assets/img/follow.jpg" height="200" alt="" />
          </b-col>
          <b-col class="min  ml-5">
            <p>
              <strong>Network Name </strong> <br />
              <br />
              <small>Public</small>

              <br />
              <small>36k Members</small>
              <br />

              <small>36k Members</small>
              <br />
              <small>Business Name</small>
            </p>
          </b-col>
          <b-col class="buttons">
            <span v-if="network.type == 'minus'" class="box ml-5">
              <b-button size="sm" variant="primary">
                <b-icon icon="dash-circle"></b-icon>
                <span class="ml-1">Community</span>
              </b-button>

              <b-button size="sm" class="ml-5 mb-1 mt-2" variant="primary">
                <b-icon icon="chat"></b-icon> Message
              </b-button>
            </span>
            <span v-if="network.type == 'plus'">
              <b-button class="ml-5 mb-1 mt-2" size="sm" variant="primary">
                <b-icon icon="plus-circle"></b-icon>
                <span class="ml-1">Community</span>
              </b-button>
            </span>
          </b-col>
        </b-row>
      </span>
    </b-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["data"],
};
</script>

<style scoped>
.business {
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.button {
  margin-left: 120px;
  display: flex;
}
.lnk {
  margin-left: 260px;
}
p {
  margin-left: -210px;
}

.drop {
  left: 1px;
}
.buttons {
  margin-left: 120px;
}
.community {
  border: none;
  display: flex;
}

.card {
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
}
img {
  border-radius: 10px;
}
.min {
  position: relative;
  left: 150px;
}
@media only screen and (max-width: 768px) {
  .button {
    margin-left: 0px;
  }
  .lnk {
    margin-left: 50px;
  }
  p {
    margin-left: -50px;
    font-size: 15px;
  }
  .drop {
    left: 10px;
  }
  .community {
    position: relative;
    top: 8px;
  }

  .btns {
    margin-bottom: 20px;
    left: 45px;
  }
  .min {
    margin-left: -50px;
  }
}
</style>
