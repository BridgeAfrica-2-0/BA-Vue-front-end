<template>
  <div>
    <div class="people">
      <b-row>
        <b-col>
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
            class="avata"
          ></b-avatar>
        </b-col>
        <b-col>
          <div class="details">
            <h4>Maxine Moffet</h4>
            <p>74 Community</p>
          </div>
        </b-col>
        <b-col class="btns">
          <b-button variant="primary" size="sm" class="mb-2">
            <b-icon icon="chat" class="ico"> </b-icon>
            <span> Message</span>
          </b-button>
          <br />
          <b-button variant="primary" size="sm">
            <b-icon icon="plus-circle" class="ico"> </b-icon>
            <span> Community</span>
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped>
.business {
  border-bottom: 1px solid #ccc;
}
.buttons {
  margin-left: 120px;
}
.lnk {
  margin-left: 260px;
}
p {
  margin-left: -210px;
}

.drop {
  left: 1px;
}
.community {
  border: none;
  display: flex;
}

.card {
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
}

.people {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  background: white;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}

.btns {
  position: relative;
  left: 100px;
  top: 5px;
}
.details {
  position: relative;
  left: -180px;
  top: 20px;
}
.details p {
  position: relative;
  left: 150px;
  font-size: 15px;
  top: -10px;
}
h4 {
  position: relative;
  left: -60px;
}
@media only screen and (max-width: 768px) {
  .button {
    margin-left: 0px;
  }
  .lnk {
    margin-left: 50px;
  }
  p {
    margin-left: -50px;
    font-size: 15px;
  }
  .drop {
    left: 10px;
  }
  .community {
    position: relative;
    top: 8px;
  }

  .btns {
    margin-bottom: 20px;
    left: 45px;
  }
  .min {
    margin-left: -50px;
  }
}
</style>
