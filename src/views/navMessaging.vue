<template>
  <div>
    <Navbar />

    <b-container class="wahala">
      <!-- selected Chat  -->

      <div v-if="mobile">
        <b-row class="chat-box">
          <b-col class="pr-0" v-if="rightSide">
            <div class="right">
              <b-row>
                <b-col class="p-2">
                  <b-avatar
                    class="d-inline-block profile-pic"
                    variant="light"
                    :src="
                      getImage({
                        type: 'user',
                        image: currentUser.user.profile_picture,
                      })
                    "
                  ></b-avatar>
                </b-col>
                <b-col>
                  <!-- <small>{{ currentUser }}</small> -->
                  <h1 class="mt-4 title text-bold">
                    {{
                      currentUser
                        ? currentUser.user.name.split(" ")[0]
                        : "loading..."
                    }}
                  </h1>
                </b-col>
                <b-col>
                  <b-icon
                    style="font-size: 38px !important"
                    @click="newMessage(true)"
                    class="h2 new-message primary icon-size float-right pr-3"
                    icon="pencil-square"
                  ></b-icon>
                </b-col>
              </b-row>

              <b-row class="mt-12">
                <b-col>
                  <b-tabs
                    v-model="tabIndex"
                    content-class="mt-12 ma-4 pt-6"
                    fill pills
                  >
                    <b-tab title="User" @click="getChatList({ type: 'user' })">
                      <!-- Users Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQueryUser"
                            class="form-control input-background  mb-2"
                            :placeholder="$t('general.Search_chat_list')"
                            @keypress.enter="
                              getChatList({
                                type: 'user',
                                keyword: searchQueryUser,
                              })
                            "
                          />
                        </b-col>
                      </b-row>
 
                      <div class="messages">
                        <!-- <div v-if="loader" class="text-center mt-6 pt-6">
                          <b-spinner
                            variant="light"
                            label="Spinning"
                            class="centralizer"
                          ></b-spinner>
                        </div> -->
                        <b-row
                        
                          v-for="(chat, index) in chatList"
                          :key="index"
                          :class="[
                            'p-2 message ',
                            {
                              messageSelected:
                                (chat.sender_id == currentUser.user.id
                                  ? chat.receiver_id
                                  : chat.sender_id) ==
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
                              id:
                                chat.sender_id == currentUser.user.id
                                  ? chat.receiver_id
                                  : chat.sender_id,
                            })
                          "
                        >
                          <b-col class="col-8">
                            <span style="display: inline-flex">
                              <b-avatar
                                class="d-inline-block"
                                variant="light"
                                :src="chatListImage(chat)"
                              ></b-avatar>

                              <h6 class="mt-2 d-inline-block ml-2">
                                <b class="bold"> {{ formatName(chat) }} </b>
                                <p class="duration">{{ chat.message }}</p>
                              </h6>
                            </span>
                          </b-col>

                          <b-col class="col-4 text-center">
                            <small class="text-center small">
                              {{ getCreatedAt(chat.created_at) }}
                            </small>
                            <small class="text-center">
                              <b-badge variant="light" v-if="chat.message_count" class="count">{{chat.message_count}}</b-badge>
                            </small>
                          </b-col>
                        </b-row>
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
                            v-model="searchQueryBusiness"
                            class="form-control input-background  mb-2"
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

                      <div class="messages">
                        <!-- <div v-if="loader" class="text-center mt-12 pt-12">
                          <b-spinner
                            variant="light"
                            label="Spinning"
                            class="centralizer"
                          ></b-spinner>
                        </div> -->
                        <b-row
                       
                          v-for="(chat, index) in chatList"
                          :key="index"
                          :class="[
                            'p-2 message ',
                            {
                              messageSelected:
                                (chat.receiver_business_id
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
                              id: chat.receiver_business_id
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
                            <small class="text-center">
                              <b-badge variant="light" v-if="chat.message_count" class="count">{{chat.message_count}}</b-badge>
                            </small>
                          </b-col>
                        </b-row>
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
                            v-model="searchQueryNetwork"
                            class="form-control input-background  mb-2"
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

                      <div class="messages">
                        <div v-if="loader" class="text-center mt-12 pt-12">
                          <b-spinner
                            variant="light"
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
                                (chat.receiver_network_id
                                  ? chat.receiver_network_id
                                  : chat.sender_network_id) ==
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
                              id: chat.receiver_network_id
                                ? chat.receiver_network_id
                                : chat.sender_network_id,
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
                            <small class="text-center">
                              <b-badge variant="light" v-if="chat.message_count" class="count">{{chat.message_count}}</b-badge>
                            </small>
                          </b-col>
                        </b-row>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                  </b-tabs>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col
            v-if="newMsg == false && info == false && rightSide == false"
            class="p-0 back-image"
          >
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
                <b-col class="col-3" @click="info = true">
                  <b-avatar
                    variant="light"
                    :src="chatListImage(chatSelected)"
                    size="60"
                  ></b-avatar>
                </b-col>

                <b-col class="col-sm-5" @click="info = true">
                  <h4>{{ formatHeadChatName(chatSelected) }}</h4>
                  <!-- <p>Online</p> -->
                </b-col>
                <b-col class="col-2 text-center mr-6">
                  <b-icon
                    v-b-toggle.collapse-1
                    class="msg-icon primary icon-size text-center"
                    icon="search"
                    style="cursor: pointer"
                  ></b-icon>
                </b-col>
              </b-row>
            </div>
            <b-collapse id="collapse-1" class="mt-2">
              <b-card style="margin-top: -15px">
                <input
                  v-model="chatSearchKeyword"
                  @keypress.enter="
                    histUserToUser({
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
              <div v-if="loader" class="text-center mt-12 pt-12">
                <b-spinner
                  variant="light"
                  label="Spinning"
                  class="spinner centralizer"
                ></b-spinner>
              </div>
              <div v-else v-for="chat in userToUser" :key="chat.id">
                <div v-if="currentUser.user.id != chat.sender_id">
                  <b-row class="p-1">
                    <b-col>
                      <p class="msg-text mt-0 text">
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
                              @click="deleteMessage(chat , userToUser , type)">
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
                        <small class="float-right mt-2 text-white pr-1 pt-1">
                          {{ getCreatedAt(chat.created_at) }}
                        </small>
                      </p>
                    </b-col>
                  </b-row>
                </div>
                <div v-else>
                  <b-row class="p-1">
                    <b-col>
                      <p id="sent" class="msg-text-sent text">
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
              </div>
            </section>

            <section v-else class="chats" style="margin-left: 1px" ref="feed">
              <div class="mt-12 pt-12">
                <h1 class="text-center">Select a chat</h1>
              </div>
            </section>

            <div class="bottom">
              <b-row class="text-center">
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
                      class="msg-icon primary icon-size icon-top"
                      icon="paperclip"
                    >
                    </b-icon>

                    <input  
                      style="display: none"
                      type="file"
                      id="file"
                      ref="file"
                       accept="image/*"
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
          </b-col>
          <!-- End selected Chat -->

          <b-col v-if="info" class="chat-box">
            <div class="info-nav">
              <b-button class="primary-bg" @click="showInfo(false)">
                <fas-icon :icon="['fas', 'arrow-left']" />
              </b-button>
              <span class="cnt-info"> Contact Info</span>
            </div>
            <div class="info-bottom">
              <b-avatar
                class="info-avatar"
                variant="light"
                :src="chatSelected.profile_picture"
                size="200"
              ></b-avatar>
              <div class="info-detail">
                <h1 class="info-name">{{ chatSelected.name }}</h1>
                <!-- <b-link class="primary">View Profile</b-link> -->
              </div>
            </div>
            <div>
              <ul>
                <li>Options</li>
                <li>
                  <b-row
                    ><b-col> Block Messages </b-col>
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
                <li>Report User</li>
              </ul>
            </div>
          </b-col>

          <!-- New message -->
          <b-col
            v-if="newMsg == true && info == false && !rightSide"
            class="chat-box"
          >
            <div class="back-image" style="margin-right: 07px">
              <b-row>
                <b-col class="col-1 mt-3 ma-4">
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
                    :placeholder="`Type the name of the ${type}`"
                    @input="onPressSearchNewChat"
                  ></b-form-input>
                  <br />
                </b-col>
              </b-row>
              <b-row>
                <b-col class="new-msg-filter-list">
                  <h3>{{ type }}</h3>

                  <div v-if="loader" class="text-center mt-12 pt-12">
                    <b-spinner variant="primary" label="Spinning"></b-spinner>
                  </div>
                  <!-- <div v-else>
                      <div v-if="type == 'user'">
                        <b-row
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
                          <b-col>
                            <b-avatar
                              class="d-inline-block"
                              variant="primary"
                              size="30"
                              :src="user.profile_picture"
                            ></b-avatar>
                          </b-col>
                          <b-col>
                            <span class="bold"> {{ user.name }} </span>
                          </b-col>
                        </b-row>
                      </div>
                    </div> -->
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
                        v-for="(biz, index) in bizs"
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
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>

      <div v-else>
        <b-row class="chat-box">
          <b-col class="col-4 pr-0">
            <div class="right">
              <b-row>
                <b-col class="p-2">
                  <b-avatar
                    class="d-inline-block profile-pic"
                    variant="light"
                    :src="
                      getImage({
                        type: 'user',
                        image: currentUser.user.profile_picture,
                      })
                    "
                  ></b-avatar>
                </b-col>
                <b-col>
                  <!-- <small>{{ currentUser }}</small> -->
                  <h1 class="mt-4 title text-bold">
                    {{
                      currentUser
                        ? currentUser.user.name.split(" ")[0]
                        : "loading..."
                    }}
                  </h1>
                </b-col>
                <b-col>
                  <b-icon
                    @click="newMessage(true)"
                    class="new-message primary icon-size float-right h3 pr-6"
                    icon="pencil-square"
                  ></b-icon>
                </b-col>
              </b-row>

              <b-row class="mt-12">
                <b-col>
                  <b-tabs
                    v-model="tabIndex"
                    content-class="mt-12 ma-4 pt-6"
                    fill pills
                  >
                    <b-tab title="User" @click="getChatList({ type: 'user' })">
                      <!-- Users Chats Available  -->
                      <b-row class="pa-6">
                        <b-col class="mb-6 pb-6">
                          <input
                            v-model="searchQueryUser"
                            class="form-control input-background  mb-2"
                            :placeholder="$t('general.Search_chat_list')"
                            @keypress="
                              getChatList({
                                type: 'user',
                                keyword: searchQueryUser,
                              })
                            "
                          />
                        </b-col>
                      </b-row>

                      <div class="messages">
                       
                        <b-row
                         
                          v-for="(chat, index) in chatList"
                          :key="index"
                          :class="[
                            'p-2 message ',
                            {
                              messageSelected:
                                (chat.sender_id == currentUser.user.id
                                  ? chat.receiver_id
                                  : chat.sender_id) ==
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
                              id:
                                chat.sender_id == currentUser.user.id
                                  ? chat.receiver_id
                                  : chat.sender_id,
                            })
                          "
                        >
                          <b-col class="col-9">
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

                          <b-col class="col-3 text-center">
                            <small class="text-center">
                              {{ getCreatedAt(chat.created_at) }}
                            </small>
                            <small class="text-center">
                              <b-badge variant="light" v-if="chat.message_count" class="count">{{chat.message_count}}</b-badge>
                            </small>

                          </b-col>
                        </b-row>
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
                            v-model="searchQueryBusiness"
                            class="form-control input-background  mb-2"
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

                      <div class="messages">
                      
                        <b-row
                         
                          v-for="(chat, index) in chatList"
                          :key="index"
                          :class="[
                            'p-2 message ',
                            {
                              messageSelected:
                                (chat.receiver_business_id
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
                              id: chat.receiver_business_id
                                ? chat.receiver_business_id
                                : chat.sender_business_id,
                            })
                          "
                        >
                          <b-col class="col-9">
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

                          <b-col class="col-3 text-center">
                            <small class="text-center">
                              {{ getCreatedAt(chat.created_at) }}
                            </small>
                            <small class="text-center">
                              <b-badge variant="light" v-if="chat.message_count" class="count">{{chat.message_count}}</b-badge>
                            </small>
                          </b-col>
                        </b-row>
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
                            v-model="searchQueryNetwork"
                            class="form-control input-background  mb-2"
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

                      <div class="messages">
                        
                        <b-row
                          
                          v-for="(chat, index) in chatList"
                          :key="index"
                          :class="[
                            'p-2 message ',
                            {
                              messageSelected:
                                (chat.receiver_network_id
                                  ? chat.receiver_network_id
                                  : chat.sender_network_id) ==
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
                              id: chat.receiver_network_id
                                ? chat.receiver_network_id
                                : chat.sender_network_id,
                            })
                          "
                        >
                          <b-col class="col-9">
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

                          <b-col class="col-3 text-center">
                            <small class="text-center">
                              {{ getCreatedAt(chat.created_at) }}
                            </small>
                            <small class="text-center">
                              <b-badge variant="light" v-if="chat.message_count" class="count">{{chat.message_count}}</b-badge>
                            </small>
                          </b-col>
                        </b-row>
                      </div>

                      <!-- End Chats -->
                    </b-tab>
                  </b-tabs>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col v-if="newMsg == false && info == false" class="p-0 back-image">
            <div class="chat-nav shadow">
              <b-row class="desk" v-if="chatSelected.active">
                <b-col class="col-3" @click="info = true">
                  <b-avatar
                    variant="light"
                    :square="type == 'user' ? false : true"
                    :src="chatListImage(chatSelected)"
                    size="60"
                  ></b-avatar>
                </b-col>

                <b-col class="col-sm-5" @click="info = true">
                  <h4>{{ formatHeadChatName(chatSelected) }}</h4>
                  <!-- <p>Online</p> -->
                </b-col>
                <!-- <b-col class="col-4" v-show="false">
                      <input
                        v-model="chatSearchKeyword"
                        @keypress.enter="
                          histUserToUser({
                            receiverID: chatId,
                            keyword: chatSearchKeyword,
                          })
                        "
                        type="text"
                        class="form-control input-background mb-6 pb-6"
                        placeholder="Search message"
                      />
                    </b-col> -->
                <b-col class="col-2 text-center mr-6">
                  <b-icon
                    v-b-toggle.collapse-1
                    class="msg-icon primary icon-size text-center"
                    icon="search"
                    style="cursor: pointer"
                  ></b-icon>
                </b-col>
              </b-row>
            </div>
            <b-collapse id="collapse-1" class="mt-2">
              <b-card style="margin-top: -15px">
                <input
                  v-model="chatSearchKeyword"
                  @keypress.enter="
                    histUserToUser({
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
              <div v-if="loader" class="text-center mt-12 pt-12">
                <b-spinner
                  variant="primary"
                  label="Spinning"
                  class="spinner centralizer"
                ></b-spinner>
              </div>
              <div v-else v-for="chat in userToUser" :key="chat.id">
                <div v-if="currentUser.user.id != chat.sender_id">
                  <b-row class="p-2">
                    <b-col>
                      <p class="msg-text mt-0 text">
                      
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
                          <img
                            v-if="sharedImg(chat)"
                            :src="sharedImg(chat)"
                            class="sharedImg"
                          />
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
                <div v-else>
                  <b-row class="p-2">
                    <b-col>
                      <p id="sent" class="msg-text-sent text">
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
                              @click="deleteMessage(chat , userToUser , type)">
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
                          <img
                            v-if="sharedImg(chat)"
                            :src="sharedImg(chat)"
                            class="sharedImg"
                          />
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

            <section v-else class="chats" style="margin-left: 1px" ref="feed">
              <div class="mt-12 pt-12">
                <h1 class="text-center">Select a chat</h1>
              </div>
            </section>

            <div class="bottom">
              <b-row class="text-center">
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
                      accept="image/*"
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
          </b-col>

          <!-- End selected Chat -->

          <b-col v-if="info" class="chat-box">
            <div class="info-nav">
              <b-button class="primary-bg" @click="showInfo(false)">
                <fas-icon :icon="['fas', 'arrow-left']" />
              </b-button>
              <span class="cnt-info"> Contact Info</span>
            </div>
            <div class="info-bottom">
              <b-avatar
                class="info-avatar"
                variant="light"
                :src="chatSelected.profile_picture"
                size="200"
              ></b-avatar>
              <div class="info-detail">
                <h1 class="info-name">{{ chatSelected.name }}</h1>
                <!-- <b-link class="primary">View Profile</b-link> -->
              </div>
            </div>
            <div>
              <ul>
                <li>Options</li>
                <li>
                  <b-row
                    ><b-col> Block Messages </b-col>
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
                <li>Report User</li>
              </ul>
            </div>
          </b-col>

          <!-- New message -->
          <b-col v-if="newMsg == true && info == false" class="chat-box">
            <div class="back-image" style="margin-right: 07px">
              <b-row>
                <b-col>
                  <b-form-input
                    id="textarea"
                    v-model="newSearchQuery"
                    class="input-background"
                    style="width: 100%"
                    :placeholder="`Type the name of the ${type}`"
                    @input="onPressSearchNewChat"
                  ></b-form-input>
                  <br />
                </b-col>
              </b-row>
              <b-row>
                <b-col class="new-msg-filter-list">
                  <div v-if="loader" class="text-center mt-12 pt-12">
                    <b-spinner variant="primary" label="Spinning"></b-spinner>
                  </div>
                  <!-- <div v-else>
                      <div v-if="type == 'user'">
                        <b-row
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
                          <b-col>
                            <b-avatar
                              class="d-inline-block"
                              variant="primary"
                              size="30"
                              :src="user.profile_picture"
                            ></b-avatar>
                          </b-col>
                          <b-col>
                            <span class="bold"> {{ user.name }} </span>
                          </b-col>
                        </b-row>
                      </div>
                    </div> -->
                  <table v-else class="table">
                    <h3>{{ type }}</h3>
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
                        v-for="(biz, index) in bizs"
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
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>

      <!-- MODALS -->
      <!-- preview -->
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
import Navbar from "@/components/navbar";
import EmojiPicker from "vue-emoji-picker";
import io from "socket.io-client";
import moment from "moment";
import _ from "lodash";

export default {
  components: {
    Navbar,
    EmojiPicker,
  },
  data() {
    return {
      occurence: null,
      screenWidth: window.screen.width,
      screenX: 0,
      mobile: false,
      rightSide: true,
      leftSide: true,
      tabIndex: 0,
      formData: new FormData(),
      filePreview: false,
      previewSrc: "",
      file: "",
      room: "",
      online: [],
      input: "",
      search: "",
      chatSearchKeyword: "",
      chatId: "",
      type: "",
      // socket: io(process.env.VUE_APP_CHAT_SERVER_URL_DEV, {
      //   transports: ["websocket", "polling", "flashsocket"],
      // }),
      socket: io(process.env.VUE_APP_CHAT_SERVER_URL, {
        transports: ["websocket", "polling", "flashsocket"],
      }),
      // socket: io("localhost:7000", {
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
      searchQueryUser: "",
      searchQueryBusiness: "",
      searchQueryNetwork: "",
      newSearchQuery: "",
      newMsg: false,
      show: false,
      info: false,
      checked: false,
      text: "",
      selected: [],
      chats: [],
    };
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  watch: {
    screenWidth(newWidth, oldWidth) {
      this.screenX = newWidth;
      // this.rightSide = this.screenX > 930;
      this.mobile = this.screenX < 930;
    },
  },

  computed: {
    ctaSelected() {
      return this.$store.getters["businessChat/getSelectedChat"];
    },
    chatList() {
      return this.$store.getters["userChat/getChatList"];
    },
    currentUser() {
      return this.$store.getters["userChat/getUser"];
    },
    bizs() {
      return this.$store.getters["userChat/getBizs"];
    },
    users() {
      return this.$store.getters["userChat/getUsers"];
    },
    nets() {
      return this.$store.getters["userChat/getNets"];
    },
    userToUser() {
      return this.$store.getters["userChat/getUserToUser"];
    },
    userToBiz() {
      return this.$store.getters["userChat/getUserToBiz"];
    },
    userToNetwork() {
      return this.$store.getters["userChat/getUserToNetwork"];
    },
    loader() {
      return this.$store.getters["userChat/getLoader"];
    },
    receiver() {
      return this.userToUser[0] ? this.userToUser[0].receiver : "";
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
    // log("currentUser",this.currentUser)
    console.log("mobile:", this.mobile);
    this.getList();
    if (this.chatList.length < 0) {
      this.getChatList({ type: "user" });
    }
    console.log("call to action:", this.ctaSelected);
    if (this.ctaSelected) {
      if (this.tabIndex == 1) {
        this.getChatList({ type: "business" });
      } else if (this.tabIndex == 2) {
        this.getChatList({ type: "network" });
      } else {
        // this.tabIndex = 0;
        this.getChatList({ type: "user" });
        console.log("testing...");
      }
    }
    // this.getChatList({ type: "user" });
    window.addEventListener("resize", () => {
      this.screenWidth = window.screen.width;
    });
    this.occurence = { [`user-${this.currentUser.user.id}`]: true };
  },
  created() {
    console.log("screen width:", window.screen.width);
    this.tabIndex = this.$route.query.msgTabId
      ? Number(this.$route.query.msgTabId)
      : "no";
    console.log("this.tabIndex:", typeof this.tabIndex);
    this.$store.commit("businessChat/setCurrentBizId", this.$route.params.id);
    this.socketListenners();

    if ([0, 1, 2].includes(this.tabIndex)) {
      if (this.tabIndex == 1) {
        this.getChatList({ type: "business" });
      } else if (this.tabIndex == 2) {
        this.getChatList({ type: "network" });
      } else {
        // this.tabIndex = 0;
        this.getChatList({ type: "user" });
        console.log("testing...");
      }

      console.log("The cta:", this.ctaSelected);

      this.selectedChat({
        chat: this.ctaSelected,
        id:
          this.type == "network" || this.type == "user"
            ? this.ctaSelected.id
            : this.type == "business"
            ? this.ctaSelected.business_id
              ? this.ctaSelected.business_id
              : this.ctaSelected.id
            : this.ctaSelected.id,
      });
    } else {
      this.tabIndex = 0;
      this.getChatList({ type: "user" });
      console.log("Here testing...");
    }
  },
  methods: {
    onPressSearchNewChat: _.debounce(function (e) {
      console.log("press...");
      this.getList(e);
    }, 1000),
    sharedImg(share) {
      let image = share.business_post_image
        ? share.business_post_image.media_url
        : share.network_post_image
        ? share.network_post_image.media_url
        : share.post_image
        ? share.post_image.media_url
        : null;
      return `https://qa-bridgeafrica-api.maxinemoffett.com/${image}`;
    },
    chatListImage(value) {
      var image = "";
      let user = require("@/assets/profile_white.png");
      let network = require("@/assets/network_default.png");
      let business = require("@/assets/business_white.png");
      // console.log("value:", value);
      let data = value.chat ? value.chat : value;
      if (this.type == "user") {
        image = data.sender
          ? data.sender.id == this.currentUser.user.id
            ? data.receiver
              ? data.receiver.profile_picture
              : data.profile_picture
            : data.sender.profile_picture
          : data.profile_picture
          ? data.profile_picture
          : user;
      } else if (this.type == "business") {
        image = data.sender_business
          ? data.sender_business.logo_path
          : data.receiver_business
          ? data.receiver_business.logo_path
          : data.logo_path
          ? data.logo_path
          : business;
      } else if (this.type == "network") {
        image = data.receiver_network
          ? data.receiver_network.image
          : data.sender_network
          ? data.sender_network.image
          : data.image
          ? data.image
          : network;
      }
      // console.log("chatlist image:", image);

      return image;
    },
    formatName(value) {
      var name = "";

      // console.log("Value:", value);
      // console.log("Current:", this.currentUser);
      if (this.type == "user") {
        name = value.sender
          ? value.sender.id == this.currentUser.user.id
            ? value.receiver.name
            : value.sender
            ? value.sender.name
            : value.name
          : value.name;
      } else if (this.type == "business") {
        name = value.receiver_business
          ? value.receiver_business.name
          : value.sender_business
          ? value.sender_business.name
          : value.name;
      } else if (this.type == "network") {
        name = value.receiver_network
          ? value.receiver_network.name
          : value.sender_network
          ? value.sender_network.name
          : value.name;
      }

      return name;
    },
    formatHeadChatName(value) {
      var name = "";

      // console.log("Value--:", value);
      // console.log("Current:", this.currentUser);
      if (this.ctaSelected) {
        name = value.name;
      }
      if (value.name) {
        name = value.name;
      } else {
        if (this.type == "user") {
          name = value.sender
            ? value.sender.id == this.currentUser.user.id
              ? value.receiver.name
              : value.sender
              ? value.sender.name
              : value.name
            : value.name;
        } else if (this.type == "business") {
          name = value.receiver_business
            ? value.receiver_business.name
            : value.sender_business
            ? value.sender_business.name
            : value.receiver
            ? value.receiver.name
            : value.sender
            ? value.sender.name
            : value.name;
        } else if (this.type == "network") {
          name = value.receiver_network
            ? value.receiver_network.name
            : value.sender_network
            ? value.sender_network.name
            : value.receiver
            ? value.receiver.name
            : value.sender
            ? value.sender.name
            : value.name;
          // name = value.receiver_network
          //   ? value.receiver_network.name
          //   : value.sender_network
          //   ? value.sender_network.name
          //   : value.name;
        }
      }

      return name;
    },
    getImage(data) {
      // console.log("data IN", data);
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

      // console.log("debug ", finale);
      // console.log(this.type);
      return finale;
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
    convert(bytes) {
      var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes == 0) return "0 Byte";
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
    },
    dismissed() {
      this.file = "";
      this.filePreview = false;
    },
    createRoom(receiver_id) {
      let sender_id = this.currentUser.user.id;
      this.room = [receiver_id, sender_id];
      console.log("ROOMS: ", this.room);
      this.socket.emit("create", this.room);
    },
    createGroup(receiver_id) {
      let sender_id = this.currentUser.user.id;
      this.room = [receiver_id, sender_id];
      console.log("ROOMS: ", this.room);
      this.socket.emit("create-group", this.chatId);
    },
    socketListenners() {
      console.log("Listen type of chat:", this.type);
      this.socket.on("create-chatList", (data) => {
        this.getChatList({ type: this.getChatList({ type: data.type }) });
      });

      this.socket.on("privateMessage", (data) => {
        console.log("Received");
        console.log(data);
        this.userToUser.push(data);
        console.log("message: ", this.userToUser);

        this.formData.append("sender_id", data.sender_id);
        this.formData.append("message", data.message);
        this.formData.append("receiver_id", data.receiver_id);
        this.formData.append("receiver_business_id", data.receiver_id);
        this.formData.append("receiver_network_id", data.receiver_id);
        this.formData.append("type", data.type);
        console.log(this.currentUser);

        console.log(this.currentUser.user.id + "==" + data.sender_id);

        // if (this.currentUser.user.id == data.sender_id) {
        //   this.saveMessage(this.formData, data.type);
        // } else {
        //   if (this.occurence[`user-${this.currentUser.user.id}`]) {
        //     // this.getChatList
        //     this.getChatList({ type: this.getChatList({ type: data.type }) });
        //     console.log("zee-type:", data.type);
        //     this.occurence[`user-${this.currentUser.user.id}`] = false;
        //   }
        //   console.log("zee-occurence:", this.occurence);
        // }

        if (this.currentUser.user.id == data.sender_id) {
          this.saveMessage(this.formData, data.type);
          this.$store.dispatch("userChat/GET_USERS_CHAT_LIST_Dos", {
            type: this.type,
          });
        } else {
          console.log("Here here 1");
          // this.type = data.type;
          // this.$store.dispatch("userChat/GET_USERS_CHAT_LIST_Dos", {
          //   type: this.type,
          // });
        }
        // console.log("zee-occurence:", this.occurence);

        // this.currentUser.user.id == data.sender_id
        //   ? this.saveMessage(this.formData, data.type)
        //   : console.log("Receiver...");
        // console.log("Receiver...");
      });
      console.log("listenning...");
    },
    getCreatedAt(data) {

      const date = moment().diff(moment(data), 'days')
      console.log(date >= 1)
      if (date >= 1) {
        return moment(data).format("L");
      } else {
        // return moment(data).format('LT');
        return moment(data).format('hh:mm')
      }
    },
    getList(keyword) {
      console.log(keyword);
      if (this.type == "user") {
        this.$store.dispatch("userChat/GET_USERS", keyword);
      } else if (this.type == "business") {
        this.$store.dispatch("userChat/GET_BIZS", keyword);
      } else {
        
        this.$store.dispatch("userChat/GET_NETS", keyword);
      }
    },
    getChatList(data) {
      this.type = data.type;

     

      this.chatSelected.active = this.ctaSelected ? true : false;
      this.newMsg = false;

      this.$store
        .dispatch("userChat/GET_USERS_CHAT_LIST", data)
        .then(() => {
          console.log("->[Data logged]<-");
        })
        .catch(() => console.log("error"));
      

      this.socket.emit("create-chatList", this.currentUser.user.id);

      // this.scrollToBottom();
    },

    async histUserToUser(data) {
      await this.$store
        .dispatch("userChat/GET_USER_TO_USER", data)
        .then(() => {
          console.log("->[User selected]<-");
          this.socket.emit("addUser", {
            socketID: this.socket.id,
            ...this.receiver,
          });
        })
        .catch(() => console.log("error"));
    },
    async histUserToBiz(receiverId) {
      await this.$store
        .dispatch("userChat/GET_USER_TO_BIZ", receiverId)
        .then(() => {
          console.log("->[User selected]<-");
          this.socket.emit("addUser", {
            socketID: this.socket.id,
            ...this.receiver,
          });
        })
        .catch(() => console.log("error"));
    },
    async histUserToNetwork(receiverId) {
      await this.$store
        .dispatch("userChat/GET_USER_TO_NETWORK", receiverId)
        .then(() => {
          console.log("->[User selected]<-");
          this.socket.emit("addUser", {
            socketID: this.socket.id,
            ...this.receiver,
          });
        })
        .catch(() => console.log("error"));
    },
    async histUserToGroup(receiverId) {
      await this.$store
        .dispatch("userChat/GET_USER_TO_GROUP", receiverId)
        .then(() => {
          console.log("->[User selected]<-");
          this.socket.emit("addUser", {
            socketID: this.socket.id,
            ...this.receiver,
          });
        })
        .catch(() => console.log("error"));
    },
    selectedChat(data) {
      
      // this.scrollToBottom();


      console.log("currentUser:", this.currentUser.user.id);
      console.log("Data logged:", data);
      console.log("free up:", this.ctaSelected);
      this.type = data.type;
      if (this.type == "group") {
        this.createGroup();
      } else this.createRoom(data.id);
      console.log("ZZZZZ", data.id);
      this.chatId = data.id;
      this.$store.commit("businessChat/setSelectedChatId", data.id);
      let receiver = { receiverID: data.id, keyword: null };
      if (this.type == "business") {
        this.histUserToBiz(receiver);
      } else if (this.type == "network") {
        this.histUserToNetwork(receiver);
      } else if (this.type == "group") {
        this.histUserToGroup(receiver);
      } else {
        this.histUserToUser(receiver);
      }
      this.rightSide = screenX > 930;

      this.newMsg = false;
      this.info = false;
      this.chatSelected = {
        active: true,
        clickedId: data.id,
        ...data.chat,
      };
      (this.chatSelected.name = data.chat.isProduct
        ? data.chat.business_name
        : data.chat.name
        ? data.chat.name
        : data.chat.groupName),
        console.log("[DEBUG] Chat selected:", this.chatSelected);


      data.chat.message_count = 0 
    },
    searchUser(keyword) {
      this.$store
        .dispatch("userChat/GET_USERS", keyword)
        .then(() => {
          console.log("->[Data logged]<-");
        })
        .catch(() => console.log("error"));
    },
    searchChatList(keyword) {
      this.$store
        .dispatch("userChat/GET_USERS", keyword)
        .then(() => {
          console.log("->[Data logged]<-");
        })
        .catch(() => console.log("error"));
    },
    saveMessage(data, type) {
      console.log("[DEBUG SAVE]", { data: data, type: type, type2: this.type });
      let payload = { data: data, type: this.type };
      this.$store.dispatch("userChat/SAVE_USERS_CHAT", payload);
    },
    //-------

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

    showsearchh() {
      this.showsearch = true;
    },

    showMessages(arg) {
      this.show = arg;
      this.rightSide = true;
      console.log("show right", this.rightSide);
    },
    showInfo(arg) {
      this.info = arg;
      this.newMsg = arg;
      console.log(this.checked);
    },
    newMessage(arg) {
      this.getList();
      
      this.rightSide = false;
      this.newMsg = arg;
      this.show = false;
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
    scrollToBottom() {
      this.$refs.feed.scrollTo({
        top: this.$refs.feed.scrollHeight + 2000,
        behavior: "smooth",
      });
      // this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
      // console.log(this.$refs.feed.scrollTop);
    },
    send() {
      // if (this.type == "group") {
      //   this.sendGroup();
      // } else {
      //   this.sendPrivate();
      // }

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
    sendGroup() {
      this.socket.emit("groupMessage", {
        type: this.type,
        message: this.input,
        sender_id: this.currentUser.user.id,

        room: this.room,
        receiver_business_id: this.chatSelected.id,
        receiver_id: this.chatId,
        group_id: this.chatId,
      });
    },
    async sendPrivate() {
      this.formData.append("attachment", this.file);
      await this.socket.emit("privateMessage", {
        message: this.input,
        sender_id: this.currentUser.user.id,
        room: this.room,
        receiver_business_id: this.chatSelected.clickedId,
        receiver_network_id: this.chatSelected.clickedId,
        receiver_id: this.chatSelected.clickedId,
        attachment: this.file,
        type: this.type,
      });
      console.log("SENT...");
      this.input = "";
      this.dismissed();
      this.scrollToBottom();
    },
    async deleteMessage(data , chatListData , type){
    
      let dataChat = chatListData.filter((b) => { return b.id !== data.id;});


      if(type == "user"){
        await this.$store.dispatch("businessChat/DELETE_USER_MESSAGE_BY_MESSAGEID", data)
      }

      if(type == "business"){
        data.businessId = this.chatSelected.id;
        console.log(data , "bussiness");
        await this.$store.dispatch("businessChat/DELETE_BUSINESS_MESSAGE_BY_MESSAGEID_BUSINESSID", data)
      }

      if(type == "network"){
        data.networkId = this.chatSelected.id;
        console.log(data , "network");
        await this.$store.dispatch("businessChat/DELETE_NETWORK_MESSAGE_BY_MESSAGEID_NETWORKID", data)
      } 
   
      // if(type == "group"){
      //   data.groupId = this.chatSelected.id;
      //   await this.$store.dispatch("businessChat/DELETE_GROUP_MESSAGE_BYGROUP_ID", data)
      // }

      this.$store.dispatch("userChat/DATA_UPDATE_C", dataChat)

    },
  },
};
</script>

<style scoped>
.count{
  background: #e75c18!important;
  color: white;
  font-size: 13px;
  border-radius: 12px;
}
.sharedImg {
  max-width: 80%;
  max-height: 40%;
}
.b-avatar .b-avatar-img img {
  background-color: white !important;
}
.table {
  display: block;
  position: static;
  /* position: relative !important; */
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
  margin-top: 5%;
  width: 3rem;
  height: 3rem;
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
  /* margin-bottom: 100px; */
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
  height: 540px;
  overflow-y: auto;
  overflow-x: hidden;
}

.back-image {
  background-image: url("../assets/message_back.jpg");
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
  margin-top: 20px;
  cursor: pointer;
}

.messages {
  overflow-y: auto;
  overflow-x: hidden;
  height: 500px;
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
  font-size: 24px;
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
  margin-top: 500px;
}
.new-msg {
  background-color: #ccc;
}
@media only screen and (max-width: 768px) {
  .new-msg-filter-list {
    height: 500px !important;
  }
  .messages {
    height: 480px !important;
  }
  .newMsg-bottom {
    margin-top: 480px !important;
  }
  .chats {
    /* border: 2px solid green; */
    min-height: 430px;
  }

  .m-10 {
    margin-top: 10px;
  }
  .mobile {
    display: flex;
  }
  /* .right {
    display: none;
  } */
  /* .messages {
    display: none;
  } */
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
  /* .desk {
    display: none;
  } */

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