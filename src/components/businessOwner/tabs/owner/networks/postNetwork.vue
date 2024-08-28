<template>
  <div>
    <b-card class="px-md-3">
      <b-row>
        <b-col cols="2" md="1" class="m-0 p-0">
          <b-avatar
            class="d-inline-block"
            variant="info"
            src="https://business.bridgeafrica.info/assets/img/team/3.png"
          ></b-avatar>
        </b-col>
        <b-col cols="10" md="11" class="m-0 p-0">
          <b-form-textarea
            id="textarea-small"
            size="sm"
            class="mb-2"
            :placeholder="$t('businessowner.Whats_On_Your_Mind')"
          ></b-form-textarea>
          <span class="float-left">
            <b-button-group size="sm" class="">
              <b-button
                :title="$t('businessowner.Add_Image')"
                size="sm"
                variant="outline-primary"
              >
                <b-icon icon="card-image" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                :title="$t('businessowner.Add_Movie')"
                size="sm"
                variant="outline-primary"
              >
                <b-icon icon="camera-video-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                :title="$t('businessowner.Add_Hyperlink')"
                size="sm"
                variant="outline-primary"
              >
                <b-icon icon="link-45deg" aria-hidden="true"></b-icon>
              </b-button>
            </b-button-group>
          </span>
          <span class="float-right">
            <b-button variant="outline-primary" size="sm"
              ><b-icon icon="cursor-fill" variant="primary"></b-icon>
              {{ $t("businessowner.Post") }}</b-button
            >
          </span>
        </b-col>
      </b-row>

      <div
        class="row sub-sidebar-2 pending-post-view mt-4 pb-0 border-dark border-2"
      >
        <div
          class="col-md-12 col-lg-12 d-flex align-items-stretch mb-lg-0 position-define"
        >
          <a
            class="nav-link text-dark"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <b-icon-info-circle-fill scale="1.5"></b-icon-info-circle-fill>
          </a>
          <div class="post-pending pt-2">
            <p>
              {{
                $t("businessowner.Your_3_Post_s_are_pending_for_approval")
              }}.&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" class="text-design">{{
                $t("businessowner.View_All")
              }}</a>
            </p>
          </div>
        </div>
      </div>

      <b-row class="mt-4">
        <b-col cols="12" class="mt-4">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="pt-2">
              <h5 class="m-0 font-weight-bolder">
                {{ $t("businessowner.Mapoure_Agrobusiness") }}
                <span class="float-right">
                  <b-dropdown variant="outline-primary" size="sm">
                    <template #button-content>
                      <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.More") }}
                    </template>
                    <b-dropdown-item-button>
                      <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.Locked") }}
                      <span class="sr-only"
                        >({{ $t("businessowner.Click_to_unlock") }})</span
                      >
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-group
                      :header="$t('businessowner.Choose_options')"
                      class="small"
                    >
                      <b-dropdown-item-button>
                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} A
                        <span class="sr-only"
                          >( {{ $t("businessowner.Not_selected") }})</span
                        >
                      </b-dropdown-item-button>
                      <b-dropdown-item-button>
                        <b-icon icon="check" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} B
                        <span class="sr-only"
                          >({{ $t("businessowner.Selected") }})</span
                        >
                      </b-dropdown-item-button>
                      <b-dropdown-item-button>
                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} C
                        <span class="sr-only"
                          >({{ $t("businessowner.Not_selected") }})</span
                        >
                      </b-dropdown-item-button>
                    </b-dropdown-group>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button>{{
                      $t("businessowner.Some_action")
                    }}</b-dropdown-item-button>
                    <b-dropdown-item-button>{{
                      $t("businessowner.Some_other_action")
                    }}</b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button variant="danger">
                      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.Delete") }}
                    </b-dropdown-item-button>
                  </b-dropdown>
                </span>
              </h5>
              <p>{{ $t("businessowner.1h_Ago") }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.😛
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <img
                class="img-fluid"
                src="@/assets/img/photo1.jpg"
                alt="Photo1"
              />
            </b-col>
            <b-col class="mt-1">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                23</span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                123</span
              >
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col cols="3" md="1" class="m-md-0 p-md-0">
              <b-avatar
                variant="info"
                class="img-fluid"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
              ></b-avatar>
            </b-col>
            <b-col cols="9" md="11" class="p-0 m-0 pr-3">
              <b-input-group class="my-auto w-100 rounded">
                <template #append>
                  <b-input-group-text class=""
                    ><strong class="color-site">
                      <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                  ></b-input-group-text>
                </template>
                <b-form-input
                  :placeholder="$t('businessowner.Post_A_Comment')"
                  class="border-right-0"
                ></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col cols="12" class="mt-4">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="pt-2">
              <h5 class="m-0 font-weight-bolder">
                {{ $t("businessowner.Mapoure_Agrobusiness") }}
                <span class="float-right">
                  <b-dropdown variant="outline-primary" size="sm">
                    <template #button-content>
                      <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.More") }}
                    </template>
                    <b-dropdown-item-button>
                      <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.Locked") }}
                      <span class="sr-only"
                        >({{ $t("businessowner.Click_to_unlock") }})</span
                      >
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-group
                      :header="$t('businessowner.Choose_options')"
                      class="small"
                    >
                      <b-dropdown-item-button>
                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} A
                        <span class="sr-only"
                          >({{ $t("businessowner.Not_selected") }})</span
                        >
                      </b-dropdown-item-button>
                      <b-dropdown-item-button>
                        <b-icon icon="check" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} B
                        <span class="sr-only"
                          >({{ $t("businessowner.Selected") }})</span
                        >
                      </b-dropdown-item-button>
                      <b-dropdown-item-button>
                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} C
                        <span class="sr-only"
                          >({{ $t("businessowner.Not_selected") }})</span
                        >
                      </b-dropdown-item-button>
                    </b-dropdown-group>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button>{{
                      $t("businessowner.Some_action")
                    }}</b-dropdown-item-button>
                    <b-dropdown-item-button>{{
                      $t("businessowner.Some_other_action")
                    }}</b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button variant="danger">
                      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.Delete") }}
                    </b-dropdown-item-button>
                  </b-dropdown>
                </span>
              </h5>
              <p>{{ $t("businessowner.1h_Ago") }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.😛
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <lightbox :cells="2" :items="imagees"></lightbox>
            </b-col>
            <b-col class="mt-1">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                23</span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                123</span
              >
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col cols="3" md="1" class="m-md-0 p-md-0">
              <b-avatar
                variant="info"
                class="img-fluid"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
              ></b-avatar>
            </b-col>
            <b-col cols="9" md="11" class="p-0 m-0 pr-3">
              <b-input-group class="my-auto w-100 rounded">
                <template #append>
                  <b-input-group-text class=""
                    ><strong class="color-site">
                      <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                  ></b-input-group-text>
                </template>
                <b-form-input
                  :placeholder="$t('businessowner.Post_A_Comment')"
                  class="border-right-0"
                ></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col cols="12" class="mt-4">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="pt-2">
              <h5 class="m-0 font-weight-bolder">
                {{ $t("businessowner.Mapoure_Agrobusiness") }}
                <span class="float-right">
                  <b-dropdown variant="outline-primary" size="sm">
                    <template #button-content>
                      <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.More") }}
                    </template>
                    <b-dropdown-item-button>
                      <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.Locked") }}
                      <span class="sr-only"
                        >({{ $t("businessowner.Click_to_unlock") }})</span
                      >
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-group
                      :header="$t('businessowner.Choose_options')"
                      class="small"
                    >
                      <b-dropdown-item-button>
                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} A
                        <span class="sr-only"
                          >({{ $t("businessowner.Not_selected") }})</span
                        >
                      </b-dropdown-item-button>
                      <b-dropdown-item-button>
                        <b-icon icon="check" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} B
                        <span class="sr-only"
                          >({{ $t("businessowner.Selected") }})</span
                        >
                      </b-dropdown-item-button>
                      <b-dropdown-item-button>
                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} C
                        <span class="sr-only"
                          >({{ $t("businessowner.Not_selected") }})</span
                        >
                      </b-dropdown-item-button>
                    </b-dropdown-group>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button>{{
                      $t("businessowner.Some_action")
                    }}</b-dropdown-item-button>
                    <b-dropdown-item-button>{{
                      $t("businessowner.Some_other_action")
                    }}</b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button variant="danger">
                      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.Delete") }}
                    </b-dropdown-item-button>
                  </b-dropdown>
                </span>
              </h5>
              <p>{{ $t("businessowner.1h_Ago") }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.😛
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <lightbox :cells="4" :items="images"></lightbox>
            </b-col>
            <b-col class="mt-1">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                23</span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                123</span
              >
            </b-col>
            <b-col cols="12">
              <b-row class="mt-2">
                <b-col cols="3" md="1" class="m-md-0 p-md-0">
                  <b-avatar
                    variant="info"
                    class="img-fluid"
                    src="https://business.bridgeafrica.info/assets/img/team/3.png"
                  ></b-avatar>
                </b-col>
                <b-col cols="9" md="11" class="p-0 m-0 pr-3">
                  <b-input-group class="my-auto w-100 rounded">
                    <template #append>
                      <b-input-group-text class=""
                        ><strong class="color-site">
                          <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      :placeholder="$t('businessowner.Post_A_Comment')"
                      class="border-right-0"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col cols="12" class="mt-4">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="pt-2">
              <h5 class="m-0 font-weight-bolder">
                {{ $t("businessowner.Mapoure_Agrobusiness") }}
                <span class="float-right">
                  <b-dropdown variant="outline-primary" size="sm">
                    <template #button-content>
                      <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.More") }}
                    </template>
                    <b-dropdown-item-button>
                      <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.Locked") }}
                      <span class="sr-only"
                        >({{ $t("businessowner.Click_to_unlock") }})</span
                      >
                    </b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-group
                      :header="$t('businessowner.Choose_options')"
                      class="small"
                    >
                      <b-dropdown-item-button>
                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} A
                        <span class="sr-only"
                          >({{ $t("businessowner.Not_selected") }})</span
                        >
                      </b-dropdown-item-button>
                      <b-dropdown-item-button>
                        <b-icon icon="check" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} B
                        <span class="sr-only"
                          >({{ $t("businessowner.Selected") }})</span
                        >
                      </b-dropdown-item-button>
                      <b-dropdown-item-button>
                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                        {{ $t("businessowner.Option") }} C
                        <span class="sr-only"
                          >({{ $t("businessowner.Not_selected") }})</span
                        >
                      </b-dropdown-item-button>
                    </b-dropdown-group>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button>{{
                      $t("businessowner.Some_action")
                    }}</b-dropdown-item-button>
                    <b-dropdown-item-button>{{
                      $t("businessowner.Some_other_action")
                    }}</b-dropdown-item-button>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button variant="danger">
                      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                      {{ $t("businessowner.Delete") }}
                    </b-dropdown-item-button>
                  </b-dropdown>
                </span>
              </h5>
              <p>{{ $t("businessowner.1h_Ago") }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.😛
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="mt-1">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                23</span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                123</span
              >
            </b-col>
            <b-col cols="12">
              <b-row class="mt-2">
                <b-col cols="3" md="1" class="m-md-0 p-md-0">
                  <b-avatar
                    variant="info"
                    class="img-fluid"
                    src="https://business.bridgeafrica.info/assets/img/team/3.png"
                  ></b-avatar>
                </b-col>
                <b-col cols="9" md="11" class="p-0 m-0 pr-3">
                  <b-input-group class="my-auto w-100 rounded">
                    <template #append>
                      <b-input-group-text class=""
                        ><strong class="color-site">
                          <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      :placeholder="$t('businessowner.Post_A_Comment')"
                      class="border-right-0"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "postNetwork",
  data() {
    return {
      images: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg"
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.action-intro {
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.row.sub-sidebar-2.pending-post-view {
  background-color: #8bd06c;
  border-color: #000;
  border: solid 3px;
}

.color-site {
  color: #e75c18;
}

.position-define {
  padding-left: 0;
  padding-top: 3px;
}

.text-design {
  color: #e75c18;
  text-decoration: underline;
}

@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
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
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }
}
</style>
