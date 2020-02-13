<template>
    <div>
        <form v-on:submit.prevent="submitForm">
            <input type="text" v-model="title" />
            <input type="submit" value="Add Board" />
        </form>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            title: null
        }
    },
    methods: {
        submitForm: async function() {
            this.$store.dispatch('newBoard', this.title)
        }
    }
}
</script>
