<template>
    <section class="section">
        <h1 class="title has-text-centered">
            Create new account
        </h1>
        <div class="columns is-mobile is-centered">
            <div class="column is-4">
                <form v-on:submit.prevent="submitForm">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control has-icons-left has-icons-right">
                            <input
                                class="input"
                                v-model="name"
                                type="text"
                                placeholder="Name input"
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input
                                class="input"
                                v-model="email"
                                type="email"
                                placeholder="Email input"
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left has-icons-right">
                            <input
                                class="input"
                                v-model="password"
                                type="password"
                                placeholder="Password input"
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-key"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field is-grouped is-vcentered">
                        <p class="control">
                            <input
                                type="submit"
                                value="Register"
                                class="button is-primary"
                            />
                        </p>
                        <p class="control">
                            <a
                                class="button is-light"
                                @click="$router.push({ path: '/login' })"
                            >
                                Cancel
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            name: null,
            email: null,
            password: null
        }
    },
    methods: {
        submitForm: async function() {
            const data = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            this.$store
                .dispatch('register', data)
                .then(path => {
                    this.$router.push({ path })
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
}
</script>
