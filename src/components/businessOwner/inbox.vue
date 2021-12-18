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
                  <h4 class="title m-10">{{ $t("businessowner.Messages") }}</h4>
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
                  :placeholder="$t('businessowner.Search_inbox')"
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
                    :src="currentBiz.profile_picture"
                    square
                  ></b-avatar>
                </b-col>
                <b-col>
                  <h1 class="mt-4 title text-bold">
                    {{
                      currentBiz.name
                        ? currentBiz.name.split(" ")[0]
                        : "loading..."
                    }}
                  </h1>
                </b-col>
                <b-col>
                  <!-- <b-icon
                    @click="newMessage(true)"
                    class="new-message primary icon-size float-right"
                    icon="pencil-square"
                  ></b-icon> -->
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
                    <b-dropdown-item
                      @click="newMessage({ newmsg: true, bulk: false })"
                    >
                      {{ $t("businessowner.New_Chat") }}</b-dropdown-item
                    >
                    <b-dropdown-item
                      @click="newMessage({ newmsg: true, bulk: true })"
                    >
                      {{ $t("businessowner.New_Group_Chat") }}
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
                    <b-tab
                      :title="$t('businessowner.Users')"
                      @click="getChatList({ type: 'user' })"
                    >
                      <!-- Users Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background"
                            :placeholder="`Search chat list ${tabIndex}`"
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
                        <h2 v-else>{{ $t("businessowner.No_chat") }}</h2>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                    <b-tab
                      :title="$t('businessowner.Business')"
                      @click="getChatList({ type: 'business' })"
                    >
                      <!-- Business Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background"
                            :placeholder="`Search chat list ${tabIndex}`"
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
                        <h2 v-else>{{ $t("businessowner.No_chat") }}</h2>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                    <b-tab
                      :title="$t('businessowner.Network')"
                      @click="getChatList({ type: 'network' })"
                    >
                      <!-- network Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background"
                            :placeholder="`Search chat list ${tabIndex}`"
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
                                :src="chat.image"
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
                      title="Groups"
                      @click="getChatList({ type: 'group' })"
                    >
                      <!-- Group Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background"
                            :placeholder="`Search chat list ${tabIndex}`"
                            @keypress.enter="
                              getChatList({
                                type: 'group',
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
                                  chat.id ==
                                  (chatSelected.clickedId != null
                                    ? chatSelected.clickedId
                                    : false)
                                    ? chatSelected.active
                                    : false,
                              },
                            ]"
                            @click="
                              selectedChat({
                                type: 'group',
                                chat: chat,
                                id: chat.id,
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
                                  <b class="bold"> {{ chat.groupName }}</b>
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
                        <h2 v-else>{{ $t("businessowner.No_chat") }}</h2>
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
                      :src="
                        chatSelected.chat
                          ? chatSelected.chat.picture
                            ? chatSelected.chat.picture
                            : chatSelected.chat.image
                          : ''
                      "
                      size="50"
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
                      :src="
                        chatSelected.chat
                          ? chatSelected.chat.picture
                            ? chatSelected.chat.picture
                            : chatSelected.chat.image
                          : ''
                      "
                      size="50"
                    ></b-avatar>
                  </b-col>

                  <b-col class="detail" @click="info = true">
                    <h5>{{ chatSelected.name }}</h5>
                    <!-- <p>{{ chatSelected }}</p> -->
                    <p
                      v-if="groupMembers && type == 'group'"
                      class="d-inline-block text-truncate"
                      style="max-width: 200px"
                    >
                      <span
                        v-for="(member, index) in groupMembers"
                        :key="index"
                      >
                        <small> {{ getName(member) }}, </small>
                      </span>
                    </p>
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
                      :placeholder="$t('businessowner.Search_message')"
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
                            {{ $t("businessowner.View_Profile") }}
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            {{ $t("businessowner.Disable_Notification") }}
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            {{ $t("businessowner.Delete_Contact") }}
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            {{ $t("businessowner.Delete_Chat") }}
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
                  <div
                    v-if="
                      currentBiz.id != chat.sender_business_id &&
                      currentBiz.id != chat.businessID
                    "
                  >
                    <b-row class="p-4">
                      <b-col>
                        <b v-if="type == 'group'">
                          {{ getName(chat) }}
                        </b>
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
                          <span v-if="chat.post_details">
                            <small class="text-dark font-italic text-right"
                              ><i class="fas fa-share fa-xs pl-1"></i>Shared
                              post</small
                            ><br />
                            <span class="font-italic">{{
                              chat.post_details.content
                            }}</span>

                            <hr />
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
                          <span v-if="chat.post_details">
                            <small class="text-dark font-italic"
                              ><i class="fas fa-share fa-xs pl-1"></i>Shared
                              post</small
                            >
                            <br />
                            <span class="font-italic">{{
                              chat.post_details.content
                            }}</span>
                            <hr />
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
                  <h1 class="text-center">
                    {{ $t("businessowner.Select_a_chat") }}
                  </h1>
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
                    <span
                      style="cursor: pointer !important"
                      href=""
                      @click="$bvModal.show('preview-file')"
                    >
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
                    <small v-if="nameSpace.status" class="pr-8 text-danger">
                      {{ nameSpace.text }}
                    </small>
                    <b-form-input
                      id="textarea"
                      v-model="input"
                      @keypress.enter="send"
                      class="input-background"
                      :placeholder="$t('businessowner.Enter_a_message')"
                      rows="0"
                      max-rows="3"
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
              <span class="cnt-info"
                >{{ $t("businessowner.Contact_Info") }}
              </span>
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
                <b-link class="primary">{{
                  $t("businessowner.View_Profile")
                }}</b-link>
              </div>
            </div>
            <div>
              <ul>
                <li>{{ $t("businessowner.Options") }}</li>
                <li>
                  <b-row
                    ><b-col> {{ $t("businessowner.Block_Messages") }} </b-col>
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
                <li>{{ $t("businessowner.Report_User") }}</li>
              </ul>
            </div>
          </b-col>

          <!-- New message -->
          <b-col
            v-if="newMsg == true && info == false"
            class="p-0 col-xl-8 col-12 back-image"
            style="border: 1px solid gray"
          >
            <div class="new-msg back-image" style="margin-right: 17px">
              <div class="info-nav">
                <b-row>
                  <b-col class="col-1 mt-3"> To </b-col>
                  <b-col>
                    <b-form-input
                      id="textarea"
                      v-model="searchQuery"
                      class="input-background"
                      style="width: 100%"
                      :placeholder="
                        $t('businessowner.Type_the_name_of_person_or_Business')
                      "
                      @keydown.enter="getAll(searchQuery)"
                    ></b-form-input>

                    <br />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="new-msg-filter-list">
                      <table class="table">
                        <b-row
                          v-if="bulk"
                          style="overflow-x: hidden !important"
                        >
                          <b-tabs content-class=" ma-4 pt-6" fill pills card>
                            <b-tab title="All" @click="getAll()">
                              <div v-if="loader" class="text-center">
                                <b-spinner
                                  variant="primary"
                                  label="Spinning"
                                  class="centralizer"
                                ></b-spinner>
                              </div>
                              <h5>People</h5>
                              <div v-if="allUsers">
                                <tr
                                  v-for="(biz, index) in allUsers"
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
                                          <span class="bold">
                                            {{ biz.name }}
                                          </span>
                                        </b-form-checkbox>
                                      </b-form-checkbox-group>
                                    </b-form-group>
                                  </td>
                                </tr>
                              </div>
                              <hr />
                              <h5>Business</h5>
                              <div v-if="allBusiness">
                                <tr
                                  v-for="(biz, index) in allBusiness"
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
                                          <span class="bold">
                                            {{ biz.name }}
                                          </span>
                                        </b-form-checkbox>
                                      </b-form-checkbox-group>
                                    </b-form-group>
                                  </td>
                                </tr>
                              </div>
                              <hr />
                              <h5>Network</h5>
                              <div v-if="allNetworks">
                                <tr
                                  v-for="(biz, index) in allNetworks"
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
                                          <span class="bold">
                                            {{ biz.name }}
                                          </span>
                                        </b-form-checkbox>
                                      </b-form-checkbox-group>
                                    </b-form-group>
                                  </td>
                                </tr>
                              </div>
                              <hr />
                              <h5>Editors</h5>
                              <div v-if="allEditors">
                                <tr
                                  v-for="(biz, index) in allEditors"
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
                                          <span class="bold">
                                            {{ biz.name }}
                                          </span>
                                        </b-form-checkbox>
                                      </b-form-checkbox-group>
                                    </b-form-group>
                                  </td>
                                </tr>
                              </div>
                              <hr />
                            </b-tab>
                            <b-tab title="People" @click="getUsers()">
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-checkbox
                                          id="all"
                                          v-model="allSelectedMulty"
                                          name="all"
                                          value="accepted"
                                          @change="selectedAllMulty"
                                        >
                                          All
                                        </b-form-checkbox>
                                      </b-col>
                                      <b-col>
                                        <b-form-checkbox
                                          id="following"
                                          v-model="following"
                                          name="members"
                                          :value="true"
                                          :unchecked-value="false"
                                          @change="selectedFollowings"
                                        >
                                          Following
                                        </b-form-checkbox>
                                      </b-col>
                                      <b-col>
                                        <b-form-checkbox
                                          id="follower"
                                          v-model="follower"
                                          name="members"
                                          :value="true"
                                          :unchecked-value="false"
                                          @change="selectedFollowers"
                                        >
                                          Follower
                                        </b-form-checkbox>
                                      </b-col>
                                    </b-row>
                                  </b-card>
                                </b-col>
                              </b-row>
                              <div v-if="loader" class="text-center">
                                <b-spinner
                                  variant="primary"
                                  label="Spinning"
                                  class="centralizer"
                                ></b-spinner>
                              </div>
                              <div v-if="bizs.length">
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
                                          <span class="bold">
                                            {{ biz.name }}
                                          </span>
                                        </b-form-checkbox>
                                      </b-form-checkbox-group>
                                    </b-form-group>
                                  </td>
                                </tr>
                              </div>
                              <h2 v-else>No data</h2>

                              <!-- End Chats -->
                            </b-tab>
                            <b-tab title="Business" @click="getBizs()">
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-checkbox
                                          id="all"
                                          v-model="allSelectedMulty"
                                          name="all"
                                          value="accepted"
                                          @change="selectedAllMulty"
                                        >
                                          All
                                        </b-form-checkbox>
                                      </b-col>
                                      <b-col>
                                        <b-form-checkbox
                                          id="following"
                                          v-model="following"
                                          name="members"
                                          :value="true"
                                          :unchecked-value="false"
                                          @change="selectedFollowings"
                                        >
                                          Following
                                        </b-form-checkbox>
                                      </b-col>
                                      <b-col>
                                        <b-form-checkbox
                                          id="follower"
                                          v-model="follower"
                                          name="members"
                                          :value="true"
                                          :unchecked-value="false"
                                          @change="selectedFollowers"
                                        >
                                          Follower
                                        </b-form-checkbox>
                                      </b-col>
                                    </b-row>
                                  </b-card>
                                </b-col>
                              </b-row>
                              <div
                                v-if="loader"
                                class="text-center mt-12 pt-12"
                              >
                                <b-spinner
                                  variant="primary"
                                  label="Spinning"
                                  class="centralizer"
                                ></b-spinner>
                              </div>
                              <div v-if="bizs.length">
                                {{ selectedMulty }}

                                <tr
                                  v-for="(elm, index) in bizs"
                                  :key="index"
                                  class="p-2 message"
                                >
                                  <td>
                                    <b-form-checkbox-group
                                      id="checkbox-group-3"
                                      v-model="selectedMulty"
                                      name="flavour-2"
                                    >
                                      <b-form-checkbox
                                        :id="index + '_id'"
                                        :name="elm.name"
                                        :value="elm.id"
                                        :unchecked-value="false"
                                      >
                                        <!-- @input="selectedMember(elm)" -->
                                        <b-avatar
                                          class="d-inline-block"
                                          variant="primary"
                                          size="30"
                                        ></b-avatar>
                                        <span class="bold">
                                          {{ elm.name }}
                                        </span>
                                      </b-form-checkbox>
                                    </b-form-checkbox-group>
                                  </td>
                                </tr>
                              </div>
                              <h2 v-else>No Business</h2>

                              <!-- End Chats -->
                            </b-tab>
                            <b-tab title="Network" @click="getNetworks()">
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-checkbox
                                          id="all"
                                          v-model="allSelectedMulty"
                                          name="all"
                                          value="accepted"
                                          @change="selectedAllMulty"
                                        >
                                          All
                                        </b-form-checkbox>
                                      </b-col>
                                      <b-col>
                                        <b-form-checkbox
                                          id="following"
                                          v-model="following"
                                          name="members"
                                          :value="true"
                                          :unchecked-value="false"
                                          @change="selectedFollowings"
                                        >
                                          Following
                                        </b-form-checkbox>
                                      </b-col>
                                      <b-col>
                                        <b-form-checkbox
                                          id="follower"
                                          v-model="follower"
                                          name="members"
                                          :value="true"
                                          :unchecked-value="false"
                                          @change="selectedFollowers"
                                        >
                                          Follower
                                        </b-form-checkbox>
                                      </b-col>
                                    </b-row>
                                  </b-card>
                                </b-col>
                              </b-row>

                              <div v-if="loader" class="text-center">
                                <b-spinner
                                  variant="primary"
                                  label="Spinning"
                                  class="centralizer"
                                ></b-spinner>
                              </div>
                              <div v-if="bizs.length">
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
                                          <span class="bold">
                                            {{ biz.name }}
                                          </span>
                                        </b-form-checkbox>
                                      </b-form-checkbox-group>
                                    </b-form-group>
                                  </td>
                                </tr>
                              </div>
                              <h2 v-else>No Network</h2>

                              <!-- End Chats -->
                            </b-tab>
                            <b-tab title="Editors" @click="getEditors()">
                              <div v-if="loader" class="text-center">
                                <b-spinner
                                  variant="primary"
                                  label="Spinning"
                                  class="centralizer"
                                ></b-spinner>
                              </div>
                              <div v-if="bizs.length">
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
                                          <span class="bold">
                                            {{ biz.name }}
                                          </span>
                                        </b-form-checkbox>
                                      </b-form-checkbox-group>
                                    </b-form-group>
                                  </td>
                                </tr>
                              </div>
                              <h2 v-else>No Editor</h2>

                              <!-- End Chats -->
                            </b-tab>
                          </b-tabs>
                        </b-row>
                        <div
                          v-else
                          style="
                            padding-left: 10px !important;
                            overflow-x: hidden !important;
                          "
                        >
                          <h2>All</h2>
                          <br />
                          <div v-if="loader" class="text-center">
                            <b-spinner
                              variant="primary"
                              label="Spinning"
                              class="centralizer"
                            ></b-spinner>
                          </div>
                          <h5>People</h5>

                          <b-row>
                            <div v-if="allUsers">
                              <tr
                                v-for="(biz, index) in allUsers"
                                :key="index"
                                class="p-2 message"
                                @click="
                                  selectedChat({
                                    type: 'user',
                                    chat: biz,
                                    id: biz.id,
                                  })
                                "
                              >
                                <td>
                                  <b-avatar
                                    class="d-inline-block"
                                    variant="primary"
                                    size="30"
                                  ></b-avatar>
                                  <span class="bold">
                                    {{ biz.name }}
                                  </span>
                                </td>
                              </tr>
                            </div>
                          </b-row>
                          <hr />
                          <h5>Business</h5>

                          <b-row>
                            <div v-if="allBusiness">
                              <tr
                                v-for="(biz, index) in allBusiness"
                                :key="index"
                                class="p-2 message"
                                @click="
                                  selectedChat({
                                    type: 'business',
                                    chat: biz,
                                    id: biz.id,
                                  })
                                "
                              >
                                <td>
                                  <b-avatar
                                    class="d-inline-block"
                                    variant="primary"
                                    size="30"
                                  ></b-avatar>
                                  <span class="bold">
                                    {{ biz.name }}
                                  </span>
                                </td>
                              </tr>
                            </div>
                          </b-row>
                          <hr />
                          <h5>Network</h5>

                          <b-row>
                            <div v-if="allNetworks">
                              <tr
                                v-for="(biz, index) in allNetworks"
                                :key="index"
                                class="p-2 message"
                                @click="
                                  selectedChat({
                                    type: 'network',
                                    chat: biz,
                                    id: biz.id,
                                  })
                                "
                              >
                                <td>
                                  <b-avatar
                                    class="d-inline-block"
                                    variant="primary"
                                    size="30"
                                  ></b-avatar>
                                  <span class="bold">
                                    {{ biz.name }}
                                  </span>
                                </td>
                              </tr>
                            </div>
                          </b-row>
                          <hr />
                          <h5>Editors</h5>
                          <b-row>
                            <div v-if="allEditors">
                              <tr
                                v-for="(biz, index) in allEditors"
                                :key="index"
                                class="p-2 message"
                                @click="
                                  selectedChat({
                                    type: 'user',
                                    chat: biz,
                                    id: biz.id,
                                  })
                                "
                              >
                                <td>
                                  <b-avatar
                                    class="d-inline-block"
                                    variant="primary"
                                    size="30"
                                  ></b-avatar>
                                  <span class="bold">
                                    {{ biz.name }}
                                  </span>
                                </td>
                              </tr>
                            </div>
                          </b-row>
                          <hr />
                        </div>
                      </table>
                    </div>
                    <b-button
                      v-if="bulk"
                      block
                      variant="primary"
                      @click="$bvModal.show('group-name')"
                      :disabled="selectedMulty.length ? false : true"
                      >{{ $t("businessowner.Next") }}</b-button
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
          <h3>{{ $t("businessowner.The_Group_Name") }}:</h3>
          <b-form-input
            v-model="groupName"
            id="input-large"
            size="lg"
            autofocus
            placeholder="Enter the group name"
            @keypress.enter="selectedMultyChat()"
          ></b-form-input>
        </div>

        <b-button class="mt-3" block @click="selectedMultyChat()">{{
          $t("businessowner.Create")
        }}</b-button>
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
      bulk: false,
      followers: false,
      followings: false,
      follower: false,
      following: false,

      clickedFilterType: "",

      visibleCollaps: false,

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
      socket: io(process.env.VUE_APP_CHAT_SERVER_URL, {
        transports: ["websocket", "polling", "flashsocket"],
      }),
      // socket: io("http://localhost:7000", {
      //   transports: ["websocket", "polling", "flashsocket"],
      // }),

      nameSpace: {
        status: false,
        text: "",
      },
      chatSelected: [],
      showsearch: true,
      selecteduser: false,
      searchQuery: "",
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
    allEditors() {
      return this.$store.getters["businessChat/getAllEditors"];
    },
    groupMembers() {
      return this.$store.getters["businessChat/getGroupMembers"];
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
      return this.$store.getters["auth/profilConnected"];
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
    let obj = [
      {
        id: { first: "edouard", second: "lele" },
        names: { first: "edouard", second: "lele" },
      },
    ];
    let tableau = Object.keys(obj).map((key) => [Number(key), obj[key]]);

    console.log("finale+++", tableau);
    if (this.chatList.length < 0) {
      this.getChatList({ type: "business" });
    }
    this.getAll();
    this.getBizs();
  },
  created() {
    this.socketListenners();
    this.getCurBiz();

    this.$store.commit(
      "businessChat/setCurrentBizId",
      Number(this.$route.params.id)
    );
    console.log("router params:", this.currentBizId);
    this.tabIndex = this.$route.query.msgTabId;

    console.log("this.tabIndex:", this.tabIndex);
    // console.log("call to action checked:", this.ctaSelected);

    if (this.tabIndex) {
      console.log("here am i!");
      if (this.tabIndex == 1) {
        this.getChatList({ type: "business" });
      } else if (this.tabIndex == 2) {
        this.getChatList({ type: "network" });
      } else {
        this.tabIndex = 0;
        console.log("111 call ");

        this.getChatList({ type: "user" });
        console.log("222 call ");
      }
      console.log("call to action checked:", this.ctaSelected);
      this.selectedChat({ chat: this.ctaSelected, id: this.ctaSelected.id });
    } else {
      console.log("Am here again!");
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
    getCurBiz() {
      this.$store.dispatch("businessChat/GET_CUR_BIZ");
    },
    getNetworkMembers(keyword) {
      this.$store.dispatch("businessChat/GET_BUSINESS_MEMBERS", {
        keyword: keyword,
      });
    },
    getName(chat) {
      return chat.business_i_d
        ? chat.business_i_d.name
        : chat.network_i_d
        ? chat.network_i_d.name
        : chat.user_i_d
        ? chat.user_i_d.name
        : chat.network_editor_i_d
        ? chat.network_editor_i_d.name
        : chat.business_editor_i_d
        ? chat.business_editor_i_d.name
        : "Anonymous";
    },
    convert(bytes, decimals = 2) {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
    selectedMember(elm) {
      console.log("selectedMulty:", this.selectedMulty.length);
      let length = this.selectedMulty.length;
      if (this.selectedMulty[length - 1] == elm.id) {
        this.groupMembers.push({ type: elm.accountType, id: elm.id });
      } else this.groupMembers.pop();

      console.log("selected:", this.groupMembers);
    },
    selectedAllMulty() {
      // this.visibleCollaps = false;
      this.allSelection = true;
      this.selectedMulty = [];
      if (this.allSelectedMulty) {
        this.bizs.map((biz) => {
          this.selectedMulty.push(biz.id);
        });
      } else {
        this.selectedMulty = [];
        this.groupMembers = [];
      }
    },
    selectedFollowers() {
      this.allSelection = true;
      this.selectedMulty = [];
      let selected = [];
      if (this.follower) {
        selected = this.bizs.filter((biz) => {
          return biz.statusType === "follower";
        });
        selected.map((elm) => {
          this.selectedMulty.push(elm.id);
          this.groupMembers.push({ type: elm.accountType, id: elm.id });
        });
      } else {
        this.selectedMulty = [];
        this.groupMembers = [];
      }
      console.log("Selected: ", selected);
    },
    selectedFollowings() {
      this.allSelection = true;
      this.selectedMulty = [];
      let selected = [];
      if (this.following) {
        selected = this.bizs.filter((biz) => {
          return biz.statusType === "following";
        });
        selected.map((elm) => {
          this.selectedMulty.push(elm.id);
          this.groupMembers.push({ type: elm.accountType, id: elm.id });
        });
      } else {
        this.selectedMulty = [];
        this.groupMembers = [];
      }
      console.log("Selected: ", selected);
    },

    followerFollowing() {
      if (this.follower) {
        this.followers = this.bizs.filter((elm) => {
          console.log("followers: ", elm);
          return elm.statusType == "follower";
        });
        console.log("followers: ", this.followers);
      } else if (this.following) {
        this.followings = this.bizs.filter((elm) => {
          return elm.statusType == "following";
        });
        console.log("followings: ", this.followings);
      }
      console.log("all: ", this.bizs);
    },
    peopleAllMulty() {
      this.visibleCollaps = !this.visibleCollaps;
      this.clickedFilterType = "people";
      // this.bizs = this.allUsers;
      this.allSelection = false;

      this.getUsers();
      this.$store.commit("businessChat/setBizs", this.allUsers);

      this.selectedMulty = [];
      if (this.peopleMulty) {
        this.bizs.map((biz) => {
          this.selectedMulty.push(biz.id);
        });
      } else {
        this.selectedMulty = [];
        this.groupMembers = [];
      }
    },
    businessAllMulty() {
      // this.bizs = this.allBusiness;
      this.visibleCollaps = !this.visibleCollaps;

      this.clickedFilterType = "business";
      this.getBizs();

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
      this.visibleCollaps = !this.visibleCollaps;

      this.clickedFilterType = "network";

      this.$store.commit("businessChat/setBizs", this.allNetworks);
      this.getNetworks();
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
    getAll() {
      this.getUsers();
      this.getNetworks();
      this.getBizs();
      this.getEditors();
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
        // userID:1,2,3,4,5
        // businessID:2
        // networkID:1,2,3,4
        // businessEditorID:2
        // message:Life has no meaning the moment you lose the illusion of being eternal.

        // this.formData.append("sender_business_id", data.sender_business_id);
        this.formData.append("message", data.message);

        this.formData.append("userID", data.userID);
        this.formData.append("businessID", data.businessID);
        this.formData.append("networkID", data.networkID);
        this.formData.append("businessEditorID", data.businessEditorID);

        // this.formData.append("receiver_network_id", data.receiver_business_id);
        // this.formData.append("receiver_id", data.receiver_business_id);
        // this.formData.append("group_id", data.group_id);
        // this.formData.append("type", data.type);

        this.saveMessage(this.formData);
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
      this.socket.emit("create-group", this.chatId);
      // let sender_business_id = this.currentUser.user.id;
      var membersPeople = [];
      var membersBuiness = [];
      var membersNetwork = [];
      var membersEditor = [];
      if (this.groupMembers) {
        membersPeople = this.groupMembers.filter((member) => {
          return member.type == "people";
        });
        membersBuiness = this.groupMembers.filter((member) => {
          return member.type == "business";
        });
        membersNetwork = this.groupMembers.filter((member) => {
          return member.type == "network";
        });
        membersEditor = this.groupMembers.filter((member) => {
          return member.type == "editor";
        });
      }
      let membersPeopleIds = [];
      let membersBusinessIds = [];
      let membersNetworkIds = [];
      let membersEditorIds = [];

      membersPeople.map((biz) => {
        membersPeopleIds.push(biz.id);
      });
      membersBuiness.map((biz) => {
        membersBusinessIds.push(biz.id);
      });
      membersNetwork.map((biz) => {
        membersNetworkIds.push(biz.id);
      });
      membersEditor.map((biz) => {
        membersEditorIds.push(biz.id);
      });

      console.log("members: ", this.groupMembers);
      console.log("Business: ", membersBuiness);
      console.log("People: ", membersPeople);
      console.log("Editor: ", membersEditor);
      console.log("Network: ", membersNetwork);

      let sender_business_id = this.chatId;
      this.room = [sender_business_id, ...this.selectedMulty];
      console.log("ROOMS: ", this.room);
      this.tabIndex = 3;
      // this.getChatList({ type: "group" });
      this.$store.dispatch("businessChat/CREATE_GROUP", {
        groupName: this.groupName,
        userID: `${membersPeopleIds}`,

        businessID: `${membersBusinessIds}`,
        networkID: `${membersNetworkIds}`,

        businessEditorsID: `${membersEditorIds}`,
      });
    },
    createRoom(receiver_business_id) {
      // let sender_business_id = this.currentUser.user.id;
      let sender_business_id = this.currentBizId;
      this.room = [receiver_business_id, sender_business_id];
      console.log("ROOMS: ", this.room);
      this.socket.emit("create-biz", this.room);
    },
    getCreatedAt(data) {
      let date = moment(data).isBefore(today);
      let today = moment().format("MM/DD/YYYY");
      // console.log("days:", date);
      if (date) {
        return moment(data).format("lll");
      } else {
        // return moment(data).format('LT');
        return moment(data).fromNow();
      }
    },
    // async getAll(keyword) {
    //   this.allSelection = true;
    //   await this.$store.dispatch("businessChat/GET_ALL", keyword);
    // },
    getEditors(keyword) {
      this.$store.dispatch("businessChat/GET_EDITORS", {
        keyword: keyword,
      });
    },
    getNetworks(keyword) {
      this.visibleCollaps = true;
      this.$store.dispatch("businessChat/GET_NETWORKS", {
        keyword: keyword,
      });
    },
    getUsers(keyword) {
      this.visibleCollaps = true;

      this.$store.dispatch("businessChat/GET_USERS", {
        keyword: keyword,
      });
    },
    getBizs(keyword) {
      this.visibleCollaps = true;
      this.$store
        .dispatch("businessChat/GET_BIZS", {
          keyword: keyword,
        })
        .then(() => {
          console.log("currentBiz: ", this.currentBiz);
        })
        .catch(() => console.log("error"));
    },
    getChatList(data) {
      // alert("Clicked!")
      this.type = data.type;
      // this.chatSelected.active = false;
      this.newMsg = false;
      console.log("tab type:", this.tabIndex);

      this.$store.dispatch("businessChat/GET_BIZS_CHAT_LIST", data);
      // this.scrollToBottom();
    },

    async histBizToBiz(data) {
      console.log("search data:", data);
      if (data.type == "user") {
        await this.$store.dispatch("businessChat/GET_BIZ_TO_USER", data);
      } else if (data.type == "network") {
        await this.$store.dispatch("businessChat/GET_BIZ_TO_NETWORK", data);
      } else if (data.type == "group") {
        await this.$store.dispatch("businessChat/GET_BIZ_TO_GROUP", data);
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
    async histBizToGroup(receiverId) {
      await this.$store.dispatch("businessChat/GET_BIZ_TO_GROUP", receiverId);
      console.log("group members: ++++>", this.groupMembers);
    },
    saveMessage(data) {
      console.log("[DEBUG SAVE]", { data: data, type: this.type });
      if (this.type == "group") {
        this.$store.dispatch("businessChat/SAVE_GROUP_CHAT", {
          data: data,
          group_id: this.chatId,
          sender_id: this.currentBizId,
          type: this.type,
        });
      } else {
        this.$store.dispatch("businessChat/SAVE_BUSINESS_CHAT", {
          data: data,
          type: this.type,
        });
      }
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
      console.log("[type tabs]", this.tabIndex);
      // this.scrollToBottom();
      console.log("[selected Chat]", data);
      this.createRoom(data.id);
      if (this.type == "group") {
        this.createGroup();
      }
      this.chatId = data.id;
      this.$store.commit("businessChat/setSelectedChatId", data.id);
      let receiver = { receiverID: data.id, keyword: null };
      if (data.type == "user") {
        this.histBizToUser(receiver);
      } else if (data.type == "network") {
        this.histBizToNetwork(receiver);
      } else if (data.type == "business") {
        this.histBizToBiz(receiver);
      } else {
        this.histBizToGroup(receiver);
      }
      this.newMsg = false;
      // this.chatSelected = { active: true, clickedId: data.id, ...data.chat };
      this.chatSelected = {
        id: data.id,
        active: true,
        clickedId: data.id,
        name: data.chat.name ? data.chat.name : data.chat.groupName,
        chat: data.chat,
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
      if (this.input.length > 0 && this.input.length < 500) {
        if (this.type == "group") {
          this.sendGroup();
        } else {
          this.sendPrivate();
        }
      } else {
        this.nameSpace.status = true;

        this.nameSpace.text =
          this.input.length == 0
            ? "Enter at least one character"
            : "Enter at most 500 characters";
      }
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
      var membersPeople = [];
      var membersBuiness = [];
      var membersNetwork = [];
      var membersEditor = [];
      console.log("Group members:", this.groupMembers);
      let data = {};
      if (this.groupMembers.length) {
        // this.groupMembers.map((member)=>{
        //   if()
        // })
        membersPeople = this.groupMembers.filter((member) => {
          return member.userID != null;
        });
        membersBuiness = this.groupMembers.filter((member) => {
          return member.businessID != null;
        });
        membersNetwork = this.groupMembers.filter((member) => {
          return member.networkID != null;
        });
        membersEditor = this.groupMembers.filter((member) => {
          return member.businessEditorsID != null;
        });

        let membersPeopleIds = [];
        let membersBusinessIds = [];
        let membersNetworkIds = [];
        let membersEditorIds = [];

        membersPeople.map((biz) => {
          membersPeopleIds.push(biz.userID);
        });
        membersBuiness.map((biz) => {
          membersBusinessIds.push(biz.businessID);
        });
        membersNetwork.map((biz) => {
          membersNetworkIds.push(biz.networkID);
        });
        membersEditor.map((biz) => {
          membersEditorIds.push(biz.businessEditorsID);
        });
        data = {
          userID: membersPeopleIds,
          businessID: membersBusinessIds,
          networkID: membersNetworkIds,
          businessEditorID: membersEditorIds,
          message: this.input,
        };
      }

      this.socket.emit("groupMessage", data);

      // this.socket.emit("groupMessage", {
      //   type: this.type,
      //   message: this.input,
      //   sender_business_id: this.currentBiz.id,
      //   room: this.room,
      //   receiver_business_id: this.chatSelected.id,
      //   receiver_id: this.chatId,
      //   group_id: this.chatId,
      // });

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
      this.bulk = arg.bulk;
      if (arg.bulk) {
        this.getAll();
      }
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
  /* margin-right: -94px; */
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
