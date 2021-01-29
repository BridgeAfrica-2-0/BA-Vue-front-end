<template>
  <div>
    <b class="business">Business Visited</b>
    <hr />
    <div class="row">
      <div class="col">
        <b-list-group-item class="d-flex align-items-center mb-4 " style="border: none">
          <b-avatar class=" profile mr-3"></b-avatar>
          <div class="datails">
            <div class="row">
              <div class="col">
                <span class="mr-auto"> <b>Business Name Here</b> </span>
                <p>Category Name here - 1.1 M Followers</p>
              </div>

            </div>
            <b-link style="text-decoration: none">Get Directions</b-link>
          </div>
        </b-list-group-item >
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.details {
  display: flex;
}

.profile{
  position: relative;
  top: -30px;
}
@media only screen and (max-width: 600px) {
  .business{
    margin-left: 20px;
  }
}
</style>
