<template>
  <div class="p-0 m-0">
    <div class="col-md-12 ">

      <div class="row mb-4">
        <div class="col">
          <h6 class="mb-0"><b></b></h6>
          <hr>
          <div id="btnContainer">
            <button class="btn primary" onclick="listView()"> <fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'list']"
            /> List</button>
            <button class="btn activegrid" onclick="gridView()"><fas-icon
                class="primary float-left mr-1 mt-1"
                :icon="['fas', 'th-large']"
            />Grid</button>
          </div>
          <div class=" row border shadow pt-3  pb-3 pl-0 mb-4">
            <div class="d-flex col-md-3">
              <img class="img-fluid" src="@/assets/img/about1.jpg">
            </div>
            <div class="col-md-5 pl-md-0">
              <b>Business Name Here1</b>
              <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
              <p class="mb-1">Business Category</p>
              <p class="mb-1">1.1 M Followers </p>
              <p class="mb-1">Neighbourhood, city, country</p>
              <p class="mb-1">keyword 1, keyword 2, keyword 3</p>
            </div>
            <div class="text-right col-md-4"><a href="#">Editor</a>
              <ul class="list-unstyled text-left ulpost-bus">
                <li><a href="#"><i aria-hidden="true" class="fa fa-envelope mr-2 pt-1"></i> Inbox <span class="badge bg-dark pull-right text-light border-radius">5</span></a></li>
                <li><a href="#"><i aria-hidden="true" class="fa fa-globe mr-2 pt-1"></i> Notification <span class="badge pull-right bg-dark text-light border-radius">2</span></a></li>
              </ul>
            </div>
          </div>
          <div class=" row border shadow pt-3  pb-3 pl-0 mb-4">
            <div class="d-flex col-md-3">
              <img class="img-fluid" src="@/assets/img/about2.jpg">
            </div>
            <div class="col-md-5 pl-md-0">
              <b>Business Name Here2</b>
              <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
              <p class="mb-1">Business Category</p>
              <p class="mb-1">1.1 M Followers </p>
              <p class="mb-1">Neighbourhood, city, country</p>
              <p class="mb-1">keyword 1, keyword 2, keyword 3</p>
            </div>
            <div class="text-right col-md-4"><a href="#">Admin</a>
              <ul class="list-unstyled text-left ulpost-bus">
                <li><a href="#"><i aria-hidden="true" class="fa fa-envelope mr-2 pt-1"></i> Inbox <span class="badge bg-dark pull-right text-light border-radius">5</span></a></li>
                <li><a href="#"><i aria-hidden="true" class="fa fa-globe mr-2 pt-1"></i> Notification <span class="badge pull-right bg-dark text-light border-radius">2</span></a></li>
              </ul>

            </div>

          </div>
          <div class=" row border shadow pt-3 pb-3 pl-0 mb-4">
            <div class="d-flex col-md-3">
              <img class="img-fluid" src="@/assets/img/photo2.jpg">
            </div>
            <div class="col-md-5 pl-md-0">
              <b>Business Name Here2</b>
              <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
              <p class="mb-1">Business Category</p>
              <p class="mb-1">1.1 M Followers </p>
              <p class="mb-1">Neighbourhood, city, country</p>
              <p class="mb-1">keyword 1, keyword 2, keyword 3</p>
            </div>
            <div class="text-right col-md-4"><a href="#">Editor</a>
              <ul class="list-unstyled text-left ulpost-bus">
                <li><a href="#"><i aria-hidden="true" class="fa fa-envelope mr-2 pt-1"></i> Inbox <span class="badge bg-dark pull-right text-light border-radius">5</span></a></li>
                <li><a href="#"><i aria-hidden="true" class="fa fa-globe mr-2 pt-1"></i> Notification <span class="badge pull-right bg-dark text-light border-radius">2</span></a></li>
              </ul></div></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bussiness"
};
</script>

<style scoped>
@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 6rem !important;
  }
}
</style>
