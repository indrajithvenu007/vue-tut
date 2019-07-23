<template>
    <div class="beet" @click="deleteBeet(beet.beat_id)">
        <p>{{ beet.beat_id }}</p>
        <p>{{ beet.beat_text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Beet',
    props: {
        beet: Object
    },
    methods: {
        deleteBeet(id) {
            // console.log(this)
            this.$emit('delete_beet', id);
        }
    }
}
</script>

<style scoped>
    .beet{
        border: 1px solid black;
    }
</style>

