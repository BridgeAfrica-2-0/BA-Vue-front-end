<template>
  <div class="container">
    <navbar />
    <hr />
    <!-- partie mobile--------------------------------------------------------------------- 
    
    ----------------------DEBUT -----------------------------------------------------
    -->
    <div id="hidemobile">
      <div class="justify-content-between d-flex row cd B">
        <div
          id="m1"
          class="mobile green t col transition pl-4"
          @click="changeElementType(1)"
        >
          <div class="cercle1">1</div>
          <h2 class="h2 text-position">In progress</h2>
        </div>
        <div
          id="m2"
          class="mobile1 col t start-50"
          @click="changeElementType(2)"
        >
          <div class="cercle2">2</div>
          <h2 class="h2 text-position text-center">Complete</h2>
        </div>
        <div id="m3" class="mobile2 col t" @click="changeElementType(3)">
          <div class="cercle2">3</div>
          <h2 class="h2 text-position text-center">Cancel</h2>
        </div>
      </div>

      <div class="justify-content-between container row my-4">
        <div class="col order"><h3>My orders</h3></div>
        <div class="col"><h3 class="text-danger">clear history</h3></div>
        <div class="status" v-if="titre">
          <h5 class="text-danger">clear history</h5>
        </div>
      </div>
      <hr />
      
      <div>
        <div v-if="status == 1" class="inprogress">
          <div v-for="i in 4" :key="i">
            <div class="justify-content-start container row">
              <p class="h3">status:</p>
              <h3 class="text-success h3 margstatus">{{ etat }}</h3>
            </div>

            <div class="justify-content-center row">
              <div class="col-4 margimg">
                <splide :options="{ rewind: true }" class="r-img1">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img1" />
                  </splide-slide>
                </splide>
              </div>
              
              <div class="col-4 text-end ">
                <h3 class="h3 margm2 ">Name :</h3>
                <h3 class="h3 margm2">Product ID :</h3>
                <h3 class="h3 margm2">Quantity :</h3>
                <h3 class="h3 margm2">price :</h3>
                <h3 class="h3 margm2">shipping cost:</h3>
                <h3 class="h3 margm2">Total Cost :</h3>
              </div>

              <div class="col-4 ">
                <h3 class="h3 ">Sneaker</h3>
                <h3 class="h3">#123v3c13</h3>
                <h3 class="h3">1 Item</h3>
                <h3 class="h3">12000 XAF</h3>
                <h3 class="h3">10000 XAF</h3>
                <h3 class="h3">13000 XAF</h3>
              </div>
              
            </div>
            

            <div class="justify-content-center container row">
              <br />
            </div>

            
            <div class="justify-content-center container row">
              
              <div class="">
                <button class="buttonm btn shadow text-center">
                  <h3 class="h3 button-text">Re-order</h3>
                </button>
              </div>
              
            </div>
            <div class="justify-content-center container row">
              <br />
            </div>
          </div>
        </div>

        <div v-if="status == 2" class="inprogress">
          <div v-for="i in 4" :key="i">
            <div class="justify-content-start container row">
              <p class="h3">status:</p>
              <h3 class="text-success h3 margstatus">{{ etat }}</h3>
            </div>

            <div class="justify-content-center row">
              <div class="col-4 margimg">
                <splide :options="{ rewind: true }" class="r-img1">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img1" />
                  </splide-slide>
                </splide>
              </div>
              
              <div class="col-4 text-end">
                <h3 class="h3 margm2">Name :</h3>
                <h3 class="h3 margm2">Product ID :</h3>
                <h3 class="h3 margm2">Quantity :</h3>
                <h3 class="h3 margm2">price :</h3>
                <h3 class="h3 margm2">shipping cost:</h3>
                <h3 class="h3 margm2">Total Cost :</h3>
              </div>

              <div class="col-4">
                <h3 class="h3">Sneaker</h3>
                <h3 class="h3">#123v3c13</h3>
                <h3 class="h3">1 Item</h3>
                <h3 class="h3">12000 XAF</h3>
                <h3 class="h3">10000 XAF</h3>
                <h3 class="h3">13000 XAF</h3>
              </div>
              
            </div>
            

            <div class="justify-content-center container row">
              <br />
            </div>

            
            <div class="justify-content-center container row">
              
              <div class="">
                <button class="buttonm btn shadow text-center">
                  <h3 class="h3 button-text">Re-order</h3>
                </button>
              </div>
              
            </div>
            <div class="justify-content-center container row">
              <br />
            </div>
          </div>
        </div>

        <div v-if="status == 3" class="cancel">
          <div v-for="i in 4" :key="i">
            <div class="justify-content-start container row">
              <p class="h3">status:</p>
              <h3 class="text-success h3 margstatus">{{ etat }}</h3>
            </div>

            <div class="justify-content-center row">
              <div class="col-4 margimg">
                <splide :options="{ rewind: true }" class="r-img1">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img1" />
                  </splide-slide>
                </splide>
              </div>
              
              <div class="col-4 text-end">
                <h3 class="h3 margm2">Name :</h3>
                <h3 class="h3 margm2">Product ID :</h3>
                <h3 class="h3 margm2">Quantity :</h3>
                <h3 class="h3 margm2">price :</h3>
                <h3 class="h3 margm2">shipping cost:</h3>
                <h3 class="h3 margm2">Total Cost :</h3>
              </div>

              <div class="col-4">
                <h3 class="h3">Sneaker</h3>
                <h3 class="h3">#123v3c13</h3>
                <h3 class="h3">1 Item</h3>
                <h3 class="h3">12000 XAF</h3>
                <h3 class="h3">10000 XAF</h3>
                <h3 class="h3">13000 XAF</h3>
              </div>
              
            </div>
            

            <div class="justify-content-center container row">
              <br />
            </div>

            
            <div class="justify-content-center container row">
              
              <div class="">
                <button class="buttonm btn shadow text-center">
                  <h3 class="h3 button-text">Re-order</h3>
                </button>
              </div>
              
            </div>
            <div class="justify-content-center container row">
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="justify-content-between row"></div>
    <!-- FIN DE LA PARTIE MOBILE -------------------------------------------------------------------------->

    <!-- <div class="container d-flex justify-content-end">clear history</div> -->
    <!--  partie desktop---------------------------------------------------------------------------------------- -->

    <div class="hidedesktop" id="hidedesktop">
      <!-- navigation--------------- -->
      <div class="row cursor justify-content-center">
        <div class="col-4" @click="changeElementType(1)">
          <div class="row">
            <div class="pos1">
              <b-avatar text="1" :variant="success1"></b-avatar>
            </div>
            
            <div class="col-4"><h2 class="h2 pos2">In progress</h2></div>
            <div id="r1" class="progress col bar" style="height: 10px">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                :style="style1"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            
          </div>
        </div>

        <div class="row col-4" @click="changeElementType(2)">
          <div class="row">
            <div class="pos1">
              <b-avatar text="2" :variant="success2"></b-avatar>
            </div>
           
            <div class="col-4"><h2 class="h2 pos">Complete</h2></div>
            <div id="r2" class="progress col gris" style="height: 10px">
              <div
                class="progress-bar bg-success gris"
                role="progressbar"
                :style="style2"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            
          </div>
        </div>

        <div class="row col-4" @click="changeElementType(3)">
          <div class="row">
            <div class="pos1">
              <b-avatar text="3" :variant="success3"></b-avatar>
            </div>
            
            <div class="col-3"><h2 class="h2 pos">Cancel</h2></div>
            <div id="r3" class="progress col gris" style="height: 10px">
              <div
                class="progress-bar bg-success gris"
                role="progressbar"
                :style="style3"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            
          </div>
        </div>
      </div>

      <div class="justify-content-between container row my-4">
        <div class="col order"><h3>My orders</h3></div>
        <div class="status"><h3 class="text-danger">clear history</h3></div>
      </div>
      <hr />
      
      <div>
        <div v-if="status == 1" class="inprogress">
          <div v-for="i in 4" :key="i">
            <div class="justify-content-between row">
              <div class="col-3">
                
                <splide :options="{ rewind: true }" class="r-img">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img" />
                  </splide-slide>
                </splide>
              </div>
              
              <div class="col-2 text-end text-start bold">
                <h3>Name :</h3>
                <h3>Product ID :</h3>
                <h3>Quantity :</h3>
                <h3>price :</h3>
                <h3>shipping cost:</h3>
                <h3>Total Cost :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>Sneaker</h3>
                <h3>#123v3c13</h3>
                <h3>1 Item</h3>
                <h3>12000 XAF</h3>
                <h3>10000 XAF</h3>
                <h3>13000 XAF</h3>
              </div>

              <div class="col" id="hidedesktop1" >
                <h3 class="bold1">status</h3>
                <h3 class="text-success">{{ etat }}</h3>
              </div>

              <div
                class="container d-flex justify-content-end btn-marg"
                
              >
                <button class="button btn shadow">
                  <h3 class="h3 button-text">Re-order</h3>
                </button>
              </div>
              <!-- <div class="col" id="hidedesktop1">
                <h3>status</h3>
                <h3 class="text-success">{{ etat }}</h3>
                <button class="button btn shadow btn-margd">
                  <h3 class="h3 button-text">Re-order</h3>
                </button>
              </div> -->
              

              <div class="justify-content-center container row">
                <br />
              </div>

              
              <div class="justify-content-center container row">
                <br /> 
              </div>
            </div>
          </div>
            
        </div>

        <div v-if="status == 2" class="complete">
          <div v-for="i in 4" :key="i">
            <div class="justify-content-between row">
              <div class="col-3">
                
                <splide :options="{ rewind: true }" class="r-img">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img" />
                  </splide-slide>
                </splide>
              </div>
              
              <div class="col-2 text-end text-start bold">
                <h3>Name :</h3>
                <h3>Product ID :</h3>
                <h3>Quantity :</h3>
                <h3>price :</h3>
                <h3>shipping cost:</h3>
                <h3>Total Cost :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>Sneaker</h3>
                <h3>#123v3c13</h3>
                <h3>1 Item</h3>
                <h3>12000 XAF</h3>
                <h3>10000 XAF</h3>
                <h3>13000 XAF</h3>
              </div>
              <div class="col" id="hidedesktop1" >
                <h3 class="bold1">status</h3>
                <h3 class="text-success">{{ etat }}</h3>
              </div>
              
              <div
                class="container d-flex justify-content-end btn-marg"
                
              >
                <button class="button btn shadow">
                  <h3 class="h3 button-text">Re-order</h3>
                </button>
              </div>

              

              <div class="justify-content-center container row">
                <br />
              </div>

              
              <div class="justify-content-center container row">
                
                <!-- <div class="bg-warning" v-if="!titre">
                  <button class="button btn shadow text-center">
                    <h3 class="h3 button-text">Re-order</h3>
                  </button>
                </div> -->
                
              </div>
              <div class="justify-content-center container row">
                <br />
              </div>
            </div>
          </div>
        </div>
        <div v-if="status == 3" class="cancel">
          <div v-for="i in 4" :key="i">
            <div class="justify-content-between row">
              <div class="col-3">
                
                <splide :options="{ rewind: true }" class="r-img">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img" />
                  </splide-slide>
                </splide>
              </div>
             
              <div class="col-2 text-end text-start bold">
                <h3>Name :</h3>
                <h3>Product ID :</h3>
                <h3>Quantity :</h3>
                <h3>price :</h3>
                <h3>shipping cost:</h3>
                <h3>Total Cost :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>Sneaker</h3>
                <h3>#123v3c13</h3>
                <h3>1 Item</h3>
                <h3>12000 XAF</h3>
                <h3>10000 XAF</h3>
                <h3>13000 XAF</h3>
              </div>
              <div class="col" id="hidedesktop1" >
                <h3 class="bold1">status</h3>
                <h3 class="text-success">{{ etat }}</h3>
              </div>
              
              <div
                class="container d-flex justify-content-end btn-marg"
                
              >
                <button class="button btn shadow">
                  <h3 class="h3 button-text">Re-order</h3>
                </button>
              </div>

              

              <div class="justify-content-center container row">
                <br />
              </div>

              
              <div class="justify-content-center container row">
                
                <!-- <div class="bg-warning" v-if="!titre">
                  <button class="button btn shadow text-center">
                    <h3 class="h3 button-text">Re-order</h3>
                  </button>
                </div> -->
               
              </div>
              <div class="justify-content-center container row">
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";

