<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <h4>People</h4>
        </b-col>
        <b-col class="col">
          <b-link class="lnk">See All</b-link>
        </b-col>
      </b-row>
      <b-row class="business">
        <b-col class="col">
          <b-avatar variant="primary" text="BV"></b-avatar>
        </b-col>
        <b-col>
          <p>
            <strong>Business 1</strong> <br />
            <small>
              <span>Business category - 36k Followers</span>
            </small>
          </p>
        </b-col>
        <b-col class="col-4">
          <b-button class="button" variant="outline-primary" size="sm"
            ><b-icon icon="plus" variant="primary"></b-icon> Follower</b-button
          >
        </b-col>
      </b-row>
      <b-row class="business mt-3">
        <b-col class="col">
          <b-avatar variant="primary" text="BV"></b-avatar>
        </b-col>
        <b-col>
          <p>
            <strong>Business 2</strong> <br />
            <small>
              <span>Business category - 36k Followers</span>
            </small>
          </p>
        </b-col>
        <b-col class="col-4">
          <b-button class="button" variant="primary" size="sm"
            ><b-icon icon="chat-fill" variant="white"></b-icon>
            Message</b-button
          >
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
}
.lnk {
  margin-left: 260px;
}
p {
  margin-left: -210px;
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
  }
}
</style>
