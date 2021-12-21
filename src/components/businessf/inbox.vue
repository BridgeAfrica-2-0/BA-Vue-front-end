<template>
  <div>

    <b-container>
      <div class="chat-box">
        <b-row>
          <!-- Mobile -->
          <b-col class="pr-0" cols="12" xl="4" v-if="show">
            <div class="right-mobile">

              <b-row>
                <b-col>
                  <b-avatar
                    class="d-inline-block profile-pic"
                    variant="primary"
                    src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
                    square
                  ></b-avatar>
                </b-col>
                <b-col>

                  <h3 class="">{{ $t("businessf.Messages") }}</h3>

                </b-col>
                <b-col>
                  <b-icon
                    @click="newMessage(true)"
                    class="new-message primary icon-size m-10 float-right"
                    icon="pencil-square"
                  ></b-icon>
                </b-col>
              </b-row>
              <b-container>
                <input
                  type="text"
                  class="form-control input-background"
                  :placeholder=" $t('general.Search_inbox') "
                />
              </b-container>
            </div>
            <div>
              <div class="messages-mobile">
                <b-row
                  v-for="message in messages"
                  :key="message.id"
                  class="p-2 message"
                  @click="showMessages(false)"
                >
                  <b-col class="col-10">
                    <span style="display: inline-flex mb-2">
                      <b-avatar
                        class="d-inline-block profile-pic"
                        variant="primary"
                        src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                      ></b-avatar>

                      <h6 class="d-inline-block ml-2">
                        <b class="bold"> {{ message.name }}</b>
                        <p class="duration">{{ message.startMessage }}</p>
                      </h6>
                    </span>
                  </b-col>

                  <b-col class="col-2 text-center">
                    <small> {{ message.timeStamp }} </small>
                    <p class="">
                      <b-badge variant="info">
                        {{ message.messageCount }}
                      </b-badge>
                    </p>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <!-- ---- -->

          <b-col class="pr-0">
            <div class="right">
              <b-row>
                <b-col class="p-2">
                  <b-avatar
                    class="d-inline-block profile-pic"
                    variant="primary"
                    src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
                    square
                  ></b-avatar>
                </b-col>
                <b-col>
                  <h1 class="mt-4 title text-bold">
                    {{
                      currentBiz ? currentBiz.name.split(" ")[0] : "loading..."
                    }}
                  </h1>

                </b-col>
                <b-col>
                  <b-dropdown
                    variant="white"
                    toggle-class="text-decoration-none"
                    no-caret
                    class="new-message"
                  >
                    <template #button-content>
                      <b-icon
                        class="primary icon-size float-right"
                        icon="pencil-square"
                        @click="this.newMsg = !this.newMsg"
                      ></b-icon>
                    </template>
                    <b-dropdown-item @click="newMessage(true)">
                      {{ $t("general.New_Chat") }}</b-dropdown-item
                    >
                    <b-dropdown-item @click="newMessage(true)">
                      {{ $t("general.New_Group_Chat") }}
                    </b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>

              <b-row class="mt-12">
                <b-col>
                  <b-tabs
                    v-model="tabIndex"
                    content-class="mt-12 ma-4 pt-6"
                    fill
                  >
                    <b-tab title="Users" @click="getChatList({ type: 'user' })">
                      <!-- Users Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background"
                            :placeholder="`$t('general.Search_chat_list')  ${tabIndex}`"
                            @keypress.enter="
                              getChatList({
                                type: 'user',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      <div class="messages">
                        <div v-if="loader" class="text-center">
                          <b-spinner
                            variant="primary"
                            label="Spinning"
                            class="centralizer"
                          ></b-spinner>
                        </div>
                        <div v-if="chatList.length > 0">
                          <b-row
                            v-for="(chat, index) in chatList"
                            :key="index"
                            :class="[
                              'p-2 message ',
                              {
                                messageSelected:
                                  chat.receiver_id ==
                                  (chatSelected.clickedId != null
                                    ? chatSelected.clickedId
                                    : false)
                                    ? chatSelected.active
                                    : false,
                              },
                            ]"
                            @click="
                              selectedChat({
                                type: 'user',
                                chat: chat,
                                id: chat.receiver_id,
                              })
                            "
                          >
                            <b-col class="col-9">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="primary"
                                  src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ chat.name }}</b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-3 text-center">
                              <small class="text-center">
                                {{ getCreatedAt(chat.created_at) }}
                              </small>
                              <!-- <p class="text-center">
                              <b-badge variant="info">
                                {{ chat.receiver_id }}
                              </b-badge>
                            </p> -->
                            </b-col>
                          </b-row>
                        </div>
                        <h2 v-else>{{ $t("general.No_chat") }}</h2>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                    <b-tab
                      title="Business"
                      @click="getChatList({ type: 'business' })"
                    >
                      <!-- Business Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background"
                            :placeholder="`$t('general.Search_chat_list') ${tabIndex}`"
                            @keypress.enter="
                              getChatList({
                                type: 'business',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      <div class="messages">
                        <div v-if="loader" class="text-center">
                          <b-spinner
                            variant="primary"
                            label="Spinning"
                            class="centralizer"
                          ></b-spinner>
                        </div>
                        <div v-if="chatList.length > 0">
                          <b-row
                            v-for="(chat, index) in chatList"
                            :key="index"
                            :class="[
                              'p-2 message ',
                              {
                                messageSelected:
                                  chat.receiver_business_id ==
                                  (chatSelected.clickedId != null
                                    ? chatSelected.clickedId
                                    : false)
                                    ? chatSelected.active
                                    : false,
                              },
                            ]"
                            @click="
                              selectedChat({
                                type: 'business',
                                chat: chat,
                                id: chat.receiver_business_id,
                              })
                            "
                          >
                            <b-col class="col-9">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="primary"
                                  src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ chat.name }}</b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-3 text-center">
                              <small class="text-center">
                                {{ getCreatedAt(chat.created_at) }}
                              </small>
                              <!-- <p class="text-center">
                              <b-badge variant="info">
                                {{ chat.receiver_business_id }}
                              </b-badge>
                            </p> -->
                            </b-col>
                          </b-row>
                        </div>
                        <h2 v-else>{{ $t("general.No_chat") }}</h2>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                    <b-tab
                      title="Network"
                      @click="getChatList({ type: 'network' })"
                    >
                      <!-- network Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background"
                            :placeholder="` $t('general.'Search_chat_list)  ${tabIndex}`"
                            @keypress.enter="
                              getChatList({
                                type: 'network',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      <div class="messages">
                        <div v-if="loader" class="text-center mt-12 pt-12">
                          <b-spinner
                            variant="primary"
                            label="Spinning"
                            class="centralizer"
                          ></b-spinner>
                        </div>
                        <b-row
                          v-else
                          v-for="(chat, index) in chatList"
                          :key="index"
                          :class="[
                            'p-2 message ',
                            {
                              messageSelected:
                                chat.receiver_network_id ==
                                (chatSelected.clickedId != null
                                  ? chatSelected.clickedId
                                  : false)
                                  ? chatSelected.active
                                  : false,
                            },
                          ]"
                          @click="
                            selectedChat({
                              type: 'network',
                              chat: chat,
                              id: chat.receiver_network_id,
                            })
                          "
                        >
                          <b-col class="col-9">
                            <span style="display: inline-flex">
                              <b-avatar
                                class="d-inline-block profile-pic"
                                variant="primary"
                                src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                              ></b-avatar>

                              <h6 class="mt-2 d-inline-block ml-2">
                                <b class="bold"> {{ chat.name }}</b>
                                <p class="duration">{{ chat.message }}</p>
                              </h6>
                            </span>
                          </b-col>

                          <b-col class="col-3 text-center">
                            <small class="text-center">
                              {{ getCreatedAt(chat.created_at) }}
                            </small>
                            <!-- <p class="text-center">
                              <b-badge variant="info">
                                {{ chat.receiver_network_id }}
                              </b-badge>
                            </p> -->
                          </b-col>
                        </b-row>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                    <b-tab
                      :title="$t('general.Groups')"
                      @click="getChatList({ type: 'group' })"
                    >
                      <!-- Business Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background"
                            :placeholder="`$t('general.Search_chat_list') ${tabIndex}`"
                            @keypress.enter="
                              getChatList({
                                type: 'business',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      <div class="messages">
                        <div v-if="loader" class="text-center">
                          <b-spinner
                            variant="primary"
                            label="Spinning"
                            class="centralizer"
                          ></b-spinner>
                        </div>
                        <div v-if="chatList.length > 0">
                          <b-row
                            v-for="(chat, index) in chatList"
                            :key="index"
                            :class="[
                              'p-2 message ',
                              {
                                messageSelected:
                                  chat.receiver_business_id ==
                                  (chatSelected.clickedId != null
                                    ? chatSelected.clickedId
                                    : false)
                                    ? chatSelected.active
                                    : false,
                              },
                            ]"
                            @click="
                              selectedChat({
                                type: 'business',
                                chat: chat,
                                id: chat.receiver_business_id,
                              })
                            "
                          >
                            <b-col class="col-9">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="primary"
                                  src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ chat.name }}</b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-3 text-center">
                              <small class="text-center">
                                {{ getCreatedAt(chat.created_at) }}
                              </small>
                              <!-- <p class="text-center">
                              <b-badge variant="info">
                                {{ chat.receiver_business_id }}
                              </b-badge>
                            </p> -->
                            </b-col>
                          </b-row>
                        </div>
                        <h2 v-else>{{ $t("general.No_chat") }}</h2>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                  </b-tabs>

                </b-col>
              </b-row>
            </div>
          </b-col>

          <!-- selected Chat  -->
          <b-col
            v-if="newMsg == false && info == false"
            class="p-0 back-image"
            cols="12"
            xl="8"
            style="margin-right: 14px"
          >
            <div>
              <div class="chat-nav shadow">
                <b-row class="mobile">
                  <b-col class="col-1">
                    <b-icon
                      @click="showMessages(true)"
                      icon="arrow-left"
                      aria-hidden="true"
                      class="primary"
                    ></b-icon>
                  </b-col>
                  <b-col class="col-3">
                    <b-avatar
                      variant="primary"
                      src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                      size="40"
                    ></b-avatar>
                  </b-col>

                  <b-col class="detale">
                    <h6>{{ chatSelected.name }}</h6>
                    <!-- <small>Online </small> -->
                  </b-col>
                  <b-col cols="3">
                    <b-row class="mt-3">
                      <b-col class="col-3">
                        <b-icon icon="search" class="primary"></b-icon>
                      </b-col>
                      <b-col class="col-3">
                        <b-icon
                          icon="three-dots"
                          @click="showInfo(true)"
                          aria-hidden="true"
                          class="primary"
                        ></b-icon>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <b-row class="desk" v-if="chatSelected.active">
                  <b-col class="col-2" @click="info = true">
                    <b-avatar
                      variant="primary"
                      src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                      size="60"
                    ></b-avatar>
                  </b-col>

                  <b-col class="detail" @click="info = true">
                    <h5>{{ chatSelected.name }}</h5>
                    <!-- <p>Online</p> -->
                  </b-col>
                  <b-col class="col-4">
                    <input
                      v-model="chatSearchKeyword"
                      @keypress.enter="
                        histBizToBiz({
                          type: type,
                          receiverID: chatId,
                          keyword: chatSearchKeyword,
                        })
                      "
                      type="text"
                      class="form-control input-background mb-6 pb-6"
                      :placeholder="$t('general.Search_message') "
                    />
                  </b-col>
                  <b-col class="col-3">
                    <b-row class="mt-3 ml-5">
                      <b-col class="col-3">
                        <b-icon
                          @click="
                            histBizToBiz({
                              type: type,
                              receiverID: chatId,
                              keyword: chatSearchKeyword,
                            })
                          "
                          class="msg-icon primary icon-size"
                          icon="search"
                          style="cursor: pointer"
                        ></b-icon>
                      </b-col>

                      <b-col>
                        <b-dropdown
                          id="dropdown-1"
                          class="mt-md-0 drop-hover"
                          no-caret
                          dropleft
                          variant="outline-light"
                        >
                          <template #button-content>
                            <b-icon-three-dots
                              class="primary"
                            ></b-icon-three-dots>
                          </template>

                          <b-dropdown-item-button @click="showInfo(true)">
                            {{ $t("general.View_Profile") }}
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            {{ $t("general.Disable_Notification") }}
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            {{ $t("general.Delete_Contact") }}
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            {{ $t("general.Delete_Chat") }}
                          </b-dropdown-item-button>
                        </b-dropdown>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <!-- <b-row class="desk" v-else>
                  <b-col class="col-2" @click="info = true">
                    <b-avatar
                      variant="primary"
                      src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                      size="60"
                    ></b-avatar>
                  </b-col>
                  <b-col class="detail" @click="info = true">
                    <h5>General Chat</h5>
                     <p>Online({{online.length}})</p> 
                  </b-col>
                  <b-col class="col-4">
                    <b-row class="mt-3 ml-5">
                      <b-col class="col-3">
                        <b-icon
                          class="msg-icon primary icon-size"
                          icon="search"
                        ></b-icon>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row> -->
              </div>

              <section
                v-if="chatSelected.active"
                class="chats"
                style="margin-left: 1px"
                ref="feed"
              >
                <div v-if="loader" class="text-center mt-12 pt-12">
                  <b-spinner
                    variant="primary"
                    label="Spinning"
                    class="spinner centralizer"
                  ></b-spinner>
                </div>
                <div v-else v-for="chat in chats" :key="chat.id">
                  <!-- {{ chat }}<br /> -->
                  <div v-if="currentBiz.id != chat.sender_business_id">
                    <b-row class="p-4">
                      <b-col>
                        <p
                          v-if="chat.attachment"
                          class="msg-text mt-0 text"
                        ></p>
                        <br />
                        <p v-if="chat.message" class="msg-text mt-0 text">
                          <span v-if="chat.attachment">
                            <img :src="chat.attachment" />
                            <!-- <br />
                            <b>{{ chat.attachment }}</b> -->
                            <br />
                          </span>
                          {{ chat.message }}
                          <small class="float-right mt-2 text-white pr-1 pt-1">
                            {{ getCreatedAt(chat.created_at) }}
                          </small>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-else>
                    <b-row class="p-4">
                      <b-col>
                        <p
                          v-if="chat.message"
                          id="sent"
                          class="msg-text-sent text"
                        >
                          <span v-if="chat.attachment">
                            <img :src="chat.attachment" />
                            <!-- <br />
                            <b>{{ chat.attachment }}</b> -->
                            <br />
                          </span>
                          {{ chat.message }}
                          <small class="float-right mt-2 text-white pr-1 pt-1">
                            {{ getCreatedAt(chat.created_at) }}
                          </small>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </section>

              <!-- <section v-else class="chats" style="margin-left: 1px" ref="feed">
                <div v-for="(message, index) in messages" :key="index">
                  <div v-if="message.sender != currentUser.user.name">
                    <b-row class="p-4">
                      <b-col>
                        <p class="msg-text mt-0 text">
                          <b>{{ message.sender }}</b
                          >: {{ message.message }}
                          <small class="float-right mt-2 text-white pr-1 pt-1">
                            {{ getCreatedAt(message.date) }}
                          </small>
                        </p>
                      </b-col>
                    </b-row>
                  </div>

                  <div v-else>
                    <b-row class="p-4">
                      <b-col>
                        <p id="sent" class="msg-text-sent text">
                          <b>Me</b>: {{ message.message }}
                          <small class="float-right mt-2 text-white pr-1 pt-1">
                            {{ getCreatedAt(message.date) }}
                          </small>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </section> -->

              <section v-else class="chats" style="margin-left: 1px" ref="feed">
                <div class="mt-12 pt-12">
                  <h1 class="text-center">{{ $t("general.Select_a_chat") }}</h1>
                </div>
              </section>

              <div class="bottom">
                <b-row class="text-center">
                  <!-- <p class="py-2 text-primary" v-if="this.file">
                    {{ this.file.name }} <b class="text-bold">{{ convert(this.file.size) }}</b>
                  </p> -->
                  <b-alert
                    :show="this.filePreview"
                    class="mt-4"
                    variant="warning"
                    dismissible
                    @dismissed="dismissed"
                  >
                    <span style="cursor:pointer !important" href="" @click="$bvModal.show('preview-file')">
                      {{ this.file.name
                      }}<b class="pl-2 text-bold">{{
                        convert(this.file.size)
                      }}</b>
                    </span>
                  </b-alert>
                </b-row>
                <b-row v-if="!checked">
                  <b-col cols="2" class="p-0">
                    <label for="file">
                      <b-icon
                        for="file"
                        class="
                          msg-icon
                          primary
                          icon-size icon-top
                          float-right
                          text-right
                        "
                        icon="paperclip"

                      >
                      </b-icon>
                      <i class="ion-images"></i>
                      <input
                        style="display: none"
                        type="file"
                        id="file"
                        ref="file"
                        @change="handleFileUpload()"
                      />
                    </label>

                    <!-- <button v-on:click="submitFile()">Submit</button> -->
                  </b-col>
                  <b-col cols="8" class="p-0">
                    <b-form-input
                      id="textarea"
                      v-model="input"
                      @keypress.enter="send"
                      class="input-background"
                      placeholder="Enter a message..."
                    ></b-form-input>

                    <div class="wrapper">
                      <emoji-picker @emoji="append" :search="search">
                        <div
                          class="emoji-invoker"
                          slot="emoji-invoker"
                          slot-scope="{ events: { click: clickEvent } }"
                          @click.stop="clickEvent"
                        >
                          <svg
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            class="svgg"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                            />
                          </svg>
                        </div>
                        <div
                          slot="emoji-picker"
                          slot-scope="{ emojis, insert, display }"
                        >
                          <div
                            class="emoji-picker"
                            :style="{
                              top: display.y + 'px',
                              left: display.x + 'px',
                            }"
                          >
                            <div class="emoji-picker__search">
                              <input type="text" v-model="search" v-focus />
                            </div>
                            <div>
                              <div
                                v-for="(emojiGroup, category) in emojis"
                                :key="category"
                              >
                                <h5>{{ category }}</h5>
                                <div class="emojis">
                                  <span
                                    v-for="(emoji, emojiName) in emojiGroup"
                                    :key="emojiName"
                                    @click="insert(emoji)"
                                    :title="emojiName"
                                    >{{ emoji }}</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </emoji-picker>
                    </div>
                  </b-col>

                  <b-col cols="2" class="p-0">
                    <b-icon
                      @click="send"
                      class="ml-12 pl-12 msg-icon primary icon-size icon-top"
                      icon="cursor-fill"
                    ></b-icon>
                  </b-col>
                </b-row>

                <!-- <p v-if="checked" class="ml-5">
                  You have blocked messages and calls from this user.
                  <b-link @click="showInfo(true)">Unblock Now</b-link>
                </p> -->
              </div>

            </div>
          </b-col>
          <!-- End selected Chat -->

          <b-col v-if="info">
            <div class="info-nav">
              <b-button class="primary-bg" @click="showInfo(false)">
                <fas-icon :icon="['fas', 'arrow-left']" />
              </b-button>

              <span class="cnt-info"> {{ $t("businessf.Contact_Info") }}</span>
            </div>
            <div class="info-bottom">
              <b-avatar
                class="info-avatar"
                variant="primary"
                src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                size="200"
              ></b-avatar>
              <div class="info-detail">
                <h1 class="info-name">{{ receiver.name }}</h1>
                <b-link class="primary">View Profile</b-link>

              </div>
            </div>
            <div>
              <ul>
                <li>{{ $t("general.Options") }}</li>
                <li>
                  <b-row
                    ><b-col> {{ $t("general.Block_Messages") }} </b-col>
                    <b-col>
                      <b-form-checkbox
                        v-model="checked"
                        name="check-button"
                        class="primary"
                        switch
                      >
                      </b-form-checkbox>
                    </b-col>
                  </b-row>
                </li>

                <li> {{ $t("general.Report_User") }}</li>
              </ul>
            </div>

          </b-col>

          <!-- New message -->
          <b-col
            v-if="newMsg == true && info == false"
            class="p-0 col-xl-8 col-12"
          >
            <div class="new-msg back-image" style="margin-right: 17px">
              <div class="info-nav">
                <b-row>
                  <b-col class="col-1 mt-3"> {{ $t("general.To") }} </b-col>
                  <b-col>
                    <b-form-input
                      id="textarea"
                      v-model="searchQuery"
                      class="input-background"
                      style="width: 100%"
                      :placeholder="$t('general.Type_the_name_of_person_or_Business')"
                      @keydown.enter="getAll(searchQuery)"
                    ></b-form-input>

                    <br />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="new-msg-filter-list">
                      <div v-if="loader" class="text-center mt-6 pt-6">
                        <b-spinner
                          variant="primary"
                          label="Spinning"
                        ></b-spinner>
                      </div>
                      <table v-else class="table">
                        <b-row style="overflow-x: hidden !important">
                          <b-col>
                            <b-form-checkbox
                              id="all"
                              v-model="allSelectedMulty"
                              name="all"
                              value="accepted"
                              @change="selectedAllMulty"
                            >
                              {{ $t("general.All") }}
                            </b-form-checkbox>
                          </b-col>
                          <b-col>
                            <b-form-checkbox
                              id="people"
                              v-model="peopleMulty"
                              name="people"
                              @change="peopleMulty"
                            >
                              {{ $t("general.People") }}
                            </b-form-checkbox>
                          </b-col>

                          <b-col>
                            <b-form-checkbox
                              id="business"
                              v-model="businessMulty"
                              name="business"
                              @change="businessAllMulty"
                            >
                              {{ $t("general.Business") }}
                            </b-form-checkbox>
                          </b-col>
                          <b-col>
                            <b-form-checkbox
                              id="networks"
                              name="networks"
                              v-model="networkMulty"
                              @change="networkAllMulty"
                            >
                             {{ $t("general.Network") }} 
                            </b-form-checkbox>
                          </b-col>
                          <!--

                          <b-col>
                            <b-form-checkbox
                              id="editors"
                              v-model="status"
                              name="editors"
                              value="accepted"
                              unchecked-value="not_accepted"
                            >
                              Editors
                            </b-form-checkbox>
                          </b-col>
                          <b-col>
                            <b-form-checkbox
                              id="members"
                              v-model="status"
                              name="members"
                              value="accepted"
                              unchecked-value="not_accepted"
                            >
                              Members
                            </b-form-checkbox>
                          </b-col> -->
                        </b-row>
                        {{
                          selectedMulty
                        }}
                        <!-- <b-row class="new-msg-filter-list"> -->
                        <tbody v-if="allSelection">
                          <!-- <tr
                              v-for="(biz, index) in bizs"
                              :key="index"
                              class="p-2 message"
                              @click="selectedChat({ chat: biz, id: biz.id })"
                            > -->
                          <h2>{{ $t("general.All") }}</h2>
                          <tr
                            v-for="(elmt, index) in all"
                            :key="index"
                            class="p-2 message"
                          >
                            <td>
                              <b-form-group>
                                <b-form-checkbox-group
                                  id="checkbox-group-2"
                                  v-model="selectedMulty"
                                  name="flavour-2"
                                >
                                  <b-form-checkbox
                                    :id="index + '_id'"
                                    :name="elmt.name"
                                    :value="elmt.id"
                                  >
                                    <b-avatar
                                      class="d-inline-block"
                                      variant="primary"
                                      size="30"
                                    ></b-avatar>
                                    <span class="bold"> {{ elmt.name }} </span>
                                  </b-form-checkbox>
                                </b-form-checkbox-group>
                              </b-form-group>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-else>
                          <tr
                            v-for="(biz, index) in bizs"
                            :key="index"
                            class="p-2 message"
                          >
                            <td>
                              <b-form-group>
                                <b-form-checkbox-group
                                  id="checkbox-group-2"
                                  v-model="selectedMulty"
                                  name="flavour-2"
                                >
                                  <b-form-checkbox
                                    :id="index + '_id'"
                                    :name="biz.name"
                                    :value="biz.id"
                                  >
                                    <b-avatar
                                      class="d-inline-block"
                                      variant="primary"
                                      size="30"
                                    ></b-avatar>
                                    <span class="bold"> {{ biz.name }} </span>
                                  </b-form-checkbox>
                                </b-form-checkbox-group>
                              </b-form-group>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <b-button
                      block
                      variant="primary"
                      @click="$bvModal.show('group-name')"
                      :disabled="selectedMulty.length ? false : true"
                      >{{ $t("general.Next") }}</b-button
                    >
                    <!-- <b-button
                      class="float-left"
                      variant="primary"
                      @click="selectedMultyChat()"
                      :disabled="selectedMulty.length ? false : true"
                      ><b-icon
                        icon="arrow-left"
                        class="text-bold"
                        variant="white"
                      ></b-icon
                    ></b-button> -->
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>


      <!-- Modals -->
      <!-- create group -->
      <b-modal id="group-name" hide-footer>
        <div class="d-block text-center">
          <h3>The Group Name:</h3>
          <b-form-input
            v-model="groupName"
            @keypress.enter="selectedMultyChat()"
            id="input-large"
            size="lg"
            autofocus
            :placeholder="$t('general.Enter_your_name')"
          ></b-form-input>
        </div>

        <b-button class="mt-3" block @click="selectedMultyChat()"
          >Create</b-button
        >
      </b-modal>
      <!-- preview -->
      <b-modal id="preview-file" hide-footer>
        <div class="d-block text-center">
          <h3>{{ $t("general.Preview_file") }}:</h3>
          <b-img thumbnail fluid :src="previewSrc" id="filePreview"></b-img>
        </div>
      </b-modal>
    </b-container>

  </div>