export default {
  components: { navbar },
  data() {
    return {
      rimg: "",
      style1: "width: 100%;",
      style2: "",
      style3: "",
      success1: "success",
      success2: "secondary",
      success3: "secondary",
      titre: false,
      status: 1,
      etat: "pending",

      img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
    };
  },

  methods: {
    changeElementType(p) {
      console.log(window.screen);
      console.log("------------------" + p);
      this.status = p;

      if (p == 1) {
        this.style1 = "width: 100%;";
        this.style2 = "";
        this.style3 = "";
        this.success1 = "success";
        this.success2 = "secondary";
        this.success3 = "secondary";
        this.etat = "pending";
      } else if (p == 2) {
        this.style1 = "";
        this.style2 = "width: 100%;";
        this.style3 = "";
        this.success1 = "secondary";
        this.success2 = "success";
        this.success3 = "secondary";
        this.etat = "complete";
      } else if (p == 3) {
        this.style1 = "";
        this.style2 = "";
        this.style3 = "width: 100%;";
        this.success1 = "secondary";
        this.success2 = "secondary";
        this.success3 = "success";

        this.etat = "Canceled";
      }

      //transition partie mobile
      if (
        window.screen.width > 240 &&
        window.screen.width < 500 &&
        window.screen.height > 320 &&
        window.screen.height < 900
      ) {
        const el = document.getElementById("m" + p);
        const els = document.querySelectorAll(".t");
        els.forEach((dat) => {
          dat.classList.remove("green");
        });
        el.classList.add("green");
      } else {
        //transition partie desktop
        const el1 = document.getElementById("c" + p);
        const el2 = document.getElementById("l" + p);
        const cercles = document.querySelectorAll(".cercle");
        const lignes = document.querySelectorAll(".line");
        const r = document.getElementById("r" + p);
        const rs = document.querySelectorAll(".progress");

        rs.forEach((dat) => {
          dat.classList.remove("bar");
          dat.classList.add("gris");
        });
        r.classList.remove("gris");
        r.classList.add("bar");

        cercles.forEach((dat) => {
          dat.classList.remove("cercle-actif");
        });
        lignes.forEach((dat) => {
          dat.classList.remove("line-actif");
        });
        el1.classList.add("cercle-actif");
        el2.classList.add("line-actif");
      }
    },
  },

  mounted() {
    if (
      window.screen.width > 240 &&
      window.screen.width < 500 &&
      window.screen.height > 320 &&
      window.screen.height < 900
    ) {
      console.log("---  test");
      this.rimg = "r-img1";
      let node = document.getElementById("hidedesktop");
      let node2 = document.getElementById("hidedesktop1");
      console.log(node2);
      node.remove();
      node2.remove();

      let h1 = document.querySelectorAll(".h1");
      let h2 = document.querySelectorAll(".h2");
      let h3 = document.querySelectorAll(".h3");
      h1.forEach((dat) => {
        dat.classList.add("h11");
      });

      h2.forEach((dat) => {
        dat.classList.add("h22");
      });

      h3.forEach((dat) => {
        dat.classList.add("h33");
      });
    } else {
      this.titre = true;
      this.rimg = "r-img";
      var node1 = document.getElementById("hidemobile");
      node1.remove();
    }
  },
};
</script>

