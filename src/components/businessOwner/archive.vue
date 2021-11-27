<template>
  <div class="container">
    <FlashMessage />
    <hr />
    <!-- partie mobile--------------------------------------------------------------------- 
    
    ----------------------DEBUT -----------------------------------------------------
    -->
    <div id="hidemobile">
      <hr />

      <div>
        <div >
          <div v-for="i in etat1" :key="i">
            <div class="justify-content-start container row marghr">
              <div class="justify-content-start container">
                <div class="container d-flex justify-content-end btn-marg">
                  <div class="manage">
                    <b-dropdown
                      variant="ligth"
                      id="dropdown-1"
                      text="Manage"
                      class="m-md-2"
                    >
                      <b-dropdown-item @click="updateStatus(9,'archive')">{{ $t('businessowner.Archive') }}</b-dropdown-item>
                      <b-dropdown-item @click="updateStatus(9,'cancel')">{{ $t('businessowner.Delete') }}</b-dropdown-item>
                      <b-dropdown-item @click="updateStatus(9,'re-shedule')">{{ $t('businessowner.Reshedule') }}</b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
                <span class="gras">{{ $t('businessowner.Order') }}</span>
                <span class="text-success order">#12324253</span> <br />
                <span class="flou">yaoundé 12/12/2021 12H00</span>
              </div>

             <span class="row posstatus">
                <p class="h3 statusp">{{ $t('businessowner.status') }}:</p>
              <h3 class="text-success h3 margstatus ">{{ i }}</h3>
             </span>
            </div>
            <hr />

            <div class="justify-content-center row">
              <div class="col-4 margimg">
                <splide :options="{ rewind: true }" class="r-img1">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img1" />
                  </splide-slide>
                </splide>
              </div>

              <div class="col-4 text-end">
                <h3 class="h3 margm2">{{ $t('businessowner.Product_Qte') }} :</h3>
                <h3 class="h3 margm2">{{ $t('businessowner.Price') }}:</h3>

                <h3 class="h3 margm2">{{ $t('businessowner.shipping_cost') }}:</h3>
                <h3 class="h3 margm2">{{ $t('businessowner.Total') }} :</h3>
              </div>

              <div class="col-4">
                <h3 class="h3">4</h3>

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
                <button  @click="updateStatus(9,'shipped')" class="buttonm btn shadow text-center">
                  <h3 class="h3 button-text">{{ $t('businessowner.shipped') }}</h3>
                </button>
              </div>
            </div>
            <div class="justify-content-center container row">
              <br />
              <br />
            </div>
            <!-- <hr /> -->
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

      <div class="justify-content-between container row my-4">
        <div class="col order"><h3 class="bold1">{{ $t('businessowner.My_orders') }}</h3></div>
        <div class="status"><h3 class="text-danger">{{ $t('businessowner.clear_history') }}</h3></div>
      </div>

      <div>
        <div >
          <div v-for="i in etat1" :key="i">
            <div class="justify-content-start container">
              <div class="container d-flex justify-content-end btn-marg">
                <div class="manage">
                  <b-dropdown
                    variant="ligth"
                    id="dropdown-1"
                    text="Manage"
                    class="m-md-2"
                  >
                    <b-dropdown-item @click="updateStatus(9,'archive')">{{ $t('businessowner.Archive') }}</b-dropdown-item>
                    <b-dropdown-item @click="updateStatus(9,'cancel')">{{ $t('businessowner.Delete') }}</b-dropdown-item>
                    <b-dropdown-item @click="updateStatus(9,'re-shedule')">{{ $t('businessowner.Reshedule') }}</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <router-link to="/business_owner/ordersdetail">
              <span class="gras">{{ $t('businessowner.Order') }}</span>
              <span class="text-success">#12324253</span> <br />
              </router-link>
              <span class="flou">yaoundé 12/12/2021 12H00</span>
              <hr />
            </div>

            <div class="justify-content-between row">
              <div class="col-3">
                <splide :options="{ rewind: true }" class="r-img">
                  <splide-slide cl v-for="(im, index) in img" :key="index">
                    <img :src="img[index]" class="r-img" />
                  </splide-slide>
                </splide>
              </div>

              <div class="col-2 text-end text-start bold">
                <h3>{{ $t('businessowner.Product_Qte') }} :</h3>
                <h3>{{ $t('businessowner.Price') }} :</h3>

                <h3>{{ $t('businessowner.shipping_cost') }}:</h3>
                <h3>{{ $t('businessowner.Total') }} :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>4</h3>
                <h3>2000 Fcfa</h3>
                <h3>4000 Fcfa</h3>
                <h3>6000 XAF</h3>
              </div>

              <div class="col" id="hidedesktop1">
                <h3 class="bold1">{{ $t('businessowner.status') }}</h3>
                <h3 class="text-success">{{ i }}</h3>
              </div>

              <div class="container d-flex justify-content-end btn-marg">
                <button @click="updateStatus(9,'shipped')" class="button btn shadow">
                  <h3 class="h3 button-text">{{ $t('businessowner.Shipped') }}</h3>
                </button>
              </div>

              <div class="justify-content-center container row">
                <br />
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


