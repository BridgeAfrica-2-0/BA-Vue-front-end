<template>
  <div class="foot">
    <b-card class="card">
      <div class="top">
        <b-container>
          <b-row class="row">
            <b-col>
              <ul>
                <li><a class="pages" href="">Home</a></li>
                <li><a class="pages" href="">About Us</a></li>
                <li><a class="pages" href="">Privacy Policy</a></li>
                <li><a class="pages" href="">Contact Us</a></li>
                <li><a class="pages" href="">Blog</a></li>
              </ul>
            </b-col>
            <b-col>
              <ul>
                <li><b-link class="link">Language</b-link></li>
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

                <li><b-link class="link">Country</b-link></li>
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

.pages {
  color: black;
  text-decoration: none;
}
.pages:hover{
  color: #e75c18;
}
.link {
  color: #e75c18;
  text-decoration: none;
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
  .row{
    display: flex;
    flex-direction: column;
  }
  .bottom {
  margin-left: -150px;
}
}
</style>
