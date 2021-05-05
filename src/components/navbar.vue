<template>
  <header class=" ">
    <nav
      class="navbar  navbar-expand-lg  p-3 mb-3 rounded "
    >
      <div class="container-fluid ">


        <div class="col-md-3 col-xl-3">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/img/logo3.png"
            alt=""
            class="d-inline-block align-top mt-1"
            loading="lazy"
            width="30"
            height="30"
          />
          <span class="font-weight-bold website-logo-name ml-2"
            >BRIDGE AFRICA</span
          >
        </a>


        </div>








        <div class="col-lg-5 col-xl-5">

    


          
          <form class="form-inline input-group b-shadow b-radius"  >
            <input
              id="search-ba"
              type="search"
              data-toggle="popover"
              class="form-control border-right-0 search-h"
              placeholder="Find Pharmacy"
              aria-label=""
              data-original-title=""
              title=""
            />

            <input
              id="search-location"
              ref="foo"
              type="search"
              list="browsers"
              data-toggle="popover"
              class="form-control border-right-0 search-h"
              placeholder="Where "
              aria-label="search bridge africa"
              data-original-title=""
              title=""
            />

            <datalist id="browsers">    
             <option value=" Current Location " >      </option>
              <option value="Yaounde " />
    
           </datalist>




            <div class="input-group-append color-sit"  style="color:white;   border-top-right-radius: 10px;
            border-bottom-right-radius: 10px; ">
              <span class="input-group-text border-left-0 color-sit " style="width:56px"  
                >   

                 
                  <b-icon icon="search" style="color:white" font-scale="1.5"></b-icon>
              
              </span>

            </div>
          </form>
          <div id="search-popover" class="d-none"></div>


        </div>

        

        <div class="col-md-4">
       <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <fas-icon class="primary search" :icon="['fas', 'bars']" />
        </button>






























    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


