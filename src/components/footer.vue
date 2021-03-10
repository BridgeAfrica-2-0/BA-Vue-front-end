<template>
  <div class="foot">
    <b-card class="card">
      <div class="top">
        <b-container>
          <b-row>
            <b-col>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Blog</a></li>
              </ul>
            </b-col>
            <b-col>
              <ul>
                <li><b-link>Language</b-link></li>
                <li>
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

                <li><b-link>Country</b-link></li>
                <li>
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
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="bottom">
        © Copyright all rights reserved
      </div>
    </b-card>
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
