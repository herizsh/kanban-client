<template>
    <section class="section">
        <h1 class="title">
            Your Boards
            <button class="button is-primary" @click="prompt">+ New</button>
        </h1>
        <!-- <h2 class="subtitle">Subtitle</h2> -->
        <div class="card-container">
            <div
                class="card"
                v-for="board in $store.state.boards"
                :key="board.id"
            >
                <header class="card-header">
                    <p class="card-header-title">
                        {{ board.title }}
                    </p>
                    <router-link
                        :to="{ path: `/board/${board.id}` }"
                        class="card-header-icon"
                        aria-label="more options"
                    >
                        Show
                    </router-link>
                </header>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#"
                        class="card-footer-item"
                        @click="deleteBoard(board.id)"
                    >
                        Delete
                    </a>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    created: async function() {
        this.$store.dispatch('getBoards')
    },
    methods: {
        prompt() {
            this.$buefy.dialog.prompt({
                message: `Type your new board`,
                inputAttrs: {
                    placeholder: 'e.g. Bugs',
                    maxlength: 20
                },
                trapFocus: true,
                onConfirm: value => {
                    this.$store.dispatch('newBoard', value)
                    // this.$buefy.toast.open(`Your name is: ${value}`)
                }
            })
        },
        deleteBoard(id) {
            this.$store.dispatch('removeBoard', id)
        }
    }
}
</script>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 0.5em;
}
</style>
