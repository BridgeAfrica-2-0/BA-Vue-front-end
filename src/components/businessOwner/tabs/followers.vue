<template>
  <div>
    <b-card>
      <b-tabs content-class="mt-3">
        <b-tab :title="$t('businessowner.People')" active>
          <b-tabs content-class="mt-3" fill pills>
            <b-tab :title="$t('businessowner.Followers2')" active>
              <div class="media border-botmediatom mb-4">
                <img
                  src="@/assets/img/alima.jpg"
                  alt="John Doe"
                  class="mr-2 rounded-circle"
                  style="width:60px;"
                />
                <div class="media-body">
                  <b><b-link>J. Circlehead</b-link></b>
                  <p class="">
                     {{ $t('businessowner.Cameroon')}},
                    <span class="desktop"
                      ><b-icon icon="house" variant="primary"></b-icon> 2,
                      <b-icon icon="globe" variant="primary"></b-icon> 3,
                      <b-icon icon="people" variant="primary"></b-icon> 3,
                    </span>
                  </p>
                </div>

                <span class="pull-right my-auto">
                  <b-dropdown
                    id="dropdown-1"
                    text="Contact"
                    class="m-md-2 drop"
                    variant="primary"
                    size="sm"
                  >
                    <b-dropdown-item>
                      <b-icon icon="chat-fill" variant="primary"></b-icon>
                       {{ $t('businessowner.Message')}}</b-dropdown-item
                    >
                    <b-dropdown-item>
                      <b-icon icon="telephone-fill" variant="primary"></b-icon>
                       {{ $t('businessowner.Call_Now')}}</b-dropdown-item
                    >
                    <b-dropdown-item>
                      <b-icon icon="geo-alt" variant="primary"></b-icon> 
                       {{ $t('businessowner.Get_Direction')}}</b-dropdown-item
                    >
                  </b-dropdown>
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-plus></b-icon-plus>  {{ $t('businessowner.Community')}}</b-button
                  >
                </span>
              </div>
              <div class="media border-botmediatom mb-4">
                <img
                  src="@/assets/img/alima.jpg"
                  alt="John Doe"
                  class="mr-2 rounded-circle"
                  style="width:60px;"
                />
                <div class="media-body">
                  <b><b-link>J. Circlehead</b-link></b>
                  <p class="">
                     {{ $t('businessowner.Cameroon')}},
                    <span class="desktop"
                      ><b-icon icon="house" variant="primary"></b-icon> 2,
                      <b-icon icon="globe" variant="primary"></b-icon> 3,
                      <b-icon icon="people" variant="primary"></b-icon> 3,
                    </span>
                  </p>
                </div>

                <span class="pull-right my-auto">
                  <b-dropdown
                    id="dropdown-1"
                    text="Contact"
                    class="m-md-2 drop"
                    variant="primary"
                    size="sm"
                  >
                    <b-dropdown-item>
                      <b-icon icon="chat-fill" variant="primary"></b-icon>
                       {{ $t('businessowner.Message')}}</b-dropdown-item
                    >
                    <b-dropdown-item>
                      <b-icon icon="telephone-fill" variant="primary"></b-icon>
                       {{ $t('businessowner.Call_Now')}}</b-dropdown-item
                    >
                    <b-dropdown-item>
                      <b-icon icon="geo-alt" variant="primary"></b-icon> 
                       {{ $t('businessowner.Get_Direction')}}</b-dropdown-item
                    >
                  </b-dropdown>
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-plus></b-icon-plus>  {{ $t('businessowner.Community')}}</b-button
                  >
                </span>
              </div>
            </b-tab>
            <b-tab :title="$t('general.Following') (1)">
              <div class="media border-botmediatom mb-4">
                <img
                  src="@/assets/img/alima.jpg"
                  alt="John Doe"
                  class="mr-2 rounded-circle"
                  style="width:60px;"
                />
                <div class="media-body">
                  <b><b-link>J. Circlehead</b-link></b>
                  <p class="">
                     {{ $t('businessowner.Cameroon')}},
                    <span class="desktop"
                      ><b-icon icon="house" variant="primary"></b-icon> 2,
                      <b-icon icon="globe" variant="primary"></b-icon> 3,
                      <b-icon icon="people" variant="primary"></b-icon> 3,
                    </span>
                  </p>
                </div>

                <span class="pull-right my-auto">
                  <b-dropdown
                    id="dropdown-1"
                    text="Contact"
                    class="m-md-2 drop"
                    variant="primary"
                    size="sm"
                  >
                    <b-dropdown-item>
                      <b-icon icon="chat-fill" variant="primary"></b-icon>
                       {{ $t('businessowner.Message')}}</b-dropdown-item
                    >
                    <b-dropdown-item>
                      <b-icon icon="telephone-fill" variant="primary"></b-icon>
                       {{ $t('businessowner.Call_Now')}}</b-dropdown-item
                    >
                    <b-dropdown-item>
                      <b-icon icon="geo-alt" variant="primary"></b-icon> 
                       {{ $t('businessowner.Get_Direction')}}</b-dropdown-item
                    >
                  </b-dropdown>
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-plus></b-icon-plus>  {{ $t('businessowner.Community')}}</b-button
                  >
                </span>
              </div>
            </b-tab>
          </b-tabs>
        </b-tab>
        <b-tab title="Bussiness">
          <b-tabs content-class="mt-3" fill pills>
            <b-tab title="Followers (2)" active>
              <div class="row border shadow pt-3 pb-3 pl-0 mb-4">
                <div class="d-flex col-md-3">
                  <img class="img-fluid" src="@/assets/img/photo2.jpg" />
                </div>
                <div class="col-md-5 pl-md-0">
                  <b> {{ $t('businessowner.Business_Name_Here') }}2</b>
                  <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
                  <p class="mb-1"> {{ $t('businessowner.Business_Category') }}</p>
                  <p class="mb-1">1.1 M  {{ $t('businessowner.Followers') }}</p>
                  <p class="mb-1"> {{ $t('businessowner.Neighbourhood') }},  {{ $t('businessowner.City') }},  {{ $t('businessowner.Country') }}</p>
                  <p class="mb-1"> {{ $t('businessowner.keyword') }} 1,  {{ $t('businessowner.keyword') }} 2,  {{ $t('businessowner.keyword') }} 3</p>
                </div>
                <div class="text-right col-md-4 my-auto">
                  <span class="pull-right my-auto">
                    <b-dropdown
                      id="dropdown-1"
                      text="Contact"
                      class="m-md-2 drop"
                      variant="primary"
                      size="sm"
                    >
                      <b-dropdown-item>
                        <b-icon icon="chat-fill" variant="primary"></b-icon>
                         {{ $t('businessowner.Message')}}</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon
                          icon="telephone-fill"
                          variant="primary"
                        ></b-icon>
                         {{ $t('businessowner.Call_Now')}}</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon icon="geo-alt" variant="primary"></b-icon> 
                         {{ $t('businessowner.Get_Direction') }}</b-dropdown-item
                      >
                    </b-dropdown>
                    <b-button variant="outline-primary" size="sm"
                      ><b-icon-plus></b-icon-plus>  {{ $t('businessowner.Community')}}</b-button
                    >
                  </span>
                </div>
              </div>
              <div class="row border shadow pt-3 pb-3 pl-0 mb-4">
                <div class="d-flex col-md-3">
                  <img class="img-fluid" src="@/assets/img/photo2.jpg" />
                </div>
                <div class="col-md-5 pl-md-0">
                  <b>{{ $t('businessowner.Business_Name_Here') }}</b>
                  <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
                  <p class="mb-1">{{ $t('businessowner.Business_Category') }}</p>
                  <p class="mb-1">1.1 M {{ $t('businessowner.Followers') }}</p>
                  <p class="mb-1"> {{ $t('businessowner.Neighbourhood')}},  {{ $t('businessowner.City')}},  {{ $t('businessowner.Country')}}</p>
                  <p class="mb-1"> {{ $t('businessowner.keyword')}} 1,  {{ $t('businessowner.keyword')}} 2,  {{ $t('businessowner.keyword')}} 3</p>
                </div>
                <div class="text-right col-md-4 my-auto">
                  <span class="pull-right my-auto">
                    <b-dropdown
                      id="dropdown-1"
                      text="Contact"
                      class="m-md-2 drop"
                      variant="primary"
                      size="sm"
                    >
                      <b-dropdown-item>
                        <b-icon icon="chat-fill" variant="primary"></b-icon>
                         {{ $t('businessowner.Message')}}</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon
                          icon="telephone-fill"
                          variant="primary"
                        ></b-icon>
                         {{ $t('businessowner.Call_Now')}}</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon icon="geo-alt" variant="primary"></b-icon> 
                         {{ $t('businessowner.Get_Direction')}}</b-dropdown-item
                      >
                    </b-dropdown>
                    <b-button variant="outline-primary" size="sm"
                      ><b-icon-plus></b-icon-plus>  {{ $t('businessowner.Community')}}</b-button
                    >
                  </span>
                </div>
              </div>
            </b-tab>
            <b-tab :title="$t('general.Following') (1)">
              <div class=" row border shadow pt-3 pb-3 pl-0 mb-4">
                <div class="d-flex col-md-3">
                  <img class="img-fluid" src="@/assets/img/photo2.jpg" />
                </div>
                <div class="col-md-5 pl-md-0">
                  <b> {{ $t('businessowner.Business_Name_Here2') }}</b>
                  <p class="mb-1"><a href="#">mywebsitebridegeafrica.com</a></p>
                  <p class="mb-1"> {{ $t('businessowner.Business_Category') }}</p>
                  <p class="mb-1">1.1 M  {{ $t('businessowner.Followers') }}</p>
                  <p class="mb-1"> {{ $t('businessowner.Neighbourhood')}},  {{ $t('businessowner.City')}},  {{ $t('businessowner.Country')}}</p>
                  <p class="mb-1"> {{ $t('businessowner.keyword')}} 1,  {{ $t('businessowner.keyword')}} 2,  {{ $t('businessowner.keyword')}} 3</p>
                </div>
                <div class="text-right col-md-4 my-auto">
                  <span class="pull-right my-auto">
                    <b-dropdown
                      id="dropdown-1"
                      text="Contact"
                      class="m-md-2 drop"
                      variant="primary"
                      size="sm"
                    >
                      <b-dropdown-item>
                        <b-icon icon="chat-fill" variant="primary"></b-icon>
                         {{ $t('businessowner.Message')}}</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon
                          icon="telephone-fill"
                          variant="primary"
                        ></b-icon>
                         {{ $t('businessowner.Call_Now')}}</b-dropdown-item
                      >
                      <b-dropdown-item>
                        <b-icon icon="geo-alt" variant="primary"></b-icon> 
                         {{ $t('businessowner.Get_Direction')}}</b-dropdown-item
                      >
                    </b-dropdown>
                    <b-button variant="outline-primary" size="sm"
                      ><b-icon-plus></b-icon-plus>  {{ $t('businessowner.Community')}}</b-button
                    >
                  </span>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.d-flex img {
  width: 100% !important;
  border-radius: 10px;
}
@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}
</style>
