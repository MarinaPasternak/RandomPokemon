<template>
    <div class="m-auto flex justify-between">
        <div class="login-form flex items-center justify-center flex-col p-6 max-w-sm bg-white">
            <h2 class="mb-3 text-lg text-center uppercase font-bold">Log In to continue</h2>
            <form @submit.prevent="pressed">
                <div class="login mb-3">
                    <input
                        class="
                            form-control
                            block 
                            w-full 
                            px-4 py-2 
                            text-xl 
                            font-normal 
                            text-gray-700 
                            bg-white 
                            border 
                            border-solid 
                            border-gray-300 
                            rounded 
                            transition 
                            ease-in-out 
                            focus:text-gray-700 
                            focus:bg-white 
                            focus:border-blue-600 
                            focus:outline-none
                            mb-3
                        "
                        type="text" 
                        placeholder="email" 
                        v-model="username" 
                    />
                </div>
                <div class="password mb-3">
                    <input 
                    class="
                        form-control
                        block 
                        w-full 
                        px-4 py-2 
                        text-xl 
                        font-normal 
                        text-gray-700 
                        bg-white 
                        border 
                        border-solid 
                        border-gray-300 
                        rounded 
                        transition 
                        ease-in-out 
                        focus:text-gray-700 
                        focus:bg-white 
                        focus:border-blue-600 
                        focus:outline-none
                        mb-3
                    "
                    type="password" 
                    placeholder="password" 
                    v-model="password" 
                />
                </div>
                <div class="flex">
                    <button class="rounded shadow m-auto px-4 py-2 bg-blue-200 text-blue-800 w-full font-semibold hover:bg-blue-800 hover:text-blue-200">
                        Login
                    </button>
                </div>
            </form>
            <div class="text-red-500 text-lg text-center" v-if="error">
                <p>{{ errorMessage }}</p>
            </div>
        </div>
        <div class="image-block flex justify-center items-center w-3/4 ml-4 bg-blue-200 rounded-l-lg">
            <img src="./images/pokemon-login-image.png" alt="Pokemon" class="h-96 p-8" />
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    export default {
        data() {
            return {
                username: '',
                password: '',
                error: false,
                errorMessage: ''
            };
        }, 
        methods: {
            pressed()  {
                if (!this.username || !this.password) {
                    this.error = true;
                    this.errorMessage = 'Both fields are required';
                    return;
                } else {
                    firebase
                    .auth()
                    .signInWithEmailAndPassword(this.username, this.password)
                    .then(() => {
                        this.$router.replace({ name: 'profile' });
                    })
                    .catch(() => {
                        this.error = true;
                        this.errorMessage = 'The username or password you entered is incorrect'
                    });
                }
            }
        }
        
    }
</script>

<style scoped>
</style>
