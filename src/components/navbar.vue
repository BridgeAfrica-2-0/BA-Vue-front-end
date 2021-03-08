<template>
  <nav class="navbar navbar-expand-lg shadow-nav p-3 mb-3 rounded">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/logo3.png" alt="" class="d-inline-block align-top mt-1" loading="lazy" width="30" height="30">
        <span class="font-weight-bold website-logo-name ml-2">BRIDGE AFRICA</span>
      </a>
      <div class="col-md-4">
        <form class="form-inline input-group">
          <input id="search-ba" type="search" data-toggle="popover" class="form-control border-right-0" placeholder="search bridge africa" aria-label="search bridge africa" data-original-title="" title="">
          <div class="input-group-append">
            <span class="input-group-text border-left-0 bg-white"><a class="search text-ored" href=""><fas-icon class="primary search" :icon="['fas', 'search']" /></a></span>
          </div>
        </form>
        <div id="search-popover" class="d-none"></div>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <fas-icon class="primary search" :icon="['fas', 'bars']" />
      </button>
      <div class="collapse navbar-collapse ml-4" id="navbarMenu">
        <div class="vl"></div>
        <div class="nav-item">
          <a class="nav-link text-dark" href="">
            <span class="text-ored"><fas-icon class="primary" :icon="['fas', 'home']" /></span>
            Home
          </a>
        </div>
        <div class="vl"></div>
        <div class="nav-item">
          <a class="nav-link text-dark" href="">
            <span class="text-ored"><fas-icon class="primary" :icon="['fas', 'store']" /></span>
            Market
          </a>
        </div>
        <div class="vl"></div>
        <div class="nav-item">
          <a id="messages" class="nav-link" data-toggle="popover" role="button" data-original-title="" title=""><span class="text-ored"><fas-icon class="primary" :icon="['fas', 'comment']" /></span></a>
        </div>
        <div class="nav-item">
          <a id="notif" class="nav-link" data-toggle="popover" role="button" data-original-title="" title=""><span class="text-ored"><b-icon-bell-fill class="col-bg"></b-icon-bell-fill></span></a>
        </div>
        <div class="vl"></div>
        <div class="nav-item">
          <a class="nav-link text-dark" href="">
            <span><img src="@/assets/img/profile-pic.jpg" class="rounded-circle" alt="" width="30" height="30"></span>
            Maxine
          </a>
        </div>
        <div class="vl"></div>
        <div class="nav-item">
          <a id="other-menu" class="nav-link text-dark arrow-down" data-toggle="popover" role="button" data-original-title="" title="">
            <fas-icon class="primary search" :icon="['fas', 'chevron-down']" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.input-size {
  width: 401px;
}

.input-size-phone {
  width: 401px;
}

.color-site {
  color: #e75c18;
}

.col-bg {
  color: #e75c18;
}

/*Responsive Side*/

@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
  .corps {
    margin-top: 2rem !important;
  }

  .montre {
    display: none;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
  .show {
    display: none;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
  .show {
    display: none;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
  .show {
    display: none;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
  .corps {
    margin-top: 6rem !important;
  }

  .show {
    display: none;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }

  .corps {
    margin-top: 6rem !important;
  }

  .show {
    display: none;
  }
}
.shadow-nav {
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.10) !important;
}
.website-logo-name {
  font-size: 24px;
  color: #2e2e2e;
  margin-top: 2px;
}
.vl {
  border-left: 1px solid #dee2e6;
  height: 20px;
}
.text-ored {
  color: #E75C18;
}
.text-dark {
  color: #343a40 !important;
  font-size: smaller;
}
</style>
