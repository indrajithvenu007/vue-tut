<template>
    <div>
        <h1>Login</h1>
        <div>
            <input type="text" v-model="username" placeholder="username"/>
            <br>
            <input type="password" v-model="password" placeholder="password"/>
            <br>
            <button @click="doLogin">Login</button>
            <router-link to="/register">
                <a>Dont have an account?</a>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            const payload = {
                username: this.username,
                password: this.password
            }
            console.log(payload);
        }
    }
}
</script>

<style scoped>

</style>
