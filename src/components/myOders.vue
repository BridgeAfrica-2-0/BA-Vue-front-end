<template>
  <div class="container">
    <navbar />
    <hr />
    <!-- partie mobile--------------------------------------------------------------------- 
    
    ----------------------DEBUT -----------------------------------------------------
    -->
    <div id="hidemobile">
      <div class="justify-content-between d-flex row cd B" style="margin-left: 8px">
        <div id="m1" class="mobile green t col transition pl-4" @click="changeElementType(1)">
          <div class="cercle1">1</div>
          <h2 class="h2 text-position">All</h2>
        </div>

        <div id="m2" class="mobile1 col t start-50" @click="changeElementType(2)">
          <div class="cercle2">2</div>

          <h2 class="h2 text-position text-center">In progress</h2>
        </div>

        <div id="m3" class="mobile3 col t start-50" @click="changeElementType(3)">
          <div class="cercle2">3</div>

          <h2 class="h2 text-position text-center">Complete</h2>
        </div>
        <div id="m4" class="mobile2 col t" @click="changeElementType(4)">
          <div class="cercle2">4</div>
          <h2 class="h2 text-position text-center">Cancel</h2>
        </div>
      </div>

      <!-- <div class="justify-content-between  row my-4">
           <h3 class="margclear1 bold1 bg-danger">My orders</h3>
            <h3 class="text-danger text-center margclear bg-warning">clear history</h3>
            </div> -->
      <div class="justify-content-between row my-4">
        <div class="col order"><h3 class="margclear1 bold1">My orders</h3></div>
        <div class="col">
          <h3 class="text-danger text-center margclear">clear history</h3>
        </div>
        <!-- <div class="status" v-if="titre">
          <h5 class="text-danger">clear history</h5>
        </div> -->
      </div>
      <hr />

      <div>
        <div v-if="status == 1" class="inprogress">
          <div class="show row">
            <div class="col-3">Show:</div>
            <div class="col">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </div>
          <div v-for="i in etat1" :key="i">
            <!-- <div class="justify-content-start  row marghr"> -->
            <!-- <div class="justify-content-start container"> -->

            <div class="row">
              <div class="col">
                <span class="gras"
                  >Order <span class="text-success order">#12324253</span>
                  <br />
                  <span class="flou row" style="margin-left: 1px">yaoundé 12/12/2021 12H00</span>
                </span>
              </div>

              <div class="col">
                <div class="row drop">
                  <b-dropdown variant="ligth" id="dropdown-1" text="Manage" class="m-md-2 noborder">
                    <b-dropdown-item>archive</b-dropdown-item>
                    <b-dropdown-item>delete</b-dropdown-item>
                  </b-dropdown>
                </div>

                <div class="row" style="margin-left: 73px; margin-top: 5px">
                  <p class="h3">status:</p>
                  <h3 class="text-success h3">{{ i }}</h3>
                </div>
              </div>
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
                <h3 class="h3 margm2">Product Qte :</h3>
                <h3 class="h3 margm2">Price:</h3>

                <h3 class="h3 margm2">shipping cost:</h3>
                <h3 class="h3 margm2">Total :</h3>
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
                <button class="buttonm btn shadow text-center">
                  <h3 class="h3 button-text">Re-order</h3>
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

        <div v-if="status == 2" class="inprogress">
          <div class="show row">
            <div class="col-3">Show:</div>
            <div class="col">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </div>
          <div v-for="i in etat1" :key="i">
            <div class="row">
              <div class="col">
                <span class="gras"
                  >Order <span class="text-success order">#12324253</span>
                  <br />
                  <span class="flou row" style="margin-left: 1px">yaoundé 12/12/2021 12H00</span>
                </span>
              </div>

              <div class="col">
                <div class="row drop">
                  <b-dropdown variant="ligth" id="dropdown-1" text="Manage" class="m-md-2">
                    <b-dropdown-item>archive</b-dropdown-item>
                    <b-dropdown-item>delete</b-dropdown-item>
                  </b-dropdown>
                </div>

                <div class="row" style="margin-left: 73px; margin-top: 5px">
                  <p class="h3">status:</p>
                  <h3 class="text-success h3">{{ etat }}</h3>
                </div>
              </div>
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
                <h3 class="h3 margm2">Product Qte :</h3>
                <h3 class="h3 margm2">Price:</h3>

                <h3 class="h3 margm2">shipping cost:</h3>
                <h3 class="h3 margm2">Total :</h3>
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
                <button class="buttonm btn shadow text-center">
                  <h3 class="h3 button-text">Re-order</h3>
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

        <div v-if="status == 3" class="complete">
          <div class="show row">
            <div class="col-3">Show:</div>
            <div class="col">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </div>
          <div v-for="i in etat1" :key="i">
            <div class="row">
              <div class="col">
                <span class="gras"
                  >Order <span class="text-success order">#12324253</span>
                  <br />
                  <span class="flou row" style="margin-left: 1px">yaoundé 12/12/2021 12H00</span>
                </span>
              </div>

              <div class="col">
                <div class="row drop">
                  <b-dropdown variant="ligth" id="dropdown-1" text="Manage" class="m-md-2">
                    <b-dropdown-item>archive</b-dropdown-item>
                    <b-dropdown-item>delete</b-dropdown-item>
                  </b-dropdown>
                </div>

                <div class="row" style="margin-left: 73px; margin-top: 5px">
                  <p class="h3">status:</p>
                  <h3 class="text-success h3">{{ etat }}</h3>
                </div>
              </div>
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
                <h3 class="h3 margm2">Product Qte :</h3>
                <h3 class="h3 margm2">Price:</h3>

                <h3 class="h3 margm2">shipping cost:</h3>
                <h3 class="h3 margm2">Total :</h3>
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
                <button class="buttonm btn shadow text-center">
                  <h3 class="h3 button-text">Re-order</h3>
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

        <div v-if="status == 4" class="cancel">
          <div class="show row">
            <div class="col-3">Show:</div>
            <div class="col">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </div>
          <div v-for="i in etat1" :key="i">
            <div class="row">
              <div class="col">
                <span class="gras"
                  >Order <span class="text-success order">#12324253</span>
                  <br />
                  <span class="flou row" style="margin-left: 1px">yaoundé 12/12/2021 12H00</span>
                </span>
              </div>

              <div class="col">
                <div class="row drop">
                  <b-dropdown variant="ligth" id="dropdown-1" text="Manage" class="m-md-2">
                    <b-dropdown-item>archive</b-dropdown-item>
                    <b-dropdown-item>delete</b-dropdown-item>
                  </b-dropdown>
                </div>

                <div class="row" style="margin-left: 73px; margin-top: 5px">
                  <p class="h3">status:</p>
                  <h3 class="text-success h3">{{ etat }}</h3>
                </div>
              </div>
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
                <h3 class="h3 margm2">Product Qte :</h3>
                <h3 class="h3 margm2">Price:</h3>

                <h3 class="h3 margm2">shipping cost:</h3>
                <h3 class="h3 margm2">Total :</h3>
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
                <button class="buttonm btn shadow text-center">
                  <h3 class="h3 button-text">Re-order</h3>
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
      <div class="row parent">
        <b-avatar id="a1" class="avatar bg-success" text="1"></b-avatar>
        <h2 class="text cursor" @click="changeElementType(1)">All</h2>
        <div id="p1" class="progress prog cursor gris bg-success" @click="changeElementType(1)">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <b-avatar id="a2" class="avatar" text="2"></b-avatar>
        <h2 class="text cursor" @click="changeElementType(2)">In Progress</h2>
        <div id="p2" class="progress prog cursor gris" @click="changeElementType(2)">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <b-avatar id="a3" class="avatar" text="3"></b-avatar>
        <h2 class="text cursor" @click="changeElementType(3)">Complete</h2>
        <div id="p3" class="progress prog cursor gris" @click="changeElementType(3)">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <b-avatar id="a4" class="avatar" text="4"></b-avatar>
        <h2 class="text cursor" @click="changeElementType(4)">Cancel</h2>
        <div id="p4" class="progress prog cursor gris" @click="changeElementType(4)">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div class="justify-content-between container row my-4">
        <div class="col order"><h3 class="bold1">My orders</h3></div>
        <div class="status"><h3 class="text-danger">clear history</h3></div>
      </div>

      <div>
        <div v-if="status == 1" class="inprogress">
          <div class="show row">
            <div class="col-3">Show:</div>
            <div class="col">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </div>
          <div v-for="i in etat1" :key="i">
            <div class="justify-content-start container">
              <div class="container d-flex justify-content-end btn-marg">
                <div class="manage">
                  <b-dropdown variant="ligth" id="dropdown-1" text="Manage" class="m-md-2">
                    <b-dropdown-item>Archive</b-dropdown-item>
                    <b-dropdown-item>Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <router-link to="detail">
                <span class="gras">Order</span>
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
                <h3>Product Qte :</h3>
                <h3>Price :</h3>

                <h3>shipping cost:</h3>
                <h3>Total :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>4</h3>
                <h3>2000 Fcfa</h3>
                <h3>4000 Fcfa</h3>
                <h3>6000 XAF</h3>
              </div>

              <div class="col" id="hidedesktop1">
                <h3 class="bold1">status</h3>
                <h3 class="text-success">{{ i }}</h3>
              </div>

              <div class="container d-flex justify-content-end btn-marg">
                <button class="button btn shadow">
                  <h3 class="h3 button-text">Re-order</h3>
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

        <div v-if="status == 2" class="inprogress">
          <div class="show row">
            <div class="col-3">Show:</div>
            <div class="col">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </div>

          <div v-for="i in 4" :key="i">
            <div class="justify-content-start container">
              <div class="container d-flex justify-content-end btn-marg">
                <div class="manage">
                  <b-dropdown variant="ligth" id="dropdown-1" text="Manage" class="m-md-2">
                    <b-dropdown-item>Archive</b-dropdown-item>
                    <b-dropdown-item>Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <span class="gras">Order</span>
              <span class="text-success">#12324253</span> <br />
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
                <h3>Product Qte :</h3>
                <h3>Price :</h3>

                <h3>shipping cost:</h3>
                <h3>Total :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>4</h3>
                <h3>2000 Fcfa</h3>
                <h3>4000 Fcfa</h3>
                <h3>6000 XAF</h3>
              </div>

              <div class="col" id="hidedesktop1">
                <h3 class="bold1">status</h3>
                <h3 class="text-success">{{ etat }}</h3>
              </div>

              <div class="container d-flex justify-content-end btn-marg">
                <button class="button btn shadow">
                  <h3 class="h3 button-text">Re-order</h3>
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

        <div v-if="status == 3" class="complete">
          <div class="show row">
            <div class="col-3">Show:</div>
            <div class="col">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </div>

          <div v-for="i in 4" :key="i">
            <div class="justify-content-start container">
              <div class="container d-flex justify-content-end btn-marg">
                <div class="manage">
                  <b-dropdown variant="ligth" id="dropdown-1" text="Manage" class="m-md-2">
                    <b-dropdown-item>Archive</b-dropdown-item>
                    <b-dropdown-item>Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <span class="gras">Order</span>
              <span class="text-success">#12324253</span> <br />
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
                <h3>Product Qte :</h3>
                <h3>Price :</h3>

                <h3>shipping cost:</h3>
                <h3>Total :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>4</h3>
                <h3>2000 Fcfa</h3>
                <h3>4000 Fcfa</h3>
                <h3>6000 XAF</h3>
              </div>

              <div class="col" id="hidedesktop1">
                <h3 class="bold1">status</h3>
                <h3 class="text-success">{{ etat }}</h3>
              </div>

              <div class="container d-flex justify-content-end btn-marg">
                <button class="button btn shadow">
                  <h3 class="h3 button-text">Re-order</h3>
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

        <div v-if="status == 4" class="canel">
          <div class="show row">
            <div class="col-3">Show:</div>
            <div class="col">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </div>

          <div v-for="i in 4" :key="i">
            <div class="justify-content-start container">
              <div class="container d-flex justify-content-end btn-marg">
                <div class="manage">
                  <b-dropdown variant="ligth" id="dropdown-1" text="Manage" class="m-md-2">
                    <b-dropdown-item>Archive</b-dropdown-item>
                    <b-dropdown-item>Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <span class="gras">Order</span>
              <span class="text-success">#12324253</span> <br />
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
                <h3>Product Qte :</h3>
                <h3>Price :</h3>

                <h3>shipping cost:</h3>
                <h3>Total :</h3>
              </div>

              <div class="col-3 text-start">
                <h3>4</h3>
                <h3>2000 Fcfa</h3>
                <h3>4000 Fcfa</h3>
                <h3>6000 XAF</h3>
              </div>

              <div class="col" id="hidedesktop1">
                <h3 class="bold1">status</h3>
                <h3 class="text-success">{{ etat }}</h3>
              </div>

              <div class="container d-flex justify-content-end btn-marg">
                <button class="button btn shadow">
                  <h3 class="h3 button-text">Re-order</h3>
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
import navbar from './navbar.vue';