</template>

<script>

import EmojiPicker from "vue-emoji-picker";
import io from "socket.io-client";
import moment from "moment";

export default {
  components: {
    EmojiPicker,
  },
  data() {
    return {
      formData: new FormData(),
      groupName: "",
      allSelection: true,
      allSelectedMulty: false,
      peopleMulty: false,
      businessMulty: false,
      networkMulty: false,

      selectedMulty: [],
      peopleSelectedAllMulty: [],
      businessSelectedAllMulty: [],
      networkSelectedAllMulty: [],

      filePreview: false,
      previewSrc: "",
      file: "",
      room: "",
      online: [],
      input: "",
      search: "",
      chatSearchKeyword: "",
      tabIndex: 2,
      type: "",
      // socket: io("https://ba-chat-server.herokuapp.com", {
      //   transports: ["websocket", "polling", "flashsocket"],
      // }),
      socket: io("localhost:7000", {
        transports: ["websocket", "polling", "flashsocket"],
      }),
      chatSelected: [],
      showsearch: true,
      selecteduser: false,
      searchQuery: "",
      resources1: [
        { title: "ABE Attendance", uri: "aaaa.com", category: "a", icon: null },
        {
          title: "Accounting Services",
          uri: "aaaa.com",
          category: "a",
          icon: null,
        },
        { title: "Administration", uri: "aaaa.com", category: "a", icon: null },
        {
          title: "Advanced Student Lookup",
          uri: "bbbb.com",
          category: "b",
          icon: null,
        },
        { title: "Art & Sciences", uri: "bbbb.com", category: "b", icon: null },
        {
          title: "Auxiliares Services",
          uri: "bbbb.com",
          category: "b",
          icon: null,
        },
        { title: "Basic Skills", uri: "cccc.com", category: "c", icon: null },
        {
          title: "Board of Trustees",
          uri: "dddd.com",
          category: "d",
          icon: null,
        },
      ],
      resources: [
        {
          name: "blezour blec",
          profile:
            "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
          type: "person",
          id: "1",
        },
        {
          name: "itz blec blec",
          profile:
            "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
          type: "person",
          id: "2",
        },

        {
          name: "Maxine Moffet",
          profile:
            "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
          type: "person",
          id: "3",
        },

        {
          name: "Alicia kays",
          profile:
            "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
          type: "person",
          id: "4",
        },

        {
          name: "Lorem Ipsum",
          profile:
            "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
          type: "person",
          id: "5",
        },
        {
          name: "blezour blec",
          profile:
            "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
          type: "person",
          id: "6",
        },
      ],
      message: {},
      newMsg: false,
      show: false,
      info: false,
      checked: false,
      text: "",
      selected: [],
      messages: null,
    };
  },
  computed: {
    all() {
      return this.$store.getters["businessChat/getAll"];
    },
    allNetworks() {
      return this.$store.getters["businessChat/getAllNetworks"];
    },
    allUsers() {
      return this.$store.getters["businessChat/getAllUsers"];
    },
    allBusiness() {
      return this.$store.getters["businessChat/getAllBusinesses"];
    },

    ctaSelected() {
      return this.$store.getters["businessChat/getSelectedChat"];
    },
    chatId() {
      return this.$store.getters["businessChat/getSelectedChatId"];
    },
    currentBizId() {
      return this.$store.getters["businessChat/getCurrentBizId"];
    },
    currentBiz() {
      return this.$store.getters["businessChat/getCurrentBiz"][0];
    },

    bizs() {
      return this.$store.getters["businessChat/getBizs"];
    },
    chatList() {
      return this.$store.getters["businessChat/getChatList"];
    },

    currentUser() {
      // return this.$store.getters['userChat/getUser'];
      return this.$store.getters["auth/profilConnected"];
    },
    users() {
      return this.$store.getters["userChat/getUsers"];
    },
    chats() {
      return this.$store.getters["businessChat/getChats"];
    },

    loader() {
      return this.$store.getters["businessChat/getLoader"];
    },
    receiver() {
      return this.chats[0] ? this.chats[0].receiver : "";
    },
    resultQuery() {
      if (this.searchQuery) {
        return this.users.filter((user) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => user.name.toLowerCase().includes(v));
        });
      } else {
        return this.users.data;
      }
    },
  },
  mounted() {
    if (this.chatList.length < 0) {
      this.getChatList({ type: "business" });
    }
    this.getAll();
    this.getBizs();
  },
  created() {
    this.socketListenners();

    this.$store.commit(
      "businessChat/setCurrentBizId",
      Number(this.$route.params.id)
    );
    console.log("router params:", this.currentBizId);
    this.tabIndex = this.$route.query.msgTabId
      ? this.$route.query.msgTabId
      : false;
    if (this.tabIndex != false) {
      if (this.tabIndex == 1) {
        this.getChatList({ type: "business" });
      } else if (this.tabIndex == 2) {
        this.getChatList({ type: "network" });
      } else {
        this.tabIndex = 0;
        this.getChatList({ type: "user" });
      }

      this.selectedChat({ chat: this.ctaSelected, id: this.ctaSelected.id });
    } else {
      // alert("hey")
      this.tabIndex = 1;
      this.getChatList({ type: "business" });
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  methods: {
    convert(bytes) {
      var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes == 0) return "0 Byte";
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
    },
    selectedAllMulty() {
      this.allSelection = true;
      this.selectedMulty = [];
      if (this.allSelectedMulty) {
        this.all.map((biz) => {
          this.selectedMulty.push(biz.id);
        });
      } else {
        this.selectedMulty = [];
      }
    },
    peopleAllMulty() {
      // this.bizs = this.allUsers;
      this.allSelection = false;
      this.$store.commit("businessChat/setBizs", this.allUsers);

      this.selectedMulty = [];
      if (this.peopleMulty) {
        this.bizs.map((biz) => {
          this.selectedMulty.push(biz.id);
        });
      } else {
        this.selectedMulty = [];
      }
    },
    businessAllMulty() {
      // this.bizs = this.allBusiness;
      this.$store.commit("businessChat/setBizs", this.allBusiness);

      this.allSelection = false;

      this.selectedMulty = [];
      if (this.businessMulty) {
        this.bizs.map((biz) => {
          this.selectedMulty.push(biz.id);
        });
      } else {
        this.selectedMulty = [];
      }
    },
    networkAllMulty() {
      // this.bizs = this.allNetworks;
      this.$store.commit("businessChat/setBizs", this.allNetworks);

      this.allSelection = false;

      this.selectedMulty = [];
      if (this.networkMulty) {
        this.bizs.map((biz) => {
          this.selectedMulty.push(biz.id);
        });
      } else {
        this.selectedMulty = [];
      }
    },

    dismissed() {
      this.file = "";
      this.filePreview = false;
    },
    socketListenners() {
      console.log("listenning...");
      // this.socket.on("generalMessage", (data) => {
      //   console.log("Received");
      //   console.log(data);
      //   this.messages.push(data);
      // });
      this.socket.on("groupMessage", (data) => {
        console.log("group message Received");
        console.log(data);
        this.chats.push(data);
        let elmts = {
          type: this.type,
          message: data.message,
          sender_business_id: this.currentBiz.id,
          receiver_business_id: this.chatSelected.id,
          receiver_network_id: this.chatSelected.id,
          receiver_id: this.chatId,
        };

        // this.saveMessage(elmts);
      });
      this.socket.on("privateMessage", (data) => {
        console.log("Received");
        console.log(data);
        this.chats.push(data);
        console.log(this.chats);

        this.formData.append("sender_business_id", data.sender_business_id);
        this.formData.append("message", data.message);
        this.formData.append("receiver_business_id", data.receiver_business_id);
        this.formData.append("receiver_network_id", data.receiver_business_id);
        this.formData.append("receiver_id", data.receiver_business_id);
        this.formData.append("type", data.type);

        this.saveMessage(this.formData);
      });
    },
    createGroup(receiver_business_id) {
      // let sender_business_id = this.currentUser.user.id;
      let sender_business_id = this.currentBizId;
      this.room = [sender_business_id, ...this.selectedMulty];
      console.log("ROOMS: ", this.room);
      this.socket.emit("create-group", sender_business_id);
    },
    createRoom(receiver_business_id) {
      // let sender_business_id = this.currentUser.user.id;
      let sender_business_id = this.currentBizId;
      this.room = [receiver_business_id, sender_business_id];
      console.log("ROOMS: ", this.room);
      this.socket.emit("create-biz", this.room);
    },
    getCreatedAt(data) {
      if (moment(data).isBefore(moment())) {
        return moment(data).format("lll");
      } else {
        // return moment(data).format('LT');
        return moment(data).fromNow();
      }
    },
    async getAll(keyword) {
      this.allSelection = true;
      await this.$store.dispatch("businessChat/GET_ALL", keyword);
    },
    getNetworks(keyword) {
      this.$store.dispatch("businessChat/GET_NETWORKS", keyword);
    },
    getUsers(keyword) {
      this.$store.dispatch("businessChat/GET_USERS", keyword);
    },
    getBizs(keyword) {
      this.$store
        .dispatch("businessChat/GET_BIZS", keyword)
        .then(() => {
          console.log("currentBiz: ", this.currentBiz);
        })
        .catch(() => console.log("error"));
    },
    getChatList(data) {
      // alert("Clicked!")
      this.type = data.type;
      this.chatSelected.active = false;
      this.newMsg = false;
      console.log("tab type:", this.tabIndex);

      this.$store.dispatch("businessChat/GET_BIZS_CHAT_LIST", data);
      this.scrollToBottom();
    },

    async histBizToBiz(data) {
      console.log("search data:", data);
      if (data.type == "user") {
        await this.$store.dispatch("businessChat/GET_BIZ_TO_USER", data);
      } else if (data.type == "network") {
        await this.$store.dispatch("businessChat/GET_BIZ_TO_NETWORK", data);
      } else {
        await this.$store.dispatch("businessChat/GET_BIZ_TO_BIZ", data);
      }
    },
    async histBizToUser(receiverId) {
      await this.$store
        .dispatch("businessChat/GET_BIZ_TO_USER", receiverId)
        .then(() => {})
        .catch(() => console.log("error"));
    },
    async histBizToNetwork(receiverId) {
      await this.$store
        .dispatch("businessChat/GET_BIZ_TO_NETWORK", receiverId)
        .then(() => {})
        .catch(() => console.log("error"));
    },
    saveMessage(data) {
      console.log("[DEBUG SAVE]", { data: data, type: this.type });
      this.$store.dispatch("businessChat/SAVE_BUSINESS_CHAT", {
        data: data,
        type: this.type,
      });
    },
    selectedMultyChat() {
      this.$bvModal.hide("group-name");
      console.log("type tabs:", this.tabIndex);
      // console.log("selected Chat:", data);
      this.createGroup();
      let dumId = 7;
      // this.chatId = data.id;
      this.$store.commit("businessChat/setSelectedChatId", dumId);
      let receiver = { receiverID: dumId, keyword: null };
      this.histBizToUser(receiver);

      this.newMsg = false;
      // this.chatSelected = { active: true, clickedId: data.id, ...data.chat };
      this.chatSelected = {
        active: true,
        clickedId: dumId,
        name: this.groupName,
      };

      console.log("[DEBUG] Chat selected:", this.chatSelected);
      this.groupName = "";
    },
    selectedChat(data) {
      console.log("type tabs:", this.tabIndex);
      // this.scrollToBottom();
      console.log("selected Chat:", data);
      this.createRoom(data.id);
      // this.chatId = data.id;
      this.$store.commit("businessChat/setSelectedChatId", data.id);
      let receiver = { receiverID: data.id, keyword: null };
      if (data.type == "user") {
        this.histBizToUser(receiver);
      } else if (data.type == "network") {
        this.histBizToNetwork(receiver);
      } else {
        this.histBizToBiz(receiver);
      }
      this.newMsg = false;
      // this.chatSelected = { active: true, clickedId: data.id, ...data.chat };
      this.chatSelected = {
        id: data.id,
        active: true,
        clickedId: data.id,
        name: data.chat.name,
      };

      console.log("[DEBUG] Chat selected:", this.chatSelected);
    },

    searchChatList(keyword) {
      this.$store
        .dispatch("userChat/GET_USERS", keyword)
        .then(() => {
          console.log("->[Data logged]<-");
        })
        .catch(() => console.log("error"));
    },
    send() {
      if (this.input != "") {
        if (this.type == "group") {
          this.sendGroup();
        } else {
          this.sendPrivate();
        }
      } else console.log("Enter a message");
    },
    sendPrivate() {
      this.formData.append("attachment", this.file);

      this.socket.emit("privateMessage", {
        type: this.type,
        message: this.input,
        sender_business_id: this.currentBiz.id,
        room: this.room,
        receiver_business_id: this.chatSelected.id,
        receiver_id: this.chatId,
        attachment: this.file,
      });
      console.log("SENT...", {
        type: this.type,
        message: this.input,
        sender_business_id: this.currentBiz.id,
        room: this.room,
        receiver_business_id: this.chatSelected.id,
        receiver_id: this.chatId,
        // attachment: this.file,
      });
      this.input = "";
      this.dismissed();
      this.scrollToBottom();
    },
    sendGroup() {
      this.socket.emit("groupMessage", {
        type: this.type,
        message: this.input,
        sender_business_id: this.currentBiz.id,
        room: this.room,
        receiver_business_id: this.chatSelected.id,
        receiver_id: this.chatId,
      });

      console.log("SENT...");
      this.input = "";
      this.dismissed();
      this.scrollToBottom();
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.filePreview = true;
      this.previewSrc = URL.createObjectURL(this.file);

      const fileType = this.file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        this.$bvModal.show("preview-file");
      }

      console.log("file:", this.preview);
      console.log("preview:", this.filePreview);
    },

    //---------------
    insert(emoji) {
      this.input += emoji;
    },

    append(emoji) {
      this.input += emoji;
    },

    selectuser() {
      this.showsearch = false;
      this.selecteduser = true;
    },

    showMessages(arg) {
      this.show = arg;
    },
    showInfo(arg) {
      this.info = arg;
      this.newMsg = arg;
      console.log(this.checked);
    },
    newMessage(arg) {
      console.log("hey");
      this.newMsg = !this.newMsg;
      this.show = false;
    },

    scrollToBottom() {
      this.$refs.feed.scrollTo({
        top: this.$refs.feed.scrollHeight + 2000,
        behavior: "smooth",
      });
      // this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
      console.log(this.$refs.feed.scrollTop);
    },
  },
};
</script>

