<template >
  <div>
    <navbar />
    <div class="content body">
      <h1 class="h1">Order Details</h1>

      <div class="card my-2 p-0">
        <div class="card-body row">
          <div class="col">
            <span class="marge row">
              <span class="bold m"><h3>Order</h3></span>
              <span class="text-success order m"><h3>#12324253</h3></span>
            </span>
            <span class="flou marge1"><h3 class="marge1">yaoundé, 12/12/2021,12:00</h3></span>
          </div>
          <div class="col p-0">
            <span class="bold"> <h3 class="margtotal">Total : 199500 Fcfa</h3> </span>
          </div>
        </div>
      </div>

      <div class="card my-1 p-0">
        <div class="card-body row">
          <div class="col">
            <span class="mr-2 row"
              ><fas-icon class="couleur search card" :icon="['fas', 'cart-arrow-down']" /> Card</span
            >
            <span class="row">
              <span class="col"> <h3>sold by: marcellin , danaz</h3></span>

              <div>
                <button v-b-modal="'my-modal'" variant="ligth" class="border mx-4 button">
                  <span class="mr-3 row"
                    ><fas-icon class="couleur1 search margbtn" :icon="['fas', 'envelope']" />
                    <h3 class="couleur1 ecart">chat now</h3>
                  </span>
                </button>
                <b-modal id="my-modal">
                  <div class="container">
                    <span class="mr-3 row" @click="cta({ id: 2, name: 'Marcellin Handel' })"
                      ><fas-icon class="couleur search" :icon="['fas', 'envelope']" />
                      <h3>chat with Marcellin</h3>
                    </span>
                    <span class="mr-3 row" @click="cta({ id: 2, name: 'Bethoven hamza' })"
                      ><fas-icon class="couleur search" :icon="['fas', 'envelope']" />
                      <h3>chat with danaz</h3>
                    </span>
                  </div>
                </b-modal>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div class="card my-1 cardborder">
        <div class="card-body">
          <div class="row container rowmobile">
            <b-avatar id="a1" class="avatar" text=" "></b-avatar>
            <b-progress id="p1" :value="value" :max="max" variant="success" class="mb-3 size"> </b-progress>

            <b-avatar id="a2" class="avatar" text=" "></b-avatar>
            <b-progress id="p2" :value="value" :max="max" variant="success" class="mb-3 size"></b-progress>

            <b-avatar id="a3" class="avatar" text=" "></b-avatar>
            <b-progress id="p3" :value="value" :max="max" variant="success " class="mb-3 size"></b-progress>

            <b-avatar id="a4" class="avatar" text=" "></b-avatar>
            <b-progress id="p4" :value="value" :max="max" variant="success" class="mb-3 size"></b-progress>
          </div>
          <div class="row sizestate">
            <div class="col-3"><h3>payment made</h3></div>
            <div class="col-2 text-start p-0"><h3>processing</h3></div>
            <div class="col-2 text-start"><h3>complete</h3></div>
            <div class="col-2 text-center"><h3>receive</h3></div>
          </div>

          <div class="justify-content-between row my-5" v-for="i in 2" :key="i">
            <div class="col-3 margimg">
              <splide :options="{ rewind: true }" class="r-img">
                <splide-slide cl v-for="(im, index) in img" :key="index">
                  <img :src="img[index]" class="r-img" />
                </splide-slide>
              </splide>
            </div>
            <div class="ligne"><br /></div>

            <div class="col-3 text-end bold margtext">
              <h3 class="h3 margm2">Name:</h3>
              <h3 class="h3 margm2">product ID :</h3>

              <h3 class="h3 margm2">Quantity:</h3>
              <h3 class="h3 margm2">price :</h3>
              <h3 class="h3 margm2">shipping cost:</h3>
              <h3 class="h3 margm2">total cost :</h3>
            </div>

            <div class="col-3 text-start margtext">
              <h3>sneaker</h3>
              <h3>#125FF55</h3>
              <h3>4</h3>
              <h3>2000 Fcfa</h3>
              <h3>1000 Fcfa</h3>
              <h3>9000 Fcfa</h3>
            </div>

            <div class="col margtext">
              <h3 class="bold1">status</h3>
              <h3 class="text-success">pending</h3>
            </div>

            <div class="col margtext">
              <h3 class="text-success">WRITE A REVIEW</h3>
            </div>

            <!-- <div class="justify-content-center container row">
              <br />
            </div>

            <div class="justify-content-center container row">
              <br />
            </div> -->
          </div>
        </div>
      </div>

      <div class="row my-1">
        <div class="col-6">
          <div class="card shipad">
            <div class="card-body row">
              <span>shipping Adress</span>
              <br /><br /><br />
            </div>
          </div>
        </div>
        <div class="ligne"></div>

        <div class="col-6">
          <div class="card shipad my-1">
            <div class="card-body">
              <div class="col bold">
                <span class="row">
                  <span class="col"><h3>Total summary :</h3></span>
                  <span class="col">10000 Fcfa</span></span
                >
                <span class="row">
                  <span class="col"><h3>Total price :</h3></span>
                  <span class="col">15000 Fcfa</span></span
                >
                <span class="row">
                  <span class="col"><h3>total shipping fee :</h3></span><span class="col"> 1600 Fcfa</span></span
                >
              </div>
              <div class="row"><hr class="hr" /></div>

              <div class="row bold">
                <span class="col"><h3>Total :</h3></span>
                <span class="col"> 20000 Fcfa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
