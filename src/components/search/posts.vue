<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <h4>Posts</h4>
        </b-col>
        <b-col class="col">
          <b-link class="lnk">See All</b-link>
        </b-col>
      </b-row>
      <b-col class="posts mt-3">
        <b-row>
          <b-col class="col">
            <b-avatar variant="primary" text="BV"></b-avatar>
          </b-col>
          <b-col>
            <p>
              <strong>Jane Wright</strong> <br />
              <small>
                <span>Following</span>
              </small>
            </p>
          </b-col>
          <b-col class="col-2">
            <b-dropdown
              id="dropdown-1"
              text="Contact"
              class="m-md-2 drop"
              variant="primary"
              size="sm"
            >
              <b-dropdown-item>
                <b-icon icon="chat-fill" variant="primary"></b-icon>
                Message</b-dropdown-item
              >
              <b-dropdown-item>
                <b-icon icon="telephone-fill" variant="primary"></b-icon>Call
                Now</b-dropdown-item
              >
              <b-dropdown-item>
                <b-icon icon="geo-alt" variant="primary"></b-icon> Get
                Direction</b-dropdown-item
              >
            </b-dropdown>
          </b-col>
        </b-row>
        <div class="mb-3">
          <span>Text:</span> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laudantium reiciendis ex maiores perspiciatis rem est, libero
          error veritatis ea aspernatur nihil officia facere saepe voluptas ad
          adipisci veniam, consequuntur sed facilis excepturi quae harum. Natus,
          ex quo. Minima possimus at, repellendus eos quia aspernatur eaque qui,
          ducimus sit perspiciatis fugiat!
          <div>
            <b-row>
              <b-col class="mt-1">
                <span class="mr-3"
                  ><b-icon
                    icon="suit-heart"
                    variant="primary"
                    aria-hidden="true"
                  ></b-icon>
                  23</span
                >
                <span
                  ><b-icon
                    icon="chat-fill"
                    variant="primary"
                    aria-hidden="true"
                  ></b-icon>
                  123</span
                >
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped>
.posts {
  border-bottom: 1px solid #ccc;
}
.button {
  margin-left: 120px;
}
p {
  margin-left: -280px;
}
.lnk {
  margin-left: 280px;
}

.follow {
  display: flex;
}

@media only screen and (max-width: 768px) {
  p {
    margin-left: -60px;
  }
  .button {
    margin-left: -10px;
  }
  .btn {
    position: relative;
    left: -50px;
  }
  .lnk {
    margin-left: 50px;
  }

  .drop {
    left: -50px;
  }
}
</style>
