<template>
    <div>
        <h1>Board:</h1>
        <p>{{ board.title }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            board: {}
        }
    },
    created: async function() {
        this.board = (await this.$store.dispatch('getBoard', this.$route.params.id)).data.data
    }
}
</script>
