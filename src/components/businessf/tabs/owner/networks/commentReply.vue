<template>
  <div>
    <b-row class="mt-2">
      <b-col>
        <b-avatar
          variant="info"
          :src="item.network_picture"
          class="avat-comment"
        ></b-avatar>
        <span class="float-right post-options">
          <b-dropdown size="sm" variant="outline " class="primary">
            <template class="more" #button-content> </template>
            <b-dropdown-item>{{ $t('network.Edit') }}</b-dropdown-item>
            <b-dropdown-item>{{ $t('network.Delete') }}</b-dropdown-item>
          </b-dropdown>
        </span>
        <p class="msg text">
          <read-more
            :more-str="$t('search.read_more')"
            :text="item.comment"
            link="#"
            :less-str="$t('search.read_less')"
            :max-chars="15000"
          >
          </read-more>
          
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.item);
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    uuid: {
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: function (value) {
        if (["reply"].includes(value)) return true;
      },
      default: function () {
        return "reply";
      },
    },
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.msg {
  background-color: #ddd;
  padding: 20px;
  border-radius: 25px;
  border: solid 1px #ccc;
  margin-left: 40px;
  margin-top: -40px;
}
.reply {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.comment {
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 35px;
  padding-left: 10px;
}
.comment:focus {
  outline: none;
}
.send-cmt {
  position: relative;
  margin-left: 95%;
  top: -28px;
  cursor: pointer;
}
@media only screen and (max-width: 768px) {
  .send-cmt {
    margin-left: 88%;
  }

  .avat-comment {
    width: 40px;
    height: 40px;
  }
}

@media only screen and (min-width: 768px) {
  .avat-comment {
    width: 36px;
    height: 36px;
  }
}
</style>


<style>
#readmore {
  color: #e75c18;
}
</style>