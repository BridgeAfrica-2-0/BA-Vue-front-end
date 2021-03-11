<template>
  <div>
    <b-row>
      <b-col md="3" class="p-0 m-0">
        <b-card title="" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0 d-inline-block">Intro</h6>
            <span class="float-right btn m-0 p-0 action-intro"
              ><b-icon icon="pencil-fill" class="violet"></b-icon> Edit</span
            >
          </template>
          <b-card-text class="text-left">
            <p>
              <b-icon icon="briefcase-fill" class="violet"></b-icon> Work at:
              Current or Last Organization
            </p>
            <p>
              <b-icon icon="book-fill" class="violet"></b-icon> Studied at: Last
              Education
            </p>
            <p>
              <b-icon icon="house-fill" class="violet"></b-icon> Home Town
              Name:Dummy
            </p>
            <p>
              <b-icon icon="geo-alt-fill" class="violet"></b-icon> Current City
              Name:Dummy
            </p>
            <p>
              <b-icon icon="people-fill" class="violet"></b-icon> Followed by:
              525
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
              ><b-icon icon="eye-fill" class="violet"></b-icon> See All</span
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
      <b-col md="9" class="m-0 p-0 px-lg-4">
        <b-card class="px-md-3">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://profile.bridgeafrica.info/assets/img/wankue-filler.jpg"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="m-0 p-0">
              <b-form-textarea
                id="textarea-small"
                size="sm"
                class="mb-2"
                placeholder="Whats On Your, <Name Here> ?"
              ></b-form-textarea>
              <span class="float-left">
                <b-button-group size="sm" class="border-0 violet">
                  <b-button title="Add Image" size="sm" variant="light">
                    <b-icon
                      icon="card-image"
                      aria-hidden="true"
                      class="violet"
                    ></b-icon>
                  </b-button>
                  <b-button title="Add Movie" size="sm" variant="light">
                    <b-icon
                      icon="camera-video-fill"
                      aria-hidden="true"
                      class="violet"
                    ></b-icon>
                  </b-button>
                  <b-button title="Add Hyperlink" size="sm" variant="light">
                    <b-icon
                      icon="link-45deg"
                      aria-hidden="true"
                      class="violet"
                    ></b-icon>
                  </b-button>
                </b-button-group>
              </span>
              <span class="float-right">
                <b-button
                  variant="outline-primary"
                  size="sm"
                  class="border-none"
                >
                  Publish</b-button
                >
              </span>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="12" class="mt-4">
              <b-row>
                <div class="media">
                  <img
                    src="@/assets/img/wankue-filler.jpg"
                    alt="John Doe"
                    class="mr-2 rounded-circle avatar-size"
                  />
                  <div class="media-body">
                    <h4 class="mb-0">John Doe</h4>
                    <p>Lorem ipsum...</p>
                  </div>
                  <ul class="navbar-nav pull-right purple float-right my-auto">
                    <li class="nav-item dropdown">
                      <b-dropdown size="sm" class="" variant="link" toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                          <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'ellipsis-v']"
                          />
                        </template>
                        <b-dropdown-item href="#"> <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'edit']"
                        /> Edit</b-dropdown-item>
                        <b-dropdown-item href="#">
                          <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'trash-alt']"
                          /> Delete</b-dropdown-item>
                      </b-dropdown>
                    </li>
                  </ul>
                </div>
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
              <div class="col-md-12 pt-2 pb-2 m-0">
                <div class="post-footer">
                  <div class="input-group post-div">
                    <a class="pull-left pr-2" href="#">
                      <img
                        class="post-userim"
                        src="@/assets/img/photo1.jpg"
                        alt="avatar"
                      />
                    </a>
                    <input
                      placeholder="Post a Comment"
                      class="form-control adco comment"
                      type="text"
                    />

                    <fas-icon
                      class="primary send-cmt"
                      :icon="['fas', 'paper-plane']"
                    />
                  </div>
                  <ul class="comments-list allcomment pl-0 mt-4">
                    <li class="comment">
                      <a class="pull-left pr-4" href="#">
                        <img
                          class="post-userim"
                          src="@/assets/img/photo2.jpg"
                          alt="avatar"
                        />
                      </a>
                      <div class="comment-body">
                        <div class="comment-body-in">
                          <div class="comment-heading">
                            <div class="pull-left">
                              <h5 class="user">Gavino Free</h5>
                              <h5 class="time">5 minutes ago</h5>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries<span class="text-size">😛</span>
                          </p>
                        </div>
                        <div class="col-md-12 pt-2 pl-0 mb-3">
                          <b-icon
                            icon="suit-heart"
                            variant="primary"
                            aria-hidden="true"
                          ></b-icon>
                          23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
                        </div>
                      </div>
                      <ul class="comments-list">
                        <li class="comment">
                          <a class="pull-left pr-4" href="#">
                            <img
                              class="post-userim"
                              src="@/assets/img/photo2.jpg"
                              alt="avatar"
                            />
                          </a>
                          <div class="comment-body">
                            <div class="comment-body-in">
                              <div class="comment-heading">
                                <div class="pull-left">
                                  <h5 class="user">Gavino Free</h5>
                                  <h5 class="time">5 minutes ago</h5>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries<span class="text-size"
                                  >😛</span
                                >
                              </p>
                            </div>
                            <div class="col-md-12 pt-2 pl-0 mb-3">
                              <b-icon
                                icon="suit-heart"
                                variant="primary"
                                aria-hidden="true"
                              ></b-icon>
                              23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
                            </div>
                          </div>
                        </li>
                        <li class="comment">
                          <a class="pull-left pr-4" href="#">
                            <img
                              class="post-userim"
                              src="@/assets/img/photo2.jpg"
                              alt="avatar"
                            />
                          </a>
                          <div class="comment-body">
                            <div class="comment-body-in">
                              <div class="comment-heading">
                                <div class="pull-left">
                                  <h5 class="user">Gavino Free</h5>
                                  <h5 class="time">5 minutes ago</h5>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries<span class="text-size"
                                  >😛</span
                                >
                              </p>
                            </div>
                            <div class="col-md-12 pt-2 pl-0 mb-3">
                              <i
                                class="fa heart  fa-heart-o"
                                aria-hidden="true"
                              ></i>
                              23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
                            </div>
                          </div>
                        </li>
                        <div class="input-group post-div">
                          <a class="pull-left pr-4" href="#">
                            <img
                              class="post-userim"
                              src="@/assets/img/photo1.jpg"
                              alt="avatar"
                            />
                          </a>
                          <input
                            placeholder="Post a Comment"
                            class="form-control adco comment"
                            type="text"
                          />

                          <fas-icon
                            class="primary send-cmt"
                            :icon="['fas', 'paper-plane']"
                          />
                        </div>
                      </ul>
                    </li>
                  </ul>
                  <ul class="comments-list allcomment pl-0 mt-4">
                    <li class="comment">
                      <a class="pull-left pr-4" href="#">
                        <img
                          class="post-userim"
                          src="@/assets/img/photo2.jpg"
                          alt="avatar"
                        />
                      </a>
                      <div class="comment-body">
                        <div class="comment-body-in">
                          <div class="comment-heading">
                            <div class="pull-left">
                              <h5 class="user">Gavino Free</h5>
                              <h5 class="time">5 minutes ago</h5>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries<span class="text-size">😛</span>
                          </p>
                        </div>
                        <div class="col-md-12 pt-2 pl-0 mb-3">
                          <b-icon
                            icon="suit-heart"
                            variant="primary"
                            aria-hidden="true"
                          ></b-icon>
                          23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="12" class="mt-4">
              <b-row>
                <div class="media">
                  <img
                    src="@/assets/img/wankue-filler.jpg"
                    alt="John Doe"
                    class="mr-2 rounded-circle avatar-size"
                  />
                  <div class="media-body">
                    <h4 class="mb-0">John Doe</h4>
                    <p>Lorem ipsum...</p>
                  </div>
                  <ul class="navbar-nav pull-right purple float-right my-auto">
                    <li class="nav-item dropdown">
                      <b-dropdown size="sm" class="" variant="link" toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                          <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'ellipsis-v']"
                          />
                        </template>
                        <b-dropdown-item href="#"> <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'edit']"
                        /> Edit</b-dropdown-item>
                        <b-dropdown-item href="#">
                          <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'trash-alt']"
                          /> Delete</b-dropdown-item>
                      </b-dropdown>
                    </li>
                  </ul>
                </div>
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
              <div class="col-md-12 pt-2 pb-2 m-0">
                <div class="post-footer">
                  <div class="input-group post-div">
                    <a class="pull-left pr-2" href="#">
                      <img
                        class="post-userim"
                        src="@/assets/img/photo1.jpg"
                        alt="avatar"
                      />
                    </a>
                    <input
                      placeholder="Post a Comment"
                      class="form-control adco comment"
                      type="text"
                    />

                    <fas-icon
                      class="primary send-cmt"
                      :icon="['fas', 'paper-plane']"
                    />
                  </div>
                  <ul class="comments-list allcomment pl-0 mt-4">
                    <li class="comment">
                      <a class="pull-left pr-4" href="#">
                        <img
                          class="post-userim"
                          src="@/assets/img/photo2.jpg"
                          alt="avatar"
                        />
                      </a>
                      <div class="comment-body">
                        <div class="comment-body-in">
                          <div class="comment-heading">
                            <div class="pull-left">
                              <h5 class="user">Gavino Free</h5>
                              <h5 class="time">5 minutes ago</h5>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries<span class="text-size">😛</span>
                          </p>
                        </div>
                        <div class="col-md-12 pt-2 pl-0 mb-3">
                          <b-icon
                            icon="suit-heart"
                            variant="primary"
                            aria-hidden="true"
                          ></b-icon>
                          23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
                        </div>
                      </div>
                      <ul class="comments-list">
                        <li class="comment">
                          <a class="pull-left pr-4" href="#">
                            <img
                              class="post-userim"
                              src="@/assets/img/photo2.jpg"
                              alt="avatar"
                            />
                          </a>
                          <div class="comment-body">
                            <div class="comment-body-in">
                              <div class="comment-heading">
                                <div class="pull-left">
                                  <h5 class="user">Gavino Free</h5>
                                  <h5 class="time">5 minutes ago</h5>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries<span class="text-size"
                                  >😛</span
                                >
                              </p>
                            </div>
                            <div class="col-md-12 pt-2 pl-0 mb-3">
                              <b-icon
                                icon="suit-heart"
                                variant="primary"
                                aria-hidden="true"
                              ></b-icon>
                              23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
                            </div>
                          </div>
                        </li>
                        <li class="comment">
                          <a class="pull-left pr-4" href="#">
                            <img
                              class="post-userim"
                              src="@/assets/img/photo2.jpg"
                              alt="avatar"
                            />
                          </a>
                          <div class="comment-body">
                            <div class="comment-body-in">
                              <div class="comment-heading">
                                <div class="pull-left">
                                  <h5 class="user">Gavino Free</h5>
                                  <h5 class="time">5 minutes ago</h5>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries<span class="text-size"
                                  >😛</span
                                >
                              </p>
                            </div>
                            <div class="col-md-12 pt-2 pl-0 mb-3">
                              <i
                                class="fa heart  fa-heart-o"
                                aria-hidden="true"
                              ></i>
                              23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
                            </div>
                          </div>
                        </li>
                        <div class="input-group post-div">
                          <a class="pull-left pr-4" href="#">
                            <img
                              class="post-userim"
                              src="@/assets/img/photo1.jpg"
                              alt="avatar"
                            />
                          </a>
                          <input
                            placeholder="Post a Comment"
                            class="form-control adco comment"
                            type="text"
                          />

                          <fas-icon
                            class="primary send-cmt"
                            :icon="['fas', 'paper-plane']"
                          />
                        </div>
                      </ul>
                    </li>
                  </ul>
                  <ul class="comments-list allcomment pl-0 mt-4">
                    <li class="comment">
                      <a class="pull-left pr-4" href="#">
                        <img
                          class="post-userim"
                          src="@/assets/img/photo2.jpg"
                          alt="avatar"
                        />
                      </a>
                      <div class="comment-body">
                        <div class="comment-body-in">
                          <div class="comment-heading">
                            <div class="pull-left">
                              <h5 class="user">Gavino Free</h5>
                              <h5 class="time">5 minutes ago</h5>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries<span class="text-size">😛</span>
                          </p>
                        </div>
                        <div class="col-md-12 pt-2 pl-0 mb-3">
                          <b-icon
                            icon="suit-heart"
                            variant="primary"
                            aria-hidden="true"
                          ></b-icon>
                          23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="12" class="mt-4">
              <b-row>
                <div class="media">
                  <img
                    src="@/assets/img/wankue-filler.jpg"
                    alt="John Doe"
                    class="mr-2 rounded-circle avatar-size"
                  />
                  <div class="media-body">
                    <h4 class="mb-0">John Doe</h4>
                    <p>Lorem ipsum...</p>
                  </div>
                  <ul class="navbar-nav pull-right purple float-right my-auto">
                    <li class="nav-item dropdown">
                      <b-dropdown size="sm" class="" variant="link" toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                          <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'ellipsis-v']"
                          />
                        </template>
                        <b-dropdown-item href="#"> <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'edit']"
                        /> Edit</b-dropdown-item>
                        <b-dropdown-item href="#">
                          <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'trash-alt']"
                          /> Delete</b-dropdown-item>
                      </b-dropdown>
                    </li>
                  </ul>
                </div>
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
              </b-row>
              <div class="input-group post-div mt-2">
                <a class="pull-left pr-2" href="#">
                  <img
                    class="post-userim"
                    src="@/assets/img/photo1.jpg"
                    alt="avatar"
                  />
                </a>
                <input
                  placeholder="Post a Comment"
                  class="form-control adco comment"
                  type="text"
                />

                <fas-icon
                  class="primary send-cmt"
                  :icon="['fas', 'paper-plane']"
                />
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import "@morioh/v-lightbox/dist/lightbox.css";

export default {
  name: "posts",
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

<style>
.action-intro {
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.text-size {
  font-size: 14px;
}

.color-site {
  color: #e75c18;
}

.pull-left {
  float: left;
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
.send-cmt {
  position: relative;
  margin-left: 95%;
  top: -28px;
  cursor: pointer;
}
</style>
