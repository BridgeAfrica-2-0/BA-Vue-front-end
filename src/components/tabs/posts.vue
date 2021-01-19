<template>
  <div>
    <b-row>
      <b-col md="4">
        <b-card title="" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Intro</h6>
          </template>
          <b-card-text>
            <p>
              <b-icon icon="briefcase-fill" variant="primary"></b-icon> Work at:
              Current or Last Organization
            </p>
            <p>
              <b-icon icon="book-fill" variant="primary"></b-icon> Studied at:
              Last Education
            </p>
            <p>
              <b-icon icon="house-fill" variant="primary"></b-icon> Home Town
              Name:Dummy
            </p>
            <p>
              <b-icon icon="geo-alt-fill" variant="primary"></b-icon> Current
              City Name:Dummy
            </p>
            <p>
              <b-icon icon="people-fill" variant="primary"></b-icon> Followed
              by: 525
            </p>
          </b-card-text>
        </b-card>

        <b-card class="mt-4" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0 d-inline-block">Followers</h6>
            <b-avatar-group size="20px" class="float-right">
              <b-avatar></b-avatar>
              <b-avatar text="BV" variant="primary"></b-avatar>
              <b-avatar
                src="https://placekitten.com/300/300"
                variant="info"
              ></b-avatar>
              <b-avatar text="OK" variant="danger"></b-avatar>
              <b-avatar variant="warning"></b-avatar>
            </b-avatar-group>
          </template>
          <b-card-text>
            <b-list-group-item class="d-flex align-items-center m-0 p-2">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="mr-3"
              ></b-avatar>
              <span class="mr-auto font-weight-bolder">Username</span>
              <b-button variant="outline-primary" size="sm"
                ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
                Follow</b-button
              >
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center m-0 p-2">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="mr-3"
              ></b-avatar>
              <span class="mr-auto font-weight-bolder">Username</span>
              <b-button variant="outline-primary" size="sm"
                ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
                Follow</b-button
              >
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center m-0 p-2">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                class="mr-3"
              ></b-avatar>
              <span class="mr-auto font-weight-bolder">Username</span>
              <b-button variant="outline-primary" size="sm"
                ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
                Follow</b-button
              >
            </b-list-group-item>
          </b-card-text>
          <template #footer>
            <span class="float-right"> <a href="#">See More</a> </span>
          </template>
        </b-card>

        <b-card class="mt-4" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0 d-inline-block">Media</h6>
            <span class="float-right"
              ><b-icon icon="eye-fill" variant="primary"></b-icon> See All</span
            >
          </template>
          <b-card-text>
            <b-row>
              <b-col cols="6" v-for="i in 4" :key="i" class="p-1">
                <img
                  class="mb-2 img-fluid"
                  src="@/assets/img/m2.jpg"
                  alt="Fluid image"
                />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col md="8">
        <b-card>
          <b-row>
            <b-col cols="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://placekitten.com/300/300"
              ></b-avatar>
            </b-col>
            <b-col cols="11" class="m-0 p-0">
              <b-form-textarea
                id="textarea-small"
                size="sm"
                placeholder="Whats On Your, <Name Here> ?"
              ></b-form-textarea>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12" class="m-2 p-2">
              <span class="float-left">
                <b-button-group class="mr-1">
                  <b-button
                    title="Add Image"
                    size="sm"
                    variant="outline-primary"
                  >
                    <b-icon icon="card-image" aria-hidden="true"></b-icon>
                  </b-button>
                  <b-button
                    title="Add Movie"
                    size="sm"
                    variant="outline-primary"
                  >
                    <b-icon
                      icon="camera-video-fill"
                      aria-hidden="true"
                    ></b-icon>
                  </b-button>
                  <b-button
                    title="Add Hyperlink"
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
                  Publish</b-button
                >
              </span>
            </b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col cols="12">
              <b-row>
                <b-col cols="1" class="m-0 p-0">
                  <b-avatar
                    class="d-inline-block"
                    variant="info"
                    src="https://placekitten.com/300/300"
                    size="4rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="11" class="pt-2">
                  <h5 class="m-0 font-weight-bolder">
                    John Doe
                    <span class="float-right">
                      <b-dropdown variant="outline-primary" size="sm">
                        <template #button-content>
                          <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                          More
                        </template>
                        <b-dropdown-item-button>
                          <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                          Locked <span class="sr-only">(Click to unlock)</span>
                        </b-dropdown-item-button>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-group header="Choose options" class="small">
                          <b-dropdown-item-button>
                            <b-icon icon="blank" aria-hidden="true"></b-icon>
                            Option A <span class="sr-only">(Not selected)</span>
                          </b-dropdown-item-button>
                          <b-dropdown-item-button>
                            <b-icon icon="check" aria-hidden="true"></b-icon>
                            Option B <span class="sr-only">(Selected)</span>
                          </b-dropdown-item-button>
                          <b-dropdown-item-button>
                            <b-icon icon="blank" aria-hidden="true"></b-icon>
                            Option C <span class="sr-only">(Not selected)</span>
                          </b-dropdown-item-button>
                        </b-dropdown-group>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item-button
                          >Some action</b-dropdown-item-button
                        >
                        <b-dropdown-item-button
                          >Some other action</b-dropdown-item-button
                        >
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item-button variant="danger">
                          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                          Delete
                        </b-dropdown-item-button>
                      </b-dropdown>
                    </span>
                  </h5>
                  <p>1h Ago</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.😛
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
                <b-col cols="1">
                  <b-avatar
                    variant="info"
                    src="https://placekitten.com/300/300"
                    size="2rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="11">
                  <b-input-group class="my-auto w-100 rounded">
                    <template #append>
                      <b-input-group-text class=""
                        ><strong style="color: #E75C18">
                          <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      placeholder="Add A Comment"
                      class="border-right-0"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "posts"
};
</script>

<style scoped></style>
