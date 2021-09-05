<template>
  <div>
    <b-card class="post">
      <b-row class="mt-2">
        <b-col cols="12">
          <b-row>
            <b-col class="name-time">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://placekitten.com/300/300"
                size="4rem"
              ></b-avatar>
              <span class="ml-2 font-weight-bolder name">
                John Doe
              </span>
              <br />
              <span class="time">1h Ago</span>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.😛
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <img
                class="img-fluid"
                src="@/assets/img/photo1.jpg"
                alt="Photo1"
              />
            </b-col>
            <b-col class="mt-1">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                23</span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                123</span
              >
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col cols="1">
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                size="2rem"
              ></b-avatar>
            </b-col>
            <b-col cols="11">
              <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />
            </b-col>
          </b-row>
          <Comment />
          <b-row>
            <b-col class="col-1"></b-col>
            <b-col>
              <Comment />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import Comment from "../components/comment";
export default {
  components: {
    Comment
  }
};
</script>

<style scoped>
.corps {
  margin-top: 2rem !important;
}

.color-site {
  color: #e75c18;
}

p {
  text-align: left;
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

.time {
  position: relative;
  margin-left: 80px;
  top: -28px;
}

.name {
  position: relative;
  top: -10px;
}
@media only screen and (max-width: 768px) {
  .send-cmt {
    margin-left: 88%;
  }
  .post {
    margin-top: 10px;
  }
}
</style>
