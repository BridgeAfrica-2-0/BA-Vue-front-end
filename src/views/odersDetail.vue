<template >
  <div>
    <navbar />
    <div class="container body">
      <h1>Order Details</h1>

      
        <div class="card my-2">
          <div class="card-body row">
            <div class="col">
              <span class="marge">
                <span class="gras">Order</span>
                <span class="text-success order">#12324253</span> <br />
              </span>
              <span class="flou marge1">yaoundé 12/12/2021 12H00</span>
            </div>
            <div class="col">
              <span class="margtotal"> Total : 199500 Fcfa </span>
            </div>
          </div>
        </div>

        <div class="card my-1">
          <div class="card-body row">
            <div class="col">
              <span class="mr-2 row"
                ><fas-icon class="violet search" :icon="['fas', 'cart-arrow-down']"
              />  Card</span>
               <span class="row ">
                  <span class="my-1 col"> sold by: marcellin , danaz</span>
                <span class="mr-3 row"
                ><fas-icon class="violet search" :icon="['fas', 'envelope']"
              />  Chat Now</span>
               </span>
            </div>
           
          </div>
        </div>


        

        <div class="card my-1">
          <div class="card-body ">
            <div class="col">
              <br><br><br><br><br><br><br><br>
            </div>
           
          </div>
        </div>

        <div class="row my-1">
            <div class="col-6 ">
                <div class="card ">
                    <div class="card-body row">
                        <br><br><br>

                    
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card ">
                    <div class="card-body row">
                        <br> test
                        <span class="hr"></span>
                        <br>
                        test12
                    </div>
                </div>
            </div>

            <div class="col-6 my-1">
                <div class="card ">
                    <div class="card-body row">
                
                    
                    </div>
                </div>
            </div>

            <!-- <div class="col-6">
                <div class="card ">
                    <div class="card-body row">
                
                    
                    </div>
                </div>
            </div>
             -->
            
        </div>
     

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
export default {
  components: { navbar },
};
</script>

<style scoped>
.body {
  background-color: rgba(213, 214, 214, 0.473);
}
.marge {
  margin-right: 380px;
}
.marge1 {
  margin-right: 300px;
}
.margtotal {
  margin-left: 350px;
}
.hr{
    height: 5px;
    width: 100px;
    background-color: black;
}
</style>