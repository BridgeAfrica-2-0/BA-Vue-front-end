<template>
  <div>
    <b-row class="mt-2">
      <b-col>
          <b-avatar
          variant="info"
          :src="comment.comment_user_profile_picture"
          
          class="avat-comment"
        ></b-avatar>
        <span class="float-right">
          <b-dropdown size="sm" variant="outline "  class="primary">
            <template class="more" #button-content>
             
            </template>
            <b-dropdown-item> {{$t("search.Edit")}} </b-dropdown-item>
            <b-dropdown-item>{{$t("search.Delete")}}</b-dropdown-item>
          </b-dropdown>
        </span>
        <p class="msg text">
            <read-more :more-str="$t('search.read_more')" :text="comment.text" link="#" :less-str="$t('search.read_less')" :max-chars="15000" > </read-more>
        </p>
   
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props:['comment'],
};
</script>

<style scoped>
.msg{
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


  .avat-comment{
   width: 40px;
      height: 40px;  
}


}



@media only screen and (min-width: 768px) {
  


  .avat-comment{
     width: 36px;
      height: 36px;    
}


}


</style>


<style>   #readmore{
  color: #e75c18;

}
     </style>