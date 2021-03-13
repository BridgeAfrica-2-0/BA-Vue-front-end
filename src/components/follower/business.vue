<template>
  <div>
    <div class="row">
      <div class="col-3">
        <img src="../../assets/img/follow.jpg" height="200" alt="" />
      </div>
      <div class="col details">
        <h3>
          <b-link style="text-decoration: none; color: #000"
            >Business Name</b-link
          >
        </h3>
        <p>
          <a href="">mywebsite.com</a> <br />
          Business Category <br />
          1.1M Follower <br />
          Neighbourhood, city country <br />
          Keywords
        </p>
      </div>
      <div class="col">
        <span class="btns">
          <b-button variant="primary">Connect</b-button>

          <b-button class="ml-3" variant="outline-primary">
            <b-icon icon="plus"></b-icon>
            Follow</b-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: black;
}

.btns {
    display: flex;
  margin-left: 120px;
}

@media only screen and (max-width: 600px) {
  .details {
    position: relative;
    top: 200px;
    left: -80px;
  }
  .btns {
    position: relative;
    top: 180px;
    left: -140px;
  }
  img {
    width: 270px;
  }
  h3 {
    font-size: 20px;
    margin-top: 10px;
  }
  .btn {
    display: flex;
  }
}
</style>
