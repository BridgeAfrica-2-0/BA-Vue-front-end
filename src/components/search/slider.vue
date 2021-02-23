<template>
  <div>
  <b-card
    :title="title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2 "
  >
    <b-card-text class="text">
      ${{cost}}
      <p>
          <small>
              <span class="stock">
                  {{state}}
              </span>
          </small>
      </p>
    </b-card-text>
  </b-card>
  </div>
</template>

<script>
export default {
    props:['title', 'cost', 'state', 'image']
};
</script>

<style scoped>
.card{
  max-width: 200px;
  color: orange;
}
.text{
    color: #000;
}
.stock{
    color: green;
}
</style>
