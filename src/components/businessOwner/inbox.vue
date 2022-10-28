<template>
  <div>
    <b-container  class="messaging">
      <div v-if="mobile">
        <b-row class="chat-box border border-bottom-none">   
          <b-col class="pr-0" v-if="rightSide">
            <div class="right border-right">
              <div class="d-flex">
                <div class="p-2">
                  <b-avatar
                    class="d-inline-block profile-pic"
                    variant="light"
                    :src="currentBiz.profile_picture"
                    square
                  ></b-avatar>
                </div>
                <div>
                  <h3 class="mt-3 title text-bold">
                    {{
                      currentBiz.name
                        ? currentBiz.name.length > 15
                          ? currentBiz.name.substring(0, 4) + "..."
                          : currentBiz.name
                        : "loading..."
                    }}
                  </h3>
                </div>
                <div class="ml-auto">
                  <!-- <b-icon
                    @click="newMessage(true)"
                    class="new-message primary icon-size float-right"
                    icon="pencil-square"
                  ></b-icon> -->
                  <b-dropdown
                    variant="white"
                    toggle-class=""
                    no-caret
                    class="new-message"
                  >
                    <template #button-content>
                      <b-icon
                        class="h2  float-right"
                        icon="pencil-square"
                      ></b-icon>
                    </template>
                    <b-dropdown-item
                      @click="newMessage({ newmsg: true, bulk: false })"
                    >
                      {{ $t("businessowner.New_Chat") }}</b-dropdown-item
                    >
                    <b-dropdown-item v-if="isPremium"
                      @click="newMessage({ newmsg: true, bulk: true })"
                    >
                      {{ $t("businessowner.New_Group_Chat") }}
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>

              <b-row class="mt-12">
                <b-col>
                  <b-tabs
                    v-model="tabIndex"
                    content-class="mt-12 ma-4 "
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
                            class="form-control input-background mb-2"
                            :placeholder="this.$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'user',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      <div class="messages contacts-height">
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
                        <div v-if="chatList.length > 0">
                          <b-row
                            v-for="(chat, index) in chatList"
                            :key="index"
                            :class="[
                              'p-2 message ',
                              {
                                messageSelected:
                                  (chat.sender_id
                                    ? chat.sender_id
                                    : chat.receiver_id) ==
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
                                id: chat.sender_id
                                  ? chat.sender_id
                                  : chat.receiver_id,
                              })
                            "
                          >
                            <b-col class="col-8">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="light"
                                  :src="chatListImage(chat)"
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ formatName(chat) }}</b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-4 text-center">
                              <small class="text-center small">
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
                        <h3 v-else>{{ $t("businessowner.No_chat") }} ---</h3>

                         </VuePerfectScrollbar>
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
                            class="form-control input-background mb-2 "
                            :placeholder="$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'business',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                     <div class="messages contacts-height">
                      
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
                        
                        <div v-if="chatList.length > 0">
                          <b-row
                            v-for="(chat, index) in chatList"
                            :key="index"
                            :class="[
                              'p-2 message ',
                              {
                                messageSelected:
                                  (chat.sender_business_id == currentBizSlug
                                    ? chat.receiver_business_id
                                    : chat.sender_business_id) ==
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
                                id:
                                  chat.sender_business_id == currentBizSlug
                                    ? chat.receiver_business_id
                                    : chat.sender_business_id,
                              })
                            "
                          >
                            <b-col class="col-8">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="light"
                                  :src="chatListImage(chat)"
                                  square
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ formatName(chat) }}</b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-4 text-center">
                              <small class="text-center small">
                                {{ getCreatedAt(chat.created_at) }}
                              </small>
                              <!-- <p class="text-center">
                              <b-badge variant="info">
                                {{ (chat.sender_business_id == currentBizId
                                    ? chat.receiver_business_id
                                    : chat.sender_business_id)}}
                              </b-badge>
                            </p> -->
                            </b-col>
                          </b-row>
                        </div>
                        <h3 v-else>{{ $t("businessowner.No_chat") }}</h3>

                         </VuePerfectScrollbar>
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
                            :placeholder="$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'network',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      <div class="messages contacts-height">
                        
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
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
                                (chat.sender_network_id
                                  ? chat.sender_network_id
                                  : chat.receiver_network_id) ==
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
                              id: chat.sender_network_id
                                ? chat.sender_network_id
                                : chat.receiver_network_id,
                            })
                          "
                        >
                          <b-col class="col-8">
                            <span style="display: inline-flex">
                              <b-avatar
                                class="d-inline-block profile-pic"
                                variant="light"
                                :src="chatListImage(chat)"
                                square
                              ></b-avatar>

                              <h6 class="mt-2 d-inline-block ml-2">
                                <b class="bold"> {{ formatName(chat) }}</b>
                                <p class="duration">{{ chat.message }}</p>
                              </h6>
                            </span>
                          </b-col>

                          <b-col class="col-4 text-center">
                            <small class="text-center small">
                              {{ getCreatedAt(chat.created_at) }}
                            </small>
                            <!-- <p class="text-center">
                              <b-badge variant="info">
                                {{ chat.receiver_network_id }}
                              </b-badge>
                            </p> -->
                          </b-col>
                        </b-row>
                         </VuePerfectScrollbar>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                    <b-tab  v-if="isPremium"
                      :title="$t('general.Groups')"
                      @click="getChatList({ type: 'group' })"
                    >
                      <!-- Group Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQuery"
                            class="form-control input-background mb-2"
                            :placeholder="$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'group',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                     <div class="messages contacts-height">
                      
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
                        <div v-if="loader" class="text-center">
                          <b-spinner
                            variant="light"
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
                            <b-col class="col-8">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="light"
                                  :src="require('@/assets/default_group.png')"
                                  square
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ chat.groupName }}</b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-4 text-center">
                              <small class="text-center small">
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
                        <h3 v-else>{{ $t("businessowner.No_chat") }}</h3>
                         </VuePerfectScrollbar>
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
            v-if="newMsg == false && info == false && rightSide == false"
            class="p-0 back-image"
          >
            <div>
              <div class="chat-nav shadow">
                <b-row class="desk" v-if="chatSelected.active">
                  <b-col class="col-1 mt-3 ma-4">
                    <b-icon
                      @click="showMessages(true)"
                      icon="arrow-left-square-fill"
                      font-scale="1"
                      aria-hidden="true"
                      class="primary"
                    ></b-icon>
                  </b-col>
                  <b-col class="col-2" @click="info = true">
                    <b-avatar
                      variant="light"
                      :square="type == 'user' ? false : true"
                      :src="chatListImage(chatSelected)"
                      size="50"
                    ></b-avatar>
                  </b-col>

                  <b-col class="col-sm-5" @click="info = true">
                    <h4>{{ formatName(chatSelected.chat) }}</h4>
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

                  <b-col class="col-2 mr-6 text-right">
                    <b-icon
                      v-b-toggle.collapse-1
                      class="msg-icon primary icon-size float-right"
                      icon="search"
                      style="cursor: pointer"
                    ></b-icon>
                  </b-col>
                </b-row>
                <b-row class="desk" v-else>
                  <b-col class="col-2 mt-3 ma-4 mr-auto">
                    <b-icon
                      @click="showMessages(true)"
                      icon="arrow-left-square-fill"
                      font-scale="1"
                      aria-hidden="true"
                      class="primary"
                    ></b-icon>
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card style="margin-top: -15px">
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
                    placeholder="Search... press enter"
                  />
                </b-card>
              </b-collapse>

              <section
                v-if="chatSelected.active"
                class="chats"
                style="margin-left: 1px"
                ref="feed"
              >

              
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >

                <div v-if="loader" class="text-center mt-12 pt-12">
                  <b-spinner
                    variant="primary"
                    label="Spinning"
                    class="spinner centralizer"
                  ></b-spinner>
                </div>
                <div v-else v-for="chat in chats" :key="chat.id">
                  <div
                    v-if="
                      currentBizSlug != chat.sender_business_id &&
                        currentBizSlug != chat.businessID
                    "
                  > 
                    <b-row class="p-2">
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
                          <span class="text-center float-right mt-n0">
                            <b-dropdown
                              variant="link"
                              size="lg"
                              toggle-class="text-decoration-none p-0"
                              no-caret
                              right
                            >
                              <template slot="button-content">
                                <b><i class="fas fa-ellipsis-v"></i></b>
                              </template>
                              <b-dropdown-item 
                              @click="deleteMessage(chat , chats , type)">
                                Delete
                              </b-dropdown-item>
                            </b-dropdown>
                          </span>
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
                          <small
                            class="float-right mt-2 text-white pr-1 pt-1 small"
                          >
                            {{ getCreatedAt(chat.created_at) }}
                          </small>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-else>
                    <b-row class="p-2">
                      <b-col>
                        <p
                          v-if="chat.message"
                          id="sent"
                          class="msg-text-sent text"
                        >
                        <span class="text-center float-right mt-n0">
                            <b-dropdown
                              variant="link"
                              size="lg"
                              toggle-class="text-decoration-none p-0"
                              no-caret
                              right
                            >
                              <template slot="button-content">
                                <b><i class="fas fa-ellipsis-v"></i></b>
                              </template>
                              <b-dropdown-item 
                              @click="deleteMessage(chat , chats , type)">
                                Delete 
                              </b-dropdown-item>
                            </b-dropdown>
                          </span>
                          
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
                          <small
                            class="float-right mt-2 text-white pr-1 pt-1 small"
                          >
                            {{ getCreatedAt(chat.created_at) }}
                          </small>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </div>
                         </VuePerfectScrollbar>
              </section>

     <div  v-if="chatSelected.active" class="bottom mt-3">
              <div style="width: 100%;"> 
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

                  <b-col cols="2" class="p-0 pl-2">
                    <b-icon
                      @click="send"
                      class="msg-icon primary icon-size icon-top"
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
                variant="light"
                :src="chatSelected.logo_path"
                size="200"
              ></b-avatar>
              <div class="info-detail">
                <h1 class="info-name">{{ chatSelected.name }}</h1>
                <!-- <b-link class="primary">{{
                  $t("businessowner.View_Profile")
                }}</b-link> -->
                <b-row v-if="type == 'group'" class="justify-content-md-center">
                  <b-col cols="12" md="auto">
                    <table class="info-name">
                      <tr class="text-center">
                        <th>
                          <u> Members </u>
                        </th>
                      </tr>
                      <tr v-for="(member, index) in groupMembers" :key="index">
                        <td>{{ getName(member) }}</td>
                      </tr>
                    </table>
                  </b-col>
                </b-row>
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
            v-if="newMsg == true && info == false && rightSide == false"
            class="p-0 back-image"
           
          >
            <div class="new-msg back-image" style="margin-right: 17px">
              <div>
                <b-row>
                  <b-col class="col-1 mt-3 ma-3">
                    <b-icon
                      @click="showMessages(true)"
                      icon="arrow-left-square-fill"
                      font-scale="1"
                      aria-hidden="true"
                      class="primary"
                    ></b-icon>
                  </b-col>
                  <b-col>
                    <b-form-input
                      id="textarea"
                      v-model="newSearchQuery"
                      class="input-background"
                      style="width: 100%"
                      :placeholder="
                        $t('general.Type_the_name_of_person_or_Business')
                      "
                      @keydown="onPressSearchNewChat"
                    ></b-form-input>
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
                          <!-- business: {{ selectedBusiness }} Member:{{
                            selectedPeople
                          }}
                          Network: {{ selectedNetwork }} -->
                          <b-tabs
                            v-model="tabMemberType"
                            content-class=" ma-4 "
                            fill
                            pills
                            card
                          >
                            <b-tab :title="$t('general.All')" @click="getAll()">
                              <div v-if="loader" class="text-center">
                                <b-spinner
                                  variant="primary"
                                  label="Spinning"
                                  class="centralizer"
                                ></b-spinner>
                              </div>
                              <h5>{{ $t("businessowner.People") }}</h5>
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
                                        v-model="selectedPeople"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
                                            size="30"
                                            :src="biz.profile_picture"
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
                              <h5>{{ $t("general.Business") }}</h5>
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
                                        v-model="selectedBusiness"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id_biz'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
                                            size="30"
                                            :src="
                                              getImage({
                                                type: 'business',
                                                image: biz.logo_path,
                                              })
                                            "
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
                              <h5>{{ $t("general.Network") }}</h5>
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
                                        v-model="selectedNetwork"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id_net'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
                                            size="30"
                                            :src="biz.image"
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
                              <h5>{{ $t("general.Editors") }}</h5>
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
                                        v-model="selectedEditor"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id_edit'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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
                              <!-- <h5>{{ $t("general.Members") }}</h5>
                              <div v-if="allMembers">
                                <tr
                                  v-for="(biz, index) in allMembers"
                                  :key="index"
                                  class="p-2 message"
                                >
                                  <td>
                                    <b-form-group>
                                      <b-form-checkbox-group
                                        id="checkbox-group-2"
                                        v-model="selectedMember"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id_mem'"
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
                              </div> -->
                              <hr />
                            </b-tab>
                            <b-tab
                              :title="$t('general.People')"
                              @click="getUsers()"
                            >
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-group>
                                          <b-form-radio-group
                                            id="radio-group-people"
                                            v-model="selectedselectOption"
                                            :options="selectOptions"
                                            name="radio-options-people"
                                            @change="selectedAllMulty"
                                          ></b-form-radio-group>
                                        </b-form-group>
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
                                        v-model="selectedPeople"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id-user'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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

                              <h2 v-else>{{ $t("general.No_data") }}</h2>

                              <!-- End Chats -->
                            </b-tab>
                            <b-tab title="Business" @click="getBizs()">
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-group>
                                          <b-form-radio-group
                                            id="radio-group-business"
                                            v-model="selectedselectOption"
                                            :options="selectOptions"
                                            name="radio-options-business"
                                            @change="selectedAllMulty"
                                          ></b-form-radio-group>
                                        </b-form-group>
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
                                <tr
                                  v-for="(elm, index) in bizs"
                                  :key="index"
                                  class="p-2 message"
                                >
                                  <td>
                                    <b-form-checkbox-group
                                      id="checkbox-group-3"
                                      v-model="selectedBusiness"
                                      name="flavour-2"
                                    >
                                      <b-form-checkbox
                                        :id="index + '_id-busid'"
                                        :name="elm.name"
                                        :value="elm.id"
                                        :unchecked-value="false"
                                      >
                                        <!-- @input="selectedMember(elm)" -->
                                        <b-avatar
                                          class="d-inline-block"
                                          variant="light"
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

                              <h2 v-else>{{ $t("general.No_Business") }}</h2>

                              <!-- End Chats -->
                            </b-tab>
                            <b-tab title="Network" @click="getNetworks()">
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-group>
                                          <b-form-radio-group
                                            id="radio-group-1"
                                            v-model="selectedselectOption"
                                            :options="selectOptions"
                                            name="radio-options"
                                            @change="selectedAllMulty"
                                          ></b-form-radio-group>
                                        </b-form-group>
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
                                        v-model="selectedNetwork"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id-netw'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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

                              <h2 v-else>{{ $t("general.No_Network") }}</h2>

                              <!-- End Chats -->
                            </b-tab>

                            <b-tab
                              :title="$t('general.Editor')"
                              @click="getEditors()"
                            >
                              <div v-if="loader" class="text-center">
                                <b-spinner
                                  variant="primary"
                                  label="Spinning"
                                  class="centralizer"
                                ></b-spinner>
                              </div>
                              <!-- Length: {{ bizs }} -->
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
                                        v-model="selectedEditor"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id-edit'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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

                              <h2 v-else>
                                {{ $t("general.No_Editor") }}
                              </h2>

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
                          <h2>{{ type.toUpperCase() }}</h2>
                          <br />
                          <div v-if="newChatLoader" class="text-center">
                            <b-spinner
                              variant="primary"
                              label="Spinning"
                              class="centralizer"
                            ></b-spinner>
                          </div>
                          <table v-else class="table">
                            <tbody v-if="type == 'user'">
                              <tr
                                v-for="(user, index) in users"
                                :key="index"
                                class="p-2 message"
                                @click="
                                  selectedChat({
                                    type: 'user',
                                    chat: user,
                                    id: user.id,
                                  })
                                "
                              >
                                <td>
                                  <b-avatar
                                    class="d-inline-block"
                                    variant="light"
                                    size="30"
                                    :src="
                                      getImage({
                                        type: 'user',
                                        image: user.profile_picture,
                                      })
                                    "
                                  ></b-avatar>
                                  <span class="bold"> {{ user.name }} </span>
                                </td>
                              </tr>
                            </tbody>
                            <tbody v-if="type == 'business'">
                              <tr
                                v-for="(biz, index) in allBizs"
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
                                    variant="light"
                                    size="30"
                                    :src="
                                      getImage({
                                        type: 'business',
                                        image: biz.logo_path,
                                      })
                                    "
                                  ></b-avatar>
                                  <span class="bold"> {{ biz.name }} </span>
                                </td>
                              </tr>
                            </tbody>
                            <tbody v-if="type == 'network'">
                              <tr
                                v-for="(network, index) in nets"
                                :key="index"
                                class="p-2 message"
                                @click="
                                  selectedChat({
                                    type: 'network',
                                    chat: network,
                                    id: network.id,
                                  })
                                "
                              >
                                <td>
                                  <b-avatar
                                    class="d-inline-block"
                                    variant="light"
                                    size="30"
                                    :src="
                                      getImage({
                                        type: 'network',
                                        image: network.image,
                                      })
                                    "
                                  ></b-avatar>
                                  <span class="bold"> {{ network.name }} </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </table>
                    </div>
                    <b-button
                      v-if="bulk"
                      block
                      variant="primary"
                      @click="$bvModal.show('group-name')"
                      >{{ $t("businessowner.Next") }}</b-button
                    >
                    <!-- :disabled="selectedMulty.length ? false : true" -->

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
      <div v-else>
        <b-row class="chat-box border border-bottom-none">
          <b-col class="col-4 pr-0">
            <div class="right  border-right">
              <div class="d-flex">
                <div class="p-2">
                  <b-avatar
                    class="d-inline-block profile-pic"
                    variant="light"
                    :src="currentBiz.profile_picture"
                    square
                  ></b-avatar>
                </div>
                <div>
                  <h1 class="mt-4 title text-bold">
                    {{
                      currentBiz.name
                        ? currentBiz.name.length > 15
                          ? currentBiz.name.substring(0, 14) + "..."
                          : currentBiz.name
                        : "loading..."
                    }}
                  </h1>
                </div>
                <div class="ml-auto">
                 
                  <b-dropdown
                    variant="white"
                    toggle-class="text-decoration-none"
                    no-caret
                    class="new-message"
                  >
                    <template #button-content>
                      <b-icon
                        class="h2   float-right"
                        icon="pencil-square"
                      ></b-icon>
                    </template>
                    <b-dropdown-item
                      @click="newMessage({ newmsg: true, bulk: false })"
                    >
                      {{ $t("businessowner.New_Chat") }}</b-dropdown-item
                    >
                    <b-dropdown-item v-if="isPremium"
                      @click="newMessage({ newmsg: true, bulk: true })"
                    >
                      {{ $t("businessowner.New_Group_Chat") }}
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>

              <b-row class="mt-12">
                <b-col>
                  <b-tabs
                    v-model="tabIndex"
                    content-class="mt-12 ma-4 "
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
                            class="form-control input-background mb-2"
                            :placeholder="this.$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'user',
                                keyword: searchQuery,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                     
                      <div class="messages contacts-height">
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
                       
                        <div v-if="chatList.length > 0">
                          <b-row
                            v-for="(chat, index) in chatList"
                            :key="index"
                            :class="[
                              'p-2 message ',
                              {
                                messageSelected:
                                  (chat.sender_id
                                    ? chat.sender_id
                                    : chat.receiver_id) ==
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
                                id: chat.sender_id
                                  ? chat.sender_id
                                  : chat.receiver_id,
                              })
                            "
                          >
                            <b-col class="col-8">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="light"
                                  :src="chatListImage(chat)"
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ formatName(chat) }}</b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-4 text-center">

                              <span class="text-center float-right mt-n0">
                                <b-dropdown
                                  variant="link"
                                  size="lg"
                                  toggle-class="text-decoration-none p-0"
                                  no-caret
                                  right
                                >
                                  <template slot="button-content">
                                    <b><i class="fas fa-ellipsis-v"></i></b>
                                  </template>
                                  <b-dropdown-item 
                                  @click="deleteChat(
                                    chat , chatList , 
                                     {
                                        type: 'user',
                                        chat: chat,
                                        id: chat.sender_id
                                          ? chat.sender_id
                                          : chat.receiver_id,
                                      }
                                    )">
                                    Delete
                                  </b-dropdown-item>
                                </b-dropdown>
                              </span>


                             
                              
                              <small class="text-center small">
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
                        <h3 v-else>{{ $t("businessowner.No_chat") }}</h3>
                         </VuePerfectScrollbar>
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
                            v-model="searchQueryBusiness"
                            class="form-control input-background mb-2"
                            :placeholder="$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'business',
                                keyword: searchQueryBusiness,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      
                      <div class="messages contacts-height">
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
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
                                  (chat.sender_business_id == currentBizSlug
                                    ? chat.receiver_business_id
                                    : chat.sender_business_id) ==
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
                                id:
                                  chat.sender_business_id == currentBizSlug
                                    ? chat.receiver_business_id
                                    : chat.sender_business_id,
                              })
                            "
                          >
                            <b-col class="col-8">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="light"
                                  :src="chatListImage(chat)"
                                  square
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ formatName(chat) }}</b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-4 text-center">

                              <span class="text-center mr-1 float-right mt-n0">
                                <b-dropdown
                                  variant="link"
                                  size="lg"
                                  toggle-class="text-decoration-none p-0"
                                  no-caret
                                  right
                                >
                                  <template slot="button-content">
                                    <b><i class="fas fa-ellipsis-v"></i></b>
                                  </template>
                                  <b-dropdown-item 
                                  @click="deleteChat(
                                    chat , chatList , 
                                    {
                                      type: 'business',
                                      chat: chat,
                                      id:
                                        chat.sender_business_id == currentBizSlug
                                          ? chat.receiver_business_id
                                          : chat.sender_business_id,
                                    }
                                    )">
                                    Delete
                                  </b-dropdown-item>
                                </b-dropdown>
                              </span>

                              <small class="text-center small">
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
                        <h3 v-else>{{ $t("businessowner.No_chat") }}</h3>
                         </VuePerfectScrollbar>
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
                            v-model="searchQueryNetwork"
                            class="form-control input-background mb-2"
                            :placeholder="$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'network',
                                keyword: searchQueryNetwork,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      
                      <div class="messages contacts-height">
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
                        
                        <b-row
                      
                          v-for="(chat, index) in chatList"
                          :key="index"
                          :class="[
                            'p-2 message ',
                            {
                              messageSelected:
                                (chat.sender_network_id
                                  ? chat.sender_network_id
                                  : chat.receiver_network_id) ==
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
                              id: chat.sender_network_id
                                ? chat.sender_network_id
                                : chat.receiver_network_id,
                            })
                          "
                        >
                          <b-col class="col-8">
                            <span style="display: inline-flex">
                              <b-avatar
                                class="d-inline-block profile-pic"
                                variant="light"
                                :src="chatListImage(chat)"
                                square
                              ></b-avatar>

                              <h6 class="mt-2 d-inline-block ml-2">
                                <b class="bold"> {{ formatName(chat) }}</b>
                                <p class="duration">{{ chat.message }}</p>
                              </h6>
                            </span>
                          </b-col>

                          <b-col class="col-4 text-center">
                            <span class="text-center mr-1 float-right mt-n0">
                                <b-dropdown
                                  variant="link"
                                  size="lg"
                                  toggle-class="text-decoration-none p-0"
                                  no-caret
                                  right
                                >
                                  <template slot="button-content">
                                    <b><i class="fas fa-ellipsis-v"></i></b>
                                  </template>
                                  <b-dropdown-item 
                                  @click="deleteChat(chat , chatList , {
                              type: 'network',
                              chat: chat,
                              id: chat.sender_network_id
                                ? chat.sender_network_id
                                : chat.receiver_network_id,
                            })">
                                    Delete
                                  </b-dropdown-item>
                                </b-dropdown>
                              </span>
                              
                            <small class="text-center small">
                              {{ getCreatedAt(chat.created_at) }}
                            </small>
                            <!-- <p class="text-center">
                              <b-badge variant="info">
                                {{ chat.receiver_network_id }}
                              </b-badge>
                            </p> -->
                          </b-col>
                        </b-row>
                         </VuePerfectScrollbar>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                    <b-tab v-if="isPremium"
                      :title="$t('general.Groups')"
                      @click="getChatList({ type: 'group' })"
                    >
                      <!-- Group Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQueryGroups"
                            class="form-control input-background mb-2 "
                            :placeholder="$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'group',
                                keyword: searchQueryGroups,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      
                      <div class="messages contacts-height">
                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
                        
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
                            <b-col class="col-8">
                              <span style="display: inline-flex">
                                <b-avatar
                                  class="d-inline-block profile-pic"
                                  variant="light"
                                  :src="require('@/assets/default_group.png')"
                                ></b-avatar>

                                <h6 class="mt-2 d-inline-block ml-2">
                                  <b class="bold"> {{ chat.groupName }} </b>
                                  <p class="duration">{{ chat.message }}</p>
                                </h6>
                              </span>
                            </b-col>

                            <b-col class="col-4 text-center">

                              <span class="text-center float-right mt-n0 mr-2">
                                <b-dropdown
                                  variant="link"
                                  size="lg"
                                  toggle-class="text-decoration-none p-0"
                                  no-caret
                                  right
                                >
                                  <template slot="button-content">
                                    <b><i class="fas fa-ellipsis-v"></i></b>
                                  </template>
                                  <b-dropdown-item 
                                  @click="deleteChat(chat , chatList , {
                                    type: 'group',
                                    chat: chat,
                                    id: chat.id,
                                  })">
                                    Delete
                                  </b-dropdown-item>
                                </b-dropdown>
                              </span>
                              
                              <small class="text-center small">
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
                        <h3 v-else>{{ $t("businessowner.No_chat") }}</h3>
                         </VuePerfectScrollbar>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                  </b-tabs>
                </b-col>
              </b-row>
            </div>
          </b-col>

          <!-- selected Chat  -->
          <b-col v-if="newMsg == false && info == false" class="p-0 back-image">
            <div>
              <div class="chat-nav shadow" v-if="chatSelected.active">
                <b-row class="desk" v-if="chatSelected.active">
                  <b-col class="col-2" @click="info = true">
                    <b-avatar
                      variant="light"
                      :square="type == 'user' ? false : true"
                      :src="chatListImage(chatSelected)"
                      size="50"
                    ></b-avatar>
                  </b-col>

                  <b-col class="detail" @click="info = true">
                    <h3>{{ formatName(chatSelected.chat) }}</h3>
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

                  <b-col class="col-3">
                    <b-row class="mt-3 ml-5">
                      <b-col class="col-3">
                        <b-icon
                          v-b-toggle.collapse-1
                          class="msg-icon primary icon-size"
                          icon="search"
                          style="cursor: pointer"
                        ></b-icon>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </div>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card style="margin-top: -15px">
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
                    placeholder="Search... press enter"
                  />
                </b-card>
              </b-collapse>
              <section
                v-if="chatSelected.active"
                class="chats"
                style="margin-left: 1px"
                ref="feed"
              >

                         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}"
    >
                <div v-if="loader" class="text-center mt-12 pt-12">
                  <b-spinner
                    variant="primary"
                    label="Spinning"
                    class="spinner centralizer"
                  ></b-spinner>
                </div>
                <div v-else v-for="chat in chats" :key="chat.id">
                  <div
                    v-if="
                    currentBizSlug != chat.sender_business_id &&
                    currentBizSlug != chat.businessID
                    " >
                    <b-row class="p-2">
                      <b-col>
                        <b v-if="type == 'group'">
                          {{ getName(chat) }}
                        </b>
                        <p
                          v-if="chat.attachment"
                          class="msg-text mt-0 text"
                        />
                        <span class="text-center float-right mt-n0">
                            <b-dropdown
                              variant="link"
                              size="lg"
                              toggle-class="text-decoration-none"
                              no-caret
                              right
                            >
                              <template slot="button-content">
                                <b><i class="fas fa-ellipsis-v"></i></b>
                              </template>
                              <b-dropdown-item 
                              @click="deleteMessage(chat , chats , type)">
                                Delete
                              </b-dropdown-item>
                            </b-dropdown>
                          </span>
                        <!-- <i class="fa fa-ellipsis-v float-right mt-"></i></p> -->
                        <br />
                        <p v-if="chat.message" class="msg-text mt-0 text">
                          <!-- <span class="text-center float-right mt-n2">
                            <b-dropdown
                              variant="link"
                              size="lg"
                              toggle-class="text-decoration-none"
                              no-caret
                              right
                            >
                              <template slot="button-content">
                                <b><i class="fas fa-ellipsis-v"></i></b>
                              </template>
                              <b-dropdown-item @click="deleteMessage(chat , chats , type)">Delete</b-dropdown-item>
                            </b-dropdown>
                          </span> -->
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
                          <small
                            class="float-right mt-2 text-white pr-1 pt-1 small"
                          >
                            {{ getCreatedAt(chat.created_at) }}
                          </small>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-else>
                    <b-row class="p-2">
                      <b-col>
                        <p
                          v-if="chat.message"
                          id="sent"
                          class="msg-text-sent text"
                        >
                        <span class="text-center float-right mt-n0">
                            <b-dropdown
                              variant="link"
                              size="lg"
                              toggle-class="text-decoration-none p-0"
                              no-caret
                              right
                            > 
                              <template slot="button-content">
                                <b><i class="fas fa-ellipsis-v"></i></b>
                              </template>
                              <b-dropdown-item 
                              @click="deleteMessage(chat , chats , type)">
                                Delete 
                              </b-dropdown-item>
                            </b-dropdown>
                          </span>
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
                          <small
                            class="float-right mt-2 text-white pr-1 pt-1 small"
                          >
                            {{ getCreatedAt(chat.created_at) }}
                          </small>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </div>
                         </VuePerfectScrollbar>
              </section>


              <section v-else class="" style="margin-left: 1px; height:80vh" ref="feed">
              <div class="mt-6 pt-12 d-flex h-100">
                <h3 class="text-center m-auto">  {{ $t("businessowner.Select_a_chat") }} </h3>
              </div>
            </section>


