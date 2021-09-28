<template>
    <b-button
        block
        size="sm"
        class="b-background flexx pobtn shadow"
        variant="primary"
    >
        <i :class="fas"></i>
        <span class="btn-com">{{title}}</span>
    </b-button>
</template>

<script>
export default {
    props:{
        title:{
            required: true
        },
        fas:{
            type:String
        }
    }
}
</script>