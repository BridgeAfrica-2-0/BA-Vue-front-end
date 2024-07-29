<template>
    <section>  
      <div class="row">
        <div class="col-md-6 col-lg-6">
              <div class="card left-card">
                <video
                    width="100%"
                    controls
                    height="500px"
                    poster="assets/home/show-television/television-show-left.png"
                >
                    <source src="assets/video/intro_video.mp4" type="video/mp4" />
                </video>
                <div class="card-body">
                    <h5 class="card-title">Checkout our Biz Show on CRTV</h5>
                    <p class="card-text">Use our specially designed training curriculum to help enhance your entrepreneurial and digital skills, learn how to properly use your bridgeafrica.</p>
                </div>
              </div>
        </div>
        <div class="col-md-6 col-lg-6">
            <div class="card right-card">
               <div class="d-flex p-2">
                    <video
                        width="40%"
                        style="object-fit:contain;"
                        controls
                         height="auto"
                        poster="assets/home/show-television/television-show-right-1.png"
                    >
                        <source src="assets/video/intro_video.mp4" type="video/mp4" />
                    </video>
                    <div class="card-body p-0 pl-3">
                        <p class="view-text p-0 m-0">VIEW</p>
                        <h5 class="card-title">Checkout our Biz Show on CRTV for latest new and update</h5>
                    </div>
               </div>
              </div>

              <div class="card right-card">
               <div class="d-flex p-2">
                <video
                    width="40%"
                    style="object-fit:contain;"
                    controls
                     height="auto"
                    poster="assets/home/show-television/television-show-right-2.png"
                >
                    <source src="assets/video/intro_video.mp4" type="video/mp4" />
                </video>
                <div class="card-body p-0 pl-3">
                    <p class="view-text p-0 m-0">VIEW</p>
                    <h5 class="card-title">Checkout our Biz Show on CRTV for latest new and update</h5>
                </div>
               </div>
              </div>

              <div class="card right-card">
               <div class="d-flex p-2">
                <video
                    width="40%"
                    style="object-fit:contain;"
                    controls
                     height="auto"
                    poster="assets/home/show-television/television-show-right-3.png"
                >
                    <source src="assets/video/intro_video.mp4" type="video/mp4" />
                </video>
                <div class="card-body p-0 pl-3">
                    <p class="view-text p-0 m-0">VIEW</p>
                    <h5 class="card-title">Checkout our Biz Show on CRTV for latest new and update</h5>
                </div>
               </div>
              </div>
        </div>
        
      </div>
  
    </section>
  </template>
  
  
        
  <script>
  import("vue-it-bigger/dist/vue-it-bigger.min.css");
  export default {
    name: "TelevisionShow",
  
    components: {},
  
    data() {},
  
    computed: {},
  
    mounted() {},
  
    methods: {}
  };
  </script>
  
  <style scoped>  

  .right-card {
    margin-bottom: 15px;
    border-radius: 5px;
  }

  .right-card video {
    height: 130px;
    border-radius: 5px;
  }

  .left-card {
    border-radius: 5px;
  }

  .left-card video {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px
  }

  .right-card .card-body {
    padding: 0 1,25rem !important;
  }

  .left-card .card-title {
    font-size : 20px !important;
    color : black !important;
  }

  .right-card .card-title {
    font-size : 18px !important;
    color : black !important;
  }


  .card-text {
    color: black !important;
  }

  .view-text {
    color: rgba(231, 91, 23, 1);
  }

  @media screen and (min-width: 768px) {
    .right-card {
        height: 150px;
    }

    .left-card {
        height: 480px;
    }
}




  </style>