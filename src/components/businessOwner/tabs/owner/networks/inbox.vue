<template>
  <div>
    <Navbar />
    <div>
      <div class="chat-box">
        <b-row class="row">
          <div v-if="show">
            <b-col class="pr-0">
              <div class="right-mobile">
                
                <b-row>
                  <b-col>
                    <b-avatar
                      variant="primary"
                      text="LV"
                      size="50"
                    ></b-avatar>
                  </b-col>
                  <b-col>
                    <h4>{{ $t("businessowner.Messages")}}</h4>
                  </b-col>
                  <b-col>
                    <b-icon
                      @click="newMessage(true)"
                      class="new-message primary"
                      icon="pencil-fill"
                    ></b-icon>
                  </b-col>
                </b-row>
                <b-container>
                  <input
                    type="text"
                    class="form-control"
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
                    <b-col class="col-3">
                      <b-avatar
                        variant="primary"
                        text="BL"
                        size="40"
                      ></b-avatar>
                    </b-col>
                    <b-col>
                      <h6>{{ message.name }}</h6>
                      <p class="txt">{{ message.startMessage }}</p>
                    </b-col>
                    <b-col class="col-3">
                      <small> {{ message.timeStamp }} </small>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
          </div>

          <b-col class="pr-0">
            <div class="right">
              <b-row>
                <b-col>
                  <b-avatar variant="primary" text="BV" size="40"></b-avatar>
                </b-col>
                <b-col>
                  <h3 class="">{{ $t("businessowner.Messages")}}</h3>
                </b-col>
                <b-col>
                  <b-icon
                    @click="newMessage(true)"
                    class="new-message primary"
                    icon="pencil-fill"
                  ></b-icon>
                </b-col>
              </b-row>
              <input
                type="text"
                class="form-control"
                :placeholder="$t('businessowner.Search_inbox')"
              />
            </div>
            <div>
              <div class="messages">
                <b-row
                  v-for="message in messages"
                  :key="message.id"
                  class="p-2 message"
                  @click="showInfo(false)"
                >
                  <b-col class="col-2">
                    <b-avatar variant="primary" text="BV" size="40"></b-avatar>
                  </b-col>
                  <b-col>
                    <h6>{{ message.name }}</h6>
                    <p class="txt">{{ message.startMessage }}</p>
                  </b-col>
                  <b-col class="col-3">
                    <small> {{ message.timeStamp }} </small>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>

          <b-col cols="8" v-if="show == false && info == false && newMsg == false">
            <div class="chat-nav">
              <b-row class="mobile">
                <b-col class="col-1">
                  <b-icon
                    @click="showMessages(true)"
                    icon="three-dots"
                    aria-hidden="true"
                    class="primary"
                  ></b-icon>
                </b-col>
                <b-col class="col-2">
                  <b-avatar variant="primary" text="BV" size="30"></b-avatar>
                </b-col>
                <b-col class="detale">
                  <h6>Louis Litt</h6>
                  <small>{{ $t("businessowner.Online")}}</small>
                </b-col>
                <b-col>
                  <b-row class="mt-3">
                    <b-col class="col-3">
                      <b-icon icon="search" class="primary" size="20"></b-icon>
                    </b-col>
                    <b-col class="col-3">
                      <b-icon icon="telephone-fill" class="primary"></b-icon>
                    </b-col>
                    <b-col class="col-2">
                      <b-icon
                        @click="showInfo(true)"
                        icon="info-circle"
                        class="primary"
                      ></b-icon>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="desk">
                <b-col class="col-2">
                  <b-avatar variant="primary" text="BV" size="40"></b-avatar>
                </b-col>
                <b-col class="detail">
                  <h5>Louis Litt</h5>
                  <p>{{ $t("businessowner.Online")}}</p>
                </b-col>
                <b-col class="col-4">
                  <b-row class="mt-3 ml-5">
                    <b-col class="col-3">
                      <b-icon
                        class="msg-icon primary"
                        icon="search"
                        size="10"
                      ></b-icon>
                    </b-col>
                    <b-col class="col-3">
                      <b-icon
                        class="msg-icon primary"
                        icon="telephone-fill"
                      ></b-icon>
                    </b-col>
                    <b-col>
                      <b-icon
                        @click="showInfo(true)"
                        class="msg-icon primary"
                        icon="info-circle"
                      ></b-icon>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>

            <section class="chats">
              <div v-for="chat in chats" :key="chat.id">
                <div v-if="chat.type == 'received'" id="received">
                  <b-row class="p-4">
                    <b-avatar variant="primary" text="BV"></b-avatar>
                    <b-col>
                      <p>
                        <span class="name"> {{ chat.name }} </span>,
                        {{ chat.timeStamp }}
                      </p>
                      <p class="msg-text mt-0">
                        {{ chat.message }}
                      </p>
                    </b-col>
                  </b-row>
                </div>
                <div v-if="chat.type == 'sent'">
                  <b-row class="p-4">
                    <b-col>
                      <p class="sent-name">
                        <span class="name">{{ chat.name }}</span
                        >, {{ chat.timeStamp }}
                      </p>
                      <p id="sent" class="msg-text-sent">
                        {{ chat.message }}
                      </p>
                    </b-col>
                    <b-avatar variant="primary" text="BV"></b-avatar>
                  </b-row>
                </div>
              </div>
            </section>
            <div class="bottom">
              <b-row v-if="!checked">
                <b-col class="col-2 user">
                  <b-avatar variant="primary" text="BV" size="40"></b-avatar>
                </b-col>
                <b-col>
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    :placeholder="$t('businessowner.Enter_something')"
                  ></b-form-textarea>
                </b-col>
                <b-col class="col-2">
                  <b-row class="p-2 icons">
                    <b-col class="col-2">
                      <b-icon
                        class="msg-icon"
                        icon="smiley"
                        variant="primary"
                      ></b-icon>
                    </b-col>
                    <b-col class="col-3">
                      <b-icon
                        class="msg-icon primary"
                        icon="paperclip"
                      ></b-icon>
                    </b-col>
                    <b-col class="col-2">
                      <b-icon
                        @click="send"
                        class="msg-icon primary"
                        icon="cursor-fill"
                      ></b-icon>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <p v-if="checked" class="ml-5">
               {{ $t("businessowner.You_have_blocked_messages_and_calls_from_this_user") }} .
                <b-link @click="showInfo(true)">{{ $t("businessowner.Unblock_Now") }}</b-link>
              </p>
            </div>
          </b-col>
          <b-col v-if="info">
            <div class="info-nav">
              <b-button class="primary-bg" @click="showInfo(false)">
               <fas-icon :icon="['fas', 'arrow-left']" />
              </b-button>
              <span class="cnt-info"> {{ $t("businessowner.Contact_Info") }}</span>
            </div>
            <div class="info-bottom">
              <b-avatar
                class="info-avatar"
                variant="primary"
                text="BV"
                size="200"
              ></b-avatar>
              <div class="info-detail">
                <h1 class="info-name">Louis Litt</h1>
                <b-link class="primary">{{ $t("businessowner.View_Profile") }}</b-link>
              </div>
            </div>
            <div>
              <ul>
                <li>{{ $t("businessowner.Options") }}</li>
                <li>
                  <b-row
                    ><b-col>
                      {{ $t("businessowner.Block_Messages") }}
                    </b-col>
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
            <div class="info-media">
             <b-row>
               <b-col>
                  {{ $t("businessowner.Media") }}
               </b-col>
               <b-col cols="3">
                 <b-link>{{ $t("businessowner.See_All") }}</b-link>
               </b-col>
             </b-row>
              <div class="media">
                <img
                  src="@/assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
                <img
                  src="@/assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
                <img
                  src="@/assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
                <img
                  src="@/assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
                <img
                  src="@/assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </b-col>
          <b-col v-if="newMsg == true && info == false">
            <div class="new-msg">
              <div class="info-nav">
                <b-row>
                  <b-col class="col-1 mt-3">
                    {{ $t("businessowner.To") }}
                  </b-col>
                  <b-col>
                    <input
                      type="text"
                      name=""
                      class="form-control"
                      :placeholder="$t('businessowner.Type_the_name_of_person_or_group')"
                    />
                  </b-col>
                </b-row>
              </div>
              <div class="bottom newMsg-bottom">
                <b-row>
                  <b-col class="col-2 user">
                    <b-avatar variant="primary" text="BV" size="40"></b-avatar>
                  </b-col>
                  <b-col>
                    <b-form-textarea
                      id="text-area"
                      v-model="text"
                      :placeholder="$t('businessowner.Enter_something')"
                    ></b-form-textarea>
                  </b-col>
                  <b-col class="col-2">
                    <b-row class="p-2 icons">
                      <b-col class="col-2">
                        <b-icon class="msg-icon primary" icon="smiley"></b-icon>
                      </b-col>
                      <b-col class="col-3">
                        <b-icon
                          class="msg-icon primary"
                          icon="paperclip"
                        ></b-icon>
                      </b-col>
                      <b-col class="col-2">
                        <b-icon
                          class="msg-icon primary"
                          icon="cursor-fill"
                        ></b-icon>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
   
  </div>
