<template>
  <div>
    <b-card>
      <b-row>
          <b-col>
               <h2>People</h2>
          </b-col>
          <b-col class="col-2">
              <b-link>See All</b-link>
          </b-col>
      </b-row>
      <b-row class="business">
        <b-col class="col-1">
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
          <b-button class="button" variant="outline-primary">Follower</b-button>
        </b-col>
      </b-row>
      <b-row class="business mt-3">
        <b-col class="col-1">
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
          <b-button class="button" variant="primary">Message</b-button>
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
</style>
