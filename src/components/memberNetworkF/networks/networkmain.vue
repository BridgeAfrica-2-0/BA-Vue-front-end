<template>
  <div>
    <div class="row">
      <div class="col-3">
        <img src="../../../../assets/img/follow.jpg" height="200" alt="" />
      </div>
      <div class=" col details">
        <h4>
          <b-link class="link">{{ $t('memnetwork.Business_Name') }}</b-link>
        </h4>
        <p>
          <a href="">{{ $t('memnetwork.mywebsite_com') }}</a> <br />
          <strong>{{ $t('memnetwork.Category') }}:</strong> {{ $t('memnetwork.Business_Category') }} <br />
          <strong>{{ $t('memnetwork.Community') }}:</strong> {{ $t('memnetwork.11M_Community') }} <br />
          <strong>{{ $t('memnetwork.Location') }}:</strong> {{ $t('memnetwork.Neighbourhood') }}, {{ $t('memnetwork.City') }}, {{ $t('memnetwork.Country') }} <br />
          <strong>{{ $t('memnetwork.Keyword') }}:</strong> {{ $t('memnetwork.Keyword') }} 1 {{ $t('memnetwork.Keyword') }} 2 {{ $t('memnetwork.Keyword') }} 3 <br />
          <strong>{{ $t('memnetwork.About') }}:</strong> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. <b-link>{{ $t('memnetwork.Read_More') }}</b-link>
        </p>
      </div>
      <div>
        <span class="btns">
          <b-row>
            <b-col>
              <b-dropdown
                id="dropdown-1"
                text="Contact"
                class="m-md-2 drop"
                variant="primary"
                size="sm"
              >
                <b-dropdown-item>
                  <b-icon icon="chat-fill" variant="primary"></b-icon>
                  {{ $t('memnetwork.Message') }}</b-dropdown-item
                >

                <b-dropdown-item>
                  <b-icon icon="geo-alt" variant="primary"></b-icon> Get
                  {{ $t('memnetwork.Direction') }}</b-dropdown-item
                >
              </b-dropdown>
            </b-col>
            <b-col>
              <b-button class=" community  mt-2" size="sm">
                <b-icon icon="plus"></b-icon>
                {{ $t('memnetwork.Community') }}</b-button
              >
            </b-col>
          </b-row>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #000;
}
a {
  text-decoration: black;
  color: #e75c18;
}

.btns {
  display: flex;
  margin-left: 120px;
}

.primary-bg {
  background-color: #e75c18;
  border: none;
  display: flex;
}

.primary-bg:hover {
  color: #fff;
}
.community {
  background-color: rgb(240, 240, 240);
  color: #000;
  border: none;
  display: flex;
}

@media only screen and (max-width: 768px) {
  .details {
    position: relative;
    top: 200px;
    left: -80px;
  }
  .btns {
    position: relative;
    top: 180px;
    left: -110px;
  }
  img {
    width: 270px;
  }
  h3 {
    font-size: 20px;
    margin-top: 10px;
  }
  .btn {
    display: flex;
  }
}
</style>
