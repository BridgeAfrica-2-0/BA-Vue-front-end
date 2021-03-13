<template>
  <div>
    <div class="comment">
      <b-dropdown
        class="options float-right"
        variant="outline"
        size="sm"
        id="dropdown-left"
      >
            <template #button-content>
              <b-icon icon="three-dots" aria-hidden="true"></b-icon>
            </template>
            <b-dropdown-item-button>
              <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
              Edit
            </b-dropdown-item-button>
            <b-dropdown-item-button>
              <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              Delete
            </b-dropdown-item-button>
      </b-dropdown>
      <h4>Username</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero, amet
        incidunt minus quisquam officiis sapiente beatae magnam facilis. Nihil
        voluptatibus reiciendis suscipit rem, illo reprehenderit corrupti
        similique laudantium iusto.
      </p>
    </div>
    <b-row>
      <b-col class="mt-1">
        <span class="mr-3"
          ><b-icon
            icon="suit-heart"
            variant="primary"
            aria-hidden="true"
          ></b-icon>
          23</span
        >
        <span class="reply">Reply</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.comment {
  border: solid 1px rgb(148, 144, 144);
  border-radius: 25px;
  padding: 10px;
  margin-top: 10px;
  background-color: #ccc;
}
.reply {
  color: blue;
  cursor: pointer;
}
</style>