<div  v-if="chatSelected.active" class="bottom mt-3">
              <div style="width: 60%;"> 
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

                  <b-col cols="2" class="p-0 pl-2">
                    <b-icon
                      @click="send"
                      class="msg-icon primary icon-size icon-top"
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
                variant="light"
                :src="chatSelected.logo_path"
                size="200"
              ></b-avatar>
              <div class="info-detail">
                <h3 class="info-name">{{ chatSelected.name }}</h3>
                <!-- <b-link class="primary">{{
                  $t("businessowner.View_Profile")
                }}</b-link> -->
                <b-row v-if="type == 'group'" class="justify-content-md-center">
                  <b-col cols="12" md="auto">
                    <table class="info-name">
                      <tr class="text-center">
                        <th>
                          <u> Members </u>
                        </th>
                      </tr>
                      <tr v-for="(member, index) in groupMembers" :key="index">
                        <td>{{ getName(member) }}</td>
                      </tr>
                    </table>
                  </b-col>
                </b-row>
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
            class="p-0 back-image"
           
          >
            <div class=" back-image" style="margin-right: 17px">
              <div class="info-nav">
                <b-row>
                  <b-col class="col-1 mt-3"> {{ $t("general.To") }} </b-col>
                  <b-col>
                    <b-form-input
                      id="textarea"
                      v-model="newSearchQuery"
                      class="input-background"
                      style="width: 100%"
                      :placeholder="$t('general.Type_the_name_of_person_or_Business')"
                      @input="onPressSearchNewChat"
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
                          <!-- business: {{ selectedBusiness }} Member:{{
                            selectedPeople
                          }}
                          Network: {{ selectedNetwork }} -->
                          <b-tabs
                            v-model="tabMemberType"
                            content-class=" ma-4 "
                            fill
                            pills
                            
                          >
                            <b-tab :title="$t('general.All')" @click="getAll()">
                              <!-- All Selection -->
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-group>
                                          <b-form-radio-group
                                            id="radio-group-1"
                                            v-model="selectedselectOptionAll"
                                            :options="selectOptionsAll"
                                            name="radio-options"
                                            @change="selectAllForAllTab"
                                          ></b-form-radio-group>
                                        </b-form-group>
                                      </b-col>
                                    </b-row>
                                  </b-card>
                                </b-col>
                              </b-row>
                              <!-- All Selection -->
                              <div v-if="loader" class="text-center">
                                <b-spinner
                                  variant="primary"
                                  label="Spinning"
                                  class="centralizer"
                                ></b-spinner>
                              </div>
                              <h5>{{ $t("businessowner.People") }}</h5>
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
                                        v-model="selectedPeople"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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
                              <h5>{{ $t("general.Business") }}</h5>
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
                                        v-model="selectedBusiness"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id_biz'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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
                                        v-model="selectedNetwork"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id_net'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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
                                        v-model="selectedEditor"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id_edit'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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
                            <b-tab
                              :title="$t('general.People')"
                              @click="getUsers()"
                            >
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-group>
                                          <b-form-radio-group
                                            id="radio-group-people"
                                            v-model="selectedselectOption"
                                            :options="selectOptions"
                                            name="radio-options-people"
                                            @change="selectedAllMulty"
                                          ></b-form-radio-group>
                                        </b-form-group>
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
                                        v-model="selectedPeople"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id-user'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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

                              <h2 v-else>{{ $t("general.No_data") }}</h2>

                              <!-- End Chats -->
                            </b-tab>
                            <b-tab title="Business" @click="getBizs()">
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-group>
                                          <b-form-radio-group
                                            id="radio-group-business"
                                            v-model="selectedselectOption"
                                            :options="selectOptions"
                                            name="radio-options-business"
                                            @change="selectedAllMulty"
                                          ></b-form-radio-group>
                                        </b-form-group>
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
                                <tr
                                  v-for="(elm, index) in bizs"
                                  :key="index"
                                  class="p-2 message"
                                >
                                  <td>
                                    <b-form-checkbox-group
                                      id="checkbox-group-3"
                                      v-model="selectedBusiness"
                                      name="flavour-2"
                                    >
                                      <b-form-checkbox
                                        :id="index + '_id-busid'"
                                        :name="elm.name"
                                        :value="elm.id"
                                        :unchecked-value="false"
                                      >
                                        <!-- @input="selectedMember(elm)" -->
                                        <b-avatar
                                          class="d-inline-block"
                                          variant="light"
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

                              <h2 v-else>{{ $t("general.No_Business") }}</h2>

                              <!-- End Chats -->
                            </b-tab>
                            <b-tab title="Network" @click="getNetworks()">
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-group>
                                          <b-form-radio-group
                                            id="radio-group-1"
                                            v-model="selectedselectOption"
                                            :options="selectOptions"
                                            name="radio-options"
                                            @change="selectedAllMulty"
                                          ></b-form-radio-group>
                                        </b-form-group>
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
                                        v-model="selectedNetwork"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id-netw'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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

                              <h2 v-else>{{ $t("general.No_Network") }}</h2>

                              <!-- End Chats -->
                            </b-tab>

                            <b-tab
                              :title="$t('general.Editor')"
                              @click="getEditors()"
                            >

                   
                              <!-- All Selection -->
                              <b-row>
                                <b-col>
                                  <b-card>
                                    <b-row class="text-center">
                                      <b-col>
                                        <b-form-group>
                                          <b-form-radio-group
                                            id="radio-editor-1"
                                            v-model="selectedselectOption"
                                            :options="selectOptionsAll"
                                            name="radio-options-editor"
                                            @change="selectAllForAllTab"
                                          ></b-form-radio-group>
                                        </b-form-group>
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
                              <!-- Length: {{ bizs }} -->
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
                                        v-model="selectedEditor"
                                        name="flavour-2"
                                      >
                                        <b-form-checkbox
                                          :id="index + '_id-edit'"
                                          :name="biz.name"
                                          :value="biz.id"
                                        >
                                          <b-avatar
                                            class="d-inline-block"
                                            variant="light"
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

                              <h2 v-else>{{ $t("general.No_Editor") }}</h2>

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
                          <h2>{{ type.toUpperCase() }}</h2>
                          <br />
                          <div v-if="newChatLoader" class="text-center">
                            <b-spinner
                              variant="primary"
                              label="Spinning"
                              class="centralizer"
                            ></b-spinner>
                          </div>
                          <table v-else class="table">
                            <tbody v-if="type == 'user'">
                              <tr
                                v-for="(user, index) in users"
                                :key="index"
                                class="p-2 message"
                                @click="
                                  selectedChat({
                                    type: 'user',
                                    chat: user,
                                    id: user.id,
                                  })
                                "
                              >
                                <td>
                                  <b-avatar
                                    class="d-inline-block"
                                    variant="light"
                                    size="30"
                                    :src="
                                      getImage({
                                        type: 'user',
                                        image: user.profile_picture,
                                      })
                                    "
                                  ></b-avatar>
                                  <span class="bold"> {{ user.name }} </span>
                                </td>
                              </tr>
                            </tbody>
                            <tbody v-if="type == 'business'">
                              <tr
                                v-for="(biz, index) in allBizs"
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
                                    variant="light"
                                    size="30"
                                    :src="
                                      getImage({
                                        type: 'business',
                                        image: biz.logo_path,
                                      })
                                    "
                                  ></b-avatar>
                                  <span class="bold"> {{ biz.name }} </span>
                                </td>
                              </tr>
                            </tbody>
                            <tbody v-if="type == 'network'">
                              <tr
                                v-for="(network, index) in nets"
                                :key="index"
                                class="p-2 message"
                                @click="
                                  selectedChat({
                                    type: 'network',
                                    chat: network,
                                    id: network.id,
                                  })
                                "
                              >
                                <td>
                                  <b-avatar
                                    class="d-inline-block"
                                    variant="light"
                                    size="30"
                                    :src="
                                      getImage({
                                        type: 'network',
                                        image: network.image,
                                      })
                                    "
                                  ></b-avatar>
                                  <span class="bold"> {{ network.name }} </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </table>
                    </div>
                    <b-button
                      v-if="bulk"
                      block
                      variant="primary"
                      @click="$bvModal.show('group-name')"
                      >{{ $t("businessowner.Next") }}</b-button
                    >
                    <!-- :disabled="selectedMulty.length ? false : true" -->

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
      <b-modal id="preview-file" hide-footer>
        <div class="d-block text-center">
          <h3>Preview file:</h3>
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
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import _ from "lodash";
import { isPremium } from '@/helpers';
export default {
  components: {
    EmojiPicker,VuePerfectScrollbar
  },
  data() {
    
    
    return {
      props: ['chats'],
      isPremium: isPremium(),
      groupAdminId: null,
      screenWidth: window.screen.width,
      screenX: 0,
      mobile: false,
      rightSide: true,
      leftSide: true,
      audio: new Audio("@/assets/sound/message.mp3"),

      formData: new FormData(),
      groupName: "",
      tabMemberType: 0,
      selectOptions: [
        { text: "All", value: "all" },
        { text: "Followers", value: "follower" },
        { text: "Following", value: "following" },
      ],
      selectedselectOption: "",
      selectOptionsAll: [{ text: "All", value: "all" }],
      selectedselectOptionAll: "",
      selectedBusiness: [],
      selectedPeople: [],
      selectedNetwork: [],
      selectedEditor: [],

      selectedMulty: [],

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
      // socket: io(process.env.VUE_APP_CHAT_SERVER_URL_DEV, {
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
      newSearchQuery: "",
      message: {},
      newMsg: false,
      show: false,
      info: false,
      checked: false,
      text: "",
      selected: [],
      messages: null,
      searchQueryBusiness: "",
      searchQueryNetwork: "",
      searchQueryGroups: "",
    };
  },
  watch: {
    screenWidth(newWidth, oldWidth) {
      this.screenX = newWidth;
      this.mobile = this.screenX < 930;
    },
  },

  computed: {
     business_info() {
      return this.$store.state.businessOwner.businessInfo;
    },
    
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

    lastcreatedgroup() {
      return this.$store.getters["businessChat/getlastcreatedgroup"];
    },

    currentBizId() {
      return this.$store.getters["businessChat/getCurrentBizId"];
    },

     currentBizSlug() {
      return this.$store.getters["businessChat/getCurrentBizSlug"];
    },

    currentBiz() {
      return this.$store.getters["auth/profilConnected"];
    },
    userInfo() {
      return this.$store.getters["businessChat/getUserInfo"];
    },

    bizs() {
      return this.$store.getters["businessChat/getBizs"];
    },

    allBizs() {
      return this.$store.getters["userChat/getBizs"];
    },

    users() {
      return this.$store.getters["userChat/getUsers"];
    },

    nets() {
      return this.$store.getters["userChat/getNets"];
    },

    chatList() {
      return this.$store.getters["businessChat/getChatList"];
    },

    currentUser() {
      // return this.$store.getters['userChat/getUser'];
      return this.$store.getters["auth/profilConnected"];
    },

    chats() {
      return this.$store.getters["businessChat/getChats"];
    },

    newChatLoader() {
      return this.$store.getters["userChat/getLoader"];
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
    this.mobile = this.screenWidth < 930;
    
    if (this.chatList.length < 0) {
      this.getChatList({ type: "business" });
    }
    this.getAll();
    this.getBizs();
    window.addEventListener("resize", () => {
      this.screenWidth = window.screen.width;
    });
  },
  created() {

     this.$store.commit(
      "businessChat/setCurrentBizId", 
         this.$route.params.id
    );

      this.$store.commit(
      "businessChat/setCurrentBizSlug",
        this.$store.state.businessOwner.businessInfo.id
    );

    this.socketListenners();
    this.getCurBiz();
    this.getUserInfo();

    this.tabIndex = this.$route.query.msgTabId
      ? Number(this.$route.query.msgTabId)
      : "no";

    if ([0, 1, 2].includes(this.tabIndex)) {
     
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
    onPressSearchNewChat: _.debounce(function(e) {
     
      this.getList(e);
    }, 1000),
    chatListImage(value) {
      var image = "";
      let user = require("@/assets/profile_white.png");
      let network = require("@/assets/network_default.png");
      let business = require("@/assets/business_white.png");
      let group = require("@/assets/default_group.png");

      let data = value.chat ? value.chat : value;

      if (this.type == "user") {
        image = data.sender
          ? data.sender.profile_picture
          : data.receiver
          ? data.receiver.profile_picture
          : data.profile_picture
          ? data.profile_picture
          : user;
      } else if (this.type == "business") {
        image = data.sender_business_id
          ? data.sender_business_id == this.currentBizSlug
            ? data.receiver_business.logo_path
            : data.sender_business
            ? data.sender_business.logo_path
            : data.logo_path
          : business;
      } else if (this.type == "network") {
        image = data.receiver_network
          ? data.receiver_network.image
          : data.sender_network
          ? data.sender_network.image
          : data.image
          ? data.image
          : network;
      } else image = group;
      
      return image;
    },
    formatName(value) {
      var name = "";
     
      if (this.type == "user") {
        name = value.sender
          ? value.sender.name
          : value.receiver
          ? value.receiver.name
          : value.name;
      } else if (this.type == "business") {
        name = value.sender_business_id
          ? value.sender_business_id == this.currentBizSlug
            ? value.receiver_business.name
            : value.sender_business
            ? value.sender_business.name
            : value.name
          : value.name;
      } else if (this.type == "network") {
        name = value.receiver_network
          ? value.receiver_network.name
          : value.sender_network
          ? value.sender_network.name
          : value.name;
      } else name = value.groupName ? value.groupName : value.name;

      return name;
    },
    getImage(data) {
     
      let image = data.image;
      let finale = "";
      let user = require("@/assets/profile_white.png");
      let network = require("@/assets/network_default.png");
      let business = require("@/assets/business_white.png");

      if (data.type == "user") {
        finale = image
          ? image.includes("profile_default.png")
            ? user
            : image
          : user;
      } else if (data.type == "network") {
        finale = image
          ? image.includes("network_default.png")
            ? network
            : image
          : network;
      } else if (data.type == "business") {
        finale = image
          ? image.includes("business_default.png")
            ? business
            : image
          : business;
      }

      return finale;
    },
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
        : this.$t("businessowner.me");
    },
    convert(bytes, decimals = 2) {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },

    selectedAllMulty(val) {
      let selected = [];
      switch (this.tabMemberType) {
        case 1:
          this.selectedPeople = [];
          if (val == "all") {
            this.bizs.map((biz) => {
              this.selectedPeople.push(biz.id);
            });
          } else if (val == "follower") {
            selected = this.bizs.filter((biz) => {
              return biz.statusType === "follower";
            });
            selected.map((elm) => {
              this.selectedPeople.push(elm.id);
              this.groupMembers.push({ type: elm.accountType, id: elm.id });
            });
          } else {
            selected = this.bizs.filter((biz) => {  
              return biz.statusType === "following";
            });
            selected.map((elm) => {
              this.selectedPeople.push(elm.id);
              this.groupMembers.push({ type: elm.accountType, id: elm.id });
            });
          }
          break;

        case 2:
          this.selectedBusiness = [];
          if (val == "all") {
            this.bizs.map((biz) => {
              this.selectedBusiness.push(biz.id);
            });
          } else if (val == "follower") {
            selected = this.bizs.filter((biz) => {
              return biz.statusType === "follower";
            });
            selected.map((elm) => {
              this.selectedBusiness.push(elm.id);
              this.groupMembers.push({ type: elm.accountType, id: elm.id });
            });
          } else {
            selected = this.bizs.filter((biz) => {
              return biz.statusType === "following";
            });
            selected.map((elm) => {
              this.selectedBusiness.push(elm.id);
              this.groupMembers.push({ type: elm.accountType, id: elm.id });
            });
          }
          break;

        case 3:
          this.selectedNetwork = [];
          if (val == "all") {
            this.bizs.map((biz) => {
              this.selectedNetwork.push(biz.id);
            });
          } else if (val == "follower") {
            selected = this.bizs.filter((biz) => {
              return biz.statusType === "follower";
            });
            selected.map((elm) => {
              this.selectedNetwork.push(elm.id);
              this.groupMembers.push({ type: elm.accountType, id: elm.id });
            });
          } else {
            selected = this.bizs.filter((biz) => {
              return biz.statusType === "following";
            });
            selected.map((elm) => {
              this.selectedNetwork.push(elm.id);
              this.groupMembers.push({ type: elm.accountType, id: elm.id });
            });
          }
          break;

          case 4:

          this.selectedEditor = [];
          if (val == "all") {
            this.bizs.map((biz) => {
              this.selectedEditor.push(biz.id);
            });
          } else if (val == "follower") {
            selected = this.bizs.filter((biz) => {
              return biz.statusType === "follower";
            });

            
            selected.map((elm) => {
              this.selectedEditor.push(elm.id);
              this.groupMembers.push({ type: elm.accountType, id: elm.id });
            });
          } else {
            selected = this.bizs.filter((biz) => {
              return biz.statusType === "following";
            });
            selected.map((elm) => {
              this.selectedEditor.push(elm.id);
              this.groupMembers.push({ type: elm.accountType, id: elm.id });
            });
          }
          
          break;

        default:
      }
    },
    selectAllForAllTab(val) {
    
      this.selectedPeople = [];
      if (val == "all") {
        this.allUsers.map((biz) => {
          this.selectedPeople.push(biz.id);
        });
      }

      this.selectedBusiness = [];
      if (val == "all") {
        this.allBusiness.map((biz) => {
          this.selectedBusiness.push(biz.id);
        });
      }

      this.selectedNetwork = [];
      if (val == "all") {
        this.allNetworks.map((biz) => {
          this.selectedNetwork.push(biz.id);
        });
      }

      this.selectedEditor = [];
      if (val == "all") {
    
        this.allEditors.map((biz) => {
          this.selectedEditor.push(biz.id);
        });

        this.bizs.map((biz) => {
          this.selectedEditor.push(biz.id);
        });
          
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

      this.socket.on("groupMessage", (data) => {
        this.chats.push(data);
        this.formData.append("message", data.message);

        this.formData.append("userID", data.userID);
        this.formData.append("businessID", data.businessID);
        this.formData.append("networkID", data.networkID);
        this.formData.append("businessEditorID", data.businessEditorID);

        this.saveMessage(this.formData);
        this.$store.dispatch("businessChat/GET_BIZS_CHAT_LIST_Dos", {
          type: this.type,
        });
      });

      this.socket.on("privateMessage", (data) => {
     
        this.chats.push(data);
        this.formData.append("sender_business_id", data.sender_business_id);
        this.formData.append("message", data.message);
        this.formData.append("receiver_business_id", data.receiver_business_id);
        this.formData.append("receiver_network_id", data.receiver_business_id);
        this.formData.append("receiver_id", data.receiver_business_id);
        this.formData.append("type", data.type);

        this.saveMessage(this.formData);
        this.$store.dispatch("businessChat/GET_BIZS_CHAT_LIST_Dos", {
          type: this.type,
        });
      });
    },
    async createGroup(receiver_business_id) {
      await this.$store
        .dispatch("businessChat/CREATE_GROUP", {
          groupName: this.groupName,
          userID: this.selectedPeople.toString(),
          businessID: this.selectedBusiness.toString(),
          networkID: this.selectedNetwork.toString(),
          businessEditorsID: this.selectedEditor.toString(),
        })
        .then(() => {
          this.selectedChat({
            type: "group",
            chat: this.lastcreatedgroup,
            id: this.chatId,
          });
        });
      this.socket.emit("create-group", this.chatId);
      let sender_business_id = this.chatId;
      this.room = [
        sender_business_id,
        ...this.selectedPeople,
        ...this.selectedBusiness,
        ...this.selectedNetwork,
        ...this.selectedEditor,
      ];
      this.tabIndex = 3;
    },

    createRoom(receiver_business_id) {
   
      let sender_business_id = this.currentBizSlug;
      this.room = [receiver_business_id, sender_business_id];
      this.socket.emit("create", this.room);
   
    },
    getCreatedAt(data) {
      if (moment(data).isBefore(moment())) {
        return moment(data).format("ddd") + " " + moment(data).format("LT");
      } else {
        return moment(data).format("LT");
      }
    },
    getList(keyword) {
      if (this.type == "user") {
        this.$store.dispatch("userChat/GET_USERS", keyword);
      } else if (this.type == "business") {
        this.$store.dispatch("userChat/GET_BIZS", keyword);
      } else {
      
        this.$store.dispatch("userChat/GET_NETS", keyword);
      }
    },
    getUserInfo() {
      this.$store.dispatch("networkChat/GET_USER_INFO").then(() => {
      });
    },
    initFilter() {
      this.selectedselectOption = "";
      this.selectedPeople = [];
      this.selectedBusiness = [];
      this.selectedNetwork = [];
      this.selectedEditor = [];
      this.selectedMember = [];
    },
    getEditors(keyword) {
      this.initFilter();
      this.$store.dispatch("businessChat/GET_EDITORS", {
        keyword: keyword,
      });
    },
    getNetworks(keyword) {
      this.initFilter();
      this.$store.dispatch("businessChat/GET_NETWORKS", {
        keyword: keyword,
      });
    },
    getUsers(keyword) {
      this.initFilter();

      this.$store.dispatch("businessChat/GET_USERS", {
        keyword: keyword,
      });
    },
    getBizs(keyword) {
      this.initFilter();
      this.$store
        .dispatch("businessChat/GET_BIZS", {
          keyword: keyword,
        })
        .then(() => {
          
        })
        .catch(() => console.log("error"));
    },
    getChatList(data) {
      this.type = data.type;
      this.chatSelected.active = false;
      this.newMsg = false;
      this.$store.dispatch("businessChat/GET_BIZS_CHAT_LIST", data);
      // this.scrollToBottom();
    },

    async histBizToBiz(data) {
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
    },
    saveMessage(data) {
      if (this.type == "group") {
        this.$store.dispatch("businessChat/SAVE_GROUP_CHAT", {
          data: data,
          group_id: this.chatId,
          sender_id: this.currentBizSlug,
          type: this.type,
        });
      } else {
        this.$store.dispatch("businessChat/SAVE_BUSINESS_CHAT", {
          data: data,
          type: this.type,
        });
      }
    }, 

    async deleteMessage(data , chatList , type){

      let dataChat = chatList.filter((b) => { return b.id !== data.id;});

      if(type == "user"){
        await this.$store.dispatch("businessChat/DELETE_USER_MESSAGE_BY_MESSAGEID", data)
      }

      if(type == "business"){
        data.businessId = this.chatSelected.id;
        await this.$store.dispatch("businessChat/DELETE_BUSINESS_MESSAGE_BY_MESSAGEID_BUSINESSID", data)
      }

      if(type == "network"){
        data.networkId = this.chatSelected.id;
        await this.$store.dispatch("businessChat/DELETE_NETWORK_MESSAGE_BY_MESSAGEID_NETWORKID", data)
      }
   
      if(type == "group"){
        data.groupId = this.chatSelected.id;
        await this.$store.dispatch("businessChat/DELETE_GROUP_MESSAGE_BYGROUP_ID", data)
      }

      this.$store.dispatch("businessChat/DATA_UPDATE_C", dataChat)

    },
    async deleteChat(data , chatList , type){
      console.log(type);

      console.log(chatList);

      let dataChat = chatList.filter((b) => { return b.id !== data.id;});

      let mainData = {data:dataChat , type:type}  
      
      this.$store.dispatch("businessChat/DELETE_BUSINESS", mainData)
     
    },
  
    async selectedMultyChat() {
      this.$bvModal.hide("group-name");
    
      this.createGroup();
      this.getChatList({ type: "group" });
      this.type = "group";
      this.newMsg = false;
      this.chatSelected = {
        active: true,
        clickedId: this.chatId,
        groupName: this.groupName,
      };

      this.selectedChat({
        type: "group",
        chat: this.lastcreatedgroup,
        id: this.chatId,
      });

    },
    selectedChat(data) {
       
      this.chatId = data.id;
      this.createRoom(data.id);
      if (this.type == "group") {
        this.socket.emit("create-group", this.chatId);
      }
      this.rightSide = screenX > 930;

      this.$store.commit("businessChat/setSelectedChatId", data.id);
      let receiver = { receiverID: data.id, keyword: null };
      if (data.type == "user") {
        this.histBizToUser(receiver);
      } else if (this.type == "network") {
        this.histBizToNetwork(receiver);
      } else if (this.type == "business") {
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
      this.groupAdminId = data.chat.admin_businessID
        ? data.chat.admin_businessID
        : null;
      
    },

    searchChatList(keyword) {
      this.$store
        .dispatch("userChat/GET_USERS", keyword)
        .then(() => {
          
        })
        .catch(() => console.log("error"));
    },
    
    send() {
      if (this.file || (this.input.length > 0 && this.input.length < 500)) {
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
        sender_business_id: this.currentBizSlug,
        room: this.room,
        receiver_business_id: this.chatSelected.id,
        receiver_id: this.chatId,
        attachment: this.file,
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
      
      let data = {};
      if (this.groupMembers.length) {
        
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
      this.rightSide = true;
    },
    showInfo(arg) {
      this.info = arg;
      this.newMsg = arg;
    
    },
    newMessage(arg) {
      this.rightSide = false;
   
      this.getList();
      this.newMsg = true;
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
    },
  },
};
</script>

<style scoped>

.contacts-height{
  height: calc(100vh - 190px);
}

.scroll-area{
  height: inherit;
}
.filePreview {
  width: 100px;
}
.new-msg-filter-list {
  padding: 15px !important;
  /* border: 1px solid black; */
  max-height: 82vh !important;
  overflow-y: auto;
  overflow-x: hidden;
  /* background-color: lightblue; */
}
.small {
  /* padding-top: 10px; */
  font-size: 10px !important;
}
.spinner {
  font-size: 30px;
  width: 08%;
  height: 07%;
}
.centralizer {
  margin-top: 5%;
  width: 3rem;
  height: 3rem;
}

.right {
  padding: 10px;
  /* border-right: 2px solid #ccc; */
}

.primary-bg,
.primary-bg:hover {
  background-color: #e75c18;
  border: none;
}

/* .chat-box {
  position: relative;
  border: solid 2px rgb(223, 223, 223);
  margin-bottom: 100px;
} */


.chat-box {
  position: relative;
  height: 100vh;
  border-radius: 10px;
  /* border: solid 2px rgb(223, 223, 223); */
  /* margin-bottom: 100px; */
  border-bottom: hidden !important;
}
.chat-nav {
  position: relative;
  min-height: 70px;
  /* border-right: 2px solid #ccc; */
  width: 100%;
  padding: 10px;
}
.chats {
  height: calc(100vh - 160px);
  overflow-y: hidden;
  overflow-x: hidden;
  background-image: url("/assets/images/messaging.png"); 
   background-repeat: no-repeat;
  background-size: cover;
  
}
.back-image {
 
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
  overflow-y: hidden;
  overflow-x: hidden;

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
  position: fixed;
    width: 100%;
    bottom: 0;
}


.detail {
  margin-left: -40px;
  cursor: pointer;
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
  margin-top: 500px;
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
    overflow-y: auto;
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
<style>

.messaging .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: white !important;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}


.messaging  .nav-tabs {
    border-bottom: 0px solid #dee2e6;
}
 
</style>