export default {
  components: { navbar },
  data() {
    return {
      value: 0,
      max: 50,
      img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300'],
      status: 2,
    };
  },
  computed: {
    activeAccount() {
      return this.$store.getters['auth/profilConnected'];
    },
  },

  mounted() {
    const progress = document.querySelectorAll('.size');
    for (let i = 1; i <= progress.length; i++) {
      let a = document.getElementById('a' + i);
      let p = document.getElementById('p' + i);
      if (i <= this.status) {
        p.classList.add('bg-success');
        a.classList.add('bg-success');
      } else {
        p.classList.add('bg-secondary');
        a.classList.add('bg-secondary');
      }
    }
  },
  methods: {
    cta(data) {
      console.log(data);
      this.$store.commit('businessChat/setSelectedChat', data);
      let path = '';
      let msgTab = null;
      if (this.activeAccount.user_type == 'business') {
        msgTab = 1;
        path = '/business_owner/' + this.activeAccount.id;
      } else if (this.activeAccount.user_type == 'network') {
        msgTab = 2;
        path = '/network/' + this.activeAccount.id;
      } else {
        msgTab = 0;
        path = '/messaging';
      }

      this.$router.push({ path: `${path}`, query: { tabId: 1, msgTabId: msgTab } });
      //   this.$router.push({ path: `/business_owner/${this.activeAccount.id}`, query: { tabId: 1, msgTabId: 0 } });
    },
  },
};
</script>

<style scoped>
.ecart {
  margin-left: 2px;
}

.hr {
  height: 0.1px;
  width: 500px;
  background-color: rgb(243, 232, 232);
}
.border {
  background-color: #e75c18;
}
.couleur {
  color: #e75c18;
}
.card {
  margin-left: 10px;
}

.couleur1 {
  color: white;
}

/* style de la navigation  */

.made {
  margin-top: 10px;
}

/* style de l'affichage des produits */

/* style pour le desktop (-------------------) */
@media only screen and (min-width: 988px) {
  .body {
    background-color: rgba(213, 214, 214, 0.473);
  }

  .content {
    width: 80%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }
  .rowmobile {
    margin-left: 50px;
  }
  .avatar {
    width: 15px;
    height: 15px;
  }
  .progress {
    width: 200px;
  }

  .marge {
    margin-right: 380px;
  }
  .marge1 {
    margin-right: 300px;
  }
  .size {
    height: 5px;
    margin-top: 5px;
    margin-left: -3px;
    margin-right: -3px;
    width: 190px !important;
  }
  .margtotal {
    margin-left: 350px;
  }
  .margbtn {
    margin-left: 22px;
  }
  .button {
    text-align: center;
    width: 120px;
    height: 50px;
    border-radius: 5px;
    padding: 15px;
  }
  .couleur1 {
    font-size: 12px;
  }
  .r-img {
    border-radius: 5px;
    height: 150px;
    width: 250px;
  }
  .bold h3 {
    font-weight: bold !important;
  }
  .bold1 {
    font-weight: bold;
  }
  h3 {
    font-size: 14px;
    /* font-weight: bold; */
  }
  /* 
.margm2 {
  margin-left: 70px;
  margin-right: -20px;
  font-weight: bold;
} */

  .m {
    margin-left: 10px;
  }
}

/* style de l'afichage mobile */

@media only screen and (max-width: 987px) {
  /* .marge {
  margin-right: 380px;
}*/
  .cardborder {
    border: none;
  }

  .bold h3 {
    font-weight: bold !important;
  }

  .margtext .text-success {
    font-size: 10px !important;
  }
  .margtext h3 {
    margin-left: -16px;
    margin-right: -20px;
  }
  .margtext .text-success {
    font-size: 9px !important;
  }
  .avatar {
    width: 8px;
    height: 8px;
  }
  .marge1 {
    /* margin-right: 300px; */
    font-size: 10px !important;
    margin-left: -15px;
  }
  .m {
    /* margin-left: 10px; */
  }
  .ligne {
    width: 100%;
  }
  .progress {
    width: 200px;
  }
  .size {
    height: 3px;
    margin-top: 3px;
    margin-left: -3px;
    margin-right: -3px;
    width: 67px;
  }

  h3 {
    font-size: 12px;
    /* font-weight: bold; */
  }
  .margimg {
    margin-left: -15px;
  }

  .couleur1 {
    font-size: 10px;
  }
  .button {
    text-align: center;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    padding-left: 22px;
    padding-top: 10px;
  }
  .margbtn {
    margin-left: 13px;
  }
  /* .margm2 {
  margin-left: 11px;
  margin-right: -20px;
  font-weight: bold;
} */
  .r-img {
    border-radius: 4px;
    height: 150px;
    width: 340px;
  }

  .margtotal {
    margin-left: 20px;
  }
  .rowmobile {
    margin-left: -0.1px !important;
  }

  .sizestate h3 {
    font-size: 8px;
    margin-left: -18px;
    margin-top: -10px;
  }
  .sizestate {
    margin-left: 20px;
  }

  .shipad {
    width: 325px !important;
  }
  h1 {
    font-size: 16px;
  }
}

@media only screen and (min-width: 360px) {
  .size {
    height: 3px;
    /* margin-top: 3px;
  margin-left: -3px;
  margin-right: -3px; */
    width: 65px;
  }
}
</style>