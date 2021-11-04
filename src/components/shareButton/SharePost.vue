<template>
  <b-modal :id="id" hide-footer title="Write post">
    <div class="d-flex align-items-center py-1 px-2">
      <b-avatar class="mr-3"></b-avatar>
      <p>
        <span class="mr-auto">Share as</span><br />
        <span class="mr-auto">J. Circlehead</span>
      </p>
    </div>
    <div>
      <b-form-textarea placeholder="What your mind" class="input-search"></b-form-textarea>

      <div class="body mb-3 py-1">
        <img class="img-fluid" src="https://i.wifegeek.com/200426/4085d03b.jpg" />
        <p class="ft">
          Le lorem ipsum est, en imprimerie, une provisoire pour calibrer une mise en page, le texte définitif venant
          remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un
          texte en faux latin, le Lorem ipsum ou Lipsum.
        </p>
      </div>
    </div>
    <Button
      title="Publish"
      styleClass="btn shadow  btn btn-bg flexx pobtn p-2 btn-primary btn-sm btn-block btn-primary btn-sm btn-block"
    />
  </b-modal>
</template>

<script>
import Button from '@/components/Button';
export default {
  props: ['id'],
  components: {
    Button,
  },
};
</script>

<style scoped>
.input-search {
  border: none;
}
.ft {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-align: justify;
  font-size: 14px;
}

.body {
  border: 1px solid rgb(229 228 237);
}
</style>