</template>

<script>
import Navbar from "@/components/navbar";

export default {
  components: {
    Navbar,

  },
  data() {
    return {
      message: {
        type: "",
        name: "Louis Litt",
        timeStamp: "",
        message: "",
      },
      newMsg: false,
      show: false,
      info: false,
      checked: false,
      text: "",
      chats: [
        {
          id: 0,
          type: "received",
          name: "Louis Litt",
          timeStamp: "3:00 PM",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.",
        },
        {
          id: 1,
          type: "sent",
          name: "Louis Litt",
          timeStamp: "3:00 PM",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.",
        },
        {
          id: 2,
          type: "received",
          name: "Louis Litt",
          timeStamp: "3:00 PM",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.",
        },
        {
          id: 3,
          type: "sent",
          name: "Louis Litt",
          timeStamp: "3:00 PM",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.",
        },
        {
          id: 4,
          type: "received",
          name: "Louis Litt",
          timeStamp: "3:00 PM",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.",
        },
        {
          id: 5,
          type: "sent",
          name: "Louis Litt",
          timeStamp: "3:00 PM",
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.",
        },
      ],
      messages: [
        {
          id: 0,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
        {
          id: 1,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
        {
          id: 3,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
        {
          id: 4,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
        {
          id: 5,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
        {
          id: 6,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
        {
          id: 7,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
        {
          id: 8,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
        {
          id: 9,
          name: "Louis Litt",
          startMessage: "Lorem ipsum dolor sit amet.",
          timeStamp: "7:00am",
        },
      ],
    };
  },
  methods: {
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
      this.newMsg = arg;
      this.show = false;
    },
    send() {
      this.message.type = "sent";
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      this.message.timeStamp = h + ":" + m;
      this.message.message = this.text;
      this.chats.push(this.message);
      this.text = "";
    },
  },
};
</script>

<style scoped>
.right {
  padding: 10px;
}
.primary-bg,
.primary-bg:hover {
  background-color: #e75c18;
  border: none;
}
.chat-box {
  position: relative;
  top: 30px;
  border: solid 1px rgb(223, 223, 223);
  margin-bottom: 100px;
  border-radius: 2px;
  text-align: left;
}
.chat-nav {
  position: relative;
  min-height: 70px;
  background-color: rgb(232, 232, 232);

  padding: 10px;
}
.chats {
  height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #ccc;
  text-align: left;
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
  overflow-y: scroll;
  overflow-x: hidden;
  height: 690px;
  border-top: 1px solid rgb(230, 224, 224);
}
.txt {
  font-size: 13px;
}
.message {
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.message:hover {
  background-color: #e75d29;
  color: #fff;
}
#textarea {
  margin-left: -50px;
  height: 50px;
  width: 500px;
  margin-top: 5px;
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
  width: 60%;
  border-radius: 25px;
  color: #fff;
  background-color: #e75d29;
  padding: 10px;
  font-size: 12px;
}
.msg-text-sent {
  position: relative;
  min-width: 60%;
  border-radius: 25px;
  background-color: #fff;
  padding: 10px;
  font-size: 12px;
}
.name {
  font-weight: bold;
}
#sent {
  margin-left: 200px;
}
.sent-name {
  margin-left: 400px;
}
.bottom {
  background-color: #ccc;
  padding-left: 10px;
  padding-bottom: 5px;
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
  width: 550px;
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
  margin-top: 717px;
}
.new-msg {
  background-color: #ccc;
}
@media only screen and (max-width: 768px) {
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
    background-color: rgb(232, 232, 232);
    width: 323px;
    padding: 10px;
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
    height: 50px;
    width: 240px;
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
  }
  .message {
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    width: 100%;
  }
  h1 {
    font-size: 25px;
  }
  .info-nav {
    position: relative;
    min-height: 70px;
    background-color: rgb(232, 232, 232);
    width: 325px;
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
</style>