<style scoped>
/* style for desktop------------------------- */
.margd1 {
  margin-left: 50px;
}
.margd2 {
  margin-right: 50px;
}
.btn-marg {
  margin-top: -30px;
}
.r-img {
  border-radius: 5px;
  height: 150px;
  width: 250px;
}
.button-text {
  color: white;
}
.button {
  width: 120px;
  height: 30px;
  background-color: #e75c18;
}
.btn-margd {
  margin-top: 60px;
}
h1 {
  font-size: 20px;
  font-weight: bold;
}
h2 {
  font-size: 16px;
  /* font-weight: bold; */
}

h3 {
  font-size: 14px;
  /* font-weight: bold; */
}
.bold h3{
  font-weight: bold !important;
}

/* end style for desktop ----------------------------- */

/*  start style mobile------------------------- */
.r-img1 {
  border-radius: 4px;
  height: 110px;
  width: 125px;
}
.margm {
  margin-left: 30px;
  margin-right: 10px;
}
.margm1 {
  margin-right: 80px;
}
.margm2 {
  margin-left: 11px;
  margin-right: -20px;
  font-weight: bold;
}
.margimg {
  margin-left: -15px;
}
.margstatus {
  margin-left: 10px;
}
.button-text {
  color: white;
}
.buttonm {
  width: 150px;
  height: 25px;
  background-color: #e75c18;
}
.h3 {
  font-size: 12px;
  
}

