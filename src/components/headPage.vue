<template>
  <div>
  
      <img
        src="@/assets/img/banner.jpg"
        class="img-fluid header-pic"
      />
        <b-container fluid>
      <div>
        <b-avatar
          src="https://placekitten.com/300/300"
          class="owner-profile-image-profile float-left"
          badge-variant="primary"
        >
          <template #badge
            ><b-icon icon="camera-fill" class="avatar-header-icon"></b-icon
          ></template>
        </b-avatar>
        <div class="">
          <div>
            <span>
              <h5
                class="font-weight-bolder m-0 p-0 d-inline-block header-text1"
              >
                User Name
              </h5>
              <br />
              <p class="m-0  d-inline-block header-text2">
                @User Name Alias <br>
                <small>2.5k Community</small>
              </p>
            </span>
            <span>
              <b-button-group class="header-group" size="sm">
                <b-button class="primary btn">
                  <b-icon class="primary" icon="person-plus-fill"></b-icon>
                  <span class="show primary">Community</span>
                </b-button>
                <b-button>
                  <b-icon icon="chat-square-dots-fill" class="primary"></b-icon>
                  <span class="show primary"> Message</span>
                </b-button>
                <b-dropdown class="drop-down dots btns">
                  <template class="btns" #button-content>
                    <b-icon class="primary btns" icon="three-dots" aria-hidden="true"></b-icon>
                  </template>
                  <b-dropdown-item-button >
                    <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                    Locked <span class="sr-only">(Click to unlock)</span>
                  </b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-group header="Choose options" class="small">
                    <b-dropdown-item-button>
                      <b-icon icon="blank" aria-hidden="true"></b-icon>
                      Option A <span class="sr-only">(Not selected)</span>
                    </b-dropdown-item-button>
                    <b-dropdown-item-button>
                      <b-icon icon="check" aria-hidden="true"></b-icon>
                      Option B <span class="sr-only">(Selected)</span>
                    </b-dropdown-item-button>
                    <b-dropdown-item-button>
                      <b-icon icon="blank" aria-hidden="true"></b-icon>
                      Option C <span class="sr-only">(Not selected)</span>
                    </b-dropdown-item-button>
                  </b-dropdown-group>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button>Some action</b-dropdown-item-button>
                  <b-dropdown-item-button
                    >Some other action</b-dropdown-item-button
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button variant="danger">
                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                    Delete
                  </b-dropdown-item-button>
                </b-dropdown>
              </b-button-group>
            </span>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "headPage"
};
</script>

<style scoped>
.btn {
  background-color: #fff;
  opacity: 0.8;
  border: solid 1px  #e75c18;
}
.dots{
  border: solid 1px  #e75c18;
}
.btns{
  background-color: #fff;
  opacity: 0.8;
}
.header-group{
  position: relative;
  top: -100px;
  left: -50px;
}
@media (max-width: 369px) {
  .header-pic {
    height: 100px;
    width: 100%;
  }

  .header-text1 {
    font-size: 14px;
    float: left;
  }

.text-box {
  margin-top: 1.5rem;
  text-align: left;
}

.position-loup {
  display: none;
}

  .owner-profile-image-profile {
    margin: -30px 10px 0px 5px;
    z-index: 9;
    width: 5rem;
    height: 5rem;
    border: 1px solid #e75c18;
  }
  .show {
    display: none;
  }
  .avatar-header-icon {
    width: 2em;
    height: 2em;
  }
  .b-avatar .b-avatar-badge {
    position: absolute;
    min-height: 1.5em;
    min-width: 1.5em;
    padding: 0.25em;
    line-height: 1;
    border-radius: 10em;
    font-size: 70%;
    font-weight: 700;
    z-index: 1;
    bottom: -2px;
    right: 2px;
  }
}

@media (max-width: 575.98px) {
  .img-avatar {
    width: 5em;
    height: 5em;
    margin-top: 5px;
  }

  .options {
    display: none;
  }

  .avatar-header-icon {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    left: 63px;
    top: 51px;
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 4px;
  }

  .text-box {
    margin: 0px;
    margin-top: 7px;
    text-align: left;
  }

  .position-loup {
    margin-top: -27px;
    display: inherit;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
  .b-avatar .b-avatar-badge {
    position: absolute;
    min-height: 1.5em;
    min-width: 1.5em;
    padding: 0.25em;
    line-height: 1;
    border-radius: 10em;
    font-size: 70%;
    font-weight: 700;
    z-index: 1;
    bottom: 10px;
    right: 10px;
  }
}
@media (min-width: 1400px) {
  .owner-profile-image-profile {
    margin: 0px 10px 0px 228px;
    z-index: 9;
    width: 12rem;
    height: 12rem;
    border: 3px solid #fff;
    
  }

  .header-text1 {
    float: left;
  }

  .header-text2 {
    float: left;
  }

  .header-group {
    float: right;
    margin-top: -20px;
    margin-right: 20px;
  }

  .avatar-header-icon {
    width: 3em;
    height: 3em;
  }
  .b-avatar .b-avatar-badge {
    position: absolute;
    min-height: 1.5em;
    min-width: 1.5em;
    padding: 0.25em;
    line-height: 1;
    border-radius: 10em;
    font-size: 70px;
    font-weight: 700;
    z-index: 1;
    bottom: 5px;
    right: 10px;
  }
}
</style>
