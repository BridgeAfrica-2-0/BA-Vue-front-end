<template>
  <div>
    <b class="business">Business Visited</b>
    <hr />
    <div class="row">
      <div class="col">
        <b-list-group-item
          class="d-flex align-items-center mb-4 "
          style="border: none"
        >
          <b-avatar class="mr-3 avat"></b-avatar>
          <div class="datails">
            <div class="row">
              <div class="col">
                <span class="mr-auto"> <b>Business Name Here</b> </span>
                <p>Category Name here - 1.1 M Followers</p>
              </div>
            </div>
            <b-link class="link">Get Directions</b-link>
          </div>
        </b-list-group-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #e75c18;
}
.bus-visited {
  border: none;
}
.details {
  display: flex;
}

.profile {
  position: relative;
  top: -30px;
}
@media only screen and (max-width: 768px) {
  .business {
    margin-left: 20px;
  }

  .avat{
    margin-top: -120px;
  }
}
</style>
