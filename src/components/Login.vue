<template>
    <section class="section">
        <h1 class="title has-text-centered">
            Log in to your account
        </h1>
        <div class="columns is-mobile is-centered">
            <div class="column is-4">
                <form v-on:submit.prevent="submitForm">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input
                                class="input"
                                type="email"
                                v-model="email"
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
                                value="Login"
                                class="button is-primary"
                            />
                        </p>
                        <p class="control">
                            <a
                                class="button is-light"
                                @click="$router.push({ path: '/register' })"
                            >
                                Sign up
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
            email: null,
            password: null
        }
    },
    methods: {
        submitForm: async function() {
            const data = {
                email: this.email,
                password: this.password
            }
            this.$store
                .dispatch('login', data)
                .then(path => {
                    console.log(this)
                    this.$router.push({ path })
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
}
</script>
