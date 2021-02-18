<template>
  <div>
    <b-card class="mb-2">
      <b-row>
        <b-col cols="1" class="m-0 p-0">
          <b-avatar
            class="d-inline-block"
            variant="info"
            src="https://placekitten.com/300/300"
          ></b-avatar>
        </b-col>
        <b-col cols="11" class="m-0 p-0">
          <b-form-textarea
            id="textarea-small"
            size="sm"
            placeholder="Whats On Your, <Name Here> ?"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" class="m-2 p-2">
          <span class="float-left">
            <b-button-group class="mr-1">
              <b-button title="Add Image" size="sm" variant="outline-primary">
                <b-icon icon="card-image" aria-hidden="true"></b-icon>
              </b-button>
              <b-button title="Add Movie" size="sm" variant="outline-primary">
                <b-icon icon="camera-video-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                title="Add Hyperlink"
                size="sm"
                variant="outline-primary"
              >
                <b-icon icon="link-45deg" aria-hidden="true"></b-icon>
              </b-button>
            </b-button-group>
          </span>
          <span class="float-right">
            <b-button variant="outline-primary" size="sm"
              ><b-icon icon="cursor-fill" variant="primary"></b-icon>
              Publish</b-button
            >
          </span>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
