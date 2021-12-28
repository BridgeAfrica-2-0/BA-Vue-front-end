<template>
  <div>
    <div class="row">
      <div class="col-3">
        <img src="../../../../assets/img/follow.jpg" height="200" alt="" />
      </div>
      <div class=" col details">
        <h4>
          <b-link class="link">{{ $t('general.Business_Name') }}</b-link>
        </h4>
        <p>
          <a href="">{{ $t('network.mywebsite_com') }}</a> <br />
          <strong>{{ $t('network.Category') }}:</strong> {{ $t('network.Business_Category') }} <br />
          <strong>{{ $t('network.Community') }}:</strong> {{ $t('network.11M_Community') }} <br />
          <strong>{{ $t('network.Location') }}:</strong> {{ $t('network.Neighbourhood') }}, {{ $t('network.City') }}, {{ $t('network.Country') }} <br />
          <strong>{{ $t('network.Keyword') }}:</strong> {{ $t('network.Keyword') }} 1 {{ $t('network.Keyword') }} 2 {{ $t('network.Keyword') }} 3 <br />
          <strong>{{ $t('network.About') }}:</strong> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. <b-link>{{ $t('network.Read_More') }}</b-link>
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
                  {{ $t('network.Message') }}</b-dropdown-item
                >

                <b-dropdown-item>
                  <b-icon icon="geo-alt" variant="primary"></b-icon> Get
                  {{ $t('network.Direction') }}</b-dropdown-item
                >
              </b-dropdown>
            </b-col>
            <b-col>
              <b-button class=" community  mt-2" size="sm">
                <b-icon icon="plus"></b-icon>
                {{ $t('network.Community') }}</b-button
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
