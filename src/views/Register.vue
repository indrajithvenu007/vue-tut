<template>
    <div>
        <h1>Register</h1>
        <div>
            <input type="text" v-model="username" placeholder="username"/>
            <br>
            <input type="password" v-model="password" placeholder="password"/>
            <br>
            <button @click="doRegister">Register</button>
            <router-link to="/login">
                <a>Already registered?</a>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        doRegister() {
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