<b-collapse id="nav-collapse" is-nav>

          
          <div class="nav-item">
            <a class="nav-link text-dark" href="">
             
              Home
            </a>
          </div>
          
          <div class="nav-item">
            <a class="nav-link text-dark" href="">
              
              Market
            </a>
          </div>
         

          <div class="nav-item">
            <a
              id="messages"
              class="nav-link"
              data-toggle="popover"
              role="button"
              data-original-title=""
              title=""
              ><span class="text-ored"
                ><fas-icon class="primary" :icon="['fas', 'comment']"/></span
            ></a>
            <b-popover target="messages" triggers="hover" placement="top">
              <div class="popover-body">
                <p class="font-weight-bold">Messages</p>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row justify-content-between align-items-center suggest-item cursor-pointer"
                >
                  <div class="d-inline-flex flex-row align-items-center">
                    <div>
                      <img
                        src="@/assets/img/profile-pic.jpg"
                        class="rounded-circle"
                        alt=""
                        width="30"
                        height="30"
                      />
                    </div>
                    <div class="d-flex flex-column ml-1 line-size">
                      <div class="font-weight-bold">David</div>
                      <div class="small text-muted">Hi</div>
                    </div>
                  </div>
                  <div class="small text-muted">1 min ago</div>
                </div>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row justify-content-between align-items-center suggest-item cursor-pointer"
                >
                  <div class="d-inline-flex flex-row align-items-center">
                    <div>
                      <img
                        src="@/assets/img/profile-pic.jpg"
                        class="rounded-circle"
                        alt=""
                        width="30"
                        height="30"
                      />
                    </div>
                    <div class="d-flex flex-column ml-1 line-size">
                      <div class="font-weight-bold">Alina</div>
                      <div class="small text-muted">How are you</div>
                    </div>
                  </div>
                  <div class="small text-muted">3 hours ago</div>
                </div>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row justify-content-between align-items-center suggest-item cursor-pointer"
                >
                  <div class="d-inline-flex flex-row align-items-center">
                    <div>
                      <img
                        src="@/assets/img/profile-pic.jpg"
                        class="rounded-circle"
                        alt=""
                        width="30"
                        height="30"
                      />
                    </div>
                    <div class="d-flex flex-column ml-1 line-size">
                      <div class="font-weight-bold">Maxine</div>
                      <div class="small text-muted">Please call me</div>
                    </div>
                  </div>
                  <div class="small text-muted">Yesterday</div>
                </div>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row justify-content-between align-items-center suggest-item cursor-pointer"
                >
                  <div class="d-inline-flex flex-row align-items-center">
                    <div>
                      <img
                        src="@/assets/img/profile-pic.jpg"
                        class="rounded-circle"
                        alt=""
                        width="30"
                        height="30"
                      />
                    </div>
                    <div class="d-flex flex-column ml-1 line-size">
                      <div class="font-weight-bold">Ali</div>
                      <div class="small text-muted">Hello</div>
                    </div>
                  </div>
                  <div class="small text-muted">20-Jan</div>
                </div>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row justify-content-between align-items-center suggest-item cursor-pointer"
                >
                  <div class="d-inline-flex flex-row align-items-center">
                    <div>
                      <img
                        src="@/assets/img/profile-pic.jpg"
                        class="rounded-circle"
                        alt=""
                        width="30"
                        height="30"
                      />
                    </div>
                    <div class="d-flex flex-column ml-1 line-size">
                      <div class="font-weight-bold">Paul</div>
                      <div class="small text-muted">1m</div>
                    </div>
                  </div>
                  <div class="small text-muted">1-Apr-19</div>
                </div>
                <hr class="h-divider" />
                <a
                  href="https://bridgeafrica.info/nav/inbox.html"
                  class="text-ored"
                  ><u>See Inbox</u></a
                >
              </div>
            </b-popover>
          </div>






















          <div class="nav-item">
            <a
              id="notif"
              class="nav-link"
              data-toggle="popover"
              role="button"
              data-original-title=""
              title=""
              ><span class="text-ored"
                ><b-icon-bell-fill class="col-bg"></b-icon-bell-fill></span
            ></a>
            <b-popover target="notif" triggers="hover" placement="top">
              <div class="popover-body">
                <p class="font-weight-bold">Notifications</p>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer"
                >
                  <div>
                    <img
                      src="@/assets/img/profile-pic.jpg"
                      class="rounded-circle"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </div>
                  <div class="d-flex flex-column ml-3">
                    <div>
                      <span class="font-weight-bold">David</span> started
                      following you
                    </div>
                    <div class="small text-muted">1m</div>
                  </div>
                </div>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer"
                >
                  <div>
                    <img
                      src="@/assets/img/profile-pic.jpg"
                      class="rounded-circle"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </div>
                  <div class="d-flex flex-column ml-3">
                    <div>
                      <span class="font-weight-bold">Alina</span> commented on
                      your post
                    </div>
                    <div class="small text-muted">1m</div>
                  </div>
                </div>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer"
                >
                  <div>
                    <img
                      src="@/assets/img/profile-pic.jpg"
                      class="rounded-circle"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </div>
                  <div class="d-flex flex-column ml-3">
                    <div>
                      <span class="font-weight-bold">Maxine</span> liked your
                      post
                    </div>
                    <div class="small text-muted">1m</div>
                  </div>
                </div>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer"
                >
                  <div>
                    <img
                      src="@/assets/img/profile-pic.jpg"
                      class="rounded-circle"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </div>
                  <div class="d-flex flex-column ml-3">
                    <div>
                      <span class="font-weight-bold">Paul</span> approuved your
                      request to join the network
                    </div>
                    <div class="small text-muted">1m</div>
                  </div>
                </div>
                <hr class="h-divider" />
                <div
                  class="d-inline-flex flex-row align-items-center suggest-item cursor-pointer"
                >
                  <div>
                    <img
                      src="@/assets/img/profile-pic.jpg"
                      class="rounded-circle"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </div>
                  <div class="d-flex flex-column ml-3">
                    <div>
                      <span class="font-weight-bold">David</span> started
                      following you
                    </div>
                    <div class="small text-muted">1m</div>
                  </div>
                </div>
                <hr class="h-divider" />
                <a
                  href="https://bridgeafrica.info/nav/notifications-view-all.html"
                  class="text-ored"
                  ><u>See all Notifications</u></a
                >
              </div>
            </b-popover>
          </div>









          <div class="nav-item" id="profilepic">
            <a class="nav-link text-dark" href="">
              <span
                ><img
                  src="@/assets/img/profile-pic.jpg"
                  class="rounded-circle"
                  alt=""
                  width="50"
                  height="50"
              /></span>
             
            </a>
          </div>
         
 <b-tooltip target="profilepic" variant="light" triggers="hover">
       Maxine Moff
  </b-tooltip>

          <div class="nav-item">
            <a
              id="other-menu"
              class="nav-link text-dark arrow-down"
              data-toggle="popover"
              role="button"
              data-original-title=""
              title=""
            >
              <!--            <fas-icon class="primary search" :icon="['fas', 'chevron-down']" />-->
            </a>
            <b-popover target="other-menu" triggers="hover" placement="top">
              <div class="popover-body">
                <p class="font-weight-bold">Your Businesses</p>
                <div>
                  <div class="d-inline-flex flex-row align-items-center mb-1">
                    <div>
                      <img
                        src="@/assets/img/logo3.png"
                        class="rounded-circle"
                        alt=""
                        width="25"
                        height="25"
                      />
                    </div>
                    <div class="ml-3">
                      Business 1
                    </div>
                  </div>
                </div>
                <div>
                  <div class="d-inline-flex flex-row align-items-center mb-1">
                    <div>
                      <img
                        src="@/assets/img/logo3.png"
                        class="rounded-circle"
                        alt=""
                        width="25"
                        height="25"
                      />
                    </div>
                    <div class="ml-3">
                      Business 2
                    </div>
                  </div>
                </div>
                <div>
                  <div class="d-inline-flex flex-row align-items-center mb-1">
                    <div>
                      <img
                        src="@/assets/img/logo3.png"
                        class="rounded-circle"
                        alt=""
                        width="25"
                        height="25"
                      />
                    </div>
                    <div class="ml-3">
                      Business 3
                    </div>
                  </div>
                </div>
                <a href="" class="text-ored"><u>View all</u></a>
                <hr class="h-divider" />
                <a
                  href="https://bridgeafrica.info/nav/account-settings.html"
                  class="other-menu suggest-item cursor-pointer text-decoration-none text-dark"
                >
                  <span class="mr-2"
                    ><fas-icon class="violet search" :icon="['fas', 'cogs']"
                  /></span>
                  Account Settings
                </a>
                <hr class="h-divider" />
                <div class="other-menu suggest-item cursor-pointer">
                  <span class="mr-1"
                    ><fas-icon class="violet search" :icon="['fas', 'question']"
                  /></span>
                  Help and Support
                </div>
                <hr class="h-divider" />
                <div class="other-menu suggest-item cursor-pointer">
                  <span class="mr-2"
                    ><fas-icon
                      class="violet search"
                      :icon="['fas', 'globe-americas']"
                  /></span>
                  Language
                </div>
                <hr class="h-divider" />
                <a
                  href="https://bridgeafrica.info/nav/owner-other-menu.html"
                  class="other-menu suggest-item cursor-pointer text-decoration-none text-dark"
                >
                  <span class="mr-2"
                    ><fas-icon
                      class="violet search"
                      :icon="['fas', 'sign-out-alt']"
                  /></span>
                  Logout
                </a>
              </div>
            </b-popover>
          </div>
        

</b-collapse>

        </div>
      </div>

    



    </nav>




    <div>
  
    

</div>
  </header>
</template>

<script>
export default {
  name: "navbar"
};


</script>

<style scoped>

.b-shadow{

   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.b-radius{
  border-radius: 10px;
}


.color-sit{
  background-color: #e75c18;
}

.search-h{
  height: 48px;
 
 
}
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
    display: block;
  }
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
  .show {
    display: block;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
  .show {
    display: block;
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
    display: block;
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
    display: block;
  }
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
  color: #e75c18;
}


.text-dark {
    
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: rgba(43,39,60,1);
    text-align: left;
}



.line-size {
  width: 150px;
}


.blec-container{

  width: 95%;
}

@media (max-width: 756px) {

.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    position: absolute !important;
    top: -90px !important;
    right: 13px !important;
}


}






</style>