/*  end style mobile------------------------- */
.cercle1 {
  margin-top: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: white;
  color: black;
  margin-left: -20px;
  text-align: center;
  line-height: 23px;
}
.cercle2 {
  margin-top: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: white;
  color: black;
  margin-right: -20px;
  text-align: center;
  line-height: 23px;
}
.bar {
  background-color: #28a745;
  width: 200px;
  margin-right: -5px;
  margin-left: 17px;
}

.margt {
  margin-left: -40px;
}
.pos {
  margin-top: 25px;
  margin-left: 47px;
  color: black;
}
.pos1 {
  margin-top: 27px;
  margin-left: -15px;
  margin-right: 15px;
}
.pos2 {
  margin-top: 35px;
  margin-left: -20px;
}
.gris {
  background-color: #6c757d;
}
.gris1 {
  background-color: #c5c5c5;
}

.mobile {
  width: 200px;
  height: 50px;
  color: white;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 52%, 75% 100%, 0% 100%, 0 52%, 0% 0%);
}
.mobile1 {
  width: 200px;
  height: 50px;
  margin-left: -22px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 52%, 75% 100%, 0% 100%, 11% 51%, 0% 0%);
}
.mobile2 {
  width: 200px;
  height: 50px;
  margin-left: -20px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 75% 47%, 75% 100%, 0% 100%, 11% 51%, 0% 0%);
}
.green {
  background-color: #28a745;
}
.text-position {
  line-height: 25px;
  margin-top: -22px;
  font-size: 14px;
  margin-left: 5px;
}
/* .button-text{
    color:white;
}
.button{
  width: 146px;
  height: 30px;
  background-color:#e75c18 ;
  
} */
.marg {
  margin-right: -150px;
  margin-top: 25px;
}
.marg4 {
  margin-right: -50px;
  margin-top: 25px;
}
.marg3 {
  margin-right: -40px;
}
.line {
  border-bottom: solid 10px;
  border-color: rgb(128, 118, 110);
  width: 160px;

  /* border-radius: 8%; */
  line-height: 50px;
  margin-right: 50px;
  margin-left: -30px;
  margin-bottom: 20px;
}
.progress {
  width: 160px;

  /* border-radius: 8%; */
  line-height: 50px;
  margin-right: 50px;
  margin-left: -30px;
  margin-top: 40px;
}
.line-actif {
  border-color: #28a745;
  color: #28a745;
}

.cercle {
  /* border:  5px rgb(128, 118, 110); */
  border-radius: 100%;
  width: 50px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 55px;
  color: white;
  background-color: #6c757d;
  margin-top: 20px;
}
.cercle-actif {
  border-color: #28a745;
  color: white;
  background-color: #28a745;
}
.cursor {
  cursor: pointer;
}
.etat {
  /* margin-right: 13px; */
  margin-left: -50px;
}

.Re-order {
  width: 123px;
  height: 38px;
}
/* style du desktop --------------------------- */

.total {
  margin-left: 50px;
}
.size {
  font-size: 16px;
}
/* styledu mobile---------------------------- */
.h11 {
  font-size: 16px;
}
.h22 {
  font-size: 14px;
}

.bold1{
  font-weight: bold;
}
/* .hidedesktop{
    visibility: hidden;
  } */
</style>