export default {
  components: { navbar },
  data() {
    return {
      selected: '',
      rimg: '',
      status: 1,
      etat: 'All',
      img: ['http://urlr.me/YMQXD', 'https://placekitten.com/400/300'],
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'last 5 days' },
        { value: 'b', text: 'last 10 days' },
      ],
      etat1: ['pending', 'complete', 'cancel'],
    };
  },

  methods: {
    changeElementType(p) {
      console.log('------------------' + p);
      this.status = p;

      if (p == 1) {
        this.etat = 'All';
      } else if (p == 2) {
        this.etat = 'pending';
      } else if (p == 3) {
        this.etat = 'complete';
      } else if (p == 4) {
        this.etat = 'Canceled';
      }
      //transition partie desktop
      const a = document.getElementById('a' + p);
      const pr = document.getElementById('p' + p);

      const as = document.querySelectorAll('.avatar');
      as.forEach(dat => {
        dat.classList.remove('bg-success');
      });
      a.classList.add('bg-success');

      const ps = document.querySelectorAll('.progress');
      ps.forEach(dat => {
        dat.classList.remove('bg-success');
      });
      pr.classList.add('bg-success');

      //transition partie mobile

      const el = document.getElementById('m' + p);
      const els = document.querySelectorAll('.t');
      els.forEach(dat => {
        dat.classList.remove('green');
      });
      el.classList.add('green');
    },
  },

  beforeMount() {
    this.$store.dispatch('profileOrders/getMyOrders');
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

.noborder {
  border: none !important;
}
.drop {
  height: 20px;
  width: 30px;
  padding-left: 88px;
  /* position: absolute; */
}
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
  margin-left: 50px;
  padding-left: 27px;
  margin-top: 30px;
  margin-bottom: -20px;
}
.margclear1 {
  margin-top: 30px;
  margin-bottom: -20px;
}
.posstatus {
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
  width: 200px;
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
  }

  #hidedesktop {
    display: none;
  }
}
@media only screen and (max-width: 360px) {
  .margclear {
    font-size: 12px !important;
  }
}
@media only screen and (max-width: 768px) {
  .bold h3 {
    font-weight: normal !important;
  }
  .cercle2 {
    margin-left: 3px !important;
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
    margin-left: 86px;
  }
  .marghr {
    margin-bottom: -20px;
  }
  .manage {
    margin-top: -6px !important;
    margin-right: -12px !important;
  }

  @media only screen and (max-width: 470px) {
    .h2 {
      font-size: 10px !important;
      margin-left: 12px;
    }
    .cercle2 {
      margin-left: -4px !important;
    }
    .manage {
      margin-top: -6px !important;
      margin-right: -12px !important;
    }
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
