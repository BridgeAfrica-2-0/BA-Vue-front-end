<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <h4><b-icon icon="people" variant="primary"></b-icon> <span class="ml-2">Networks</span></h4>
        </b-col>
        <b-col class="col">
          <b-link class="lnk">See All</b-link>
        </b-col>
      </b-row>

      <b-row class="business mt-3">
        <b-col class="col">
          <b-avatar variant="primary" text="BV"></b-avatar>
        </b-col>
        <b-col class="min">
          <p>
            <strong>Business </strong> <br />
            <small>
              <span>Business category - 36k Followers</span>
            </small>
          </p>
        </b-col>
        <b-col class="ml-4  btns min">
          <b-dropdown
            id="dropdown-1"
            text="Contact"
            class="m-md-2 drop"
            variant="primary"
            size="sm"
          >
            <b-dropdown-item>
              <b-icon icon="chat-fill" variant="primary"></b-icon>
              Message</b-dropdown-item
            >
            <b-dropdown-item>
              <b-icon icon="telephone-fill" variant="primary"></b-icon> Call
              Now</b-dropdown-item
            >
            <b-dropdown-item>
              <b-icon icon="geo-alt" variant="primary"></b-icon> Get
              Direction</b-dropdown-item
            >
          </b-dropdown>

          <b-button size="sm" class="community">
            <b-icon icon="plus"></b-icon> Community
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped>
.business {
  border-bottom: 1px solid #ccc;
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
.community {
  background-color: #f0f0f0;
  color: #000;
  border: none;
  display: flex;
  margin-left: 100px;
  margin-top: -38px;
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
