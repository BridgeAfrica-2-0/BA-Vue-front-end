<template>
  <div>
    <Inbox />
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
