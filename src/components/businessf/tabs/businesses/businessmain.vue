<template>
  <div>
    <div class="row mb-2">
      <div class="col-3">
        <img src="../../../../assets/img/follow.jpg" height="200" alt="" />
      </div>
      <div class=" col details ml-1">
        <h4>
          <b-link class="link">Business Name</b-link>
        </h4>
        <p>
          <a href="">mywebsite.com</a> <br />
          <strong>Category:</strong> Business Category <br />
          <strong>Community:</strong> 1.1M Community <br />
          <strong>Location:</strong> Neighbourhood, city country <br />
          <strong>Keyword:</strong> Keyword 1 Keyword 2 Keyword 3 <br />
          <strong>About:</strong> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. <b-link>Read More</b-link>
        </p>
      </div>
      <div>
        <span class="btns mt-2 mr-4">
          <b-col>
            <b-row>
              <b-button class=" community  mt-2" variant="primary" size="sm">
                <b-icon icon="plus-circle"></b-icon>
                <span class="company"> Company</span></b-button
              >
            </b-row>
            <b-row>
              <b-button class=" community  mt-3" variant="primary" size="sm">
                <b-icon icon="chat"></b-icon>
                <span class="ml-1"> Message</span></b-button
              >
            </b-row>
            <b-row>
              <b-button class=" community  mt-3" variant="primary" size="sm">
                <b-icon icon="geo-alt"></b-icon>
                <span class="ml-1"> Direction</span></b-button
              >
            </b-row>
          </b-col>
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
  margin-left: 50px;
}

.primary-bg {
  background-color: #e75c18;
  border: none;
  display: flex;
}

.primary-bg:hover {
  color: #fff;
}
.community {
  border: none;
  display: flex;
  border-radius: 5px;
}

.toggle {
  color: #fff;
  background-color: #000;
  border-color: #005cbf;
}
.company {
  margin-left: 4px;
}
img {
  border-radius: 10px;
}
.details {
  margin-left: -100px;
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
  .community {
    position: relative;
    left: 100px;
    top: -38px;
  }
}
</style>