<style scoped>
.filePreview {
  width: 100px;
}
.new-msg-filter-list {
  padding: 15px !important;
  /* border: 1px solid black; */
  max-height: 600px !important;
  overflow-y: auto;
  overflow-x: hidden;
  /* background-color: lightblue; */
}
.spinner {
  font-size: 30px;
  width: 08%;
  height: 07%;
}
.centralizer {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
}
.right {
  padding: 10px;
  border-right: 2px solid #ccc;
}
.primary-bg,
.primary-bg:hover {
  background-color: #e75c18;
  border: none;
}

.chat-box {
  position: relative;

  border: solid 2px rgb(223, 223, 223);
  margin-bottom: 100px;
}

.chat-nav {
  position: relative;
  min-height: 70px;
  border-right: 2px solid #ccc;
  width: 100%;
  padding: 10px;
}

.chats {
  /* border: 2px solid green; */
  height: 740px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.back-image {
  background-image: url("../../assets/message_back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
input {
  margin-top: 10px;
}
h1 {
  margin-top: 20px;
}
.new-message {
  margin-right: -94px;
  margin-top: 20px;
  cursor: pointer;
}

.messages {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 710px;
}
.txt {
  font-size: 13px;
}

.messageSelected {
  background-color: #f09675;
  color: #fff;
}
.message {
  cursor: pointer;
}
.message:hover {
  background-color: #e75d29;
  color: #fff;
}

.msg-icon {
  font-size: 20px;
  cursor: pointer;
}

.icons {
  margin-left: -60px;
  margin-top: 10px;
}
.msg-text {
  max-width: 60%;
  border-radius: 25px;
  color: #fff;
  background-color: #ed9970;
  padding: 10px;
  font-size: 12px;
}
.msg-text-sent {
  position: relative;
  max-width: 50%;
  border-radius: 25px;
  background-color: #bfbfbf;
  padding: 10px;
  font-size: 12px;
}
.name {
  font-weight: bold;
}

#sent {
  float: right;
  margin-left: 200px;
}
.sent-name {
  margin-left: 400px;
}
.bottom {
  padding-left: 50px;
  min-height: 60px;
  border-bottom-right-radius: 15px;
  background-color: white;
}
.detail {
  margin-left: -40px;
}

.mobile {
  display: none;
}

.right-mobile {
  display: none;
}

.info-nav {
  position: relative;
  min-height: 70px;
  height: 70px;
  width: 100%;
  padding: 10px;
}
.cnt-info {
  margin-left: 130px;
  font-weight: bold;
  font-size: 20px;
}
.info-bottom {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
.info-avatar {
  margin-left: 150px;
}
.info-detail {
  text-align: center;
}
li {
  list-style: none;
  margin-top: 10px;
}
#text-area {
  width: 100%;
}
.newMsg-bottom {
  margin-top: 710px;
}
.new-msg {
  background-color: #ccc;
}
@media only screen and (max-width: 768px) {
  .m-10 {
    margin-top: 10px;
  }
  .mobile {
    display: flex;
  }
  .right {
    display: none;
  }
  .messages {
    display: none;
  }
  .chat-nav {
    position: relative;
    min-height: 70px;

    width: 100%;
    padding: 10px;
    border-right: none;
    padding: 10px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-top: -3px;
  }
  .desk {
    display: none;
  }

  #sent {
    margin-left: 100px;
  }
  .sent-name {
    margin-left: 10px;
  }
  h5 {
    font-size: 10px;
  }
  .user {
    display: none;
  }
  #textarea {
    margin-left: 0px;

    margin-top: 5px;
    margin-bottom: 5px;
  }
  .msg-icon {
    font-size: 20px;
    cursor: pointer;
  }

  .icons {
    margin-left: -90px;
    margin-top: 10px;
  }
  .detale {
    margin-left: -18px;
  }
  .right-mobile {
    display: block;
    padding: 10px;
  }
  .messages-mobile {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 690px;
    border-top: none;
    overflow-x: hidden;
    width: 97%;
  }
  .message {
    cursor: pointer;
    width: 100%;
  }
  h1 {
    font-size: 25px;
  }
  .info-nav {
    position: relative;
    min-height: 70px;
    height: 70px;
    width: 100%;
    padding: 10px;
  }

  .info-bottom {
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
  .info-avatar {
    margin-left: 40px;
  }
  .info-detail {
    text-align: center;
  }
  li {
    list-style: none;
    margin-top: 10px;
  }
  .info-media {
    padding: 10px;
  }
  .media {
    display: flex;
    flex-wrap: wrap;
  }
}

::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.input-background {
  background-color: #ccc;
  border-radius: 20px;
}

.icon-top {
  margin-top: 14px;
}

.profile-pic {
  width: 64px !important;
  height: 64px !important;
}

.drop-hover:hover {
  background-color: white;
}

.drop-hover:active {
  background-color: white;
}

.drop-hover:hover {
  background-color: white;
}

.duration {
  margin-top: 5px;
}

.wrapper {
  position: relative;
  display: inline-block;
}

.regular-input {
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 20rem;
  height: 12rem;
  outline: none;
}

.regular-input:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.emoji-invoker {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}
.emoji-invoker > svg {
  fill: #b1c6d0;
}

.svgg {
  margin-top: -120px;
  margin-left: -20px;
}

.emoji-picker {
  top: -370px !important;
  left: 0px !important;

  position: absolute;
  z-index: 1;
  font-family: Montserrat;
  border: 1px solid #ccc;
  width: 15rem;
  height: 20rem;
  overflow: auto;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 1px 1px 8px #c7dbe6;
}
.emoji-picker__search {
  display: flex;
  overflow-x: hidden;
}
.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
  height: 32px;

  width: 90%;
}
.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}
.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}
.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}
</style>