export default {
 
  data() {
    return {
      url: null,
      selected: "",
      rimg: "",
      status: 1,
      etat: "All",
      img: ["http://urlr.me/YMQXD", "https://placekitten.com/400/300"],
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "last 5 days" },
        { value: "b", text: "last 10 days" },
      ],
      etat1: ["in process", "complete", "cancel"],
    };
  },

  mounted() {
   this.url = this.$route.params.id;
  },

  methods: {
    changeElementType(p) {
      console.log("------------------" + p);
      this.status = p;

      if (p == 1) {
        this.etat = "All";
      } else if (p == 2) {
        this.etat = "In process";
      } else if (p == 3) {
        this.etat = "Re-shedule";
      } else if (p == 4) {
        this.etat = "Shipped";
      }
      //transition partie desktop
      const a = document.getElementById("a" + p);
      const pr = document.getElementById("p" + p);

      const as = document.querySelectorAll(".avatar");
      as.forEach((dat) => {
        dat.classList.remove("bg-success");
      });
      a.classList.add("bg-success");

      const ps = document.querySelectorAll(".progress");
      ps.forEach((dat) => {
        dat.classList.remove("bg-success");
      });
      pr.classList.add("bg-success");

      //transition partie mobile

      const el = document.getElementById("m" + p);
      const els = document.querySelectorAll(".t");
      els.forEach((dat) => {
        dat.classList.remove("green");
      });
      el.classList.add("green");
    },

    updateStatus(order_id, status) {
      console.log("updateStatus")
      console.log("order_id", order_id)
      console.log("business_id", this.url)
      console.log("status", status)
      let formData = new FormData();
      formData.append("order_id", order_id)
      formData.append("business_id", this.url)
      formData.append("status", status)
      this.$store
        .dispatch("orderBusiness/updateOrderStatus", 
        {
          path: "order/updateOrder",
          formData: formData
        })
        .then(({data}) => {
          console.log('ohh year');
          console.log(data);
          this.flashMessage.show({
            status: "success",
            message: "Status Changed To "+status
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable to Change Status"
          });
        });
    },
  },


};
</script>

<style scoped>
/* style for desktop------------------------- */
.flou {
  color: #b6b2b2;
}
.show {
    margin-left: 2px;
  margin-bottom: 70px;
   width: 370px;

}
.manage {
  margin-bottom: -60px;
  height: 50px;
  width: 90px;
}
.avatar {
  margin-top: 23px;
  margin-right: 10px;
}
.text {
  margin-right: 50px;
  margin-top: 35px;
}
.prog {
  height: 10px;
  margin-left: 20px;
  margin-right: 10px !important;
  width: 130px !important;
}
.parent {
  margin-left: 10px;
}
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
.bold h3 {
  font-weight: bold !important;
}
.gras {
  font-weight: bold;
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
.margclear {
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: -20px;
}
.margclear1 {
  margin-top: 30px;
  margin-bottom: -20px;
}
.posstatus{
  margin-left: 195px;
  margin-top: -18px;
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
  /* margin-right: -20px; */
  margin-left: 3px;
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
  width: 195px;
  height: 50px;
  color: white;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 0 52%, 0% 0%);
}
.mobile1 {
  width: 200px;
  height: 50px;
  margin-left: -21px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
}
.mobile2 {
  width: 201px;
  height: 50px;
  margin-left: -20px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 75% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
}
.mobile3 {
  width: 200px;
  height: 50px;
  margin-left: -20px;
  color: white;
  z-index: 20px;
  background-color: #bfbfbf;
  clip-path: polygon(75% 0%, 88% 50%, 75% 100%, 0% 100%, 11% 50%, 0% 0%);
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

.bold1 {
  font-weight: bold;
}
/* .hidedesktop{
    visibility: hidden;
  } */
@media only screen and (max-width: 1200px) {
  .bold h3 {
    font-weight: normal !important;
  }
  .cercle2 {
    margin-left: 50px !important;
    width: 18px ;
    height: 18px;
     line-height: 20px;
  }
.cercle1{
   width: 18px ;
    height: 18px;
}

  #hidedesktop {
    display: none;
  }
}
@media only screen and (max-width: 360px) {
  .margclear {
    font-size: 12px;
  }
}
@media only screen and (max-width: 768px) {
  .bold h3 {
    font-weight: normal !important;
  }
  .cercle2 {
    margin-left: 3px !important;
     width: 17px;
       height: 17px;
  }
  .gras {
    font-size: 12px !important;
  }
  .flou {
    font-size: 12px !important;
  }
  .order {
    font-size: 12px !important;
  }
  .statusp {
    margin-left: 16px;
  }
  .marghr {
    margin-bottom: -20px;
  }
  .manage{
    margin-top: -6px !important;
    margin-right: -12px !important;
  }
}
  @media only screen and (max-width: 470px) {
    .h2 {
      font-size: 10px !important;
      margin-left: 5px;
    }
    .cercle2 {
      margin-left: -4px !important;
    }
  
   .manage{
    margin-top: -6px !important;
    margin-right: -12px !important;
  }
  #hidedesktop {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  #hidemobile {
    display: none !important;
  }
}
</style>