<template>
  <div>
<<<<<<< HEAD
  
    <b-container>
      <div class="chat-box">
          <b-row>

      
            <b-col class="pr-0" cols="12" xl="4" v-if="show"  >
             
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
                    <h4 class="title m-10">Messages</h4>
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
                    :placeholder="$t('general.Search_inbox')"
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
                  

                     <span style="display:inline-flex mb-2">
              
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
              src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
               
              ></b-avatar>


              <h6 class="d-inline-block ml-2  ">
                <b class="bold"> {{message.name}}</b>
                 <p class="duration">{{ message.startMessage }}</p>
              </h6>
             </span>

            
                  </b-col>



                  <b-col class="col-2 text-center">
                    <small> {{ message.timeStamp }} </small> <p class="">   <b-badge variant="info"> {{ message.messageCount }} </b-badge>   </p>
                  </b-col>









                  </b-row>




                  





                </div>
              </div>
            </b-col>
        

            <b-col class="pr-0" >
            <div class="right ">
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
                  <h3 class="mt-4 title">Messages</h3>
                </b-col>
                <b-col>
                  <b-icon
                    @click="newMessage(true)"
                    class="new-message primary icon-size float-right"
                    icon="pencil-square"
                  ></b-icon>
                </b-col>
              </b-row>
              <input
                type="text"
                class="form-control input-background"
                :placeholder="$t('general.Search_inbox')"
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
                  <b-col class="col-9">
                  

                     <span style="display:inline-flex">
              
              <b-avatar
                class="d-inline-block profile-pic"
                variant="primary"
                src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
               
              ></b-avatar>


              <h6 class="mt-2  d-inline-block ml-2  ">
                <b class="bold"> {{message.name}}</b>
                 <p class="duration">{{ message.startMessage }}</p>
              </h6>
            </span>

            
                  </b-col>



                  <b-col class="col-3 text-center">
                    <small class="text-center"> {{ message.timeStamp }} </small> <p class="text-center">   <b-badge variant="info"> {{ message.messageCount }} </b-badge>   </p>
                  </b-col>



                </b-row>






              </div>
            </div>
           </b-col>
           <b-col v-if="show == false && info == false && newMsg == false" class="p-0 back-image " cols="12" xl="8" style="margin-right: 14px;"  >
         <div class="">  
            <div class="chat-nav shadow ">
              <b-row class="mobile">
                <b-col class="col-1">
                  <b-icon
                    @click="showMessages(true)"
                    icon="arrow-left"
                    aria-hidden="true"
                    class="primary "
                  ></b-icon>
                </b-col>
                <b-col class="col-3">
                  <b-avatar variant="primary" 
                  
                   src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                     size="40"
                  
                   ></b-avatar>
                </b-col>

                <b-col class="detale">
                  <h6>Louis Litt</h6>
                  <small>Online</small>
                </b-col>
                <b-col cols="3">
                  <b-row class="mt-3">
                    <b-col class="col-3">
                      <b-icon icon="search" class="primary" ></b-icon>
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
              <b-row class="desk">
                <b-col class="col-2">
                  <b-avatar variant="primary" 
                  src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                   size="60"></b-avatar>
                </b-col>
                <b-col class="detail">
                  <h5>Louis Litt</h5>
                  <p>{{$t('general.Online')}}</p>
                </b-col>
                <b-col class="col-4">
                  <b-row class="mt-3 ml-5">
                    <b-col class="col-3">
                      <b-icon
                        class="msg-icon primary icon-size"
                        icon="search"
                        
                      ></b-icon>
                    </b-col>
                   
                    <b-col>
                     


   




    




                      
                      
                <b-dropdown id="dropdown-1" class=" mt-md-0 drop-hover" no-caret dropleft  variant="outline-light" >
                  <template #button-content>
                    <b-icon-three-dots class="primary"></b-icon-three-dots>
                  </template>


                       


                        <b-dropdown-item-button  @click="showInfo(true)" >
                         
                         {{$t('general.View_Profile')}}
                        </b-dropdown-item-button>



                        <b-dropdown-item-button  >
                         {{$t('general.Disable_Notification')}}
                        </b-dropdown-item-button>



                         <b-dropdown-item-button  >
                         {{$t('general.Delete_Contact')}}
                        </b-dropdown-item-button>




                         <b-dropdown-item-button  >
                         {{$t('general.Delete_Chat')}}
                        </b-dropdown-item-button>



                      </b-dropdown>





                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              </div>

              <section class="chats" style="
             margin-left: 1px;">
              <div v-for="chat in chats" :key="chat.id">
                <div v-if="chat.type == 'received'" id="received">
                  <b-row class="p-4">
                    <b-avatar variant="primary"
                    
                    src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                    ></b-avatar>
                    <b-col>
                      <p>
                        <span class="name"> {{ chat.name }} </span>
                       
                      </p>
                      <p class="msg-text mt-0 text">
                        {{ chat.message }}
                        <span class="float-right mt-2 white " >   {{ chat.timeStamp }}  </span>   
                      </p>
                    </b-col>
                  </b-row>
                </div>
                <div v-if="chat.type == 'sent'">
                  <b-row class="p-4">
                    <b-col>
                      <p class="sent-name">
                        <span class="name">{{ chat.name }}</span
                        > 
                      </p>
                      <p id="sent" class="msg-text-sent text">
                        {{ chat.message }}  
                         <span class="float-right mt-2 white">   {{ chat.timeStamp }}  </span> 
                      </p>
                    </b-col>
                    <b-avatar variant="primary" src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                    
                    ></b-avatar>
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
                      
                      
                      </b-col>       <b-col cols="8"  class="p-0">   



      
       
        <b-form-input
                    id="textarea"
                    v-model="input"
                    class="input-background"
                  
                    :placeholder="$t('general.Enter_something')"
                  ></b-form-input>         



             <div class="wrapper">
   

    <emoji-picker @emoji="append" :search="search">
      <div
        class="emoji-invoker"
        slot="emoji-invoker"
        slot-scope="{ events: { click: clickEvent } }"
        @click.stop="clickEvent"
      >
        <svg height="24" viewBox="0 0 24 24" width="24" class="svgg" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
      </div>
      <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
        <div class="emoji-picker" :style="{ top: display.y + 'px', left: display.x + 'px' }">
          <div class="emoji-picker__search">
            <input type="text" v-model="search" v-focus>
          </div>
          <div>
            <div v-for="(emojiGroup, category) in emojis" :key="category">
              <h5>{{ category }}</h5>
              <div class="emojis">
                <span
                  v-for="(emoji, emojiName) in emojiGroup"
                  :key="emojiName"
                  @click="insert(emoji)"
                  :title="emojiName"
                >{{ emoji }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </emoji-picker>
  </div>     
                  

                  
   </b-col>
                    
   

      <b-col cols="2"  class="p-0">   

                      <b-icon
                        @click="send"
                        class="msg-icon primary icon-size icon-top "
                        icon="cursor-fill"
                      ></b-icon>
                  
   
           </b-col>    


    




              </b-row>
              <p v-if="checked" class="ml-5">
                {{ $t("general.You_have_blocked_messages_and_calls_from_this_user") }}.
                <b-link @click="showInfo(true)">{{ $t("general.Unblock_Now") }}</b-link>
              </p>
         </div>




         </div>
                </b-col>





          <b-col v-if="info">
            <div class="info-nav">
              <b-button class="primary-bg" @click="showInfo(false)">
               <fas-icon :icon="['fas', 'arrow-left']" />
              </b-button>
              <span class="cnt-info"> {{ $t("general.Contact_Info") }}</span>
            </div>
            <div class="info-bottom">
              <b-avatar
                class="info-avatar"
                variant="primary"
               src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                size="200"
              ></b-avatar>
              <div class="info-detail">
                <h1 class="info-name">Louis Litt</h1>
                <b-link class="primary">{{ $t("general.View_Profile") }}</b-link>
              </div>
            </div>
            <div>
              <ul>
                <li>{{ $t("general.Options") }}</li>
                <li>
                  <b-row
                    ><b-col>
                      {{ $t("general.Block_Messages") }}
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
                <li>{{ $t("general.Report_User") }}</li>
              </ul>
            </div>


            
          </b-col>
          <b-col v-if="newMsg == true && info == false" class="p-0 col-xl-8 col-12">
            <div class="new-msg back-image" style="margin-right: 17px;">
              <div class="info-nav">
                <b-row>
                  <b-col class="col-1 mt-3">
                    {{ $t("general.To") }}
                  </b-col>
                  <b-col>
                   
                    <b-form-input
                    id="textarea"
                    v-model="searchQuery"
                    class="input-background"
                    style="width: 100%"
                    :placeholder="$t('general.Type_the_name_of_person_or_Business')"
                     @click="showsearchh()"
                  ></b-form-input>  

         <br/>
                   
                   



        
           
        <div class="table-responsive"  v-if="showsearch == true"  style="overflow-x:hidden" >   

            <table v-if="resources.length" class="table">
                <thead>
                    <tr>
                        
                        <td>      <b-row>    <b-col cols="6">      <span class="bold " >  {{ $t("general.Send_to_all") }}   </span>   </b-col>    <b-col >  <span > 
                          
                           <input type="checkbox" @click="selectAll" v-model="allSelected" /> 

                           </span>       </b-col>  </b-row> </td>


                    </tr>
                </thead>
                <tbody>

                  <tr>     </tr>


                    <tr v-for="item in resultQuery" :key="item.key"   class="p-2 message"
                 >
                        <td>     
                          
                          <b-row>    <b-col cols="6">        <b-avatar
                class="d-inline-block "
                variant="primary"
                size="30"
               

                v-bind:src="item.profile"
               
              ></b-avatar>


   <span class="bold " >   {{item.name}}   </span>   </b-col>      <b-col>     <span > <b-form-checkbox class="" id="" name="" v-model="userIds"  :value="item.id" >


                  
                </b-form-checkbox>   </span>   </b-col>     </b-row>  </td>    
                    </tr>
                </tbody>

                
            </table>
            <b-button variant="primary" size="sm" class="pl-3 pr-3" >  {{ $t("general.Send") }}   </b-button>
        </div>
      
      





       





                  </b-col>
                </b-row>
              </div>





              <div class="bottom newMsg-bottom">
                <b-row>
                  
                  

   






                    <b-col cols="2" class="p-0">   

                      <b-icon
                        class="msg-icon primary icon-size     icon-top float-right text-right"
                        icon="paperclip"
                      ></b-icon>    
                      
                      
                      </b-col>       <b-col cols="8"  class="p-0">        





      
       
        <b-form-input
                    id="textarea"
                    v-model="text"
                    class="input-background"
                  
                    placeholder="Enter something..."
                  ></b-form-input>     

                  
   </b-col>
                    
   

      <b-col cols="2"  class="p-0">   

                      <b-icon
                        @click="send"
                        class="msg-icon primary icon-size icon-top "
                        icon="cursor-fill"
                      ></b-icon>
                  
   
           </b-col>    

    







                 
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  
=======
    <Inbox />
>>>>>>> main
  </div>
</template>

<script>
import Inbox from "@/components/businessf/tabs/owner/networks/inbox.vue";

export default {
  components: {
    Inbox,
  },
  data() {
    return {
      input: "",
      search: "",

      showsearch: true,
      selecteduser: false,

      allSelected: false,
      userIds: [],

      searchQuery: null,

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
      selected: [],
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
          name: "Blezour blec",
          startMessage: "Hello Blec lola blec ",
          timeStamp: "3:00pm",
          messageCount: "10",
        },
        {
          id: 1,
          name: "Blec blezour blec",
          startMessage: "yoo nigga sup lola blec",
          timeStamp: "7:00am",
          messageCount: "60",
        },

        {
          id: 3,
          name: "baba blecc ",
          startMessage: "Lorem ipsum la lola blec vlr ",
          timeStamp: "9:00am",
          messageCount: "60",
        },
        {
          id: 4,
          name: "Louis Litt",
          startMessage: "Lorem  sit amet this is goo.",
          timeStamp: "6:00am",
          messageCount: "6",
        },
        {
          id: 5,
          name: "Louis Litt",
          startMessage: "Lorem this   sit amet.",
          timeStamp: "7:00am",
          messageCount: "100",
        },
        {
          id: 6,
          name: "Louis Litt",
          startMessage: "Lorem ithe amet.",
          timeStamp: "7:00am",
          messageCount: "3",
        },
        {
          id: 7,
          name: "Louis Litt",
          startMessage: "Lordol sit amet.",
          timeStamp: "7:00am",
          messageCount: "10",
        },
        {
          id: 8,
          name: "Louis Litt",
          startMessage: "Lorem vheck ",
          timeStamp: "7:00am",
          messageCount: "40",
        },
        {
          id: 9,
          name: "Louis Litt",
          startMessage: "Lorem papa .",
          timeStamp: "7:00am",
          messageCount: "15",
        },
      ],
    };
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },

  methods: {
    insert(emoji) {
      this.input += emoji;
    },

    append(emoji) {
      this.input += emoji;
    },

    selectAll() {
      this.userIds = [];

      var userr;

      if (!this.allSelected) {
        for (userr in this.resources) {
          this.userIds.push(this.resources[userr].id);
        }
      }
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

  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    },
  },
};
</script>
