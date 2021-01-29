<template>
  <div>
       <b-card>
         
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>