<template>
    <div class="header">
        <img src="./images/header-logo.png" alt="header logo"/>
        <div class="links-block">
            <router-link 
                class="mr-7 text-lg"
                to="/pokemon"
            >Pokemon</router-link>
            <router-link
                class="mrS-7 text-lg"
                to="/profile"
            >Profile</router-link>
        </div>
        <template>
            <button
            v-if="loggedIn"
            class="text-lg"
            @click="signOut"
            >Sign out
            </button>
            <button
                v-else 
                class="text-lg"
                @click="signIn"
            >Log In
            </button>
        </template>
    </div>
</template>

<script>
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    export default {
        data() {
            return {
                loggedIn: false
            }
        },
         mounted() {
            this.setupFirebase();
        },
        methods: {
            setupFirebase() {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        this.loggedIn = true;
                    } else {
                        this.loggedIn = false;
                    }
                });
            },
            signOut() {
               firebase.auth().signOut().then(() => {
                    this.$router.replace({ name: 'pokemon' });
                });
            }, 
            signIn() {
                this.$router.replace({ name: 'login' });
            }
        }
    }
</script>

<style lang="css" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.router-link-active {
    font-weight: 700;
    color: rgb(59 130 246);
}

.header img {
   width: 100px;
}
</style>
