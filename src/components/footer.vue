<template>
  <div class>
    <footer id="footer" class="shadow pt-5">
      <div class="footer-top">
        <div class="container">
          <div class="row col-md-6 mx-auto">

            <div class="col-lg-9">
              <ul class="list-group list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
              </ul>

            </div>
            <div class="col-lg-3">
              <ul class="list-group list-unstyled">

                <li class="nav-item dropdown show"><b>Language</b>
                  <b-dropdown
                      size="sm"
                      variant="outline"
                      text="English"
                      class="m-2"
                  >
                    <b-dropdown-item-button>English</b-dropdown-item-button>
                    <b-dropdown-item-button>French</b-dropdown-item-button>
                  </b-dropdown>
                </li>
                <li class="nav-item dropdown show"><b>Country</b>
                  <b-dropdown
                      size="sm"
                      variant="outline"
                      text="Cameroon"
                      class="ml-2"
                  >
                    <b-dropdown-item-button>Cameroon</b-dropdown-item-button>
                    <b-dropdown-item-button>Nageria</b-dropdown-item-button>
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div class="mt-5 border-top">
          <div class="col-lg-12 mt-3">
            <p class="text-center">© Copyright all rights reserved</p>

          </div>
        </div>
      </div>


    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  text-align: start;
  list-style: none;
}
.bottom {
  border-top: solid 1px #ccc;
  padding: 10px;
  text-align: center;
}
.top {
  padding: 50px;
  position: relative;
  left: 230px;
}
@media only screen and (max-width: 768px) {
  .top {
    padding: 50px;
    position: relative;
    left: -40px;
  }

  .card {
    width: 500px;
  }
}
</style>
