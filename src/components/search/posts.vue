<template>
  <div>
      <b-row>
        <b-col>
        
        </b-col>
        
      </b-row>
      <b-row>
        <b-col cols="3" md="2">
          <b-avatar
            size="60"
            class="ml-4"
            variant="primary"
            text="BV"
          ></b-avatar>
        </b-col>
        <b-col>
          <div>
            <b
              >Owner's name <br />
              <small>1 day ago</small>
            </b>
          </div>
          <div class="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            reiciendis ex maiores perspiciatis rem est, libero error veritatis
            ea aspernatur nihil officia facere saepe voluptas ad adipisci
            veniam, consequuntur sed facilis excepturi quae harum. Natus, ex
            quo. Minima possimus at, repellendus eos quia aspernatur eaque qui,
            ducimus sit perspiciatis fugiat!
            <div>
              
            </div>
          </div>
        </b-col>
        <b-col cols="12" class="center">
          <b-img
            src="https://images-us.nivea.com/~/images/media-center-items/8/b/2-340911-1.png"
            height="200"
          ></b-img>
          
        </b-col>

        
                <b-col cols="12" class="mt-1 m-20">
                  <span class="mr-3"
                    ><b-icon
                      icon="suit-heart-fill"
                      variant="primary"
                      aria-hidden="true"
                    ></b-icon>
                    23</span
                  >
                  <span
                    ><b-icon
                      icon="chat"
                      variant="primary"
                      aria-hidden="true"
                    ></b-icon>
                    123</span
                  >
                </b-col>
      </b-row>
    
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped>

.center{
  align-content: center;
  text-align: center;
}
.m-20{
  margin-left: 200px;
}
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

.card {
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
}
.txt {
  position: relative;
  left: 10px;
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
