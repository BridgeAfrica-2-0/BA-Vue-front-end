<template>
  <div>
    <Navbar />
    <b-container>
      <div class="chat-box">
        <b-row>
          <b-col class="pr-0" cols="12" xl="4" v-if="show">
            <div class="right-mobile">
              <b-row>
                <b-col>
                  <b-avatar
                    class="d-inline-block profile-pic"
                    variant="primary"
                    src="https://business.bridgeafrica.info/assets/img/team/3.png"
                  ></b-avatar>
                </b-col>
                <b-col>
                  <h4 class="title">Messages</h4>
                </b-col>
                <b-col>
                  <b-icon @click="newMessage(true)" class="new-message primary" icon="pencil-fill"></b-icon>
                </b-col>
              </b-row>
              <b-container>
                <input type="text" class="form-control input-background" placeholder="Search inbox" />
              </b-container>
            </div>
            <div>
              <div class="messages-mobile">
                <b-row v-for="message in messages" :key="message.id" class="p-2 message" @click="showMessages(false)">
                  <b-col class="col-10">
                    <span style="display:inline-flex mb-2">
                      <b-avatar
                        class="d-inline-block profile-pic"
                        variant="primary"
                        src="https://business.bridgeafrica.info/assets/img/team/3.png"
                      ></b-avatar>

                      <h6 class="d-inline-block ml-2  ">
                        <b class="bold"> {{ message.name }}</b>
                        <p class="duration">{{ message.startMessage }}</p>
                      </h6>
                    </span>
                  </b-col>

                  <b-col class="col-2">
                    <small class="text-center"> {{ message.timeStamp }} </small>
                    <p class="text-center">
                      <b-badge variant="primary">
                        {{ message.messageCount }}
                      </b-badge>
                    </p>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>

          <b-col class="pr-0">
            <div class="right ">
              <b-row>
                <b-col class="p-2">
                  <b-avatar
                    class="d-inline-block profile-pic"
                    variant="primary"
                    src="https://business.bridgeafrica.info/assets/img/team/3.png"
                  ></b-avatar>
                </b-col>
                <b-col>
                  <h3 class="mt-4 title">Messages</h3>
                </b-col>
                <b-col>
                  <b-icon @click="newMessage(true)" class="new-message primary" icon="pencil-fill"></b-icon>
                </b-col>
              </b-row>
              <input type="text" class="form-control input-background" placeholder="Search inbox" />
            </div>
            <div>
              <div class="messages">
                <b-row v-for="message in messages" :key="message.id" class="p-2 message" @click="showInfo(false)">
                  <b-col class="col-10">
                    <span style="display:inline-flex">
                      <b-avatar
                        class="d-inline-block profile-pic"
                        variant="primary"
                        src="https://business.bridgeafrica.info/assets/img/team/3.png"
                      ></b-avatar>

                      <h6 class="mt-2  d-inline-block ml-2  ">
                        <b class="bold"> {{ message.name }}</b>
                        <p class="duration">{{ message.startMessage }}</p>
                      </h6>
                    </span>
                  </b-col>

                  <b-col class="col-2">
                    <small class="text-center"> {{ message.timeStamp }} </small>
                    <p class="text-center">
                      <b-badge variant="primary">
                        {{ message.messageCount }}
                      </b-badge>
                    </p>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <b-col v-if="show == false && info == false && newMsg == false" class="p-0  " cols="12" xl="8">
            <div class="back-image">
              <div class="chat-nav shadow ">
                <b-row class="mobile">
                  <b-col class="col-1">
                    <b-icon @click="showMessages(true)" icon="three-dots" aria-hidden="true" class="primary"></b-icon>
                  </b-col>
                  <b-col class="col-2">
                    <b-avatar variant="primary" text="BV" size="30"></b-avatar>
                  </b-col>
                  <b-col class="detale">
                    <h6>Louis Litt</h6>
                    <small>Online</small>
                  </b-col>
                  <b-col>
                    <b-row class="mt-3">
                      <b-col class="col-3">
                        <b-icon icon="search" class="primary icon-size"></b-icon>
                      </b-col>
                      <b-col class="col-3">
                        <b-icon icon="telephone-fill" class="primary"></b-icon>
                      </b-col>
                      <b-col class="col-2">
                        <b-icon @click="showInfo(true)" icon="info-circle" class="primary"></b-icon>

                        <b-dropdown variant="outline-primary" size="sm" no-caret>
                          <template #button-content>
                            <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                          </template>

                          <!--
                        <b-dropdown-item-button>
                          <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                          Locked <span class="sr-only">(Click to unlock)</span>
                        </b-dropdown-item-button>
                        <b-dropdown-divider></b-dropdown-divider>
                        
                        -->

                          <b-dropdown-item-button variant="info">
                            <b-icon icon="pencil" aria-hidden="true"></b-icon>
                            Edit
                          </b-dropdown-item-button>

                          <b-dropdown-item-button variant="danger">
                            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                            Delete
                          </b-dropdown-item-button>
                        </b-dropdown>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <b-row class="desk">
                  <b-col class="col-2">
                    <b-avatar variant="primary" text="BV" size="60"></b-avatar>
                  </b-col>
                  <b-col class="detail">
                    <h5>Louis Litt</h5>
                    <p>Online</p>
                  </b-col>
                  <b-col class="col-4">
                    <b-row class="mt-3 ml-5">
                      <b-col class="col-3">
                        <b-icon class="msg-icon primary icon-size" icon="search"></b-icon>
                      </b-col>
                      <b-col class="col-3">
                        <b-icon class="msg-icon primary icon-size" icon="telephone-fill"></b-icon>
                      </b-col>
                      <b-col>
                        <b-dropdown id="dropdown-1" class=" mt-md-0" no-caret variant="light">
                          <template #button-content>
                            <b-icon-three-dots></b-icon-three-dots>
                          </template>

                          <b-dropdown-item-button @click="showInfo(true)">
                            View Profile
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            Disable Notification
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            Delete Contact
                          </b-dropdown-item-button>

                          <b-dropdown-item-button>
                            Delete Chat
                          </b-dropdown-item-button>
                        </b-dropdown>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </div>

              <section
                class="chats"
                style="
             margin-left: 1px;"
              >
                <div v-for="chat in chats" :key="chat.id">
                  <div v-if="chat.type == 'received'" id="received">
                    <b-row class="p-4">
                      <b-avatar variant="primary" text="BV"></b-avatar>
                      <b-col>
                        <p>
                          <span class="name"> {{ chat.name }} </span>
                        </p>
                        <p class="msg-text mt-0 text">
                          {{ chat.message }}
                          <span class="float-right mt-2 white ">
                            {{ chat.timeStamp }}
                          </span>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-if="chat.type == 'sent'">
                    <b-row class="p-4">
                      <b-col>
                        <p class="sent-name">
                          <span class="name">{{ chat.name }}</span>
                        </p>
                        <p id="sent" class="msg-text-sent text">
                          {{ chat.message }}
                          <span class="float-right mt-2 white">
                            {{ chat.timeStamp }}
                          </span>
                        </p>
                      </b-col>
                      <b-avatar variant="primary" text="BV"></b-avatar>
                    </b-row>
                  </div>
                </div>
              </section>
              <div class="bottom ">
                <b-row v-if="!checked">
                  <b-col cols="2" class="p-0">
                    <b-icon
                      class="msg-icon primary icon-size  icon-top float-right text-right"
                      icon="paperclip"
                    ></b-icon>
                  </b-col>
                  <b-col cols="8" class="p-0">
                    <b-form-input
                      id="textarea"
                      v-model="text"
                      class="input-background"
                      placeholder="Enter something..."
                    ></b-form-input>
                  </b-col>

                  <b-col cols="2" class="p-0">
                    <b-icon @click="send" class="msg-icon primary icon-size icon-top " icon="cursor-fill"></b-icon>
                  </b-col>
                </b-row>
                <p v-if="checked" class="ml-5">
                  You have blocked messages and calls from this user.
                  <b-link @click="showInfo(true)">Unblock Now</b-link>
                </p>
              </div>
            </div>
          </b-col>

          <b-col v-if="info">
            <div class="info-nav">
              <b-button class="primary-bg" @click="showInfo(false)">
                <fas-icon :icon="['fas', 'arrow-left']" />
              </b-button>
              <span class="cnt-info"> Contact Info</span>
            </div>
            <div class="info-bottom">
              <b-avatar class="info-avatar" variant="primary" text="BV" size="200"></b-avatar>
              <div class="info-detail">
                <h1 class="info-name">Louis Litt</h1>
                <b-link class="primary">View Profile</b-link>
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
                      <b-form-checkbox v-model="checked" name="check-button" class="primary" switch> </b-form-checkbox>
                    </b-col>
                  </b-row>
                </li>
                <li>Report User</li>
              </ul>
            </div>
          </b-col>
          <b-col v-if="newMsg == true && info == false" class="p-0 col-xl-8 col-12">
            <div class="new-msg back-image" style="margin-right: 17px;">
              <div class="info-nav">
                <b-row>
                  <b-col class="col-1 mt-3">
                    To
                  </b-col>
                  <b-col>
                    <b-form-input
                      id="textarea"
                      v-model="text"
                      class="input-background"
                      style="width: 100%"
                      placeholder="Type the name of person or Business..."
                    ></b-form-input>
                  </b-col>
                </b-row>
              </div>

              <div class="bottom newMsg-bottom">
                <b-row>
                  <b-col cols="1"> </b-col>
                  <b-col cols="10">
                    <span style="display:inline-flex; " class="text-center">
                      <span class="a-icon ">
                        <b-icon class="msg-icon icon-size" icon="smiley" variant="primary"></b-icon>

                        <b-icon class="msg-icon primary" icon="paperclip"></b-icon>
                      </span>

                      <b-form-input
                        id="textarea"
                        v-model="text"
                        class="input-background"
                        style="width: 500px;"
                        placeholder="Enter something..."
                      ></b-form-input>

                      <span class="a-icon">
                        <b-icon @click="send" class="msg-icon primary icon-size " icon="cursor-fill"></b-icon>
                      </span>
                    </span>
                  </b-col>

                  <b-col cols="1"> </b-col>
                </b-row>
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
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      message: {
        type: '',
        name: 'Louis Litt',
        timeStamp: '',
        message: '',
      },
      newMsg: false,
      show: false,
      info: false,
      checked: false,
      text: '',
      chats: [
        {
          id: 0,
          type: 'received',
          name: 'Louis Litt',
          timeStamp: '3:00 PM',
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.',
        },
        {
          id: 1,
          type: 'sent',
          name: 'Louis Litt',
          timeStamp: '3:00 PM',
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.',
        },
        {
          id: 2,
          type: 'received',
          name: 'Louis Litt',
          timeStamp: '3:00 PM',
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.',
        },
        {
          id: 3,
          type: 'sent',
          name: 'Louis Litt',
          timeStamp: '3:00 PM',
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.',
        },
        {
          id: 4,
          type: 'received',
          name: 'Louis Litt',
          timeStamp: '3:00 PM',
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.',
        },
        {
          id: 5,
          type: 'sent',
          name: 'Louis Litt',
          timeStamp: '3:00 PM',
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos? Fuga, nam dolores? Tempora, qui.',
        },
      ],
      messages: [
        {
          id: 0,
          name: 'Blezour blec',
          startMessage: 'Hello Blec lola blec ',
          timeStamp: '3:00pm',
          messageCount: '10',
        },
        {
          id: 1,
          name: 'Blec blezour blec',
          startMessage: 'yoo nigga sup lola blec',
          timeStamp: '7:00am',
          messageCount: '60',
        },

        {
          id: 3,
          name: 'baba blecc ',
          startMessage: 'Lorem ipsum la lola blec vlr ',
          timeStamp: '9:00am',
          messageCount: '60',
        },
        {
          id: 4,
          name: 'Louis Litt',
          startMessage: 'Lorem  sit amet this is goo.',
          timeStamp: '6:00am',
          messageCount: '6',
        },
        {
          id: 5,
          name: 'Louis Litt',
          startMessage: 'Lorem this   sit amet.',
          timeStamp: '7:00am',
          messageCount: '100',
        },
        {
          id: 6,
          name: 'Louis Litt',
          startMessage: 'Lorem ithe amet.',
          timeStamp: '7:00am',
          messageCount: '3',
        },
        {
          id: 7,
          name: 'Louis Litt',
          startMessage: 'Lordol sit amet.',
          timeStamp: '7:00am',
          messageCount: '10',
        },
        {
          id: 8,
          name: 'Louis Litt',
          startMessage: 'Lorem vheck ',
          timeStamp: '7:00am',
          messageCount: '40',
        },
        {
          id: 9,
          name: 'Louis Litt',
          startMessage: 'Lorem papa .',
          timeStamp: '7:00am',
          messageCount: '15',
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
      console.log('hey');
      this.newMsg = arg;
      this.show = false;
    },
    send() {
      this.message.type = 'sent';
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      this.message.timeStamp = h + ':' + m;
      this.message.message = this.text;
      this.chats.push(this.message);
      this.text = '';
    },
  },
};
</script>

<style scoped>
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
  top: 30px;
  border: solid 2px rgb(223, 223, 223);
  margin-bottom: 100px;
  border-radius: 20px;
}

.chat-nav {
  position: relative;
  min-height: 70px;
  border-right: 2px solid #ccc;

  width: 100%;

  padding: 10px;
}
.chats {
  height: 710px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.back-image {
  background-image: url('../assets/message_back.jpg');
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
}
.txt {
  font-size: 13px;
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
  width: 60%;
  border-radius: 25px;
  color: #fff;
  background-color: #ed9970;
  padding: 10px;
  font-size: 12px;
}
.msg-text-sent {
  position: relative;
  min-width: 60%;
  border-radius: 25px;
  background-color: #bfbfbf;
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
  padding-left: 10px;

  height: 60px;

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

    width: 97%;
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
</style>
