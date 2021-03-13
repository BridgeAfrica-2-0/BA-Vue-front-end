<template>
  <div>
    <div class="row">
      <div class="col-3">
        <img src="../../assets/img/follow.jpg" height="200" alt="" />
      </div>
      <div class=" col details ml-3">
        <h4>
          <b-link class="link">Business Name</b-link>
        </h4>
        <p>
          <a href="">mywebsite.com</a> <br />
          Business Category <br />
          1.1M Community <br />
          Neighbourhood, city country <br />
          Keyword 1 Keyword 2 Keyword 3
        </p>
      </div>
      <div>
        <span class="btns">
          <b-button class="primary-bg" size="sm" variant="primary"
            ><b-icon icon="chat-fill" class="avatar-header-icon"></b-icon>
            <span class="ml-1"> Message</span></b-button
          >

          <b-button class="ml-3 community" size="sm">
            <b-icon icon="plus"></b-icon>
             Community</b-button
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #000;
}
a {
  text-decoration: black;
  color: #e75c18;
}

.btns {
  display: flex;
  margin-left: 120px;
}

.primary-bg {
  background-color: #e75c18;
  border: none;
  display: flex;
}

.primary-bg:hover{
    color: #fff;
}
.community {
  background-color: rgb(240, 240, 240);
  color: #000;
  border: none;
  display: flex;
}

@media only screen and (max-width: 768px) {
  .details {
    position: relative;
    top: 200px;
    left: -80px;
  }
  .btns {
    position: relative;
    top: 180px;
    left: -110px;
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
