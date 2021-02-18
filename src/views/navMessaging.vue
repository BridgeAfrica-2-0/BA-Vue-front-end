<template>
  <div>
    <Navbar />
    <b-container>
      <div class="chat-box">
        <b-row class="row">
          <div v-if="show">
            <b-col class="pr-0">
              <div class="right-mobile">
                <b-row>
                  <b-col>
                    <b-avatar
                      variant="primary"
                      text="BV"
                      size="6rem"
                    ></b-avatar>
                  </b-col>
                  <b-col>
                    <h1>Messages</h1>
                  </b-col>
                  <b-col>
                    <b-icon
                      class="new-message"
                      icon="pencil-fill"
                      variant="primary"
                    ></b-icon>
                  </b-col>
                </b-row>
                <b-container>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search inbox"
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
                        text="BV"
                        size="60"
                      ></b-avatar>
                    </b-col>
                    <b-col>
                      <h4>{{ message.name }}</h4>
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
                  <b-avatar variant="primary" text="BV" size="6rem"></b-avatar>
                </b-col>
                <b-col>
                  <h1>Messages</h1>
                </b-col>
                <b-col>
                  <b-icon
                    class="new-message"
                    icon="pencil-fill"
                    variant="primary"
                  ></b-icon>
                </b-col>
              </b-row>
              <input
                type="text"
                class="form-control"
                placeholder="Search inbox"
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
                  <b-col class="col-3">
                    <b-avatar variant="primary" text="BV" size="60"></b-avatar>
                  </b-col>
                  <b-col>
                    <h4>{{ message.name }}</h4>
                    <p class="txt">{{ message.startMessage }}</p>
                  </b-col>
                  <b-col class="col-3">
                    <small> {{ message.timeStamp }} </small>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <b-col v-if="show == false && info == false">
            <div class="chat-nav">
              <b-row class="mobile">
                <b-col class="col-1">
                  <b-icon
                    @click="showMessages(true)"
                    variant="primary"
                    icon="three-dots"
                    aria-hidden="true"
                  ></b-icon>
                </b-col>
                <b-col class="col-2">
                  <b-avatar variant="primary" text="BV" size="30"></b-avatar>
                </b-col>
                <b-col class="detale">
                  <h5>Louis Litt</h5>
                  <small>Online</small>
                </b-col>
                <b-col>
                  <b-row class="mt-3">
                    <b-col class="col-3">
                      <b-icon icon="search" variant="primary"></b-icon>
                    </b-col>
                    <b-col class="col-3">
                      <b-icon icon="telephone-fill" variant="primary"></b-icon>
                    </b-col>
                    <b-col class="col-2">
                      <b-icon
                        @click="showInfo(true)"
                        icon="info-circle"
                        variant="primary"
                      ></b-icon>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="desk">
                <b-col class="col-2">
                  <b-avatar variant="primary" text="BV" size="60"></b-avatar>
                </b-col>
                <b-col class="detail">
                  <h4>Louis Litt</h4>
                  <p>Online</p>
                </b-col>
                <b-col class="col-4">
                  <b-row class="mt-3 ml-5">
                    <b-col class="col-3">
                      <b-icon
                        class="msg-icon"
                        icon="search"
                        variant="primary"
                      ></b-icon>
                    </b-col>
                    <b-col class="col-3">
                      <b-icon
                        class="msg-icon"
                        icon="telephone-fill"
                        variant="primary"
                      ></b-icon>
                    </b-col>
                    <b-col>
                      <b-icon
                        @click="showInfo(true)"
                        class="msg-icon"
                        icon="info-circle"
                        variant="primary"
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
                      <h5>
                        <span class="name"> {{ chat.name }} </span>,
                        {{ chat.timeStamp }}
                      </h5>
                      <p class="msg-text">
                        {{ chat.message }}
                      </p>
                    </b-col>
                  </b-row>
                </div>
                <div v-if="chat.type == 'sent'">
                  <b-row class="p-4">
                    <b-col>
                      <h5 class="sent-name">
                        <span class="name">{{ chat.name }}</span
                        >, {{ chat.timeStamp }}
                      </h5>
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
              <b-row>
                <b-col class="col-2 user">
                  <b-avatar variant="primary" text="BV" size="60"></b-avatar>
                </b-col>
                <b-col>
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter something..."
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
                        class="msg-icon"
                        icon="paperclip"
                        variant="primary"
                      ></b-icon>
                    </b-col>
                    <b-col class="col-2">
                      <b-icon
                        class="msg-icon"
                        icon="cursor-fill"
                        variant="primary"
                      ></b-icon>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col v-if="info">
            <div class="info-nav">
              <b-button variant="primary" @click="showInfo(false)"
                >Back</b-button
              >
              <span class=""> Contact Info</span>
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
                <b-link>View Profile</b-link>
              </div>
            </div>
            <div>
              <ul>
                <li>Options</li>
                <li>
                  <b-row
                    ><b-col>
                      Block Messages
                    </b-col>
                    <b-col>
                      <b-form-checkbox
                        v-model="checked"
                        name="check-button"
                        switch
                      >
                      </b-form-checkbox>
                    </b-col>
                  </b-row>
                </li>
                <li>Report User</li>
              </ul>
            </div>
            <div class="info-media">
              Media
              <div class="media">
                <img
                  src="../assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
                <img
                  src="../assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
                <img
                  src="../assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
                <img
                  src="../assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
                <img
                  src="../assets/img/about1.jpg"
                  height="100"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      message: {
        type: "",
        name: "Louis Litt",
        timeStamp: "",
        message: "",
      },
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
    },
  },
};
</script>

<style scoped>
.right {
  padding: 10px;
}
.chat-box {
  position: relative;
  top: 30px;
  border: solid 1px rgb(223, 223, 223);
  margin-bottom: 100px;
  border-radius: 2px;
}
.chat-nav {
  position: relative;
  min-height: 70px;
  background-color: rgb(232, 232, 232);
  width: 700px;
  padding: 10px;
}
.chats {
  height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #ccc;
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
  font-size: 30px;
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
}
.msg-text-sent {
  position: relative;
  min-width: 60%;
  border-radius: 25px;
  background-color: #fff;
  padding: 10px;
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
  background-color: rgb(232, 232, 232);
  width: 550px;
  padding: 10px;
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
    margin-left: 100px;
  }
  h5 {
    font-size: 15px;
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
